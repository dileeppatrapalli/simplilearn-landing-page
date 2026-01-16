export default function InsightsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-sl-text mb-6">
              Go behind the curtain with real examples and high-scale insights
            </h2>

            <ul className="space-y-4 text-sm text-sl-muted mb-8">
              <li className="flex gap-3">
                <span className="text-sl-orange font-bold">•</span>
                Learn how organizations are successfully operationalizing AI
                initiatives at scale.
              </li>
              <li className="flex gap-3">
                <span className="text-sl-orange font-bold">•</span>
                Understand the pitfalls leaders face when adopting AI-driven
                transformation.
              </li>
              <li className="flex gap-3">
                <span className="text-sl-orange font-bold">•</span>
                Explore proven frameworks for aligning talent strategy with AI
                innovation.
              </li>
            </ul>

            <button className="bg-sl-orange text-white px-6 py-3 remember rounded-md font-semibold hover:opacity-90 transition">
              RSVP Now
            </button>
          </div>

          {/* Right visual placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-400">
              Visual Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
