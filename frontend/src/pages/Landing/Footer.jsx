import React from 'react';

const FOOTER_CONTENT = {
  logoText: "TikyTop",
  description: "TikyTop provides simple and effective tools to support your social media presence. Explore our features and grow smarter, every step of the way.",
  paymentIcons: ["visa", "mastercard", "applepay", "googlepay"],
  links: [
    { label: "About Us", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Contact Us", href: "#" }
  ],
  disclaimer: "TikyTop is a standalone social media growth service that is not affiliated with or endorsed by TikTok, Instagram, Facebook, Twitter (X), YouTube, Google, Lazada, Dribbble, Tumblr, Telegram, Clubhouse, iOS App Store, Audiomack, MixCloud, SoundCloud, Vimeo, Discord, Deezer, Dailymotion, VK, LinkedIn, Kick, Reddit, Likee, Medium, Tidal, Shopee, Quora, Snapchat, Coub, Rumble, Twitch, Pinterest, Spotify, WhatsApp, or any social media.",
  copyright: "Copyright © 2025 TikyTop. All Rights Reserved.",
  services: {
    "TikTok Services": [
      "Buy TikTok Likes",
      "Buy TikTok Views",
      "Buy TikTok Followers/Fans",
    ],
    "Instagram Services": [
      "Buy Instagram Likes",
      "Buy Instagram Followers",
    ],
    "YouTube Services": [
      "Buy YouTube Shorts Likes",
      "Buy YouTube Shorts Views",
    ]
  }
};

const Footer = () => {
    const { logoText, description, paymentIcons, links, disclaimer, copyright, services } = FOOTER_CONTENT;

    const renderPaymentIcon = (type) => {
        const colors = {
            visa: "#1A1F71",
            mastercard: "#EB001B",
            applepay: "#000000",
            googlepay: "#4285F4"
        };
        return (
            <div key={type} className="bg-white px-4 py-2 rounded-xl h-10 flex items-center justify-center shadow-sm border border-gray-100 uppercase tracking-widest text-[10px] font-bold">
                <span style={{ color: colors[type] }}>{type}</span>
            </div>
        );
    };

    return (
        <footer className="py-24 md:py-32 px-5 bg-white flex justify-center border-t border-gray-100">
            <div className="w-full max-w-7xl bg-white rounded-[3rem] p-10 md:p-20 border border-gray-100 shadow-sm">
                
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-extrabold text-[#020A1B] flex items-center gap-4">
                            <div className="bg-[#FF00C8] text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-50">
                                <span className="text-2xl font-bold">T</span>
                            </div>
                            {logoText}
                        </h2>
                        <p className="text-[#75819A] text-lg max-w-lg leading-relaxed font-medium">{description}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-16">
                    {paymentIcons.map(renderPaymentIcon)}
                </div>

                <div className="h-px bg-gray-100 w-full mb-16" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                    {Object.entries(services).map(([category, items]) => (
                        <div key={category} className="space-y-6">
                            <h3 className="font-extrabold text-[#020A1B] text-lg">{category}</h3>
                            <ul className="flex flex-col gap-4">
                                {items.map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="text-[#64748B] text-sm hover:text-[#FF00C8] transition-all font-medium flex items-center gap-2 group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#FF00C8] transition-colors" />
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50/50 p-10 rounded-[2rem] border border-gray-100 shadow-sm mb-12">
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed text-center font-bold uppercase tracking-widest">{disclaimer}</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-100">
                    <p className="text-sm text-[#020A1B] font-bold">{copyright}</p>

                    <div className="flex flex-wrap justify-center gap-8">
                        {links.map((link, idx) => (
                            <a key={idx} href={link.href} className="text-xs font-black text-[#75819A] hover:text-[#FF00C8] transition-all uppercase tracking-widest">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button className="px-8 py-3 rounded-full font-bold text-sm bg-[#020A1B] text-white hover:bg-[#FF00C8] transition-all shadow-lg">Login</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
