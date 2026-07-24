import { about, education, experience, hero, profile, projects, skills } from "@/lib/data";

function list(values: string[]) {
  return values.join(", ");
}

export function buildPortfolioKnowledge() {
  const skillSummary = skills
    .map((group) => `${group.title}: ${list(group.items.map((item) => item.name))}`)
    .join("\n");

  const experienceSummary = experience
    .map(
      (role) =>
        `${role.title} at ${role.company} (${role.period}, ${role.location})\n${role.points
          .map((point) => `- ${point}`)
          .join("\n")}`,
    )
    .join("\n\n");

  const projectSummary = projects
    .filter((project) => !project.hidden)
    .map(
      (project) =>
        `${project.title}\nDescription: ${project.description}\nTechnology: ${list(project.stack)}\nPublic link: ${project.demo}`,
    )
    .join("\n\n");

  const educationSummary = education
    .map(
      (item) =>
        `${item.degree}, ${item.school}. ${item.description} Highlights: ${list(item.highlights)}.`,
    )
    .join("\n");

  return `
PORTFOLIO OWNER
Name: ${profile.name}
Professional title: ${profile.title}
Location: ${profile.location}
Availability: ${hero.availability}
Professional summary: ${profile.tagline}

CAREER OVERVIEW
${about.paragraphs.join("\n")}

EXPERIENCE
${experienceSummary}

TECHNICAL SKILLS
${skillSummary}

SELECTED PROJECTS
${projectSummary}

EDUCATION
${educationSummary}
  `.trim();
}
