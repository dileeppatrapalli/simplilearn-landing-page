type Speaker = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: "Rob Lusher",
    title: "Chief Learning Officer, Leading Enterprise",
    bio: "Rob brings extensive experience in enterprise learning strategy and digital transformation, helping organizations scale skills for the future.",
    image: "/speaker-placeholder.png",
  },
  {
    name: "Krishna Kumar",
    title: "VP – Talent & Transformation",
    bio: "Krishna specializes in workforce transformation and AI-driven talent strategies across global organizations.",
    image: "/speaker-placeholder.png",
  },
  {
    name: "Sujata Mitra",
    title: "Global HR Leader",
    bio: "Sujata has led large-scale HR transformations, focusing on leadership development and future-ready skills.",
    image: "/speaker-placeholder.png",
  },
];

export default function SpeakersSection() {
  return (
    <section className="bg-sl-blue py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Featured Speakers
        </h2>

        {/* Speakers list */}
        <div className="space-y-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col md:flex-row gap-6 bg-white/10 rounded-lg p-6"
            >
              {/* Image */}
              <div className="w-24 h-24 rounded-md bg-white/20 shrink-0" />

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold">
                  {speaker.name}
                </h3>
                <p className="text-sm text-white/80 mb-2">
                  {speaker.title}
                </p>
                <p className="text-sm text-white/90">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
