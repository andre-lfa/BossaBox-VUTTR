# VUTTR

VUTTR (Very Useful Tools to Remember) é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

#### Tecnologias utilizadas:

- **SQLITE**
- **NodeJS**
- **Express**
- **TypeORM**


### Configuração e uso

Para rodar o projeto, instale as dependências e as dependências de desenvolvimento, inicialize o banco de dados e inicie o servidor.

```sh
$ yarn install
$ yarn typeorm migration:run
$ yarn dev
```

### Rotas e recursos

URL Base: Caso não seja feita alteração no código, a API irá subir com o endereço http://localhost:3000/.

|        Endpoint        | Método |                       Resposta                      |
|:----------------------:|:------:|:---------------------------------------------------:|
|         /tools         |   **GET**  |         Lista todas ferramentas cadastradas         |
| /tools?tag=nome_da_tag |   **GET**  | Lista as ferramentas que contêm aquela tag no banco |
|         /tools         |  **POST**  |         Adiciona uma nova ferramenta a lista        |
|       /tools/:id       | **DELETE** |  Deleta a ferramenta que corresponda ao id na lista |

### Créditos

Projeto executado com base no desafio do BossaBox: https://www.notion.so/Back-end-0b2c45f1a00e4a849eefe3b1d57f23c6

Projeto encontrado no repositório: https://github.com/CollabCodeTech/backend-challenges
