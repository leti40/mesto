let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popupSaveButton = document.querySelector('.popup__save-button');
let popupTitle = document.querySelector('.popup__element_type_title');
let popupSubtitle = document.querySelector('.popup__element_type_subtitle');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');
let formElement = document.querySelector('.popup__container');

function openPopup() {
    popup.classList.add('popup_opened');
    popupTitle.value = profileName.textContent;
    popupSubtitle.value = profileText.textContent;
}
profileEditButton.addEventListener('click', openPopup);


function closePopup() {
    popup.classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click', closePopup);


function formSubmitHandler(evt) {
    evt.preventDefault();
    // let popupTitle = formElement.querySelector('.popup__element_type_title');
    // let popupSubtitle = formElement.querySelector('.popup__element_type_subtitle');
    // let profileName = document.querySelector('.profile__name');
    // let profileText = document.querySelector('.profile__text');

    profileName.textContent = popupTitle.value;
    profileText.textContent = popupSubtitle.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);