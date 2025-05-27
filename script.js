const firstPage = document.getElementById("form-sect");
const secondPage = document.getElementById("result-sect");
const buttonValid = document.getElementById("button-generate");
const Name = document.querySelector("#name");
const email = document.querySelector("#email");
const git = document.querySelector("#git")
const labelErrEmail = document.querySelector(".ErrEmail")
const displayGit = document.querySelector(".ticket-git-info .text-descr-ticket");
const displayName = document.querySelector(".ticket-name")

buttonValid.addEventListener("click", () => {
    if (! verifEmail(email.value)){
        displayErrEmail()
    }
    else{
        undisplayErrEmail()
        displayElement()
    }
});

const displayElement = () =>{
    displayName.textContent = Name.value;
    displayGit.textContent = git.value;
    firstPage.style.display = "none";
    secondPage.style.display = 'flex';
}

const displayErrEmail = () =>{
    labelErrEmail.style.display = "flex";
};

const undisplayErrEmail = () =>{
    labelErrEmail.style.display = "none";
};
const verifEmail = (emailToVerif) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailToVerif)
};

