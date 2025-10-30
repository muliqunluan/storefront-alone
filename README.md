# 企业前端 Starter（TypeScript · Next.js · Tailwind · NextAuth）

这个仓库是一个最小但企业友好的前端 starter，包含：
- Next.js + TypeScript
- Tailwind CSS
- NextAuth（认证基础，可扩展到 OIDC/SSO）
- Dockerfile + docker-compose

特点：
- 不包含任何电商预制页面（商品 / 购物车）
- 便于按需扩展（db、prisma、tRPC、API 路由、app router 等）

快速启动：
1. 安装依赖
   npm ci

2. 创建 .env 文件，至少需要：
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret

3. 本地开发
   npm run dev

4. 生产构建并运行（本地）
   npm run build
   npm start

5. 使用 Docker
   docker build -t my-next-starter .
   docker run -e NEXTAUTH_SECRET=... -p 3000:3000 my-next-starter

或者使用 docker-compose:
   NEXTAUTH_SECRET=... docker-compose up --build

接下来建议：
- 根据需要加入 DB（Postgres）和持久化（Prisma)
- 集成公司 SSO（OIDC）或其他 OAuth provider 到 NextAuth
- 加入 CI（GitHub Actions）和镜像 registry 推送脚本
- 设置环境变量管理/秘密管理（Vault / GitHub secrets)