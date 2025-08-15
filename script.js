const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (galleryImages.length > 0) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });
}

function closeLightbox() {
  lightbox.style.display = "none";
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });
}


async function getQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    document.getElementById("quoteText").textContent = data.content;
  } catch {
    document.getElementById("quoteText").textContent = "Could not load quote.";
  }
}
if (document.getElementById("newQuote")) {
  document.getElementById("newQuote").addEventListener("click", getQuote);
  getQuote();
}


const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msgBox = document.getElementById("formMessage");

    if (name && email.includes("@") && message.length > 5) {
      msgBox.textContent = "✅ Message sent successfully!";
      msgBox.style.color = "green";
    } else {
      msgBox.textContent = "❌ Please fill in all fields correctly.";
      msgBox.style.color = "red";
    }
  });
}


const goals = ["Learn HTML & CSS", "Understand JavaScript", "Build real-world projects"];
const goalList = document.getElementById("goalList");
if (goalList) {
  goals.forEach(g => {
    const li = document.createElement("li");
    li.textContent = g;
    goalList.appendChild(li);
  });
}


const skillsChartEl = document.getElementById("skillsChart");
if (skillsChartEl) {
  new Chart(skillsChartEl, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript'],
      datasets: [{
        label: 'Skill Level (%)',
        data: [90, 80, 60],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: 100 } }
    }
  });
}
