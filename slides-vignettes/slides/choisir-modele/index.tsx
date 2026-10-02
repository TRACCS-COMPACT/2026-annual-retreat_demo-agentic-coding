import { useSlidePageNumber } from '@open-slide/core';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import modelsShot from './assets/models-selection.png';

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
      style={{ fontSize: '45px', fontWeight: 500, color: 'var(--osd-accent)', letterSpacing: '0.16em', textTransform: 'uppercase' }}
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

const Cue = ({ children }: { children: string }) => (
  <div
    style={{
      marginTop: 56,
      fontSize: 36,
      fontWeight: 500,
      color: 'var(--osd-accent)',
    }}
  >
    → {children}
  </div>
);

const ScaleBox = ({ title, desc, hot }: { title: string; desc: string; hot?: boolean }) => (
  <div
    style={{
      flex: 1,
      background: TINT,
      border: `1px solid ${LINE}`,
      borderTop: hot ? '4px solid var(--osd-accent)' : `4px solid ${SKY}`,
      padding: '20px 28px',
    }}
  >
    <div style={{ fontFamily: MONO, fontSize: 30, fontWeight: 600, color: INK }}>
      {title}
    </div>
    <div style={{ fontSize: 22, lineHeight: 1.4, color: MUTED, marginTop: 10 }}>
      {desc}
    </div>
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
      VIGNETTE 01 / 05
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
      Le bon modèle
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
      Commencer petit, monter si nécessaire.
    </p>
    <Footer />
  </div>
);

const Cover: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 01 — Le bon modèle" />
    <Heading>Commencer petit, monter si nécessaire</Heading>
    <div style={{ display: 'flex', gap: 24, marginTop: 56 }}>
      <ScaleBox title="PETIT" desc="flash / léger — la plupart des tâches" hot />
      <ScaleBox title="MOYEN" desc="quand la tâche résiste" />
      <ScaleBox title="FRONTALIER" desc="Vraiment difficile — rarement nécessaire" />
    </div>
    <div style={{ marginTop: 56 }}>
      <Bullet>Coût, latence et empreinte varient du simple au centuple</Bullet>
      <Bullet>Le plus gros modèle n'est pas toujours le meilleur</Bullet>
    </div>
    <Footer />
  </div>
);

const Autoregule: Page = () => (
  <div style={{ ...page, position: 'relative', paddingTop: 120 }}>
    <TopBar label="VIGNETTE 01 — Le bon modèle" />
    <Heading>L'agent peut choisir lui-même</Heading>
    <div style={{ marginTop: 44 }}>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 28,
          lineHeight: 1.6,
          background: TINT,
          borderLeft: '4px solid var(--osd-accent)',
          padding: '24px 32px',
          maxWidth: 1000,
        }}
      >
        « Analyse la tâche en cours et propose le plus petit modèle capable de la
        résoudre. »
      </div>
    </div>
    <div style={{ display: 'flex', gap: 96, marginTop: 48, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <Bullet>Demandez-lui d'évaluer la tâche avant de coder</Bullet>
        <Bullet>Un modèle « flash » suffit souvent — économique et rapide</Bullet>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 26,
            color: MUTED,
            marginTop: 36,
          }}
        >
          catalogue : cortecs.ai/serverlessModels
        </div>
      </div>
      <img
        src={modelsShot}
        alt="Sélection de modèle dans OpenCode (/models)"
        style={{ width: 540, height: 'auto', border: `1px solid ${LINE}` }}
      />
    </div>
    <Cue>Retour au travail — essayez /models maintenant.</Cue>
    <Footer />
  </div>
);

export const meta: SlideMeta = {
  title: 'Vignette 01 — Le bon modèle',
  createdAt: '2026-10-02T18:46:09.207Z',
};

export default [TitleSlide, Cover, Autoregule] satisfies Page[];
