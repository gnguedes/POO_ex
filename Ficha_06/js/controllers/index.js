import { bands } from "../models/main.js"

const myCatalog = document.querySelector("#myCatalog")
const btnFilter = document.querySelector("#btnFilter")
btnFilter.addEventListener("click", function(){
    const txtName=document.querySelector("#txtName").value
    const sltGenre=document.querySelector("#sltGenre").value

    renderCatalog(slt.genre,txtName)
})
// teste -- myCatalog.innerHTML="dsc"

renderCatalog()

function renderCatalog(filterGenre = "", filterName = "") {
    let result = ""
    let i = 0
    for (const band of bands) {
        if(filterGenre!=="" && filterGenre==band.genre) 


        if (i % 3 === 0) {
            result += `<div class="row">`
        }
        result = `
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="${band.photo}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${band.name}</h4>
                    <p class="card-text">${band.genre}</p>
                    <a name="" id="" class="btn btn-sucess" href="#" >Ver Mais</a>
                    <a name="" id="" class="btn btn-danger" href="#" >Remover</a>
    
                </div>
            </div>
        </div>
    `
        i++
        if (i % 3 === 0) {
            result += `</div>`
        }
    }
}

    

        //myCatalog.innerHTML = result
        myCatalog.innerHTML = bands.length