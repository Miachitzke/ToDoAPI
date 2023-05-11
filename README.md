# ToDoAPI
--------------

## Primeiros passos do sistema

- Abrir o terminal no diretório do projeto (com comando **cd** ou dependendo do sistema, direto na pasta do explorer clicando com direito do mouse)
- Usar o seguinte comando do docker pra gerar o build: **docker build -t todolistdatabase:1.0 .** (tem que colocar o ponto "." no final)
- Quando finalizar a geração da imagem, damos o run com o seguinte comando: **docker run -d -p 1433:1433 --name ToDoListDatabase todolistdatabase:1.0**
- Acessar o SqlServer ou outro software, como o DBeaver e iniciar a conexão com os seguintes dados:

```
 server: .,1433 (desse jeito, com "ponto" e vírgula
 User: sa
 Password: #ps123456 (com a cerquilha) 
 ```
 
 ## Após montagem do banco
 -----------------
 
 - Iniciar a API no VS 
 - Iniciar Front-End com **ng serve**
 
 ----------------
## Programa pronto para utilização
