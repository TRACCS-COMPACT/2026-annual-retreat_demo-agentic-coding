import {
  Step,
  Steps,
  useSlidePageNumber,
} from '@open-slide/core';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import type { ReactNode } from 'react';
import opencodeShot from '@assets/opencode.png';
import agentsShot from '@assets/opencode-agents.png';

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
      style={{ fontSize: '45px', fontWeight: 500, color: 'var(--osd-accent)', letterSpacing: '0.16em', textTransform: 'uppercase' }}
    >
      {label}
    </div>
  </div>
);

const Heading = ({ children }: { children: ReactNode }) => (
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
    <span style={{ color: 'var(--osd-accent)', fontSize: 28 }}>—</span>
    <span style={{ fontSize: 32, lineHeight: 1.5 }}>{children}</span>
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
        fontSize: 28,
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

const ProgRow = ({
  n,
  duree,
  etape,
  support,
  href,
}: {
  n: string;
  duree: string;
  etape: string;
  support: string;
  href?: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 32,
      padding: '18px 0',
      borderBottom: `1px solid ${LINE}`,
    }}
  >
    <span style={{ fontFamily: MONO, fontSize: 26, color: 'var(--osd-accent)', width: 50 }}>
      {n}
    </span>
    <span style={{ fontFamily: MONO, fontSize: 26, color: INK, width: 130 }}>{duree}</span>
    <span style={{ flex: 1, fontSize: 28, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
      {etape}
    </span>
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: MONO,
          fontSize: 24,
          color: 'var(--osd-accent)',
          textDecoration: 'none',
          width: 320,
        }}
      >
        {support}
      </a>
    ) : (
      <span style={{ fontFamily: MONO, fontSize: 24, color: MUTED, width: 320 }}>
        {support}
      </span>
    )}
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
    <Heading>Trois objectifs pour 3 h de travail</Heading>
    <Steps>
      <Step>
        <div style={{ display: 'flex', gap: 64, marginTop: 64 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 44, fontWeight: 500 }}>Comprendre</div>
            <div style={{ fontSize: 26, lineHeight: 1.4, color: MUTED, marginTop: 12 }}>
              les concepts de base
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
          <p style={{ fontSize: 38, lineHeight: 1.4, margin: '0 0 28px' }}>
            Apprendre à coder avec des agents, de manière robuste et fiable.
          </p>
        </div>
      </Step>
      <Step>
        <div style={{ marginTop: 40 }}>
          <Card>
            <p style={{ fontSize: 40, lineHeight: 1.45, fontWeight: 500, margin: 0 }}>
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
      <div
        style={{
          fontSize: 24,
          lineHeight: 1.4,
          color: MUTED,
          marginTop: 16,
          maxWidth: 1100,
        }}
      >
        Un token ≈ un fragment de mot (4 caractères en moyenne) — l'unité que le modèle
        lit et prédit.
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
      <Step>
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
      </Step>
    </Steps>
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
      LLM <span style={{ color: 'var(--osd-accent)' }}>+</span> instructions (rôle, tâche){' '}
      <span style={{ color: 'var(--osd-accent)' }}>+</span> contexte / mémoire{' '}
      <span style={{ color: 'var(--osd-accent)' }}>+</span> outils (fichiers, shell, git)
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
    <Heading>
      Deux ingrédients : un{' '}
      <span style={{ color: 'var(--osd-accent)' }}>modèle</span>, un{' '}
      <span style={{ color: 'var(--osd-accent)' }}>harnais</span>
    </Heading>
    <div style={{ display: 'flex', gap: 96, marginTop: 56, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <Steps>
          <Step>
            <Block label="L'accès aux modèles">
              <Item>API / SDK + clé d'API</Item>
              <Item>facturation au token ou forfaitaire</Item>
              <Item>Cortecs — passerelle européenne, RGPD</Item>
            </Block>
          </Step>
          <Step>
            <Block label="Le harnais">
              <Item>VS Code + Kilo Code — l'IDE</Item>
              <Item>OpenCode — le terminal</Item>
              <Item>aussi : Copilot, Claude Code, Continue…</Item>
            </Block>
          </Step>
          <Step>
            <Card>
              <p style={{ fontSize: 30, lineHeight: 1.4, fontWeight: 500, margin: 0 }}>
                Notre choix aujourd'hui : OpenCode · VS Code + Kilo Code
              </p>
            </Card>
          </Step>
        </Steps>
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
        <Steps>
          <Step>
            <div>
              <div style={{ fontSize: 30, fontWeight: 500 }}>Compaction</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 6 }}>
                résumer les longues sessions, garder l'essentiel
              </div>
            </div>
          </Step>
          <Step>
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 30, fontWeight: 500 }}>Notes structurées</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 6 }}>
                AGENTS.md, PLANS.md, DESIGN.md — créés via /init
              </div>
            </div>
          </Step>
          <Step>
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 30, fontWeight: 500 }}>Le bon niveau de détail</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 6 }}>
                un plan ni trop vague, ni trop verbeux
              </div>
            </div>
          </Step>
          <Step>
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 30, fontWeight: 500 }}>Sous-agents</div>
              <div style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, marginTop: 6 }}>
                découper la tâche, spécialiser, cloisonner le contexte
              </div>
            </div>
          </Step>
        </Steps>
      </div>
      <Steps>
        <Step>
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
        </Step>
      </Steps>
    </div>
    <Footer />
  </div>
);

