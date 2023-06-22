import React, { useState, useEffect } from 'react'

export default function DataTile({className, apiReadKey, channelId}) {
    const [data, setData] = useState({});
    const units = ["Lx", "°C", "%"];
    var fieldData = "";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.thingspeak.com/channels/${channelId}/feeds/last.json?api_key=${apiReadKey}`);
            const data = await response.json();
            setData(data);
        };

        const timer = setInterval(fetchData, 3000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    if (className == 'illuminance-container') {
        fieldData = `${data.field1} ${units[0]}`;
    }

    else if (className == 'motion-container') {
        fieldData = `${data.field2} motion`;
    }

    else {
        fieldData = `to follow`;
    }

    return (
        <div className={className}>
            {className}
            <p>{fieldData}</p>
        </div>
    )
}
