# heitor

Projeto de cardapio digital com pedidos por mesa e tele-entrega.

## Funcionalidades

- Cardapio separado por comidas, bebidas e sobremesas
- Carrinho de pedidos
- Pedido por mesa ou tele-entrega
- Painel da cozinha para acompanhar pedidos
- Area administrativa com login de treino
- Edicao local de itens do cardapio

## Login de treino

```txt
Usuario: admin
Senha: senha123
```

## Como abrir

Abra o arquivo `index.html` no navegador ou publique o projeto em uma hospedagem de site estatico, como Vercel ou Netlify.

## Observacao

Esta versao salva dados no navegador usando `localStorage`. Para uso real em restaurante, o proximo passo e conectar um banco de dados e login seguro.

## Configurar Supabase

1. Crie um projeto no Supabase.
2. Abra o editor SQL do Supabase.
3. Cole e execute o conteudo do arquivo `supabase-schema.sql`.
4. Em Authentication > Users, crie um usuario para o administrador do restaurante.
5. Em Project Settings > API, copie:
   - Project URL
   - anon public key
6. Cole esses valores no arquivo `supabase-config.js`.

Quando `supabase-config.js` estiver preenchido, o site passa a usar o banco online para cardapio e pedidos. A aba Pedidos mostra apenas os pedidos criados naquele navegador, enquanto o Admin continua vendo todos para atualizar o status.
