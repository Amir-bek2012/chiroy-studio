// Telegram Mini App

const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const men = document.getElementById("men");
const women = document.getElementById("women");

let selectedMaster = "";

// =========================
// Мужской отдел
// =========================

function showMen() {

    men.style.display = "block";
    women.style.display = "none";

    window.scrollTo({
        top: men.offsetTop - 20,
        behavior: "smooth"
    });

}

// =========================
// Женский отдел
// =========================

function showWomen() {

    women.style.display = "block";
    men.style.display = "none";

    window.scrollTo({
        top: women.offsetTop - 20,
        behavior: "smooth"
    });

}

// =========================
// Назад
// =========================

function goHome() {

    men.style.display = "none";
    women.style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// =========================
// Открыть запись
// =========================

function openBooking(master) {

    selectedMaster = master;

    document.getElementById("masterName").innerText = master;

    const date = document.getElementById("date");

    const today = new Date();

    const max = new Date();

    max.setDate(today.getDate() + 7);

    date.min = today.toISOString().split("T")[0];

    date.max = max.toISOString().split("T")[0];

    document.getElementById("bookingModal").style.display = "flex";

}

// =========================
// Закрыть запись
// =========================

function closeBooking() {

    document.getElementById("bookingModal").style.display = "none";

}

// =========================
// Подтвердить запись
// =========================

function bookMaster(master){

    const date=document.getElementById("date").value;
    const time=document.getElementById("time").value;

    Telegram.WebApp.sendData(JSON.stringify({

        action:"booking",
        master:master,
        date:date,
        time:time

    }));

    document.getElementById("successText").innerHTML=
        "<b>Мастер:</b> "+master+
        "<br><br><b>Дата:</b> "+date+
        "<br><b>Время:</b> "+time+
        "<br><br>Мы будем ждать вас ❤️";

    document.getElementById("successModal").style.display="flex";

}

function closeSuccess(){

    document.getElementById("successModal").style.display="none";

}

// =========================
// Закрыть приложение
// =========================

function closeApp() {

    tg.close();

}