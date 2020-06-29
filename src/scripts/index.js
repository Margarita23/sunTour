console.log("hell");

switchingTours();
showOldPrice();
showLittleContacts();


//---functions

function switchingTours() {
    let mainEl = document.getElementsByClassName("tour__item--main")[0];
    mainEl.getElementsByClassName("preview__info")[0].style = "display: block;";
    mainEl.getElementsByClassName("additional__banner")[0].style = "display: block;";
    mainEl.getElementsByClassName("preview__svg-triangle")[0].style = "display: block;";
    mainEl.getElementsByClassName("review-container")[0].style = "display: flex;";
    mainEl.getElementsByClassName("info__rating")[0].style = "display: block";
}

function showOldPrice() {
    let oldPriceContainer = document.getElementsByClassName("old-price__container");
    for(let i=0; i<oldPriceContainer.length; i++){
        let oldPrice = oldPriceContainer[i].getElementsByClassName("old-price")[0];
        if(oldPrice.innerHTML != ""){
            oldPriceContainer[i].style = "display: block;";
        }
    }
}

function showLittleContacts() {
    let contacts = document.getElementsByClassName("wrap__contacts--little")[0];
    let contactsBig = document.getElementsByClassName("wrap__contacts--big")[0];
    contacts.addEventListener('click', function(event){

        if(contactsBig.style.display === "flex"){
            contactsBig.style = "display: none;";
            contacts.style = "box-shadow: none";
            console.log("click block");
        } else{
            contactsBig.style = "display: flex;";
            contacts.style = "box-shadow: 0px 0px 0px 5px rgba(255,255,255,0.4);";
            console.log("click none");
        }

    });
}