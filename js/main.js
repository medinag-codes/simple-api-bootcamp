document.querySelector('.verseButton').addEventListener('click', getVerse)
document.querySelector('.submitButton').addEventListener('click', submitPrayers)
const verse = document.querySelector('.verse')


function getVerse(){
    const url = `https://labs.bible.org/api/?passage=random`

    fetch(url)
        .then(res => res.text())
        .then(data => {
            console.log(data)
            let h3 = document.createElement('h3')
            h3.innerHTML = data
            verse.appendChild(h3)
            verse.style.width = '75%'
            h3.style.fontSize = '1.8rem'
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}

function submitPrayers(){
    document.querySelector('h2').innerText = "Our team will be praying for you. May God be with you!"
}