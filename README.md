# URL Shortener API

A simple Node.js + Express + TypeScript API that shortens URLs and stores them in MongoDB.

## Features

- POST `/api/shorten` – Create a shortened URL
- GET `/:shortId` – Redirect to the original URL
- MongoDB database integration using Mongoose
- Auto-generates short IDs using `nanoid`

## Tech Stack

- Express
- TypeScript
- MongoDB / Mongoose
- dotenv

## Setup

```bash
pnpm install
pnpm run build
pnpm start
