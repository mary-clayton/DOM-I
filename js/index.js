const siteContent = {
  nav: {
    "nav-item-0": "Home",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Location",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-img-src": "img/features.jpeg",
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-img-src": "img/about.jpeg",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document
  .querySelector("#logo-img")
  .setAttribute("src", siteContent["nav"]["img-src"]);

let navParent = document.querySelector("nav");
let navChild = document.querySelectorAll("nav a");

navChild[0].textContent = siteContent["nav"]["nav-item-1"];
navChild[1].textContent = siteContent["nav"]["nav-item-2"];
navChild[2].textContent = siteContent["nav"]["nav-item-3"];
navChild[3].textContent = siteContent["nav"]["nav-item-4"];
navChild[4].textContent = siteContent["nav"]["nav-item-5"];
navChild[5].textContent = siteContent["nav"]["nav-item-6"];
navChild.forEach(element => {
  element.style.color = "green";
})

let header = (document.querySelector(".cta h1").textContent =
  "Dom \n Is \n Awesome");
  
let headerImage = document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent["cta"]["img-src"]);
let button = (document.querySelector("button").textContent =
  siteContent["cta"]["button"]);

let middleImg = document
  .querySelector(".middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let parent = document.getElementsByClassName("top-content");
let child = document.querySelectorAll(".top-content h4");
child[0].textContent = siteContent["main-content"]["features-h4"];
child[1].textContent = siteContent["main-content"]["about-h4"];

let child2 = document.querySelectorAll(".top-content p");
let image = document.createElement("img");
let image1 = document.querySelector(".text-content").prepend(image);
let child7 = document.querySelectorAll(".top-content img");
child7[0].setAttribute("src", siteContent["main-content"]["features-img-src"]);
image.style.width = "400px";
child2[0].textContent = siteContent["main-content"]["features-content"];
child2[1].textContent = siteContent["main-content"]["about-content"];

let buttonFeatures = document.createElement("button");
let buttonTop = document
  .querySelector(".text-content")
  .appendChild(buttonFeatures);
buttonTop.style.width = "180px";
buttonTop.style.height = "40px";
buttonTop.textContent = "View Features";
buttonTop.style.backgroundColor = "#fff";
buttonTop.style.fontSize = "16px";
buttonTop.style.border = "2px solid black";
buttonTop.style.marginTop = "16px";

let parent2 = document.getElementsByClassName("bottom-content");
let child3 = document.querySelectorAll(".bottom-content h4");
child3[0].textContent = siteContent["main-content"]["services-h4"];
child3[1].textContent = siteContent["main-content"]["product-h4"];
child3[2].textContent = siteContent["main-content"]["vision-h4"];

let child4 = document.querySelectorAll(".bottom-content p");
child4[0].textContent = siteContent["main-content"]["services-content"];
child4[1].textContent = siteContent["main-content"]["product-content"];
child4[2].textContent = siteContent["main-content"]["vision-content"];

let parent3 = document.getElementsByClassName("contact");
let child5 = document.querySelectorAll(".contact h4");
child5[0].textContent = siteContent["contact"]["contact-h4"];

let child6 = document.querySelectorAll(".contact p");
child6[0].textContent = siteContent["contact"]["address"];
child6[1].textContent = siteContent["contact"]["phone"];
child6[2].textContent = siteContent["contact"]["email"];

let buttonOne = document.createElement("button");
let buttonMove = document.querySelector(".contact").appendChild(buttonOne);
buttonMove.style.width = "180px";
buttonMove.style.height = "40px";
buttonMove.textContent = "Contact Us";
buttonMove.style.backgroundColor = "#fff";
buttonMove.style.fontSize = "16px";
buttonMove.style.border = "2px solid black";

let footer = (document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"]);
