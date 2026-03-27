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
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("attractionModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");
  

  const attractionDetails = {
    lake: {
      title: "Ruppiner Seenland",
      details:
        "A beautiful lake region connecting Berlin with the Mecklenburg Lake District. Perfect for boating, canoeing and relaxing in nature.",
    },

    park: {
      title: "Stechlin Running Park",
      details:
        "Over 350 km of marked trails for running, hiking and Nordic walking in a scenic natural environment.",
    },

    cycling: {
      title: "Cycling Tours",
      details:
        "Explore the 'land of a thousand lakes' by bike with routes through forests, lakes and charming villages.",
    },

    hiking: {
      title: "Hiking Trails",
      details:
        "A wide network of trails invites you to explore forests, lakes and wildlife all year round.",
    },

    castle: {
      title: "Rheinsberg Castle",
      details:
        "A historic cultural landmark where Frederick the Great once lived, surrounded by beautiful gardens and lakes.",
    },
  };

  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.attraction;
      const item = attractionDetails[key];

      if (!item) return;

      modalTitle.textContent = item.title;
      modalDetails.textContent = item.details;

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
