const actsElement = document.querySelector(".accordion");

async function getActs() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((act, index) => {
    // Title div
    const actEl = document.createElement("div");
    actEl.setAttribute("class", "title");
    actEl.innerHTML = `<h4><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m17 9.5-5 5-5-5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>${capitalizeFirstLetter(
      act.title
    )}</h4>`;
    actEl.style.backgroundColor = index % 2 === 0 ? "hotpink" : "lightblue";

    // Peekaboo
    actEl.addEventListener("click", toggle);

    // Description div
    const actEl2 = document.createElement("div");
    actEl2.setAttribute("class", "description");
    actEl2.innerHTML = `<p>${capitalizeFirstLetter(act.body)}</p>`;
    // actEl2.addEventListener("click", toggle);

    actsElement.appendChild(actEl);
    // I changed this from actsElement
    actEl.appendChild(actEl2);
  });
}

// Function that capitelize the first letter
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);
const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);
const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

getActs();
