'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { Settings, AlertCircle } from 'lucide-react'

export default function AdminPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token) {
      router.push('/auth/login')
      return
    }

    const parsedUser = userData ? JSON.parse(userData) : null
    setUser(parsedUser)

    // Check if user is admin
    if (parsedUser?.role !== 'ADMIN') {
      router.push('/dashboard')
    }
  }, [router])

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <p className="text-gray-400">Laddar...</p>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-primary overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-8">
            <Settings className="text-accent w-8 h-8" />
            <h1 className="text-4xl font-bold text-white">Administration</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* User Management */}
            <div className="bg-secondary border border-tertiary rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Användarhantering</h2>
              <p className="text-gray-400 mb-4">
                Hantera systemanvändare, behörigheter och roller
              </p>
              <button className="px-4 py-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition">
                Hantera användare
              </button>
            </div>

            {/* System Settings */}
            <div className="bg-secondary border border-tertiary rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Systeminställningar</h2>
              <p className="text-gray-400 mb-4">
                Konfigurera systemet och radiokanaler
              </p>
              <button className="px-4 py-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition">
                Inställningar
              </button>
            </div>

            {/* Database Maintenance */}
            <div className="bg-secondary border border-tertiary rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Databaskopior</h2>
              <p className="text-gray-400 mb-4">
                Säkerhetskopiera och återställ data
              </p>
              <button className="px-4 py-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition">
                Kopior
              </button>
            </div>

            {/* Logs */}
            <div className="bg-secondary border border-tertiary rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Systemloggar</h2>
              <p className="text-gray-400 mb-4">
                Visa och analysera systemaktiviteter
              </p>
              <button className="px-4 py-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition">
                Loggar
              </button>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-secondary border border-tertiary rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Systemstatus</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-tertiary rounded-lg">
                <span className="text-gray-300">Databasanslutning</span>
                <span className="px-3 py-1 bg-success/20 text-success rounded text-sm font-semibold">
                  ✓ Aktiv
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-tertiary rounded-lg">
                <span className="text-gray-300">API-server</span>
                <span className="px-3 py-1 bg-success/20 text-success rounded text-sm font-semibold">
                  ✓ Körs
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-tertiary rounded-lg">
                <span className="text-gray-300">WebSocket</span>
                <span className="px-3 py-1 bg-success/20 text-success rounded text-sm font-semibold">
                  ✓ Ansluten
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
