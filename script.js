document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const pageName = currentPage.replace(".html", "") || "index";
  document.body.classList.add(`page-${pageName}`);

  // Run the cinematic flight trace once per browser tab session, not as a permanent page element.
  const introKey = "aerobmsce-flight-intro-seen";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let introAlreadySeen = false;
  try {
    introAlreadySeen = sessionStorage.getItem(introKey) === "1";
    if (!introAlreadySeen) sessionStorage.setItem(introKey, "1");
  } catch (error) {
    // Storage may be unavailable for local files; the intro can still play on this load.
  }

  if (!introAlreadySeen) {
    const intro = document.createElement("div");
    intro.className = "flight-intro";
    intro.setAttribute("role", "presentation");
    intro.setAttribute("aria-hidden", "true");
    intro.innerHTML = `
      <div class="intro-grid"></div>
      <div class="intro-coordinate intro-coordinate-left">AEROBMSCE / FLIGHT SYSTEMS</div>
      <div class="intro-coordinate intro-coordinate-right">DESIGN · BUILD · TEST · FLY</div>
      <svg class="intro-flight-path" viewBox="0 0 1000 700" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="flight-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <path class="flight-path-halo" pathLength="1500" d="M 42 660 L 245 505 C 315 452 365 398 423 342 C 476 290 532 275 556 320 C 581 366 531 409 490 373 C 450 338 484 281 548 245 C 638 194 752 135 952 40" />
        <path class="flight-path-line" pathLength="1500" d="M 42 660 L 245 505 C 315 452 365 398 423 342 C 476 290 532 275 556 320 C 581 366 531 409 490 373 C 450 338 484 281 548 245 C 638 194 752 135 952 40" />
        <g class="intro-drone" filter="url(#flight-glow)">
          <g transform="translate(-26 -20) rotate(90 26 26)">
            <path d="M26 2 L31 18 L50 28 L50 32 L31 27 L29 42 L36 48 L36 51 L26 47 L16 51 L16 48 L23 42 L21 27 L2 32 L2 28 L21 18 Z" fill="#f1b866" stroke="#fff0cf" stroke-width="1.2" stroke-linejoin="round" />
            <path d="M26 6 L28 19 L26 22 L24 19 Z" fill="#fff8e9" />
          </g>
          <animateMotion dur="1.35s" begin="0s" fill="freeze" rotate="auto" path="M 42 660 L 245 505 C 315 452 365 398 423 342 C 476 290 532 275 556 320 C 581 366 531 409 490 373 C 450 338 484 281 548 245 C 638 194 752 135 952 40" />
        </g>
      </svg>
      <div class="intro-wordmark"><span>A</span><div><strong>AERO<span>BMSCE</span></strong><small>AEROSPACE · AEROMODELLING</small></div></div>
      <div class="intro-caption"><span>FLIGHT PATH INITIALISED</span><span>BLR / 12°56′ N · 77°34′ E</span></div>
    `;
    document.body.appendChild(intro);
    if (reducedMotion) {
      intro.classList.add("flight-intro-reduced");
      window.setTimeout(() => intro.remove(), 2000);
    } else {
      window.setTimeout(() => intro.classList.add("flight-intro-fade"), 1350);
      window.setTimeout(() => intro.remove(), 2000);
    }
  }

  // Secondary pages keep their subtle technical atmosphere, without a continuously moving aircraft.
  if (pageName !== "index") {
    const atmosphere = document.createElement("div");
    atmosphere.className = "flight-atmosphere";
    atmosphere.setAttribute("aria-hidden", "true");
    document.body.prepend(atmosphere);
  }

  document.querySelectorAll(".nav a[data-page]").forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.innerHTML = isOpen ? 'CLOSE <span>×</span>' : 'MENU <span>＋</span>';
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent(`[AeroBMSCE] ${data.get("topic")} — ${data.get("name")}`);
      const body = encodeURIComponent(
        `Name / organisation: ${data.get("name")}\nReply email: ${data.get("email")}\nTopic: ${data.get("topic")}\n\n${data.get("message")}`,
      );
      const status = document.querySelector("#form-status");
      if (status) {
        status.textContent = "Your email app should open with the enquiry prepared. Review it and press Send to contact the team.";
      }
      window.location.href = `mailto:aerobmsce@bmsce.ac.in?subject=${subject}&body=${body}`;
    });
  }
});
