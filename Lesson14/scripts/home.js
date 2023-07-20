const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

/*current date */
const now = new Date();

const currentYear = now.getFullYear();

const currentDay = now.getDay();

const theHour = now.getHours();

const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

document.querySelector(".currentYear").textContent = currentYear;

const lastModif = new Date(document.lastModified);

document.querySelector(".lastModif").textContent = `Last Updated: ${lastModif.toLocaleString()}`;

/*hambuerguer menu */
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

/* lazy */


// images discover 
// Get all images to be replaced
const imagesToLoad = document.querySelectorAll("[data-src]");

// function to load the actual image
const loadImages = (img) => {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
  };
};

const imageOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imageOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}





