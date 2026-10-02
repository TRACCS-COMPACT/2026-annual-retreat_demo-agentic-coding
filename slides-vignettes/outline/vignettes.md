# Plan détaillé — Présentation « vignettes flash »

> **Usage :** ce document est la source de vérité pour construire le deck open-slide
> `slides/vignettes/`. Il décrit chaque vignette page par page, ses messages clés
> et ses sources. Il ne contient pas le code des slides.

---

## 1. Métadonnées

| Champ | Valeur |
| --- | --- |
| Titre de la présentation | Vignettes flash — IA agentique pour le développement logiciel |
| Deck cible | `slides/` du workspace `slides-vignettes/` (une vignette = un slide `slides/<id>/`) |
| Langue | Français |
| Format | Vignettes flash : **3 minutes maximum** par vignette, puis retour au travail |
| Nombre de pages | 2 à 3 par vignette (~13 pages au total, appelé à grandir) |
| Densité de texte | Minimale — une idée par page, phrases courtes, gros caractères |
| Identité visuelle | **Identique au deck d'introduction** (`slides-introduction/`) — réutiliser son design system (palette, typographie, mise en page) |
| Version / statut | v1 — octobre 2026 |

## 2. Instructions générales

- **Principe de la vignette flash :** interrompre le travail des participants **3 minutes
  au maximum**, présenter une seule idée avec un exemple concret, puis les laisser
  retourner à leur tâche. Chaque vignette se termine par un signal explicite
  « retour au travail » (et, si utile, une action à essayer immédiatement).
- **Autonomie totale :** chaque vignette est un slide indépendant (`slides/<id>/`),
  sans continuité avec les autres — on y accède directement (`/s/<id>`), dans n'importe
  quel ordre, au moment opportun de la session.
- **Rythme :** 2 à 3 pages par vignette — page 1 : l'idée ; page 2 : l'exemple ou
  l'outil ; page 3 (si besoin) : l'action à faire. Rien de plus.
- **Audience :** la même que le deck d'introduction — contributeurs PC5 COMPACT,
  développeur·euse·s et scientifiques qui codent, en train de pratiquer avec un agent.
- **Moment :** pendant l'atelier et la phase de travail libre, au gré des besoins
  des participants (déclenchées par les animateurs).
- **Langue :** français ; les noms d'outils et les commandes restent en anglais.
- **Métadonnées open-slide :** chaque vignette porte un `meta.title` court et
  reconnaissable (le titre de la vignette), pour navigation rapide depuis la home.

## 3. Contexte d'usage

- La session combine un atelier guidé (`poet-laval-climate`, niveaux 0 → 4) et un
  temps de travail libre sur de vrais problèmes de développement.
