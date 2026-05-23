const defaultMenuItems = [
  {
    id: "parmegiana",
    name: "File a parmegiana",
    category: "Comidas",
    description: "File empanado, molho da casa, queijo gratinado, arroz e fritas.",
    price: 42.9,
    image: "./imagens/parmegiana.jpg",
  },
  {
    id: "risoto",
    name: "Risoto de camarao",
    category: "Comidas",
    description: "Arroz cremoso, camarao salteado, ervas frescas e toque de limao.",
    price: 54.9,
    image: "./imagens/risoto.jpg",
  },
  {
    id: "burger",
    name: "Burger artesanal",
    category: "Comidas",
    description: "Blend bovino, queijo, cebola caramelizada, salada e maionese especial.",
    price: 36.9,
    image: "./imagens/burger.jpg",
  },
  {
    id: "prato-feliz",
    name: "Prato feliz",
    category: "Comidas",
    description: "Arroz, ovo, acompanhamentos coloridos e montagem divertida.",
    price: 29.9,
    image: "./imagens/prato-feliz.jpg",
  },
  {
    id: "suco",
    name: "Suco natural",
    category: "Bebidas",
    description: "Laranja, abacaxi com hortela ou morango. Feito na hora.",
    price: 11.9,
    image: "./imagens/suco.jpg",
  },
  {
    id: "limonada",
    name: "Limonada da casa",
    category: "Bebidas",
    description: "Limao siciliano, hortela, gelo e leve toque de gengibre.",
    price: 13.9,
    image: "./imagens/limonada.jpg",
  },
  {
    id: "pudim",
    name: "Pudim classico",
    category: "Sobremesas",
    description: "Pudim de leite condensado com calda de caramelo.",
    price: 14.9,
    image: "./imagens/pudim.jpg",
  },
  {
    id: "brownie",
    name: "Brownie com sorvete",
    category: "Sobremesas",
    description: "Brownie quente, sorvete de creme e calda de chocolate.",
    price: 19.9,
    image: "./imagens/brownie.jpg",
  },
];

const state = {
  category: "Todos",
  cart: [],
  orders: JSON.parse(localStorage.getItem("restaurant-orders") || "[]"),
  menuItems: JSON.parse(localStorage.getItem("restaurant-menu") || "null") || [],
  isAdminLoggedIn: sessionStorage.getItem("restaurant-admin") === "true",
};

if (!state.menuItems.length) {
  state.menuItems = [...defaultMenuItems];
}

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const menuGrid = $("#menuGrid");
const cartItems = $("#cartItems");
const kitchenOrders = $("#kitchenOrders");
const adminItems = $("#adminItems");
const adminOrders = $("#adminOrders");
const channel = "BroadcastChannel" in window ? new BroadcastChannel("restaurant-orders") : null;

function saveMenu() {
  localStorage.setItem("restaurant-menu", JSON.stringify(state.menuItems));
}

function saveOrders() {
  localStorage.setItem("restaurant-orders", JSON.stringify(state.orders));
  channel?.postMessage({ type: "orders-updated", orders: state.orders });
}

function renderCategories() {
  const categories = ["Todos", ...new Set(state.menuItems.map((item) => item.category))];
  $("#categoryFilters").innerHTML = categories
    .map((category) => `<button class="${category === state.category ? "active" : ""}" data-category="${category}">${category}</button>`)
    .join("");
}

function renderMenu() {
  const template = $("#menuItemTemplate");
  const visibleItems = state.category === "Todos" ? state.menuItems : state.menuItems.filter((item) => item.category === state.category);
  menuGrid.innerHTML = "";

  visibleItems.forEach((item) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector("img").src = item.image;
    card.querySelector("img").alt = item.name;
    card.querySelector(".category-label").textContent = item.category;
    card.querySelector("h3").textContent = item.name;
    card.querySelector(".description").textContent = item.description;
    card.querySelector(".price").textContent = currency.format(item.price);
    card.querySelector(".add-button").addEventListener("click", () => addToCart(item.id));
    menuGrid.appendChild(card);
  });
}

function addToCart(itemId) {
  const existing = state.cart.find((item) => item.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    const item = state.menuItems.find((menuItem) => menuItem.id === itemId);
    state.cart.push({ ...item, quantity: 1, note: "" });
  }
  renderCart();
}

function changeQuantity(itemId, amount) {
  const item = state.cart.find((cartItem) => cartItem.id === itemId);
  if (!item) return;
  item.quantity += amount;
  state.cart = state.cart.filter((cartItem) => cartItem.quantity > 0);
  renderCart();
}

