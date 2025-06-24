FROM node:24-alpine

WORKDIR /app

# Activate pnpm
RUN corepack enable pnpm && \
  yes | pnpm -v

RUN --mount=type=bind,src=package.json,target=package.json \
    --mount=type=bind,src=pnpm-lock.yaml,target=pnpm-lock.yaml \
    pnpm install
  
COPY . .

RUN pnpm run build