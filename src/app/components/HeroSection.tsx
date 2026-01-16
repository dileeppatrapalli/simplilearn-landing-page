import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[693px] flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="AI abstract background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-[820px] text-white">
          {/* Brand */}
          <div className="mb-6 text-sm font-semibold tracking-wide">
            simplilearn
          </div>

          {/* Badge */}
          <span className="inline-block mb-4 rounded bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
            Invite-Only
          </span>

          {/* Subheading */}
          <p className="mb-4 text-sm text-cyan-300">
            An Executive Roundtable · Lunch
          </p>

          {/* Heading */}
          <h1 className="text-[44px] leading-[1.15] font-extrabold text-orange-400 md:text-[52px]">
            The Skills That Matter Next:
            <br />
            <span className="text-white">
              Preparing Your Workforce & Leaders
            </span>
            <br />
            <span className="text-white">for the AI Era</span>
          </h1>

          {/* Meta info */}
          <div className="mt-6 flex flex-col gap-2 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>February 20, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Chamberlain’s Steak & Fish House, Dallas</span>
            </div>
          </div>

          {/* RSVP */}
          <div className="mt-8 flex max-w-[520px] items-center gap-3 rounded-md bg-white/90 p-3">
            <input
              type="email"
              placeholder="Enter your work email to confirm your attendance"
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm text-black focus:outline-none"
            />
            <button className="whitespace-nowrap rounded bg-orange-400 px-6 py-2 text-sm font-semibold text-white hover:bg-orange-500">
              RSVP Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
