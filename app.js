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
  cart: [],
  orders: JSON.parse(localStorage.getItem("restaurant-orders") || "[]"),
  menuItems: JSON.parse(localStorage.getItem("restaurant-menu") || "null") || [],
  isAdminLoggedIn: sessionStorage.getItem("restaurant-admin") === "true",
};

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
const channel = "BroadcastChannel" in window ? new BroadcastChannel("restaurant-orders") : null;

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
  const { data, error } = await database.client
    .from("orders")
    .select("*, order_items(*)")
    .neq("status", "Finalizado")
    .order("created_at", { ascending: true });

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

function renderMenu() {
  const template = $("#menuItemTemplate");
  const visibleItems = state.category === "Todos" ? state.menuItems : state.menuItems.filter((item) => item.category === state.category);
  menuGrid.innerHTML = "";

  visibleItems.forEach((item) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector("img").src = item.image;
    card.querySelector("img").alt = item.name;
    card.querySelector("img").addEventListener("error", (event) => {
      event.currentTarget.src = "./imagens/burger.jpg";
    }, { once: true });
    card.querySelector(".category-label").textContent = item.category;
    card.querySelector("h3").textContent = item.name;
    card.querySelector(".description").textContent = item.description;
    card.querySelector(".price").textContent = currency.format(item.price);
    card.querySelector(".add-button").addEventListener("click", (event) => addToCart(item.id, event.currentTarget));
    menuGrid.appendChild(card);
  });
}

function showToast(message) {
  const toast = $("#toast");
  toast.innerHTML = `
    <span>${message}</span>
    <button type="button" data-scroll-cart>Ver carrinho</button>
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

function addToCart(itemId, button) {
  const existing = state.cart.find((item) => item.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    const item = state.menuItems.find((menuItem) => menuItem.id === itemId);
    state.cart.push({ ...item, quantity: 1, note: "" });
  }
  renderCart();
  confirmAddButton(button);
  const item = state.menuItems.find((menuItem) => menuItem.id === itemId);
  showToast(`${item.name} foi adicionado ao carrinho.`);
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
      note: item.note,
      price: item.price,
    })),
  };

  if (database.enabled) {
    const { error: orderError } = await database.client.from("orders").insert({
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
    });

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

  state.cart = [];
  $("#generalNote").value = "";
  await saveOrders();
  renderCart();
  renderKitchen();
  renderAdminOrders();
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

async function updateOrderStatus(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  order.status = order.status === "Novo" ? "Em preparo" : "Finalizado";
  if (database.enabled) {
    const { error } = await database.client.from("orders").update({ status: order.status }).eq("id", orderId);
    if (error) {
      console.error(error);
      alert("Nao consegui atualizar o status do pedido.");
      return;
    }
  }

  await saveOrders();
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

async function resetMenuToDefault() {
  const confirmed = confirm("Restaurar o cardapio de exemplo? As alteracoes locais serao perdidas.");
  if (!confirmed) return;

  if (database.enabled) {
    const { error: deactivateError } = await database.client.from("menu_items").update({ active: false }).neq("id", "");
    if (deactivateError) {
      console.error(deactivateError);
      alert("Nao consegui limpar o cardapio antigo no banco de dados.");
      return;
    }

    const { error } = await database.client.from("menu_items").upsert(
      defaultMenuItems.map((item, index) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        description: item.description,
        price: item.price,
        image: item.image,
        sort_order: index + 1,
        active: true,
        updated_at: new Date().toISOString(),
      }))
    );

    if (error) {
      console.error(error);
      alert("Nao consegui restaurar o cardapio no banco de dados.");
      return;
    }
  }

  state.menuItems = [...defaultMenuItems];
  await saveMenu();
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

  $("#toast").addEventListener("click", (event) => {
    if (!event.target.closest("[data-scroll-cart]")) return;
    $("#toast").classList.remove("visible");
    scrollToCart();
  });

  $$("input[name='orderType']").forEach((input) => input.addEventListener("change", toggleDeliveryFields));
  $("#clearCart").addEventListener("click", () => {
    state.cart = [];
    renderCart();
  });
  $("#sendOrder").addEventListener("click", sendOrder);
  $("#clearOrders").addEventListener("click", async () => {
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
    renderKitchen();
    renderAdminOrders();
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
      await loadOrdersFromDatabase();
      renderKitchen();
      renderAdminOrders();
    })
    .on("postgres_changes", { event: "*", schema: "public", table: "order_items" }, async () => {
      await loadOrdersFromDatabase();
      renderKitchen();
      renderAdminOrders();
    })
    .subscribe();

  database.client.auth.onAuthStateChange((_event, session) => {
    state.isAdminLoggedIn = Boolean(session);
    renderAdmin();
  });
}

async function initApp() {
  bindEvents();

  if (database.enabled) {
    await loadSessionFromDatabase();
    await loadMenuFromDatabase();
    await loadOrdersFromDatabase();
    subscribeToDatabaseChanges();
  }

  renderCategories();
  renderMenu();
  renderCart();
  renderKitchen();
  renderAdminOrders();
  toggleDeliveryFields();
  renderAdmin();
}

initApp();

