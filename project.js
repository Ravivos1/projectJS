"use strict"
//contacts array
const contacts = [
    {   name : "Abraham Cohen",
        phone : "050-1234567",
        address : "15 Herzl Street, Tel Aviv",
        email : "abraham.cohen@gmail.com",
        notes : "Friend from work",
        imgSrc : "images/abraham.jpeg"
    },
    {   name : "Diana Levy",
        phone : "052-9876543",
        address : "2 Sapir Street, Hadera",
        email : "dianalevi11@gmail.com",
        notes : "My lawyer",
        imgSrc : "images/faceless.jpg"
    },
    {   name : "Joseph Mizrahi",
        phone : "054-5555555",
        address : "55 Shaked Street, Haifa",
        email : "jos27071994@gmail.com",
        notes : "Best friend from school",
        imgSrc : "images/joseph.jpeg"
    },
    {   name : "Mary Samuel",
        phone : "053-7777777",
        address : "10 Yitzhak Rabin Street, Haifa",
        email : "marysam@gmail.com",
        notes : "My wife",
        imgSrc : "images/mary.jpeg"
    }
]
contacts.sort((a, b) => a.name.localeCompare(b.name));

//header building
const header = document.querySelector(".main-header")
const divHeader = document.createElement("div")
divHeader.classList.add("header-container")
const hlHeader = document.createElement("h1")
hlHeader.classList.add("main-title")
hlHeader.textContent = "Phone Book";
const iHlHeader = document.createElement("i")
iHlHeader.classList.add("fas")
iHlHeader.classList.add("fa-address-book")
const navHeader = document.createElement("nav")
navHeader.classList.add("header-nav")
const btnHeader = document.createElement("button")
btnHeader.classList.add("special-btn")
btnHeader.id = "special-effect-btn"
btnHeader.addEventListener ("mouseover",function btnHeaderOver() {
    btnHeader.style.transform = "translateY(-2px)";
    btnHeader.style.boxShadow = "0 5px 15px rgba(255, 107, 107, 0.4)";
})
btnHeader.addEventListener ("mouseout",function btnHeaderOut() {
    btnHeader.style.transform = "";
    btnHeader.style.boxShadow = "";
})
btnHeader.textContent = "Click me to see a magic!";
const iNavHeader = document.createElement("i")
iNavHeader.classList.add("fas")
iNavHeader.classList.add("fa-magic")


        // <!-- <div class="header-container">
        //     <h1 class="main-title">
        //         <i class="fas fa-address-book"></i>
        //         Phone Book
        //     </h1>
        //     <nav class="header-nav">
        //         <button id="special-effect-btn" class="special-btn">
        //             <i class="fas fa-magic"></i>
        //             Click me to see a magic!
        //         </button>
        //     </nav>
        // </div> -->

// Append elements in the correct hierarchy
hlHeader.prepend(iHlHeader)          // Add icon inside h1 BEFORE text
btnHeader.prepend(iNavHeader)        // Add magic icon to button BEFORE text
navHeader.appendChild(btnHeader)     // Add button to nav
divHeader.appendChild(hlHeader)      // Add h1 to header container
divHeader.appendChild(navHeader)     // Add nav to header container
header.appendChild(divHeader)        // Finally, add the container to the actual <header>


// Simple Special Effects - Click button to show, click anywhere to hide
const divSpec = document.createElement('div');
divSpec.id = 'special-effect';
divSpec.classList.add('special-effect');
const divContent = document.createElement('div');
divContent.classList.add('effect-content');
const ispec = document.createElement('i');
ispec.classList.add('fas');
ispec.classList.add('fa-star');
ispec.classList.add('effect-icon');
const p1Spec = document.createElement('p');
p1Spec.textContent = "✨ cool, right? ✨";
const p2Spec = document.createElement('p');
p2Spec.textContent = "click everywhere to close it";
divSpec.style.display = 'none';

divSpec.appendChild(divContent);
divContent.appendChild(ispec);
divContent.appendChild(p1Spec);
divContent.appendChild(p2Spec);
document.body.appendChild(divSpec);

btnHeader.addEventListener('click', function() {
        divSpec.style.display = 'flex';
});

