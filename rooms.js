document.addEventListener("DOMContentLoaded", () => {

const modal = document.getElementById("roomModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.querySelector(".modal-close");

const roomDetails = {

classic: {
title: "Classic Room",
details: "28 m² room with balcony, double bed, Wi-Fi, TV, minibar and modern amenities."
},

lake: {
title: "Classic Room (Lake View)",
details: "28 m² room with private balcony and side view of Lake Rheinsberg."
},

superior: {
title: "Superior Room",
details: "Room with direct lake view, balcony and elegant maritime design."
}

};

document.querySelectorAll(".details-btn").forEach(btn => {
btn.addEventListener("click", () => {

const key = btn.dataset.room;
const room = roomDetails[key];

if (!room) return;

modalTitle.textContent = room.title;
modalDetails.textContent = room.details;

modal.classList.add("active");

});
});

closeModal.onclick = () => modal.classList.remove("active");

modal.onclick = (e) => {
if (e.target === modal) modal.classList.remove("active");
};

/* FILTER */
document.querySelectorAll(".filter-btn").forEach(btn => {
btn.addEventListener("click", () => {

document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
btn.classList.add("active");

const filter = btn.dataset.filter;

document.querySelectorAll(".room-card").forEach(card => {
if (filter === "all" || card.dataset.type === filter) {
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