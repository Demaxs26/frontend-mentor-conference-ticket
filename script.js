const firstPage = document.getElementById("form-sect");
const secondPage = document.getElementById("result-sect");
const buttonValid = document.getElementById("button-generate");
const Name = document.querySelector("#name");
const email = document.querySelector("#email");
const git = document.querySelector("#git");
const labelErrEmail = document.querySelector(".ErrEmail");
const labelErrAvatar = document.querySelector(".ErrAvatar");
const labelAvatar = document.querySelector(".labelAvatar")
const displayGit = document.querySelector(".ticket-git-info .text-descr-ticket");
const displayName = document.querySelector(".ticket-name");
const dropPlace = document.querySelector(".avatarNotCompleted");
const input = document.querySelector(".button-upload");
const avatarImageDisplay = document.querySelector(".imageAvatarCompleted");
const ImageTicketDisplay = document.querySelector(".displaysImageTicket");
const avatarDisplayed = document.querySelector(".avatarCompleted");
const avatarNotDisplayed = document.querySelector(".avatarNotCompleted");
const removeAvatar = document.querySelector(".removeAvatar");
const changeAvatar = document.querySelector(".changeAvatar");

removeAvatar.addEventListener("click", ()=>{
    UnChangeDisplayAvatar();
})

changeAvatar.addEventListener('click', ()=>{
    input.click();
    UnChangeDisplayAvatar()
    
    
})


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

const displayErrAvatar = () =>{
    labelErrAvatar.style.display = "flex";
    labelAvatar.style.display = "none";
}
const UndisplayErrAvatar = () =>{
    labelErrAvatar.style.display = "none";
    labelAvatar.style.display = "flex";
}
// drag and drop 

dropPlace.addEventListener("click", () => {
    input.value = '';
    input.click()
});

input.addEventListener("input", function(){
    console.log("envoie file")
    let file = this.files[0];
    displayAvatar(file);


})

dropPlace.addEventListener("dragover", (event) =>{
    event.preventDefault();
    dropPlace.classList.add("dropPlaceOver");
})

dropPlace.addEventListener("dragleave", (event) =>{
    event.preventDefault();
    dropPlace.classList.remove("dropPlaceOver");
})

dropPlace.addEventListener("drop", (event)=>{
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    displayAvatar(file)
})
const changeDisplayAvatar = (FileURL) =>{
    avatarImageDisplay.src = FileURL;
    ImageTicketDisplay.src = FileURL;
    avatarDisplayed.style.display = "flex";
    avatarNotDisplayed.style.display = "none";
    console.log("avatar displayed")
}
const UnChangeDisplayAvatar = () =>{
    avatarDisplayed.style.display = "none";
    avatarNotDisplayed.style.display = "flex";
}

function displayAvatar(file){

    console.log(file);
    if (file.size > 5000){
        displayErrAvatar();
    }
    else {
        UndisplayErrAvatar()
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            let FileURL = fileReader.result;
            console.log("lancement display avatar");
            changeDisplayAvatar(FileURL);
            
        }
    }

}
