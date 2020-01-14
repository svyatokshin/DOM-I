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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Navigation Menu
const links = document.getElementsByTagName('a');
for (let i=0; i < links.length; i++){
  links[i].classList.add(`nav-item-${i + 1}`);
  links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
};

//Create New Nav bar elements
const home = document.createElement('a');
home.textContent = "Home";
home.setAttribute('href', '#');

const browse = document.createElement('a');
browse.textContent = "Browse";
browse.setAttribute('href', '#');

//Append and Prepend link in NavBar
const navigation = document.querySelector('nav');
navigation.prepend(home);
navigation.appendChild(browse);


// Change the text color of the NavBar to Green
Array.from(links).forEach(link => {
  link.style.color = "green";
})

// Product and About Sections

const topContent = document.querySelector('h1');
topContent.textContent = siteContent["cta"]["h1"];

const topButton = document.querySelector('button');
topButton.textContent = siteContent["cta"]["button"];

const topImg = document.querySelector('#cta-img');
topImg.setAttribute('src', siteContent["cta"]["img-src"]);

const featuresHeading = document.querySelector('.top-content').getElementsByTagName('h4')[0];
featuresHeading.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector('.top-content').getElementsByTagName('p')[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutHeading = document.querySelector('.top-content').getElementsByTagName('h4')[1];
aboutHeading.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector('.top-content').getElementsByTagName('p')[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

// Middle Img

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Services, Product, Vision Sections


const servicesHeading = document.querySelector('.main-content').getElementsByTagName('h4')[2];
servicesHeading.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelector('.main-content').getElementsByTagName('p')[2];
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productHeading = document.querySelector('.main-content').getElementsByTagName('h4')[3];
productHeading.textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelector('.main-content').getElementsByTagName('p')[3];
productContent.textContent = siteContent["main-content"]["product-content"];

const visionHeading = document.querySelector('.main-content').getElementsByTagName('h4')[4];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelector('.main-content').getElementsByTagName('p')[4];
visionContent.textContent = siteContent["main-content"]["vision-content"];

// Contact Section

const contactHeading = document.querySelector('.contact').getElementsByTagName('h4')[0];
contactHeading.textContent = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelector('.contact').getElementsByTagName('p')[0];
contactAddress.textContent = siteContent['contact']['address'];

const contactPhone = document.querySelector('.contact').getElementsByTagName('p')[1];
contactPhone.textContent = siteContent['contact']['phone'];

const contactEmail = document.querySelector('.contact').getElementsByTagName('p')[2];
contactEmail.textContent = siteContent['contact']['email'];

// Footer Section
const footerText = document.querySelector('footer').getElementsByTagName('p')[0];
footerText.textContent = siteContent['footer']['copyright'];
