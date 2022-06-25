let menu = document.querySelector("#menu");
let MissionSection = document.querySelector("#missions");
let sixD = document.querySelector("#DprocessDiv");

menu.addEventListener("click", () =>

    {
        let navRight = document.querySelector("#navRight");
        navRight.classList.toggle("showMenu");
        navRight.classList.toggle("hidden");
        console.log("here");
    })

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navRight.classList.remove("showMenu");
        navRight.classList.add("hidden");
    }

    sixD.style.paddingTop = `${MissionSection.clientHeight}px`;


})

// why Choose us
let openQuestion = document.querySelectorAll(".fa-circle-plus");
let body = document.querySelectorAll(".questionBody");
for (let i = 0; i < openQuestion.length; i++) {

    openQuestion[i].addEventListener("click", () => {
        for (let k = 0; k < openQuestion.length; k++) {
            if (k == i) continue;
            body[k].classList.add("hidden");
        }

        body[i].classList.toggle("hidden");
    })

}

sixD.style.paddingTop = `${MissionSection.clientHeight}px`;