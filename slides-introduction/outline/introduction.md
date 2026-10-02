# Plan détaillé — Présentation d'introduction

> **Usage :** ce document est la source de vérité pour construire le deck open-slide
> `slides/introduction/`. Il décrit le contenu attendu page par page, les messages clés
> et les sources à mobiliser. Il ne contient pas le code des slides.

---

## 1. Métadonnées

| Champ | Valeur |
| --- | --- |
| Titre de la présentation | IA agentique pour le développement logiciel — Introduction |
| Deck cible | `slides/introduction/` (workspace open-slide) |
| Langue | Français |
| Nombre de pages | 10 exactement |
| Densité de texte | Minimale — une idée par page, phrases courtes |
| Motion | Subtil au maximum (fondus simples) ; le contenu porte le propos |
| Version / statut | v1 — octobre 2026 |

## 2. Instructions générales

- **Audience :** contributeurs et contributrices du projet PC5 COMPACT (PEPR TRACCS) —
  développeur·euse·s et scientifiques qui codent (Fortran, Python, C++, scripts d'analyse).
  On peut supposer l'aisance avec git, le terminal et un IDE ; on ne suppose **aucune**
  connaissance préalable des LLM ni des agents.
- **Durée du talk :** 15 à 20 minutes, en ouverture de la session de démonstration.
- **Moment :** retraite annuelle du projet, Le Poët-Laval (Drôme), octobre 2026.
- **Fil rouge :** la présentation prépare l'atelier pratique qui suit
  (dépôt `poet-laval-climate`) — chaque concept introduit doit aider les participants
  à travailler avec un agent pendant l'atelier, puis sur leurs vrais problèmes de dev.
- **Ton :** direct, concret, sans survente ; les messages sont des repères utilisables
  pendant l'atelier (« ce qu'il faut savoir pour jouer avec un agent »).
- **Méta-message assumé :** cette présentation (et le dépôt qui l'héberge) a elle-même
  été produite avec un agent IA — à mentionner naturellement sur la page de contexte.

## 3. Contexte de la session

- La retraite annuelle du PC5 COMPACT (PEPR TRACCS) réunit l'équipe autour du design
  logiciel des modèles de climat : performance HPC, modularité, hybridation IA.
- Le développement logiciel est au cœur du projet : c'est donc le premier degré concerné
  par l'arrivée des agents de codage.
- La session de démonstration se déroule en deux temps :
  1. **Un atelier guidé** (~1 h) : réaliser une petite étude climatique du Poët-Laval
     avec un agent, pas à pas, à partir de données ERA5 et de stations Météo-France
     (dépôt `poet-laval-climate`, niveaux 0 → 4).
  2. **Un temps libre encadré** (~1 h): démarrer un vrai problème tiré de son activité de
     développement actuelle, avec l'aide des animateurs.
- **Outils utilisés pendant la démo :** OpenCode (agent en terminal) et VS Code avec
  l'extension Kilo Code (agent dans l'IDE), avec accès aux modèles via Cortecs
  (passerelle européenne).

## 4. Scope de la présentation

**Couvert :**
- ce qu'est un LLM, en une page, avec ses limites (hallucinations, fenêtre de contexte) ;
- ce qu'est un agent et en quoi il diffère d'un chatbot ;
- comment on accède concrètement à un agent (modèles + harnais) ;
- la gestion du contexte comme compétence centrale ;
- le workflow typique d'une session de travail avec un agent ;
- les garde-fous et bonnes pratiques (vérification, git, coûts, permissions).

**Non couvert (renvoyé à d'autres moments de la retraite ou à l'auto-formation) :**
- comment choisir le modele en fonction de la tache 
- impact environnemental
- construire un Agents.md adapté à votre projet 
- Comment interagir avec un repo git
- Agents dans le processus de developpement (CI, PR, etc...) 

---

## 5. Plan détaillé — 10 pages

### Page 1 — Ouverture : couverture

- **Titre de la page :** IA agentique pour le développement logiciel
- **Messages clés :**
  - Session de démonstration — retraite annuelle PC5 COMPACT, Le Poët-Laval, octobre 2026.
  - Préparée et animé par Jordi Bolibar (GH JordiBolibar) et Julien Le Sommer (GH : lesommer).
- **Contenu suggéré :** page de titre sobre ; sous-titre = « Concepts de base pour
  travailler avec un agent de codage ».
- **Sources :** —

### Page 2 — Contexte et objectifs de la session