- Les vignettes flash sont le mécanisme de **micro-pédagogie** de la session : au lieu
  d'un long exposé, les animateurs interrompent brièvement l'assemblée quand un sujet
  devient pertinent pour le travail en cours (choix du modèle, hygiène git, écriture
  d'un AGENTS.md…), et la rendent à l'atelier.
- Ce deck est amené à **s'enrichir au fil de l'eau** : de nouvelles vignettes peuvent
  être ajoutées avant la session, ou pendant, avec l'aide d'un agent.

## 4. Scope

**Couvert (5 vignettes) :**
1. choisir le bon modèle pour une tâche ;
2. mesurer l'empreinte environnementale de ses sessions ;
3. interagir avec un dépôt git ;
4. écrire un AGENTS.md adapté à son projet ;
5. intégrer les agents dans le processus de développement (CI, revue de PR, doc).

**Non couvert :**
- les concepts de base (déjà couverts par le deck d'introduction) ;
- les démos pas-à-pas longues — chaque vignette pointe vers les docs et l'action
  concrète, sans refaire un tutoriel ;
- tout ce qui relève du fine-tuning, du RAG, du MCP détaillé (hors périmètre de la
  session, cf. plan d'introduction).

---

## 5. Plan détaillé — les 5 vignettes

### Vignette 1 — Choisir le bon modèle pour la tâche

- **Slide id proposé :** `slides/choisir-modele/` · **2 pages**
- **Moment suggéré :** pendant l'étape 2 du SETUP, quand chacun choisit un modèle.
- **Messages clés :**
  - Tous les modèles ne se valent pas : capacité, coût, latence et empreinte varient
    du simple au centuple — le plus gros n'est pas toujours le meilleur.
  - Réflexe : **commencer petit** (modèle « flash » ou léger), monter en gamme
    seulement si la tâche le justifie.
  - **Agent autorégulé :** demander à l'agent lui-même d'analyser la tâche et de
    proposer le plus petit modèle capable de la résoudre — il évalue son propre besoin.
- **Contenu suggéré :** page 1 : le réflexe « commencer petit » (échelle simple :
  petit / moyen / frontalier) ; page 2 : capture de la sélection de modèle (`/models`
  dans OpenCode) et l'exemple de prompt autorégulé.
- **Sources :**
  - Catalogue Cortecs — https://cortecs.ai/serverlessModels
  - Kilo Code, Auto Model (routage automatique Efficient/Frontier) —
    https://kilo.ai/auto-model

### Vignette 2 — Mesurer l'empreinte environnementale

- **Slide id proposé :** `slides/empreinte-environnementale/` · **3 pages**
- **Moment suggéré :** juste après la vignette 1 — le choix du modèle est le premier
  levier ; ou en fin d'atelier quand les usages se cumulent.
- **Messages clés :**
  - L'inférence a un coût environnemental mesurable : énergie, gaz à effet de serre,
    eau — et les **sessions agentiques consomment bien plus que le chat** (boucles,
    outils, relectures).
  - Comparer les modèles : **Compar:IA** (comparateur public français, score énergie
    A–F, niveau d'ouverture) et **CLEER** (estimations d'énergie par token des modèles
    fermés, sessions chat vs agentiques).
  - Mesurer ses propres sessions : **EcoLogits** (bibliothèque open source, approche
    cycle de vie) et **opencode-footprint-monitor** (analyse post-hoc de la base
    locale d'OpenCode, rapports et snapshots partageables — zéro envoi de données).
- **Contenu suggéré :** page 1 : pourquoi ça compte (ordre de grandeur chat vs agent) ;
  page 2 : les deux comparateurs (captures) ; page 3 : mesurer ses propres sessions
  avec le monitor (exemple de rapport).
- **Sources :**
  - Compar:IA — https://arene.comparia.beta.gouv.fr/models
  - CLEER Dashboard — https://cleerdash.sustainableaigroup.com/
  - EcoLogits — https://ecologits.ai/latest/ · calculateur https://calculator.ecologits.ai/
  - opencode-footprint-monitor — https://github.com/lesommer/opencode-footprint-monitor

### Vignette 3 — Interagir avec un dépôt git

- **Slide id proposé :** `slides/git-et-agents/` · **2 pages**
- **Moment suggéré :** au lancement de l'atelier, quand les participants clonent le
  dépôt de travail.
- **Messages clés :**
  - Le dépôt **héberge le contexte** de l'agent : AGENTS.md, docs de design, README —
    ce qui est écrit dans le repo nourrit chaque session future.
  - Git sert **comme d'habitude** : branches, worktrees, commits fréquents —
    l'agent s'insère dans le workflow git standard, il ne le remplace pas.
  - Avec OpenCode : partir d'un dépôt cloné (`cd repo && opencode`), puis `/init` au
    premier lancement ; une branche par tâche, un worktree par session parallèle.
- **Contenu suggéré :** page 1 : « le dépôt est la maison de l'agent » (schéma repo =
  code + contexte) ; page 2 : le réflexe git (branche par tâche, commits fréquents,
  diffs relus avant commit).
- **Sources :**
  - OpenCode, docs (init, undo, usage) — https://opencode.ai/docs/
  - AGENTS.md (le standard) — https://agents.md
  - Git worktree — https://git-scm.com/docs/git-worktree

### Vignette 4 — Écrire un AGENTS.md adapté à son projet

- **Slide id proposé :** `slides/agents-md/` · **3 pages**
- **Moment suggéré :** quand un participant travaille sur son vrai dépôt (phase de
  travail libre) et s'apprête à lancer `/init`.
- **Messages clés :**
  - AGENTS.md = le **« README pour agents »** : un format ouvert lu par tous les
    harnais (OpenCode, Kilo Code, Copilot…), adopté par plus de 60 000 dépôts publics.
  - Leçons de l'analyse de plus de 2 500 dépôts : **commandes exécutables dès le début**
    (tests, build, lint), **exemples de code plutôt que descriptions**, **frontières
    claires** (✅ toujours / ⚠️ demander / 🚫 jamais), stack précise (versions !).
  - Générer avec `/init`, puis **itérer** : ajouter une règle chaque fois que l'agent
    se trompe — c'est un fichier vivant.
- **Contenu suggéré :** page 1 : le standard en une image ; page 2 : les 4 leçons des
  2500+ dépôts (exemples réels ✅/⚠️/🚫) ; page 3 : point de départ — extrait d'AGENTS.md
  minimal + renvoi vers le talk OPERA du 24/09.
- **Sources :**
  - GitHub Blog, *How to write a great agents.md: lessons from over 2,500
    repositories* —
    https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/
  - AGENTS.md — https://agents.md
  - Talk « How to Write AGENTS.md Files » (OPERA, 24/09/2026) —
    https://github.com/lesommer/2026-09-24_how-to-write-agents-md
  - OpenCode, doc Rules (`/init`) — https://opencode.ai/docs/rules/

### Vignette 5 — Les agents dans le processus de développement

- **Slide id proposé :** `slides/agents-processus-dev/` · **3 pages**
- **Moment suggéré :** en fin de session — pour les équipes qui ont fini les niveaux
  et se projettent au-delà de l'atelier.
- **Messages clés :**
  - Au-delà du poste de travail : les agents s'intègrent au **processus d'équipe** —
    CI, revue de code, documentation.
  - **Revue de PR par agent** (ex. CodeRabbit) : un pré-filtre utile sur les diffs —
    mais la revue humaine reste la décision finale.
  - **Agents dans la CI** : GitHub Actions et GitLab CI peuvent appeler OpenCode
    directement (issues → PR) ; les plateformes comme GitHub Copilot coding agent
    chainent issue → PR → review.
  - **Maintenance de la documentation** par agent : un des premiers usages sûrs et
    rentables (renvoi : le `@docs-agent` du dépôt d'analyse agents.md).
- **Contenu suggéré :** page 1 : la carte « où les agents s'insèrent » (poste de
  travail → CI → revue → doc) ; page 2 : revue de PR par agent (capture CodeRabbit) ;
  page 3 : la règle d'or — l'humain relit et décide.
- **Sources :**
  - CodeRabbit — https://coderabbit.ai
  - OpenCode, intégration GitHub — https://opencode.ai/docs/github/ · GitLab —
    https://opencode.ai/docs/gitlab/
  - GitHub Copilot, coding agent — https://gh.io/coding-agent-docs

---

## 6. Annexe — liens globaux

| Ressource | URL |
| --- | --- |
| Catalogue Cortecs | https://cortecs.ai/serverlessModels |
| Kilo Code, Auto Model | https://kilo.ai/auto-model |
| Compar:IA | https://arene.comparia.beta.gouv.fr/models |
| CLEER Dashboard | https://cleerdash.sustainableaigroup.com/ |
| EcoLogits | https://ecologits.ai/latest/ |
| opencode-footprint-monitor | https://github.com/lesommer/opencode-footprint-monitor |
| OpenCode (docs) | https://opencode.ai/docs/ |
| OpenCode, Rules (`/init`) | https://opencode.ai/docs/rules/ |
| OpenCode, GitHub / GitLab | https://opencode.ai/docs/github/ · https://opencode.ai/docs/gitlab/ |
| AGENTS.md | https://agents.md |
| GitHub Blog, agents.md (2500+ repos) | https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/ |
| Talk How to Write AGENTS.md (OPERA) | https://github.com/lesommer/2026-09-24_how-to-write-agents-md |
| Git worktree | https://git-scm.com/docs/git-worktree |
| CodeRabbit | https://coderabbit.ai |
| GitHub Copilot, coding agent | https://gh.io/coding-agent-docs |
