const counts = document.querySelectorAll(".count");
const speed = 97;

const updateCount = (counter) => {
  const target = Number(counter.getAttribute("data-target"));
  const count = Number(counter.innerText);
  const inc = target / speed;

  if (count < target) {
    counter.innerText = Math.floor(inc + count);
    setTimeout(() => updateCount(counter), 15);
  } else {
    counter.innerText = target;
  }
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target.querySelector(".count");
      updateCount(counter);
      observer.unobserve(entry.target);
    }
  });
}, options);

document.querySelectorAll(".counter").forEach((counter) => {
  observer.observe(counter);
});
