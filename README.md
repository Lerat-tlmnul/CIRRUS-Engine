# CIRRUS
## Coupled Intelligent Rendering & Reality Unified System

**A unified real-time simulation and rendering architecture.**

Version conceptuelle : 1.0  
Catégorie : Real-Time Rendering / Physics Simulation / GPU Computing  
Plateforme cible : WebGPU, WebGL2, WebAssembly  
Environnement : Navigateurs modernes

---

# 01 — INTRODUCTION

CIRRUS est une architecture expérimentale de simulation et de rendu en temps réel dont l'objectif est de rapprocher le monde virtuel d'un comportement physique cohérent.

Les moteurs graphiques traditionnels utilisent généralement plusieurs systèmes spécialisés pour gérer les différents phénomènes d'une scène :

- Le rendu de la lumière.
- Les réflexions.
- Les ombres.
- Les matériaux.
- Les fluides.
- Les collisions.
- La gravité.
- Les déformations.
- Les interactions environnementales.

Ces systèmes peuvent fonctionner indépendamment, mais leurs interactions représentent un défi technique important.

CIRRUS propose une autre approche.

Au lieu de considérer chaque phénomène comme un élément isolé, CIRRUS introduit une représentation commune de l'environnement : le **Unified World State**.

Cette représentation sert de base aux différents modules de simulation et de rendu.

L'objectif est de permettre aux phénomènes physiques et visuels de communiquer, de partager leurs informations et d'influencer mutuellement leurs résultats.

**CIRRUS ne cherche pas uniquement à rendre les images plus belles. Il cherche à rendre le monde simulé plus cohérent.**

---

# 02 — CORE PHILOSOPHY

La philosophie de CIRRUS repose sur cinq principes fondamentaux.

### 2.1 — Unified Reality

Tous les phénomènes appartiennent au même environnement simulé.

Un objet ne possède pas simplement une apparence : il possède également des propriétés physiques, matérielles et environnementales.

### 2.2 — Cross-System Interaction

Les différents modules peuvent échanger des informations.

Exemples :

- Une vague déplace un bateau.
- Le bateau déforme localement la surface de l'eau.
- Cette déformation modifie les reflets.
- Les reflets dépendent de l'éclairage.
- L'éclairage dépend de l'atmosphère.
- Les matériaux réagissent à leur environnement.

### 2.3 — Adaptive Intelligence

Les ressources de calcul doivent être attribuées en fonction de leur utilité.

CIRRUS cherche à éviter les calculs inutiles et à concentrer les ressources sur les phénomènes qui influencent réellement l'image et la simulation.

### 2.4 — Temporal Coherence

Une simulation ne doit pas être considérée comme une succession d'images indépendantes.

Les informations précédentes peuvent être réutilisées pour stabiliser les résultats, réduire les calculs et préserver la cohérence temporelle.

### 2.5 — Hardware Awareness

Le moteur doit adapter son fonctionnement aux capacités matérielles disponibles.

Un ordinateur puissant peut bénéficier de calculs plus complexes, tandis qu'une machine moins performante doit conserver une expérience fonctionnelle avec des effets simplifiés.

---

# 03 — GLOBAL ARCHITECTURE

L'architecture CIRRUS est organisée autour d'un pipeline central.

```text
                  [ SCENE INPUT ]
                         |
                         v
                   [ CIRRUS CORE ]
                         |
                         v
                 [ UNIFIED WORLD STATE ]
                         |
          +--------------+--------------+
          |              |              |
          v              v              v
     [LIGHT FIELD]  [FLUID FIELD]  [PHYSICS FIELD]
          |              |              |
          +--------------+--------------+
                         |
                         v
                  [MATERIAL FIELD]
                         |
                         v
                [ADAPTIVE COMPUTE]
                         |
                         v
                 [TEMPORAL MEMORY]
                         |
                         v
               [FRAME RECONSTRUCTION]
                         |
                         v
                    [GPU BACKEND]
                         |
                         v
                   [FINAL FRAME]
```

