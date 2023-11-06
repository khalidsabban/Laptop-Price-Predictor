""" Flask app """

import pickle
import pandas as pd
from functions import ram_extractor, feature_encoder
from flask import Flask, request, render_template

# Create flask app
flask_app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))

@flask_app.route('/process')
def process():
    """
    return process.html page
    """
    return render_template("process.html")

@flask_app.route('/')
def home():
    """
    return index.html page, the main page.
    """
    return render_template("index.html")

@flask_app.route('/predict', methods=['POST'])
def predict():
    """
    Make the prediction whit new data
    """
    # Get input values from form
    input_data = request.form.to_dict()
    # Prepare input data as DataFrame
    input_df = pd.DataFrame(input_data, index=[0])

    # Processing
    input_df = ram_extractor(input_df) # Ram feature
    encoding_cols = input_df.select_dtypes('object').columns.tolist()
    input_df = feature_encoder(input_df, encoding_cols)

    prediction = model.predict(input_df) # Prediction

    return render_template('index.html', prediction_text='Predicted Price: € {:.2f}'.format(prediction[0]))

if __name__ == "__main__":
    flask_app.run(debug=True)
