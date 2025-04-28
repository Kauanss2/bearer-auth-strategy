# Projeto de Autenticação com Token

Este é um projeto simples de autenticação usando tokens. A autenticação é feita verificando se o token fornecido no cabeçalho `Authorization` da requisição é válido. O código utiliza a estratégia de **Bearer Token** para validar o token.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework web para Node.js.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **JWT (JSON Web Token)** (se implementado no futuro): Para validação de tokens.

## Funcionalidade

Este projeto possui uma estratégia de autenticação chamada `BearerTokenStrategy`, que realiza os seguintes passos:

1. **Recebe o Token**: O token de autenticação é enviado no cabeçalho `Authorization` da requisição.
2. **Verifica a Validade do Token**: A estratégia verifica se o token é válido comparando-o com um valor pré-definido. (Isso pode ser ajustado para consultas a bancos de dados ou sistemas externos.)
3. **Resposta**: Caso o token seja válido, o sistema prossegue com a requisição. Caso contrário, retorna um erro de falha na autenticação.

## Estrutura do Projeto
