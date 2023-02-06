# phase-1-project
House of Congress Stock Data

1. Uses fetch to retrieve data from a no-auth API containing US Congress members' investment transaction histories "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"

2. Receives data in the form of an array of objects containing the investment transaction history of each member of US congress

3. Saves the data from the fetch into a global variable called congressData

4. The objects contain the following key-value pairs: 
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

5. Iterates through each object on congressData to extract the specified key-value pairs, and organize into an HTML table

6. Data is structured into an HTML table which will display the name, state, political party, transaction date, type of investment, sale or purchase, capital gains over 200 usd T/F, link to documentation

7. The app will have a form with a submit event to perform a case-insensitive search congressData by name of politician and display the filtered data in a table

8. The app will have a change event to render a selection of data based upon the selected political party from a dropdown menu


9. The documentation column of the table contains a clickable link which will redirect to a new tab that displays the official document

PROJECT REQUIREMENTS CHECKLIST
This app includes the following requirements:

- Accesses data using fetch from a public API
- Entire app runs on a single page
- Includes three distinct event listeners: DOMContentLoaded, submit, change
- Includes three (at least one required) instances of array iteration: forEach, filter, and map

