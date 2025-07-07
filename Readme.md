# N22 Template

Un projet full-stack moderne utilisant React + TypeScript pour le frontend et AdonisJS pour le backend.

## 🚀 Technologies utilisées

### Frontend (Client)
- **React 19** avec TypeScript
- **Vite** pour le build et le développement
- **Redux Toolkit** pour la gestion d'état
- **React Router** pour la navigation
- **Tailwind CSS** pour le styling
- **Radix UI** pour les composants
- **Framer Motion** pour les animations
- **Axios** pour les requêtes HTTP

### Backend (Server)
- **AdonisJS 6** avec TypeScript
- **MySQL** comme base de données
- **Lucid ORM** pour la gestion de la base de données
- **VineJS** pour la validation
- **Authentication** intégrée
- **CORS** configuré
- **API Brawlhalla** intégrée

## 📋 Prérequis

- **Node.js** (version 18 ou supérieure)
- **npm** ou **yarn**
- **MySQL** (pour le serveur)
- **Docker** (optionnel, pour les services externes)

## 🛠️ Installation

### 1. Cloner le projet

```bash
git clone <votre-repo-url>
cd N22_Template
```

### 2. Configuration du Backend (Server)

```bash
cd server
```

#### Installation des dépendances
```bash
npm install
# ou
yarn install
```

#### Configuration de l'environnement
```bash
# Dupliquer le fichier .env.example et renommé en .env ( PS ya deja une bdd de mis en place qui se connecte a mon serveur en ligne donc tu peux l'utiliser)
cd server && cp env.example .env
```

#### Configuration de la base de données si tu utilise pas mon serveur
1. Créez une base de données MySQL
2. Modifiez le fichier `.env` avec vos paramètres de base de données :
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=votre_utilisateur
   DB_PASSWORD=votre_mot_de_passe
   DB_DATABASE=nom_de_votre_base
   ```

#### Génération de la clé d'application
```bash
node ace generate:key
```
Copiez la clé générée dans le fichier `.env` pour `APP_KEY`.

#### Migration de la base de données si t'as des tables
```bash
node ace migration:run
```

#### (Optionnel) Seeding de la base de données pour ajouter des fausses données
```bash
node ace db:seed
```

#### Démarrage du serveur
```bash
# Mode développement
npm run dev
# ou
yarn dev

# Mode production
npm run build
npm start
```

Le serveur sera accessible sur `http://localhost:3333`

### 3. Configuration du Frontend (Client)

```bash
cd client
```

#### Installation des dépendances
```bash
npm install
# ou
yarn install
```

#### Configuration de l'environnement
Créez un fichier `.env` dans le dossier `client` si nécessaire pour configurer l'URL de l'API.

#### Démarrage du client
```bash
# Mode développement
npm run dev
# ou
yarn dev

# Build pour la production
npm run build
# ou
yarn build
```

Le client sera accessible sur `http://localhost:5173`

## 🐳 Services Docker (Optionnel)

Le projet inclut un `docker-compose.yml` pour les services externes :

```bash
# Démarrer les services
docker-compose up -d

# Services disponibles :
# - Kestra (orchestration) : http://localhost:8080
# - Elasticsearch : http://localhost:9200
```

## 📁 Structure du projet

```
N22_Template/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── app/           # Logique métier (Redux, auth)
│   │   ├── components/    # Composants React
│   │   ├── pages/         # Pages de l'application
│   │   └── router.tsx     # Configuration des routes
│   └── package.json
├── server/                # Backend AdonisJS
│   ├── app/
│   │   ├── controllers/   # Contrôleurs API
│   │   ├── models/        # Modèles de données
│   │   ├── services/      # Services métier
│   │   └── middleware/    # Middlewares
│   ├── database/
│   │   ├── migrations/    # Migrations de base de données
│   │   └── seeders/       # Seeders
│   └── package.json
└── docker-compose.yml     # Services externes
```

## 🔧 Scripts disponibles

### Backend
- `npm run dev` : Démarre le serveur en mode développement avec hot reload
- `npm run build` : Compile le projet pour la production
- `npm start` : Démarre le serveur en mode production
- `npm run test` : Lance les tests
- `npm run lint` : Vérifie le code avec ESLint

### Frontend
- `npm run dev` : Démarre le serveur de développement Vite
- `npm run build` : Compile le projet pour la production
- `npm run preview` : Prévisualise le build de production
- `npm run lint` : Vérifie le code avec ESLint

## 🔑 Configuration des API externes

### Brawlhalla API
Pour utiliser l'API Brawlhalla, ajoutez votre clé API dans le fichier `.env` du serveur :

```env
BRAWLHALLA_API_KEY=votre_clé_api_brawlhalla
```

## 🚀 Déploiement

### Backend
1. Configurez les variables d'environnement pour la production
2. Exécutez `npm run build`
3. Démarrez avec `npm start`

### Frontend
1. Configurez l'URL de l'API de production
2. Exécutez `npm run build`
3. Déployez le contenu du dossier `dist/`

## 📝 Notes

- Le serveur utilise le port `3333` par défaut
- Le client utilise le port `5173` par défaut
- Assurez-vous que MySQL est en cours d'exécution avant de démarrer le serveur
- Pour le développement, les deux services doivent être démarrés simultanément

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request