const Workflow: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="06 — Le workflow typique" />
    <Heading>Trois temps, une boucle</Heading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 40 }}>
      <PhaseBox title="PLAN" desc="ce qu'il va faire, et comment" />
      <Arrow />
      <PhaseBox title="REVUE" desc="vous relisez, vous ajustez" tone="human" />
      <Arrow />
      <PhaseBox title="BUILD" desc="il exécute, vous vérifiez" />
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        gap: 96,
        marginTop: 40,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ width: 620, flexShrink: 0 }}>
        <Steps>
          <Step>
            <img
              src={agentsShot}
              alt="Agents dans OpenCode"
              style={{ width: 620, height: 'auto', lineHeight: '0.8' }}
            />
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1 }}>
        <Steps>
          <Step>
            <div style={{ fontFamily: MONO, fontSize: 30, color: INK }}>
              réfléchir <span style={{ color: 'var(--osd-accent)' }}>→</span> agir{' '}
              <span style={{ color: 'var(--osd-accent)' }}>→</span> observer
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
          </Step>
        </Steps>
      </div>
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
    <Heading>L'atelier d'aujourd'hui</Heading>
    <p style={{ fontSize: 28, lineHeight: 1.4, color: MUTED, margin: '20px 0 0', maxWidth: 1500 }}>
      Deux temps de 60 minutes, séparés par une pause — restitution collective en clôture.
    </p>
    <div style={{ marginTop: 40 }}>
      <div
        style={{
          display: 'flex',
          gap: 32,
          padding: '12px 0',
          borderBottom: `2px solid ${LINE}`,
          fontFamily: MONO,
          fontSize: 22,
          color: 'var(--osd-accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ width: 50 }}>#</span>
        <span style={{ width: 130 }}>Durée</span>
        <span style={{ flex: 1 }}>Étape</span>
        <span style={{ width: 320 }}>Support</span>
      </div>
      <ProgRow
        n="1"
        duree="15 min"
        etape="Introduction — concepts de base : LLM, agent, contexte, workflow"
        support="slides-introduction/"
      />
      <ProgRow
        n="2"
        duree="15 min"
        etape="Mise en place technique : Cortecs, puis OpenCode ou VS Code + Kilo Code"
        support="SETUP.md"
      />
      <ProgRow
        n="3"
        duree="60 min"
        etape="Atelier guidé — le climat du Poët-Laval, dont 15 min de débrief"
        support="poet-laval-climate"
        href="https://github.com/TRACCS-COMPACT/poet-laval-climate"
      />
      <ProgRow n="4" duree="15 min" etape="Pause" support="—" />
      <ProgRow
        n="5"
        duree="60 min"
        etape="Travail libre — votre vrai problème, avec plans et AGENTS.md"
        support="—"
      />
      <ProgRow
        n="6"
        duree="15 min"
        etape="Restitution — chacun·e décrit son travail avec l'agent"
        support="—"
      />
    </div>
    <Footer />
  </div>
);

const Retenir: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <TopBar label="09 — À retenir" />
    <Heading>Trois choses à retenir</Heading>
    <div
      style={{
        marginTop: 72,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 56,
      }}
    >
      <div style={{ fontSize: 56, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
        Agent = LLM + instructions + contexte + outils
      </div>
      <div style={{ fontSize: 56, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
        Le contexte est la ressource clef à contrôler
      </div>
      <div style={{ fontSize: 56, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
        Petites tâches, plan avant build, hygiène git
      </div>
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
