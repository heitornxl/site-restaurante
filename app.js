const defaultMenuItems = [
  {
    id: "burger-classico",
    name: "Burger classico",
    category: "Burgers",
    description: "Pao brioche, burger bovino, queijo, alface, tomate e molho da casa.",
    price: 29.9,
    image: "https://loremflickr.com/900/700/classic,burger?lock=101",
  },
  {
    id: "x-bacon",
    name: "X-Bacon",
    category: "Burgers",
    description: "Burger bovino, queijo cheddar, bacon crocante e maionese temperada.",
    price: 34.9,
    image: "https://loremflickr.com/900/700/bacon,burger?lock=102",
  },
  {
    id: "smash-duplo",
    name: "Smash duplo",
    category: "Burgers",
    description: "Dois smash burgers, queijo americano, picles e molho especial.",
    price: 38.9,
    image: "https://loremflickr.com/900/700/smash,burger?lock=103",
  },
  {
    id: "burger-frango",
    name: "Chicken burger",
    category: "Burgers",
    description: "Frango crocante, queijo, salada fresca e molho levemente picante.",
    price: 32.9,
    image: "https://loremflickr.com/900/700/chicken,burger?lock=104",
  },
  {
    id: "burger-vegetariano",
    name: "Burger vegetariano",
    category: "Burgers",
    description: "Burger vegetal, queijo, folhas, tomate e molho de ervas.",
    price: 33.9,
    image: "https://loremflickr.com/900/700/vegetarian,burger?lock=105",
  },
  {
    id: "file-parmegiana",
    name: "File a parmegiana",
    category: "Pratos prontos",
    description: "File empanado, molho de tomate, queijo gratinado, arroz e fritas.",
    price: 42.9,
    image: "https://loremflickr.com/900/700/parmesan,chicken,food?lock=201",
  },
  {
    id: "strogonoff-frango",
    name: "Strogonoff de frango",
    category: "Pratos prontos",
    description: "Frango cremoso, arroz branco e batata palha.",
    price: 31.9,
    image: "https://loremflickr.com/900/700/stroganoff,food?lock=202",
  },
  {
    id: "risoto-camarao",
    name: "Risoto de camarao",
    category: "Pratos prontos",
    description: "Arroz arboreo cremoso, camarao salteado, ervas e toque de limao.",
    price: 54.9,
    image: "https://loremflickr.com/900/700/shrimp,risotto?lock=203",
  },
  {
    id: "lasanha-bolonhesa",
    name: "Lasanha bolonhesa",
    category: "Pratos prontos",
    description: "Massa fresca, molho bolonhesa, queijo e gratinado ao forno.",
    price: 37.9,
    image: "https://loremflickr.com/900/700/lasagna?lock=204",
  },
  {
    id: "peixe-grelhado",
    name: "Peixe grelhado",
    category: "Pratos prontos",
    description: "File de peixe grelhado, legumes, arroz e molho de limao.",
    price: 44.9,
    image: "https://loremflickr.com/900/700/grilled,fish,food?lock=205",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola lata",
    category: "Refrigerantes",
    description: "Refrigerante Coca-Cola lata 350ml.",
    price: 7.5,
    image: "https://loremflickr.com/900/700/cola,can?lock=301",
  },
  {
    id: "guarana",
    name: "Guarana lata",
    category: "Refrigerantes",
    description: "Refrigerante de guarana lata 350ml.",
    price: 7.5,
    image: "https://loremflickr.com/900/700/soda,can?lock=302",
  },
  {
    id: "sprite",
    name: "Sprite lata",
    category: "Refrigerantes",
    description: "Refrigerante de limao lata 350ml.",
    price: 7.5,
    image: "https://loremflickr.com/900/700/lemon,soda?lock=303",
  },
  {
    id: "fanta-laranja",
    name: "Fanta laranja lata",
    category: "Refrigerantes",
    description: "Refrigerante sabor laranja lata 350ml.",
    price: 7.5,
    image: "https://loremflickr.com/900/700/orange,soda?lock=304",
  },
  {
    id: "agua-com-gas",
    name: "Agua com gas",
    category: "Refrigerantes",
    description: "Agua mineral com gas 500ml.",
    price: 5.5,
    image: "https://loremflickr.com/900/700/sparkling,water?lock=305",
  },
  {
    id: "suco-laranja",
    name: "Suco de laranja",
    category: "Sucos naturais",
    description: "Suco natural de laranja feito na hora.",
    price: 11.9,
    image: "https://loremflickr.com/900/700/orange,juice?lock=401",
  },
  {
    id: "suco-morango",
    name: "Suco de morango",
    category: "Sucos naturais",
    description: "Morango batido com agua ou leite.",
    price: 13.9,
    image: "https://loremflickr.com/900/700/strawberry,juice?lock=402",
  },
  {
    id: "suco-abacaxi-hortela",
    name: "Abacaxi com hortela",
    category: "Sucos naturais",
    description: "Suco natural de abacaxi com hortela fresca.",
    price: 12.9,
    image: "https://loremflickr.com/900/700/pineapple,juice?lock=403",
  },
  {
    id: "suco-maracuja",
    name: "Suco de maracuja",
    category: "Sucos naturais",
    description: "Suco natural de maracuja, refrescante e levemente azedinho.",
    price: 12.9,
    image: "https://loremflickr.com/900/700/passionfruit,juice?lock=404",
  },
  {
    id: "suco-melancia",
    name: "Suco de melancia",
    category: "Sucos naturais",
    description: "Melancia fresca batida com gelo.",
    price: 11.9,
    image: "https://loremflickr.com/900/700/watermelon,juice?lock=405",
  },
  {
    id: "caipirinha-limao",
    name: "Caipirinha de limao",
    category: "Drinks alcoolicos",
    description: "Cachaca, limao, acucar e gelo.",
    price: 18.9,
    image: "https://loremflickr.com/900/700/caipirinha,cocktail?lock=501",
  },
  {
    id: "mojito",
    name: "Mojito",
    category: "Drinks alcoolicos",
    description: "Rum, hortela, limao, acucar, gelo e agua com gas.",
    price: 22.9,
    image: "https://loremflickr.com/900/700/mojito,cocktail?lock=502",
  },
  {
    id: "gin-tonica",
    name: "Gin tonica",
    category: "Drinks alcoolicos",
    description: "Gin, tonica, gelo e especiarias aromaticas.",
    price: 24.9,
    image: "https://loremflickr.com/900/700/gin,tonic,cocktail?lock=503",
  },
  {
    id: "aperol-spritz",
    name: "Aperol spritz",
    category: "Drinks alcoolicos",
    description: "Aperol, espumante, agua com gas e laranja.",
    price: 25.9,
    image: "https://loremflickr.com/900/700/aperol,spritz?lock=504",
  },
  {
    id: "margarita",
    name: "Margarita",
    category: "Drinks alcoolicos",
    description: "Tequila, licor de laranja, limao e borda de sal.",
    price: 26.9,
    image: "https://loremflickr.com/900/700/margarita,cocktail?lock=505",
  },
  {
    id: "pudim-classico",
    name: "Pudim classico",
    category: "Sobremesas",
    description: "Pudim de leite condensado com calda de caramelo.",
    price: 14.9,
    image: "https://loremflickr.com/900/700/flan,dessert?lock=601",
  },
  {
    id: "brownie-sorvete",
    name: "Brownie com sorvete",
    category: "Sobremesas",
    description: "Brownie quente, sorvete de creme e calda de chocolate.",
    price: 19.9,
    image: "https://loremflickr.com/900/700/brownie,icecream?lock=602",
  },
  {
    id: "cheesecake-frutas",
    name: "Cheesecake de frutas",
    category: "Sobremesas",
    description: "Cheesecake cremoso com calda de frutas vermelhas.",
    price: 21.9,
    image: "https://loremflickr.com/900/700/cheesecake,berries?lock=603",
  },
  {
    id: "petit-gateau",
    name: "Petit gateau",
    category: "Sobremesas",
    description: "Bolinho de chocolate com centro cremoso e sorvete.",
    price: 24.9,
    image: "https://loremflickr.com/900/700/chocolate,cake,dessert?lock=604",
  },
  {
    id: "mousse-maracuja",
    name: "Mousse de maracuja",
    category: "Sobremesas",
    description: "Mousse leve de maracuja com calda da fruta.",
    price: 16.9,
    image: "https://loremflickr.com/900/700/passionfruit,dessert?lock=605",
  },
];

