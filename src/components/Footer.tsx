interface FooterProps {
  name: string;
  role: string;
}

export default function Footer({ name, role }: FooterProps) {
  return (
    <footer id="site-footer" className="py-12 bg-[#F6F4EE] text-[#525252]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#171717]">
            {name}
          </p>
          <p className="text-xs text-[#737373] mt-0.5">
            {role}
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-1 text-xs font-mono-code text-[#8A867E]">
          <p>Built with curiosity and a lot of trial and error.</p>
          <p>© 2026 · Designed for clarity & restraint</p>
        </div>
      </div>
    </footer>
  );
}
