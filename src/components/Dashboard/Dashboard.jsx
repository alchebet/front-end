import React, { useState } from 'react'
import { useUser } from '../hooks/Provider'

export default function Dashboard() {
 const user = useUser();
  
  return (
    <div>
      <h1>{user.displayName}'s Dashboard</h1>
    </div>
  )
}