const state = {
  category: "Todos",
  adminCategory: "Todos",
  cart: [],
  orders: JSON.parse(localStorage.getItem("restaurant-orders") || "[]"),
  menuItems: JSON.parse(localStorage.getItem("restaurant-menu") || "null") || [],
  isAdminLoggedIn: sessionStorage.getItem("restaurant-admin") === "true",
  trackedOrderIds: JSON.parse(localStorage.getItem("restaurant-tracked-orders") || "[]"),
  clientToken: localStorage.getItem("restaurant-client-token") || crypto.randomUUID(),
  knownOrderStatuses: {},
};

const removableIngredients = [
  "Cebola",
  "Tomate",
  "Alface",
  "Queijo",
  "Bacon",
  "Picles",
  "Molho da casa",
  "Ovo",
];

const addonOptions = [
  { name: "Batata frita", price: 12.9 },
  { name: "Salada extra", price: 8.9 },
  { name: "Queijo extra", price: 4.9 },
  { name: "Bacon extra", price: 6.9 },
  { name: "Molho extra", price: 3.5 },
  { name: "Ovo extra", price: 4 },
];

localStorage.setItem("restaurant-client-token", state.clientToken);

const supabaseConfig = window.SUPABASE_CONFIG || {};
const database = {
  enabled: Boolean(supabaseConfig.url && supabaseConfig.anonKey && window.supabase),
  client: null,
};

if (database.enabled) {
  database.client = window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey);
}

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
const adminCategoryFilters = $("#adminCategoryFilters");
const channel = "BroadcastChannel" in window ? new BroadcastChannel("restaurant-orders") : null;
let menuCardObserver = null;
let customizationTarget = null;

function rememberCustomerOrder(orderId) {
  if (state.trackedOrderIds.includes(orderId)) return;
  state.trackedOrderIds = [orderId, ...state.trackedOrderIds].slice(0, 20);
  localStorage.setItem("restaurant-tracked-orders", JSON.stringify(state.trackedOrderIds));
}

