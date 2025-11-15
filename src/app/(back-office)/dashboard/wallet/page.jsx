import React from 'react'

function page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Wallet</h1>
        <p className="mt-2 text-sm text-muted-foreground">Manage your wallet balance and transactions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-border bg-card shadow-md dark:shadow-lg p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Balance</p>
            <p className="text-3xl font-bold text-foreground">UGX 0.00</p>
          </div>
        </div>
        
        <div className="rounded-lg border border-border bg-card shadow-md dark:shadow-lg p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Available Balance</p>
            <p className="text-3xl font-bold text-foreground">UGX 0.00</p>
          </div>
        </div>
        
        <div className="rounded-lg border border-border bg-card shadow-md dark:shadow-lg p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Pending Balance</p>
            <p className="text-3xl font-bold text-foreground">UGX 0.00</p>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg border border-border bg-card shadow-md dark:shadow-lg p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No transactions yet</p>
        </div>
      </div>
    </div>
  )
}

export default page