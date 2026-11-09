const districtData = {
  movies: [
    {
      id: "m1",
      title: "Project Hail Mary (IMAX Premiere)",
      venue: "PVR Superplex • Vegas Mall, Dwarka, Delhi",
      date: "Nov 21, 2026 • 7:45 PM",
      price: "₹750",
      image: "assets/movie_1.jpeg",
      shortDesc: "Andy Weir's interstellar odyssey premiering in IMAX laser 3D with uncompressed audio.",
      detailDesc: "An exclusive sci-fi IMAX premiere experience adapted from Andy Weir's interstellar bestselling epic. Witness the voyage of Ryland Grace with immersive uncompressed multi-channel sound."
    },
    {
      id: "m2",
      title: "Nausicaä of the Valley of the Wind",
      venue: "India Habitat Centre • Lodhi Road, New Delhi",
      date: "Nov 27, 2026 • 6:30 PM",
      price: "₹450",
      image: "assets/movie_2.jpeg",
      shortDesc: "Hayao Miyazaki's ecological anime masterpiece in a restored 35mm optical print.",
      detailDesc: "Hayao Miyazaki's breathtaking post-apocalyptic anime screened in pristine, restored 35mm optical audio-visual print with English subtitles in an intimate amphitheatre setting."
    },
    {
      id: "m3",
      title: "Interstellar: 70mm Special Screening",
      venue: "PVR Priya • Basant Lok, Vasant Vihar",
      date: "Dec 05, 2026 • 9:00 PM",
      price: "₹650",
      image: "assets/movie_3.jpeg",
      shortDesc: "Christopher Nolan's gravitational voyage presented on legacy wide projection.",
      detailDesc: "Experience the monumental organ score of Hans Zimmer and Nolan's black hole journey on Delhi NCR's premier legacy wide-format cinema projection screen."
    }
  ],
  events: [
    {
      id: "e1",
      title: "Cherry Blossom Festival, Shillong",
      venue: "RBDSA Sports Complex • Madan Kurkalang, Shillong",
      date: "Nov 15 - 17, 2026 • Gates Open 1:00 PM",
      price: "₹1,999",
      image: "assets/event_1.jpeg",
      shortDesc: "Headline music fest featuring Boney M, Akon, DJ Lucas, Jasleen Royal & indie acts.",
      detailDesc: "India's landmark autumn music festival set beneath blooming cherry blossom canopies. Featuring legendary Euro-disco icons Boney M, global R&B icon Akon, DJ Lucas, Jasleen Royal, and indigenous indie stages."
    },
    {
      id: "e2",
      title: "Mood Indigo ft. Jeremy Zucker",
      venue: "Gymkhana Grounds • IIT Bombay, Powai, Mumbai",
      date: "Dec 18 - 21, 2026 • 5:00 PM onwards",
      price: "₹499 (Students Only)",
      image: "assets/event_2.jpeg",
      shortDesc: "Asia's largest cultural fest. Registrations open now for college students with valid ID.",
      detailDesc: "Asia's premier collegiate cultural spectacle headlined by Jeremy Zucker live in concert! College student registration open now — valid institutional college ID required for campus festival entry passes."
    },
    {
      id: "e3",
      title: "Comedy Nights @ Comedy County",
      venue: "Comedy County Club • Sector 29, Gurgaon",
      date: "Dec 04, 2026 • 8:30 PM",
      price: "₹599",
      image: "assets/event_3.jpeg",
      shortDesc: "Intimate late-night stand-up room with top NCR comic headliners testing new material.",
      detailDesc: "A raw, uncensored standup comedy club in Sector 29 featuring veteran NCR headliners trying brand new bits. Intimate table seating with complimentary beverages."
    },
    {
      id: "e4",
      title: "Studio Clay & Terracotta Workshop",
      venue: "The Clay Company • Shahpur Jat, New Delhi",
      date: "Dec 06, 2026 • 11:30 AM",
      price: "₹1,200",
      image: "assets/event_4.jpeg",
      shortDesc: "Hands-on pottery wheel throwing, surface sculpting, glazing & kiln firing masterclass.",
      detailDesc: "Get your hands dirty learning tactile ceramic sculpture, potter's wheel centering, and bespoke surface glazing under master artisans in Shahpur Jat."
    },
    {
      id: "e5",
      title: "Godawan Durbar Evenings",
      venue: "Sunder Nursery Amphitheatre • Nizamuddin, New Delhi",
      date: "Dec 12, 2026 • 7:00 PM",
      price: "₹1,500",
      image: "assets/event_5.jpeg",
      shortDesc: "The Orchestral Qawwali Project live in concert beneath starlit heritage monuments.",
      detailDesc: "An enchanting winter night with The Orchestral Qawwali Project live in Delhi. A timeless spiritual symphony weaving authentic sufi poetry with a 24-piece string orchestra under illuminated Mughal monuments."
    }
  ],
  diner: [
    {
      id: "d1",
      title: "Baag: Neo-Indian Tasting Room",
      venue: "Mehrauli Qutub Complex • New Delhi",
      date: "Reservations Open • 7:30 PM & 9:30 PM",
      price: "₹2,800",
      image: "assets/diner_1.jpeg",
      shortDesc: "Progressive Indian tasting menu paired with regional fermentations overlooking Qutub Minar.",
      detailDesc: "Modern progressive Indian gastronomy featuring fermentation bars, smoked malai prints, and regional heirloom grain courses overlooking the Qutub Minar."
    },
    {
      id: "d2",
      title: "Kaze Omakase (50% Off Debut)",
      venue: "Horizon Plaza • Golf Course Road, Gurgaon",
      date: "Limited Weekday Drop • 1:00 PM & 8:00 PM",
      price: "₹1,950",
      image: "assets/diner_2.jpeg",
      shortDesc: "12-piece chef curated nigiri, bluefin otoro, scallop & binchotan wagyu.",
      detailDesc: "Half-off launch special: 12-piece chef curated nigiri, bluefin otoro, Hokkaido scallop, and binchotan-seared wagyu flown in fresh from Tokyo's Toyosu Market."
    },
    {
      id: "d3",
      title: "Slow Sunday: Coffee & Crochet",
      venue: "Champa Gali • Saidulajab, Saket, New Delhi",
      date: "Sundays • 10:30 AM - 2:00 PM",
      price: "₹850",
      image: "assets/diner_3.jpeg",
      shortDesc: "Single-origin pour-overs paired with beginner yarn crochet craft kits and pastries.",
      detailDesc: "Pour-over specialty roasts paired with beginner yarn crochet kits, warm butter croissants, and relaxed community craft tables in the heart of Champa Gali."
    }
  ],
  travel: [
    {
      id: "t1",
      title: "7 Days in Bora Bora Lagoon",
      venue: "Departures from IGI Terminal 3, New Delhi",
      date: "Dec 18 - 25, 2026 (7 Days)",
      price: "₹1,45,000",
      image: "assets/travel_1.jpeg",
      shortDesc: "Overwater coral bungalows, reef shark snorkels, private catamarans & island voyages.",
      detailDesc: "Full luxury island escape: overwater bungalows, private catamaran reef snorkels, Polynesian outrigger breakfasts, and turquoise lagoon relaxation."
    },
    {
      id: "t2",
      title: "Blue City Royals: Jodhpur Retreat",
      venue: "Mehrangarh Footsteps • Jodhpur, Rajasthan",
      date: "Dec 11 - 14, 2026 (4 Days)",
      price: "₹14,500",
      image: "assets/travel_2.jpeg",
      shortDesc: "Heritage haveli residency, desert midnight fort walks & authentic Marwari thalis.",
      detailDesc: "Heritage haveli residency, midnight fort walks, desert gypsy acoustic jams, and authentic Marwari thalis through the cobalt lanes of the Blue City."
    },
    {
      id: "t3",
      title: "Pine Whispers: Dalhousie Escape",
      venue: "Himachal Express from New Delhi Railway Station",
      date: "Dec 28 - Jan 01, 2027 (5 Days)",
      price: "₹12,800",
      image: "assets/travel_3.jpeg",
      shortDesc: "Snow-dusted cedar forests, cozy bonfire lodge seatings & Dainkund peak hikes.",
      detailDesc: "Snow-dusted cedar forests, cozy bonfire lodge seatings, Dainkund peak hikes, and vintage colonial bakery trails in the Himalayas."
    }
  ]
};

