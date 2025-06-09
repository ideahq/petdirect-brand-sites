# Petdirect Brand Sites

This repository contains static themed websites built with [Astro](https://astro.build/), enhanced with [React](https://reactjs.org/) components and styled using [React-Bootstrap](https://react-bootstrap.github.io/) and [Sass](https://sass-lang.com/).

## Tech Stack

- **Astro** - Static site builder
- **React** - For dynamic, reusable UI components
- **React-Bootstrap** - Bootstrap components for styling
- **Sass** - To make use of Bootstrap variables for styling

## Requirements

- **Node.js v22.x** is required.

## Installation

```bash
git clone git@github.com:ideahq/petdirect-brand-sites.git
cd petdirect-brand-sites
npm install
```

## Themes

A theme can be set with an optional [Environment Variable](https://docs.astro.build/en/guides/environment-variables/), either `peggys-pantry` or `wild-paw`. (The default is `peggys-pantry`).

Styles and content are defined per theme.

## Development

To start the local development server:

```bash
npm run dev
```

or

```bash
THEME=wild-paw npm run dev
```

## Build

To generate the static site for production:

```bash
npm run build
```

or

```bash
THEME=wild-paw npm run build
```
