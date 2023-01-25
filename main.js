




document.addEventListener("DOMContentLoaded", () => {

    fetch(`https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json`)
        .then(response => response.json())
        .then(response => {
            
            let data = response
            let smallData = data.slice(0, 100)
            
            smallData.map(handleTable)
         
        })
    })

        //data.objects.map(({representative, state, party, transaction_date, ticker, type, cap_gains_over_200_usd, ptr_link}) => {


// to get the actual word that was searched? and maybe interpolation for the fetch?
// fetch(`https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json=${searchedWord}`)
//  let searchedWord = event.target.value
// console.log(searchedWord)


//
//const form = document.getElementById('search-form')
//form.addEventListener("submit", (event) => {
// event.preventDefault()
    // console.log("event", event)




    function handleTable(object) {
        const row = document.createElement("tr")
        const table = document.getElementById("table")

        const cellName = document.createElement("td")
        cellName.innerText = object["representative"]
        row.appendChild(cellName)
        table.appendChild(row)

        const cellState = document.createElement("td")
        cellState.innerText = object["state"]
        row.appendChild(cellState)
        table.appendChild(row)

        const cellParty = document.createElement("td")
        cellParty.innerText = object["party"]
        row.appendChild(cellParty)
        table.appendChild(row)

        const cellTransaction = document.createElement("td")
        cellTransaction.innerText = object["transaction_date"]
        row.appendChild(cellTransaction)
        table.appendChild(row)

        const cellType = document.createElement("td")
        cellType.innerText = object["ticker"]
        row.appendChild(cellType)
        table.appendChild(row)

        const cellSP = document.createElement("td")
        cellSP.innerText = object["type"]
        row.appendChild(cellSP)
        table.appendChild(row)

        const cellCapGain = document.createElement("td")
        cellCapGain.innerText = object["cap_gains_over_200_usd"]
        row.appendChild(cellCapGain)
        table.appendChild(row)

        const cellLink = document.createElement("td")
        cellLink.innerText = object["ptr_link"]
        row.appendChild(cellLink)
        table.appendChild(row)

}
// get form for submit event
  //  const table = document.getElementById("table")
    //const form = document.getElementById('search-form')
    //form.addEventListener("submit", (event) => {
    //event.preventDefault()
      //  console.log("event", event)
        //let searchedWord = event.target[0].value
        //console.log("searched word", searchedWord)

        //create for loops for each key that I want to go into the table

 