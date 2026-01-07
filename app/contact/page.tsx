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
    <div className="pt-20 pb-24 bg-dotted min-h-screen relative">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none z-0"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 text-balance leading-tight tracking-tight">
            Get Early Access
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Join us as we build Placely. Be among the first to access city
            intelligence and help shape the future of real estate decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-3xl border border-neutral-200/60 shadow-soft p-8 md:p-10 hover:shadow-elevated transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
                Request Access
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
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
                    className="w-full px-4 py-3.5 bg-white border border-neutral-200/60 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
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
                    className="w-full px-4 py-3.5 bg-white border border-neutral-200/60 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
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
                    className="w-full px-4 py-3.5 bg-white border border-neutral-200/60 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                    placeholder="Tell us about your interest in Placely..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
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
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              What to Expect
            </h2>
            <div className="space-y-6">
              <div className="relative bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 rounded-2xl border border-green-200/60 shadow-soft p-6 md:p-8 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded"></div>
                    </div>
                    Early Access Benefits
                  </h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Priority access to new cities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Direct feedback channel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Special early adopter pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Shape the product roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl border border-blue-200/60 shadow-soft p-6 md:p-8 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded"></div>
                    </div>
                    We're Building
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Currently focused on Bentonville, AR. We're expanding to more
                    cities based on demand. Let us know which city you're
                    interested in!
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 rounded-2xl border border-purple-200/60 shadow-soft p-6 md:p-8 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-neutral-900 text-lg">Email</span>
                </div>
                <a
                  href="mailto:hello@placelyai.com"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors inline-flex items-center gap-2 group/link"
                >
                  hello@placelyai.com
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