document.getElementById('main-body').addEventListener('click', function(e) {
    if (e.target.id !== 'special-effect-btn') {
        divSpec.style.display = 'none';
    }
});

// main section building
const main = document.querySelector(".main-content")
const overalMainDiv = document.createElement("div")
overalMainDiv.classList.add("container")
main.appendChild(overalMainDiv)


// search section building
const searchSection = document.createElement("section")
searchSection.classList.add("search-section")
const divSearch = document.createElement("div")
divSearch.classList.add("search-container")
const iSearch = document.createElement("i")
iSearch.classList.add("fas")
iSearch.classList.add("fa-search")
iSearch.classList.add("search-icon")
const inputSearch = document.createElement("input")
inputSearch.type = "text"
inputSearch.id = "search-input"
inputSearch.classList.add("search-input")
inputSearch.placeholder = "Search contacts..."
inputSearch.addEventListener ("focus",function inputSearchearchFocus() {
    inputSearch.style.outline = "none";
    inputSearch.style.boxShadow = "0 0 5px rgba(255, 107, 107, 0.5)";
    inputSearch.style.background = "rgba(255, 255, 255, 1)";
})
inputSearch.addEventListener("blur", function inputSearchBlur() {
    inputSearch.style.outline = "";
    inputSearch.style.boxShadow = "";
    inputSearch.style.background = "";
});

// Append elements in the correct hierarchy
divSearch.appendChild(iSearch)        // Add search icon to search container
divSearch.appendChild(inputSearch)   // Add input to search container
searchSection.appendChild(divSearch)  // Add search container to search section
overalMainDiv.appendChild(searchSection)      // Add search section to main content

// Action buttons section building
const actBtnsSection = document.createElement("section")
actBtnsSection.classList.add("action-buttons")
const addContactBtn = document.createElement("button")
addContactBtn.id = "add-contact-btn"
addContactBtn.classList.add("btn")
addContactBtn.classList.add("btn-primary")
addContactBtn.textContent = "Add Contact"
const iAddContactBtn = document.createElement("i")
iAddContactBtn.classList.add("fas")
iAddContactBtn.classList.add("fa-plus")
addContactBtn.addEventListener ("mouseover",function btnAddConOver() {
    addContactBtn.style.transform = "translateY(-2px)";
    addContactBtn.style.boxShadow = "0 5px 15px rgba(102, 126, 234, 0.4)";
})
addContactBtn.addEventListener ("mouseout",function btnAddConOut() {
    addContactBtn.style.transform = "";
    addContactBtn.style.boxShadow = "";
})
const deleteAllBtn = document.createElement("button")
deleteAllBtn.id = "delete-all-btn"
deleteAllBtn.classList.add("btn")
deleteAllBtn.classList.add("btn-danger")
deleteAllBtn.textContent = "Delete All"
const iDeleteAllBtn = document.createElement("i")
iDeleteAllBtn.classList.add("fas")
iDeleteAllBtn.classList.add("fa-trash-alt")
deleteAllBtn.addEventListener ("mouseover",function btnRemAllOver() {
    deleteAllBtn.style.transform = "translateY(-2px)";
    deleteAllBtn.style.boxShadow = "0 5px 15px rgba(255, 107, 107, 0.4)";
})
deleteAllBtn.addEventListener ("mouseout",function btnRemAllOut() {
    deleteAllBtn.style.transform = "";
    deleteAllBtn.style.boxShadow = "";
})

// Append elements in the correct hierarchy
addContactBtn.prepend(iAddContactBtn)  // Add plus icon to add contact button
deleteAllBtn.prepend(iDeleteAllBtn)  // Add trash icon to delete all button
actBtnsSection.appendChild(addContactBtn)  // Add add contact button to action buttons section
actBtnsSection.appendChild(deleteAllBtn)  // Add delete all button to action buttons section
overalMainDiv.appendChild(actBtnsSection)  // Add action buttons section to main content

