import { bands } from "../models/main.js"

//butao filter
const myCatalog = document.querySelector("#myCatalog")
const btnFilter = document.querySelector("#btnFilter")
btnFilter.addEventListener("click", function(event){
    const txtName=document.querySelector("#txtName").value
    const sltGenre=document.querySelector("#sltGenre").value

    renderCatalog(txtName,sltGenre)
    event.preventDefault()
})
//butao remover
/*const btnRemove = document.querySelector("#btnRemove")
btnRemove.addEventListener("click",function (event) {
    
    
})
*/


// teste -- myCatalog.innerHTML="dsc"

renderCatalog()

function renderCatalog(txtName = "", sltGenre = "") {
    let result = ""
    let i = 0
    for (const band of bands) {
        if(
            //filtro
            (sltGenre!=="" && band.genre!==sltGenre)
            ||
            (txtName!=="" && !band.name.startsWith(txtName))
            ) {
            continue
        } 
        if (i % 3 === 0) {
            result += `<div class="row">`
        }
        result += `
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="${band.photo}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${band.name}</h5>
                    <p class="card-text">${band.genre}</p>
                    <a id="btnSeeMore" class="btn btn-success" href="#" >Ver Mais</a>
                    <a id="btnRemove" class="btn btn-danger" href="#" >Remover</a>
    
                </div>
            </div>
        </div>
    `
        i++
        if (i % 3 === 0) {
            result += `</div>`
        }
        
    }
    myCatalog.innerHTML = result
    
}


    

        