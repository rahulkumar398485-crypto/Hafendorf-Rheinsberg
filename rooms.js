// document.addEventListener("DOMContentLoaded", () => {

// const modal = document.getElementById("roomModal");
// const modalTitle = document.getElementById("modalTitle");
// const modalDetails = document.getElementById("modalDetails");
// const closeModal = document.querySelector(".modal-close");

// const roomDetails = {

// classic: {
// title: "Classic Room",
// details: "28 m² room with balcony, double bed, Wi-Fi, TV, minibar and modern amenities."
// },

// lake: {
// title: "Classic Room (Lake View)",
// details: "28 m² room with private balcony and side view of Lake Rheinsberg."
// },

// superior: {
// title: "Superior Room",
// details: "Room with direct lake view, balcony and elegant maritime design."
// }

// };

// document.querySelectorAll(".details-btn").forEach(btn => {
// btn.addEventListener("click", () => {

// const key = btn.dataset.room;
// const room = roomDetails[key];

// if (!room) return;

// modalTitle.textContent = room.title;
// modalDetails.textContent = room.details;

// modal.classList.add("active");

// });
// });

// closeModal.onclick = () => modal.classList.remove("active");

// modal.onclick = (e) => {
// if (e.target === modal) modal.classList.remove("active");
// };

// /* FILTER */
// document.querySelectorAll(".filter-btn").forEach(btn => {
// btn.addEventListener("click", () => {

// document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
// btn.classList.add("active");

// const filter = btn.dataset.filter;

// document.querySelectorAll(".room-card").forEach(card => {
// if (filter === "all" || card.dataset.type === filter) {
// card.style.display = "block";
// } else {
// card.style.display = "none";
// }
// });

// });
// });

// });
// document.addEventListener("DOMContentLoaded", () => {
//   const animated = document.querySelectorAll("[data-animate]");

//   if (animated.length) {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     animated.forEach((el) => observer.observe(el));
//   }
// });
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("roomModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");

  function t(key, fallback) {
    if (window.translations && window.currentLang) {
      return window.translations[window.currentLang][key] || fallback;
    }
    return fallback;
  }

  const roomDetails = {

    standard: {
      titleKey: "room_room1_title",
      detailsKey: "room_room1_modal",
      title: "Classic Room",
      details: "28 m² room with balcony and peaceful surroundings."
    },

    lake: {
      titleKey: "room_room2_title",
      detailsKey: "room_room2_modal",
      title: "Classic Room (Lake View)",
      details: "28 m² room with balcony and side lake view."
    },

    superior: {
      titleKey: "room_room3_title",
      detailsKey: "room_room3_modal",
      title: "Superior Room",
      details: "Room with direct lake view and modern design."
    }

  };

  // ✅ DETAILS MODAL
  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {

      const key = btn.dataset.room;
      const room = roomDetails[key];

      if (!room) return;

      modalTitle.textContent = t(room.titleKey, room.title);
      modalDetails.textContent = t(room.detailsKey, room.details);

      modal.classList.add("active");

    });
  });

  // ✅ CLOSE MODAL
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  // ✅ FILTER (ADDED BACK)
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

  // ✅ ANIMATION (safe)
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