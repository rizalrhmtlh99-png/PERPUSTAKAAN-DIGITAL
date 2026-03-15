function searchBook() {

let input = document.getElementById("searchInput").value.toLowerCase();

let cards = document.getElementsByClassName("book-card");

for (let i = 0; i < cards.length; i++) {

let title = cards[i].getElementsByTagName("h3")[0];

if (title.innerText.toLowerCase().indexOf(input) > -1) {

cards[i].style.display = "";

} else {

cards[i].style.display = "none";

}

}

}