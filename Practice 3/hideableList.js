let lists = document.getElementsByClassName('hideableList')

for(let i = 0; i < lists.length; i++) {
    lists[i].getElementsByClassName('hl-header')[0].innerHTML = '\u25BC' + ' ' + lists[i].getElementsByClassName('hl-header')[0].innerHTML
    lists[i].onclick = collapse
}

function collapse() {
    let list = this.children[1]
    if(list.style.visibility == 'visible') {
        this.getElementsByClassName('hl-header')[0].innerHTML = '\u25B6' + ' ' + this.getElementsByClassName('hl-header')[0].innerHTML.substring(2)
        list.style.visibility = 'collapse'
    }
    else {
        this.getElementsByClassName('hl-header')[0].innerHTML = '\u25BC' + ' ' + this.getElementsByClassName('hl-header')[0].innerHTML.substring(2)
        list.style.visibility = 'visible'
    }
}