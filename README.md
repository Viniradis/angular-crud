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

## 🧪 Como testar o projeto CRUD (Angular + .NET 6.0)

Este projeto é composto por:

- **Frontend:** Angular 16  
- **Backend:** ASP.NET Core 6.0  
- **Banco de dados:** InMemory (ideal para testes rápidos, sem necessidade de configurar SQL Server)

---

### ✅ Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes itens instalados:

| Tecnologia   | Versão mínima | Link para download                     |
|--------------|----------------|----------------------------------------|
| Node.js      | 18.x           | [nodejs.org](https://nodejs.org/)      |
| Angular CLI  | 16.x           | `npm install -g @angular/cli`          |
| .NET SDK     | 6.0            | [dotnet.microsoft.com](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) |
| Git          | Qualquer       | [git-scm.com](https://git-scm.com/)    |

---

### 🚀 Passo a passo para rodar o projeto

#### 🔧 Backend (.NET 6.0)

1. **Clonar o repositório da API**
   ```bash
   git clone https://github.com/Viniradis/projeto-crud-api.git
   cd projeto-crud-api
Executar a API: dotnet run

A API estará disponível em:
http://localhost:7221

Documentação da API via Swagger:
http://localhost:7221/swagger

⚠️ Nota: O protocolo foi alterado de HTTPS para HTTP para facilitar testes locais sem necessidade de certificado SSL.

💻 Frontend (Angular 16)
Clonar o repositório do Angular
```bash
git clone https://github.com/Viniradis/angular-crud.git
cd angular-crud

Instalar as dependências
npm install

Executar o projeto Angular
ng serve

A aplicação estará disponível em:
http://localhost:4200

🧪 Testando a aplicação
Ao acessar http://localhost:4200, você verá a interface do CRUD.

Certifique-se de que a API está rodando em paralelo (http://localhost:7221) para que o frontend consiga consumir os dados corretamente.

Todas as operações (Create, Read, Update, Delete) são persistidas em memória e reiniciadas ao parar a API.