function isCustomerOrder(order) {
  return state.trackedOrderIds.includes(order.id);
}

function getCustomerOrders() {
  return state.orders
    .filter(isCustomerOrder)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function snapshotCustomerStatuses() {
  return Object.fromEntries(getCustomerOrders().map((order) => [order.id, order.status]));
}

function notifyCustomerStatusChanges(previousStatuses) {
  const changedOrders = getCustomerOrders().filter((order) => previousStatuses[order.id] && previousStatuses[order.id] !== order.status);
  changedOrders.forEach((order) => {
    showToast(`Seu pedido agora esta: ${order.status}.`, "orders");
  });
  state.knownOrderStatuses = snapshotCustomerStatuses();
}

function getOrderStatusSteps(order) {
  return order.type === "entrega"
    ? ["Novo", "Em preparo", "Saiu para entrega", "Finalizado"]
    : ["Novo", "Em preparo", "Finalizado"];
}

function getStatusStepLabel(status) {
  const labels = {
    Novo: "Recebido",
    "Em preparo": "Em preparo",
    "Saiu para entrega": "Saiu para entrega",
    Finalizado: "Finalizado",
  };

  return labels[status] || status;
}

function getNextOrderStatus(order) {
  const steps = getOrderStatusSteps(order);
  const currentIndex = steps.indexOf(order.status);
  return steps[Math.min(currentIndex + 1, steps.length - 1)] || "Finalizado";
}

function getStatusButtonLabel(order) {
  const nextStatus = getNextOrderStatus(order);
  const labels = {
    "Em preparo": "Marcar em preparo",
    "Saiu para entrega": "Saiu para entrega",
    Finalizado: "Finalizar pedido",
  };

  return labels[nextStatus] || "Atualizar status";
}

function renderStatusSteps(order) {
  const steps = getOrderStatusSteps(order);
  const currentIndex = Math.max(steps.indexOf(order.status), 0);

  return steps
    .map((status, index) => `<span class="${index <= currentIndex ? "active" : ""}">${getStatusStepLabel(status)}</span>`)
    .join("");
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeMenuItem(row) {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    description: row.description,
    price: Number(row.price),
    image: row.image,
  };
}

function normalizeOrder(row) {
  return {
    id: row.id,
    type: row.type,
    status: row.status,
    createdAt: row.created_at,
    table: row.table_number || "",
    customer: {
      name: row.customer_name || "",
      phone: row.customer_phone || "",
      address: row.customer_address || "",
    },
    note: row.note || "",
    total: Number(row.total),
    items: (row.order_items || []).map((item) => ({
      id: item.menu_item_id,
      name: item.name,
      quantity: item.quantity,
      note: item.note || "",
      price: Number(item.price),
    })),
  };
}

async function loadMenuFromDatabase() {
  if (!database.enabled) return;
  const { data, error } = await database.client
    .from("menu_items")
    .select("*")
    .eq("active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    showToast("Nao consegui carregar o cardapio online.");
    return;
  }

  state.menuItems = data.map(normalizeMenuItem);
}

async function loadOrdersFromDatabase() {
  if (!database.enabled) return;

  if (!state.isAdminLoggedIn && !state.trackedOrderIds.length) {
    state.orders = [];
    return;
  }

  let query = database.client.from("orders").select("*, order_items(*)").order("created_at", { ascending: true });
  if (!state.isAdminLoggedIn) query = query.in("id", state.trackedOrderIds);

  let { data, error } = await query;

  if (error && !state.isAdminLoggedIn) {
    const rpcResult = await database.client.rpc("get_customer_orders", { requested_order_ids: state.trackedOrderIds });
    data = Array.isArray(rpcResult.data)
      ? rpcResult.data
      : typeof rpcResult.data === "string"
        ? JSON.parse(rpcResult.data)
        : [];
    error = rpcResult.error;
  }

  if (error) {
    console.error(error);
    showToast("Nao consegui carregar os pedidos online.");
    return;
  }

  state.orders = data.map(normalizeOrder);
}

async function loadSessionFromDatabase() {
  if (!database.enabled) return;
  const { data } = await database.client.auth.getSession();
  state.isAdminLoggedIn = Boolean(data.session);
}

async function saveMenu() {
  if (database.enabled) {
    await loadMenuFromDatabase();
    return;
  }

  localStorage.setItem("restaurant-menu", JSON.stringify(state.menuItems));
}

async function saveOrders() {
  if (database.enabled) {
    await loadOrdersFromDatabase();
    return;
  }

  localStorage.setItem("restaurant-orders", JSON.stringify(state.orders));
  channel?.postMessage({ type: "orders-updated", orders: state.orders });
}

function renderCategories() {
  const categories = ["Todos", ...new Set(state.menuItems.map((item) => item.category))];
  $("#categoryFilters").innerHTML = categories
    .map((category) => `<button class="${category === state.category ? "active" : ""}" data-category="${category}">${category}</button>`)
    .join("");
}

function renderAdminCategoryFilters() {
  if (!adminCategoryFilters) return;
  const categories = ["Todos", ...new Set(state.menuItems.map((item) => item.category))];
  if (!categories.includes(state.adminCategory)) state.adminCategory = "Todos";

  adminCategoryFilters.innerHTML = categories
    .map((category) => `<button class="${category === state.adminCategory ? "active" : ""}" data-admin-category="${category}">${category}</button>`)
    .join("");
}

function renderMenu() {
  const template = $("#menuItemTemplate");
  const visibleItems = state.category === "Todos" ? state.menuItems : state.menuItems.filter((item) => item.category === state.category);
  menuGrid.innerHTML = "";

  visibleItems.forEach((item, index) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.style.setProperty("--reveal-delay", `${Math.min(index, 10) * 55}ms`);
    const image = card.querySelector("img");
    image.src = menuImageUrl(item.image, 1200, 1200);
    image.srcset = [
      `${menuImageUrl(item.image, 900, 900)} 900w`,
      `${menuImageUrl(item.image, 1600, 1600)} 1600w`,
      `${menuImageUrl(item.image, 2400, 2400)} 2400w`,
      `${menuImageUrl(item.image, 3840, 2160)} 3840w`,
    ].join(", ");
    image.sizes = "(max-width: 700px) 92vw, (max-width: 1200px) 46vw, 30vw";
    image.loading = index < 2 ? "eager" : "lazy";
    image.decoding = "async";
    image.alt = item.name;
    image.addEventListener("error", (event) => {
      event.currentTarget.src = "./imagens/burger.jpg";
    }, { once: true });
    card.querySelector(".category-label").textContent = item.category;
    card.querySelector("h3").textContent = item.name;
    card.querySelector(".description").textContent = item.description;
    card.querySelector(".price").textContent = currency.format(item.price);
    card.querySelector(".add-button").addEventListener("click", (event) => openCustomization(item.id, event.currentTarget));
    menuGrid.appendChild(card);
  });

  requestAnimationFrame(revealMenuCards);
}