// Contacts section building
const contactsSection = document.createElement("section")
contactsSection.classList.add("contacts-section")
const hlContacts = document.createElement("h2")
hlContacts.classList.add("section-title")
hlContacts.textContent = "Contact List";
const emptyContacts = document.createElement("div")
emptyContacts.id = "empty-message"
emptyContacts.classList.add("empty-message")
emptyContacts.textContent = "No contacts in the phone book";
const ulContacts = document.createElement("ul")
ulContacts.id = "contacts-list"
ulContacts.classList.add("contacts-list")
function organizeContacts() {
    ulContacts.innerHTML = "";
    contacts.forEach((elem,index) => {
        const liContact = document.createElement("li")
        liContact.classList.add("contact-item")
        liContact.setAttribute("data-index", index)
        const divAvatar = document.createElement("div")
        divAvatar.classList.add("contact-avatar")
        const imgAvatar = document.createElement("img")
        imgAvatar.src = elem.imgSrc
        imgAvatar.alt = elem.name
        imgAvatar.classList.add("avatar-img")
        const divInfo = document.createElement("div")
        divInfo.classList.add("contact-info")
        const h3ContactName = document.createElement("h3")
        h3ContactName.classList.add("contact-name")
        h3ContactName.textContent = elem.name
        const pContactPhone = document.createElement("p")
        pContactPhone.classList.add("contact-phone")
        pContactPhone.textContent = elem.phone
        const divActions = document.createElement("div")
        divActions.classList.add("contact-actions")
        const btnEdit = document.createElement("button")
        btnEdit.classList.add("btn-icon")
        btnEdit.classList.add("btn-edit")
        btnEdit.setAttribute("data-action", "edit")
        const iEdit = document.createElement("i")
        iEdit.classList.add("fas")
        iEdit.classList.add("fa-edit")
        const btnDelete = document.createElement("button")
        btnDelete.classList.add("btn-icon")
        btnDelete.classList.add("btn-delete")
        btnDelete.setAttribute("data-action", "delete")
        const iDelete = document.createElement("i")
        iDelete.classList.add("fas")
        iDelete.classList.add("fa-trash")

        liContact.addEventListener ("mouseover",function contOver() {
        liContact.style.transform = "translateY(-2px)";
        liContact.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
        liContact.style.borderColor =" #667eea";
        })
        liContact.addEventListener ("mouseout",function contOut() {
        liContact.style.transform = "";
        liContact.style.boxShadow = "";
        liContact.style.borderColor = "";
        })

        btnEdit.addEventListener ("mouseover",function btnEdiOver() {
        btnEdit.style.transform = "scale(1.1)";
        btnEdit.style.boxShadow = "0 4px 15px rgba(72, 187, 120, 0.4)";
        btnEdit.title = `Edit ${elem.name}`;
        })
        btnEdit.addEventListener ("mouseout",function btnEdiOut() {
        btnEdit.style.transform = "";
        btnEdit.style.boxShadow = "";
        btnEdit.title = "";
        })

        btnDelete.addEventListener ("mouseover",function btnDelOver() {
        btnDelete.style.transform = "scale(1.1)";
        btnDelete.style.boxShadow = "0 4px 15px rgba(245, 101, 101, 0.4)";
        btnDelete.title = `Delete ${elem.name}`;
        })
        btnDelete.addEventListener ("mouseout",function btnDelOut() {
        btnDelete.style.transform = "";
        btnDelete.style.boxShadow = "";
        btnDelete.title = "";
        })



        ulContacts.appendChild(liContact)  // Add li to ul
        liContact.appendChild(divAvatar)  // Add avatar div to li
        divAvatar.appendChild(imgAvatar)  // Add img to avatar div
        liContact.appendChild(divInfo)  // Add info div to li
        divInfo.appendChild(h3ContactName)  // Add name h3 to info div
        divInfo.appendChild(pContactPhone)  // Add phone p to info div
        liContact.appendChild(divActions)  // Add actions div to li
        divActions.appendChild(btnEdit)  // Add edit button to actions div
        btnEdit.appendChild(iEdit)  // Add edit icon to edit button
        divActions.appendChild(btnDelete)  // Add delete button to actions div
        btnDelete.appendChild(iDelete)  // Add delete icon to delete button

    });
}

contactsSection.appendChild(hlContacts)  // Add contacts title to contacts section
overalMainDiv.appendChild(contactsSection)  // Add contacts section to main content
contactsSection.appendChild(ulContacts)  // Add contacts list to contacts section

