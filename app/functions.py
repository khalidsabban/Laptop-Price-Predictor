from sklearn.preprocessing import OrdinalEncoder

# Processing
def ram_extractor(X):
    X['Ram'] = X['Ram'].str.replace('GB', '').astype(int)
    return X

def feature_encoder(X, cols):
    ordinal_encoder = OrdinalEncoder()
    X[cols] = ordinal_encoder.fit_transform(X[cols])
    return X