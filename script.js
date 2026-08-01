// ==========================
// XTra Tech Script
// ==========================

// Sidebar

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");

function openSidebar() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
}

function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

menuBtn?.addEventListener("click", openSidebar);
closeBtn?.addEventListener("click", closeSidebar);
overlay?.addEventListener("click", closeSidebar);

// Search

const searchInput = document.querySelector(".search-box input");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(
      ".feature-card,.category,.quick-card,.trend-card,.favorite-card,.recent-card"
    ).forEach(card => {
      card.style.display =
        card.innerText.toLowerCase().includes(value)
          ? ""
          : "none";
    });
  });
}

// Hero Buttons

document.querySelector(".primary")?.addEventListener("click", () => {
  document.querySelector(".featured-grid")
    ?.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".secondary")?.addEventListener("click", () => {
  document.querySelector(".category-grid")
    ?.scrollIntoView({ behavior: "smooth" });
});

// Floating Button

document.querySelector(".fab")?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Bottom Navigation

document.querySelectorAll(".bottom-nav a").forEach(btn => {

  btn.addEventListener("click", () => {

    document
      .querySelectorAll(".bottom-nav a")
      .forEach(x => x.classList.remove("active"));

    btn.classList.add("active");

  });

});// ==========================
// Part 2
// ==========================

// Quick Cards

document.querySelectorAll(".quick-card").forEach(card => {

  card.addEventListener("click", () => {

    const title = card.querySelector("h3")?.innerText || "Tool";

    alert(title + " is coming soon 🚀");

  });

});

// Feature Cards

document.querySelectorAll(".feature-card").forEach(card => {

  card.addEventListener("click", () => {

    card.classList.toggle("glow-border");

  });

});

// Categories

document.querySelectorAll(".category").forEach(card => {

  card.addEventListener("click", () => {

    const title = card.querySelector("h3")?.innerText || "Category";

    alert("Opening " + title);

  });

});

// Trending

document.querySelectorAll(".trend-card").forEach(card => {

  card.addEventListener("click", () => {

    alert(card.innerText);

  });

});

// Recent Tools

document.querySelectorAll(".recent-card").forEach(card => {

  card.addEventListener("click", () => {

    card.classList.toggle("glow-border");

  });

});

// Coming Soon

document.querySelectorAll(".coming-card").forEach(card => {

  card.addEventListener("click", () => {

    alert("Coming Soon!");

  });

});

// Favorites

document.querySelectorAll(".favorite-card").forEach(card => {

  card.addEventListener("click", () => {

    card.classList.toggle("glow-border");

  });

});

// Notification Button

document.querySelector(".notify")?.addEventListener("click", () => {

  alert("🔔 No new notifications.");

});// ==========================
// Part 3
// ==========================

// Footer Year

const footer = document.querySelector("footer");

if (footer) {

  const year = document.createElement("p");

  year.textContent = "© " + new Date().getFullYear() + " XTra Tech";

  footer.appendChild(year);

}

// Welcome

window.addEventListener("load", () => {

  console.log("XTra Tech Loaded Successfully");

});

// Back To Top Button

const fab = document.querySelector(".fab");

window.addEventListener("scroll", () => {

  if (!fab) return;

  if (window.scrollY > 300) {

    fab.style.display = "flex";

  } else {

    fab.style.display = "";

  }

});

// Sidebar Links

document.querySelectorAll(".side-links a").forEach(link => {

  link.addEventListener("click", e => {

    e.preventDefault();

    closeSidebar();

  });

});
// Keyboard Shortcut

document.addEventListener("keydown", e => {

  if (e.key === "Escape") {

    closeSidebar();

  }

});

console.log("XTra Tech Ready 🚀");