Cette architecture constitue le squelette conceptuel du moteur.

Chaque module possède une responsabilité précise, mais peut communiquer avec les autres à travers le système central.

---

# 04 — CIRRUS CORE

Le CIRRUS CORE représente le centre de coordination de l'architecture.

Il reçoit les informations de la scène, organise les données et coordonne les différents modules.

### Responsabilités

- Initialisation de l'environnement.
- Gestion des objets.
- Synchronisation des systèmes.
- Distribution des informations.
- Gestion des dépendances.
- Coordination des mises à jour.
- Gestion des ressources.
- Communication entre les modules.

Le Core ne réalise pas nécessairement tous les calculs lui-même.

Il organise leur exécution et garantit que les différents systèmes travaillent à partir d'un état cohérent.

---

# 05 — UNIFIED WORLD STATE

Le Unified World State est l'un des composants les plus importants de CIRRUS.

Il représente l'état commun du monde simulé.

Chaque objet peut posséder plusieurs catégories de données :

**Spatial Data**
- Position.
- Rotation.
- Échelle.
- Géométrie.
- Bounding volumes.

**Physical Data**
- Masse.
- Vitesse.
- Accélération.
- Densité.
- Friction.
- Forces appliquées.

**Material Data**
- Rugosité.
- Réflectivité.
- Transparence.
- Indice de réfraction.
- Propriétés thermiques.

**Environmental Data**
- Humidité.
- Température.
- Pression.
- Exposition lumineuse.
- Influence du vent.

**Rendering Data**
- Visibilité.
- Niveau de détail.
- Informations d'éclairage.
- Historique temporel.
- Données de surface.

Les modules peuvent lire les données nécessaires et publier leurs résultats selon des règles de synchronisation définies.

L'objectif est de réduire les incohérences entre les différents systèmes.

---

# 06 — LIGHT FIELD

Le LIGHT FIELD est responsable de la simulation lumineuse.

Il cherche à représenter les interactions entre les sources lumineuses, les surfaces et l'environnement.

### Fonctionnalités visées

**Direct Illumination**

Calcul de l'éclairage provenant directement des sources lumineuses.

**Indirect Illumination**

Approximation ou simulation de la lumière indirecte provenant des surfaces environnantes.

**Reflection System**

Gestion des réflexions sur les matériaux et les surfaces.

**Shadow Propagation**

Production d'ombres cohérentes avec la géométrie et les sources lumineuses.

**Volumetric Lighting**

Simulation de la diffusion lumineuse dans les environnements atmosphériques.

**Atmospheric Scattering**

Interaction de la lumière avec l'atmosphère, la brume et les particules.

**Light Transport**

Gestion de la propagation de la lumière entre les différentes surfaces.

### Objectif

Obtenir un environnement dans lequel les phénomènes lumineux sont cohérents avec les matériaux et les conditions environnementales.

---

# 07 — FLUID FIELD

Le FLUID FIELD est consacré aux phénomènes fluides.

Il ne doit pas être limité à l'eau : son architecture peut également être adaptée à d'autres fluides.

### Water Simulation

- Vagues.
- Houle.
- Ondulations.
- Courants.
- Déformations.
- Profondeur.
- Réfraction.
- Écume.
- Sillage.

### Fluid Interaction

Les objets peuvent influencer la surface des fluides.

Exemple :

Un bateau entre en contact avec l'eau.

1. La coque interagit avec la surface.
2. Le système physique calcule les forces de flottabilité.
3. Le fluide reçoit les informations de déplacement.
4. La surface se déforme.
5. Des vagues secondaires apparaissent.
6. Le rendu actualise les reflets et les normales de surface.

### Advanced Fluid Rendering

Le rendu peut intégrer :

- Réflexions dynamiques.
- Transparence.
- Absorption lumineuse.
- Réfraction.
- Diffusion sous-marine.
- Mousse procédurale.

### Objectif

