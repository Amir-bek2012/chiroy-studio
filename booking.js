// booking.js

let selectedMaster = null;

function openBooking(masterName) {

    selectedMaster = masterName;

    document.getElementById("masterName").innerText = masterName;

    const dateInput = document.getElementById("bookingDate");

    const today = new Date();

    const maxDate = new Date();

    maxDate.setDate(today.getDate() + 7);

    dateInput.min = today.toISOString().split("T")[0];
    dateInput.max = maxDate.toISOString().split("T")[0];

    dateInput.value = "";

    document.getElementById("bookingTime").selectedIndex = 0;

    document.getElementById("bookingModal").style.display = "flex";

}

function closeBooking() {

    document.getElementById("bookingModal").style.display = "none";

}

function confirmBooking() {

    const date = document.getElementById("bookingDate").value;

    const time = document.getElementById("bookingTime").value;

    if (!date) {

        Telegram.WebApp.showAlert("Выберите дату");

        return;

    }

    if (!time) {

        Telegram.WebApp.showAlert("Выберите время");

        return;

    }

    Telegram.WebApp.sendData(JSON.stringify({

        action: "booking",

        master: selectedMaster,

        date: date,

        time: time

    }));

    Telegram.WebApp.showPopup({

        title: "Chiroy Studio",

        message: "✅ Запись успешно отправлена!",

        buttons: [

            {

                type: "ok"

            }

        ]

    });

    closeBooking();

}