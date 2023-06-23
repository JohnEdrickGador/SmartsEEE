import React from 'react';
import NavBar from './NavBar';
import DataBoard from './DataBoard';

export default function DashboardScreen() {
    return (
        <div className='dashboard-screen'>
            <NavBar />
            <DataBoard />
        </div>

    )
}
