import { doc, serverTimestamp, setDoc, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import {db} from '../firebase';
import React, { useState, useEffect } from 'react';

export default function DataTile({className, apiReadKey, channelId}) {
    const [data, setData] = useState({});
    const units = ["Lx", "°C", "%"];
    const sensors = ["Light", "Temperature and Humidity", "Gyroscope"];
    var fieldData = "";
    var sensor = "";
    var note = "";
    var timestamp = 0;
    var fetchTimeInterval = 3000;

    const sleep = (ms) => {
        setTimeout(() => {}, ms);
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://api.thingspeak.com/channels/${channelId}/feeds/last.json?api_key=${apiReadKey}`);
    //         const data = await response.json();
    //         setData(data);
    //     };

    //     const timer = setInterval(fetchData, fetchTimeInterval);

    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, []);


    async function addToLogs(note, sensor, timestamp) {
        const logData = {
            Note: note,
            Sensor: sensor,
            TimeStamp: timestamp,
            id: uuidv4(),
        }


        // try {
        //     const collectionRef = collection(db, 'alert-logs');
        //     const logDataRef = doc(collectionRef, logData.id);
        //     await setDoc(logDataRef, logData);
        // } catch (err) {
        //     console.log(err.message);
        // }
    }

    if (className == 'illuminance-container') {
        fieldData = `${data.field1} ${units[0]}`;
    }

    else if (className == 'motion-container') {
        fieldData = `${data.field2} motion`;
        if (data.field2 == 1) {
            note = "Movement Detected!";
            sensor = sensors[2];
            timestamp = serverTimestamp();
            addToLogs(note, sensor, timestamp);
        }
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