const carouselIndices = {
  movies: 0,
  events: 0,
  diner: 0,
  travel: 0
};

// Resilient image fallback: .jpeg -> .jpg -> .png
window.handleImgError = function(img) {
  if (img.dataset.fallbackTried === "1") {
    if (img.src.includes(".jpeg")) {
      img.src = img.src.replace(".jpeg", ".jpg");
    } else if (img.src.includes(".jpg")) {
      img.src = img.src.replace(".jpg", ".png");
    } else {
      img.src = img.src.replace(".png", "");
    }
    img.dataset.fallbackTried = "2";
  } else if (img.dataset.fallbackTried === "2") {
    if (img.src.includes(".jpg")) {
      img.src = img.src.replace(".jpg", ".png");
    } else {
      img.src = img.src.split(".")[0];
    }
    img.dataset.fallbackTried = "3";
  } else {
    img.dataset.fallbackTried = "1";
    if (img.src.includes(".jpeg")) {
      img.src = img.src.replace(".jpeg", ".jpg");
    } else if (img.src.includes(".jpg")) {
      img.src = img.src.replace(".jpg", ".png");
    } else {
      img.src = img.src + ".jpeg";
    }
  }
};

function navigateTo(sceneName) {
  const scenes = document.querySelectorAll(".scene");
  const targetScene = document.getElementById(`scene-${sceneName}`);

  scenes.forEach(scene => {
    if (scene.classList.contains("active") && scene !== targetScene) {
      scene.classList.remove("active");
      scene.classList.add("exit-left");
      setTimeout(() => scene.classList.remove("exit-left"), 450);
    }
  });

  if (targetScene) {
    targetScene.classList.add("active");
    if (sceneName === "home") {
      document.body.classList.remove("in-subpage");
    } else {
      document.body.classList.add("in-subpage");
    }
  }
}