function menuImageUrl(src, width, height) {
  if (!src) return "./imagens/burger.jpg";
  if (!src.includes("loremflickr.com")) return src;
  return src.replace(/loremflickr\.com\/\d+\/\d+\//, `loremflickr.com/${width}/${height}/`);
}

function revealMenuCards() {
  const cards = $$(".menu-card");

  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  menuCardObserver?.disconnect();
  menuCardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        menuCardObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.14 }
  );

  cards.forEach((card) => menuCardObserver.observe(card));
}

function showToast(message, action = "cart") {
  const toast = $("#toast");
  const actionButton = action === "orders"
    ? `<button type="button" data-scroll-orders>Ver pedidos</button>`
    : `<button type="button" data-scroll-cart>Ver carrinho</button>`;
  toast.innerHTML = `
    <span>${message}</span>
    ${actionButton}
  `;
  toast.classList.add("visible");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2800);
}

function confirmAddButton(button) {
  if (!button) return;
  const originalText = button.textContent;
  button.textContent = "Adicionado";
  button.classList.add("added");
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove("added");
    button.disabled = false;
  }, 900);
}

function scrollToCart() {
  $(".cart-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openCustomization(itemId, button) {
  const item = state.menuItems.find((menuItem) => menuItem.id === itemId);
  if (!item) return;

  customizationTarget = { item, button };
  $("#customItemImage").src = menuImageUrl(item.image, 900, 900);
  $("#customItemImage").alt = item.name;
  $("#customItemName").textContent = item.name;
  $("#customItemDescription").textContent = item.description;
  $("#customItemPrice").textContent = currency.format(item.price);
  $("#customExtraRequest").value = "";

  $("#removeOptions").innerHTML = removableIngredients
    .map(
      (ingredient) => `
        <label class="option-pill">
          <input type="checkbox" value="${escapeHtml(ingredient)}" data-remove-option />
          <span>${escapeHtml(ingredient)}</span>
        </label>
      `
    )
    .join("");

  $("#addonOptions").innerHTML = addonOptions
    .map(
      (addon, index) => `
        <label class="option-pill">
          <input type="checkbox" value="${index}" data-addon-option />
          <span>${escapeHtml(addon.name)} <small>+ ${currency.format(addon.price)}</small></span>
        </label>
      `
    )
    .join("");

  updateCustomizationTotal();
  $("#customizationModal").classList.add("visible");
  $("#customizationModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCustomization() {
  $("#customizationModal").classList.remove("visible");
  $("#customizationModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  customizationTarget = null;
}

function getCustomizationSelection() {
  const removedIngredients = $$("[data-remove-option]:checked").map((input) => input.value);
  const addons = $$("[data-addon-option]:checked").map((input) => addonOptions[Number(input.value)]).filter(Boolean);
  const extraRequest = $("#customExtraRequest").value.trim();

  return { removedIngredients, addons, extraRequest };
}

function getAddonTotal(addons = []) {
  return addons.reduce((total, addon) => total + Number(addon.price || 0), 0);
}

function getCartUnitPrice(item) {
  return item.price + getAddonTotal(item.addons);
}

function updateCustomizationTotal() {
  if (!customizationTarget) return;
  const { addons } = getCustomizationSelection();
  $("#customItemTotal").textContent = currency.format(customizationTarget.item.price + getAddonTotal(addons));
}

function addCustomizedItemToCart() {
  if (!customizationTarget) return;
  const { item, button } = customizationTarget;
  const customization = getCustomizationSelection();

  state.cart.push({
    ...item,
    cartId: crypto.randomUUID(),
    quantity: 1,
    note: "",
    removedIngredients: customization.removedIngredients,
    addons: customization.addons,
    extraRequest: customization.extraRequest,
  });

  renderCart();
  confirmAddButton(button);
  animateAddToCart(button);
  showToast(`${item.name} foi adicionado ao carrinho.`);
  closeCustomization();
}

function animateAddToCart(button) {
  if (!button || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

  const card = button.closest(".menu-card");
  const image = card?.querySelector("img");
  const cart = $(".cart-panel");
  if (!image || !cart) return;

  const imageRect = image.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();
  const clone = image.cloneNode();
  clone.removeAttribute("srcset");
  clone.className = "cart-fly-image";
  clone.style.left = `${imageRect.left}px`;
  clone.style.top = `${imageRect.top}px`;
  clone.style.width = `${imageRect.width}px`;
  clone.style.height = `${imageRect.height}px`;
  document.body.appendChild(clone);

  const x = cartRect.left + cartRect.width * 0.5 - (imageRect.left + imageRect.width * 0.5);
  const y = cartRect.top + 54 - (imageRect.top + imageRect.height * 0.5);

  clone.animate(
    [
      { transform: "translate3d(0, 0, 0) scale(1)", opacity: 0.86 },
      { transform: `translate3d(${x * 0.58}px, ${y * 0.42}px, 0) scale(0.36)`, opacity: 0.72 },
      { transform: `translate3d(${x}px, ${y}px, 0) scale(0.08)`, opacity: 0 },
    ],
    { duration: 620, easing: "cubic-bezier(.2,.8,.2,1)" }
  ).finished.finally(() => clone.remove());
}

function changeQuantity(cartId, amount) {
  const item = state.cart.find((cartItem) => cartItem.cartId === cartId);
  if (!item) return;
  item.quantity += amount;
  state.cart = state.cart.filter((cartItem) => cartItem.quantity > 0);
  renderCart();
}

function updateItemNote(cartId, note) {
  const item = state.cart.find((cartItem) => cartItem.cartId === cartId);
  if (item) item.note = note;
}

function buildCustomizationSummary(item) {
  const lines = [];
  if (item.removedIngredients?.length) lines.push(`Remover: ${item.removedIngredients.join(", ")}`);
  if (item.addons?.length) {
    lines.push(`Adicionais: ${item.addons.map((addon) => `${addon.name} (+${currency.format(addon.price)})`).join(", ")}`);
  }
  if (item.extraRequest) lines.push(`Complemento: ${item.extraRequest}`);
  return lines;
}

function buildItemNote(item) {
  return [...buildCustomizationSummary(item), item.note ? `Obs: ${item.note}` : ""].filter(Boolean).join(" | ");
}

function reorderFinishedOrder(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order || order.status !== "Finalizado") return;

  if (state.cart.length) {
    const replaceCart = confirm("Seu carrinho atual sera substituido por este pedido. Deseja continuar?");
    if (!replaceCart) return;
  }

  state.cart = order.items.map((orderItem) => {
    const currentMenuItem = state.menuItems.find((menuItem) => menuItem.id === orderItem.id);

    return {
      ...(currentMenuItem || {}),
      id: orderItem.id,
      cartId: crypto.randomUUID(),
      name: orderItem.name,
      category: currentMenuItem?.category || "Historico",
      description: currentMenuItem?.description || "Item repetido a partir do historico do cliente.",
      image: currentMenuItem?.image || "./imagens/burger.jpg",
      quantity: orderItem.quantity,
      note: orderItem.note || "",
      price: Number(orderItem.price || currentMenuItem?.price || 0),
      removedIngredients: [],
      addons: [],
      extraRequest: "",
    };
  });

  renderCart();
  showView("cliente");
  scrollToCart();
  showToast("Pedido antigo carregado no carrinho.");
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
      (item) => {
        const unitPrice = getCartUnitPrice(item);
        const customizationSummary = buildCustomizationSummary(item);

        return `
        <div class="cart-line">
          <div class="cart-line-top">
            <img class="cart-thumb" src="${menuImageUrl(item.image, 480, 480)}" alt="${item.name}" loading="lazy" decoding="async" />
            <div class="cart-line-info">
              <strong>${escapeHtml(item.name)}</strong>
              <span>${currency.format(unitPrice * item.quantity)}</span>
              ${unitPrice > item.price ? `<small>Base ${currency.format(item.price)} + adicionais</small>` : ""}
            </div>
          </div>
          ${
            customizationSummary.length
              ? `<ul class="cart-customizations">${customizationSummary.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`
              : ""
          }
          <div class="qty-controls">
            <button data-action="dec" data-id="${item.cartId}" aria-label="Diminuir ${escapeHtml(item.name)}">-</button>
            <span>${item.quantity} unidade${item.quantity > 1 ? "s" : ""}</span>
            <button data-action="inc" data-id="${item.cartId}" aria-label="Aumentar ${escapeHtml(item.name)}">+</button>
          </div>
          <label class="field cart-note">
            <span>Observacao do item</span>
            <input data-note="${item.cartId}" value="${escapeHtml(item.note)}" placeholder="Ex: ponto da carne, sem molho" />
          </label>
        </div>
      `;
      }
    )
    .join("");

  $("#cartTotal").textContent = currency.format(getCartTotal());
}

function getCartTotal() {
  return state.cart.reduce((total, item) => total + getCartUnitPrice(item) * item.quantity, 0);
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
    if (missingDeliveryData) return "Preencha nome, telefone e endereco para delivery.";
  }

  return "";
}

async function sendOrder() {
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
      note: buildItemNote(item),
      price: getCartUnitPrice(item),
    })),
  };

  if (database.enabled) {
    const orderPayload = {
      id: order.id,
      type: order.type,
      status: order.status,
      table_number: order.table,
      customer_name: order.customer.name,
      customer_phone: order.customer.phone,
      customer_address: order.customer.address,
      note: order.note,
      total: order.total,
      created_at: order.createdAt,
      client_token: state.clientToken,
    };

    let { error: orderError } = await database.client.from("orders").insert(orderPayload);
    if (orderError && String(orderError.message || "").toLowerCase().includes("client_token")) {
      const { client_token, ...legacyOrderPayload } = orderPayload;
      const retry = await database.client.from("orders").insert(legacyOrderPayload);
      orderError = retry.error;
    }

    if (orderError) {
      console.error(orderError);
      alert("Nao consegui enviar o pedido para o banco de dados.");
      return;
    }

    const { error: itemsError } = await database.client.from("order_items").insert(
      order.items.map((item) => ({
        order_id: order.id,
        menu_item_id: item.id,
        name: item.name,
        quantity: item.quantity,
        note: item.note,
        price: item.price,
      }))
    );

    if (itemsError) {
      console.error(itemsError);
      alert("Pedido criado, mas houve erro ao salvar os itens.");
      return;
    }
  } else {
    state.orders.push(order);
  }

  rememberCustomerOrder(order.id);
  state.cart = [];
  $("#generalNote").value = "";
  await saveOrders();
  renderCart();
  renderCustomerOrders();
  renderAdminOrders();
  showView("cozinha");
  showToast("Pedido enviado. Voce pode acompanhar o status aqui.", "orders");
}

