const multibuttonItems = document.querySelectorAll('.multibutton__item')
const multibuttonList = document.querySelector('.multibutton__list')
const multibuttonButton = document.querySelector('.multibutton__button')
const contentList = []
const colorsList = []
let iconCounter = 0;





multibuttonButton.addEventListener('touchend', () => {
    if (getComputedStyle(multibuttonList).visibility == 'visible') {
        multibuttonButton.classList.add('hidden');
        multibuttonList.classList.add('hidden');
        multibuttonItems.forEach(item => {
            item.style.transition = 'none'
            item.classList.add('hidden')
        })
    } else {
        multibuttonButton.classList.remove('hidden');
        multibuttonList.classList.remove('hidden');
        multibuttonItems.forEach(item => {
            item.style.transition = 'all .3s ease'
            item.classList.remove('hidden')
        })
    }
})

multibuttonItems.forEach(item => {
    contentList.push([
        item.children[1].innerHTML, 
        window.getComputedStyle(item.children[1]).backgroundColor, 
        item.children[1].href,
        item.children[0].innerHTML
    ])
})

function rebuildMainButton() {
    multibuttonButton.firstElementChild.style.opacity = 0
    multibuttonButton.firstElementChild.style.right = 0
    multibuttonButton.lastElementChild.innerHTML = contentList[iconCounter][0]
    multibuttonButton.style.backgroundColor = contentList[iconCounter][1]
    multibuttonButton.lastElementChild.href = contentList[iconCounter][2]
    multibuttonButton.firstElementChild.innerHTML = contentList[iconCounter][3]
}


setInterval(() => {
    if (iconCounter === multibuttonItems.length) {
        iconCounter = 0
    }

    rebuildMainButton()

    setTimeout(() => {
        multibuttonButton.firstElementChild.style.opacity = 1
        multibuttonButton.firstElementChild.style.right = 80 + 'px'
    }, 1000)
    ++iconCounter

}, 5000)
