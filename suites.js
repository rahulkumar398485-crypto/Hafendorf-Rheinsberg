document.addEventListener("DOMContentLoaded", () => {

const modal = document.getElementById("roomModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.querySelector(".modal-close");

const suiteDetails = {

junior: {
title: "Junior Suite",
details: "42 m² suite with balcony, living and sleeping area, sofa bed and desk."
},

island1: {
title: "1-Bedroom Island Suite",
details: "Suite with separate bedroom, living area, terrace and private dock."
},

island2: {
title: "2-Bedroom Island Suite",
details: "Suite with two bedrooms, terrace and ideal for families."
},

penthouse: {
title: "Penthouse Suite",
details: "102 m² luxury suite with fireplace, kitchenette and harbor view."
},

hafendorf: {
title: "Hafendorf Suite",
details: "Exclusive suite with private sauna, dressing area and lake views."
}

};

document.querySelectorAll(".details-btn").forEach((btn) => {
btn.addEventListener("click", () => {

const type = btn.dataset.room;
const suite = suiteDetails[type];

if (!suite) return;

modalTitle.textContent = suite.title;
modalDetails.textContent = suite.details;

modal.classList.add("active");

});
});

closeModal.addEventListener("click", () => {
modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
if (e.target === modal) {
modal.classList.remove("active");
}
});

/* FILTER (same as apartments) */
document.querySelectorAll(".filter-btn").forEach((button) => {
button.addEventListener("click", () => {

const filter = button.dataset.filter;

document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
button.classList.add("active");

document.querySelectorAll(".room-card").forEach((card) => {

const type = card.dataset.type;

if (filter === "all" || type === filter) {
card.style.display = "block";
} else {
card.style.display = "none";
}

});

});
});

});
document.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll("[data-animate]");

  if (animated.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    animated.forEach((el) => observer.observe(el));
  }
});