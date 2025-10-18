# 📦 Projeto Front-End CRUD com Angular 16

Este projeto é uma aplicação front-end desenvolvida com **Angular 16**, que implementa as operações básicas de **CRUD (Create, Read, Update, Delete)**. Ele foi criado como parte de um desafio técnico, com foco em boas práticas de desenvolvimento, organização de código e integração com uma API RESTful.

---

## ✨ Funcionalidades

- ✅ Listagem de produtos com visualização dinâmica  
- ➕ Criação de novos produtos via formulário reativo  
- ✏️ Edição de produtos existentes  
- 🗑️ Exclusão com confirmação  
- 🔄 Atualização automática da interface após cada operação  

---

## 🧰 Tecnologias utilizadas

- **Angular 16** com TypeScript  
- **Angular Material** para componentes visuais  
- **Reactive Forms** para validação e controle de formulários  
- **HttpClient** para comunicação com o back-end  
- **Routing** para navegação entre páginas  

---

## 📸 Prints da aplicação

Abaixo estão algumas capturas de tela que demonstram o funcionamento da aplicação:

### 🖼️ Tela de listagem
Tela de listagem: <img width="1138" height="556" alt="listagem produtos" src="https://github.com/user-attachments/assets/4c5de3e7-9d57-408f-95af-b4c02fa9e9b9" />


### 🖼️ Formulário de criação
Formulário de criação <img width="1150" height="426" alt="cadastrar produto" src="https://github.com/user-attachments/assets/b18d4690-f30a-49b9-8028-731d8c8f3da0" />


### 🖼️ Edição de produtos
Edição de produtos  <img width="1124" height="429" alt="image" src="https://github.com/user-attachments/assets/8ddc9ba4-d796-4f42-a213-8184038c5144" />


### 🖼️ Confirmação de exclusão
Confirmação de exclusão <img width="1100" height="551" alt="exclusão produtos" src="https://github.com/user-attachments/assets/67b73e49-127e-4fe5-8749-69a29a414006" />


---

##  Para testar o CRUD do Angular

## 🚀 Passo a passo para rodar a API (.NET) juntamente com o Angular 

Este projeto utiliza banco de dados **em memória**, ideal para testes rápidos sem necessidade de configurar SQL Server.


   ```bash
🔹 1. Clonar o Repositório
   git clone https://github.com/Viniradis/projeto-crud-api.git
   cd projeto-crud-api

🔹 2. Rodar a API
bash
dotnet run

🔹 3. A API será iniciada e estará disponivel em:
https://localhost:7221

🔹 4. Você pode acessar a documentação Swagger em:
https://localhost:7221/swagger


🔹 5. Clonar o Repositório Angular
   git clone https://github.com/Viniradis/angular-crud.git
   cd angular-crud

🔹 6. Instalar as dependências
   npm install

🔹 7. Rodar o projeto Angular
   ng serve

🔹 8. A aplicação estará disponível em:
   http://localhost:4200




