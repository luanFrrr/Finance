# Projeto Finance API REST

## Requisitos funcionais (usuário vê e entra em contato)

- [x] Usuário se autentica no app/web
      POST /usuario/login

- [x] Usuário cria sua pópria conta
      POST /usuario/registro

- [x] Receber dados do usuário logado
      GET /usuarios (id_usuario -> token)

- [x] Editar o perfil do usuário
      PUT /usuarios (id_usuario -> token)

- [x] Editar a senha do usuário
      PUT /usuarios/password (id_usuario -> token)

- [ ] Receber receitas e despesas p/ saldo
- [x] Receber últimos lançamentos realizados
      GET / lancamentos/resumo (total receitas/ despesas e lista últimos lançamentos)

- [x] Receber os lançamentos em função do mês/ano e termo de busca
      GET /lancamentos

- [x] Cadastrar novos lançamentos
      POST /lancamentos

- [x] Editar lançamentos
      PUT /lancamentos/:id_lancamento

- [x] Excluir lançamentos
      DELETE /lancamentos/:id_lancamento

- [x] Receber lista de categorias
      GET /categorias

- [x] Cadastrar novas categorias
      POST /categorias

- [x] Editar categorias
      PUT /categorias/:id_categoria

- [x] Excluir categorias
      DELETE /categorias/:id_categoria

# Requisitos Não Funcionais(usuário não vê)

- [ ] A conta do usuário pode ser usada no app/web
- [ ] JWT para identificação do usuário logado
- [ ] Senha deve ser criptografada/HASH
- [ ] SQL puro ou ORM
- [ ] Qual banco utilizar (SQlite -> Postgre)

# Regras de Negócio

- [ ] Todos os campos são obrigatórios( lançamentos, usuário)
- [ ] Não deixar cadastrar duas contas com o mesmo email
- [ ] Não permitir excluir categoria que possui lançamento
- [ ] Não permitir cadastrar lançamentos ocm valor <= 0
