# CLAUDE.md

This file provides guidance to Claude Code (`claude.ai/code`) when working with code in this repository.

## Quick Start Guide

### First-Time Setup

1. **Clone and Navigate**

   ```bash
   git clone https://github.com/arthurdiluz/arthurdiluz.github.io.git
   cd arthurdiluz.github.io
   ```

2. **Environment Setup**

   ```bash
   # Use Node.js 20 LTS (recommended: use nvm)
   nvm use 20
   
   # Install dependencies with frozen lockfile
   yarn install --frozen-lockfile
   ```

3. **Development Workflow**

   ```bash
   # Run quality checks before starting
   yarn check
   
   # Start development server
   yarn dev
   
   # Build for production (GitHub Pages)
   yarn build
   ```

4. **Verify Setup**
   - Development server: <http://localhost:3000>
   - Static build output: `./out` directory
   - All TypeScript and ESLint checks pass

## Development Commands

### Core Development

- `yarn dev` - Start development server on `localhost:3000`
- `yarn build` - Build static export for deployment
- `yarn start` - Serve built static files using npx serve

### Code Quality & Validation

- `yarn lint` - Run ESLint with Next.js defaults
- `yarn lint:strict` - Run ESLint with zero warnings policy and strict rules (uses flat config)
- `yarn typecheck` - Run TypeScript compiler checks without emitting files
- `yarn check` - Run both typecheck and lint:strict (comprehensive validation)

### Maintenance

- `yarn clean` - Clean build artifacts (.next, out) and yarn cache

## Architecture Overview

This is a personal portfolio website built as a **static Next.js 15.5.2 application** with React 19.1.1, designed for GitHub Pages deployment with the following key architectural decisions:

### Export Configuration

- **Static Export**: Uses `output: "export"` in next.config.ts for GitHub Pages deployment
- **React Strict Mode**: Disabled (`reactStrictMode: false`) for compatibility
- **No Server Features**: Cannot use Next.js server-side features (API routes, server actions, dynamic routing with params)
- **Image Optimization Disabled**: Uses `unoptimized: true` for static compatibility
- **Build Validation**: TypeScript and ESLint errors fail the build (`ignoreBuildErrors: false`, `ignoreDuringBuilds: false`)
- **Package Optimization**: Experimental `optimizePackageImports` enabled for Phosphor Icons

### Component Architecture

- **Modular Design**: Components organized by feature (sidebar, main-content, about, portfolio, resume)
- **Barrel Exports**: Each component directory has index.ts for clean imports
- **State Management**: Uses React hooks (useState, useCallback) for client-side state
- **Page System**: Single-page application with dynamic content switching via `PageKey` type (`"about" | "resume" | "portfolio"`)
- **Client-Side Rendering**: Main page component uses `"use client"` directive for interactivity
- **Icon System**: Phosphor Icons with provider wrapper for consistent icon rendering

### Key Components Structure

```text
src/components/
├── layout/           # App-wide providers and wrappers
│   ├── main-content-wrapper.tsx
│   ├── phosphor-icon-provider.tsx
│   └── index.ts      # Barrel export
├── sidebar/          # User info, contacts, social links
│   ├── avatar-box.tsx
│   ├── contacts-list.tsx
│   ├── social-list.tsx
│   ├── contact-item.tsx
│   ├── social-item.tsx
│   ├── user-name-display.tsx
│   ├── show-contacts-button.tsx
│   ├── sidebar.tsx
│   └── index.ts      # Barrel export
├── main-content/     # Navigation and page content container
│   ├── navbar.tsx
│   ├── navbar-item.tsx
│   ├── page-article.tsx
│   └── index.ts      # Barrel export
├── about/           # About section with services and skills
│   ├── about-section.tsx
│   ├── service-item.tsx
│   ├── service-icon.tsx
│   ├── technical-skills.tsx
│   └── index.ts      # Barrel export
├── portfolio/       # Project showcase with categories
│   ├── portfolio-section.tsx
│   ├── project-item.tsx
│   ├── project-categories.tsx
│   ├── project-title.tsx
│   ├── project-with-single-link.tsx
│   ├── project-with-multiple-links.tsx
│   └── index.ts      # Barrel export
├── resume/          # Timeline-based resume display
│   ├── resume-section.tsx
│   ├── timeline-section.tsx
│   ├── timeline-item.tsx
│   ├── timeline-icon.tsx
│   └── index.ts      # Barrel export
├── faq-section.tsx  # Standalone FAQ component
└── index.ts         # Main barrel export for all components
```

