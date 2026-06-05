# Weather AI Dashboard

[![Next.js](https://img.shields.io/badge/next.js-16.2.7-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-19.2.4-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23526EDB.svg?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-private-lightgrey)](#license)

A modern dashboard for live weather monitoring and forestry imagery analysis. The current app delivers real-time weather conditions, hourly forecast charts, and a forestry image upload workflow for canopy/tree insights.

## Project Overview

The app includes two main experiences:

- **Weather Dashboard**: enter latitude/longitude, choose units and language, and view live weather conditions with hourly trends.
- **Forestry Analysis**: upload aerial imagery with metadata and submit it to a forestry API endpoint for canopy/tree analytics.

## Features

- Real-time weather lookup by geographic coordinates
- Metric and Imperial unit support
- Language selection for weather data
- Current weather summary with icon, temperature, feels-like, humidity, and wind
- Hourly temperature trend chart using `recharts`
- Hourly detail cards with precipitation probability
- Forestry image upload workflow with metadata fields for farmer ID, county, and acreage
- Global toast notifications for API errors and success states

## Routes

- `/` - Weather dashboard
- `/forestry` - Forestry image analysis
- `/api/proxy/[...path]` - server-side proxy route for weather and forestry API calls (supports `GET` and `POST`)

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- `@tanstack/react-query`
- `axios`
- `recharts`
- `sonner` for toast notifications
- `lucide-react` icons

## Getting Started

### Install dependencies

```bash
npm install
```

### Configure environment

Create a `.env.local` file in the project root and add your API settings:

```bash
WEATHER_API_BASE_URL=https://api.weather-ai.co
WEATHER_API_KEY=your_api_key_here
```

These values authenticate and route requests through the server-side proxy endpoint.

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
npm run start
```

## Development Workflow

- Create a feature branch: `git checkout -b feature/your-feature`
- Install dependencies: `npm install`
- Run the app locally: `npm run dev`
- Build before merging: `npm run build`
- Keep your branch rebased with `main` or the project default branch

> No dedicated test suite exists yet. Add tests and update this section once coverage is available.

## Deployment

### Vercel

This project is ready to deploy on Vercel.

1. Sign in to [Vercel](https://vercel.com/) and create a new project.
2. Connect your Git repository.
3. Set the environment variable in Vercel:
   - `NEXT_PUBLIC_WEATHER_API_KEY`

4. Use the default build settings:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: (default)

5. Deploy.

Vercel will automatically build and host the app, and the `/` and `/forestry` routes will be available.

## Usage

### Weather Dashboard

1. Open `/`
2. Enter `Latitude` and `Longitude`
3. Select `Metric` or `Imperial`
4. Choose display language
5. Weather information loads automatically

### Forestry Analysis

1. Open `/forestry`
2. Provide metadata: farmer ID, county, and land acres
3. Upload an image file
4. Click `Analyze Image`
5. Review analysis results once complete

## Code Structure

- `app/` - Next.js app routes and layout
- `components/` - UI components and feature modules
  - `features/WeatherCard.tsx` - visual weather card composition
  - `features/ForestryUploader.tsx` - forestry image upload UI
  - `ui/Navbar.tsx` - navigation bar
  - `ui/GlobalToast.tsx` - toast provider
- `lib/` - API helpers and hooks
  - `lib/api.ts` - Axios client with base URL and auth header
  - `lib/api-error.ts` - centralized error handling
  - `lib/hooks/useWeather.ts` - weather query hook
  - `lib/hooks/useForestry.ts` - forestry upload mutation
- `public/` - static assets
- `types/` - TypeScript data models

## Environment Variables

- `WEATHER_API_BASE_URL` - base URL for the external weather/forestry API
- `WEATHER_API_KEY` - server-side API key used by the `/api/proxy/[...path]` proxy route

## Notes

- The app currently loads weather data from `https://api.weather-ai.co`
- Toasts surface API errors like unauthorized access, rate limiting, or server failures
- The forestry feature posts multipart form data to `/v1/trees/analyze`

## License

This repository is currently private and intended for internal usage documentation.
