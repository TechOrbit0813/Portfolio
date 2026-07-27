import type { ReactNode } from "react";

type MarkdownMessageProps = {
  content: string;
};

type TableRow = string[];

const INLINE_MARKDOWN_PATTERN =
  /(\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)|`([^`]+)`|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\n]+)\*|_([^_\n]+)_)/g;

function getSafeLink(href: string) {
  if (href.startsWith("#") || href.startsWith("/")) {
    return href;
  }

  try {
    const url = new URL(href);

    if (["http:", "https:", "mailto:"].includes(url.protocol)) {
      return href;
    }
  } catch {
    return null;
  }

  return null;
}

function renderInlineMarkdown(text: string, keyPrefix = "inline"): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let matchIndex = 0;

  const inlinePattern = new RegExp(INLINE_MARKDOWN_PATTERN.source, "g");

  while ((match = inlinePattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const key = `${keyPrefix}-${matchIndex}`;

    if (match[2] && match[3]) {
      const href = getSafeLink(match[3]);

      nodes.push(
        href ? (
          <a
            key={key}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="font-medium text-blue-300 underline decoration-blue-400/50 underline-offset-2 transition hover:text-blue-200"
          >
            {renderInlineMarkdown(match[2], `${key}-link`)}
          </a>
        ) : (
          match[0]
        ),
      );
    } else if (match[4]) {
      nodes.push(
        <code
          key={key}
          className="rounded-md border border-slate-600/80 bg-slate-950/80 px-1.5 py-0.5 font-mono text-[0.86em] text-blue-200"
        >
          {match[4]}
        </code>,
      );
    } else if (match[5] || match[6]) {
      const value = match[5] || match[6];
      nodes.push(
        <strong key={key} className="font-semibold text-slate-50">
          {renderInlineMarkdown(value, `${key}-strong`)}
        </strong>,
      );
    } else if (match[7] || match[8]) {
      const value = match[7] || match[8];
      nodes.push(
        <em key={key} className="italic text-slate-200">
          {renderInlineMarkdown(value, `${key}-emphasis`)}
        </em>,
      );
    }

    lastIndex = inlinePattern.lastIndex;
    matchIndex += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function isFence(line: string) {
  return /^```/.test(line.trim());
}

function isHeading(line: string) {
  return /^#{1,4}\s+/.test(line.trim());
}

function isUnorderedListItem(line: string) {
  return /^\s*[-+*]\s+/.test(line);
}

function isOrderedListItem(line: string) {
  return /^\s*\d+[.)]\s+/.test(line);
}

function isBlockquote(line: string) {
  return /^\s*>\s?/.test(line);
}

function isHorizontalRule(line: string) {
  return /^\s*((-{3,})|(\*{3,})|(_{3,}))\s*$/.test(line);
}