organizeContacts();

// footer building
const footer = document.querySelector(".main-footer")
const divFooter = document.createElement("div")
divFooter.classList.add("footer-container")
const pFooter = document.createElement("p")
pFooter.classList.add("footer-text")
pFooter.textContent = "© 2025 Phone Book - Created by Raviv Itzhaki & Ammar Mansour";

// Append elements in the correct hierarchy
divFooter.appendChild(pFooter)  // Add footer text to footer container
footer.appendChild(divFooter)  // Finally, add footer container to footer

// detail contact popup building
const popupDetails = document.createElement("div")
popupDetails.id = "contact-details-popup"
popupDetails.classList.add("popup-overlay")
const contactDetails = document.createElement("div")
contactDetails.classList.add("popup-content")
const headerDetails = document.createElement("div")
headerDetails.classList.add("popup-header")
const titleDetails = document.createElement("h3")
titleDetails.classList.add("popup-title")
titleDetails.textContent = "Contact Details";
const closeDetailsBtn = document.createElement("button")
closeDetailsBtn.classList.add("popup-close")
closeDetailsBtn.id = "close-details-popup"
closeDetailsBtn.addEventListener ("mouseover",function btnCloOver() {
    closeDetailsBtn.style.color = " #e53e3e";
    closeDetailsBtn.style.background = " rgba(229, 62, 62, 0.1)";
})
closeDetailsBtn.addEventListener ("mouseout",function btnCloOut() {
    closeDetailsBtn.style.color = "";
    closeDetailsBtn.style.background = "";
})
const iCloseDetails = document.createElement("i")
iCloseDetails.classList.add("fas")
iCloseDetails.classList.add("fa-times")
closeDetailsBtn.addEventListener("click", function() {
    popupDetails.style.display = 'none';
});
const bodyDetails = document.createElement("div")
bodyDetails.classList.add("popup-body")
const avatarDetails = document.createElement("div")
avatarDetails.classList.add("detail-avatar")
const imgDetails = document.createElement("img")
imgDetails.id = "detail-avatar-img"
imgDetails.classList.add("detail-avatar-img")
const nameDetails = document.createElement("div")
nameDetails.classList.add("detail-item")
const nameSdetails = document.createElement("strong")
nameSdetails.textContent = "Name:";
const nameSpanDetails = document.createElement("span")
nameSpanDetails.id = "detail-name"
const phoneDetails = document.createElement("div")
phoneDetails.classList.add("detail-item")
const phoneSdetails = document.createElement("strong")
phoneSdetails.textContent = "Phone:";
const phoneSpanDetails = document.createElement("span")
phoneSpanDetails.id = "detail-phone"
const addressDetails = document.createElement("div")
addressDetails.classList.add("detail-item")
const addressSdetails = document.createElement("strong")
addressSdetails.textContent = "Address:";
const addressSpanDetails = document.createElement("span")
addressSpanDetails.id = "detail-address"
const emailDetails = document.createElement("div")
emailDetails.classList.add("detail-item")
const emailSdetails = document.createElement("strong")
emailSdetails.textContent = "Email:";
const emailSpanDetails = document.createElement("span")
emailSpanDetails.id = "detail-email"
const notesDetails = document.createElement("div")
notesDetails.classList.add("detail-item")
const notesSdetails = document.createElement("strong")
notesSdetails.textContent = "Notes:";
const notesSpanDetails = document.createElement("span")
notesSpanDetails.id = "detail-notes"

ulContacts.addEventListener("click", function(e) {
    if (e.target.closest('.btn-edit') || e.target.closest('.btn-delete')) {
        return;
    }
    popupDetails.style.display = 'flex';
    const contactItem = e.target.closest('li.contact-item');
    if (contactItem) {
        const index = contactItem.getAttribute('data-index');
        const contact = contacts[index];
        imgDetails.src = contact.imgSrc;
        imgDetails.alt = contact.name;
        nameSpanDetails.textContent = contact.name;
        phoneSpanDetails.textContent = contact.phone;
        addressSpanDetails.textContent = contact.address;
        emailSpanDetails.textContent = contact.email;
        notesSpanDetails.textContent = contact.notes;
    }
})

