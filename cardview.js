setTimeout(() => {
    document.getElementById("cardview-container-loading").remove();
    document.getElementById("svg-loader-container").remove();
    document.getElementById("cardview-container").innerHTML = '<div class="cardview-document" id="cardview-document"></div><div class="cardview-menubar" id="cardview-menubar"><button class="cardview-btn" onclick="openDoc()"><b>View the Document</b></button></div>';
}, 3000);

var page = 1;

function openDoc() {
    document.getElementById("cardview-menubar").innerHTML = '<button class="cardview-btn" onclick="goBack()"><b>Go Back</b></button><p id="page-label" class="page-label">Page 1</p><button class="cardview-btn" onclick="goAhead()"><b>Go Ahead</b></button>';
    updatePicture();
}
function goAhead() {
    page++;
    updatePicture();
}
function goBack() {
    page--;
    updatePicture();
}
function updatePicture() {
    if (page > totalPages) {
        page = totalPages;
        updatePicture();
    }
    else if (page <= 0) {
        page = 1;
        updatePicture();
    } else {
        document.getElementById("cardview-document").style.backgroundImage = "url('CardView/pages/" + page + fileExtention;
    }
    document.getElementById("page-label").innerHTML = "Page " + page;
}

function darkTheme() {
  document.getElementById("body").style.backgroundColor = "#222";
  document.getElementById("cardview-menubar").style.backgroundColor = "#222";
  document.getElementById("cardview-container-loading").style.backgroundColor = "white";
  document.getElementById("svg-loader-container").style.backgroundColor = "white";
}
function lightTheme() {
  document.getElementById("body").style.backgroundColor = "white";
  document.getElementById("cardview-menubar").style.backgroundColor = "#FFF";
  document.getElementById("cardview-container-loading").style.backgroundColor = "white";
  document.getElementById("svg-loader-container").style.backgroundColor = "white";
}
