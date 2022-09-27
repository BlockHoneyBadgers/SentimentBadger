# SentimentBadger

## `/server`

Node version: v16.13.0

### Running the server

Start the local server:

1. Run `yarn install` once to install the dependencies.
2. Create `server/.env` file (see below).
3. Run `yarn start:dev` to start the local server on port configured by `PORT` env var.

Other commands:

- `yarn build` - production build (dist)
- `yarn start` - start production instance
- `yarn lint` - run eslint
- `yarn check-types` - run typescript type checking

### Env variables

Local `.env` file:

```
PORT=3456
SERP_API_KEY={your SerpApi Key}
```

## `/client`

WIP
