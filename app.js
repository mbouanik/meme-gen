const form = document.querySelector('#meme-form')
const linkImg = document.querySelector('input[name="link-img"]')
const upText = document.querySelector('input[name="upper-text"]')
const downText = document.querySelector('input[name="bottom-text"]')
const section = document.querySelector("#memes")
const p = document.querySelector('.explain')


setTimeout(() => {
    p.remove()
}, 5000)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const div = document.createElement('div')
    const img = document.createElement('img')
    const text1 = document.createElement('p')
    const text2 = document.createElement('p')

    img.src =  linkImg.value
    text1.innerText = upText.value
    text2.innerText = downText.value
    text1.className = "upper"
    text2.className = "bottom"
    img.addEventListener('click', (event) => {
        if(event.target.tagName === "IMG"){
            event.target.parentElement.remove()
        }
    })
    div.className = "meme"

    div.append(img)
    div.append(text1)
    div.append(text2)
    section.append(div)
    linkImg.value = upText.value = downText.value = ""
    
})