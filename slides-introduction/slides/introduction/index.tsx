import {
  ImagePlaceholder,
  Step,
  Steps,
  useSlidePageNumber,
} from '@open-slide/core';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import type { ReactNode } from 'react';
import opencodeShot from '@assets/opencode.png';

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
// Secondary accent — marks the "verification stays human" thread running through the talk
// (Llm closing line, Agent's supervision note, Workflow's REVUE step, Guardrails, Deroule
// phase 2, Retenir #1). Kept out of everything else so it stays a legible signal, not decoration.
const PURPLE = '#6b3fa0';
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
      <span>RETRAITE PC5 COMPACT · OCT 2026</span>
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

const Item = ({ children }: { children: string }) => (
  <li style={{ display: 'flex', gap: 18, alignItems: 'baseline' }}>
    <span style={{ color: 'var(--osd-accent)', fontSize: 26 }}>—</span>
    <span style={{ fontSize: 28, lineHeight: 1.5 }}>{children}</span>
  </li>
);

const Card = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      background: TINT,
      borderLeft: '4px solid var(--osd-accent)',
      padding: '28px 36px',
    }}
  >
    {children}
  </div>
);

const Check = ({ children }: { children: string }) => (
  <div style={{ display: 'flex', gap: 28, alignItems: 'baseline', marginTop: 24 }}>
    <span
      style={{
        fontFamily: MONO,
        fontSize: 34,
        color: 'var(--osd-accent)',
        fontWeight: 700,
      }}
    >
      ✓
    </span>
    <span style={{ fontSize: 40, lineHeight: 1.5 }}>
      <strong style={{ fontWeight: 600 }}>{children.split(' — ')[0]}</strong>
      <span style={{ color: MUTED }}> — {children.split(' — ')[1]}</span>
    </span>
  </div>
);

const LoopBox = ({ label }: { label: string }) => (
  <div
    style={{
      background: TINT,
      border: `1px solid ${LINE}`,
      borderTop: '4px solid var(--osd-accent)',
      padding: '20px 36px',
      fontFamily: MONO,
      fontSize: 28,
    }}
  >
    {label}
  </div>
);

const Arrow = () => (
  <span style={{ color: 'var(--osd-accent)', fontSize: 36, fontFamily: MONO }}>→</span>
);