function nextItem(category) {
  const list = districtData[category];
  carouselIndices[category] = (carouselIndices[category] + 1) % list.length;
  renderCarouselItem(category);
}

function prevItem(category) {
  const list = districtData[category];
  carouselIndices[category] = (carouselIndices[category] - 1 + list.length) % list.length;
  renderCarouselItem(category);
}

function renderCarouselItem(category) {
  const container = document.getElementById(`carousel-${category}`);
  if (!container) return;
  const item = districtData[category][carouselIndices[category]];

  if (category === "movies") {
    container.innerHTML = `
      <div class="district-card-shell film-reel-card">
        <div class="film-perforations"></div>
        <div class="card-grid-split grid-movies">
          <div class="media-box film-media-box">
            <img src="${item.image}" alt="${item.title}" onerror="handleImgError(this)" />
          </div>
          <div class="details-col">
            <div>
              <h3 class="item-main-title">${item.title}</h3>
              <p class="item-venue-line"><i class="fa-solid fa-location-dot"></i> ${item.venue}</p>
              <p class="item-date-line"><i class="fa-regular fa-clock"></i> ${item.date}</p>
              <p class="item-short-desc">${item.shortDesc}</p>
            </div>
            <button class="btn-book-full" onclick="openBookingModal('${category}', '${item.id}')">Book Pass (${item.price})</button>
          </div>
        </div>
        <div class="film-perforations bottom"></div>
      </div>
    `;
  } else if (category === "events") {
    container.innerHTML = `
      <div class="district-card-shell poster-card">
        <div class="card-grid-split grid-events">
          <div class="media-box">
            <img src="${item.image}" alt="${item.title}" onerror="handleImgError(this)" />
          </div>
          <div class="details-col">
            <div>
              <h3 class="item-main-title">${item.title}</h3>
              <p class="item-venue-line"><i class="fa-solid fa-location-dot"></i> ${item.venue}</p>
              <p class="item-date-line"><i class="fa-regular fa-clock"></i> ${item.date}</p>
              <p class="item-short-desc">${item.shortDesc}</p>
            </div>
            <button class="btn-book-full" onclick="openBookingModal('${category}', '${item.id}')">Book Pass (${item.price})</button>
          </div>
        </div>
      </div>
    `;
  } else if (category === "diner") {
    container.innerHTML = `
      <div class="district-card-shell menu-card">
        <div class="card-grid-split grid-standard">
          <div class="media-box">
            <img src="${item.image}" alt="${item.title}" onerror="handleImgError(this)" />
          </div>
          <div class="details-col">
            <div>
              <h3 class="item-main-title">${item.title}</h3>
              <p class="item-venue-line"><i class="fa-solid fa-utensils"></i> ${item.venue}</p>
              <p class="item-date-line"><i class="fa-regular fa-clock"></i> ${item.date}</p>
              <p class="item-short-desc">${item.shortDesc}</p>
            </div>
            <button class="btn-book-full" onclick="openBookingModal('${category}', '${item.id}')">Reserve Seat (${item.price})</button>
          </div>
        </div>
      </div>
    `;
  } else if (category === "travel") {
    container.innerHTML = `
      <div class="district-card-shell postcard">
        <div class="postmark-stamp">AIR MAIL<br>EXPEDITION</div>
        <div class="card-grid-split grid-standard">
          <div class="media-box">
            <img src="${item.image}" alt="${item.title}" onerror="handleImgError(this)" />
          </div>
          <div class="details-col">
            <div>
              <h3 class="item-main-title">${item.title}</h3>
              <p class="item-venue-line"><i class="fa-solid fa-compass"></i> ${item.venue}</p>
              <p class="item-date-line"><i class="fa-regular fa-clock"></i> ${item.date}</p>
              <p class="item-short-desc">${item.shortDesc}</p>
            </div>
            <button class="btn-book-full" onclick="openBookingModal('${category}', '${item.id}')">Book Trip (${item.price})</button>
          </div>
        </div>
      </div>
    `;
  }
}