// Append elements in the correct hierarchy
popupDetails.appendChild(contactDetails)  // Add popup content to popup overlay
contactDetails.appendChild(headerDetails)  // Add header to popup content
headerDetails.appendChild(titleDetails)  // Add title to header
headerDetails.appendChild(closeDetailsBtn)  // Add close button to header
closeDetailsBtn.appendChild(iCloseDetails)  // Add close icon to close button
contactDetails.appendChild(bodyDetails)  // Add body to popup content
bodyDetails.appendChild(avatarDetails)  // Add avatar div to body
avatarDetails.appendChild(imgDetails)  // Add image to avatar div
bodyDetails.appendChild(nameDetails)  // Add name div to body
nameDetails.appendChild(nameSdetails)  // Add strong to name div
nameDetails.appendChild(nameSpanDetails)  // Add span to name div
bodyDetails.appendChild(phoneDetails)  // Add phone div to body
phoneDetails.appendChild(phoneSdetails)  // Add strong to phone div
phoneDetails.appendChild(phoneSpanDetails)  // Add span to phone div
bodyDetails.appendChild(addressDetails)  // Add address div to body
addressDetails.appendChild(addressSdetails)  // Add strong to address div
addressDetails.appendChild(addressSpanDetails)  // Add span to address div
bodyDetails.appendChild(emailDetails)  // Add email div to body
emailDetails.appendChild(emailSdetails)  // Add strong to email div
emailDetails.appendChild(emailSpanDetails)  // Add span to email div
bodyDetails.appendChild(notesDetails)  // Add notes div to body
notesDetails.appendChild(notesSdetails)  // Add strong to notes div
notesDetails.appendChild(notesSpanDetails)  // Add span to notes div
document.body.appendChild(popupDetails)  // Add popup to body

// actions
// delete all contacts
deleteAllBtn.addEventListener("click", function() {
    if (contacts.length > 0) {
        if (confirm("Are you sure you want to delete all contacts?")) {
            contacts.length = 0;
            document.getElementById("contacts-list").remove();
            contactsSection.appendChild(emptyContacts);
        }
    } else {
        alert("No contacts to delete.");
    }
});

// delete single contact button
ulContacts.addEventListener("click", function(e) {
    if (e.target.closest('.btn-delete')) {
        const contactItem = e.target.closest('li.contact-item');
        const index = contactItem.getAttribute('data-index');
        if (confirm(`Are you sure you want to delete ${contacts[index].name}?`)) {
            contacts.splice(index, 1);
            contactItem.remove();
            organizeContacts();
            if (contacts.length === 0) {
                contactsSection.appendChild(emptyContacts);
            }
        }
    }
});

// new / edit contact button
// form building

