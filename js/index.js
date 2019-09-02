const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Location",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector("#logo-img").setAttribute('src', siteContent["nav"]["img-src"]);

let one = document.getElementsByTagName("a")[0];
one.textContent = (siteContent["nav"]["nav-item-1"]);
one.style.color = "green";
let two = document.getElementsByTagName("a")[1];
two.textContent = (siteContent["nav"]["nav-item-2"]);
two.style.color = "green";
let three = document.getElementsByTagName("a")[2];
three.textContent = (siteContent["nav"]["nav-item-3"]);
three.style.color = "green";
let four = document.getElementsByTagName("a")[3];
four.textContent = (siteContent["nav"]["nav-item-4"]);
four.style.color = "green";
let five = document.getElementsByTagName("a")[4];
five.textContent = (siteContent["nav"]["nav-item-5"]);
five.style.color = "green";
let six = document.getElementsByTagName("a")[5];
six.textContent = (siteContent["nav"]["nav-item-6"]);
six.style.color = "green";
let seventh = document.createElement("a");
document.querySelector("nav").appendChild(seventh);
seventh.href = "#";
let seven = document.getElementsByTagName("a")[6].textContent = (siteContent["nav"]["nav-item-7"]);
seventh.style.color = "green";

let header = document.querySelector(".cta h1").textContent = (siteContent["cta"]["h1"]);
let headerImage = document.querySelector("#cta-img").setAttribute('src', siteContent["cta"]["img-src"]);
let button = document.querySelector("button").textContent = (siteContent["cta"]["button"]);

let middleImg =document.querySelector(".middle-img").setAttribute('src', siteContent ["main-content"]["middle-img-src"]);

let parent = document.getElementsByClassName("top-content");
let child = document.querySelectorAll(".top-content h4");
child[0].textContent = (siteContent["main-content"]["features-h4"]);
child[1].textContent = (siteContent["main-content"]["about-h4"]);

let child2 =document.querySelectorAll(".top-content p");
child2[0].textContent = (siteContent["main-content"]["features-content"]);
child2[1].textContent = (siteContent["main-content"]["about-content"]);

let parent2 = document.getElementsByClassName("bottom-content");
let child3 =document.querySelectorAll(".bottom-content h4");
child3[0].textContent = (siteContent["main-content"]["services-h4"]);
child3[1].textContent = (siteContent["main-content"]["product-h4"]);
child3[2].textContent = (siteContent["main-content"]["vision-h4"]);

let child4 =document.querySelectorAll(".bottom-content p");
child4[0].textContent = (siteContent["main-content"]["services-content"]);
child4[1].textContent = (siteContent["main-content"]["product-content"]);
child4[2].textContent = (siteContent["main-content"]["vision-content"]);

let parent3 = document.getElementsByClassName("contact");
let child5 = document.querySelectorAll(".contact h4");
child5[0].textContent = (siteContent["contact"]["contact-h4"]);

let child6 =document.querySelectorAll(".contact p");
child6[0].textContent = (siteContent["contact"]["address"]);
child6[1].textContent = (siteContent["contact"]["phone"]);
child6[2].textContent = (siteContent["contact"]["email"]);


let footer = document.querySelector("footer p").textContent = (siteContent["footer"]["copyright"]);


