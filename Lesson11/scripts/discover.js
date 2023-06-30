const visitsDisplay = document.querySelector(".last-visit");

// discover last visit
let currentVisit = Date.now();

let lastVisit = Number(window.localStorage.getItem("last-visit-ls"));

let lastVisitDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(new Date(lastVisit));

let timeSinceLast = Math.round((currentVisit - lastVisit) / (86400000));

if (lastVisit !== 0) {
  visitsDisplay.innerHTML = "The last time you visited this page was "+lastVisitDate+", which was "+timeSinceLast+" days ago. Welcome back!";
} else {
  visitsDisplay.innerHTML = "This is your first time visiting this page!"
};

localStorage.setItem("last-visit-ls", currentVisit)

function selectResponse() {
  const s = document.querySelector('#selected');
  const sel = document.querySelector('#select-mem');
  s.style.display = "block";
  s.textContent = sel.value;
};