function renderCustomerOrders() {
  const customerOrders = getCustomerOrders();
  if (!customerOrders.length) {
    kitchenOrders.className = "orders-grid empty-state";
    kitchenOrders.textContent = "Voce ainda nao enviou nenhum pedido neste aparelho.";
    return;
  }

  const activeOrders = customerOrders.filter((order) => order.status !== "Finalizado");
  const finishedOrders = customerOrders.filter((order) => order.status === "Finalizado");

  kitchenOrders.className = "customer-orders-stack";
  kitchenOrders.innerHTML = `
    <section class="customer-order-section">
      <div class="customer-order-section-title">
        <div>
          <p class="eyebrow">Agora</p>
          <h3>Em andamento</h3>
        </div>
        <span>${activeOrders.length}</span>
      </div>
      ${
        activeOrders.length
          ? `<div class="orders-grid">${activeOrders.map(renderCustomerOrderCard).join("")}</div>`
          : `<div class="empty-state customer-history-empty">Nenhum pedido em preparo agora.</div>`
      }
    </section>

    <section class="customer-order-section">
      <div class="customer-order-section-title">
        <div>
          <p class="eyebrow">Historico deste aparelho</p>
          <h3>Pedidos concluidos</h3>
        </div>
        <span>${finishedOrders.length}</span>
      </div>
      ${
        finishedOrders.length
          ? `<div class="orders-grid history-grid">${finishedOrders.map(renderCustomerOrderCard).join("")}</div>`
          : `<div class="empty-state customer-history-empty">Quando um pedido for finalizado, ele aparece aqui.</div>`
      }
    </section>
  `;
}

