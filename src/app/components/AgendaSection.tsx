type AgendaItem = {
  title: string;
  description: string;
};

const agendaItems: AgendaItem[] = [
  {
    title: "Welcome & Introductions",
    description:
      "An opening session to set the context, objectives, and expectations for the roundtable.",
  },
  {
    title: "Keynote Discussion",
    description:
      "Exploring how AI is reshaping leadership, talent development, and organizational strategy.",
  },
  {
    title: "Panel Conversation",
    description:
      "An interactive discussion with industry leaders sharing practical insights and experiences.",
  },
];

export default function AgendaSection() {
  return (
    <section className="bg-sl-cyan py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">
          Event Agenda
        </h2>

        {/* Agenda cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {agendaItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-sl-text mb-3">
                {item.title}
              </h3>
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
