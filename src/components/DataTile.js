import React, { useState, useEffect } from 'react';

export default function DataTile({className, apiReadKey, channelId}) {
    const [data, setData] = useState({});
    const units = ["Lx", "°C", "%"];
    var fieldData = "";
    var fieldUnit = "";
    var tileName = "";
    var fetchTimeInterval = 3000;

    // const sleep = (ms) => {
    //     setTimeout(() => {}, ms);
    // }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.thingspeak.com/channels/${channelId}/feeds/last.json?api_key=${apiReadKey}`);
            const data = await response.json();
            setData(data);
        };

        const timer = setInterval(fetchData, fetchTimeInterval);

        return () => {
            clearInterval(timer);
        }
    }, []);

    const resetMotion = async (e) => {
        e.preventDefault();
        const url = "https://api.thingspeak.com/update?api_key=OA1I757ZN0AAOW7U&field2=0";
        const response = await fetch(url);
        const data = await response.json();
        console.log("posted 1 to thingspeak");
    }

    if (className === 'illuminance-container') {
        fieldData = data.field1;
        fieldUnit = units[0];
        tileName = "Illuminance";
    }

    else if (className === 'motion-container') {
        tileName = "Gyroscope and Accelerometer";
        if (data.field2 == 1) {
            
            fieldData = "Motion is Detected!"
        }
        else {
            fieldData = "Equipment is safe";
        }
    }

    else if (className === 'temp-container') {
        fieldData = data ? Number(data.field1) : 0.0;
        fieldData = fieldData.toFixed(2);
        fieldUnit = units[1];
        tileName = "Temperature";
    }

    else if (className === 'humid-container') {
        fieldData = data ? Number(data.field2) : 0.0;
        fieldData = fieldData.toFixed(2);
        fieldUnit = units[2];
        tileName = "Humidity";
    }

    if (className === 'motion-container') {
        return (
            <div className = {className}>
                <h2>{tileName}</h2>
                <div className='tile-data-container'>
                    <p className='fieldData'>{fieldData}</p>
                    <p className='fieldUnit'>{fieldUnit}</p>
                    {data.field2 == 1 && <button onClick={resetMotion}>REPAIRED</button>}
                </div>
            </div>
        )
    }

    else {
        return (
            <div className = {className}>
                <h2 className='tileName'>{tileName}</h2>
                <div className='tile-data-container'>
                    <p className='fieldData'>{fieldData}</p>
                    <p className='fieldUnit'>{fieldUnit}</p>
                </div>
            </div>
        )
    }
    
}
