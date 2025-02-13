<div align="center">
  <h1><samp>Task</samp></h1>
  <samp>Showcasing my coding skills and projects with a sleek, modern design.<br /> Built using the latest web technologies to demonstrate my expertise and creativity</samp>
</div>

## Stack technologies

- [React](https://react.dev/learn) + [Typescript](https://www.typescriptlang.org/docs/)
- [Antd](https://ant.design/) - Performant, flexible and extensible forms with for ui
- [React Query](https://tanstack.com/query) - Automatically caches data from your queries, reducing the need for redundant network requests and improving application performance.
- [SCSS](https://sass-lang.com/) - For styles
- [Vite.js](https://Nextjs.org/) - framework for CSR

## Basic requirements for the project

> [!NOTE]
> Version Node +v20\*

## For Developers

## Prerequisites

- Node.js (v20+)
- pnpm

## Installation

```bash
# Clone the repository
git clone https://github.com/warnigo/tboon.git

# Navigate to project directory
cd tboon

# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.development

# Run development server
pnpm dev
```

Run the project at [localhost:3000](http://localhost:3000)

> [!NOTE]
> You need to create `.env.development` following the example of `.env.example` so that all parameters are

## Project structure (we will describe large sections separately inside the folder)

```
Root
├── public - All public files that will be included in the production build
├── src - Development folder
│   │
│   ├── app - Here is the entire project structure by structure
│   ├── entities - Components common to the project that are not included in the ui
│   ├── pages - All page of the project, that is, all pages, the main code is created in this folder
│   ├── shared - Components that are used throughout the project
│   └── widgets- Contains reusable UI components and widget implementations
│
├── .env.example - Example of environment variables for production.
├── .gitignore - Specifies which files and directories to ignore in Git.
├── .npmrc - Configuration for npm, including registry settings and package behaviors.
├── .prettierrc - Configuration for Prettier formatting.
├── eslint.config.mjs - Configuration for ESLint.
├── vite.config.ts - Configuration settings for Vite.js.
├── package.json - List of project dependencies and scripts.
├── postcss.config.cjs - Configuration for PostCSS.
└── tsconfig.json - Configuration for TypeScript
```

## Deployment

```bash
# Build for production
pnpm build

# Preview production build
pnpm start
```

## Creator

Developed by **Warnigo**

- Website: [warnigo.uz](https://www.warnigo.uz)
- Email: thewarnigo@gmail.com
