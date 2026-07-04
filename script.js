// Telegram Mini App

const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const men = document.getElementById("men");
const women = document.getElementById("women");


// Мужской отдел

function showMen(){

    men.style.display = "block";
    women.style.display = "none";

    window.scrollTo({
        top: men.offsetTop - 20,
        behavior: "smooth"
    });

}


// Женский отдел

function showWomen(){

    women.style.display = "block";
    men.style.display = "none";

    window.scrollTo({
        top: women.offsetTop - 20,
        behavior: "smooth"
    });

}


// Записаться

function bookMaster(master){

    tg.sendData(JSON.stringify({

        action: "book",
        master: master

    }));

}


// Возврат на главный экран

function goHome(){

    men.style.display = "none";
    women.style.display = "none";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


// Закрыть приложение

function closeApp(){

    tg.close();

}


const tg = window.Telegram.WebApp;

tg.ready();

tg.expand();

const user = tg.initDataUnsafe.user;

if (user) {
    console.log("Telegram User:");
    console.log(user);

    console.log("ID:", user.id);
    console.log("Имя:", user.first_name);
    console.log("Username:", user.username);
}

let selectedMaster = "";

function openBooking(master){

    selectedMaster = master;

    document.getElementById("bookingModal").style.display="flex";

    document.getElementById("masterName").innerText=master;

}