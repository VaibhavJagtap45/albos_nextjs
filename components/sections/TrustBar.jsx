const STATS = [
    ["10+", "Years Active", true],
    ["500+", "Projects Shipped", false],
    ["320+", "Happy Clients", false],
    ["12", "Industries", false],
    ["98%", "Retention Rate", false],
    ["4.9★", "Clutch Rating", true],
];

export default function TrustBar() {
    return (
        <div className="relative z-10 bg-white border-y border-slate-200 py-6 px-[5%] flex flex-wrap items-center justify-between gap-6">
            {STATS.map(([num, lbl, isGold], i) => (
                <div key={lbl} className="flex items-center gap-8">
                    <div className="flex flex-col items-center gap-0.5">
                        <div className={`font-display font-black text-3xl leading-none tracking-tight ${isGold ? "text-amber-500" : "text-slate-800"}`}>
                            {num}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{lbl}</div>
                    </div>
                    {i < STATS.length - 1 && (
                        <div className="hidden md:block w-px h-8 bg-slate-200" />
                    )}
                </div>
            ))}
        </div>
    );
}
