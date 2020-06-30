switchingTours();
showOldPrice();
showLittleContacts();


//---functions

function switchingTours() {
    let tourList = document.getElementsByClassName("tours__list")[0];
    let mainEl = document.getElementsByClassName("tour__item--main")[0];

    let tourItemsArray = document.getElementsByClassName("tour__item");

    tourList.addEventListener('click', function(event) {
        event.preventDefault();
        let target = event.target;
        
        if(target.className == "info__zag"){
            let posTarget = 0;

            for(let i=0; i<tourItemsArray.length; i++){
                if(tourItemsArray[i].className == "tour__item tour__item--main") {
                    tourItemsArray[i].className = "tour__item";
                }
            }
            
            event.path[5].className = "tour__item tour__item--main";

            for (i = 0; i < tourItemsArray.length; i++) {
                if(tourItemsArray[i].className == "tour__item tour__item--main") {
                    posTarget = i;
                }
            }

            let bufTourMain = tourItemsArray[posTarget];

            tourList.insertBefore(tourItemsArray[posTarget],tourList.firstChild);
        }

    });

};

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
        } else{
            contactsBig.style = "display: flex;";
            contacts.style = "box-shadow: 0px 0px 0px 5px rgba(255,255,255,0.4);";
        }
    });
}
