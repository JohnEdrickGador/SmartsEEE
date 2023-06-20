const gyro_alert_field = document.getElementById('gyro-alert');
const temp_data_field = document.getElementById('temp-data');
const humidity_field = document.getElementById('humidity-data');
const light_field = document.getElementById('light-data');


channel_id = "2155390";
api_key = "WPAAONKTI1XJEUIB";
url = `https://api.thingspeak.com/channels/${channel_id}/feeds/last.json?api_key=${api_key}`;

function fetchThingSpeak(url) {
    return fetch(url).then(res => res.json());
}

function main() {
    setInterval(() => {
        let data = fetchThingSpeak(url);
        data.then(res => {
            gyro_alert_field.innerText = res.field1;
            temp_data_field.innerText = res.field2;
            humidity_field.innerText = res.field3;
            light_field.innerText = res.field4;
        });
    }, 3000);
}

main();
