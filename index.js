


document.addEventListener("DOMContentLoaded", () => {

    fetch(`https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json`)
        .then(response => response.json())
        .then(response => {
            let data = response
            
            // try for loop to iterate through arraay: for (let i = 0; i < data.length; i++) {}
                // console.log("data", data)
                
                // console.log("data[0].representative", data[0].representative)
                
                let smallData = data.slice(0, 100)
                console.log(smallData)
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
    //https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline



    function handleTable(object) {
        const row = document.createElement("tr")
        const table = document.getElementById("table")

        const cellName = document.createElement("td")
        cellName.innerText = object["representative"]
        row.appendChild(cellName)




        // for (const key in object) {
            
        //     const cell = document.createElement("td")
        //     
        //     
        //     row.appendChild(cell)
    // }
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

        // document.addEventListener("DOMContentLoaded", () => {
        //     getData()
        //   })
          
        //   function getData() {
        //       fetch(`https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json`)
        //           .then(response => response.json())
        //           .then(data => {
        //               const table = document.getElementById("table");
                      
        //               const smallData = data.slice(0, 100)
        //               console.log(smallData)
          
        //               smallData.map(object => {
        //                   let tr = document.createElement("tr");
          
        //                   const { representative, state, party, transaction_date, ticker, type, cap_gains_over_200_usd, ptr_link } = object;
        //                   const dataToList = { name: representative, state: state, party: party, transactionDate: transaction_date, type: ticker, saleOrPurchase: type, capitalGainsOver200: cap_gains_over_200_usd, docLink: ptr_link }
          
        //                   for (const [key, value] of Object.entries(dataToList)) {
        //                       console.log(key, value)
        //                       let td = document.createElement("td")
        //                       td.innerHTML = value
        //                       tr.append(td)
        //                   }
        //                   table.append(tr)
        //               })
          
        //        })
        //   }