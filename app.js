document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".back").classList.add("hide");
    document.querySelector(".submit").classList.add("hide");
});

let countClick = 0;

function step1Next() {
    const fin = document.getElementById("inputFIN").value;

    document.querySelector(".back").classList.add("show");
    document.querySelector(".back").classList.remove("hide");

    document.querySelector(".camera").classList.add("hide");
    document.querySelector(".camera").classList.remove("show");
    document.querySelector(".main-menu").classList.add("hide");
    document.querySelector(".main-menu").classList.remove("show");


    document.querySelector(".step-1").classList.add("hide");
    document.querySelector(".step-1").classList.remove("show");
    document.querySelector(".step-2").classList.remove("hide");
    document.querySelector(".step-2").classList.add("show");

    sessionStorage.setItem("fin", fin);
    window.console.log(countClick);
}

function step2Back() {
    document.querySelector(".back").classList.add("hide");
    document.querySelector(".back").classList.remove("show");

    document.querySelector(".camera").classList.add("show");
    document.querySelector(".camera").classList.remove("hide");

    document.querySelector(".main-menu").classList.add("show");
    document.querySelector(".main-menu").classList.remove("hide");

    document.querySelector(".step-1").classList.add("show");
    document.querySelector(".step-2").classList.remove("show");
    document.querySelector(".step-1").classList.remove("hide");
    document.querySelector(".step-2").classList.add("hide");
    window.console.log(countClick);
}

function step2Next() {
    const ms = document.getElementById("selectMilestone").value;

    document.querySelector(".step-2").classList.add("hide");
    document.querySelector(".step-2").classList.remove("show");
    document.querySelector(".step-3").classList.remove("hide");
    document.querySelector(".step-3").classList.add("show");

    sessionStorage.setItem("ms", ms);
    window.console.log(countClick);
}

function step3Back() {


    document.querySelector(".step-2").classList.add("show");
    document.querySelector(".step-3").classList.remove("show");
    document.querySelector(".step-2").classList.remove("hide");
    document.querySelector(".step-3").classList.add("hide");

    window.console.log(countClick);
}

function step3Next() {
    const proCount = document.getElementById("selectProcedureCount").value;
    const evals = document.querySelectorAll(".eval-container");

    document.querySelector(".step-3").classList.add("hide");
    document.querySelector(".step-3").classList.remove("show");
    document.querySelector(".step-4").classList.remove("hide");
    document.querySelector(".step-4").classList.add("show");

    sessionStorage.setItem("pc", proCount);

    for (let i = 0; i < proCount; i++) {

        //evals[i].style.display = "block";
        evals[i].classList.add("show");
        evals[i].classList.remove("hide");
    }

    window.console.log(countClick);

    document.querySelector(".next").classList.add("hide");
    document.querySelector(".next").classList.remove("show");
    document.querySelector(".submit").classList.add("show");
    document.querySelector(".submit").classList.remove("hide");

}

function step4Back() {
    if (confirm("Are you sure want to go back? All data will be deleted.")) {
        const evals = document.querySelectorAll(".eval-container");


        document.querySelector(".step-3").classList.add("show");
        document.querySelector(".step-4").classList.remove("show");
        document.querySelector(".step-3").classList.remove("hide");
        document.querySelector(".step-4").classList.add("hide");

        //Buttons
        document.querySelector(".submit").classList.remove("show");
        document.querySelector(".submit").classList.add("hide");
        document.querySelector(".next").classList.add("show");
        document.querySelector(".next").classList.remove("hide");


        const visibleRB = document.querySelectorAll(".show input[type='radio']");
        for (let i = 0; i < visibleRB.length; i++) {
            visibleRB[i].checked = false;
        }

        for (let i = 0; i < evals.length; i++) {
            //evals[i].style.display = "none";
            evals[i].classList.add("hide");
            evals[i].classList.remove("show");
        }


    } else {
        //reset click count
        return countClick = countClick + 1;
    }


}


document.querySelector(".next").addEventListener("click", function () {
    countClick = countClick + 1;

    switch (countClick) {
        case 1:
            step1Next();
            break;
        case 2:
            step2Next();
            break;
        case 3:
            step3Next();
            break;
        case 4:
            step4Next();
            break;
        default:

            break;
    }

});


document.querySelector(".back").addEventListener("click", function () {
    countClick = countClick - 1;

    switch (countClick) {
        case 0:
            step2Back();
            break;
        case 1:
            step3Back();
            break;
        case 2:
            step4Back();
            break;
        default:

            break;
    }

});