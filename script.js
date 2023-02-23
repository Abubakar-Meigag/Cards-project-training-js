let names = [
  "Beko",
  "Ali",
  "Ahmed",
  "Jan",
  "Ibrahim",
  "Mezo",
  "Michael",
  "Steve",
  "Scott",
  "Sam",
];
let ages = [
  "35 years old",
  "22 years old",
  "18 years old",
  "38 years old",
  "27 years old",
  "26 years old",
  "30 years old",
  "20 years old",
  "25 years old",
  "37 years old",
];

let conta = document.createElement("div");
document.body.appendChild(conta);
conta.style.textAlign = "center";

function element(name, ages) {
  // element
  let card = document.createElement("div");
  let title = document.createElement("h2");
  let age = document.createElement("p");
  let img = document.createElement("img");

  //content
  let head = document.createTextNode(name);
  let ageContent = document.createTextNode(ages);
  img.src = "pic/img1.jpg";
  title.appendChild(head);
  age.appendChild(ageContent);

  // style
  card.style.width = "200px";
  card.style.color = "#ffffb3";
  card.style.padding = "10px";
  card.style.background = "#363945";
  card.style.margin = "1px";
  card.style.display = "inline-block";

  img.style.width = "100%";

  //finshing
  card.appendChild(title);
  card.appendChild(age);
  card.appendChild(img);

  conta.appendChild(card);
}

for (let i = 0; i < 10; i++) {
  element(names[i], ages[i]);
}

let btnOpen = document.getElementById("open");
let btnClose = document.getElementById("close");
let container = document.querySelector(".container");

btnClose.onclick = function () {
  container.classList.add("hide");
  this.classList.add("hide");
  btnOpen.classList.remove("hide");
};

btnOpen.onclick = function () {
  container.classList.remove("hide");
  btnClose.classList.remove("hide");
  btnOpen.classList.add("hide");
};