// Single Consolidated Booking Action
function openBookingModal(category, itemId) {
  const item = districtData[category].find(x => x.id === itemId);
  if (!item) return;

  const modal = document.getElementById("detailModal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `
    <h2 style="font-family:var(--font-display); font-size:1.85rem; margin:0.2rem 0 0.8rem; word-break:break-word;">${item.title}</h2>
    <img src="${item.image}" style="width:100%; height:200px; object-fit:cover; border-radius:10px; border:2.5px solid var(--dark-border); margin-bottom:1rem;" onerror="handleImgError(this)">
    <p style="font-size:0.92rem; color:#334155; margin-bottom:1.2rem; line-height:1.55;">${item.detailDesc}</p>
    
    <div style="background:#f8fafc; border:2px dashed var(--dark-border); padding:0.85rem; border-radius:6px; margin-bottom:1.4rem; font-family:var(--font-mono); font-size:0.85rem; line-height:1.6;">
      <div><strong>Date/Timing:</strong> ${item.date}</div>
      <div><strong>Venue / Hub:</strong> ${item.venue}</div>
      <div><strong>Entry / Tariff:</strong> <span style="color:var(--coral-accent); font-weight:800;">${item.price}</span></div>
    </div>

    <h3 style="font-family:var(--font-display); font-size:1.2rem; margin-bottom:0.8rem;">Confirm Guest Pass</h3>
    <form id="passBookingForm" novalidate>
      <div class="form-field">
        <label>Your Full Name</label>
        <input type="text" id="custName" placeholder="e.g. Ekantika Kumari" required>
        <div class="field-error" id="nameErr">Enter a valid name (min 3 characters).</div>
      </div>
      <div class="form-field">
        <label>Email Address</label>
        <input type="email" id="custEmail" placeholder="e.g. example@skyline.com" required>
        <div class="field-error" id="emailErr">Enter a valid email address.</div>
      </div>
      <div class="form-field">
        <label>Mobile Number</label>
        <input type="tel" id="custPhone" placeholder="10-digit mobile number" required>
        <div class="field-error" id="phoneErr">Enter a valid 10-digit phone number.</div>
      </div>
      <button type="submit" class="btn-book-full" style="font-size:0.95rem; padding:0.85rem;">Generate Digital Pass (${item.price})</button>
    </form>
  `;

  modal.classList.add("active");

  document.getElementById("passBookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("custName").value.trim();
    const email = document.getElementById("custEmail").value.trim();
    const phone = document.getElementById("custPhone").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    let valid = true;

    if (name.length < 3) {
      document.getElementById("nameErr").style.display = "block";
      valid = false;
    } else {
      document.getElementById("nameErr").style.display = "none";
    }

    if (!emailRegex.test(email)) {
      document.getElementById("emailErr").style.display = "block";
      valid = false;
    } else {
      document.getElementById("emailErr").style.display = "none";
    }

    if (!phoneRegex.test(phone)) {
      document.getElementById("phoneErr").style.display = "block";
      valid = false;
    } else {
      document.getElementById("phoneErr").style.display = "none";
    }

    if (valid) {
      let passes = [];
      try {
        passes = JSON.parse(localStorage.getItem("metro_passes") || "[]");
      } catch (err) {
        passes = [];
      }

      passes.push({
        title: item.title,
        venue: item.venue,
        date: item.date,
        price: item.price,
        custName: name,
        bookedAt: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      });
      localStorage.setItem("metro_passes", JSON.stringify(passes));
      
      closeDetails();
      updateWalletBadge();
      showToast(`🎟️ Pass confirmed for ${name}! Check My Passes.`);
    }
  });
}

function closeDetails() {
  const modal = document.getElementById("detailModal");
  if (modal) modal.classList.remove("active");
}

function toggleWallet(open) {
  const walletDrawer = document.getElementById("walletDrawer");
  const drawerScrim = document.getElementById("drawerScrim");
  if (!walletDrawer) return;

  if (open) {
    renderPasses();
    walletDrawer.classList.add("open");
    if (drawerScrim) drawerScrim.classList.add("active");
  } else {
    walletDrawer.classList.remove("open");
    if (drawerScrim) drawerScrim.classList.remove("active");
  }
}

function updateWalletBadge() {
  try {
    const passes = JSON.parse(localStorage.getItem("metro_passes") || "[]");
    const countEl = document.getElementById("walletCount");
    if (countEl) countEl.textContent = Array.isArray(passes) ? passes.length : 0;
  } catch (err) {
    const countEl = document.getElementById("walletCount");
    if (countEl) countEl.textContent = "0";
  }
}

function renderPasses() {
  const list = document.getElementById("walletList");
  if (!list) return;

  let passes = [];
  try {
    passes = JSON.parse(localStorage.getItem("metro_passes") || "[]");
  } catch (e) {
    passes = [];
  }

  if (passes.length === 0) {
    list.innerHTML = `
      <div style="text-align:center; padding-top:3rem;">
        <i class="fa-solid fa-ticket-simple" style="font-size:2.2rem; color:#cbd5e1; margin-bottom:1rem; display:block;"></i>
        <p style="color:#94a3b8; font-size:0.9rem; font-family:var(--font-mono);">No active passes found.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = passes.map((p, index) => `
    <div class="pass-ticket">
      <div class="pass-ticket-title">${p.title}</div>
      <div class="pass-ticket-meta"><i class="fa-solid fa-location-dot"></i> ${p.venue}</div>
      <div class="pass-ticket-meta"><i class="fa-regular fa-clock"></i> ${p.date} • ${p.price || ''}</div>
      <div style="font-size:0.75rem; color:var(--coral-accent); font-weight:700; margin-top:6px;">PASS HOLDER: ${p.custName.toUpperCase()}</div>
      
      <div class="pass-ticket-actions">
        <button class="btn-cancel-pass" onclick="cancelPass(${index})">
          <i class="fa-solid fa-trash-can"></i> Cancel Reservation
        </button>
      </div>
    </div>
  `).join("");
}

// Remove pass by index from localStorage
window.cancelPass = function(index) {
  try {
    let passes = JSON.parse(localStorage.getItem("metro_passes") || "[]");
    if (index >= 0 && index < passes.length) {
      const removed = passes.splice(index, 1)[0];
      localStorage.setItem("metro_passes", JSON.stringify(passes));
      
      renderPasses();
      updateWalletBadge();
      showToast(`Cancelled reservation for ${removed.title.split(":")[0]}`);
    }
  } catch (e) {
    console.error("Failed to cancel pass:", e);
  }
};

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

window.openInfoModal = function(type) {
  const modal = document.getElementById("detailModal");
  const body = document.getElementById("modalBody");
  if (!modal || !body) return;

  if (type === "info") {
    body.innerHTML = `
      <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--coral-accent); font-weight:700;">// PROJECT INFORMATION</div>
      <h2 style="font-family:var(--font-display); font-size:1.8rem; margin:0.4rem 0 1rem;">K-Explore Web Designing</h2>
      <div style="background:#f8fafc; border:2px dashed var(--dark-border); padding:1.2rem; border-radius:8px; margin-bottom:1.5rem; font-family:var(--font-mono); font-size:0.9rem; line-height:1.7;">
        <div><strong>Student Name:</strong> Ekantika Kumari</div>
        <div><strong>Roll Number:</strong> 24155625</div>
        <div><strong>Project Title:</strong> SKYLINE — Responsive Event Hub</div>
      </div>
      <button class="btn-book-full" style="width:100%;" onclick="closeDetails()">Close</button>
    `;
  } else if (type === "faq") {
    body.innerHTML = `
      <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--coral-accent); font-weight:700;">// PLATFORM FAQS</div>
      <h2 style="font-family:var(--font-display); font-size:1.8rem; margin:0.4rem 0 1rem;">Frequently Asked Questions</h2>
      <div style="font-size:0.9rem; line-height:1.6; color:#334155; margin-bottom:1.5rem;">
        <p style="margin-bottom:0.8rem;"><strong>How do I browse events?</strong><br>Select any of the 4 district signposts (Travel, Diners, Movies, or Events) on the main street pole.</p>
        <p style="margin-bottom:0.8rem;"><strong>Are bookings saved?</strong><br>Yes. Every pass booked during your session is validated and stored client-side in localStorage.</p>
        <p><strong>Where can I view my registered tickets?</strong><br>Click 'MY PASSES' in the top right at any time to open your pass wallet.</p>
      </div>
      <button class="btn-book-full" style="width:100%;" onclick="closeDetails()">Close</button>
    `;
  }

  modal.classList.add("active");
};

function updateDispatchFeed() {
  const now = new Date();
  const hours = now.getHours();
  
  let greeting = "GOOD EVENING";
  if (hours >= 5 && hours < 12) greeting = "GOOD MORNING";
  else if (hours >= 12 && hours < 17) greeting = "GOOD AFTERNOON";
  else if (hours >= 22 || hours < 5) greeting = "NIGHT PULSE";

  const greetingEl = document.getElementById("liveGreeting");
  const clockEl = document.getElementById("liveClock");
  const dateEl = document.getElementById("liveDate");

  if (greetingEl) greetingEl.textContent = greeting;
  if (clockEl) clockEl.textContent = now.toLocaleTimeString([], { hour12: false });
  if (dateEl) {
    const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
    dateEl.textContent = now.toLocaleDateString(undefined, options).toUpperCase();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".board-hotspot").forEach(btn => {
    const targetId = btn.getAttribute("data-target");
    const fxImg = document.getElementById(targetId);

    if (fxImg) {
      btn.addEventListener("mouseenter", () => fxImg.classList.add("active"));
      btn.addEventListener("mouseleave", () => fxImg.classList.remove("active"));
    }
  });

  const titleHitbox = document.getElementById("titleHitbox");
  const titleShader = document.getElementById("titleShader");

  if (titleHitbox && titleShader) {
    titleHitbox.addEventListener("mouseenter", () => titleShader.classList.add("active"));
    titleHitbox.addEventListener("mousemove", (e) => {
      titleShader.style.setProperty("--mouse-x", `${e.clientX}px`);
      titleShader.style.setProperty("--mouse-y", `${e.clientY}px`);
    });
    titleHitbox.addEventListener("mouseleave", () => titleShader.classList.remove("active"));
  }

  // Click Outside to Dismiss Modal Overlay
  const modalOverlay = document.getElementById("detailModal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeDetails();
      }
    });
  }

  // Wallet Toggle and Click Outside
  const walletBtn = document.getElementById("walletBtn");
  const walletDrawer = document.getElementById("walletDrawer");

  if (walletBtn && walletDrawer) {
    walletBtn.addEventListener("click", () => {
      const isOpen = walletDrawer.classList.contains("open");
      toggleWallet(!isOpen);
    });

    document.addEventListener("click", (e) => {
      if (!walletDrawer.classList.contains("open")) return;
      if (!walletDrawer.contains(e.target) && !walletBtn.contains(e.target)) {
        toggleWallet(false);
      }
    });
  }

  updateDispatchFeed();
  setInterval(updateDispatchFeed, 1000);

  ["movies", "events", "diner", "travel"].forEach(renderCarouselItem);
  updateWalletBadge();
});