function renderCustomerOrderCard(order) {
  const when = new Date(order.createdAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const date = new Date(order.createdAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
  const destination =
    order.type === "mesa"
      ? `Mesa ${order.table}`
      : `Delivery - ${order.customer.name || "cliente"}`;

  return `
    <article class="order-card customer-order-card ${order.status === "Finalizado" ? "is-finished" : ""}">
      <header>
        <div>
          <h3>${escapeHtml(destination)}</h3>
          <p class="order-time">${date} as ${when}</p>
        </div>
        <span class="badge ${order.status === "Finalizado" ? "done" : ""}">${order.status}</span>
      </header>
      <div class="status-steps" aria-label="Status do pedido">
        ${renderStatusSteps(order)}
      </div>
      <p class="queue-position">${customerStatusMessage(order.status)}</p>
      <ol class="order-list">
        ${order.items
          .map(
            (item) => `
              <li>
                <strong>${item.quantity}x ${escapeHtml(item.name)}</strong>
                ${item.note ? `<br><span>${escapeHtml(item.note)}</span>` : ""}
              </li>
            `
          )
          .join("")}
      </ol>
      <div class="order-meta">
        ${order.note ? `<span><strong>Observacao geral:</strong> ${escapeHtml(order.note)}</span>` : ""}
        <span><strong>Total:</strong> ${currency.format(order.total)}</span>
      </div>
      ${
        order.status === "Finalizado"
          ? `<button class="repeat-order-button" type="button" data-repeat-order="${order.id}">Pedir novamente</button>`
          : ""
      }
    </article>
  `;
}

function customerStatusMessage(status) {
  if (status === "Novo") return "Seu pedido foi recebido e aguarda confirmacao da cozinha.";
  if (status === "Em preparo") return "A cozinha ja esta preparando seu pedido.";
  if (status === "Saiu para entrega") return "Seu pedido saiu para entrega e esta a caminho.";
  return "Pedido finalizado. Bom apetite!";
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
          : `<strong>Delivery:</strong> ${order.customer.name} - ${order.customer.phone}<br><strong>Endereco:</strong> ${order.customer.address}`;

      return `
        <article class="order-card">
          <header>
            <div>
              <h3>${order.type === "mesa" ? `Mesa ${order.table}` : "Delivery"}</h3>
              <p class="order-time">${when}</p>
            </div>
            <span class="badge">${order.status}</span>
          </header>
          <ol class="order-list">
            ${order.items
              .map(
                (item) => `
                  <li>
                    <strong>${item.quantity}x ${escapeHtml(item.name)}</strong>
                    ${item.note ? `<br><span>${escapeHtml(item.note)}</span>` : ""}
                  </li>
                `
              )
              .join("")}
          </ol>
          <div class="order-meta">
            <span>${destination}</span>
            ${order.note ? `<span><strong>Observacao geral:</strong> ${escapeHtml(order.note)}</span>` : ""}
            <span><strong>Total:</strong> ${currency.format(order.total)}</span>
          </div>
          <button class="status-button" data-status="${order.id}">${getStatusButtonLabel(order)}</button>
        </article>
      `;
    })
    .join("");
}

