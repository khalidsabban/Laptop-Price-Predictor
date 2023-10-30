# Laptop Price Predictor

## A Machine Learning model deployed with a user interface to predict the price of laptops

### Introduction
A variety of laptop datasets that have eleven features; from company name to operating system. The aim is to predict the price in euro `target`.


### Repository Structure
* **README.md**: The top-level README for reviewers of this project
* **requirements.txt**: requirements file; including the needed tools
* **notebooks**: This folder has the jupyter notebooks process that helped me to address my work; **laptop_price.ipynb** is the first touch with the dataset, it showed me what are my next steps. **prepare_data.ipynb** is the process to clean and prepare my dataset to use it in deployment model. **data_analysis.ipynb** is a general look after data had cleaned. 
* **app**: 
    1. **data**: has the dataset before and after cleaned.
    2. **static**: has the images and css style used in model interface (html).
    3. **templates**: This folder for html files.
    4. **app.py**: Flask application.
    5. **functions.py**: The static functions.
    6. **model.py**: This python code used dataset cleaned to train the model.


### Requirements
In order to run the project, you need to create a virtual environment and install the `requirements.txt`, then run the app.py.

### Libraries
* pandas
* NumPy
* scikit-learn
* xgboost
* flask


### Algorithm
XGBoost classifier provided the best results. 


### Known issues
Still updating ...
