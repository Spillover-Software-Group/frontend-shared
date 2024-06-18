import { twMerge } from "tailwind-merge";

export function Section({ title, subtitle, children, ...props }) {
  return (
    <section
      {...props}
      className={twMerge(
        "border border-gray-300 rounded-2xl bg-white",
        props.className,
      )}
    >
      <header className="flex items-center gap-2 px-5 py-2 pb-1 border-b border-gray-300 text-spillover-900">
        <h2 className="text-lg font-semibold uppercase">{title}</h2>
        {subtitle && <p className="text-xs lowercase">{subtitle}</p>}
      </header>

      {children}
    </section>
  );
}
