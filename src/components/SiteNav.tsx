import { useEffect, useRef, useState } from 'react';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  /** Shown as a small plate beside the name, e.g. an unreleased product. */
  status?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

interface Props {
  groups: NavGroup[];
  links: NavItem[];
  cta: { label: string };
  menuLabel: string;
  closeLabel: string;
  currentPath: string;
}

const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={2} strokeLinecap="square" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

/**
 * The only nav JS on the site: a desktop mega-menu and a mobile drawer.
 * Every link inside is a real anchor, so without JS the header still
 * navigates — the panels just render closed.
 */
export default function SiteNav({
  groups, links, cta, menuLabel, closeLabel, currentPath,
}: Props) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpenGroup(null);
      setDrawerOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const hoverOpen = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };
  const hoverClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 120);
  };

  const isCurrent = (href: string) => currentPath === href || currentPath === `${href}/`;
  const ctaProps = { className: 'btn btn--primary btn--sm nav__cta obf-email', href: '#netter-human-layer', rel: 'nofollow', 'data-label': '' };

  return (
    <div className="nav" ref={navRef}>
      {/* ---------- desktop ---------- */}
      <nav className="nav__desktop" aria-label="Main">
        {groups.map((group) => (
          <div
            key={group.label}
            className="nav__group"
            onMouseEnter={() => hoverOpen(group.label)}
            onMouseLeave={hoverClose}
          >
            <button
              type="button"
              className="nav__trigger"
              aria-expanded={openGroup === group.label}
              onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
            >
              {group.label}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth={2.4} strokeLinecap="square" aria-hidden="true"
                   style={{ transform: openGroup === group.label ? 'rotate(180deg)' : 'none', transition: 'transform .2s ease' }}>
                <path d="M5 9l7 7 7-7" />
              </svg>
            </button>
            {openGroup === group.label && (
              <div className="nav__panel">
                {group.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="nav__card"
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener' : undefined}
                  >
                    <span className="nav__card-title">
                      {item.label}
                      {item.status && <span className="nav__plate">{item.status}</span>}
                      <Arrow size={12} />
                    </span>
                    {item.description && <span className="nav__card-desc">{item.description}</span>}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav__link"
             aria-current={isCurrent(link.href) ? 'page' : undefined}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* ---------- right rail ---------- */}
      <div className="nav__rail">
        <a {...ctaProps}>
          {cta.label}
          <Arrow />
        </a>
        <button
          type="button"
          className="nav__burger"
          aria-expanded={drawerOpen}
          aria-label={drawerOpen ? closeLabel : menuLabel}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth={1.8} strokeLinecap="square" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth={1.8} strokeLinecap="square" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* ---------- mobile drawer ---------- */}
      {drawerOpen && (
        <div className="nav__drawer">
          {groups.map((group) => (
            <div key={group.label} className="nav__drawer-group">
              <div className="nav__drawer-label mono">{group.label}</div>
              {group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav__drawer-link"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener' : undefined}
                >
                  <span className="nav__drawer-name">
                    {item.label}
                    {item.status && <span className="nav__plate">{item.status}</span>}
                  </span>
                  <Arrow size={13} />
                </a>
              ))}
            </div>
          ))}
          <div className="nav__drawer-group">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav__drawer-link">
                {link.label}
                <Arrow size={13} />
              </a>
            ))}
          </div>
          <a {...ctaProps} className="btn btn--primary nav__drawer-cta obf-email">
            {cta.label}
            <Arrow />
          </a>
        </div>
      )}
    </div>
  );
}
