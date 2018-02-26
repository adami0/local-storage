const init = () => {
    let now = new Date();
    let lastDate = localStorage.getItem("date");

    let h1 = document.querySelector("h1");
    h1.textContent = lastDate;

    localStorage.setItem("date", now);
}

window.addEventListener("DOMContentLoaded", init);
