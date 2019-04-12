import Band from "./band.js"
import User from "./user.js"


//Array para guardar os objetos band

export let bands = []

if (localStorage.getItem("bands")) {
    bands = JSON.parse(localStorage.getItem("bands"))
} else {
    const band1 = new Band("Muse", "Pop-rock", "http://specials-images.forbesimg.com/imageserve/577febc24bbe6f31cdfaf49c/416x416.jpg?background=000000&cropX1=0&cropX2=744&cropY1=21&cropY2=765", "A great band!", "XXX")
    const band2 = new Band("Radiohead", "Pop-rock", "https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/radiohead_hero_688547436.jpg?itok=tcnCxZ6t", "A great band!", "XXX")
    const band3 = new Band("Metallica", "Metal", "https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860", "A great band!", "XXX")
    const band4 = new Band("Artic Monkeys", "Pop-rock", "https://ep01.epimg.net/cultura/imagenes/2018/05/08/actualidad/1525777333_134713_1525778067_noticia_normal.jpg", "A great band!", "XXX")

    bands.push(band1, band2, band3, band4)
    localStorage.setItem("bands", JSON.stringify(bands))
}




export function addBand(txtName, sltGenre, txtDescription, txtPhoto, txtVideoclip) {
    let existBand = false
    for (const band of bands) {
        if (band.name === txtName) {
            existBand = true
            break
        }
    }

    if (existBand === false) {
        bands.push(new Band(txtName, sltGenre, txtPhoto, txtDescription, txtVideoclip))
        localStorage.setItem("bands", JSON.stringify(bands))
        alert(`Banda ${txtName} adicionada com sucesso!`)
        location.href = "/Ficha_06/index.html"
    }
    else {
        alert(`Banda ${txtName} já existe!`)
    }
}




//Array para guardar os objetos user
export const users = []

const user1 = new User("Ricardo", "12345")
const user2 = new User("Maria", "54321")
const user3 = new User("Pedro", "15432")

users.push(user1, user2, user3)