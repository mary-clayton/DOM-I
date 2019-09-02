const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
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
let two = document.getElementsByTagName("a")[1];
two.textContent = (siteContent["nav"]["nav-item-2"]);
let three = document.getElementsByTagName("a")[2];
three.textContent = (siteContent["nav"]["nav-item-3"]);
let four = document.getElementsByTagName("a")[3];
four.textContent = (siteContent["nav"]["nav-item-4"]);
let five = document.getElementsByTagName("a")[4];
five.textContent = (siteContent["nav"]["nav-item-5"]);
let six = document.getElementsByTagName("a")[5];
six.textContent = (siteContent["nav"]["nav-item-6"]);


let header = document.querySelector(".cta h1").textContent = (siteContent["cta"]["h1"]);
let headerImage = document.querySelector("#cta-img").setAttribute('src', siteContent["cta"]["img-src"]);
let button = document.querySelector("button").textContent = (siteContent["cta"]["button"]);

let middleImg =document.querySelector(".middle-img").setAttribute('src', siteContent ["main-content"]["middle-img-src"]);

let featuresHeader = document.querySelector(".top-content h4");
featuresHeader.textContent = (siteContent["main-content"]["features-h4"]);
let featuresPara = document.querySelector(".top-content p");
featuresPara.textContent = (siteContent["main-content"]["features-content"]);

let aboutHeader = document.querySelector(".top-content h4");
aboutHeader.textContent = (siteContent["main-content"]["about-h4"]);
let aboutPara = document.querySelector(".top-content p");
aboutPara.textContent = (siteContent["main-content"]["about-content"]);


let servicesHeader = document.querySelector(".bottom-content h4");
servicesHeader.textContent = (siteContent["main-content"]["services-h4"]);
let servicesPara = document.querySelector(".bottom-content p");
servicesPara.textContent = (siteContent["main-content"]["services-content"]);

let productsHeader = document.querySelector(".bottom-content h4");
productsHeader.textContent = (siteContent["main-content"]["product-h4"]);
let productsPara = document.querySelector(".bottom-content p");
productsPara.textContent = (siteContent["main-content"]["product-content"]);


let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = (siteContent["contact"]["contact-h4"]);
let contactAddress = document.querySelector(".contact p").textContent = (siteContent["contact"]["address"]);
let contactPhone = document.querySelector(".contact p").textContent = (siteContent["contact"]["phone"]);
let contactEmail = document.querySelector(".contact p").textContent = (siteContent["contact"]["email"]);

let footer = document.querySelector("footer p".textContent = siteContent["footer"]["copyright"]);


