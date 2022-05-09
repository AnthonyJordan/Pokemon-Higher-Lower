
document.getElementById("next-round").addEventListener("click", newRound)

function newRound() {
    const randomPkmId1 = Math.floor(Math.random() * (899 - 1) + 1)
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPkmId1}`).then(respone => respone.json()).then(pkm => renderPkm(pkm, "first-mon"))
    const randomPkmId2 = Math.floor(Math.random() * (899 - 1) + 1)
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPkmId2}`).then(respone => respone.json()).then(pkm => renderPkm(pkm, "second-mon"))
}

function renderPkm(pkm, divId) {
    const pkmDiv = document.getElementById(`${divId}`)
    pkmDiv.innerHTML = ""
    const img = document.createElement("img")
    img.src = pkm.sprites.other["official-artwork"].front_default
    pkmDiv.append(img)

}
function changeVsColor() {
    document.getElementsByClassName("vs")[0].classList.toggle("vs-color")
}

setInterval(changeVsColor, 300)
document.getElementById("next-round").click()