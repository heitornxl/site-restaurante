create table if not exists public.menu_items (
  id text primary key,
  name text not null,
  category text not null,
  description text not null,
  price numeric(10, 2) not null default 0,
  image text not null,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key,
  type text not null check (type in ('mesa', 'entrega')),
  status text not null default 'Novo' check (status in ('Novo', 'Em preparo', 'Finalizado')),
  table_number text,
  customer_name text,
  customer_phone text,
  customer_address text,
  note text,
  total numeric(10, 2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id bigserial primary key,
  order_id uuid not null references public.orders(id) on delete cascade,
  menu_item_id text,
  name text not null,
  quantity integer not null default 1,
  note text,
  price numeric(10, 2) not null default 0
);

alter table public.menu_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

drop policy if exists "Todos podem ver itens ativos" on public.menu_items;
drop policy if exists "Admins autenticados gerenciam cardapio" on public.menu_items;
drop policy if exists "Todos podem ver pedidos" on public.orders;
drop policy if exists "Clientes podem criar pedidos" on public.orders;
drop policy if exists "Admins autenticados atualizam pedidos" on public.orders;
drop policy if exists "Admins autenticados removem pedidos" on public.orders;
drop policy if exists "Todos podem ver itens dos pedidos" on public.order_items;
drop policy if exists "Clientes podem criar itens dos pedidos" on public.order_items;
drop policy if exists "Admins autenticados removem itens dos pedidos" on public.order_items;

create policy "Todos podem ver itens ativos"
  on public.menu_items for select
  using (active = true or auth.role() = 'authenticated');

create policy "Admins autenticados gerenciam cardapio"
  on public.menu_items for all
  to authenticated
  using (true)
  with check (true);

create policy "Todos podem ver pedidos"
  on public.orders for select
  using (true);

create policy "Clientes podem criar pedidos"
  on public.orders for insert
  to anon, authenticated
  with check (true);

create policy "Admins autenticados atualizam pedidos"
  on public.orders for update
  to authenticated
  using (true)
  with check (true);

create policy "Admins autenticados removem pedidos"
  on public.orders for delete
  to authenticated
  using (true);

create policy "Todos podem ver itens dos pedidos"
  on public.order_items for select
  using (true);

create policy "Clientes podem criar itens dos pedidos"
  on public.order_items for insert
  to anon, authenticated
  with check (true);

create policy "Admins autenticados removem itens dos pedidos"
  on public.order_items for delete
  to authenticated
  using (true);

insert into public.menu_items (id, name, category, description, price, image, sort_order)
values
  ('parmegiana', 'File a parmegiana', 'Comidas', 'File empanado, molho da casa, queijo gratinado, arroz e fritas.', 42.90, './imagens/parmegiana.jpg', 1),
  ('risoto', 'Risoto de camarao', 'Comidas', 'Arroz cremoso, camarao salteado, ervas frescas e toque de limao.', 54.90, './imagens/risoto.jpg', 2),
  ('burger', 'Burger artesanal', 'Comidas', 'Blend bovino, queijo, cebola caramelizada, salada e maionese especial.', 36.90, './imagens/burger.jpg', 3),
  ('prato-feliz', 'Prato feliz', 'Comidas', 'Arroz, ovo, acompanhamentos coloridos e montagem divertida.', 29.90, './imagens/prato-feliz.jpg', 4),
  ('suco', 'Suco natural', 'Bebidas', 'Laranja, abacaxi com hortela ou morango. Feito na hora.', 11.90, './imagens/suco.jpg', 5),
  ('limonada', 'Limonada da casa', 'Bebidas', 'Limao siciliano, hortela, gelo e leve toque de gengibre.', 13.90, './imagens/limonada.jpg', 6),
  ('pudim', 'Pudim classico', 'Sobremesas', 'Pudim de leite condensado com calda de caramelo.', 14.90, './imagens/pudim.jpg', 7),
  ('brownie', 'Brownie com sorvete', 'Sobremesas', 'Brownie quente, sorvete de creme e calda de chocolate.', 19.90, './imagens/brownie.jpg', 8)
on conflict (id) do nothing;

do $$
begin
  alter publication supabase_realtime add table public.menu_items;
exception
  when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.orders;
exception
  when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.order_items;
exception
  when duplicate_object then null;
end $$;
