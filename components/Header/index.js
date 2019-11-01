// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector(".header-container");

function Header(date, title, temp) {
    const header = document.createElement("div");
    const dDate = document.createElement("span");
    const tTitle = document.createElement("h1");
    const tTemp = document.createElement("span");

    header.classList.add("header");
    dDate.classList.add("date");
    tTemp.classList.add("temp");

    header.appendChild(dDate);
    header.appendChild(tTemp);
    header.appendChild(tTitle);
    headerContainer.appendChild(header);

    dDate.textContent = date;
    tTitle.textContent = title;
    tTemp.textContent = temp;

    return header;
}

Header('MARCH 28, 2019', 'Lambda Times', `"temp">98°`)
