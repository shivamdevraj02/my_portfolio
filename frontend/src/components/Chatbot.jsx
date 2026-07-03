import { useState } from 'react';
import { sendChatMessage } from '../../services/api';

export default function Chatbot({ dark }) {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: "Hi there! Ask me about my projects, skills, AI/ML path, or how to contact me." },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setMessages((prev) => [...prev, { from: 'user', text: userMessage }]);
        setInput('');
        setError(null);
        setLoading(true);

        try {
            const result = await sendChatMessage(userMessage);
            if (result?.response) {
                setMessages((prev) => [...prev, { from: 'bot', text: result.response }]);
            } else {
                setError('No response returned from server.');
            }
        } catch (err) {
            setError(err.message || 'Chat failed.');
            setMessages((prev) => [...prev, { from: 'bot', text: 'Sorry, I could not answer that right now.' }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {open && (
                <div className={`w-[320px] max-w-full rounded-3xl shadow-2xl border ${dark ? 'bg-[#0a0e17] border-white/10' : 'bg-white border-gray-200'}`}>
                    <div className={`rounded-t-3xl px-4 py-4 border-b ${dark ? 'border-white/10' : 'border-gray-200'} ${dark ? 'bg-[#111827]' : 'bg-slate-100'}`}>
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className={`text-sm font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>Portfolio Chat</p>
                                <p className={`text-xs ${dark ? 'text-gray-400' : 'text-slate-500'}`}>Ask about skills, projects, or contact info.</p>
                            </div>
                            <button onClick={() => setOpen(false)} className={`text-xs font-semibold transition ${dark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                Close
                            </button>
                        </div>
                    </div>

                    <div className="h-72 overflow-y-auto px-4 py-3 space-y-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${msg.from === 'user'
                                    ? 'bg-blue-400 text-slate-900'
                                    : dark ? 'bg-white/10 text-gray-100' : 'bg-slate-100 text-slate-900'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {error && (
                            <div className="text-xs text-red-400">{error}</div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className={`px-4 pb-4 ${dark ? 'bg-[#0a0e17]' : 'bg-white'}`}>
                        <div className="flex items-center gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className={`flex-1 rounded-full border px-3 py-2 text-sm outline-none transition focus:border-blue-400 ${dark ? 'bg-[#111827] border-white/10 text-white placeholder:text-gray-500' : 'bg-slate-50 border-gray-200 text-slate-900 placeholder:text-slate-400'}`}
                                placeholder="Type your question..."
                                disabled={loading}
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${dark ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-500 text-white hover:bg-blue-400'}`}>
                                {loading ? '...' : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className={`rounded-full px-4 py-3 font-semibold shadow-2xl transition ${dark ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-500 text-white hover:bg-blue-400'}`}>
                    Chat
                </button>
            )}
        </div>
    );
}
