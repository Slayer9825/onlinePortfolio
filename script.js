function darkModeSwap() {
    let bodyVar = document.body;
    let buttonDarkTheme = document.getElementById("darkModeButtonToggle")
    
    bodyVar.classList.toggle("darkModeSwap")
    buttonDarkTheme.classList.toggle("darkLightModeButtonToggle")


}

let darkModeButton = document.getElementById("darkModeButtonToggle")
darkModeButton.addEventListener("click", darkModeSwap)