Créer des fluides qui ne sont pas seulement visuellement convaincants, mais qui réagissent également aux objets et aux événements de la scène.

---

# 08 — PHYSICS FIELD

Le PHYSICS FIELD gère les comportements physiques des objets.

### Mécanique classique

- Gravité.
- Vitesse.
- Accélération.
- Inertie.
- Forces.
- Collisions.
- Friction.
- Impulsions.

### Advanced Physics

- Déformations.
- Contraintes.
- Structures articulées.
- Flottabilité.
- Résistance des fluides.
- Interactions entre objets.
- Simulation de tissus.
- Simulation de cordages.

### Environmental Physics

Les conditions environnementales influencent les objets.

Exemples :

- Le vent agit sur les voiles.
- L'eau agit sur les embarcations.
- La température peut influencer les matériaux.
- La gravité influence les mouvements.
- Les collisions modifient les trajectoires.

### Objectif

Faire en sorte que les objets se comportent de manière cohérente avec leur environnement.

---

# 09 — MATERIAL FIELD

Le MATERIAL FIELD unifie les propriétés des matériaux utilisées par les systèmes physiques et graphiques.

Un matériau CIRRUS ne doit pas être uniquement une couleur et une texture.

Il possède un ensemble de propriétés.

### Optical Properties

- Base Color.
- Metallic.
- Roughness.
- Specular.
- Transmission.
- Refraction.
- Opacity.
- Subsurface Scattering.

### Physical Properties

- Density.
- Friction.
- Elasticity.
- Thermal Conductivity.
- Deformation Resistance.

### Environmental Response

- Réaction à l'humidité.
- Réaction à la température.
- Réaction à la lumière.
- Réaction à l'usure.
- Réaction aux interactions physiques.

### Exemple : Bois

Un matériau bois peut posséder :

- Une texture détaillée.
- Une rugosité variable.
- Une absorption d'humidité.
- Une densité définie.
- Une résistance mécanique.
- Une réponse lumineuse.

Le matériau devient ainsi une description commune de ses caractéristiques physiques et visuelles.

---

# 10 — ADAPTIVE COMPUTE

L'ADAPTIVE COMPUTE est le système de gestion des ressources de CIRRUS.

Il doit déterminer comment répartir les calculs disponibles.

### Adaptive Workload

Le système analyse :

- La complexité de la scène.
- Le nombre d'objets.
- La distance à la caméra.
- La visibilité.
- Les mouvements.
- La complexité des matériaux.
- Le budget GPU.
- Le temps de calcul disponible.

### Dynamic Resolution

La résolution interne peut être ajustée lorsque le coût du rendu devient trop élevé.

### Adaptive Quality

Les effets peuvent posséder plusieurs niveaux de qualité.

Exemple :

| Effet | Mode économique | Mode avancé |
|---|---|---|
| Reflets | Screen Space | Ray Tracing |
| Eau | Gerstner Waves | Simulation avancée |
| Ombres | Shadow Maps | Ombres plus détaillées |
| Éclairage | Approximation | GI avancée |
| Physique | Simplifiée | Simulation détaillée |

### Visibility Optimization

Les objets invisibles ou éloignés peuvent utiliser des calculs simplifiés.

### GPU Scheduling

Les tâches GPU sont organisées afin de limiter les pics de charge.

**Objectif : maintenir une expérience fluide sans sacrifier inutilement la qualité visuelle.**

---

# 11 — TEMPORAL MEMORY

La TEMPORAL MEMORY conserve certaines informations des images précédentes.

Elle constitue un système de mémoire visuelle temporaire.

### Fonctionnalités

- Historique des pixels.
- Historique des réflexions.
- Informations de profondeur.
- Vecteurs de mouvement.
- Historique d'éclairage.
- Réutilisation de données.
- Stabilisation temporelle.

### Temporal Reprojection

Les informations précédentes peuvent être reprojetées dans l'image actuelle.

