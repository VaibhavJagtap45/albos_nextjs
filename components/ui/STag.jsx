/**
 * Section label tag with a leading color bar.
 * @prop {string} color – "gold" | "blue" | "teal" | "purple"
 */
const COLORS = {
    gold: { text: "text-amber-600", bar: "bg-amber-500" },
    blue: { text: "text-blue-700", bar: "bg-blue-600" },
    teal: { text: "text-teal-600", bar: "bg-teal-500" },
    purple: { text: "text-purple-700", bar: "bg-purple-600" },
};

export default function STag({ color = "gold", children }) {
    const { text, bar } = COLORS[color] ?? COLORS.gold;
    return (
        <div className={`flex items-center gap-2 mb-3 ${text}`}>
            <div className={`w-5 h-px ${bar} opacity-70`} />
            <span className="text-xs font-bold uppercase tracking-widest">{children}</span>
        </div>
    );
}
