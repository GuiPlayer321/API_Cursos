    ## API Cursos

    Primeiro projeto back-end desenvolvido por mim, trata-se de um CRUD bem básico de cursos. 
    Esse projeto foi feito através da matéra de desenvolvimento WEB na FATEC Franca

    ## Executar o projeto localmente

    Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
    [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
    Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
    Para realizar as requisões pode se utilizar o [Insomnia](https://insomnia.rest/download), [Postman](https://www.postman.com/), [ReqBin](https://reqbin.com/) ou instalar
    a extensão do [ThunerClient](https://www.thunderclient.com/) direto no [VSCode](https://code.visualstudio.com/).

    ```bash
    # Clone este repositório
    $ git clone <https://github.com/GuiPlayer321/API_Cursos>

    # Acesse a pasta do projeto no terminal/cmd
    $ cd BACK_END

    # Instale as dependências
    $ npm install

    # Execute a aplicação 
    $ npm run dev

    # O servidor inciará na porta:3001 - acesse <http://localhost:3001>
    ```

    ## Documentação da API

    #### Retornar todos os cursos
    ```http
    GET /curso
    ```

    #### Retorna um item
    ```http
    GET /curso/${id}
    ```

    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `int` | **Obrigatório**. O ID do curso que você quer |

    #### Deleta um item
    ```http
    DELETE /curso/${id}
    ```

    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `int` | **Obrigatório**. O ID do curso que você quer deletar|

    #### Atualiza um item
    ```http
    PUT /curso/${id}
    ```

    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `int` | **Obrigatório**. O ID do curso que você quer |
    | `curso`      | `string` | **Obrigatório**. O nome atualizado do curso |

    #### Inseri um item
    ```http
    POST /curso
    ```

    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `novo_curso`      | `string` | **Obrigatório**. O nome do novo do curso |


    ## Licença
    O projeto foi desenvolvido por mim Guilherme que detenho dos direitos do projeto.

