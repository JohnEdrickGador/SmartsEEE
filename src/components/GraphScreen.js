import React from 'react'
import NavBar from './NavBar'

export default function GraphScreen() {
  return (
    <div>
        <NavBar />
        <div className='graphs-container'>
            <iframe
                src="https://thingspeak.com/channels/2199572/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15%22%3E">
            </iframe>
            <iframe
                src="https://thingspeak.com/channels/2155390/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Motion+Check&type=line">
            </iframe>
        </div>
    </div>
  )
}
