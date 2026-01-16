export default function OverviewSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-base text-sl-text mb-6">
          As AI reshapes organizations across industries, leaders are being
          challenged to rethink how they develop talent, drive innovation,
          and scale responsibly.
        </p>

        <div className="border-l-4 border-sl-orange pl-4 mb-6">
          <p className="font-semibold text-sl-text">
            Which capabilities will matter most, and how do we build them at scale?
          </p>
        </div>

        <p className="text-sm text-sl-muted mb-8">
          This invite-only roundtable brings CHROs, CLOs, and senior executives
          together to discuss how organizations can prepare their workforce
          for the AI era.
        </p>

        <button className="border border-sl-orange text-sl-orange px-6 py-3 rounded-md font-semibold hover:bg-sl-orange hover:text-white transition">
          RSVP Now
        </button>
      </div>
    </section>
  );
}
