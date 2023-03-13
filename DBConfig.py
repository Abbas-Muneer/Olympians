import pymongo
import pandas as pd

myClient = pymongo.MongoClient("mongodb://localhost:27017/")
myDB = myClient["skin_disease"]
myTbl = myDB["disease"]

disease_excel = pd.read_excel('SkinX-Disease.xlsx')
disease_list = disease_excel.to_dict(orient='record')

for x in disease_list:
    query = {"Skin Disease": x["Skin Disease"]}
    result = myTbl.find_one(query)
    if result is None:
        myTbl.insert_one(x)

query = {"Skin Disease": "Acne"}
result = myTbl.find_one(query)
print(result)
