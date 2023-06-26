import requests
import time
import json

url = "https://api.thingspeak.com/channels/2155390/feeds/last.json?api_key=WPAAONKTI1XJEUIB"

while True:
    response = requests.get(url)

    #print(response.text)

    data_disc = json.loads(response.text)
    print(data_disc)

    print(f"counter value: {data_disc['field1']}")
    print(f"counter*2 value: {data_disc['field2']}")
    time.sleep(3)