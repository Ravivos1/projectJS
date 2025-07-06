

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
btnHeader.addEventListener('click', function() {
    document.getElementById('special-effect').style.display = 'flex';
});

document.getElementById('main-body').addEventListener('click', function(e) {
    if (e.target.id !== 'special-effect-btn') {
        document.getElementById('special-effect').style.display = 'none';
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