- **Messages clés :**
  - Le design logiciel est le cœur du projet COMPACT : les agents de codage nous
    concernent au premier degré.
  - Deux objectifs aujourd'hui : **comprendre** les concepts de base, puis **pratiquer**
    sur un problème guidé, et enfin **démarrer** sur un vrai problème de dev.
  - Méta : ces slides, et le dépôt qui les héberge, ont été produits avec un agent.
- **Contenu suggéré :** trois verbes (comprendre / pratiquer / démarrer) comme trame
  visuelle ; mention discrète du méta-message.
- **Sources :**
  - https://pepr-traccs.fr/projet/pc5-compact/
  - https://github.com/TRACCS-COMPACT/poet-laval-climate

### Page 3 — Un LLM, c'est quoi ?

- **Messages clés :**
  - Un LLM prédit le **token suivant** : entraîné sur un corpus immense, il a des
    capacités larges mais **aucune garantie de vérité**.
  - Il peut se tromper avec aplomb (**hallucinations**) : la vérification reste humaine.
  - Pas de mémoire entre deux appels : tout passe par la **fenêtre de contexte**, finie.
- **Contenu suggéré :** un schéma simple « texte → tokens → prédiction du token
  suivant » ; une annotation « la fenêtre de contexte = mémoire de travail ».
- **Sources :**
  - Stephen Wolfram, *What Is ChatGPT Doing … and Why Does It Work?* (2023) —
    https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/
  - Jay Alammar, *The Illustrated GPT-2* — https://jalammar.github.io/illustrated-gpt2/

### Page 4 — Un agent, c'est quoi ?

- **Messages clés :**
  - Formule : **LLM + contexte/mémoire + tâche fixée + rôle + outils**, le tout dans une
    boucle : réfléchir → agir → observer → recommencer.
  - Les outils : lire/écrire des fichiers, exécuter des commandes, interroger le code.
  - Il peut avoir des **compétences spécifiques** (skills) et déléguer à des
    **sous-agents**.
  - Différence avec un chatbot : le chat **conseille**, l'agent **agit** dans votre
    dépôt — et vous gardez la supervision.
- **Contenu suggéré :** diagramme de la boucle d'agent (LLM au centre, outils autour) ;
  encart « chat vs agent ».
- **Sources :**
  - Anthropic, *Building effective agents* —
    https://www.anthropic.com/engineering/building-effective-agents
  - Lilian Weng, *LLM Powered Autonomous Agents* (2023) —
    https://lilianweng.github.io/posts/2023-06-23-agent/

### Page 5 — En pratique : comment utiliser un agent

- **Messages clés :**
  - Deux ingrédients : **l'accès aux modèles** et **un harnais** (logiciel qui câble le
    modèle, les outils et l'interface).
  - Accès aux modèles : API/SDK + clés ; facturation **au token** ou **forfaitaire**.
    Exemple : Cortecs, passerelle européenne (souveraineté, RGPD).
  - Harnais : VS Code + extension Kilo Code (IDE), OpenCode (terminal) — il en existe
    d'autres : GitHub Copilot, Claude Code, Continue.
  - Notre choix pour la démo : **OpenCode** et **VS Code + Kilo Code**.
- **Contenu suggéré :** deux colonnes « modèle ↔ harnais » ; logos des outils ; une
  ligne « ce que nous utilisons aujourd'hui » mise en avant.
- **Sources :**
  - Cortecs — https://cortecs.ai · https://docs.cortecs.ai
  - OpenCode — https://opencode.ai/docs/
  - Kilo Code — https://kilo.ai/docs

### Page 6 — Gestion du contexte

- **Messages clés :**
  - Du *prompt engineering* au **context engineering** : le contexte est la ressource
    critique et coûteuse de l'agent.
  - Techniques : **compaction** des longues sessions ; **notes structurées** (fichiers
    `AGENTS.md` créés via `/init`) ; plan au **bon niveau de détail** (ni trop vague,
    ni trop verbeux) ; **sous-agents** pour découper et spécialiser.
  - Réflexe : ce qui est écrit dans le dépôt (consignes, conventions) nourrit le contexte
    de tous les agents qui passeront derrière.
- **Contenu suggéré :** représentation « fenêtre de contexte » avec ce qui entre
  (fichiers de règles, plan, historique compacté) ; capture ou extrait d'un `AGENTS.md`.
- **Sources :**
  - Anthropic, *Effective context engineering for AI agents* —
    https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
  - OpenCode, doc *Rules* / `/init` — https://opencode.ai/docs/rules/

### Page 7 — Le workflow typique

