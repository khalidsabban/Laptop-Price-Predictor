""" ML model file"""

import pickle
import pandas as pd
from functions import ram_extractor, feature_encoder
from xgboost import XGBRegressor

df = pd.read_csv('data/laptop_price_cleaned.csv', encoding='latin1')
# print(df.head())

df = ram_extractor(df)
encoding_cols = df.select_dtypes('object').columns
df = feature_encoder(df, encoding_cols)

# Split data
X, y = df.drop('Price_euros', axis=1), df['Price_euros']

# Train model
xgb_params = {'max_depth': 8, 
              'eta':0.1, 
              'subsample': 0.8, 
              'colsample_bytree': 0.6, 
              'seed': 2018, 
              'objective': 'reg:squarederror'}
xgb = XGBRegressor(**xgb_params)
xgb.fit(X, y)

# Pickle model
pickle.dump(xgb, open("model.pkl", "wb"))
