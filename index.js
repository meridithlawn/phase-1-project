

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

        const form = document.getElementById('search-form')
        form.addEventListener("submit", (event) => {
        event.preventDefault()
        let newRows = document.querySelectorAll(".new-row")
                newRows.forEach(deleteRows)

            function deleteRows(newRows) {
                return newRows.innerHTML = ""
            }
           console.log("event", event)
        let searchedWord = event.target[0].value
           // console.log("searched word", searchedWord)
           searchedWord = searchedWord.toLowerCase()
           
           
        //    function filterNames (obj) {
        //     let representative = obj.representative.toLowerCase()
        //     if (representative.includes(searchedWord)) {
        //         handleTable(obj)
        //         return true
        //     }
            
                  
        // }
            console.log(searchedWord)
            const searchResults = smallData.filter(obj => obj.representative.toLowerCase().includes(searchedWord))
            searchResults.forEach(handleTable)

        })
      





        const selectParty = document.getElementById("search-by-party")
            

        selectParty.addEventListener("change", (e)=> {
            let newRows = document.querySelectorAll(".new-row")
                newRows.forEach(deleteRows)

            function deleteRows(newRows) {
                return newRows.innerHTML = ""
            }

            const selectedParty = e.target.value
                // console.log(selectedParty)
                // console.log(selectParty.value)
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
        // cellLink.innerText = anchor?
        let anchor = document.createElement('a');
        anchor.innerText = "click";
        anchor.href = object["ptr_link"]
        anchor.target = "_blank"
        cellLink.appendChild(anchor)
        row.appendChild(cellLink)
        table.appendChild(row)
    

    }
    // function createLink() {
    //     let anchor = document.createElement('a');
    //     let link = document.createTextNode("Linuxhint Website");
    //     anchor.appendChild(link);
    //     anchor.href = "https://linuxhint.com/";
    //     document.body.appendChild(anchor);
    // }

    // function makeClick() {
    //     let anchor = document.createElement('a');
    //     let link = document.createTextNode("click");
    //     anchor.appendChild(link)
    //     anchor.href = object["ptr_link"]
    //     return anchor;
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

