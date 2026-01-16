type ExploreItem = {
  title: string;
  description: string;
};

const exploreItems: ExploreItem[] = [
  {
    title: "AI Strategy",
    description:
      "Aligning AI initiatives with business goals to drive measurable impact.",
  },
  {
    title: "Human + AI Skills",
    description:
      "Identifying the critical skills leaders and teams need in the AI era.",
  },
  {
    title: "Learning at Scale",
    description:
      "Building scalable learning ecosystems for rapid workforce transformation.",
  },
  {
    title: "From Pilot to Production",
    description:
      "Moving AI initiatives from experimentation to enterprise-wide adoption.",
  },
  {
    title: "Governance & Ethics",
    description:
      "Ensuring responsible AI use with strong governance frameworks.",
  },
  {
    title: "Change Management",
    description:
      "Helping organizations adapt culture and processes for AI-driven change.",
  },
];

export default function ExploreSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-sl-text mb-10">
          What We’ll Explore
        </h2>

        {/* Card grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {exploreItems.map((item) => (
            <div
              key={item.title}
              className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Icon placeholder */}
              <div className="mb-4 text-sl-orange text-xl">◆</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-sl-text mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-sl-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
