# Mise en place technique — avant de commencer

> **Objectif :** avoir un agent IA fonctionnel sur votre machine avant l'atelier.
> **Durée estimée :** ~15 minutes.
>
> **Deux outils au choix** — l'atelier est faisable avec l'un **ou** l'autre :
> - **OpenCode** dans le terminal, si vous êtes à l'aise avec une console → référent : **Julien Le Sommer**
> - **VS Code + Kilo Code** dans l'éditeur, si vous préférez un IDE → référent : **Jordi Bolibar**
>
> En cas de blocage, appelez le référent de votre option.

---

## Étape 1 — Compte Cortecs (commune aux deux options)

Cortecs est la passerelle qui nous donne accès aux modèles (hébergement européen, RGPD).

1. **Créez votre compte** sur https://cortecs.ai

2. **Rejoignez le compte de facturation `traccs-compact`**
   - L'invitation vous a été envoyée par e-mail par les animateurs.
   - Si vous ne l'avez pas reçue, signalez-le à un·e animateur·rice.

3. **Générez votre clé API**
   - Console Cortecs : https://cortecs.ai/userArea/console?tab=credentials
   - Copiez la clé : elle servira à l'option A ou B.

Docs Cortecs : https://docs.cortecs.ai

---

## Option A — OpenCode (agent dans le terminal)

*Choisissez cette option si vous êtes à l'aise avec une console. Référent : **Julien Le Sommer**.*

### Installer OpenCode

```bash
curl -fsSL https://opencode.ai/install | bash
```

Variantes : `brew install anomalyco/tap/opencode` (macOS/Linux) ou
`npm install -g opencode-ai`.

### Connecter Cortecs

```bash
opencode auth login
```

1. Sélectionnez **Cortecs** dans la liste des fournisseurs.
2. Collez votre **clé API** (étape 1) et validez.

Variante : la commande `/connect` depuis l'interface OpenCode, ou un fichier
`opencode.json` (local ou global) avec l'URL et la clé.

### Vérifier

```bash
opencode
```

- Démarrez une session avec `/new`, puis `/models` pour choisir un modèle.
- Posez-lui une question simple : s'il répond, c'est prêt ✅

### Docs

- OpenCode : https://opencode.ai/docs/
- Intégration Cortecs : https://docs.cortecs.ai/integration-examples/coding/opencode

---

## Option B — VS Code + Kilo Code (agent dans l'éditeur)

*Choisissez cette option si vous préférez un IDE. Référent : **Jordi Bolibar**.*

1. **Installez VS Code** — https://code.visualstudio.com/docs/getstarted/overview

2. **Installez l'extension Kilo Code** — https://kilo.ai/ (ou Marketplace VS Code)

3. **Configurez le fournisseur Cortecs** dans les réglages Kilo Code :

   | Réglage | Valeur |
   | --- | --- |
   | API Provider | OpenAI Compatible |
   | Base URL | `https://api.cortecs.ai/v1/` |
   | API Key | votre clé (étape 1) |
   | Model | au choix dans le catalogue https://cortecs.ai/serverlessModels |

4. **Vérifiez** : lancez une petite requête depuis Kilo Code ✅

### Docs

- Kilo Code : https://kilo.ai/docs
- Intégration Cortecs : https://docs.cortecs.ai/integration-examples/coding/kilo-code
- Astuce : Kilo Code propose une indexation locale du code (aucune donnée
  envoyée à l'extérieur) — voir la doc Kilo Code.

---

## Checklist de vérification

- [ ] Compte Cortecs créé, invitation `traccs-compact` acceptée
- [ ] Clé API générée
- [ ] L'outil choisi (OpenCode **ou** VS Code + Kilo Code) est connecté et répond
