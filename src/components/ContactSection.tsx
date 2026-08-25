import React, { useState } from 'react';
import { Mail, Phone, Youtube, Linkedin, Github, Instagram, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Research Collaboration',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: 'Research Collaboration', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#5ecf96]/15 z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5ecf96] mb-3">
          <Mail className="w-4 h-4 text-[#5ecf96]" />
          Contact · Get in Touch
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0faf5] tracking-tight leading-tight">
          Let&apos;s Build <span className="text-[#5ecf96]">Intelligence for Biology &amp; Web</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-6 space-y-8">
          <p className="text-base text-[#b8d4c7] font-sans leading-relaxed">
            I am always interested in discussing new machine learning research initiatives, computational biology projects, or opportunities to apply AI in healthcare and ecological innovation.
          </p>

          {/* Quick Contact Cards with Copy Buttons */}
          <div className="space-y-3">
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-[#0e141b] border border-[#5ecf96]/20 flex items-center justify-between gap-4 hover:border-[#5ecf96]/50 transition-all">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 flex-1 min-w-0 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111820] border border-[#5ecf96]/30 flex items-center justify-center text-[#5ecf96] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#6e8c7e]">
                    Primary Email
                  </div>
                  <div className="font-mono text-sm text-[#f0faf5] group-hover:text-[#5ecf96] transition-colors truncate">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-[#111820] border border-[#5ecf96]/20 text-[#8ba79b] hover:text-[#5ecf96] hover:border-[#5ecf96] transition-all cursor-pointer flex-shrink-0"
                title="Copy Email Address"
              >
                {copiedItem === 'email' ? <Check className="w-4 h-4 text-[#5ecf96]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-[#0e141b] border border-[#5ecf96]/20 flex items-center justify-between gap-4 hover:border-[#5ecf96]/50 transition-all">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 flex-1 min-w-0 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111820] border border-[#5ecf96]/30 flex items-center justify-center text-[#5ecf96] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#6e8c7e]">
                    Direct Phone / WhatsApp
                  </div>
                  <div className="font-mono text-sm text-[#f0faf5] group-hover:text-[#5ecf96] transition-colors truncate">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-[#111820] border border-[#5ecf96]/20 text-[#8ba79b] hover:text-[#5ecf96] hover:border-[#5ecf96] transition-all cursor-pointer flex-shrink-0"
                title="Copy Phone Number"
              >
                {copiedItem === 'phone' ? <Check className="w-4 h-4 text-[#5ecf96]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* YouTube Channel */}
            <a
              href={PERSONAL_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0e141b] border border-[#5ecf96]/20 flex items-center justify-between gap-4 hover:border-[#5ecf96]/50 transition-all group"
            >
              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#111820] border border-[#5ecf96]/30 flex items-center justify-center text-[#5ecf96] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Youtube className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#6e8c7e]">
                    YouTube Channel
                  </div>
                  <div className="font-mono text-sm text-[#f0faf5] group-hover:text-[#5ecf96] transition-colors truncate">
                    bit.ly/midhunonyoutube
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#6e8c7e] group-hover:text-[#5ecf96] transition-colors" />
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-3">
              Connect Across Digital Profiles
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#111820] border border-[#5ecf96]/15 hover:border-[#5ecf96]/40 flex items-center justify-between text-xs font-mono text-[#d4e8df] hover:text-[#5ecf96] transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#5ecf96]" />
                  LinkedIn
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6e8c7e] group-hover:text-[#5ecf96]" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#111820] border border-[#5ecf96]/15 hover:border-[#5ecf96]/40 flex items-center justify-between text-xs font-mono text-[#d4e8df] hover:text-[#5ecf96] transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#5ecf96]" />
                  GitHub
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6e8c7e] group-hover:text-[#5ecf96]" />
              </a>

              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#111820] border border-[#5ecf96]/15 hover:border-[#5ecf96]/40 flex items-center justify-between text-xs font-mono text-[#d4e8df] hover:text-[#5ecf96] transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#5ecf96]" />
                  Instagram
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6e8c7e] group-hover:text-[#5ecf96]" />
              </a>

              <a
                href={PERSONAL_INFO.socials.sevaAi}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#111820] border border-[#5ecf96]/15 hover:border-[#5ecf96]/40 flex items-center justify-between text-xs font-mono text-[#d4e8df] hover:text-[#5ecf96] transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5ecf96]" />
                  SEVA AI Live
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6e8c7e] group-hover:text-[#5ecf96]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Send Inquiry Form */}
        <div className="lg:col-span-6 p-7 rounded-2xl bg-[#0e141b] border border-[#5ecf96]/25 shadow-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#5ecf96] uppercase tracking-wider mb-2">
            <MessageSquare className="w-4 h-4" />
            Send a Direct Message
          </div>
          <h3 className="text-2xl text-[#f0faf5] font-bold mb-5">
            Inquire or Discuss Research &amp; Projects
          </h3>

          {submitted ? (
            <div className="p-6 rounded-xl bg-[#5ecf96]/10 border border-[#5ecf96] text-center space-y-3 animate-in fade-in">
              <Check className="w-10 h-10 text-[#5ecf96] mx-auto" />
              <div className="text-2xl font-bold text-[#f0faf5]">Message Sent Successfully</div>
              <p className="text-xs text-[#d4e8df]">
                Thank you for reaching out, {formState.name || 'there'}. I will review your note and get back to you promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Dr. Jane Smith"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#111820] border border-[#5ecf96]/20 text-[#f0faf5] placeholder-[#6e8c7e] text-sm focus:outline-none focus:border-[#5ecf96] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@institution.edu"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#111820] border border-[#5ecf96]/20 text-[#f0faf5] placeholder-[#6e8c7e] text-sm focus:outline-none focus:border-[#5ecf96] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-1.5">
                  Subject / Area of Interest
                </label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#111820] border border-[#5ecf96]/20 text-[#f0faf5] text-sm focus:outline-none focus:border-[#5ecf96] transition-colors"
                >
                  <option value="Research Collaboration">Research Collaboration (AI / Bio)</option>
                  <option value="SEVA AI Healthcare Inquiries">SEVA AI Healthcare Inquiries</option>
                  <option value="Carbon Capture Modeling">Carbon Capture &amp; Bio-Sequestration</option>
                  <option value="Academic & Project Discussion">Academic &amp; Project Discussion</option>
                  <option value="Other Inquiries">Other Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-1.5">
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share a brief overview of your query, research idea, or project proposal..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#111820] border border-[#5ecf96]/20 text-[#f0faf5] placeholder-[#6e8c7e] text-sm focus:outline-none focus:border-[#5ecf96] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#5ecf96] text-[#040a06] font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#4ebe85] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#5ecf96]/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Transmit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