async function updateOrderStatus(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  const previousStatuses = snapshotCustomerStatuses();
  order.status = getNextOrderStatus(order);
  if (database.enabled) {
    const { error } = await database.client.from("orders").update({ status: order.status }).eq("id", orderId);
    if (error) {
      console.error(error);
      alert(
        order.status === "Saiu para entrega"
          ? "Nao consegui usar o status Saiu para entrega. Rode a atualizacao do supabase-schema.sql no Supabase antes de usar esse status online."
          : "Nao consegui atualizar o status do pedido."
      );
      return;
    }
  }

  await saveOrders();
  renderCustomerOrders();
  renderAdminOrders();
  notifyCustomerStatusChanges(previousStatuses);
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
  if (viewName === "cozinha") renderCustomerOrders();
  if (viewName === "admin") renderAdmin();
}

function renderAdmin() {
  $("#loginPanel").style.display = state.isAdminLoggedIn ? "none" : "block";
  $("#adminPanel").style.display = state.isAdminLoggedIn ? "block" : "none";
  if (!state.isAdminLoggedIn) return;

  renderAdminOrders();
  renderAdminCategoryFilters();
  const visibleItems = state.adminCategory === "Todos"
    ? state.menuItems
    : state.menuItems.filter((item) => item.category === state.adminCategory);

  if (!visibleItems.length) {
    adminItems.className = "admin-items empty-state";
    adminItems.textContent = "Nenhum item nesta categoria.";
    return;
  }

  adminItems.className = "admin-items";
  adminItems.innerHTML = visibleItems
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

async function loginAdmin() {
  const user = $("#adminUser").value.trim();
  const password = $("#adminPassword").value.trim();

  if (database.enabled) {
    const { error } = await database.client.auth.signInWithPassword({
      email: user,
      password,
    });

    if (error) {
      $("#loginMessage").textContent = "Email ou senha incorretos.";
      return;
    }

    state.isAdminLoggedIn = true;
    $("#loginMessage").textContent = "";
    await loadOrdersFromDatabase();
    renderAdmin();
    return;
  }

  if (user === "admin" && password === "senha123") {
    state.isAdminLoggedIn = true;
    sessionStorage.setItem("restaurant-admin", "true");
    $("#loginMessage").textContent = "";
    renderAdmin();
    return;
  }

  $("#loginMessage").textContent = "Usuario ou senha incorretos. Use admin / senha123 nesta versao de treino.";
}

async function logoutAdmin() {
  if (database.enabled) {
    await database.client.auth.signOut();
  }

  state.isAdminLoggedIn = false;
  sessionStorage.removeItem("restaurant-admin");
  await loadOrdersFromDatabase();
  renderCustomerOrders();
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

  if (database.enabled) {
    const { error } = await database.client.from("menu_items").upsert({
      id: item.id,
      name: item.name,
      category: item.category,
      description: item.description,
      price: item.price,
      image: item.image,
      active: true,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error(error);
      alert("Nao consegui salvar o item no banco de dados.");
      return;
    }
  }

  await saveMenu();
  resetForm();
  renderCategories();
  renderMenu();
  renderAdmin();
}

async function deleteMenuItem(itemId) {
  const item = state.menuItems.find((menuItem) => menuItem.id === itemId);
  if (!item) return;
  const confirmed = confirm(`Remover "${item.name}" do cardapio?`);
  if (!confirmed) return;

  if (database.enabled) {
    const { error } = await database.client.from("menu_items").update({ active: false }).eq("id", itemId);
    if (error) {
      console.error(error);
      alert("Nao consegui remover o item do banco de dados.");
      return;
    }
  }

  state.menuItems = state.menuItems.filter((menuItem) => menuItem.id !== itemId);
  state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
  await saveMenu();
  renderCategories();
  renderMenu();
  renderCart();
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

  adminCategoryFilters?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-admin-category]");
    if (!button) return;
    state.adminCategory = button.dataset.adminCategory;
    renderAdmin();
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

  $("#customizationModal").addEventListener("click", (event) => {
    if (event.target.id === "customizationModal") closeCustomization();
  });
  $("#customizationModal").addEventListener("change", (event) => {
    if (event.target.matches("[data-addon-option]")) updateCustomizationTotal();
  });
  $("#closeCustomization").addEventListener("click", closeCustomization);
  $("#cancelCustomization").addEventListener("click", closeCustomization);
  $("#confirmCustomization").addEventListener("click", addCustomizedItemToCart);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && $("#customizationModal").classList.contains("visible")) closeCustomization();
  });

  $("#toast").addEventListener("click", (event) => {
    if (event.target.closest("[data-scroll-orders]")) {
      $("#toast").classList.remove("visible");
      showView("cozinha");
      $("#cozinhaView").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (!event.target.closest("[data-scroll-cart]")) return;
    $("#toast").classList.remove("visible");
    scrollToCart();
  });

  kitchenOrders.addEventListener("click", (event) => {
    const button = event.target.closest("[data-repeat-order]");
    if (!button) return;
    reorderFinishedOrder(button.dataset.repeatOrder);
  });

  $$("input[name='orderType']").forEach((input) => input.addEventListener("change", toggleDeliveryFields));
  $("#clearCart").addEventListener("click", () => {
    state.cart = [];
    renderCart();
  });
  $("#sendOrder").addEventListener("click", sendOrder);
  $("#clearOrders").addEventListener("click", async () => {
    const finishedCount = state.orders.filter((order) => order.status === "Finalizado").length;
    if (!finishedCount) {
      alert("Nao ha pedidos finalizados para apagar.");
      return;
    }

    const confirmed = confirm(
      `Atencao: isso vai apagar ${finishedCount} pedido${finishedCount > 1 ? "s" : ""} finalizado${finishedCount > 1 ? "s" : ""} do historico dos clientes. Deseja continuar?`
    );
    if (!confirmed) return;

    const typedConfirmation = prompt("Para confirmar, digite APAGAR.");
    if (typedConfirmation !== "APAGAR") {
      alert("Acao cancelada. Nada foi apagado.");
      return;
    }

    if (database.enabled) {
      const { error } = await database.client.from("orders").delete().eq("status", "Finalizado");
      if (error) {
        console.error(error);
        alert("Nao consegui limpar os pedidos finalizados.");
        return;
      }
    }

    state.orders = state.orders.filter((order) => order.status !== "Finalizado");
    await saveOrders();
    renderCustomerOrders();
    renderAdminOrders();
    alert("Pedidos finalizados apagados com sucesso.");
  });

  adminOrders.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-status]");
    if (!button) return;
    await updateOrderStatus(button.dataset.status);
  });

  $("#loginButton").addEventListener("click", loginAdmin);
  $("#logoutButton").addEventListener("click", logoutAdmin);
  $("#menuForm").addEventListener("submit", saveMenuItem);
  $("#cancelEdit").addEventListener("click", resetForm);

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
    const previousStatuses = snapshotCustomerStatuses();
    state.orders = event.data.orders;
    renderCustomerOrders();
    renderAdminOrders();
    notifyCustomerStatusChanges(previousStatuses);
  });
}

