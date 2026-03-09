const CHIPS = [
    "⚛️ React", "▲ Next.js", "🟢 Node.js", "🐘 Laravel", "🐍 Django",
    "🤖 Kotlin", "🍎 Swift", "💙 Flutter", "⛓️ Solidity", "☁️ AWS",
    "🔵 Azure", "🔥 Firebase", "🐳 Docker", "⚙️ Kubernetes", "🗄️ PostgreSQL",
    "🍃 MongoDB", "📊 Redis", "🎮 Unity", "🎮 Unreal", "🦀 Rust", "🐹 Go",
];

export default function TechMarquee() {
    const doubled = [...CHIPS, ...CHIPS];

    return (
        <div className="py-10 bg-stone-50 border-y border-slate-200 overflow-hidden relative z-10">
            <div className="text-center mb-5 px-[5%]">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Technologies We Work With Daily
                </span>
            </div>
            <div className="marquee-mask">
                <div className="marquee-track">
                    {doubled.map((c, i) => (
                        <div
                            key={i}
                            className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:shadow-sm transition-all duration-200 whitespace-nowrap flex-shrink-0 cursor-default"
                        >
                            {c}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
