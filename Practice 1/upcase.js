function decorate() {
    let allCapsList = document.getElementsByClassName('allcaps')
    for(let i = 0; i < allCapsList.length; i++) {
        allCapsList[i].innerHTML = allCapsList[i].innerHTML.toUpperCase();
    }

    let upcaseList = document.getElementsByClassName('upcase')
    for(let i = 0; i < upcaseList.length; i++) {
        upcaseList[i].innerHTML = upcaseList[i].innerHTML.trim().charAt(0).toUpperCase() + upcaseList[i].innerHTML.trim().substring(1);
    }
}

document.getElementById("decorate").onclick = decorate