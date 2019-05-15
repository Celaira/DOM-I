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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.querySelector('#cta-img');
cta.setAttribute('src', siteContent["cta"]["img-src"])

let mid = document.querySelector('#middle-img');
mid.setAttribute('src', siteContent['main-content']['middle-img-src'])

let navItems = document.querySelectorAll('nav > a');
navItems.forEach((v, i) => v.textContent = siteContent['nav'][`nav-item-${i+1}`]);

navItems.forEach(function(element){
  element.style.color = "green";
});

let newNav = document.querySelector('nav');

const newLink1 = document.createElement('a');
const newLink2 = document.createElement('a');

newLink1.setAttribute('href', '#');
newLink2.setAttribute('href', '#');
newLink1.textContent = "Ideas";
newLink2.textContent = "Perfect";

newNav.appendChild(newLink1);
newNav.prepend(newLink2);

newLink1.style.color = "green";
newLink2.style.color = "green";

let ctaMain = document.querySelector('.cta .cta-text');
ctaMain.innerHTML = `<h1>${siteContent['cta']['h1']}</h1>`;

let ctabtn = document.createElement('button');
ctabtn.textContent = "Get Started";
document.querySelector('.cta .cta-text').appendChild(ctabtn);

let topctnt = document.querySelectorAll('.top-content .text-content');
topctnt[0].innerHTML = `<h4>${siteContent['main-content']['features-h4']}</h4>\n<p>${siteContent['main-content']['features-content']}</p>`
topctnt[1].innerHTML = `<h4>${siteContent['main-content']['about-h4']}</h4>\n<p>
${siteContent['main-content']['about-content']}
</p>`;

let btmContent = document.querySelectorAll('.bottom-content .text-content');
btmContent[0].innerHTML = `<h4>${siteContent['main-content']['services-h4']}</h4>\n<p>
${siteContent['main-content']['services-content']}
</p>`;
btmContent[1].innerHTML = `<h4>${siteContent['main-content']['product-h4']}</h4>\n<p>${siteContent['main-content']['product-content']}</p>`;
btmContent[2].innerHTML = `<h4>${siteContent['main-content']['vision-h4']}</h4>\n<p>${siteContent['main-content']['vision-content']}</p>`;

let contact = document.querySelector('.contact');
contact.innerHTML = `<h4>${siteContent['contact']['contact-h4']}</h4>\n<p>
<address>${siteContent['contact']['address']}</address></p>\n
<p><a href="mailto:email@email.com">${siteContent['contact']['phone']}</a></p>\n
\n<p><a href="tel:555-555-5555">${siteContent['contact']['email']}</a></p>
`;

let footer = document.querySelector('footer > p');
footer.textContent = `${siteContent['footer']['copyright']}`;

let btnUpdate = document.createElement('button');



btnUpdate.addEventListener('click', (event) => {
  event.target.style.backgroundColor = "green";
  event.target.style.color = "white";
});

btnUpdate.style.border = "1px solid black";
btnUpdate.style.borderRadius = "15px";
btnUpdate.textContent = "Hello!";
btnUpdate.style.width = "150px";
btnUpdate.style.padding = "10px";
btnUpdate.style.marginTop = "20px";

const newButton = document.querySelector('section.main-content')
newButton.appendChild(btnUpdate);



