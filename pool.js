// document.addEventListener("DOMContentLoaded", () => {

// const modal = document.getElementById("facilityModal");
// const modalTitle = document.getElementById("modalTitle");
// const modalDetails = document.getElementById("modalDetails");
// const closeModal = document.querySelector(".modal-close");

// const facilityDetails = {

// pool: {
// details: "25 x 6 meter swimming pool with panoramic harbor views."
// },

// view: {
// details: "Enjoy unique views of the lighthouse and marina while swimming."
// },

// relax: {
// details: "Relaxation areas designed for peaceful rest after swimming."
// },

// wellness: {
// details: "Direct access to sauna and wellness area."
// }

// };

// document.querySelectorAll(".details-btn").forEach(btn => {
// btn.addEventListener("click", () => {

// const key = btn.dataset.facility;

// modalTitle.textContent = btn.parentElement.querySelector("h3").textContent;
// modalDetails.textContent = facilityDetails[key]?.details || "";

// modal.classList.add("active");

// });
// });

// closeModal.onclick = () => modal.classList.remove("active");

// modal.onclick = (e) => {
// if (e.target === modal) modal.classList.remove("active");
// };

// const animated = document.querySelectorAll("[data-animate]");

// // FORCE SHOW ON LOAD
// window.addEventListener("load", () => {
//   animated.forEach(el => {
//     el.classList.add("visible");
//   });
// });

// // OPTIONAL: keep animation on scroll
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     }
//   });
// }, { threshold: 0.1 });

// animated.forEach(el => observer.observe(el));

// });
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("facilityModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");

  // ✅ TRANSLATION FUNCTION
  function t(key, fallback) {
    if (window.translations && window.currentLang) {
      return window.translations[window.currentLang][key] || fallback;
    }
    return fallback;
  }

  // ✅ FIXED (ADD KEYS)
  const facilityDetails = {

    pool: {
      titleKey: "pool_main_title",
      detailsKey: "pool_main_modal",
      title: "Main Pool",
      details: "25 x 6 m pool with panoramic views of the harbor village."
    },

    view: {
      titleKey: "pool_view_title",
      detailsKey: "pool_view_modal",
      title: "Harbor View",
      details: "Swim while enjoying views of the marina and lighthouse."
    },

    relax: {
      titleKey: "pool_relax_title",
      detailsKey: "pool_relax_modal",
      title: "Relaxation Area",
      details: "Quiet zones designed for rest and recovery."
    },

    wellness: {
      titleKey: "pool_wellness_title",
      detailsKey: "pool_wellness_modal",
      title: "Wellness Access",
      details: "Direct access to sauna and wellness area."
    }

  };

  // ✅ DETAILS CLICK
  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const key = btn.dataset.facility;
      const item = facilityDetails[key];

      if (!item) return;

      modalTitle.textContent = t(item.titleKey, item.title);
      modalDetails.textContent = t(item.detailsKey, item.details);

      modal.classList.add("active");

    });
  });

  // ✅ CLOSE MODAL (SAFE)
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

  // ✅ ANIMATION FIX
  const animated = document.querySelectorAll("[data-animate]");

  window.addEventListener("load", () => {
    animated.forEach(el => el.classList.add("visible"));
  });

});