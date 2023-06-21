import React from 'react'
import { app } from '../firebase';

export default function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={() => app.auth().signOut()}>Logout</button>
    </div>
  )
}