const divForm = document.createElement("div")
divForm.id = "contact-form-popup"
divForm.classList.add("popup-overlay")
const contentForm = document.createElement("div")
contentForm.classList.add("popup-content")
const headerForm = document.createElement("div")
headerForm.classList.add("popup-header")
const titleForm = document.createElement("h3")
titleForm.classList.add("popup-title")
titleForm.id = "form-popup-title"
const closeFormBtn = document.createElement("button")
closeFormBtn.classList.add("popup-close")
closeFormBtn.id = "close-form-popup"
closeFormBtn.addEventListener ("mouseover",function btnCloForOver() {
    closeFormBtn.style.color = " #e53e3e";
    closeFormBtn.style.background = " rgba(229, 62, 62, 0.1)";
})
closeFormBtn.addEventListener ("mouseout",function btnCloForOver() {
    closeFormBtn.style.color = "";
    closeFormBtn.style.background = "";
})
const iCloseForm = document.createElement("i")
iCloseForm.classList.add("fas")
iCloseForm.classList.add("fa-times")
closeFormBtn.addEventListener("click", function() {
    if (confirm("Are you sure you want to close the form? All unsaved changes will be lost.")) {
        divForm.style.display = 'none';        
        clearFormInputs();}
});
const bodyForm = document.createElement("div")
bodyForm.classList.add("popup-body")
const form = document.createElement("form")
form.id = "contact-form"
form.classList.add("contact-form")
const formAvatar = document.createElement("div")
formAvatar.classList.add("form-group")
const labelAvatar = document.createElement("label")
labelAvatar.setAttribute("for", "form-avatar")
labelAvatar.classList.add("form-label")
labelAvatar.textContent = "Profile Picture URL";
const inputAvatar = document.createElement("input")
inputAvatar.type = "url"
inputAvatar.id = "form-avatar"
inputAvatar.name = "avatar"
inputAvatar.classList.add("form-input")
const formName = document.createElement("div")
formName.classList.add("form-group")
const labelName = document.createElement("label")
labelName.setAttribute("for", "form-name")
labelName.classList.add("form-label")
labelName.textContent = "Name *";
const inputName = document.createElement("input")
inputName.type = "text"
inputName.id = "form-name"
inputName.name = "name"
inputName.classList.add("form-input")
inputName.required = true;
const formPhone = document.createElement("div")
formPhone.classList.add("form-group")
const labelPhone = document.createElement("label")
labelPhone.setAttribute("for", "form-phone")
labelPhone.classList.add("form-label")
labelPhone.textContent = "Phone *";
const inputPhone = document.createElement("input")
inputPhone.type = "tel"
inputPhone.id = "form-phone"
inputPhone.name = "phone"
inputPhone.classList.add("form-input")
inputPhone.required = true;
const formAddress = document.createElement("div")
formAddress.classList.add("form-group")
const labelAddress = document.createElement("label")
labelAddress.setAttribute("for", "form-address")
labelAddress.classList.add("form-label")
labelAddress.textContent = "Address";
const inputAddress = document.createElement("input")
inputAddress.type = "text"
inputAddress.id = "form-address"
inputAddress.name = "address"
inputAddress.classList.add("form-input")
const formEmail = document.createElement("div")
formEmail.classList.add("form-group")
const labelEmail = document.createElement("label")
labelEmail.setAttribute("for", "form-email")
labelEmail.classList.add("form-label")
labelEmail.textContent = "Email";
const inputEmail = document.createElement("input")
inputEmail.type = "email"
inputEmail.id = "form-email"
inputEmail.name = "email"
inputEmail.classList.add("form-input")
const formNotes = document.createElement("div")
formNotes.classList.add("form-group")
const labelNotes = document.createElement("label")
labelNotes.setAttribute("for", "form-notes")
labelNotes.classList.add("form-label")
labelNotes.textContent = "Notes";
const inputNotes = document.createElement("textarea")
inputNotes.id = "form-notes"
inputNotes.name = "notes"
inputNotes.classList.add("form-textarea")
inputNotes.rows = 3;
const pForm = document.createElement("p")
pForm.classList.add("form-info")
pForm.textContent = "Fields marked with * are required.";
const formActions = document.createElement("div")
formActions.classList.add("form-actions")
const saveFormBtn = document.createElement("button")
saveFormBtn.type = "submit"
saveFormBtn.classList.add("btn")
saveFormBtn.classList.add("btn-primary")
saveFormBtn.textContent = "Save contact";
saveFormBtn.addEventListener ("mouseover",function btnSavForOver() {
    saveFormBtn.style.transform = "translateY(-2px)";
    saveFormBtn.style.background = " #5a6268";
})
saveFormBtn.addEventListener ("mouseout",function btnSavForOver() {
    saveFormBtn.style.transform = "";
    saveFormBtn.style.background = "";
})
const cancelFormBtn = document.createElement("button")
cancelFormBtn.type = "button"
cancelFormBtn.classList.add("btn")
cancelFormBtn.classList.add("btn-secondary")
cancelFormBtn.id = "cancel-form"
cancelFormBtn.textContent = "Cancel";
cancelFormBtn.addEventListener ("mouseover",function btnCanForOver() {
    cancelFormBtn.style.transform = "translateY(-2px)";
    cancelFormBtn.style.background = " #5a6268";
})
cancelFormBtn.addEventListener ("mouseout",function btnCanForOver() {
    cancelFormBtn.style.transform = "";
    cancelFormBtn.style.background = "";
})
cancelFormBtn.addEventListener("click", function() {
    if (confirm("Are you sure you want to cancel? All unsaved changes will be lost.")) {
    divForm.style.display = 'none';
    clearFormInputs();}
});

