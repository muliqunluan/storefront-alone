# 基于 node 官方轻量镜像的多阶段构建（适用于 SSR）
FROM node:18-alpine AS base
WORKDIR /app

# 复制依赖描述文件并安装依赖（利用缓存）
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm ci --production=false

# 复制源码并构建
COPY . .
RUN npm run build

# 运行镜像
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# 仅复制运行时需要的内容
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/public ./public

EXPOSE 3000
ENV PORT=3000
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "3000"]