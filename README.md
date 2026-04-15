# React + Vite Project

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> A modern, fast, and scalable React application built with Vite, featuring hot module replacement (HMR) and optimized build configuration.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Code Quality](#-code-quality)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- ⚡️ **Lightning Fast HMR** - Instant feedback with Vite's Hot Module Replacement
- 🎯 **React 18** - Latest React features including concurrent rendering
- 🛠️ **Modern Tooling** - ESLint, Prettier for code quality
- 📦 **Optimized Build** - Tree-shaking and code splitting out of the box
- 🎨 **CSS Modules** - Scoped styling support
- 🔥 **Fast Refresh** - Preserve component state during development
- 📱 **Responsive Design** - Mobile-first approach
- 🌐 **PWA Ready** - Progressive Web App support (optional)

## 🚀 Tech Stack

### Core
- **React** ^18.3.1 - JavaScript library for building user interfaces
- **Vite** ^5.4.2 - Next generation frontend tooling
- **JavaScript/JSX** - Modern JavaScript with JSX syntax

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **@vitejs/plugin-react** - Official Vite plugin for React with Fast Refresh

### Optional (Add as needed)
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Query** - Data fetching and caching
- **Zustand/Redux** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI/Ant Design** - UI component libraries

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0 (LTS recommended)
- **npm** >= 9.0.0 or **yarn** >= 1.22.0 or **pnpm** >= 8.0.0

Check your versions:
```bash
node --version
npm --version
```

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/adityabastyas/koda-b6-react.git
cd koda-b6-react
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Set Up Environment Variables
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=My React App
```

## 📁 Project Structure

```
koda-b6-react/
│
├── .github/                      # GitHub configurations
│   └── workflows/                # CI/CD workflows
│       └── deploy.yml            # Deployment automation
│
├── public/                       # Static assets
│   ├── favicon.ico               # App favicon
│   ├── robots.txt                # SEO robots file
│   └── manifest.json             # PWA manifest
│
├── src/                          # Source code
│   ├── assets/                   # Static assets (images, fonts, etc.)
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   │
│   ├── components/               # Reusable UI components
│   │   ├── common/               # Common/shared components
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.js
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   └── Spinner/
│   │   │
│   │   ├── layout/               # Layout components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Sidebar/
│   │   │   └── MainLayout.jsx
│   │   │
│   │   └── features/             # Feature-specific components
│   │       ├── auth/
│   │       ├── dashboard/
│   │       └── profile/
│   │
│   ├── pages/                    # Page components (views)
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.module.css
│   │   │   └── index.js
│   │   ├── About/
│   │   ├── Dashboard/
│   │   └── NotFound/
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── useLocalStorage.js
│   │
│   ├── context/                  # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── index.js
│   │
│   ├── services/                 # API services and external integrations
│   │   ├── api.js                # API client configuration
│   │   ├── authService.js
│   │   └── userService.js
│   │
│   ├── utils/                    # Utility functions
│   │   ├── constants.js          # App constants
│   │   ├── helpers.js            # Helper functions
│   │   └── validators.js         # Validation functions
│   │
│   ├── styles/                   # Global styles
│   │   ├── global.css            # Global CSS
│   │   ├── variables.css         # CSS variables
│   │   └── reset.css             # CSS reset
│   │
│   ├── routes/                   # Route configurations
│   │   ├── index.jsx             # Main router
│   │   ├── PrivateRoute.jsx      # Protected route wrapper
│   │   └── routes.js             # Route definitions
│   │
│   ├── store/                    # State management (if using Redux/Zustand)
│   │   ├── slices/
│   │   └── index.js
│   │
│   ├── App.jsx                   # Root component
│   ├── App.css                   # App styles
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Root styles
│
├── .env                          # Environment variables (not in git)
├── .env.example                  # Environment variables example
├── .gitignore                    # Git ignore rules
├── .eslintrc.cjs                 # ESLint configuration
├── eslint.config.mjs             # ESLint modern config
├── .prettierrc                   # Prettier configuration
├── Dockerfile                    # Docker configuration
├── docker-compose.yml            # Docker Compose setup
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Dependency lock file
├── vite.config.js                # Vite configuration
├── README.md                     # Project documentation
└── LICENSE                       # Project license
```

## 📝 Available Scripts

### Development
```bash
# Start development server (default: http://localhost:5173)
npm run dev

# Start with custom port
npm run dev -- --port 3000

# Start with host exposed
npm run dev -- --host
```

### Building
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Auto-fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

### Testing (if configured)
```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🛠️ Development

### Component Creation Pattern

Create a new component using this structure:

```jsx
// src/components/common/ExampleComponent/ExampleComponent.jsx
import React from 'react';
import styles from './ExampleComponent.module.css';

const ExampleComponent = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ExampleComponent;
```

```css
/* src/components/common/ExampleComponent/ExampleComponent.module.css */
.container {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.content {
  color: #333;
}
```

```javascript
// src/components/common/ExampleComponent/index.js
export { default } from './ExampleComponent';
```

### Custom Hook Example

```javascript
// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
```

### API Service Pattern

```javascript
// src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

## 🏗️ Building for Production

### Standard Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory with:
- Minified JavaScript and CSS
- Code splitting for optimal loading
- Asset optimization
- Source maps (optional)

### Build Configuration

Customize build in `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Docker
```bash
# Build Docker image
docker build -t react-vite-app .

# Run container
docker run -p 3000:80 react-vite-app
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🔐 Environment Variables

Create `.env` file in root directory:

```env
# API Configuration
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key_here

# App Configuration
VITE_APP_TITLE=My React App
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false

# Third-party Services
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

**Note:** All Vite environment variables must be prefixed with `VITE_`

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
const isDebug = import.meta.env.VITE_ENABLE_DEBUG === 'true';
```

## 🎨 Code Quality

### ESLint Configuration

```javascript
// eslint.config.mjs
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
```

### Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

## 📚 Best Practices

### 1. Component Organization
- Keep components small and focused
- Use functional components with hooks
- Implement proper prop validation
- Follow single responsibility principle

### 2. State Management
- Use local state for component-specific data
- Context for global/shared state
- Consider Redux/Zustand for complex state

### 3. Performance
- Use React.memo() for expensive components
- Implement code splitting with lazy loading
- Optimize images and assets
- Use useMemo() and useCallback() wisely

### 4. Code Style
- Use meaningful variable names
- Write self-documenting code
- Add comments for complex logic
- Follow consistent naming conventions

### 5. File Naming
- Components: PascalCase (e.g., `UserProfile.jsx`)
- Utilities: camelCase (e.g., `formatDate.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)

### 6. Import Organization
```javascript
// 1. External libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 2. Internal components
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

// 3. Hooks and utilities
import { useFetch } from '@/hooks/useFetch';
import { formatDate } from '@/utils/helpers';

// 4. Styles
import styles from './Component.module.css';
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Commit Message Guidelines

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new user dashboard
fix: resolve login authentication bug
docs: update installation instructions
style: format code with prettier
refactor: restructure component hierarchy
test: add unit tests for auth service
chore: update dependencies
```


## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite Team for the blazing-fast build tool
- All contributors and supporters

## 📞 Support

- 📧 Email: adityabastyas@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/adityabastyas/koda-b6-react/issues)


---

Made with ❤️ by [Aditya Bastyas](https://github.com/adityabastyas)

**⭐ If you find this project useful, please consider giving it a star!**