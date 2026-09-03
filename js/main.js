(() => {
  const GATE_PASSWORD = "CMportfolio";
  const gate = document.getElementById("gate");
  const gateForm = document.getElementById("gate-form");
  const gateInput = document.getElementById("gate-input");
  const gateError = document.getElementById("gate-error");

  function unlockGate() {
    document.body.classList.remove("gate-locked");
    gate.classList.add("is-hidden");
  }

  if (localStorage.getItem("cm_portfolio_unlocked") === "1") {
    unlockGate();
  }

  gateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (gateInput.value === GATE_PASSWORD) {
      localStorage.setItem("cm_portfolio_unlocked", "1");
      unlockGate();
    } else {
      gateError.textContent = "Incorrect password.";
      gateInput.value = "";
      gateInput.focus();
    }
  });
})();

(() => {
  const views = Array.from(document.querySelectorAll(".view"));
  const header = document.querySelector(".site-header");
  const navButtons = Array.from(document.querySelectorAll("[data-nav]"));
  const projectIds = ["le-monde-kiosk", "artist-barricades", "meatpacking-billboard", "mystery-in-the-making"];

  function showView(id, opts = {}) {
    const target = document.getElementById(`view-${id}`);
    if (!target) return;

    views.forEach((v) => v.classList.remove("view-active"));
    target.classList.add("view-active");

    header.classList.toggle("is-visible", id !== "intro");

    const navGroup = id === "overview" || projectIds.includes(id) ? "overview" : id;
    navButtons.forEach((btn) => {
      btn.classList.toggle("is-current", btn.dataset.nav === navGroup);
    });

    if (!opts.skipHash) {
      history.pushState({ id }, "", `#${id}`);
    }
    if (!opts.skipScroll) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }

  document.querySelectorAll("[data-goto]").forEach((el) => {
    el.addEventListener("click", () => showView(el.dataset.goto));
  });

  window.addEventListener("popstate", (e) => {
    const id = (e.state && e.state.id) || (location.hash ? location.hash.slice(1) : "intro");
    showView(id, { skipHash: true });
  });

  const initial = location.hash ? location.hash.slice(1) : "intro";
  if (document.getElementById(`view-${initial}`)) {
    showView(initial, { skipHash: true, skipScroll: true });
  }

  // ---- lightbox ----
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");

  document.querySelectorAll(".detail-gallery button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("is-open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
  }
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
})();
