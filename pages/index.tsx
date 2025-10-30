import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-semibold mb-6">企业前端 Starter（TypeScript · Next.js · Tailwind · NextAuth）</h1>

      <p className="mb-6 text-slate-700">
        这是一个最小的企业友好骨架，不包含电商商品页面或购物车预制。按需扩展路由、组件和 api。
      </p>

      <div className="space-y-4">
        {session ? (
          <>
            <div className="p-4 bg-white rounded shadow">
              <p>已登录为：{session.user?.email ?? session.user?.name}</p>
            </div>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              登出
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
          >
            登录
          </button>
        )}
      </div>
    </div>
  );
}