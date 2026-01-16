"use client";

import { useState } from "react";
import { submitRSVP } from "../actions/submitRSVP";

export default function RSVPSection() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    try {
      await submitRSVP(formData);
      setSuccess(true);
      setError("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-sl-text mb-4">
          Reserve Your Seat
        </h2>

        <p className="text-sl-muted mb-8">
          Join us for an exclusive roundtable discussion on preparing
          organizations for the AI era.
        </p>

        {!success ? (
          <form action={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sl-blue"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sl-blue"
            />

            <button
              type="submit"
              className="w-full bg-sl-orange text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              RSVP Now
            </button>

            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </form>
        ) : (
          <p className="text-green-600 font-medium text-lg">
            ✅ Thank you! Your RSVP has been submitted.
          </p>
        )}
      </div>
    </section>
  );
}
