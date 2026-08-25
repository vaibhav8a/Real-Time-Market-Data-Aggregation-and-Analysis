# Real-Time Market Data Aggregation and Analysis

A dashboard that pulls stock, crypto and news data from several public APIs,
stores it in Firestore, and pushes live updates to the browser over
WebSockets.

## Architecture

```
 Alpha Vantage ─┐
 Finnhub ───────┤
 CoinGecko ─────┼─→  server (Express)  ─→  Firestore
 NewsAPI ───────┘         │
                          └─ Socket.IO ─→  client (React + Vite)
```

The server owns every outbound API call. The client never talks to a data
provider directly — it holds one socket connection and renders what arrives,
which keeps provider keys server-side and the per-provider rate limits in one
place.

## Server

`server/` — Express + Socket.IO, with `node-cron` driving the refresh.

| Path | Role |
|---|---|
| `services/stockService.js` | Equity quotes |
| `services/cryptoService.js` | Crypto prices |
| `services/newsService.js` | Market news |
| `services/alertService.js` | Threshold alerts |
| `jobs/marketDataJob.js` | Scheduled refresh that drives the above |
| `config/socket.js` | Socket.IO wiring and emit interval |
| `config/firebase.js` | Firebase Admin initialisation |

## Client

`client/` — React on Vite, with Tailwind (see `postcss.config.js`).

Pages: `Home`, `Login`, `Dashboard`. Components cover charts
(`charts/ChartComponents.jsx`), asset tiles and a news panel.

## Running it

Both halves need environment files. Copy the examples rather than editing a
committed file:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Then fill in your own provider keys and Firebase credentials — see
[`FIREBASE_SETUP.md`](FIREBASE_SETUP.md) for the Firebase side.

```bash
cd server && npm install && npm run dev
```

```bash
cd client && npm install && npm run dev
```

> **Note on credentials.** `client/.env` and `server/.env` are currently
> tracked in git. The Firebase web config in `client/.env` is public by design,
> but the server file is where a real service-account key would live — treat
> anything in it as compromised and rotate before deploying.
