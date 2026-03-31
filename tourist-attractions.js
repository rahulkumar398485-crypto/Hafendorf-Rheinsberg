function t(key, fallback) {
  if (window.translations && window.currentLang) {
    return window.translations[window.currentLang][key] || fallback;
  }
  return fallback;
}
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
      { threshold: 0.2 },
    );

    animated.forEach((el) => observer.observe(el));
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("attractionModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");

  const attractionDetails = {
    lake: {
      titleKey: "ta_attr1_title",
      detailsKey: "ta_attr1_modal",
      title: "Ruppiner Seenland",
      details:
        "A beautiful lake region connecting Berlin with the Mecklenburg Lake District, perfect for boating, canoeing and exploring nature.",
    },

    park: {
      titleKey: "ta_attr2_title",
      detailsKey: "ta_attr2_modal",
      title: "Stechlin Running Park",
      details:
        "Over 350 km of marked trails for running, hiking and Nordic walking in a stunning natural environment.",
    },

    cycling: {
      titleKey: "ta_attr3_title",
      detailsKey: "ta_attr3_modal",
      title: "Cycling Tours",
      details: "Discover the land of a thousand lakes by bike with scenic routes through forests, villages and along waterways.",
    },

    hiking: {
      titleKey: "ta_attr4_title",
      detailsKey: "ta_attr4_modal",
      title: "Hiking Trails",
      details: "A wide network of hiking trails offers year-round experiences in nature with lakes, forests and wildlife.",
    },

    castle: {
      titleKey: "ta_attr5_title",
      detailsKey: "ta_attr5_modal",
      title: "Rheinsberg Castle",
      details: "A historic cultural highlight where Frederick the Great once lived, surrounded by beautiful gardens and lakes.",
    },
  };

  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.attraction;
      const item = attractionDetails[key];

      if (!item) return;

      modalTitle.textContent = t(item.titleKey, item.title);
      modalDetails.textContent = t(item.detailsKey, item.details);

      modal.classList.add("active");
    });
  });

  closeModal.onclick = () => modal.classList.remove("active");

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  };
});