Le système doit vérifier leur validité à l'aide de la profondeur, du mouvement et d'autres informations disponibles.

Cela permet de réduire certains calculs coûteux.

### Temporal Denoising

Les informations temporelles peuvent aider à réduire le bruit des effets graphiques.

### Objectif

Obtenir une image plus stable et réduire les variations visuelles entre les images successives.

---

# 12 — FRAME RECONSTRUCTION

La FRAME RECONSTRUCTION intervient après les calculs principaux.

Elle transforme les différentes informations produites par le moteur en une image finale.

### Composants

- Anti-aliasing.
- Reconstruction spatiale.
- Reconstruction temporelle.
- Denoising.
- Motion-aware Filtering.
- Résolution adaptative.
- Correction des artefacts.

Le système doit préserver les détails importants et éviter les effets de flou excessifs.

---

# 13 — CIRRUS GPU BACKEND

CIRRUS doit fonctionner avec plusieurs technologies graphiques.

### WebGPU

Backend principal.

Utilisations :

- Compute Shaders.
- Rendu programmable.
- Calculs parallèles.
- Gestion des ressources GPU.
- Pipelines graphiques.
- Shaders WGSL.

### WebGL2

Backend de compatibilité.

Il permet de conserver une version fonctionnelle sur les navigateurs et appareils qui ne prennent pas en charge WebGPU.

Certains effets avancés devront être remplacés par des approximations.

### WebAssembly

Utilisé pour certains calculs CPU intensifs.

### TypeScript

Utilisé pour :

- L'architecture.
- La gestion des scènes.
- Les API.
- Les interactions.
- Le système de configuration.
- La coordination des modules.

---

# 14 — CIRRUS WEB ARCHITECTURE

CIRRUS est conçu pour fonctionner directement dans un navigateur.

Il ne doit pas nécessiter de logiciel externe pour son utilisation normale.

### Architecture navigateur

```text
              BROWSER
                 |
          [ JAVASCRIPT ]
                 |
          [ CIRRUS CORE ]
                 |
        +--------+--------+
        |                 |
        v                 v
   [ CPU SYSTEMS ]   [ GPU SYSTEMS ]
        |                 |
        v                 v
   [ WASM / TS ]     [ WEBGPU ]
        |                 |
        +--------+--------+
                 |
           [ RENDER LOOP ]
                 |
                 v
            [ CANVAS ]
```

### Main Thread

Le thread principal doit principalement gérer :

- Les interactions utilisateur.
- L'interface.
- La coordination.
- L'affichage.

### Web Workers

Les calculs CPU pouvant être déportés peuvent fonctionner dans des Workers.

### GPU Execution

Les calculs graphiques et les tâches parallèles adaptées sont exécutés sur le GPU.

### Resource Management

Les ressources doivent être correctement libérées lorsqu'elles ne sont plus utilisées.

---

# 15 — STABILITY & PERFORMANCE

La stabilité constitue une priorité fondamentale.

CIRRUS doit éviter les blocages du navigateur et les pics de consommation inutiles.

### Stability Systems

- Fixed Timestep Physics.
- GPU Resource Management.
- Memory Budget.
- Adaptive Resolution.
- Error Recovery.
- Context Loss Handling.
- Progressive Initialization.
- Asynchronous Loading.
- Graceful Degradation.
- Worker Isolation.

### Performance Profiles

**LOW**

Simulation et rendu simplifiés pour les appareils modestes.

**MEDIUM**

Qualité équilibrée avec effets intermédiaires.

**HIGH**

Qualité graphique avancée.

**ULTRA**

Utilisation maximale des ressources disponibles.

### Important

CIRRUS ne garantit pas un framerate universel.

Il cherche à adapter automatiquement la complexité de la simulation aux capacités réelles de la machine.

---

# 16 — EXAMPLE: VIKING OCEAN SIMULATION

Une démonstration CIRRUS peut être construite autour d'un drakkar naviguant sur un océan.

Voici comment les différents modules collaborent.

