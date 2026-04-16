import { login } from './actions'
import Image from 'next/image'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error: string }
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#f4f1ea] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-neutral-100 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#d9b482]/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-emerald-900/10 rounded-full blur-[60px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8">
            <h1 className="text-3xl font-light tracking-tight text-neutral-900">
              Admin <span className="font-serif italic text-[#c29c6b]">Login</span>
            </h1>
            <p className="text-sm text-neutral-500">
              Enter your credentials to access the secure dashboard.
            </p>
          </div>

          <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground space-y-4" action={login}>
            {searchParams?.error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg mb-4 text-center border border-red-100">
                {searchParams.error}
              </div>
            )}
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700" htmlFor="email">
                Email Address
              </label>
              <input
                className="rounded-xl border border-neutral-200 px-4 py-3 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all placeholder-neutral-400"
                name="email"
                placeholder="admin@ceylontealand.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-700" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-xl border border-neutral-200 px-4 py-3 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all placeholder-neutral-400"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </div>

            <button className="bg-neutral-900 text-white rounded-xl px-4 py-3.5 mt-4 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full font-medium text-sm tracking-wide duration-300">
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