function isTableDivider(line: string) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function splitTableRow(line: string): TableRow {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function startsBlock(lines: string[], index: number) {
  const line = lines[index] || "";
  const nextLine = lines[index + 1] || "";

  return (
    !line.trim() ||
    isFence(line) ||
    isHeading(line) ||
    isUnorderedListItem(line) ||
    isOrderedListItem(line) ||
    isBlockquote(line) ||
    isHorizontalRule(line) ||
    (line.includes("|") && isTableDivider(nextLine))
  );
}

export function MarkdownMessage({ content }: MarkdownMessageProps) {
  const lines = content.replace(/\r\n?/g, "\n").trim().split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;
  let blockIndex = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (isFence(line)) {
      const language = line.trim().slice(3).trim();
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !isFence(lines[index])) {
        codeLines.push(lines[index]);
        index += 1;
      }

      if (index < lines.length) {
        index += 1;
      }

      blocks.push(
        <div key={`code-${blockIndex}`} className="my-3 overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
          {language ? (
            <div className="border-b border-slate-700 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
              {language}
            </div>
          ) : null}
          <pre className="overflow-x-auto p-3 text-xs leading-5 text-slate-200">
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>,
      );
      blockIndex += 1;
      continue;
    }

    const headingMatch = line.trim().match(/^(#{1,4})\s+(.+)$/);

    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingClasses =
        level === 1
          ? "mt-1 text-base font-semibold text-white"
          : "mt-2 text-sm font-semibold text-white";

      blocks.push(
        <div key={`heading-${blockIndex}`} className={headingClasses}>
          {renderInlineMarkdown(headingMatch[2], `heading-${blockIndex}`)}
        </div>,
      );
      index += 1;
      blockIndex += 1;
      continue;
    }

    if (isUnorderedListItem(line)) {
      const items: string[] = [];

      while (index < lines.length && isUnorderedListItem(lines[index])) {
        items.push(lines[index].replace(/^\s*[-+*]\s+/, "").trim());
        index += 1;
      }

      blocks.push(
        <ul key={`unordered-list-${blockIndex}`} className="my-2.5 space-y-1.5 pl-5 marker:text-blue-400">
          {items.map((item, itemIndex) => (
            <li key={`unordered-item-${blockIndex}-${itemIndex}`} className="list-disc pl-0.5">
              {renderInlineMarkdown(item, `unordered-${blockIndex}-${itemIndex}`)}
            </li>
          ))}
        </ul>,
      );
      blockIndex += 1;
      continue;
    }

    if (isOrderedListItem(line)) {
      const items: string[] = [];

      while (index < lines.length && isOrderedListItem(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+[.)]\s+/, "").trim());
        index += 1;
      }

      blocks.push(
        <ol key={`ordered-list-${blockIndex}`} className="my-2.5 space-y-1.5 pl-5 marker:font-semibold marker:text-blue-300">
          {items.map((item, itemIndex) => (
            <li key={`ordered-item-${blockIndex}-${itemIndex}`} className="list-decimal pl-1">
              {renderInlineMarkdown(item, `ordered-${blockIndex}-${itemIndex}`)}
            </li>
          ))}
        </ol>,
      );
      blockIndex += 1;
      continue;
    }

    if (isBlockquote(line)) {
      const quoteLines: string[] = [];

      while (index < lines.length && isBlockquote(lines[index])) {
        quoteLines.push(lines[index].replace(/^\s*>\s?/, "").trim());
        index += 1;
      }

      blocks.push(
        <blockquote
          key={`quote-${blockIndex}`}
          className="my-2.5 border-l-2 border-blue-400/70 bg-slate-900/50 py-2 pl-3 pr-2 text-slate-300"
        >
          {renderInlineMarkdown(quoteLines.join(" "), `quote-${blockIndex}`)}
        </blockquote>,
      );
      blockIndex += 1;
      continue;
    }

    if (line.includes("|") && isTableDivider(lines[index + 1] || "")) {
      const headers = splitTableRow(line);
      const rows: TableRow[] = [];
      index += 2;

      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }

      blocks.push(
        <div key={`table-${blockIndex}`} className="my-3 overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full min-w-max border-collapse text-left text-xs">
            <thead className="bg-slate-950/70 text-slate-100">
              <tr>
                {headers.map((header, cellIndex) => (
                  <th key={`header-${blockIndex}-${cellIndex}`} className="border-b border-slate-700 px-3 py-2 font-semibold">
                    {renderInlineMarkdown(header, `header-${blockIndex}-${cellIndex}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`row-${blockIndex}-${rowIndex}`} className="border-b border-slate-700/70 last:border-b-0">
                  {headers.map((_, cellIndex) => (
                    <td key={`cell-${blockIndex}-${rowIndex}-${cellIndex}`} className="px-3 py-2 align-top text-slate-300">
                      {renderInlineMarkdown(row[cellIndex] || "", `cell-${blockIndex}-${rowIndex}-${cellIndex}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      blockIndex += 1;
      continue;
    }

    if (isHorizontalRule(line)) {
      blocks.push(<hr key={`rule-${blockIndex}`} className="my-3 border-slate-700" />);
      index += 1;
      blockIndex += 1;
      continue;
    }

    const paragraphLines = [line.trim()];
    index += 1;

    while (index < lines.length && !startsBlock(lines, index)) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    blocks.push(
      <p key={`paragraph-${blockIndex}`} className="my-2 first:mt-0 last:mb-0">
        {renderInlineMarkdown(paragraphLines.join(" "), `paragraph-${blockIndex}`)}
      </p>,
    );
    blockIndex += 1;
  }

  return <div className="break-words leading-6 text-slate-200">{blocks}</div>;
}
