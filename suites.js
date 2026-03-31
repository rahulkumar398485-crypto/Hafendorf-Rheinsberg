// document.addEventListener("DOMContentLoaded", () => {

// const modal = document.getElementById("roomModal");
// const modalTitle = document.getElementById("modalTitle");
// const modalDetails = document.getElementById("modalDetails");
// const closeModal = document.querySelector(".modal-close");

// const suiteDetails = {

// junior: {
// title: "Junior Suite",
// details: "42 m² suite with balcony, living and sleeping area, sofa bed and desk."
// },

// island1: {
// title: "1-Bedroom Island Suite",
// details: "Suite with separate bedroom, living area, terrace and private dock."
// },

// island2: {
// title: "2-Bedroom Island Suite",
// details: "Suite with two bedrooms, terrace and ideal for families."
// },

// penthouse: {
// title: "Penthouse Suite",
// details: "102 m² luxury suite with fireplace, kitchenette and harbor view."
// },

// hafendorf: {
// title: "Hafendorf Suite",
// details: "Exclusive suite with private sauna, dressing area and lake views."
// }

// };

// document.querySelectorAll(".details-btn").forEach((btn) => {
// btn.addEventListener("click", () => {

// const type = btn.dataset.room;
// const suite = suiteDetails[type];

// if (!suite) return;

// modalTitle.textContent = suite.title;
// modalDetails.textContent = suite.details;

// modal.classList.add("active");

// });
// });

// closeModal.addEventListener("click", () => {
// modal.classList.remove("active");
// });

// modal.addEventListener("click", (e) => {
// if (e.target === modal) {
// modal.classList.remove("active");
// }
// });

// /* FILTER (same as apartments) */
// document.querySelectorAll(".filter-btn").forEach((button) => {
// button.addEventListener("click", () => {

// const filter = button.dataset.filter;

// document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
// button.classList.add("active");

// document.querySelectorAll(".room-card").forEach((card) => {

// const type = card.dataset.type;

// if (filter === "all" || type === filter) {
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

  const suiteDetails = {

    junior: {
      titleKey: "suites_room1_title",
      detailsKey: "suites_room1_modal",
      title: "Junior Suite",
      details: "42 m² suite with balcony, living area and sofa bed."
    },

    island1: {
      titleKey: "suites_room2_title",
      detailsKey: "suites_room2_modal",
      title: "1-Bedroom Island Suite",
      details: "Spacious suite with terrace and private dock."
    },

    island2: {
      titleKey: "suites_room3_title",
      detailsKey: "suites_room3_modal",
      title: "2-Bedroom Island Suite",
      details: "Perfect for families with two bedrooms and terrace."
    },

    penthouse: {
      titleKey: "suites_room4_title",
      detailsKey: "suites_room4_modal",
      title: "Penthouse Suite",
      details: "102 m² luxury suite with fireplace and harbor view."
    },

    hafendorf: {
      titleKey: "suites_room5_title",
      detailsKey: "suites_room5_modal",
      title: "Hafendorf Suite",
      details: "Exclusive suite with private sauna and lake views."
    }

  };

  // ✅ DETAILS
  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {

      const key = btn.dataset.room;
      const suite = suiteDetails[key];

      if (!suite) return;

      modalTitle.textContent = t(suite.titleKey, suite.title);
      modalDetails.textContent = t(suite.detailsKey, suite.details);

      modal.classList.add("active");

    });
  });

  // ✅ CLOSE
  closeModal.onclick = () => modal.classList.remove("active");

  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("active");
  };

  // ✅ FILTER (KEEP SAME)
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
// ✅ ANIMATION FIX (ADD THIS)
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

  // 🔥 IMPORTANT FIX: show if already visible
  animated.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("visible");
    }
  });
}