### Styling System

- **Tailwind CSS 4.1.13**: Primary styling with extensive custom configuration
- **PostCSS**: Uses `@tailwindcss/postcss` plugin for processing
- **Custom CSS Modules**: Organized modular stylesheets in `src/styles/`:
  - `main.css` - Main stylesheet entry point
  - `variables.css` - CSS custom properties
  - `reset.css` - CSS reset/normalization
  - `layout.css` - Layout-specific styles
  - `components.css` - Component-specific styles
  - `sections.css` - Section-specific styles
  - `animations.css` - Animation definitions
  - `responsive.css` - Responsive design utilities
- **Typography**: Inter font with variable weight (400-800) and fallbacks
- **Color System**: Extended palette with brand colors, portfolio-specific colors (onyx, jet, eerie-black), highlight variations, and transparent overlays
- **Responsive Design**: Mobile-first approach with sidebar toggle functionality
- **Icon Libraries**: Phosphor Icons (primary) and Lucide React with provider wrapper

### Type Safety & Code Quality

- **Strict TypeScript 5**: Ultra-strict configuration with advanced safety features:
  - `noUncheckedIndexedAccess` - Prevents unsafe array/object access
  - `exactOptionalPropertyTypes` - Strict optional property handling
  - `noImplicitOverride` - Explicit override requirements
  - `noPropertyAccessFromIndexSignature` - Type-safe property access
  - `useUnknownInCatchVariables` - Safer error handling
  - `verbatimModuleSyntax` - Strict import/export syntax
- **ESLint Configuration**: Comprehensive flat config with multiple plugins:
  - TypeScript ESLint with strict type safety rules
  - Import plugin for import hygiene
  - Unused imports detection and removal
  - Promise best practices
  - Unicorn modern JS patterns
  - SonarJS bug-prone pattern detection
  - File naming enforcement (kebab-case)
- **Type-only Imports**: Enforced via `consistent-type-imports` rule
- **Schema Validation**: Structured data generation for SEO using `schema-dts`

### Content Management & Data Architecture

- **Static Content System**: Centralized content management in `src/lib/`:
  - `content-data.ts` - All portfolio content (personal info, services, projects, timeline, FAQs)
  - `types.ts` - Comprehensive TypeScript interfaces for all data structures
  - `metadata.ts` - Next.js metadata configuration
  - `seo-data.ts` - SEO-specific data and settings
  - `schemas/` - Structured data schema generation
- **Type-Safe Content**: Comprehensive interfaces covering:
  - Personal information and contact details
  - Service items with descriptions and icons
  - Project items (single/multiple URLs)
  - Timeline entries for resume
  - FAQ items with categorization
  - Social links and navigation
- **SEO Integration**: Rich metadata, structured data schemas, and social media optimization

## Code Standards & Development Practices

### TypeScript Configuration

- **Target**: ES2017 with ESNext modules and bundler resolution
- **Ultra-Strict Mode**: Enhanced safety with multiple strict flags:
  - `noUncheckedIndexedAccess` - Array/object access safety
  - `exactOptionalPropertyTypes` - Strict optional handling
  - `noImplicitOverride` - Explicit method overrides
  - `noPropertyAccessFromIndexSignature` - Type-safe property access
  - `useUnknownInCatchVariables` - Better error handling
  - `noImplicitReturns` - Explicit return statements
  - `noFallthroughCasesInSwitch` - Complete switch cases
  - `verbatimModuleSyntax` - Strict import/export syntax
- **Path Mapping**: `@/*` imports pointing to `src/*`
- **Includes**: Source files, config files, and Next.js types
- **Excludes**: `node_modules` and `DEMO/**` directory

### ESLint Configuration (Flat Config)

