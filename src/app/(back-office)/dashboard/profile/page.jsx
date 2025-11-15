import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '@/lib/authOptions'

export default async function page() {
    const session = await getServerSession(authOptions)
    if (!session) return;
    const { user } = session 
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Profile</h1>
        <p className="mt-2 text-sm text-muted-foreground">Manage your account settings and preferences</p>
      </div>
      
      <div className="rounded-lg border border-border bg-card shadow-md dark:shadow-lg p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Welcome, {user?.name}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Email:</span>
                <span className="text-foreground font-medium">{user?.email}</span>
              </div>
              {user?.role && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Role:</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400 border border-lime-200 dark:border-lime-800">
                    {user.role}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

 