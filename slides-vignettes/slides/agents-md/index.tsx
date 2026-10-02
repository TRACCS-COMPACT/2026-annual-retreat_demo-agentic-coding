import { Step, Steps, useSlidePageNumber } from '@open-slide/core';
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

const Row = ({
  n,
  label,
  desc,
}: {
  n: string;
  label: string;
  desc: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 36,
      padding: '24px 0',
      borderBottom: `1px solid ${LINE}`,
    }}
  >
    <span style={{ fontFamily: MONO, fontSize: 28, fontWeight: 500, color: 'var(--osd-accent)' }}>
      {n}
    </span>
    <span
      style={{
        fontSize: 40,
        fontWeight: 500,
        letterSpacing: '-0.01em',
        minWidth: 420,
      }}
    >
      {label}
    </span>
    <span style={{ fontSize: 'var(--osd-size-body)', color: MUTED, lineHeight: 1.4 }}>
      {desc}
    </span>
  </div>
);

const TitleSlide: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTES FLASH — IA AGENTIQUE POUR LE CODE" />
    <div
      style={{
        fontFamily: MONO,
        fontSize: 26,
        color: 'var(--osd-accent)',
        letterSpacing: '0.14em',
      }}
    >
      VIGNETTE 04 / 05
    </div>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 500,
        letterSpacing: '-0.02em',
        lineHeight: 1.08,
        margin: '28px 0 0',
      }}
    >
      AGENTS.md
    </h1>
    <div
      style={{
        width: 96,
        height: 4,
        background: 'var(--osd-accent)',
        margin: '48px 0 36px',
      }}
    />
    <p style={{ fontSize: 38, lineHeight: 1.5, color: MUTED, margin: 0 }}>
      Le README pour agents — démarrez petit, itérez.
    </p>
    <Footer />
  </div>
);

const Standard: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 04 — AGENTS.md" />
    <Heading>Le « README pour agents »</Heading>
    <div
      style={{
        fontSize: 120,
        fontWeight: 500,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        margin: '48px 0 0',
        color: 'var(--osd-accent)',
      }}
    >
      60 000+
    </div>
    <p
      style={{
        fontSize: 'var(--osd-size-body)',
        lineHeight: 1.5,
        color: MUTED,
        margin: '24px 0 0',
        maxWidth: 1300,
      }}
    >
      dépôts publics en ont un — et tous les harnais le lisent : OpenCode, Kilo Code,
      Copilot, Claude Code, Cursor…
    </p>
    <div
      style={{
        fontFamily: MONO,
        fontSize: 28,
        color: INK,
        marginTop: 40,
      }}
    >
      agents.md <span style={{ color: 'var(--osd-accent)' }}>—</span> un format ouvert,
      pas une propriété
    </div>
    <Footer />
  </div>
);

const Lecons: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 04 — AGENTS.md" />
    <Heading>Ce qui marche, d'après 2 500 dépôts</Heading>
    <Steps>
      <Step>
        <Row n="01" label="Commandes d'abord" desc="tests, build, lint — exécutables, copiables" />
      </Step>
      <Step>
        <Row n="02" label="Exemples > explications" desc="un vrai extrait de code vaut trois paragraphes" />
      </Step>
      <Step>
        <Row n="03" label="Frontières claires" desc="✅ toujours · ⚠️ demander · 🚫 jamais" />
      </Step>
      <Step>
        <Row n="04" label="Stack précise" desc="versions et outils nommés explicitement" />
      </Step>
    </Steps>
    <Footer />
  </div>
);

const Demarrer: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 04 — AGENTS.md" />
    <Heading>Démarrez petit, itérez</Heading>
    <div
      style={{
        fontFamily: MONO,
        fontSize: 28,
        lineHeight: 1.7,
        background: TINT,
        borderLeft: '4px solid var(--osd-accent)',
        padding: '24px 32px',
        marginTop: 44,
        display: 'inline-block',
      }}
    >
      /init <span style={{ color: MUTED }}>→ génère un premier AGENTS.md</span>
      <br />
      puis : une règle ajoutée chaque fois que l'agent se trompe
    </div>
    <div style={{ marginTop: 36 }}>
      <Bullet>Committez-le : il nourrit tous les agents qui passeront derrière</Bullet>
    </div>
    <a
      href="https://github.com/lesommer/2026-09-24_how-to-write-agents-md"
      target="_blank"
      rel="noreferrer"
      style={{
        fontFamily: MONO,
        fontSize: 26,
        color: 'var(--osd-accent)',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: 32,
      }}
    >
      talk OPERA du 24/09 — github.com/lesommer/2026-09-24_how-to-write-agents-md
    </a>
    <div
      style={{
        marginTop: 44,
        fontSize: 36,
        fontWeight: 500,
        color: 'var(--osd-accent)',
      }}
    >
      → Retour au travail — /init sur votre dépôt, maintenant.
    </div>
    <Footer />
  </div>
);

export const meta: SlideMeta = {
  title: 'Vignette 04 — AGENTS.md',
  createdAt: '2026-10-02T18:43:09.207Z',
};

export default [TitleSlide, Standard, Lecons, Demarrer] satisfies Page[];
