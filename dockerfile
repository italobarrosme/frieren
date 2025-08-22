# Etapa 1: build
FROM node:20-alpine AS build
WORKDIR /app

# Copia package.json e lock para instalar deps
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copia resto do código
COPY . .

# Build SSR (gera /dist/server e /dist/client)
RUN npm run build

# Etapa 2: runtime
FROM node:20-alpine
WORKDIR /app

# Configurações de ambiente
ENV NODE_ENV=production
ENV PORT=4321

# Copia só o necessário do build
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Se você tiver scripts de start configurados (ex: "start": "node ./dist/server/entry.mjs")
EXPOSE 4321
CMD ["npm", "run", "start"]