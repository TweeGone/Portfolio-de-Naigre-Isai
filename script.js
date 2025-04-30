window.onload = () => {
    alert("Bienvenue sur mon portfolio !");
};

// Tu peux ajouter d'autres effets plus tard ici
window.onload = () => {
    console.log("Portfolio chargé 🔥");
  };

  // Burger menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Active le sous-menu au clic sur mobile
const submenuTitle = document.querySelector('.submenu-title');
const hasSubmenu = document.querySelector('.has-submenu');

submenuTitle.addEventListener('click', () => {
  hasSubmenu.classList.toggle('active');
});

// Ajoute la classe "active" automatiquement sur le bon lien
const currentPage = window.location.pathname.split("/").pop(); // ex: portfolio.html
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.getAttribute("data-value");
        bar.style.width = value + "%";
        observer.unobserve(bar); // Lancer une fois seulement
      }
    });
  }, {
    threshold: 0.5
  });

  bars.forEach(bar => observer.observe(bar));
});

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.getAttribute("data-value");
        bar.style.width = value + "%";
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
});

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".circular-skill");

  skills.forEach(skill => {
    const circle = skill.querySelector(".circle");
    const valueText = skill.querySelector(".value");
    const percent = parseInt(skill.getAttribute("data-percent"));
    let current = 0;

    const interval = setInterval(() => {
      if (current <= percent) {
        valueText.textContent = current + "%";
        circle.style.background = `conic-gradient(#00e5ff ${current * 3.6}deg, #111 ${current * 3.6}deg)`;
        current++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => observer.observe(el));
});