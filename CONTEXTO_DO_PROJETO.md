# Contexto do projeto - Cardapio digital Heitor

Este arquivo foi criado para continuar o projeto em outra conta/conversa do Codex sem perder o contexto.

## Resumo rapido para a proxima conversa

Estou criando um cardapio digital para restaurante chamado `heitor`. O projeto fica em `D:\Felipe\Documents\CRM`, e usa HTML, CSS e JavaScript puro, sem React, sem Next, sem Vite e sem npm/package.json. O site esta hospedado na Vercel e conectado ao Supabase. Quero manter o projeto simples, funcional e facil de entender, porque ainda estou aprendendo. Antes de grandes alteracoes, explique o que sera feito. Para alteracoes pequenas, prefiro economizar creditos quando eu pedir.

## Onde o projeto esta salvo

- Pasta local: `D:\Felipe\Documents\CRM`
- GitHub: `https://github.com/heitornxl/site-restaurante`
- Branch principal: `main`
- Site publicado: `https://heitor-ia.vercel.app/`
- Supabase project: `heitor-restaurante`
- Supabase URL: `https://vuxhpdxgoleclymoamtl.supabase.co`

Observacao: a chave `sb_publishable_...` do Supabase e publica e fica no frontend. Nao colocar `secret key` no site.

## Arquivos principais

- `index.html`: estrutura das telas Cliente, Pedidos e Admin.
- `styles.css`: visual premium, responsividade, animacoes e estilos das telas.
- `app.js`: logica do cardapio, carrinho, pedidos, admin e Supabase.
- `supabase-config.js`: URL e chave publica do Supabase.
- `supabase-schema.sql`: estrutura do banco e politicas do Supabase.
- `imagens/`: imagens locais usadas como fallback.
- `README.md`: instrucoes basicas do projeto.

## Como o site funciona hoje

### Area Cliente

- Mostra cardapio por categorias.
- Permite escolher pedido por mesa ou delivery.
- Tem carrinho com imagem do item.
- Ao adicionar um produto, abre uma janela de personalizacao.
- O cliente pode remover ingredientes.
- O cliente pode escolher adicionais pagos, como batata frita, salada extra, queijo extra, bacon extra, molho extra e ovo extra.
- O cliente pode escrever observacao do item e observacao geral.
- O pedido e enviado para o Supabase quando o banco esta configurado.

### Aba Pedidos

- Antes se chamava Fila, agora se chama `Pedidos`.
- O cliente ve apenas pedidos feitos naquele aparelho/navegador.
- Os pedidos sao separados em:
  - `Em andamento`
  - `Pedidos concluidos`
- Pedido finalizado tem botao `Pedir novamente`.
- Ao clicar em `Pedir novamente`, o carrinho e preenchido com os mesmos itens, quantidades, observacoes e valores daquele pedido finalizado.
- Se ja existir algo no carrinho, o site pede confirmacao antes de substituir.

Importante: esse historico e por aparelho. Se trocar de celular, limpar navegador ou usar outro navegador, o historico pode nao aparecer.

### Area Admin

- Admin faz login pelo Supabase Auth.
- Admin consegue gerenciar cardapio.
- Admin consegue adicionar/editar/remover itens.
- Admin consegue subir foto do item pelo painel.
- Admin ve controle da cozinha antes da edicao do cardapio.
- Admin pode atualizar status do pedido:
  - `Novo`
  - `Em preparo`
  - `Saiu para entrega` somente para delivery
  - `Finalizado`
- Admin tem filtros por categoria nos itens cadastrados.
- Botao perigoso de apagar finalizados foi movido para uma area separada chamada `Manutencao do historico`.
- Para apagar pedidos finalizados, precisa confirmar e digitar `APAGAR`.

## Categorias atuais

- Burgers
- Pratos prontos
- Refrigerantes
- Sucos naturais
- Drinks alcoolicos
- Sobremesas

## Supabase

O projeto usa Supabase para:

- `menu_items`: itens do cardapio.
- `orders`: pedidos.
- `order_items`: itens dos pedidos.
- Supabase Auth: login do admin.
- Realtime: atualizacao de pedidos/cardapio entre dispositivos.

Ja foi criada uma estrutura no arquivo `supabase-schema.sql`. Em algumas mudancas, pode ser necessario rodar SQL no Supabase manualmente.

Status extra importante:

```sql
alter table public.orders
  drop constraint if exists orders_status_check;

alter table public.orders
  add constraint orders_status_check
  check (status in ('Novo', 'Em preparo', 'Saiu para entrega', 'Finalizado'));
```

Esse SQL permite o status `Saiu para entrega`.

## Git e publicacao

Fluxo normal:

1. Alterar arquivos locais.
2. Testar localmente quando necessario.
3. `git add ...`
4. `git commit -m "mensagem"`
5. `git push origin main`
6. A Vercel publica automaticamente.

Ultimos tipos de mudancas feitas:

- Visual premium da area cliente.
- Melhorias de mobile.
- Area `Pedidos` no lugar de `Fila`.
- Historico por aparelho.
- Botao `Pedir novamente`.
- Protecao para apagar pedidos finalizados.
- Personalizacao de ingredientes e adicionais.

## Cuidados importantes

- Nao usar npm, framer-motion ou dependencias, a menos que eu peca explicitamente.
- Nao criar `package.json`.
- Projeto e HTML/CSS/JS puro.
- Antes de alteracoes grandes, explicar plano.
- Para economizar creditos, posso pedir `modo economico`: alterar sem testar navegador, sem commit e sem push.
- Para mudancas em pedido, carrinho, admin, banco ou Supabase, e melhor usar `modo completo`: alterar, testar, commit e push.
- Nunca colocar `secret key` do Supabase no frontend.
- O botao de apagar finalizados ainda apaga de verdade. Futuramente o ideal e trocar para `arquivar finalizados`, mantendo historico no banco.

## Pontos futuros recomendados

- Melhorar seguranca do Supabase com revisao de RLS.
- Criar login de cliente com telefone e codigo, se quiser historico entre aparelhos.
- Trocar apagar pedidos por arquivar pedidos.
- Criar perfis separados para admin/cozinha.
- Adicionar protecao contra spam de pedidos.
- Colocar imagens no Supabase Storage ou outro storage, em vez de imagens grandes em base64.
- Melhorar painel de relatorios do restaurante.

## Backup importante

Foi criada uma branch de backup antes da organizacao do historico:

- `backup/antes-historico-pedidos-0108b08`

Ela aponta para uma versao funcional anterior.

## Mensagem curta para colar na nova conversa

Leia o arquivo `D:\Felipe\Documents\CRM\CONTEXTO_DO_PROJETO.md` antes de mexer. O projeto e um cardapio digital de restaurante em HTML/CSS/JS puro, hospedado na Vercel, conectado ao Supabase e salvo no GitHub `heitornxl/site-restaurante`. Nao use npm nem dependencias sem eu pedir. Preserve carrinho, pedidos, admin, Supabase e historico por aparelho. Para mudancas pequenas, use modo economico se eu pedir. Para mudancas que mexem em pedido/banco/admin, teste antes de publicar.
