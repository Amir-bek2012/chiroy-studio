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

function confirmBooking() {

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;

    if (date === "" || time === "") {

        alert("Выберите дату и время");

        return;

    }

    tg.sendData(JSON.stringify({

        action: "booking",

        master: selectedMaster,

        date: date,

        time: time

    }));

    alert("Запись отправлена!");

    closeBooking();

}

// =========================
// Закрыть приложение
// =========================

function closeApp() {

    tg.close();

}