### Scene

Un drakkar en bois se déplace sur une mer agitée.

### Light Field

Le soleil éclaire les vagues et les surfaces en bois.

Les réflexions évoluent selon la position de la caméra et l'orientation des vagues.

### Fluid Field

L'océan génère une houle dynamique.

La coque produit des perturbations et un sillage.

### Physics Field

Le bateau flotte, tangue et roule en fonction des forces exercées par l'eau.

Le vent influence sa voile.

### Material Field

Le bois possède ses propres propriétés physiques et optiques.

L'eau possède ses propriétés de réflexion, de réfraction et de transparence.

### Adaptive Compute

Le moteur ajuste la complexité de l'océan et des effets selon les ressources disponibles.

### Temporal Memory

Les informations précédentes stabilisent les réflexions et certains effets temporels.

### Final Result

Un drakkar qui navigue dans un environnement cohérent, où les phénomènes physiques et visuels sont interconnectés.

---

# 17 — DEVELOPMENT ROADMAP

Le développement de CIRRUS doit être progressif.

### PHASE 1 — FOUNDATION

- CIRRUS Core.
- Unified World State.
- Architecture modulaire.
- WebGPU Backend.
- WebGL2 Fallback.
- Scene Management.

### PHASE 2 — VISUAL SYSTEMS

- Light Field.
- Material Field.
- Reflection System.
- Shadow System.
- Atmospheric Rendering.

### PHASE 3 — PHYSICS

- Physics Field.
- Collision System.
- Fluid Field.
- Water Simulation.
- Object Interactions.

### PHASE 4 — OPTIMIZATION

- Adaptive Compute.
- Temporal Memory.
- Frame Reconstruction.
- GPU Scheduling.
- Dynamic Resolution.

### PHASE 5 — ADVANCED SIMULATION

- Advanced Fluid Simulation.
- Volumetric Effects.
- Advanced Light Transport.
- Material Deformation.
- Environmental Interactions.

### PHASE 6 — WEB RELEASE

- API publique.
- Documentation.
- Exemples interactifs.
- Démonstrations techniques.
- Profils matériels.
- Compatibilité navigateurs.

---

# 18 — CORE DESIGN PRINCIPLES

CIRRUS doit respecter les principes suivants :

1. **Modularity:** chaque système doit pouvoir être développé indépendamment.
2. **Interoperability:** les modules doivent partager des données compatibles.
3. **Scalability:** le moteur doit supporter des scènes de complexité variable.
4. **Efficiency:** les calculs doivent être justifiés par leur utilité.
5. **Consistency:** les systèmes physiques et visuels doivent rester cohérents.
6. **Stability:** le navigateur ne doit jamais être sacrifié pour un effet graphique.
7. **Extensibility:** de nouveaux modules doivent pouvoir être ajoutés sans réécrire le Core.
8. **Hardware Awareness:** la qualité doit s'adapter aux capacités disponibles.

---

# 19 — FINAL VISION

CIRRUS représente une nouvelle approche conceptuelle du rendu et de la simulation en temps réel.

Son ambition est de rapprocher plusieurs domaines traditionnellement séparés :

- Computer Graphics.
- Physically Based Rendering.
- Fluid Dynamics.
- Classical Mechanics.
- Material Simulation.
- GPU Computing.
- Temporal Reconstruction.

L'objectif n'est pas de multiplier les effets visuels, mais de construire un système dans lequel les phénomènes simulés partagent une représentation commune du monde.

Un objet doit pouvoir interagir avec son environnement.

Un matériau doit posséder des caractéristiques physiques et visuelles.

La lumière doit réagir aux surfaces.

L'eau doit interagir avec les objets.

Les calculs doivent s'adapter aux ressources disponibles.

Et l'ensemble doit fonctionner en temps réel, directement dans un navigateur.

---

# CIRRUS

**One World. Multiple Fields. Unified Reality.**

*Beyond Rendering. Toward Simulation.*