function updateItemNote(itemId, note) {
  const item = state.cart.find((cartItem) => cartItem.id === itemId);
  if (item) item.note = note;
}

function renderCart() {
  if (!state.cart.length) {
    cartItems.className = "cart-items empty-state";
    cartItems.textContent = "Nenhum item ainda.";
    $("#cartTotal").textContent = currency.format(0);
    return;
  }

  cartItems.className = "cart-items";
  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-line">
          <div class="cart-line-top">
            <img class="cart-thumb" src="${item.image}" alt="${item.name}" />
            <div class="cart-line-info">
              <strong>${item.name}</strong>
              <span>${currency.format(item.price * item.quantity)}</span>
            </div>
          </div>
          <div class="qty-controls">
            <button data-action="dec" data-id="${item.id}" aria-label="Diminuir ${item.name}">-</button>
            <span>${item.quantity} unidade${item.quantity > 1 ? "s" : ""}</span>
            <button data-action="inc" data-id="${item.id}" aria-label="Aumentar ${item.name}">+</button>
          </div>
          <label class="field cart-note">
            <span>Observacao do item</span>
            <input data-note="${item.id}" value="${item.note}" placeholder="Ex: ponto da carne, sem molho" />
          </label>
        </div>
      `
    )
    .join("");

  $("#cartTotal").textContent = currency.format(getCartTotal());
}

function getCartTotal() {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function getOrderType() {
  return document.querySelector("input[name='orderType']:checked").value;
}

function validateOrder() {
  if (!state.cart.length) return "Adicione pelo menos um item ao pedido.";

  if (getOrderType() === "mesa" && !$("#tableNumber").value.trim()) {
    return "Informe o numero da mesa.";
  }

  if (getOrderType() === "entrega") {
    const missingDeliveryData = !$("#customerName").value.trim() || !$("#customerPhone").value.trim() || !$("#customerAddress").value.trim();
    if (missingDeliveryData) return "Preencha nome, telefone e endereco para tele-entrega.";
  }

  return "";
}

function sendOrder() {
  const error = validateOrder();
  if (error) {
    alert(error);
    return;
  }

  const type = getOrderType();
  const order = {
    id: crypto.randomUUID(),
    type,
    status: "Novo",
    createdAt: new Date().toISOString(),
    table: type === "mesa" ? $("#tableNumber").value.trim() : "",
    customer: {
      name: $("#customerName").value.trim(),
      phone: $("#customerPhone").value.trim(),
      address: $("#customerAddress").value.trim(),
    },
    note: $("#generalNote").value.trim(),
    total: getCartTotal(),
    items: state.cart.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      note: item.note,
      price: item.price,
    })),
  };

  state.orders.unshift(order);
  state.cart = [];
  $("#generalNote").value = "";
  saveOrders();
  renderCart();
  renderKitchen();
  alert("Pedido enviado para a cozinha.");
}

function renderKitchen() {
  const activeOrders = state.orders.filter((order) => order.status !== "Finalizado");
  if (!activeOrders.length) {
    kitchenOrders.className = "orders-grid empty-state";
    kitchenOrders.textContent = "Nenhum pedido na fila.";
    return;
  }

  kitchenOrders.className = "orders-grid";
  kitchenOrders.innerHTML = activeOrders
    .map((order, index) => {
      const when = new Date(order.createdAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      const destination =
        order.type === "mesa"
          ? `Mesa ${order.table}`
          : `Tele-entrega - ${order.customer.name}`;
      const positionText = index === 0 ? "E o proximo da fila" : `${index} pedido${index > 1 ? "s" : ""} antes deste`;

      return `
        <article class="order-card">
          <header>
            <div>
              <h3>${destination}</h3>
              <p class="order-time">${when}</p>
            </div>
            <span class="badge ${order.status === "Finalizado" ? "done" : ""}">${order.status}</span>
          </header>
          <p class="queue-position">${positionText}</p>
          <ol class="order-list">
            ${order.items
              .map(
                (item) => `
                  <li>
                    <strong>${item.quantity}x ${item.name}</strong>
                    ${item.note ? `<br><span>Obs: ${item.note}</span>` : ""}
                  </li>
                `
              )
              .join("")}
          </ol>
          <div class="order-meta">
            ${order.note ? `<span><strong>Observacao geral:</strong> ${order.note}</span>` : ""}
            <span><strong>Total:</strong> ${currency.format(order.total)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderAdminOrders() {
  if (!adminOrders) return;
  const activeOrders = state.orders.filter((order) => order.status !== "Finalizado");
  if (!activeOrders.length) {
    adminOrders.className = "orders-grid empty-state";
    adminOrders.textContent = "Nenhum pedido recebido.";
    return;
  }

  adminOrders.className = "orders-grid";
  adminOrders.innerHTML = activeOrders
    .map((order) => {
      const when = new Date(order.createdAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      const destination =
        order.type === "mesa"
          ? `<strong>Mesa:</strong> ${order.table}`
          : `<strong>Entrega:</strong> ${order.customer.name} - ${order.customer.phone}<br><strong>Endereco:</strong> ${order.customer.address}`;

      return `
        <article class="order-card">
          <header>
            <div>
              <h3>${order.type === "mesa" ? `Mesa ${order.table}` : "Tele-entrega"}</h3>
              <p class="order-time">${when}</p>
            </div>
            <span class="badge">${order.status}</span>
          </header>
          <ol class="order-list">
            ${order.items
              .map(
                (item) => `
                  <li>
                    <strong>${item.quantity}x ${item.name}</strong>
                    ${item.note ? `<br><span>Obs: ${item.note}</span>` : ""}
                  </li>
                `
              )
              .join("")}
          </ol>
          <div class="order-meta">
            <span>${destination}</span>
            ${order.note ? `<span><strong>Observacao geral:</strong> ${order.note}</span>` : ""}
            <span><strong>Total:</strong> ${currency.format(order.total)}</span>
          </div>
          <button class="status-button" data-status="${order.id}">${order.status === "Novo" ? "Marcar em preparo" : "Finalizar pedido"}</button>
        </article>
      `;
    })
    .join("");
}

function updateOrderStatus(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  order.status = order.status === "Novo" ? "Em preparo" : "Finalizado";
  saveOrders();
  renderKitchen();
  renderAdminOrders();
}

function toggleDeliveryFields() {
  const isDelivery = getOrderType() === "entrega";
  $("#deliveryFields").classList.toggle("visible", isDelivery);
  $("#tableField").style.display = isDelivery ? "none" : "grid";
  $("#generalNote").placeholder = isDelivery
    ? "Ex: entregar troco para R$ 100, interfone, referencia"
    : "Ex: sem cebola, ponto da carne, talheres extras";
}

function showView(viewName) {
  $$(".tab").forEach((item) => item.classList.toggle("active", item.dataset.view === viewName));
  $("#clienteView").classList.toggle("active-view", viewName === "cliente");
  $("#cozinhaView").classList.toggle("active-view", viewName === "cozinha");
  $("#adminView").classList.toggle("active-view", viewName === "admin");
  if (viewName === "admin") renderAdmin();
}

function renderAdmin() {
  $("#loginPanel").style.display = state.isAdminLoggedIn ? "none" : "block";
  $("#adminPanel").style.display = state.isAdminLoggedIn ? "block" : "none";
  if (!state.isAdminLoggedIn) return;

  renderAdminOrders();
  adminItems.innerHTML = state.menuItems
    .map(
      (item) => `
        <article class="admin-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <strong>${item.name}</strong>
            <span>${item.category} - ${currency.format(item.price)}</span>
          </div>
          <div class="admin-item-actions">
            <button class="secondary-button" data-edit="${item.id}">Editar</button>
            <button class="danger-button" data-delete="${item.id}">Remover</button>
          </div>
        </article>
      `
    )
    .join("");
}

function loginAdmin() {
  const user = $("#adminUser").value.trim();
  const password = $("#adminPassword").value.trim();

  if (user === "admin" && password === "senha123") {
    state.isAdminLoggedIn = true;
    sessionStorage.setItem("restaurant-admin", "true");
    $("#loginMessage").textContent = "";
    renderAdmin();
    return;
  }

  $("#loginMessage").textContent = "Usuario ou senha incorretos. Use admin / senha123 nesta versao de treino.";
}

function logoutAdmin() {
  state.isAdminLoggedIn = false;
  sessionStorage.removeItem("restaurant-admin");
  resetForm();
  renderAdmin();
}

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function imageFileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function fillForm(item) {
  $("#editingId").value = item.id;
  $("#formTitle").textContent = `Editando ${item.name}`;
  $("#itemName").value = item.name;
  $("#itemCategory").value = item.category;
  $("#itemDescription").value = item.description;
  $("#itemPrice").value = item.price;
  $("#imagePreview").src = item.image;
  $("#imagePreview").classList.add("visible");
}

function resetForm() {
  $("#menuForm").reset();
  $("#editingId").value = "";
  $("#formTitle").textContent = "Novo item";
  $("#imagePreview").removeAttribute("src");
  $("#imagePreview").classList.remove("visible");
}

async function saveMenuItem(event) {
  event.preventDefault();

  const editingId = $("#editingId").value;
  const existingItem = state.menuItems.find((item) => item.id === editingId);
  const imageData = await imageFileToDataUrl($("#itemImage").files[0]);
  const name = $("#itemName").value.trim();

  const item = {
    id: editingId || `${slugify(name)}-${Date.now()}`,
    name,
    category: $("#itemCategory").value,
    description: $("#itemDescription").value.trim(),
    price: Number($("#itemPrice").value),
    image: imageData || existingItem?.image || "./imagens/parmegiana.jpg",
  };

  if (existingItem) {
    state.menuItems = state.menuItems.map((menuItem) => (menuItem.id === editingId ? item : menuItem));
  } else {
    state.menuItems.push(item);
  }

  saveMenu();
  resetForm();
  renderCategories();
  renderMenu();
  renderAdmin();
}

function deleteMenuItem(itemId) {
  const item = state.menuItems.find((menuItem) => menuItem.id === itemId);
  if (!item) return;
  const confirmed = confirm(`Remover "${item.name}" do cardapio?`);
  if (!confirmed) return;

  state.menuItems = state.menuItems.filter((menuItem) => menuItem.id !== itemId);
  state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
  saveMenu();
  renderCategories();
  renderMenu();
  renderCart();
  renderAdmin();
}

function resetMenuToDefault() {
  const confirmed = confirm("Restaurar o cardapio de exemplo? As alteracoes locais serao perdidas.");
  if (!confirmed) return;
  state.menuItems = [...defaultMenuItems];
  saveMenu();
  resetForm();
  renderCategories();
  renderMenu();
  renderAdmin();
}

function bindEvents() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      showView(tab.dataset.view);
    });
  });

  $("#categoryFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    state.category = button.dataset.category;
    renderCategories();
    renderMenu();
  });

  cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    changeQuantity(button.dataset.id, button.dataset.action === "inc" ? 1 : -1);
  });

  cartItems.addEventListener("input", (event) => {
    if (event.target.matches("[data-note]")) {
      updateItemNote(event.target.dataset.note, event.target.value);
    }
  });

  $$("input[name='orderType']").forEach((input) => input.addEventListener("change", toggleDeliveryFields));
  $("#clearCart").addEventListener("click", () => {
    state.cart = [];
    renderCart();
  });
  $("#sendOrder").addEventListener("click", sendOrder);
  $("#clearOrders").addEventListener("click", () => {
    state.orders = state.orders.filter((order) => order.status !== "Finalizado");
    saveOrders();
    renderKitchen();
    renderAdminOrders();
  });

  adminOrders.addEventListener("click", (event) => {
    const button = event.target.closest("[data-status]");
    if (!button) return;
    updateOrderStatus(button.dataset.status);
  });

  $("#loginButton").addEventListener("click", loginAdmin);
  $("#logoutButton").addEventListener("click", logoutAdmin);
  $("#menuForm").addEventListener("submit", saveMenuItem);
  $("#cancelEdit").addEventListener("click", resetForm);
  $("#resetMenu").addEventListener("click", resetMenuToDefault);

  $("#itemImage").addEventListener("change", async (event) => {
    const imageData = await imageFileToDataUrl(event.target.files[0]);
    if (!imageData) return;
    $("#imagePreview").src = imageData;
    $("#imagePreview").classList.add("visible");
  });

  adminItems.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit]");
    const deleteButton = event.target.closest("[data-delete]");

    if (editButton) {
      const item = state.menuItems.find((menuItem) => menuItem.id === editButton.dataset.edit);
      if (item) fillForm(item);
    }

    if (deleteButton) {
      deleteMenuItem(deleteButton.dataset.delete);
    }
  });

  channel?.addEventListener("message", (event) => {
    if (event.data?.type !== "orders-updated") return;
    state.orders = event.data.orders;
    renderKitchen();
    renderAdminOrders();
  });
}

renderCategories();
renderMenu();
renderCart();
renderKitchen();
renderAdminOrders();
toggleDeliveryFields();
bindEvents();
renderAdmin();
