# Laptop Price Predictor

## A Machine Learning model deployed with a user interface to predict the price of laptops

### Introduction
A variety of laptop datasets that have eleven features; from company name to operating system. The aim is to predict the price in euro `target`.


### Repository Structure
* **README.md**: The top-level README for reviewers of this project
* **requirements.txt**: requirements file; including the needed tools
* **notebooks**: This folder has the jupyter notebooks process that helped me to address my work; `laptop_price.ipynb` is the first touch with the dataset, it showed me what are my next steps. `prepare_data.ipynb` is the process to clean and prepare my dataset to use it in deployment model. `data_analysis.ipynb` is a general look after data had cleaned. 
* **app**: 
    1. **data folder**: has the dataset before and after cleaned.
    1. **static folder**: has the images and css style used in model interface (html).
    1. **templates folder**: This folder for html files.
    1. **app.py**: Flask application.
    1. **functions.py**: The static functions.
    1. **model.py**: This python code used dataset cleaned to train the model.

### Libraries
* pandas
* NumPy
* scikit-learn
* xgboost
* flask


### Algorithm
XGBoost classifier provided the best results. 


## Getting the app running localy
1. Colone this repo
```
git clone https://github.com/khalidsbn/Laptop-Price-Predictor.git
```
1. Create and activate a virtual environment
```
python3 -m venv .venv
source .venv/bin/activate
```
1. Install the required dependencies (pandas, Numpy, etc)
```
pip install -r requirements.txt
```
1. Change into the `app` directory
```
cd app
```
1. Run app.py

### Known issues
Still updating ...
