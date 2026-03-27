document.addEventListener("DOMContentLoaded", () => {

const modal = document.getElementById("facilityModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.querySelector(".modal-close");

const facilityDetails = {

pool: {
details: "25 x 6 meter swimming pool with panoramic harbor views."
},

view: {
details: "Enjoy unique views of the lighthouse and marina while swimming."
},

relax: {
details: "Relaxation areas designed for peaceful rest after swimming."
},

wellness: {
details: "Direct access to sauna and wellness area."
}

};

document.querySelectorAll(".details-btn").forEach(btn => {
btn.addEventListener("click", () => {

const key = btn.dataset.facility;

modalTitle.textContent = btn.parentElement.querySelector("h3").textContent;
modalDetails.textContent = facilityDetails[key]?.details || "";

modal.classList.add("active");

});
});

closeModal.onclick = () => modal.classList.remove("active");

modal.onclick = (e) => {
if (e.target === modal) modal.classList.remove("active");
};

const animated = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) entry.target.classList.add("visible");
});
}, { threshold: 0.15 });

animated.forEach(el => observer.observe(el));

});