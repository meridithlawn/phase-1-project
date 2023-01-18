# phase-1-project
House of Congress Stock Data

1. Uses fetch to retrieve data from a no-auth API containing US Congress members' stock transaction histories "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"

2. Receives and array of objects containing the stock transaction history of each member of US congress

3. The objects contain the following key-value pairs: 
{
 "disclosure_year": 2021, 
 "disclosure_date": "02/25/2021", 
 "transaction_date": "2021-01-15", 
 "owner": "self", 
 "ticker": "--", 
 "asset_description": "Noblesville Ind Multi Sch Bldg", 
 "type": "sale_full", 
 "amount": "$250,001 - $500,000", 
 "representative": "Michael T. McCaul", 
 "district": "TX10", 
 "state": "TX", 
 "ptr_link": "https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2021/8217869.pdf",
 "cap_gains_over_200_usd": false, 
 "industry": null, 
 "sector": null, 
 "party": "Republican"   
}

4. Iterate through each object, extract the specified key-value pairs, structure into an HTML table

5. Data is structured into an HTML table which will display the name, state, political party, transaction type, transaction date, industry, asset description, amount, capital gains over 200 usd T/F, link to documentation

6. The app will have a form to search (by name, state, or political party?)

7. The app will have a filter function to see a filtered selection based upon a certain category


three different event listeners: "submit", "click", maybe dom content loaded?