// Append elements in the correct hierarchy
document.body.appendChild(divForm)  // Add form popup to body
divForm.appendChild(contentForm)  // Add popup content to form popup
contentForm.appendChild(headerForm)  // Add header to popup content
headerForm.appendChild(titleForm)  // Add title to header
headerForm.appendChild(closeFormBtn)  // Add close button to header
closeFormBtn.appendChild(iCloseForm)  // Add close icon to close button
contentForm.appendChild(bodyForm)  // Add body to popup content
bodyForm.appendChild(form)  // Add form to body
form.appendChild(formAvatar)  // Add avatar group to form
formAvatar.appendChild(labelAvatar)  // Add label to avatar group
formAvatar.appendChild(inputAvatar)  // Add input to avatar group
form.appendChild(formName)  // Add name group to form
formName.appendChild(labelName)  // Add label to name group
formName.appendChild(inputName)  // Add input to name group
form.appendChild(formPhone)  // Add phone group to form
formPhone.appendChild(labelPhone)  // Add label to phone group
formPhone.appendChild(inputPhone)  // Add input to phone group
form.appendChild(formAddress)  // Add address group to form
formAddress.appendChild(labelAddress)  // Add label to address group
formAddress.appendChild(inputAddress)  // Add input to address group
form.appendChild(formEmail)  // Add email group to form
formEmail.appendChild(labelEmail)  // Add label to email group
formEmail.appendChild(inputEmail)  // Add input to email group
form.appendChild(formNotes)  // Add notes group to form
formNotes.appendChild(labelNotes)  // Add label to notes group
formNotes.appendChild(inputNotes)  // Add input to notes group
form.appendChild(pForm)  // Add paragraph to form
form.appendChild(formActions)  // Add actions group to form
formActions.appendChild(saveFormBtn)  // Add save button to actions group
formActions.appendChild(cancelFormBtn)  // Add cancel button to actions group

//Function to clear form inputs
function clearFormInputs() {
    inputAvatar.value = "";
    inputName.value = "";
    inputPhone.value = "";
    inputAddress.value = "";
    inputEmail.value = "";
    inputNotes.value = "";
    nameValid.style.display = "none";
    phoneValid.style.display = "none";
    emailValid.style.display = "none";
}