- **Messages clés :**
  - Quel que soit le harnais : **plan → revue du plan → build**, avec vérification à
    chaque étape.
  - La boucle sous-jacente : prompt → think → act → observe.
  - Parler à l'agent comme à un·e collègue junior : contexte précis, tâches petites,
    feedback régulier.
- **Contenu suggéré :** diagramme horizontal plan → review → build, avec la boucle
  think/act/observe en dessous ; capture de l'écran de *plan mode* d'OpenCode.
- **Sources :**
  - OpenCode, doc *Intro / usage* (plan mode) — https://opencode.ai/docs/
  - poet-laval-climate, README (méthode par niveaux) —
    https://github.com/TRACCS-COMPACT/poet-laval-climate

### Page 8 — Guardrails et bonnes pratiques

- **Messages clés :**
  - **Petites tâches** : découper, valider, recommencer — jamais « fais tout d'un coup ».
  - **Vérification systématique** : lire le code, questionner les résultats surprenants,
    exécuter les tests.
  - **Hygiène git** : commits fréquents, branches, diffs relus avant d'approuver.
  - **Coûts et choix du modèle** : tous les modèles ne se valent pas ; surveiller la
    consommation (Cortecs : budgets et suivi par projet).
  - **Permissions** : le harnais demande avant d'agir — lire avant d'approuver ; ne
    jamais coller de secrets dans une conversation.
- **Contenu suggéré :** liste de 5 réflexes, un par ligne, avec pictogramme ; le mot
  « vérifier » visuellement dominant.
- **Sources :**
  - Anthropic, *Claude Code: best practices for agentic coding* —
    https://www.anthropic.com/engineering/claude-code-best-practices
  - OpenCode, doc *Permissions* — https://opencode.ai/docs/permissions/
  - poet-laval-climate, README (« savoir quand lui faire confiance ») —
    https://github.com/TRACCS-COMPACT/poet-laval-climate

### Page 9 — Déroulé de la session

- **Messages clés :**
  - Set-up (15min): mettre en place vos environnements techniques (OpenCode/VS code, clef API) 
  - Atelier guidé (1h): une petite étude climatique du Poët-Laval **avec un agent, pas à pas**.
  - Dans le grand bain (1h) : à vous — démarrez un vrai problème issu de votre travail en cours avec l'agent.
- **Contenu suggéré :** timeline horizontale 
-(durées) ; rappel des
  consignes de travail avec l'agent ; lien du dépôt en gros.
- **Sources :**
  - https://github.com/TRACCS-COMPACT/2026-annual-retreat_demo-agentic-coding

### Page 10 — À retenir

- **Messages clés :**
  - L'agent est un **LLM dans une boucle avec des outils** : puissant, mais la
    vérification reste votre responsabilité.
  - Le **contexte** est la ressource clé : nourrissez-le (AGENTS.md, plans) et
    économisez-le.
  - **Plan → build → vérifier**, petites tâches, hygiène git : la même discipline que
    pour un·e collègue junior brillant mais pressé.
  - Où trouver de l'aide pendant l'atelier : les animateurs, et les dépôts de la session.
- **Contenu suggéré :** trois points à retenir, numérotés ; bloc final avec les liens
  (dépôt démo, dépôt poet-laval-climate, docs OpenCode / Kilo / Cortecs).
- **Sources :** —

---

## 6. Annexe — liens globaux

| Ressource | URL |
| --- | --- |
| PC5 COMPACT (PEPR TRACCS) | https://pepr-traccs.fr/projet/pc5-compact/ |
| Dépôt de la session (ce dépôt) | https://github.com/TRACCS-COMPACT (à compléter) |
| Atelier poet-laval-climate | https://github.com/TRACCS-COMPACT/poet-laval-climate |
| Wolfram, *What Is ChatGPT Doing …* | https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/ |
| Alammar, *The Illustrated GPT-2* | https://jalammar.github.io/illustrated-gpt2/ |
| Anthropic, *Building effective agents* | https://www.anthropic.com/engineering/building-effective-agents |
| Anthropic, *Effective context engineering* | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents |
| Anthropic, *Claude Code best practices* | https://www.anthropic.com/engineering/claude-code-best-practices |
| Lilian Weng, *LLM Powered Autonomous Agents* | https://lilianweng.github.io/posts/2023-06-23-agent/ |
| OpenCode (docs) | https://opencode.ai/docs/ |
| Kilo Code (docs) | https://kilo.ai/docs |
| Cortecs | https://cortecs.ai · https://docs.cortecs.ai |
