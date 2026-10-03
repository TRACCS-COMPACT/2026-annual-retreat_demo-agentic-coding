import { Step, Steps, useSlidePageNumber } from '@open-slide/core';
import reportShot from './assets/footprint-report.png';
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

const ToolCard = ({
  name,
  desc,
  url,
}: {
  name: string;
  desc: string;
  url: string;
}) => (
  <div
    style={{
      flex: 1,
      background: TINT,
      border: `1px solid ${LINE}`,
      borderTop: '4px solid var(--osd-accent)',
      padding: '28px 36px',
    }}
  >
    <div style={{ fontSize: 34, fontWeight: 600, color: INK }}>{name}</div>
    <div style={{ fontSize: 24, lineHeight: 1.5, color: MUTED, marginTop: 14 }}>
      {desc}
    </div>
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{
        fontFamily: MONO,
        fontSize: 22,
        color: 'var(--osd-accent)',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: 20,
      }}
    >
      {url.replace('https://', '')}
    </a>
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
      VIGNETTE 02 / 05
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
      Empreinte environnementale
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
      Mesurer, pour un usage responsable.
    </p>
    <Footer />
  </div>
);

const Pourquoi: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 02 — Empreinte environnementale" />
    <Heading>L'inférence a un coût mesurable</Heading>
    <div
      style={{
        fontSize: 64,
        fontWeight: 500,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
        margin: '56px 0 0',
      }}
    >
      Session <span style={{ color: 'var(--osd-accent)' }}>agentique</span> ≫ session de
      chat
    </div>
    <Steps>
      <Step>
        <Bullet>Les boucles, outils et relectures multiplient les tokens consommés</Bullet>
      </Step>
      <Step>
        <Bullet>Impact significatif : énergie, carbone, eau, matériaux</Bullet>
      </Step>
      <Step>
        <Bullet>Le choix du modèle est le premier levier (voir vignette 01)</Bullet>
      </Step>
    </Steps>
    <Footer />
  </div>
);

const Comparer: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 02 — Empreinte environnementale" />
    <Heading>Comparer avant de choisir</Heading>
    <div style={{ display: 'flex', gap: 40, marginTop: 56 }}>
      <ToolCard
        name="Compar:IA"
        desc="Comparateur public français — score énergie A–F par modèle, niveau d'ouverture, licence"
        url="https://arene.comparia.beta.gouv.fr/models"
      />
      <ToolCard
        name="CLEER"
        desc="Énergie estimée par token des modèles fermés — scénarios chat et agentiques"
        url="https://cleerdash.sustainableaigroup.com/"
      />
    </div>
    <div
      style={{
        marginTop: 48,
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 1.5,
        color: 'var(--osd-accent)',
      }}
    >
      Attention :
      <br />
      — ces outils mesurent uniquement les impacts de l'inférence.
      <br />
      — et ne prennent pas en compte les effets indirects (ex. pour nous : + de calcul
      HPC)
    </div>
    <Footer />
  </div>
);

const Mesurer: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="VIGNETTE 02 — Empreinte environnementale" />
    <Heading>Mesurer, pour un usage responsable</Heading>
    <div style={{ display: 'flex', gap: 96, marginTop: 48, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 26,
            background: TINT,
            borderLeft: '4px solid var(--osd-accent)',
            padding: '20px 28px',
            display: 'inline-block',
          }}
        >
          opencode.db <span style={{ color: 'var(--osd-accent)' }}>→</span> EcoLogits{' '}
          <span style={{ color: 'var(--osd-accent)' }}>→</span> report.md
        </div>
        <Bullet>EcoLogits : bibliothèque open source, approche cycle de vie</Bullet>
        <Bullet>
          opencode-footprint-monitor : analyse post-hoc, 100 % locale, snapshots
          partageables
        </Bullet>
        <a
          href="https://github.com/lesommer/opencode-footprint-monitor"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: MONO,
            fontSize: 26,
            color: 'var(--osd-accent)',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: 36,
          }}
        >
          github.com/lesommer/opencode-footprint-monitor
        </a>
      </div>
      <img
        src={reportShot}
        alt="Rapport d'empreinte généré par opencode-footprint-monitor"
        style={{ width: 620, height: 'auto', border: `1px solid ${LINE}` }}
      />
    </div>
    <div
      style={{
        marginTop: 48,
        fontSize: 36,
        fontWeight: 500,
        color: 'var(--osd-accent)',
      }}
    >
      → Retour au travail — mesurer, c'est déjà optimiser.
    </div>
    <Footer />
  </div>
);

export const meta: SlideMeta = {
  title: 'Vignette 02 — Empreinte environnementale',
  createdAt: '2026-10-02T18:45:09.207Z',
};

export default [TitleSlide, Pourquoi, Comparer, Mesurer] satisfies Page[];
