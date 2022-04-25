function darkModeSwap() {
    let bodyVar = document.body;
    let buttonDarkTheme = document.getElementById("darkModeButtonToggle")
    
    const anchorLinkElement = document.getElementById('contactLinkName')
    anchorLinkElement.classList.toggle("linkColorSwap")

    const anchorLinkElement2 = document.getElementById('contactLinkName2')
    anchorLinkElement2.classList.toggle("linkColorSwap")
    


    bodyVar.classList.toggle("darkModeSwap")
    buttonDarkTheme.classList.toggle("darkLightModeButtonToggle")

}

let darkModeButton = document.getElementById("darkModeButtonToggle")
darkModeButton.addEventListener("click", darkModeSwap)
