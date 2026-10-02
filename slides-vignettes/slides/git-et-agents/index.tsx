import { useSlidePageNumber } from '@open-slide/core';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#1a1a1a', accent: '#5088b8' },
  fonts: {
    display: '"Helvetica Neue", Helvetica, system-ui, sans-serif',
    body: '"Helvetica Neue", Helvetica, system-ui, sans-serif',
  },
  typeScale: { hero: 112, body: 34 },
  radius: 0,
};

const MUTED = '#6e6e73';
const SKY = '#b8e0f0';
const TINT = '#eaf3f8';
const INK = '#0a0a0a';
const LINE = '#e5e5ea';
const MONO = '"SF Mono", SFMono-Regular, Menlo, Consolas, monospace';

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';

export const transition: SlideTransition = {
  duration: 200,
  exit: {
    duration: 140,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-4px)' },
    ],
  },
  enter: {
    duration: 200,
    delay: 80,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
} as const;

const page = {
  ...fill,
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  padding: 120,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
} as const;

const TopBar = ({ label }: { label: string }) => (
  <div
    style={{
      position: 'absolute',
      top: 64,
      left: 120,
      right: 120,
      display: 'flex',
      alignItems: 'center',
      gap: 36,
    }}
  >
    <div
      style={{
        fontSize: 30,
        fontWeight: 500,
        color: 'var(--osd-accent)',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </div>
  </div>
);

const Heading = ({ children }: { children: string }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 76,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
      margin: '24px 0 0',
    }}
  >
    {children}
  </h2>
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        right: 120,
        bottom: 56,
        display: 'flex',
        gap: 24,
        fontFamily: MONO,
        fontSize: 22,
        color: 'var(--osd-accent)',
        letterSpacing: '0.06em',
      }}
    >
      <span>VIGNETTE FLASH · ~3 MIN</span>
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const Bullet = ({ children }: { children: string }) => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'baseline', marginTop: 28 }}>
    <span style={{ color: 'var(--osd-accent)', fontSize: 34 }}>—</span>
    <span style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.5 }}>{children}</span>
  </div>
);

const RepoZone = ({ title, desc }: { title: string; desc: string }) => (
  <div
    style={{
      flex: 1,
      background: TINT,
      border: `1px solid ${LINE}`,
      padding: '24px 32px',
    }}
  >
    <div style={{ fontFamily: MONO, fontSize: 28, fontWeight: 600, color: INK }}>
      {title}
    </div>
    <div style={{ fontSize: 22, lineHeight: 1.45, color: MUTED, marginTop: 10 }}>
      {desc}
    </div>
  </div>
);

const Maison: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 03 — Git et agents" />
    <Heading>Le dépôt est la maison de l'agent</Heading>
    <div
      style={{
        border: `1px solid ${LINE}`,
        borderLeft: '4px solid var(--osd-accent)',
        padding: '32px 40px',
        marginTop: 56,
      }}
    >
      <div style={{ fontFamily: MONO, fontSize: 28, fontWeight: 600, color: INK }}>
        votre-dépôt/
      </div>
      <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
        <RepoZone title="code" desc="ce que l'agent lit et modifie" />
        <RepoZone
          title="contexte"
          desc="AGENTS.md, docs de design, README — ce que l'agent lit avant d'agir"
        />
      </div>
    </div>
    <div
      style={{
        marginTop: 48,
        fontSize: 34,
        fontWeight: 500,
        color: 'var(--osd-accent)',
      }}
    >
      Ce qui est écrit dans le dépôt nourrit chaque session future.
    </div>
    <Footer />
  </div>
);

const Reflexes: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 03 — Git et agents" />
    <Heading>Git comme d'habitude — vraiment</Heading>
    <div style={{ marginTop: 40 }}>
      <Bullet>Une branche par tâche d'agent — comme pour un·e collègue</Bullet>
      <Bullet>Un worktree par session parallèle — chaque agent chez lui</Bullet>
      <Bullet>Commits fréquents, diffs relus avant d'approuver</Bullet>
    </div>
    <div
      style={{
        fontFamily: MONO,
        fontSize: 26,
        lineHeight: 1.7,
        background: TINT,
        borderLeft: '4px solid var(--osd-accent)',
        padding: '24px 32px',
        marginTop: 48,
        display: 'inline-block',
      }}
    >
      cd poet-laval-climate && opencode
      <br />
      /init <span style={{ color: MUTED }}>— première visite seulement</span>
    </div>
    <div
      style={{
        marginTop: 48,
        fontSize: 36,
        fontWeight: 500,
        color: 'var(--osd-accent)',
      }}
    >
      → Retour au travail — clonez, lancez, /init.
    </div>
    <Footer />
  </div>
);

export const meta: SlideMeta = {
  title: 'Vignette — Git et agents',
  createdAt: '2026-10-02T05:13:58.387Z',
};

export default [Maison, Reflexes] satisfies Page[];
