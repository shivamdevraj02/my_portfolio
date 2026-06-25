import { useState } from 'react';
import { submitContact } from '../../services/api';

// ✏️ EDIT HERE — apni contact details update karo

export default function Contact({ dark }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const inputClass = `w-full rounded-lg border px-4 py-3 text-sm outline-none transition-all
    focus:border-blue-400 font-sans
    ${dark
      ? "bg-[#0a0e17] border-white/5 text-white placeholder:text-gray-600"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await submitContact(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`py-24 px-4 ${dark ? "bg-[#0f1521]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
        
          <span className="mono text-xs text-blue-400 tracking-widest uppercase">Contact</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
          Let's Connect
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-10" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I'm actively looking for AI/ML engineering roles and backend opportunities.
              Whether you have an opening, want to collaborate on a project, or just want to talk tech — reach out.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: "✉️", label: "devrajshivam02@gmail.com", href: "mailto:devrajshivam02@gmail.com" },
                { icon: "🐙", label: "github.com/shivamdevraj02", href: "https://github.com/shivamdevraj02" },
                { icon: "💼", label: "linkedin.com/in/shivam-devraj", href: "https://www.linkedin.com/in/shivam-devraj-321781338/" },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm transition-all
                    hover:border-blue-400 hover:text-blue-400
                    ${dark ? "bg-[#0a0e17] border-white/5 text-gray-300" : "bg-gray-50 border-gray-100 text-gray-700"}`}>
                  <span className="w-5 text-center">{l.icon}</span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className={`rounded-xl border p-6 ${dark ? "bg-[#0a0e17] border-white/5" : "bg-gray-50 border-gray-100"}`}>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mono text-xs text-blue-400 tracking-widest uppercase block mb-1.5">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  className={inputClass}
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="mono text-xs text-blue-400 tracking-widest uppercase block mb-1.5">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  className={inputClass}
                  required 
                />
              </div>
              <div className="mb-5">
                <label className="mono text-xs text-blue-400 tracking-widest uppercase block mb-1.5">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="What's on your mind?" 
                  className={`${inputClass} resize-none`}
                  required 
                />
              </div>
              {success && (
                <div className="mb-3 p-3 bg-green-500/10 border border-green-500 text-green-400 text-sm rounded">
                  ✓ Message sent successfully!
                </div>
              )}
              {error && (
                <div className="mb-3 p-3 bg-red-500/10 border border-red-500 text-red-400 text-sm rounded">
                  ✗ {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-400 text-gray-900 font-semibold py-3 rounded-lg text-sm
                  hover:bg-blue-300 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
