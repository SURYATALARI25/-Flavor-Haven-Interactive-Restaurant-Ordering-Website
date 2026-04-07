
const menu = [
  {
    section: "🐔 Non-Veg Starters", items: [
      { name: "Chicken 65", price: 280, type: "non-veg", category: "Starter", prep: "20 mins", serves: "1–2", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=700&h=400&fit=crop", desc: "Spicy deep-fried chicken chunks marinated with curry leaves, ginger, garlic and red chilies. Served with onion rings and mint chutney. A classic South Indian favourite that is crispy on the outside and juicy inside." },
      { name: "Fish Fry", price: 320, type: "non-veg", category: "Starter", prep: "25 mins", serves: "1–2", img: "images/fish fry.jpg ", desc: "Fresh fish marinated with special spices and shallow fried to golden perfection. Served with lemon wedges and house tartar sauce. Crispy coating seals in all the natural flavours of the fish." },
      { name: "Prawns 555", price: 450, type: "non-veg", category: "Starter", prep: "20 mins", serves: "1–2", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=700&h=400&fit=crop", desc: "Tiger prawns stir-fried with garlic, curry leaves, and special house masala. Crispy, flavorful, and irresistible with every bite. Best enjoyed piping hot straight from the wok." }
    ]
  },
  {
    section: "🥗 Veg Starters", items: [
      { name: "Paneer Tikka", price: 260, type: "veg", category: "Starter", prep: "30 mins", serves: "1–2", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&h=400&fit=crop", desc: "Cottage cheese cubes marinated in yogurt and aromatic spices, grilled to smoky perfection in a traditional tandoor. Served with mint chutney and sliced onions." },
      { name: "Mushroom Fry", price: 220, type: "veg", category: "Starter", prep: "15 mins", serves: "1–2", img: "images/mushroom fry.jpg", desc: "Button mushrooms tossed with onions, capsicum, and south Indian spices. Served piping hot with a sprinkle of lemon juice. Earthy flavours elevated with the perfect blend of masala." },
      { name: "Gobi 65", price: 210, type: "veg", category: "Starter", prep: "20 mins", serves: "1–2", img: "images/gobi 65.jpg", desc: "Crispy cauliflower florets marinated with yogurt, spices and deep-fried till golden brown. A vegetarian twist on the legendary 65 style — addictive and delicious." }
    ]
  },
  {
    section: "🍛 Non-Veg Biryanis", items: [
      { name: "Chicken Biryani", price: 320, type: "non-veg", category: "Biryani", prep: "40 mins", serves: "1", img: "images/chicken biryani.jpg", desc: "Aromatic basmati rice cooked with tender chicken pieces, saffron, and authentic biryani spices. Slow-cooked in sealed dum style for maximum aroma. Served with raita and brinjal gravy." },
      { name: "Mutton Biryani", price: 420, type: "non-veg", category: "Biryani", prep: "55 mins", serves: "1", img: "images/mutton biryani.jpg", desc: "Slow-cooked mutton with fragrant basmati rice, layered with golden fried onions, fresh mint and traditional whole spices. Our signature dish — rich, royal, and deeply satisfying." },
      { name: "Prawns Biryani", price: 360, type: "non-veg", category: "Biryani", prep: "40 mins", serves: "1", img: "images/prawns biryani.jpg", desc: "Dive into the rich, flavorful world of our Signature Prawn Biryani. Juicy prawns layered with saffron-infused basmati rice, caramelised onions and coastal spices." }
    ]
  },
  {
    section: "🌿 Veg Biryanis", items: [
      { name: "Veg Biryani", price: 260, type: "veg", category: "Biryani", prep: "35 mins", serves: "1", img: "images/veg biryani.jpg", desc: "Fresh seasonal vegetables cooked with basmati rice, whole spices, saffron and yogurt. A colourful, aromatic celebration of garden goodness. Served with cool raita." },
      { name: "Paneer Biryani", price: 300, type: "veg", category: "Biryani", prep: "35 mins", serves: "1", img: "images/paneer biryani.jpg", desc: "Succulent paneer cubes layered with fragrant basmati rice, aromatic spices and finished with saffron strands. Indulgent, creamy and utterly satisfying." },
      { name: "Mushroom Biryani", price: 280, type: "veg", category: "Biryani", prep: "40 mins", serves: "1", img: "images/mushroom biryani.jpg", desc: "Mixed vegetables slow-cooked in a sealed pot (dum) with basmati rice and authentic whole spices. The sealed dum technique traps steam and aroma for an unmatched flavour experience." }
    ]
  },
  {
    section: "🍦 Ice Creams", items: [
      { name: "Vanilla Scoop", price: 120, type: "veg", category: "Dessert", prep: "5 mins", serves: "1", img: "images/venila scoop.jpg", desc: "Premium vanilla ice cream made with Madagascar vanilla beans. Creamy, smooth and rich — the timeless classic that never disappoints. Served in a chilled glass bowl." },
      { name: "Chocolate Scoop", price: 130, type: "veg", category: "Dessert", prep: "5 mins", serves: "1", img: "images/chocolate scoop.jpg", desc: "Intense dark chocolate ice cream with Belgian chocolate chunks folded in. Decadently rich and deeply satisfying for every chocolate lover." },
      { name: "Mango Scoop", price: 140, type: "veg", category: "Dessert", prep: "5 mins", serves: "1", img: "images/mangoo scoop.jpg", desc: "Fresh Alphonso mango ice cream with real mango pulp swirled in. Tropical, refreshing and bursting with the king of fruits in every bite." }
    ]
  },
  {
    section: "🥤 Milkshakes", items: [
      { name: "Oreo Shake", price: 160, type: "veg", category: "Beverage", prep: "8 mins", serves: "1", img:"images/orio shake.jpg", desc: "Creamy vanilla milkshake blended with crushed Oreo cookies and topped with whipped cream and a whole Oreo. Thick, sweet and absolutely indulgent." },
      { name: "Chocolate Shake", price: 150, type: "veg", category: "Beverage", prep: "8 mins", serves: "1", img: "images/chocolate shake.jpg", desc: "Rich chocolate milkshake made with premium cocoa, fresh milk and a scoop of chocolate ice cream. Thick, satisfying and deeply chocolatey in every sip." },
      { name: "Mango Shake", price: 155, type: "veg", category: "Beverage", prep: "8 mins", serves: "1", img: "images/mango shake.jpg", desc: "Refreshing mango milkshake made with fresh Alphonso mango pulp, chilled milk and a hint of cardamom. Perfect summer cooler — sweet, thick and fruity." },
      { name: "Banana Shake", price: 145, type: "veg", category: "Beverage", prep: "8 mins", serves: "1", img: "images/banana shake.jpg", desc: "Creamy banana milkshake made with ripe bananas, chilled milk and a scoop of vanilla ice cream. Smooth, naturally sweet and utterly comforting." },
      { name: "Strawberry Shake", price: 150, type: "veg", category: "Beverage", prep: "8 mins", serves: "1", img: "images/strawberry shake.jpg", desc: "Sweet and creamy strawberry milkshake made with fresh strawberries, chilled milk and a scoop of strawberry ice cream. Fruity, refreshing and perfect for any time of the year." },
      { name: "Cold Coffee", price: 140, type: "veg", category: "Beverage", prep: "8 mins", serves: "1", img: "images/cold coffee.jpg", desc: "Iced coffee} made with freshly brewed coffee, chilled milk and a scoop of vanilla ice cream. Sweetened to perfection and topped with whipped cream for the ultimate coffee indulgence." }

    ]
  }
];

let currentItem = null;
let selectedPayment = null;

function buildMenu() {
  const container = document.getElementById('menu-sections');
  menu.forEach(sec => {
    const section = document.createElement('div');
    section.className = 'menu-section';
    section.innerHTML = `<h2 class="section-title">${sec.section}</h2><div class="menu-grid"></div>`;
    const grid = section.querySelector('.menu-grid');
    sec.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          <span class="badge ${item.type}">${item.type === 'veg' ? '🌱 Veg' : '🐾 Non-Veg'}</span>
        </div>
        <div class="card-body">
          <h3>${item.name}</h3>
          <p>${item.desc.substring(0,90)}...</p>
          <div class="card-footer">
            <span class="price">₹${item.price}</span>
            <button class="view-btn">View Details</button>
          </div>
        </div>`;
      card.addEventListener('click', () => openDetail(item));
      grid.appendChild(card);
    });
    container.appendChild(section);
  });
}

function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

function openDetail(item) {
  currentItem = item;
  document.getElementById('detail-img').src = item.img;
  document.getElementById('detail-img').alt = item.name;
  document.getElementById('detail-name').textContent = item.name;
  document.getElementById('detail-price').textContent = `₹${item.price}`;
  document.getElementById('detail-desc').textContent = item.desc;
  document.getElementById('di-cat').textContent = item.category;
  document.getElementById('di-type').textContent = item.type === 'veg' ? '🌱 Vegetarian' : '🐾 Non-Veg';
  document.getElementById('di-time').textContent = item.prep;
  document.getElementById('di-serves').textContent = item.serves;
  const badges = document.getElementById('detail-badges');
  badges.innerHTML = `<span class="detail-tag ${item.type}">${item.type === 'veg' ? '🌱 Vegetarian' : '🐾 Non-Veg'}</span><span class="detail-tag veg" style="background:#eef;color:#667eea;border-color:#667eea;">🍽️ ${item.category}</span>`;
  goTo('detail-page');
}

function openPayment() {
  if (!currentItem) return;
  const base = currentItem.price;
  const gst = Math.round(base * 0.02);
  const total = base + gst;
  document.getElementById('bill-item-name').textContent = currentItem.name;
  document.getElementById('bill-base').textContent = `₹${base}`;
  document.getElementById('bill-gst').textContent = `₹${gst}`;
  document.getElementById('bill-total').textContent = `₹${total}`;
  selectedPayment = null;
  document.querySelectorAll('.pay-option').forEach(el => el.classList.remove('selected'));
  ['cust-name','cust-phone','cust-email','cust-address'].forEach(id => document.getElementById(id).value = '');
  ['err-name','err-phone','err-address','err-payment'].forEach(id => { document.getElementById(id).style.display='none'; });
  goTo('payment-page');
}

function selectPayment(el) {
  document.querySelectorAll('.pay-option').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  selectedPayment = el.getAttribute('data-method');
  document.getElementById('err-payment').style.display = 'none';
}

function placeOrder() {
  let valid = true;
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();

  if (!name) { showErr('err-name'); valid = false; } else hideErr('err-name');
  const digits = phone.replace(/\D/g,'');
  if (digits.length < 10) { showErr('err-phone'); valid = false; } else hideErr('err-phone');
  if (!address) { showErr('err-address'); valid = false; } else hideErr('err-address');
  if (!selectedPayment) { showErr('err-payment'); valid = false; } else hideErr('err-payment');

  if (!valid) return;

  const orderId = 'FH-' + Math.floor(100000 + Math.random() * 900000);
  const base = currentItem.price;
  const total = base + Math.round(base * 0.02);

  document.getElementById('conf-name').textContent = name;
  document.getElementById('conf-order-id').textContent = `Order #${orderId}`;
  document.getElementById('conf-item').textContent = `${currentItem.name} — ₹${total} (incl. 2% GST)`;
  document.getElementById('conf-payment').textContent = `Payment via: ${selectedPayment}`;

  goTo('confirm-page');
}

function showErr(id) { document.getElementById(id).style.display = 'block'; }
function hideErr(id) { document.getElementById(id).style.display = 'none'; }

function goHome() {
  currentItem = null;
  selectedPayment = null;
  goTo('menu-page');
}

buildMenu();


function toggleChat() {
  const box = document.getElementById("chatbox");
  const btn = document.querySelector(".chatbot-btn");
  

  if (box.style.display === "block") {
    box.style.display = "none";
    btn.style.display = "block";
   
  } else {
    box.style.display = "block";
    btn.style.display = "none";
  }
}


function sendMessage(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();

    if (!message) return;

    const chatBody = document.getElementById("chat-body");

    // Show user message
    chatBody.innerHTML += `<p><b>You:</b> ${message}</p>`;

    // ALWAYS SAME REPLY
    chatBody.innerHTML += `
      <p><b>Bot:</b> Sorry, I am just a demo bot and cannot assist you with that. 😔</p>
      <p><b>Bot:</b> Please contact customer care 📞 <br> Customer Numeber: +91 7899729089</p>
    `;

    chatBody.scrollTop = chatBody.scrollHeight;
    input.value = "";
  }
}

