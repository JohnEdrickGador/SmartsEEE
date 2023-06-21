import React from 'react'
import { auth } from '../firebase';

export default function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  )
}
