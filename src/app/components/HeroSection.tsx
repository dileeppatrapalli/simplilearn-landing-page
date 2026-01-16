export default function HeroSection() {
  return (
    <section className="bg-sl-dark text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Logo */}
        <div className="mb-6">
          <span className="text-sm font-semibold tracking-wide">
            simplilearn
          </span>
        </div>

        {/* Event tag */}
        <div className="mb-4">
          <span className="inline-block bg-white/10 px-3 py-1 text-xs rounded">
            Round Table | AI
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          The Skills That Matter Next:
          <br />
          Preparing Your Workforce & Leaders for the AI Era
        </h1>

        {/* Meta info */}
        <div className="mt-6 flex flex-col gap-2 text-sm text-gray-300">
          <span>📅 February 20, 2025</span>
          <span>📍 Chamberlain’s Steak & Fish House, Dallas</span>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="bg-sl-orange text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
            RSVP Now
          </button>
        </div>
      </div>
    </section>
  );
}
