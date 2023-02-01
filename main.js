

let congressData = []
let smallData = []


document.addEventListener("DOMContentLoaded", () => {

    fetch(`https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json`)
        .then(response => response.json())
        .then(response => {
            congressData = response
            
            smallData = congressData.slice(0, 200)
            
            smallData.map(handleTable)

        // congressData.forEach(handleTable)
        })

        // const form = document.getElementById('search-form')
        // form.addEventListener("submit", (event) => {
        // event.preventDefault()
        //     console.log("event", event)
        // let searchedWord = event.target[0].value
        //     console.log("searched word", searchedWord)

        const selectParty = document.getElementById("search-by-party")
            

        selectParty.addEventListener("change", (e)=> {
            let newRows = document.querySelectorAll(".new-row")
                newRows.forEach(deleteRows)

            function deleteRows(newRows) {
                return newRows.innerHTML = ""
            }

            // empty out previous table here
            const selectedParty = e.target.value
                // console.log(selectedParty)
                // console.log(selectParty.value)
               
        // try filter function instead of iterating
        // get the data which has the party and then console log to see if you get the correct objects
            for (const object of smallData) {
                if (object["party"] === selectedParty) {
                    console.log(object)
                    handleTable(object)
                // } else {
                //    if (selectedParty === "all") {
                    // smallData.map(handleTable)
                    //}
                }
            }

               
        })
        

        
        })


//
//const form = document.getElementById('search-form')
//form.addEventListener("submit", (event) => {
// event.preventDefault()
    // console.log("event", event)




    function handleTable(object) {
        const row = document.createElement("tr")
        row.className = "new-row"
        const table = document.getElementById("table")

        // const button = document.createElement("td")
        // button.innerHTML = document.createElement("btn")

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

        let cellLink = document.createElement("td")
        // makeClick(cellLink)
        cellLink.innerText = object["ptr_link"]
        row.appendChild(cellLink)
        table.appendChild(row)
    

    }
   

    // function makeClick(cellLink) {
    //     const link = document.createElement('a');
    //     link.href = object["ptr_link"];
    //     link.innerHTML = object["ptr_link"];
    //     cellLink.innerHTML = link
    //     return cellLink;
    // }
    
// get form for submit event
  //const table = document.getElementById("table")
    //const form = document.getElementById('search-form')
    //form.addEventListener("submit", (event) => {
    //event.preventDefault()
      //  console.log("event", event)
        //let searchedWord = event.target[0].value
        //console.log("searched word", searchedWord)

// document.querySelectorAll(".new-row")

// loop through this node list and delete

