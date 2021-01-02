import pandas as pd
import requests
from flask import Flask
import json

app = Flask(__name__)

@app.route('/countries', methods=['GET'])
def get_countries():
    df = pd.read_csv('data/countries.csv')
    df = df.drop('country', axis=1)
    return df.to_json(orient="records")

@app.route('/sunriseset/<string:lat>/<string:lng>/<string:date>', methods=['GET'])
def get_sunrise_set(lng, lat, date):
    if not lat.replace('.','').isnumeric() or not lng.replace('.','').isnumeric():
        print(lat.isnumeric(),lng.isnumeric())
        response = {'error': True, 'err_msg': 'Latitude/Longtitude should be Numeric', 'results': ''}
    else:
        res = requests.get(f"https://api.sunrise-sunset.org/json?lat={float(lat)}&lng={float(lng)}&date={date}&formatted=1")
        res = json.loads(res.content)

        if len(res['results']) > 0:
            response = {'error': False, 'results': res['results'], 'err_msg': ''}
        else:
            response = {'error': True, 'err_msg': 'no result', 'results': ''}

    return response
