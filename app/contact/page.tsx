"use client";

import { useState } from "react";
import { Send, Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 text-balance">
            Get Early Access
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Join us as we build Placely. Be among the first to access city
            intelligence and help shape the future of real estate decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Request Access
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                  placeholder="Tell us about your interest in Placely..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <MessageSquare className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              What to Expect
            </h2>
            <div className="space-y-6 mb-8">
              <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Early Access Benefits
                </h3>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li>• Priority access to new cities</li>
                  <li>• Direct feedback channel</li>
                  <li>• Special early adopter pricing</li>
                  <li>• Shape the product roadmap</li>
                </ul>
              </div>
              <div className="p-6 bg-primary-50 rounded-xl border border-primary-200">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  We're Building
                </h3>
                <p className="text-neutral-700 text-sm">
                  Currently focused on Bentonville, AR. We're expanding to more
                  cities based on demand. Let us know which city you're
                  interested in!
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary-600" />
                <span className="font-medium text-neutral-900">Email</span>
              </div>
              <a
                href="mailto:hello@placelyai.com"
                className="text-primary-600 hover:text-primary-700 text-sm"
              >
                hello@placelyai.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

