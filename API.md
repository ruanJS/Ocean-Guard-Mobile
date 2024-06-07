# OceanGuard Mobile Application

## Grupo NEXUS
Ruan Guedes - rm551096 |
Ana Beatriz - rm552536

Bem-vindo à documentação da API do OceanGuard Mobile Application. Este documento descreve os principais endpoints da API, como usá-los e o que esperar em termos de resposta. Nosso objetivo é fornecer uma interface clara e fácil de usar para gerenciar observações no sistema por meio do aplicativo móvel.

---

## Sumário

1. [Introdução](#introdução)
2. [Endpoints de Usuário](#endpoints-de-usuário)
   - [Login](#login)
   - [Registro](#registro)
3. [Endpoints de Observação](#endpoints-de-observação)
   - [Obter Todas as Observações](#obter-todas-as-observações)
   - [Criar Observação](#criar-observação)
   - [Excluir Observação](#excluir-observação)
4. [Como Executar o Projeto](#como-executar-o-projeto)
5. [Contato](#contato)

---

## Introdução

O OceanGuard Mobile Application é um sistema desenvolvido pelo grupo NEXUS com o objetivo de gerenciar e analisar observações relacionadas ao oceano por meio de um aplicativo móvel. A API permite autenticar usuários, registrar novas observações, listar todas as observações e excluir observações existentes.

---

## Endpoints de Usuário

### Login

**URL:** `/login`  
**Método:** `POST`  
**Descrição:** Autentica um usuário e retorna um token JWT.

**Exemplo de Requisição:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Exemplo de Resposta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

# Registro

**URL:** `/register`
**Método:** `POST`
**Descrição:** Registra um novo usuário.

**Exemplo de Requisição:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Exemplo de Resposta:**
```json
{
  "id": 1,
  "email": "user@example.com"
}
```

# Endpoints de Observação
**Obter Todas as Observações**
**URL:** /observations
**Método:** GET
**Descrição:** Retorna todas as observações.

**Exemplo de Requisição:**
```
GET /observations HTTP/1.1
Host: 10.0.2.2:8080
Authorization: Bearer [token]
```

**Exemplo de Resposta:**
```json
[
  {
    "id": 1,
    "type": "Tipo 1",
    "description": "Descrição 1"
  },
  {
    "id": 2,
    "type": "Tipo 2",
    "description": "Descrição 2"
  }
]
```

# Criar Observação
**URL:** `/observations/add`
**Método:** `POST`
**Descrição:** Cria uma nova observação.

**Exemplo de Requisição:**
```json
{
  "type": "Tipo 1",
  "description": "Descrição 1"
}
```

**Exemplo de Resposta:**
```json
{
  "id": 3,
  "type": "Tipo 1",
  "description": "Descrição 1"
}
```

**Excluir Observação**
**URL:** /observations/{id}
**Método:** DELETE
**Descrição:** Exclui uma observação pelo ID.

**Exemplo de Requisição:**
```json
{
  "message": "Observação excluída com sucesso."
}
```

## Como Executar o Projeto

Para executar o OceanGuard Mobile Application localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/oceanguard-mobile-application.git
2. **Navegue até o diretório do projeto:**
   ```bash
   cd oceanguard-mobile-application
3. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/oceanguard-mobile-application.git
4. **Instale as dependências:**
   ```bash
   npm install
5. **Inicie o aplicativo no seu emulador ou dispositivo:**
   ```bash
   npm start

   
   
