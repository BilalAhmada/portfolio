document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  document.getElementById("year").textContent = new Date().getFullYear()

  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("section[id]")

  function updateActiveLink() {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", updateActiveLink)

  // Smooth scroll
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  })

  const cursorOrb = document.getElementById("cursorOrb")
  const heroVisual = document.querySelector(".hero-visual")

  if (cursorOrb && heroVisual) {
    document.addEventListener("mousemove", (e) => {
      const rect = heroVisual.getBoundingClientRect()
      const x = e.clientX - rect.left - 150
      const y = e.clientY - rect.top - 150

      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        cursorOrb.style.transform = `translate(${x}px, ${y}px)`
        cursorOrb.style.opacity = "0.25"
      } else {
        cursorOrb.style.opacity = "0.15"
      }
    })
  }

 const resumeButtons = document.querySelectorAll("#resumeBtn, #resumeBtn2, #resumeBtn3");
resumeButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "cv.pdf"; // make sure file name matches exactly
    link.download = "Bilal_Ahmad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


  // Contact form submission
  const form = document.getElementById("contactForm")
  const msg = document.getElementById("formMsg")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      msg.textContent = "Message sent successfully! I'll get back to you soon."
      msg.style.color = "var(--accent-green)"
      form.reset()

      setTimeout(() => {
        msg.textContent = ""
      }, 5000)
    })
  }
})
// HAMBURGER MENU TOGGLE
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("show");
  });
});
