# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## NaviEats Setup

This project includes a teen-focused recipe website built with React, Tailwind CSS, Three.js, Supabase, and Vercel serverless AI endpoints.

### Environment Variables

Create a `.env` file in `navi-eats` with:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `GEMINI_API_KEY`
- `GEMINI_API_URL` (optional, defaults to the OpenAI responses endpoint)
- `TICKETMASTER_API_KEY` (optional)

### Run locally

1. `npm install`
2. `npm run dev`

### Deployment

Deploy the `navi-eats` folder to Vercel. Serverless functions live in `navi-eats/api/` and handle Gemini AI requests and event lookups.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
