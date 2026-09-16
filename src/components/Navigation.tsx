import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  name: string;
}

export default function Navigation({ name }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#F9F8F5]/90 backdrop-blur-md border-b border-[#E6E2D9] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <a
          id="nav-brand"
          href="#"
          className="group inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[#171717] hover:text-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/20 rounded-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#D96B27]" aria-hidden="true" />
          <span>{name}</span>
          <span className="hidden sm:inline text-xs font-mono-code font-normal text-[#737373] ml-1">
            / Robotics
          </span>
        </a>

        {/* Desktop Links */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#525252] hover:text-[#171717] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/20 rounded-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#171717] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            id="nav-cta-desktop"
            href="#contact"
            className="text-[13px] font-medium px-3.5 py-1.5 rounded border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-[#F9F8F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/30"
          >
            Say hello
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 -mr-2 text-[#171717] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/30 rounded-md"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="md:hidden border-b border-[#E6E2D9] bg-[#F9F8F5] px-6 py-4 flex flex-col gap-3.5 transition-all"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#262626] hover:text-[#171717] py-1.5 focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
          <a
            id="mobile-nav-cta"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center text-sm font-medium py-2.5 px-4 rounded border border-[#171717] bg-[#171717] text-[#F9F8F5]"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
