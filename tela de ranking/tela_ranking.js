
const sidebar = document.getElementById("sidebar");
const imgSanduiche = document.getElementById("imgSanduiche");
const overlay = document.getElementById("overlay");

imgSanduiche.onclick = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("hidden");
}

overlay.onclick = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("hidden");
}