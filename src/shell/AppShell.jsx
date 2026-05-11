import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './AppShell.module.css';

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function IconChevron({ expanded }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IconWall({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  );
}

function IconWallRH({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconExterior({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path d="M9 22V12h6v10" />
      <path d="M9 6h6" />
    </svg>
  );
}

function IconRoof({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20L12 4l9 16" />
      <path d="M5 20h14" />
    </svg>
  );
}

function IconTile({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 12h16" />
      <path d="M12 4v16" />
    </svg>
  );
}

function IconCeiling({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M6 20v-4" />
      <path d="M10 20v-8" />
      <path d="M14 20v-6" />
      <path d="M18 20v-3" />
    </svg>
  );
}

function IconHelp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

const CATEGORIES = [
  {
    key: 'muros',
    title: 'MUROS',
    icon: <IconWall color="#3b82f6" />,
    items: [
      { id: 'tabique-estandar', label: 'Tabique estándar', subtitle: 'Drywall interior', color: '#3b82f6', badge: 'Popular' },
      { id: 'tabique-sanitario-rh', label: 'Tabique sanitario RH', subtitle: 'Resistente a humedad', color: '#06b6d4', badge: 'RH' },
      { id: 'tabique-superboard', label: 'Superboard', subtitle: 'Panel reforzado', color: '#a855f7', badge: 'Exterior' },
    ],
  },
  {
    key: 'techos',
    title: 'TECHOS',
    icon: <IconRoof color="#f97316" />,
    items: [
      { id: 'cielo-raso', label: 'Cielo raso', subtitle: 'Suspendido modular', color: '#ec4899', badge: null },
      { id: 'techo-baldosa-60', label: 'Techo baldosa 60×60', subtitle: 'Placa cuadrada', color: '#10b981', badge: 'Popular' },
      { id: 'techo-baldosa-60-120', label: 'Techo baldosa 60×120', subtitle: 'Placa larga', color: '#10b981', badge: 'Nuevo' },
    ],
  },
];

export function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({ muros: true, techos: true });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (key) => {
    setExpandedCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getBadgeClass = (badge) => {
    const map = { Popular: styles.badgePopular, RH: styles.badgeRh, Exterior: styles.badgeExterior, Nuevo: styles.badgeNew };
    return map[badge] || '';
  };

  const filteredCategories = CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <div className={styles.shell}>
      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} aria-hidden="true" />
      )}

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <img src="/logometaldryll.png" alt="MetalDryll" className={styles.logo} />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Metal Dryll</span>
              <span className={styles.brandSubtitle}>Calculadora profesional</span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setSidebarOpen(false)} aria-label="Cerrar">
            <IconClose />
          </button>
        </div>

        <div className={styles.searchWrap}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}><IconSearch /></span>
            <input
              type="text"
              placeholder="Buscar calculadora..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className={styles.nav}>
          {filteredCategories.map((category) => (
            <div key={category.key} className={styles.category}>
              <button
                className={styles.categoryHeader}
                onClick={() => toggleCategory(category.key)}
                aria-expanded={expandedCategories[category.key]}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryTitle}>{category.title}</span>
                <span className={`${styles.categoryChevron} ${expandedCategories[category.key] ? styles.chevronActive : ''}`}>
                  <IconChevron expanded={expandedCategories[category.key]} />
                </span>
              </button>

              {expandedCategories[category.key] && (
                <div className={styles.categoryItems}>
                  {category.items.map((item, index) => (
                    <NavLink
                      key={item.id}
                      to={`/c/${item.id}`}
                      className={({ isActive }) =>
                        `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
                      }
                      onClick={() => setSidebarOpen(false)}
                      end
                    >
                      <div className={styles.navItemCard}>
                        <div className={styles.navItemIcon} style={{ '--item-color': item.color }}>
                          <NavLinkIcon id={item.id} color={item.color} />
                        </div>
                        <div className={styles.navItemInfo}>
                          <span className={styles.navItemLabel}>{item.label}</span>
                          <span className={styles.navItemSubtitle}>{item.subtitle}</span>
                        </div>
                        {item.badge && (
                          <span className={`${styles.badge} ${getBadgeClass(item.badge)}`}>{item.badge}</span>
                        )}
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.footer}>
          <div className={styles.footerVersion}>
            <span className={styles.versionLabel}>v1.0.0</span>
            <span className={styles.versionDot}></span>
            <span className={styles.versionText}>Metal Dryll</span>
          </div>
          <div className={styles.footerLinks}>
            <button className={styles.footerLink}>
              <IconHelp />
              <span>Ayuda</span>
            </button>
            <button className={styles.footerLink}>
              <IconSettings />
              <span>Configuración</span>
            </button>
          </div>
        </div>
      </aside>

      <div className={styles.mainArea}>
        <div className={styles.topBar}>
          <button className={styles.menuBtn} onClick={() => setSidebarOpen(true)} aria-label="Abrir menú">
            <IconMenu />
          </button>
          <span className={styles.pageTitle}>Metal Dryll</span>
        </div>

        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavLinkIcon({ id, color }) {
  const icons = {
    'tabique-estandar': <IconWall color={color} />,
    'tabique-sanitario-rh': <IconWallRH color={color} />,
    'tabique-superboard': <IconExterior color={color} />,
    'cielo-raso': <IconCeiling color={color} />,
    'techo-baldosa-60': <IconTile color={color} />,
    'techo-baldosa-60-120': <IconTile color={color} />,
  };
  return icons[id] || <IconWall color={color} />;
}