- **Modern Flat Configuration**: Uses ESLint 9 flat config format
- **Multi-Plugin Setup**: Comprehensive plugin ecosystem:
  - `@typescript-eslint` - TypeScript-specific linting
  - `eslint-plugin-import` - Import/export management
  - `eslint-plugin-promise` - Promise best practices
  - `eslint-plugin-unicorn` - Modern JavaScript patterns
  - `eslint-plugin-sonarjs` - Bug-prone pattern detection
  - `eslint-plugin-unused-imports` - Automatic unused import removal
- **Strict Type Safety**: Zero-tolerance for unsafe TypeScript patterns
- **Code Quality Enforcement**:
  - No `any` types allowed
  - Consistent type imports required
  - Interface definitions preferred
  - Strict boolean expressions
  - No ignored TypeScript comments
- **File Standards**: kebab-case naming enforced for all files
- **Next.js Integration**: Core Web Vitals and TypeScript configs with selective overrides

### Development Workflow

- **Quality Gates**: Multi-layer validation approach:
  - `yarn check` combines TypeScript and ESLint validation
  - `yarn typecheck` for TypeScript compilation without output
  - `yarn lint:strict` for zero-warning ESLint validation
- **Build Process**: Both TypeScript and ESLint errors fail builds
- **Pre-Development**: Always run `yarn check` before making changes
- **Static Analysis**: Ultra-strict TypeScript catches issues at compile time
- **Import Organization**: Automatic unused import cleanup and consistent styling

## Project-Specific Configuration

### Runtime Environment

- **Node.js**: Version 20 LTS (specified in `.nvmrc` and GitHub Actions)
- **Package Manager**: Yarn with frozen lockfile for deterministic builds
- **Dependencies**: Carefully curated with latest stable versions:
  - Next.js 15.5.2 with React 19.1.1
  - TypeScript 5 with comprehensive type checking
  - Tailwind CSS 4.1.13 with PostCSS processing
  - Phosphor Icons 2.1.10 and Lucide React 0.542.0

### AI-Powered Development Tools

- **Task Master Integration**: `.taskmaster/` directory with AI task management:
  - Google Gemini 2.5 Pro/Flash models for task automation
  - Configuration for research, main tasks, and fallback scenarios
  - Template system for structured task management
- **Cursor IDE Integration**: `.cursor/` directory with comprehensive development rules:
  - MCP server configuration for development tools
  - TypeScript, React, Node.js, UI/UX, and self-improvement guidelines
  - Taskmaster integration for AI-assisted development

### GitHub Actions & CI/CD

- **Automated Deployment**: `.github/workflows/deploy.yml`
  - Triggered on main branch pushes and manual dispatch
  - Uses Node.js 20 with Yarn frozen lockfile installation
  - Builds static export to `./out` directory
  - Adds `.nojekyll` file for GitHub Pages compatibility
  - Deploys to GitHub Pages with proper permissions
- **AI-Powered Workflows**: Multiple Gemini-enhanced automation:
  - `gemini-pr-review.yml` - Automated pull request reviews
  - `gemini-issue-automated-triage.yml` - Real-time issue triage
  - `gemini-issue-scheduled-triage.yml` - Scheduled issue management
  - `gemini-cli.yml` - CLI interaction automation
- **Security**: Proper GitHub token permissions and concurrent deployment handling

### Deployment Architecture

- **GitHub Pages**: Fully static export optimized for GitHub Pages hosting
- **Build Output**: Static files in `out/` directory with Jekyll bypass (`.nojekyll`)
- **SEO Optimization**: Complete SEO setup including:
  - `robots.txt` and `sitemap.xml` in public directory
  - Structured data schemas with `schema-dts`
  - Rich metadata and Open Graph tags
  - Inter font optimization with variable weights
- **Static Constraints**: No server-side features (SSR, API routes, dynamic routing)
- **Asset Strategy**: Unoptimized images for static compatibility, font preloading
- **Performance**: Single-page application with client-side routing and state management

### Design System & Styling Architecture