const Block = ({ label, children }: { label: string; children: ReactNode }) => (
  <div>
    <div
      style={{
        fontSize: 24,
        fontWeight: 500,
        color: 'var(--osd-accent)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </div>
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: '16px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {children}
    </ul>
  </div>
);

const CodeLine = ({
  children,
  tone,
}: {
  children: string;
  tone?: 'heading' | 'rule';
}) => (
  <div
    style={{
      fontFamily: MONO,
      fontSize: 24,
      lineHeight: 1.65,
      color: tone === 'heading' ? INK : tone === 'rule' ? 'var(--osd-accent)' : MUTED,
      fontWeight: tone === 'heading' ? 600 : 400,
    }}
  >
    {children}
  </div>
);

const PhaseBox = ({
  title,
  desc,
  tone = 'accent',
}: {
  title: string;
  desc: string;
  tone?: 'accent' | 'human';
}) => {
  const barColor = tone === 'human' ? PURPLE : 'var(--osd-accent)';
  return (
    <div
      style={{
        flex: 1,
        background: TINT,
        border: `1px solid ${LINE}`,
        borderTop: `4px solid ${barColor}`,
        padding: '20px 28px',
      }}
    >
      <div style={{ fontFamily: MONO, fontSize: 30, fontWeight: 600, color: tone === 'human' ? PURPLE : INK }}>
        {title}
      </div>
      <div style={{ fontSize: 22, lineHeight: 1.4, color: MUTED, marginTop: 10 }}>
        {desc}
      </div>
    </div>
  );
};

const LevelBox = ({ n, label }: { n: string; label: string }) => (
  <div
    style={{
      flex: 1,
      background: TINT,
      border: `1px solid ${LINE}`,
      borderTop: '4px solid var(--osd-accent)',
      padding: '16px 20px',
    }}
  >
    <div style={{ fontFamily: MONO, fontSize: 26, fontWeight: 600, color: 'var(--osd-accent)' }}>
      {n}
    </div>
    <div style={{ fontSize: 22, fontWeight: 500, color: INK, marginTop: 8 }}>{label}</div>
  </div>
);

const NumRow = ({ n, children }: { n: string; children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 36,
      padding: '22px 0',
      borderBottom: `1px solid ${LINE}`,
    }}
  >
    <span style={{ fontFamily: MONO, fontSize: 32, color: 'var(--osd-accent)' }}>{n}</span>
    <span style={{ fontSize: 40, lineHeight: 1.5, letterSpacing: '-0.01em' }}>{children}</span>
  </div>
);

const LinkRow = ({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) => (
  <div
    style={{
      padding: '14px 0',
      borderBottom: `1px solid ${LINE}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}
  >
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        fontSize: 32,
        fontWeight: 500,
        color: 'var(--osd-accent)',
        textDecoration: 'none',
        letterSpacing: '-0.01em',
      }}
    >
      {title}
    </a>
    <span style={{ fontSize: 24, lineHeight: 1.4, color: MUTED }}>{desc}</span>
  </div>
);

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 120px',
    }}
  >
    <TopBar label="TRACCS-COMPACT — Retraite annuelle 2026" />
    <div
      style={{
        position: 'absolute',
        right: 120,
        bottom: 56,
        fontSize: 30,
        fontWeight: 500,
        color: 'var(--osd-accent)',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
      }}
    >
      Le Poët-Laval · Octobre 2026
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
      <span style={{ color: 'var(--osd-accent)' }}>IA agentique</span> pour le
      <br />
      développement logiciel
    </h1>
    <div
      style={{
        width: 96,
        height: 4,
        background: 'var(--osd-accent)',
        margin: '48px 0 36px',
      }}
    />
    <p
      style={{
        fontSize: 38,
        lineHeight: 1.5,
        color: MUTED,
        margin: 0,
        maxWidth: 1180,
      }}
    >
      Concepts de base pour travailler avec un agent de codage.
    </p>
    <div style={{ fontSize: 30, fontWeight: 500, color: MUTED, marginTop: 40 }}>
      Animé par Jordi Bolibar et Julien Le Sommer
    </div>
  </div>
);

const Objectifs: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="01 — Pourquoi cette session" />
    <Heading>Trois objectifs, une après-midi</Heading>
    <Steps>
      <Step>
        <div style={{ display: 'flex', gap: 64, marginTop: 64 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 44, fontWeight: 500 }}>Comprendre</div>
            <div style={{ fontSize: 26, lineHeight: 1.4, color: MUTED, marginTop: 12 }}>
              les concepts : LLM, agent, contexte, workflow
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 44, fontWeight: 500 }}>Pratiquer</div>
            <div style={{ fontSize: 26, lineHeight: 1.4, color: MUTED, marginTop: 12 }}>
              sur un problème guidé, pas à pas
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 44, fontWeight: 500 }}>Démarrer</div>
            <div style={{ fontSize: 26, lineHeight: 1.4, color: MUTED, marginTop: 12 }}>
              sur un vrai problème de développement
            </div>
          </div>
        </div>
      </Step>
      <Step>
        <div style={{ marginTop: 64 }}>
          <Card>
            <p style={{ fontSize: 34, lineHeight: 1.45, fontWeight: 500, margin: 0 }}>
              Méta : ces slides — et le dépôt qui les héberge — ont été produites avec un
              agent.
            </p>
          </Card>
        </div>
      </Step>
    </Steps>
    <Footer />
  </div>
);

const Llm: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="02 — Un LLM, c'est quoi ?" />
    <Heading>Une machine à prédire le mot suivant</Heading>
    <div style={{ marginTop: 44 }}>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 30,
          background: TINT,
          borderLeft: '4px solid var(--osd-accent)',
          padding: '24px 32px',
          display: 'inline-block',
        }}
      >
        texte <span style={{ color: 'var(--osd-accent)' }}>→</span> tokens{' '}
        <span style={{ color: 'var(--osd-accent)' }}>→</span> prédiction du token suivant
      </div>
    </div>
    <Steps>
      <Step>
        <Bullet>
          Entraîné sur un corpus immense : des capacités larges, aucune garantie de vérité
        </Bullet>
      </Step>
      <Step>
        <Bullet>Il peut se tromper avec aplomb — les hallucinations sont plausibles</Bullet>
      </Step>
      <Step>
        <Bullet>
          Pas de mémoire entre deux appels : tout passe par la fenêtre de contexte, finie
        </Bullet>
      </Step>
    </Steps>
    <div
      style={{
        marginTop: 56,
        fontSize: 34,
        fontWeight: 500,
        color: PURPLE,
      }}
    >
      D'où la règle : la vérification reste humaine.
    </div>
    <Footer />
  </div>
);

const Agent: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="03 — Un agent, c'est quoi ?" />
    <Heading>Un LLM dans une boucle, avec des outils</Heading>
    <div
      style={{
        fontFamily: MONO,
        fontSize: 30,
        marginTop: 48,
        color: INK,
      }}
    >
      LLM <span style={{ color: 'var(--osd-accent)' }}>+</span> contexte / mémoire{' '}
      <span style={{ color: 'var(--osd-accent)' }}>+</span> tâche{' '}
      <span style={{ color: 'var(--osd-accent)' }}>+</span> rôle{' '}
      <span style={{ color: 'var(--osd-accent)' }}>+</span> outils
    </div>
    <Steps>
      <Step>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 56 }}>
          <LoopBox label="réfléchir" />
          <Arrow />
          <LoopBox label="agir" />
          <Arrow />
          <LoopBox label="observer" />
          <span style={{ fontFamily: MONO, fontSize: 28, color: MUTED }}>↺ et on recommence</span>
        </div>
      </Step>
      <Step>
        <div style={{ marginTop: 48 }}>
          <Card>
            <div style={{ display: 'flex', gap: 64 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 30, fontWeight: 500, color: MUTED }}>
                  Le chat conseille
                </div>
                <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 10 }}>
                  vous tapez, vous exécutez
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 30, fontWeight: 500, color: 'var(--osd-accent)' }}>
                  L'agent agit
                </div>
                <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 10 }}>
                  il écrit, exécute, itère —{' '}
                  <strong style={{ color: PURPLE, fontWeight: 600 }}>
                    vous gardez la supervision
                  </strong>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Step>
    </Steps>
    <Footer />
  </div>
);

const EnPratique: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="04 — En pratique" />
    <Heading>Deux ingrédients : un modèle, un harnais</Heading>
    <div style={{ display: 'flex', gap: 96, marginTop: 56, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <Block label="L'accès aux modèles">
          <Item>API / SDK + clé d'API</Item>
          <Item>facturation au token ou forfaitaire</Item>
          <Item>Cortecs — passerelle européenne, RGPD</Item>
        </Block>
        <Block label="Le harnais">
          <Item>VS Code + Kilo Code — l'IDE</Item>
          <Item>OpenCode — le terminal</Item>
          <Item>aussi : Copilot, Claude Code, Continue…</Item>
        </Block>
        <Card>
          <p style={{ fontSize: 30, lineHeight: 1.4, fontWeight: 500, margin: 0 }}>
            Notre choix aujourd'hui : OpenCode · VS Code + Kilo Code
          </p>
        </Card>
      </div>
      <img
        src={opencodeShot}
        alt="OpenCode (TUI)"
        style={{ width: 620, height: 'auto' }}
      />
    </div>
    <Footer />
  </div>
);

const Contexte: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="05 — Gestion du contexte" />
    <Heading>Le contexte est la ressource critique</Heading>
    <div style={{ display: 'flex', gap: 96, marginTop: 40, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: 'var(--osd-size-body)',
            lineHeight: 1.5,
            color: MUTED,
            margin: 0,
          }}
        >
          Du prompt engineering au context engineering — nourrissez-le, économisez-le.
        </p>
        <div style={{ marginTop: 32 }}>
          <div
            style={{
              display: 'flex',
              height: 28,
              borderRadius: 6,
              overflow: 'hidden',
              border: `1px solid ${LINE}`,
            }}
          >
            <div style={{ flex: 3, background: 'var(--osd-accent)' }} />
            <div style={{ flex: 2, background: SKY }} />
            <div style={{ flex: 5, background: TINT }} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 10,
              fontFamily: MONO,
              fontSize: 20,
              color: MUTED,
            }}
          >
            <span>système + outils</span>
            <span>historique</span>
            <span>budget restant</span>
          </div>
          <p style={{ fontSize: 22, lineHeight: 1.4, color: MUTED, margin: '12px 0 0' }}>
            Chaque appel consomme un{' '}
            <strong style={{ color: 'var(--osd-accent)', fontWeight: 600 }}>
              budget fixe de tokens
            </strong>{' '}
            — la fenêtre de contexte.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginTop: 32 }}>
          <div>
            <div style={{ fontSize: 30, fontWeight: 500 }}>Compaction</div>
            <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 6 }}>
              résumer les longues sessions, garder l'essentiel
            </div>
          </div>
          <div>
            <div style={{ fontSize: 30, fontWeight: 500 }}>Notes structurées</div>
            <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 6 }}>
              AGENTS.md et fichiers de plan — créés via /init
            </div>
          </div>
          <div>
            <div style={{ fontSize: 30, fontWeight: 500 }}>Le bon niveau de détail</div>
            <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 6 }}>
              un plan ni trop vague, ni trop verbeux
            </div>
          </div>
          <div>
            <div style={{ fontSize: 30, fontWeight: 500 }}>Sous-agents</div>
            <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 6 }}>
              découper la tâche, spécialiser, cloisonner le contexte
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 620,
          background: TINT,
          border: `1px solid ${LINE}`,
          borderTop: '4px solid var(--osd-accent)',
          padding: '36px 44px',
        }}
      >
        <CodeLine tone="heading"># AGENTS.md</CodeLine>
        <div style={{ height: 20 }} />
        <CodeLine tone="rule">## Commandes</CodeLine>
        <CodeLine>- tests : pytest -v</CodeLine>
        <CodeLine>- lint : ruff check .</CodeLine>
        <div style={{ height: 20 }} />
        <CodeLine tone="rule">## Règles</CodeLine>
        <CodeLine>- ✅ toujours relire le diff</CodeLine>
        <CodeLine>- ⚠️ demander avant un changement lourd</CodeLine>
        <CodeLine>- 🚫 jamais de secrets</CodeLine>
        <div
          style={{
            height: 1,
            background: SKY,
            margin: '24px 0',
          }}
        />
        <div style={{ fontFamily: MONO, fontSize: 22, color: MUTED }}>
          un écran, pas un manuel — vivant, itéré
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

const Workflow: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="06 — Le workflow typique" />
    <Heading>Trois temps, une boucle</Heading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 56 }}>
      <PhaseBox title="PLAN" desc="ce qu'il va faire, et comment" />
      <Arrow />
      <PhaseBox title="REVUE" desc="vous relisez, vous ajustez" tone="human" />
      <Arrow />
      <PhaseBox title="BUILD" desc="il exécute, vous vérifiez" />
    </div>
    <div style={{ display: 'flex', gap: 96, marginTop: 56, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: MONO, fontSize: 30, color: INK }}>
          prompt <span style={{ color: 'var(--osd-accent)' }}>→</span> think{' '}
          <span style={{ color: 'var(--osd-accent)' }}>→</span> act{' '}
          <span style={{ color: 'var(--osd-accent)' }}>→</span> observe
        </div>
        <p
          style={{
            fontSize: 'var(--osd-size-body)',
            lineHeight: 1.5,
            color: MUTED,
            margin: '32px 0 0',
            maxWidth: 880,
          }}
        >
          Parlez-lui comme à un·e collègue junior : contexte précis, petites tâches,
          feedback régulier.
        </p>
      </div>
      <ImagePlaceholder
        hint="Capture d'écran du mode plan d'OpenCode (TUI)"
        width={620}
        height={360}
      />
    </div>
    <Footer />
  </div>
);

const Guardrails: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="07 — Garde-fous" />
    <Heading>Six réflexes avant de commencer</Heading>
    <div style={{ marginTop: 48 }}>
      <Check>Petites tâches — découper, valider, recommencer</Check>
      <Check>Vérifier — lire le code, questionner le surprenant</Check>
      <Check>Tests — les exécuter avant de continuer</Check>
      <Check>Hygiène git — commits fréquents, diffs relus</Check>
      <Check>Coûts — choisir le plus petit modèle possible pour la tâche</Check>
      <Check>Permissions — lire avant d'approuver, jamais de secrets</Check>
    </div>
    <p
      style={{
        fontSize: 48,
        fontWeight: 500,
        lineHeight: 1.4,
        color: PURPLE,
        margin: '56px 0 0',
      }}
    >
      La vérification reste votre responsabilité.
    </p>
    <Footer />
  </div>
);

const Deroule: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="08 — Le programme" />
    <Heading>L'atelier — et après</Heading>
    <p style={{ fontSize: 28, lineHeight: 1.4, color: MUTED, margin: '20px 0 0', maxWidth: 1500 }}>
      Deux temps de 60 minutes : atelier guidé, puis votre propre problème de développement.
    </p>
    <div
      style={{
        marginTop: 32,
        fontSize: 24,
        fontWeight: 500,
        color: 'var(--osd-accent)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}
    >
      Phase 1 · 60 min — Climat du Poët-Laval
    </div>
    <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
      <LevelBox n="N0" label="Données" />
      <LevelBox n="N1" label="Climat actuel" />
      <LevelBox n="N2" label="Tendance" />
      <LevelBox n="N3" label="Indicateur" />
      <LevelBox n="N4" label="Fiche" />
    </div>
    <div style={{ marginTop: 24 }}>
      <Bullet>Une seule étape à la fois : demandez, puis lisez</Bullet>
      <Bullet>Lisez le code et le résultat avant de continuer</Bullet>
      <Bullet>Répondez aux questions de vérification de chaque niveau</Bullet>
    </div>
    <div
      style={{
        marginTop: 32,
        fontSize: 24,
        fontWeight: 500,
        color: PURPLE,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}
    >
      Phase 2 · 60 min — Votre problème
    </div>
    <div style={{ marginTop: 16, fontSize: 30, fontWeight: 500 }}>
      Votre vrai problème de développement, avec plans et AGENTS.md
    </div>
    <a
      href="https://github.com/TRACCS-COMPACT/poet-laval-climate"
      target="_blank"
      rel="noreferrer"
      style={{
        fontFamily: MONO,
        fontSize: 28,
        color: 'var(--osd-accent)',
        textDecoration: 'none',
        marginTop: 36,
        display: 'inline-block',
      }}
    >
      github.com/TRACCS-COMPACT/poet-laval-climate
    </a>
    <Footer />
  </div>
);

const Retenir: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="09 — À retenir" />
    <Heading>Trois choses à retenir</Heading>
    <div style={{ marginTop: 40 }}>
      <NumRow n="01">
        L'agent est un LLM dans une boucle —{' '}
        <strong style={{ color: PURPLE, fontWeight: 600 }}>la vérification reste la vôtre</strong>
      </NumRow>
      <NumRow n="02">
        Le contexte est la ressource clé — nourrissez-le, économisez-le
      </NumRow>
      <NumRow n="03">
        Petites tâches, plan avant build, hygiène git — la discipline paie
      </NumRow>
    </div>
    <div
      style={{
        marginTop: 32,
        fontSize: 24,
        fontWeight: 500,
        color: 'var(--osd-accent)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}
    >
      Ressources disponibles
    </div>
    <div style={{ marginTop: 12 }}>
      <LinkRow
        href="https://github.com/TRACCS-COMPACT/poet-laval-climate"
        title="poet-laval-climate"
        desc="L'atelier : données ERA5 et stations Météo-France, niveaux 0 → 4"
      />
      <LinkRow
        href="https://github.com/TRACCS-COMPACT/2026-annual-retreat_demo-agentic-coding"
        title="Ce dépôt — SETUP.md"
        desc="Mise en place technique : Cortecs, OpenCode, VS Code + Kilo Code"
      />
      <LinkRow
        href="https://opencode.ai/docs/"
        title="opencode.ai/docs"
        desc="Documentation OpenCode : /init, /models, permissions"
      />
    </div>
    <Footer />
  </div>
);

export const meta: SlideMeta = {
  title: 'IA agentique — Introduction',
  createdAt: '2026-10-02T04:36:34.207Z',
};

export default [
  Cover,
  Objectifs,
  Llm,
  Agent,
  EnPratique,
  Contexte,
  Workflow,
  Guardrails,
  Deroule,
  Retenir,
] satisfies Page[];
