var navItem = ["HOME","PORTFOLIO","CONTACT ME"]
var navList = document.getElementById("navbar-list")

for(var i=0;i<navItem.length;i++){
    var liElement = document.createElement("li")
    liElement.textContent = navItem[i]
    navList.appendChild(liElement)
}
