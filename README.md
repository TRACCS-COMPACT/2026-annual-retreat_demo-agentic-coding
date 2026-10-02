# Session — IA agentique pour le développement logiciel

Démonstration organisée par l'équipe du projet TRACCS-COMPACT (PEPR TRACCS) durant sa
retraite annuelle — Le Poët-Laval, octobre 2026.

Fil conducteur : **comprendre** les concepts → **installer** les outils → **pratiquer**
sur un problème guidé → **démarrer** sur un vrai problème de développement.

## Programme de la session

| # | Durée | Étape | Support |
| --- | --- | --- | --- |
| 1 | 15 min | **Introduction — concepts de base** : LLM, agent, contexte, workflow | `slides-introduction/` |
| 2 | 15 min | **Mise en place technique** : compte Cortecs, puis OpenCode (terminal) ou VS Code + Kilo Code (IDE) | [`SETUP.md`](./SETUP.md) |
| 3 | 60 min | **Atelier guidé — le climat du Poët-Laval** : étude avec un agent, pas à pas (niveaux 0 → 4), dont **15 min de débrief** | [poet-laval-climate](https://github.com/TRACCS-COMPACT/poet-laval-climate) |
| 4 | 15 min | **Pause** | — |
| 5 | 60 min | **Travail libre — votre vrai problème** : une tâche de developpement en lien avec votre travail actuel | Référents : [`SETUP.md`](./SETUP.md) |
| 6 | 15 min | **Restitution** : chacun·e décrit son travail avec l'agent et ses premières impressions | — |

> **Vignettes flash (~3 min)** : intercalées au fil de la session par les animateurs —
> deck `slides-vignettes/`.

## Liens utiles

- Atelier guidé : https://github.com/TRACCS-COMPACT/poet-laval-climate
- Mise en place technique : [`SETUP.md`](./SETUP.md)
- Environnement de secours (JupyterLab, rien à installer) : https://notebook-ige-ping.osug.fr/ — mot de passe envoyé par e-mail
- Ce dépôt : https://github.com/TRACCS-COMPACT/2026-annual-retreat_demo-agentic-coding

## Organisation du dépôt

- `SETUP.md` — guide de mise en place (Cortecs, OpenCode, VS Code + Kilo Code)
- `slides-introduction/` — deck d'introduction (plan détaillé : `outline/introduction.md`)
- `slides-vignettes/` — deck des vignettes flash (plan : `outline/vignettes.md`)

Chaque deck est un workspace open-slide : `pnpm install && pnpm dev` dans son dossier.
