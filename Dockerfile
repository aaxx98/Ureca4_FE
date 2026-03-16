FROM node:20-alpine AS builder

WORKDIR /app

ARG VITE_API_BASE_URL
ARG VITE_GOOGLE_REDIRECT_URI
ARG VITE_GOOGLE_AUTH_URL

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_GOOGLE_REDIRECT_URI=$VITE_GOOGLE_REDIRECT_URI
ENV VITE_GOOGLE_AUTH_URL=$VITE_GOOGLE_AUTH_URL

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY server.mjs ./server.mjs

EXPOSE 3000

CMD ["node", "server.mjs"]