// validations functions
function isValidPhone(phone) {
    console.log("isValidPhone called with:", phone);
    return /^05\d(-?\d{7})$/.test(phone);
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

const nameValid = document.createElement("p");
nameValid.textContent = "Name is required.";
nameValid.style.color = "red";
nameValid.style.display = "none";
formName.appendChild(nameValid);
const phoneValid = document.createElement("p");
phoneValid.textContent = "Please enter a valid Israeli phone number.";
phoneValid.style.color = "red";
phoneValid.style.display = "none";
formPhone.appendChild(phoneValid);
const emailValid = document.createElement("p");
emailValid.textContent = "Please enter a valid email address.";
emailValid.style.color = "red";
emailValid.style.display = "none";
formEmail.appendChild(emailValid);
function validationsCheck() {
    nameValid.style.display = "none";
    phoneValid.style.display = "none";
    emailValid.style.display = "none";
    if (inputAvatar.value.trim() === "") {
        inputAvatar.value = "images/faceless.jpg";
        console.log("Default avatar set.");
    }
    let flag = true;
    if (inputName.value.trim() === "") {
        nameValid.style.display = "block";
        flag = false;
        console.log("Name validation failed.");
    }
    if (!isValidPhone(inputPhone.value.trim())) {
        phoneValid.style.display = "block";
        flag = false;
        console.log("Phone validation failed.");
    }
    if (inputEmail.value.trim() !== "" && !isValidEmail(inputEmail.value.trim())) {
        emailValid.style.display = "block";
        flag = false;
        console.log("Email validation failed.");
    }
    if (inputPhone.value.trim().length === 10) {
        const formatPhone = inputPhone.value.trim().split("");
        formatPhone.splice(3, 0, "-");
        inputPhone.value = formatPhone.join("");
        console.log("Phone number formatted to:", inputPhone.value);
    }
    console.log("Validations check result:", flag);
    if (!flag) {
        return false;
    }
    return true;
}

// add contact button
function newContact(e) {
    e.preventDefault();
    if (!validationsCheck()) {
        console.log("Validation failed.");
        return;
    }
    const exists = contacts.some(contact =>
        contact.name.toLowerCase() === inputName.value.trim().toLowerCase() &&
        contact.phone === inputPhone.value.trim()
    );
    const phoneExists = contacts.some(contact =>
        contact.phone === inputPhone.value.trim() &&
        contact.name.toLowerCase() !== inputName.value.trim().toLowerCase()
    );
    const nameExists = contacts.some(contact =>
        contact.name.toLowerCase() === inputName.value.trim().toLowerCase() &&
        contact.phone !== inputPhone.value.trim()
    );

    if (exists) {
        alert("This contact already exists.");
        return;
    } else if (phoneExists) {
        if (!confirm(`A contact with this phone number already exists. Do you want to add it anyway?`)) {
        return;
    }
    } else if (nameExists) {
        if (!confirm(`A contact with this name already exists. Do you want to add it anyway?`)) {
            return;
        }
    }
    const newObj = {
        name: inputName.value.trim(),
        phone: inputPhone.value.trim(),
        address: inputAddress.value.trim(),
        email: inputEmail.value.trim(),
        notes: inputNotes.value.trim(),
        imgSrc: inputAvatar.value.trim()
    };
    contacts.push(newObj);
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    organizeContacts();
    divForm.style.display = 'none';
    clearFormInputs();
    console.log("New contact added:", newObj);
    console.log("Current contacts:", contacts);
    console.log(confirm("New contact added successfully!"));
}

function editContact(e) {
    e.preventDefault();
    const contact = contacts[index];
    if (!validationsCheck()) {
        return;
    }
    if (inputName.value.trim() === contact.name &&
        inputPhone.value.trim() === contact.phone &&
        inputAddress.value.trim() === contact.address &&
        inputEmail.value.trim() === contact.email &&
        inputNotes.value.trim() === contact.notes &&
        inputAvatar.value.trim() === contact.imgSrc) {
        alert("No changes made to the contact.");
        divForm.style.display = 'none';
        clearFormInputs();
    }
    else {
        contacts[index] = {
            name: inputName.value.trim(),
            phone: inputPhone.value.trim(),
            address: inputAddress.value.trim(),
            email: inputEmail.value.trim(),
            notes: inputNotes.value.trim(),
            imgSrc: inputAvatar.value.trim()
        };
        contacts.sort((a, b) => a.name.localeCompare(b.name));
        organizeContacts();
        divForm.style.display = 'none';
        clearFormInputs();
        console.log("Contact edited:", contacts[index]);
        console.log("Current contacts:", contacts);
        console.log(confirm("Contact edited successfully!"));
    }
};

let index = null;
addContactBtn.addEventListener("click", function(e) {
    e.preventDefault();
    index = null;
    divForm.style.display = 'flex';
    titleForm.textContent = "Add New Contact";
    inputAvatar.placeholder = "";
    inputName.placeholder = "Full Name";
    inputPhone.placeholder = "050-1234567";
    inputAddress.placeholder = "11 Name Street, City";
    inputEmail.placeholder = "example@mail.com";
    inputNotes.placeholder = "From where do I know this person?";
    saveFormBtn.removeEventListener('click', editContact);
    saveFormBtn.removeEventListener('click', newContact);
    saveFormBtn.addEventListener('click', newContact);
});

// edit contact button
ulContacts.addEventListener("click", function(e) {
    if (e.target.closest('.btn-edit')) {
        const contactItem = e.target.closest('li.contact-item');
        index = contactItem.getAttribute('data-index');
        const contact = contacts[index];
        divForm.style.display = 'flex';
        titleForm.textContent = "Edit Contact";
        inputAvatar.value = contact.imgSrc;
        inputName.value = contact.name;
        inputPhone.value = contact.phone;
        inputAddress.value = contact.address;
        inputEmail.value = contact.email;
        inputNotes.value = contact.notes;
        saveFormBtn.removeEventListener('click', newContact); 
        saveFormBtn.removeEventListener('click', editContact);
        saveFormBtn.addEventListener('click', editContact);
    }
});