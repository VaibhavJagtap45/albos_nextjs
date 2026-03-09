"use client";
import Link from "next/link";

/* ───────── Dashboard Mockup ───────── */
function DashboardMockup() {
    const bars = [55, 70, 48, 88, 65, 95];
    const colors = ["#1D4ED8", "#0D9488"];

    const activity = [
        { dot: "bg-teal-400", text: "v2.4.1 deployed to production", time: "2m ago" },
        { dot: "bg-blue-400", text: "Sprint 24 review — all stories done", time: "1h ago" },
        { dot: "bg-amber-400", text: "Security audit passed ✓", time: "3h ago" },
    ];

    return (
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] mx-auto">

            {/* Floating Stat */}
            <div className="absolute -top-4 right-0 sm:-right-4 scale-90 sm:scale-100 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg z-20">
                <div>
                    <div className="font-black text-2xl text-amber-500 leading-none">500+</div>
                    <div className="text-xs text-slate-400 mt-0.5">Projects shipped</div>
                </div>
                <div className="text-2xl">🚀</div>
            </div>

            {/* Browser Card */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">

                {/* Browser bar */}
                <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div className="ml-2 bg-white border border-slate-200 rounded px-2.5 py-0.5 text-[10px] font-mono text-slate-400">
                        dashboard.albos.dev/projects
                    </div>
                </div>

                <div className="p-5">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="font-bold text-slate-800 text-sm">Live Dashboard</div>
                        <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-teal-600 tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                            LIVE
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2.5 mb-4">
                        {[
                            ["Uptime", "99.9%", "↑ SLA"],
                            ["Sprints", "24", "↑ On Track"],
                            ["Delivered", "100%", "↑ On Time"],
                        ].map(([l, v, d]) => (
                            <div key={l} className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                                <div className="text-[9px] text-slate-400 font-semibold uppercase mb-1">{l}</div>
                                <div className="font-black text-lg text-slate-800 leading-none">{v}</div>
                                <div className="text-[9px] text-teal-600 font-semibold mt-1">{d}</div>
                            </div>
                        ))}
                    </div>

                    {/* Chart */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-3">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[9px] text-slate-400">Sprint Velocity</span>
                            <span className="text-[9px] text-teal-600 font-bold bg-teal-50 px-1.5 py-0.5 rounded">↑ +18%</span>
                        </div>
                        <div className="flex items-end gap-1.5 h-10">
                            {bars.map((h, i) => (
                                <div
                                    key={i}
                                    className="flex-1 rounded-t animate-[grow_0.8s_ease_forwards]"
                                    style={{
                                        height: `${h}%`,
                                        background: colors[i % 2],
                                        opacity: 0.45 + i * 0.09,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Activity */}
                    <div className="flex flex-col gap-1.5">
                        {activity.map(({ dot, text, time }) => (
                            <div key={text} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                                <span className="text-[10px] text-slate-500 flex-1">{text}</span>
                                <span className="text-[9px] text-slate-400">{time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom floating card */}
            <div className="absolute -bottom-4 left-0 sm:-left-4 scale-90 sm:scale-100 bg-white border border-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl z-20 min-w-[200px]">
                <span className="text-2xl">🎉</span>
                <div>
                    <div className="text-sm font-bold text-slate-800">Build shipped!</div>
                    <div className="text-xs text-slate-400 mt-0.5">0 bugs · On schedule</div>
                </div>
            </div>

        </div>
    );
}

/* ───────── HERO SECTION ───────── */
export default function Hero() {

    const proof = [
        ["★", "4.9 on Clutch"],
        ["🏆", "Top Developer India 2024"],
        ["✅", "ISO Certified"],
    ];

    return (
        <section className="relative pt-[52px] min-h-[90vh] md:min-h-screen overflow-hidden">

            <div className="mx-auto w-full flex flex-col lg:flex-row items-center gap-12 px-[5%] py-12">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">

                    <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-6">
                        Trusted Partner Since 2014 · Pune, India
                    </p>

                    <h1 className="font-black leading-[0.95] mb-6
            text-[2.2rem]
            sm:text-[2.3rem]
            md:text-[2.4rem]
            lg:text-[3.4rem]
            xl:text-[4.5rem]"
                    >
                        The Engineering <br />
                        Team Behind<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">Your Next</span><br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
                            Big Product.
                        </span>
                    </h1>

                    <p className="text-slate-500 max-w-xl mx-auto lg:mx-0 mb-8">
                        Albos Technologies has shipped 500+ digital products for startups and enterprises
                        across 12 industries — from MVPs to complex enterprise platforms.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                        <Link
                            href="/contact"
                            className="bg-gradient-to-br from-amber-500 btn-amber to-amber-600 text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition text-center"
                        >
                            Start a Project →
                        </Link>

                        <Link
                            href="/portfolio"
                            className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-7 py-3 rounded-xl transition text-center"
                        >
                            View Our Work
                        </Link>
                    </div>

                    {/* Proof badges */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {proof.map(([icon, label]) => (
                            <div key={label} className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                                <span>{icon}</span>{label}
                            </div>
                        ))}
                    </div>

                </div>

                {/* RIGHT DASHBOARD */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <DashboardMockup />
                </div>

            </div>
        </section>
    );
}
