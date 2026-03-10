"use client";
import { useState } from "react";
import STag from "@/components/ui/STag";
import { waLink } from "@/lib/whatsapp";
import { sendContact } from "@/lib/contactApi";

const SERVICES = [
  "Web App Development",
  "Mobile App (Android / iOS)",
  "Blockchain / Web3",
  "IoT / Embedded Systems",
  "API Development & Integration",
  "Game Development",
  "ERP / CRM System",
  "Digital Marketing / SEO",
  "Telecalling / Support",
  "Multiple / Not Sure",
];

const BUDGETS = [
  "Under ₹2 Lakh",
  "₹2L – ₹10L",
  "₹10L – ₹50L",
  "₹50L+",
  "Let's Discuss",
];
const TIMELINES = ["ASAP", "Within 1 Month", "1–3 Months", "Just Exploring"];

const inputCls =
  "bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm outline-none focus:border-blue-400 focus:bg-blue-50/30 transition-all placeholder:text-slate-300 w-full";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.service) {
      alert("Please fill Name, Email and select a Service.");
      return;
    }

    setLoading(true);

    const composedMessage = `
Company: ${formData.company || "N/A"}
Service: ${formData.service || "N/A"}
Budget: ${formData.budget || "N/A"}
Timeline: ${formData.timeline || "N/A"}

Project Details:
${formData.details || "N/A"}
`.trim();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline,
      details: formData.details.trim(),
      message: composedMessage,
    };

    try {
      const res = await sendContact(payload);

      if (res?.data?.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          details: "",
        });
      } else {
        alert(res?.data?.message || "Unexpected response from server");
        console.warn("Contact submit response:", res?.data);
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      console.error("Backend response:", err?.response?.data);
      alert(
        err?.response?.data?.message ||
          "Server not responding or returned an error. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-[5%] bg-stone-50 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left info */}
        <div className="reveal">
          <STag color="gold">Get In Touch</STag>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            Let's Scope
            <br />
            <span className="text-slate-400 font-bold">Your Project.</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[400px]">
            Tell us what you're building. We'll respond within 24 hours with a
            free consultation and honest quote.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {[
              [
                "📱",
                "Call / WhatsApp",
                <a
                  key="wa"
                  href={waLink()}
                  className="text-teal-600 hover:underline"
                >
                  +91 97666 50411
                </a>,
              ],
              [
                "📧",
                "Email",
                <a
                  key="em"
                  href="mailto:info@albostechnologies.com"
                  className="text-teal-600 hover:underline"
                >
                  info@albostechnologies.com
                </a>,
              ],
              ["📍", "Office", "Kunal Plaza, Pune MH 411019"],
              ["🕐", "Hours", "Mon – Sat, 10:00 AM – 7:00 PM IST"],
            ].map(([icon, lbl, val]) => (
              <div key={lbl} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                  {icon}
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                    {lbl}
                  </div>
                  <div className="text-slate-700 font-medium text-sm">
                    {val}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "✅ Free Consultation",
              "🔒 NDA Available",
              "⚡ 24h Response",
              "🌍 Remote-Friendly",
            ].map((c) => (
              <div
                key={c}
                className="bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="reveal relative bg-white border border-slate-200 rounded-3xl p-8 shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
          <div className="font-display font-bold text-slate-800 text-xl mb-6">
            Tell Us About Your Project
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Rahul Sharma"
                  required
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rahul@company.com"
                  required
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Startup or Company Name"
                  className={inputCls}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Service Needed *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={inputCls + " appearance-none cursor-pointer"}
              >
                <option value="" disabled>
                  Select a service...
                </option>
                {SERVICES.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputCls + " appearance-none cursor-pointer"}
                >
                  <option value="">Estimated budget...</option>
                  {BUDGETS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={inputCls + " appearance-none cursor-pointer"}
                >
                  <option value="">When to start?</option>
                  {TIMELINES.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Project Details
              </label>
              <textarea
                rows={3}
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="What are you building?..."
                className={inputCls + " resize-none"}
              />
            </div>

            <button
              type="submit"
              disabled={loading || submitted}
              className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 mt-1
                ${
                  submitted
                    ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white cursor-not-allowed"
                    : "bg-gradient-to-br from-amber-500 btn-amber to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
                }`}
            >
              {submitted
                ? "✓ Sent! We'll be in touch within 24 hours"
                : loading
                  ? "Sending..."
                  : "Send Project Brief →"}
            </button>
            <div className="text-center text-xs text-slate-400">
              🔒 Confidential. We respond within 24 hours.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
