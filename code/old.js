const actsElement = document.getElementById("acts");

// Får ett promise av response-object
const responsePromise = fetch("https://jsonplaceholder.typicode.com/posts");

// Lägg datat i korgen
const dataPromise = responsePromise.then((response) => {
  return response.json();
});

dataPromise.then((data) => {
  // const data = response.json();

  data.forEach((act) => {
    const actEl = document.createElement("div");
    actEl.innerHTML = `<h2>${act.title} ${act.body}</h2>`;
    actsElement.appendChild(actEl);
    console.log(act.title);
  });
  console.log(data);
});

// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);