function subscribeToDatabaseChanges() {
  if (!database.enabled) return;

  database.client
    .channel("restaurant-menu-changes")
    .on("postgres_changes", { event: "*", schema: "public", table: "menu_items" }, async () => {
      await loadMenuFromDatabase();
      renderCategories();
      renderMenu();
      renderAdmin();
    })
    .subscribe();

  database.client
    .channel("restaurant-order-changes")
    .on("postgres_changes", { event: "*", schema: "public", table: "orders" }, async () => {
      const previousStatuses = snapshotCustomerStatuses();
      await loadOrdersFromDatabase();
      renderCustomerOrders();
      renderAdminOrders();
      notifyCustomerStatusChanges(previousStatuses);
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "order_items" }, async () => {
      await loadOrdersFromDatabase();
      renderCustomerOrders();
      renderAdminOrders();
    })
    .subscribe();

  database.client.auth.onAuthStateChange((_event, session) => {
    state.isAdminLoggedIn = Boolean(session);
    loadOrdersFromDatabase().then(() => {
      renderCustomerOrders();
      renderAdminOrders();
    });
    renderAdmin();
  });
}

function startOrderPolling() {
  if (!database.enabled) return;

  setInterval(async () => {
    const previousStatuses = snapshotCustomerStatuses();
    await loadOrdersFromDatabase();
    renderCustomerOrders();
    renderAdminOrders();
    notifyCustomerStatusChanges(previousStatuses);
  }, 10000);
}

async function initApp() {
  bindEvents();

  if (database.enabled) {
    await loadSessionFromDatabase();
    await loadMenuFromDatabase();
    await loadOrdersFromDatabase();
    subscribeToDatabaseChanges();
    startOrderPolling();
  }

  renderCategories();
  renderMenu();
  renderCart();
  renderCustomerOrders();
  renderAdminOrders();
  toggleDeliveryFields();
  renderAdmin();
}

initApp();

