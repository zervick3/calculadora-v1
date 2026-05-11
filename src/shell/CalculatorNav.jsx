import { NavLink } from 'react-router-dom';
import { calculatorRoutes } from '../features/calculators/registry';
import styles from './CalculatorNav.module.css';

function IconWall() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  );
}

function IconWallRH() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconExterior() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path d="M9 22V12h6v10" />
      <path d="M9 6h6" />
    </svg>
  );
}

function IconRoof() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20L12 4l9 16" />
      <path d="M5 20h14" />
    </svg>
  );
}

function IconTile() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 12h16" />
      <path d="M12 4v16" />
    </svg>
  );
}

function IconCeiling() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M6 20v-4" />
      <path d="M10 20v-8" />
      <path d="M14 20v-6" />
      <path d="M18 20v-3" />
    </svg>
  );
}

const CATEGORIES = {
  muros: {
    title: 'MUROS',
    items: ['tabique-estandar', 'tabique-sanitario-rh', 'tabique-superboard'],
    badges: { 'tabique-estandar': 'Popular', 'tabique-sanitario-rh': 'RH' },
  },
  techos: {
    title: 'TECHOS',
    items: ['cielo-raso', 'techo-baldosa-60', 'techo-baldosa-60-120'],
    badges: { 'techo-baldosa-60': 'Popular', 'techo-baldosa-60-120': 'Recomendado' },
  },
  exterior: {
    title: 'EXTERIOR',
    items: ['tabique-superboard'],
    badges: { 'tabique-superboard': 'Exterior' },
  },
};

const ICONS = {
  'tabique-estandar': { icon: IconWall, class: styles.iconWall },
  'tabique-sanitario-rh': { icon: IconWallRH, class: styles.iconWallRH },
  'tabique-superboard': { icon: IconExterior, class: styles.iconExterior },
  'cielo-raso': { icon: IconCeiling, class: styles.iconCeiling },
  'techo-baldosa-60': { icon: IconTile, class: styles.iconTile },
  'techo-baldosa-60-120': { icon: IconTile, class: styles.iconTile },
};

function getIconComponent(id) {
  const config = ICONS[id] || { icon: IconWall, class: styles.iconWall };
  return config;
}

export function CalculatorNav({ onNavigate }) {
  const routesByCategory = {};
  Object.entries(CATEGORIES).forEach(([catKey, cat]) => {
    routesByCategory[catKey] = calculatorRoutes.filter((r) => cat.items.includes(r.id));
  });

  return (
    <nav className={styles.nav} aria-label="Calculadoras">
      {Object.entries(CATEGORIES).map(([catKey, category]) => {
        const items = routesByCategory[catKey];
        if (!items || items.length === 0) return null;

        return (
          <div key={catKey}>
            <div className={styles.categoryTitle}>{category.title}</div>
            <ul className={styles.navList}>
              {items.map((c, index) => {
                const badge = category.badges?.[c.id];
                const { icon: IconComponent, class: iconClass } = getIconComponent(c.id);
                return (
                  <li key={c.id}>
                    <NavLink
                      to={`/c/${c.id}`}
                      title={c.label}
                      aria-label={c.label}
                      className={({ isActive }) =>
                        [styles.navItem, isActive ? styles.navItemActive : ''].filter(Boolean).join(' ')
                      }
                      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                      onClick={() => onNavigate && onNavigate()}
                      end
                    >
                      <span className={`${styles.navItemIcon} ${iconClass}`}>
                        <IconComponent />
                      </span>
                      <span className={styles.navItemContent}>
                        <span className={styles.navItemLabel}>{c.label}</span>
                        <span className={styles.navItemSubtitle}>{c.subtitle}</span>
                      </span>
                      {badge && (
                        <span
                          className={`${styles.badge} ${
                            badge === 'Popular'
                              ? styles.badgePopular
                              : badge === 'RH'
                              ? styles.badgeRh
                              : badge === 'Exterior'
                              ? styles.badgeExterior
                              : badge === 'Recomendado'
                              ? styles.badgeRecommended
                              : ''
                          }`}
                        >
                          {badge}
                        </span>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}