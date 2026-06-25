## Projeto Finance

# Requisitos funcionais (usuário vê e entra em contato)

- [ ] Usuário se autentica no app/web
- [ ] Usuário cria sua pópria conta
- [ ] Receber receitas e despesas p/ saldo
- [ ] Receber últimos lançamentos realizados
- [ ] Receber os lançamentos em função do mês/ano e termo de busca
- [ ] Cadastrar novos lançamentos
- [ ] Editar lançamentos
- [ ] Excluir lançamentos
- [ ] Receber lista de categorias
- [ ] Cadastrar novas categorias
- [ ] Editar categorias
- [ ] Excluir categorias
- [ ] Receber dadis do usuário logado
- [ ] Editar o perfil do usuário
- [ ] Excluir a senha do usuário

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
