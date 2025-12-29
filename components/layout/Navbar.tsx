'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Home, Search, Users, Bell, User, LogOut } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-dark-border backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-gradient rounded-lg glow-effect" />
            <span className="text-xl font-bold gradient-text">Tech Hub</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/" icon={<Home className="w-5 h-5" />}>خانه</NavLink>
            <NavLink href="/explore" icon={<Search className="w-5 h-5" />}>کاوش</NavLink>
            <NavLink href="/clubs" icon={<Users className="w-5 h-5" />}>کلاب‌ها</NavLink>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <Link href="/notifications" className="p-2 rounded-lg hover:bg-dark-surface transition-colors">
                  <Bell className="w-5 h-5" />
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-dark-surface transition-colors"
                  >
                    <div className="w-8 h-8 bg-neon-gradient rounded-full" />
                    <User className="w-4 h-4" />
                  </button>
                  {isMenuOpen && (
                    <div className="absolute left-0 mt-2 w-48 glass-effect rounded-lg border border-dark-border p-2">
                      <Link href="/profile" className="block px-4 py-2 rounded hover:bg-dark-surface">
                        پروفایل
                      </Link>
                      <Link href="/settings" className="block px-4 py-2 rounded hover:bg-dark-surface">
                        تنظیمات
                      </Link>
                      <button className="w-full text-right px-4 py-2 rounded hover:bg-dark-surface text-red-400">
                        خروج
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="px-4 py-2 bg-neon-gradient rounded-lg font-semibold text-white glow-effect"
              >
                ورود
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-dark-surface transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}

