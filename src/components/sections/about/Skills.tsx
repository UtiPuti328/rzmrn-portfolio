import Container from "@/components/ui/Container";

const SKILL_GROUPS = [
  {
    title: "Post-Production",
    skills: [
      "Cinematic Editing",
      "Color Grading",
      "Sound Design",
      "Conforming & Finishing",
      "VFX Supervision",
    ],
  },
  {
    title: "Motion Design",
    skills: [
      "Title Sequences",
      "Brand Animation",
      "UI/UX Motion",
      "Generative Art",
      "Typography Animation",
    ],
  },
  {
    title: "Tools",
    skills: [
      "DaVinci Resolve",
      "After Effects",
      "Premiere Pro",
      "Cinema 4D",
      "Nuke",
      "Blender",
    ],
  },
  {
    title: "Direction",
    skills: [
      "Creative Direction",
      "Visual Storytelling",
      "Storyboarding",
      "Production Management",
      "Client Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          Capabilities
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-text-secondary">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
