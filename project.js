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

// Append elements in the correct hierarchy
contactsSection.appendChild(hlContacts)  // Add contacts title to contacts section
overalMainDiv.appendChild(contactsSection)  // Add contacts section to main content
if (contacts.length === 0) {
    contactsSection.appendChild(emptyContacts);  // Show empty message if no contacts
}
contactsSection.appendChild(ulContacts)  // Add contacts list to contacts section


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