- **Tailwind Extended Configuration**: Comprehensive custom theme extension:
  - **Brand Colors**: Primary (#0070f3), secondary (#ff4081), accent (#f5a623)
  - **Status Colors**: Success, warning, error indicators
  - **Portfolio Palette**: Onyx, jet, eerie-black variations for dark themes
  - **Highlight System**: 10-shade highlight color scale (#2ecc71 as primary)
  - **Transparent Overlays**: Predefined opacity levels for backgrounds
  - **Typography**: Inter font family with comprehensive weight range
- **CSS Architecture**: Modular stylesheet organization:
  - Variable-based design tokens
  - Component-specific styling
  - Layout and responsive utilities
  - Animation and transition definitions
- **Design Principles**: Mobile-first responsive design with consistent spacing and typography scales

## Component Development Guidelines

### Creating New Components

1. **File Structure**

   ```bash
   src/components/[feature]/
   ├── component-name.tsx    # Main component
   ├── index.ts             # Barrel export
   └── [other-parts].tsx    # Additional related components
   ```

2. **Component Template**

   ```typescript
   import type { ComponentNameProps } from "@/lib/types";
   import React from "react";
   
   export const ComponentName = ({
     prop1,
     prop2,
   }: ComponentNameProps): React.JSX.Element => (
     <div className="component-name">
       {/* Component content */}
     </div>
   );
   ```

3. **Type Definition Pattern**

   ```typescript
   // In src/lib/types.ts
   export interface ComponentNameProps {
     prop1: string;
     prop2: number;
     optionalProp?: boolean;
   }
   ```

### Component Conventions

- **Naming**: PascalCase for components, kebab-case for CSS classes
- **Exports**: Named exports preferred (not default exports)
- **Props**: Destructured in function signature with explicit typing
- **Return Type**: Always annotate with `React.JSX.Element`
- **Client Components**: Add `"use client"` directive when using React hooks

## Testing Strategy

### Current Status

- **No test framework configured** - This is a static portfolio site
- **Quality Assurance**: Relies on TypeScript strict mode and ESLint
- **Validation**: Build-time checks prevent deployment of broken code

### Testing Approach (If Needed)

```bash
# Recommended test setup for future expansion
yarn add -D @testing-library/react @testing-library/jest-dom vitest
```

### Manual Testing Checklist

- [ ] Development server starts without errors
- [ ] Build completes successfully (`yarn build`)
- [ ] All pages render correctly
- [ ] Responsive design works on mobile/desktop
- [ ] All external links function properly

## Error Handling & Debugging

### Common Build Issues

1. **TypeScript Errors**

   ```bash
   # Check specific errors
   yarn typecheck
   
   # Fix common issues
   - Ensure all props have proper type definitions
   - Check for missing imports or exports
   - Verify path mappings (@/* imports)
   ```

2. **ESLint Warnings/Errors**

   ```bash
   # Run strict linting
   yarn lint:strict
   
   # Common fixes
   - Remove unused imports (auto-fixed)
   - Add type annotations where required
   - Follow naming conventions (kebab-case files)
   ```

3. **Static Export Issues**

   ```bash
   # Verify static export compatibility
   - No server-side features (SSR, API routes)
   - All images use unoptimized: true
   - No dynamic routing with params
   ```

### Debugging Tools

1. **Development Console**
   - Browser DevTools for runtime issues
   - React Developer Tools extension
   - Network tab for asset loading issues

2. **Build Analysis**

   ```bash
   # Check build output
   yarn build && ls -la out/
   
   # Verify static files generated correctly
   npx serve out
   ```

### Performance Debugging

- **Bundle Analysis**: Check .next/static/ for chunk sizes
- **Image Optimization**: Ensure all images in public/assets/ are web-optimized
- **Lighthouse**: Test Core Web Vitals in production build

## Common Issues & Solutions

### Issue: "Module not found" errors

**Solution**: Check tsconfig.json path mappings and ensure imports use `@/` prefix

### Issue: Build fails with TypeScript errors

**Solution**: Run `yarn typecheck` to see specific errors, ensure all types are properly defined

### Issue: Static export missing pages

**Solution**: Verify next.config.ts has `output: "export"` and no server-side features

### Issue: GitHub Pages deployment fails

**Solution**: Check that build produces `./out` directory with `.nojekyll` file

### Issue: Styling not applied correctly

**Solution**: Ensure Tailwind classes are used correctly and CSS modules are imported properly

### Issue: Icons not rendering

**Solution**: Verify PhosphorIconProvider wraps the app and icon imports are correct
