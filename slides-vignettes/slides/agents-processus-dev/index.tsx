import { ImagePlaceholder, useSlidePageNumber } from '@open-slide/core';
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

const Arrow = () => (
  <span style={{ color: 'var(--osd-accent)', fontSize: 36, fontFamily: MONO }}>→</span>
);

const StepBox = ({ title, desc }: { title: string; desc: string }) => (
  <div
    style={{
      flex: 1,
      background: TINT,
      border: `1px solid ${LINE}`,
      borderTop: '4px solid var(--osd-accent)',
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

const LinkLine = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{
      fontFamily: MONO,
      fontSize: 24,
      color: 'var(--osd-accent)',
      textDecoration: 'none',
      display: 'block',
      marginTop: 16,
    }}
  >
    {label}
  </a>
);

const Carte: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 05 — Dans le processus" />
    <Heading>Où les agents s'insèrent</Heading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 64 }}>
      <StepBox title="POSTE" desc="au quotidien, dans votre dépôt" />
      <Arrow />
      <StepBox title="CI" desc="workflows, tests, issues → PR" />
      <Arrow />
      <StepBox title="REVUE" desc="pré-filtre des diffs" />
      <Arrow />
      <StepBox title="DOC" desc="maintenance continue" />
    </div>
    <div
      style={{
        marginTop: 56,
        fontSize: 34,
        fontWeight: 500,
        color: 'var(--osd-accent)',
      }}
    >
      La règle, partout : l'humain relit et décide.
    </div>
    <Footer />
  </div>
);

const Revue: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 05 — Dans le processus" />
    <Heading>La revue de PR par agent</Heading>
    <div style={{ display: 'flex', gap: 96, marginTop: 48, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <Bullet>CodeRabbit : relecture automatique de chaque PR — un pré-filtre utile</Bullet>
        <Bullet>GitHub Actions et GitLab CI peuvent appeler OpenCode directement</Bullet>
        <Bullet>Copilot coding agent : issue → PR → review, enchaîné</Bullet>
        <LinkLine href="https://coderabbit.ai" label="coderabbit.ai" />
        <LinkLine href="https://opencode.ai/docs/github/" label="opencode.ai/docs/github" />
      </div>
      <ImagePlaceholder
        hint="Capture d'écran d'une revue de PR par CodeRabbit (commentaires sur un diff)"
        width={620}
        height={380}
      />
    </div>
    <Footer />
  </div>
);

const Doc: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 05 — Dans le processus" />
    <Heading>La documentation, premier gain sûr</Heading>
    <div style={{ marginTop: 40 }}>
      <Bullet>Tenir la doc à jour : le premier usage rentable et peu risqué</Bullet>
      <Bullet>Un agent dédié — le pattern @docs-agent — lit le code, écrit la doc</Bullet>
    </div>
    <p
      style={{
        fontSize: 48,
        fontWeight: 500,
        lineHeight: 1.4,
        color: 'var(--osd-accent)',
        margin: '56px 0 0',
      }}
    >
      L'humain relit et décide.
    </p>
    <div
      style={{
        marginTop: 48,
        fontSize: 36,
        fontWeight: 500,
        color: 'var(--osd-accent)',
      }}
    >
      → Retour au travail — à vos dépôts.
    </div>
    <Footer />
  </div>
);

export const meta: SlideMeta = {
  title: 'Vignette — Agents dans le processus',
  createdAt: '2026-10-02T05:22:04.511Z',
};

export default [Carte, Revue, Doc] satisfies Page[];
