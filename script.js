const REWOF_WHATSAPP_NUMBER = "91XXXXXXXXXX";
const REWOF_EMAIL = "rewof.business@gmail.com";

function openWhatsApp(message) {
  if (REWOF_WHATSAPP_NUMBER.includes("X")) {
    return false;
  }

  const url = `https://wa.me/${REWOF_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = `mailto:${REWOF_EMAIL}`;
    emailLink.textContent = REWOF_EMAIL;
  }

  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 })
    : null;

  document.querySelectorAll(".reveal").forEach((el) => {
    if (observer) {
      observer.observe(el);
    } else {
      el.classList.add("visible");
    }
  });

  document.querySelectorAll("[data-package]").forEach((link) => {
    link.addEventListener("click", () => {
      const packageField = document.getElementById("package");
      if (packageField) {
        const preferred = link.dataset.package;
        const match = [...packageField.options].find((option) => {
          return option.text.toLowerCase().includes(preferred.toLowerCase());
        });
        if (match) {
          packageField.value = match.value;
        }
      }
    });
  });

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const business = String(data.get("business") || "").trim();
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const businessType = String(data.get("businessType") || "").trim();
      const selectedPackage = String(data.get("package") || "").trim();
      const budget = String(data.get("budget") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !business || !email || !phone || !businessType || !selectedPackage || !budget || !message) {
        if (status) {
          status.textContent = "Please complete all required fields before sending your enquiry.";
          status.style.color = "#ffb5b5";
        }
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (status) {
          status.textContent = "Please enter a valid email address.";
          status.style.color = "#ffb5b5";
        }
        return;
      }

      const text = [
        "Hello Rewof Business Studio! I would like to enquire about a website.",
        "",
        `Name: ${name}`,
        `Business: ${business}`,
        `Business type: ${businessType}`,
        `Package: ${selectedPackage}`,
        `Budget: ${budget}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Message: ${message}`
      ].join("\n");

      if (REWOF_WHATSAPP_NUMBER.includes("X")) {
        if (status) {
          status.textContent = "Setup needed: add your WhatsApp number in script.js, then this form will open WhatsApp with the enquiry ready to send.";
          status.style.color = "#ffd59a";
        }
        return;
      }

      if (openWhatsApp(text)) {
        if (status) {
          status.textContent = "WhatsApp opened with your enquiry. Please review and send it.";
          status.style.color = "#9be7a9";
        }
      } else {
        if (status) {
          status.textContent = "The WhatsApp number is not configured yet. Please update it in script.js.";
          status.style.color = "#ffd59a";
        }
      }
    });
  }

  const floating = document.getElementById("floatingWhatsApp");
  if (floating) {
    floating.addEventListener("click", (event) => {
      const message = "Hello Rewof Business Studio! I would like to discuss a website for my business.";
      if (REWOF_WHATSAPP_NUMBER.includes("X")) {
        event.preventDefault();
        const contact = document.getElementById("contact");
        if (contact) {
          contact.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      event.preventDefault();
      openWhatsApp(message);
    });
  }
});
