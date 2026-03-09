/**
 * Small pill tag used for tech stacks and service labels.
 * @prop {string} variant – "default" | "gold" | "blue" | "teal"
 */
const VARIANTS = {
    default: "bg-slate-100 border-slate-200 text-slate-500",
    gold: "bg-amber-50 border-amber-200 text-amber-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    teal: "bg-teal-50 border-teal-200 text-teal-700",
};

export default function Tag({ children, variant = "default" }) {
    return (
        <span
            className={`px-2 py-0.5 rounded border text-[11px] font-semibold ${VARIANTS[variant] ?? VARIANTS.default}`}
        >
            {children}
        </span>
    );
}
