""" functions to use them in app.py and model.py to process data """

from sklearn.preprocessing import OrdinalEncoder

# Processing
def ram_extractor(df):
    """
    Extract ram feature
    return ram feature as integer (From 4GB to 4 after using ram_extractor)
    """
    df['Ram'] = df['Ram'].str.replace('GB', '').astype(int)
    return df

def feature_encoder(df, cols):
    """
    Processing object features with OrdinalEncoder
    """
    ordinal_encoder = OrdinalEncoder()
    df[cols] = ordinal_encoder.fit_transform(df[cols])
    return df
