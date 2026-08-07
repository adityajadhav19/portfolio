'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Portfolio contact — ${name || 'no name given'}`;
        const body = `${message}\n\n—\n${name}${email ? `\n${email}` : ''}`;

        const mailtoUrl = `mailto:adityajadhav11193@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label htmlFor="name" className="font-mono text-[11px] text-slate block mb-2">
                    NAME
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-inksoft border border-line rounded-md px-4 py-3 text-paper text-sm outline-none focus:border-amber transition-colors"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="font-mono text-[11px] text-slate block mb-2">
                    EMAIL (so I can reply)
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-inksoft border border-line rounded-md px-4 py-3 text-paper text-sm outline-none focus:border-amber transition-colors"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="font-mono text-[11px] text-slate block mb-2">
                    MESSAGE
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full bg-inksoft border border-line rounded-md px-4 py-3 text-paper text-sm outline-none focus:border-amber transition-colors resize-none"
                    placeholder="What's on your mind?"
                />
            </div>

            <div className="flex items-center gap-4">
                <button
                    type="submit"
                    className="font-mono text-[13px] px-6 py-3 bg-amber text-ink rounded-full hover:bg-amber/90 transition-colors"
                >
                    Open in email →
                </button>
                <button
                    type="button"
                    onClick={() => {
                        navigator.clipboard.writeText('adityajadhav11193@gmail.com');
                        alert('Email copied — adityajadhav11193@gmail.com');
                    }}
                    className="font-mono text-[12px] text-slate hover:text-amber transition-colors"
                >
                    or copy my email
                </button>
            </div>
            <p className="font-mono text-[10px] text-slatedark mt-2">
                Opens your email app with this prefilled — just hit send there. If nothing opens, use "copy my email" instead.
            </p>
        </form>
    );
}