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

  const resumeButtons = document.querySelectorAll("#resumeBtn, #resumeBtn2")
  resumeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      // Replace with your actual resume file path
      const link = document.createElement("a")
      link.href = "path/to/your/resume.pdf"
      link.download = "Bilal_Ahmad_Resume.pdf"
      link.click()
    })
  })

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

  const skillSections = document.querySelectorAll(".skill-section")
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideInUp 0.6s ease-out forwards"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  skillSections.forEach((section, index) => {
    section.style.opacity = "0"
    observer.observe(section)
  })

  window.openModal = (src, alt) => {
    const modal = document.getElementById("imageModal")
    const modalImg = document.getElementById("modalImage")
    const captionText = document.getElementById("modalCaption")
    modal.style.display = "block"
    modalImg.src = src
    captionText.innerHTML = alt
    document.body.style.overflow = "hidden"
  }

  window.closeModal = () => {
    const modal = document.getElementById("imageModal")
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }

  // Close modal when clicking outside the image
  const modal = document.getElementById("imageModal")
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        window.closeModal()
      }
    })
  }

  // Close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      window.closeModal()
    }
  })
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

