# 🛠️ Caixa de Ferramentas do Desenvolvedor

Uma aplicação interativa desenvolvida com React, TypeScript e Vite que demonstra o uso de React Hooks através de um carrossel de ferramentas de desenvolvimento.

## 📋 Sobre o Projeto

Esta aplicação foi criada para demonstrar os conceitos fundamentais dos React Hooks, especificamente o `useState`. O projeto consiste em um carrossel interativo que exibe diferentes ferramentas de desenvolvimento e permite ao usuário:

- Navegar entre as ferramentas usando botões "Anterior" e "Próximo"
- Adicionar novas ferramentas à lista
- Visualizar todas as ferramentas adicionadas em tempo real

### 🎯 Funcionalidades

- **Carrossel de Ferramentas**: Navegação circular entre diferentes tecnologias
- **Adicionar Ferramentas**: Interface para adicionar novas ferramentas à lista
- **Lista Dinâmica**: Exibição em tempo real de todas as ferramentas
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca para interfaces de usuário
- **TypeScript 5.0.2** - Superset do JavaScript com tipagem estática
- **Vite 4.4.5** - Ferramenta de build rápida e moderna
- **Docker** - Containerização para desenvolvimento e produção
- **ESLint** - Linter para manter qualidade do código

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (opcional, para execução em container)

## 🔧 Instalação e Execução

### 1. Clonando o Repositório

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/hooks-react.git

# Navegue até o diretório do projeto
cd hooks-react
```

### 2. Instalação das Dependências

```bash
# Instale as dependências do projeto
npm install
```

### 3. Executando a Aplicação

#### Modo Desenvolvimento (Local)

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

#### Modo Desenvolvimento (Docker)

```bash
# Construa e execute o container
docker-compose up --build

# Ou apenas execute se já foi construído
docker-compose up
```

A aplicação estará disponível em: `http://localhost:3000`

### 4. Outros Comandos Úteis

```bash
# Executa o linter para verificar qualidade do código
npm run lint

# Constrói a aplicação para produção
npm run build

# Visualiza a build de produção
npm run preview
```

## 🐳 Execução com Docker

O projeto inclui configuração Docker para facilitar o desenvolvimento:

### Docker Compose (Recomendado)

```bash
# Construir e executar
docker-compose up --build

# Executar em background
docker-compose up -d

# Parar os containers
docker-compose down
```

### Docker Manual

```bash
# Construir a imagem
docker build -t hooks-react .

# Executar o container
docker run -p 3000:5173 -v $(pwd):/app -v /app/node_modules hooks-react
```

## 📁 Estrutura do Projeto

```
hooks-react/
├── public/
│   ├── trybe.png          # Logo da Trybe
│   └── vite.svg           # Ícone do Vite
├── src/
│   ├── assets/
│   │   └── react.svg      # Ícone do React
│   ├── App.css            # Estilos da aplicação
│   ├── App.tsx            # Componente principal
│   ├── index.css          # Estilos globais
│   ├── main.tsx           # Ponto de entrada da aplicação
│   └── vite-env.d.ts      # Definições de tipos do Vite
├── docker-compose.yml     # Configuração do Docker Compose
├── Dockerfile             # Configuração do Docker
├── index.html             # Template HTML
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração do TypeScript
├── tsconfig.node.json     # Configuração do TypeScript para Node
├── vite.config.ts         # Configuração do Vite
└── README.md              # Este arquivo
```

## 🎮 Como Usar

1. **Navegação**: Use os botões "Anterior" e "Próximo" para navegar entre as ferramentas
2. **Adicionar Ferramenta**: Digite o nome de uma nova ferramenta no campo de texto e clique em "Adicionar"
3. **Visualizar Lista**: Todas as ferramentas (incluindo as adicionadas) são exibidas na lista abaixo

## 🧪 Conceitos Demonstrados

Este projeto demonstra os seguintes conceitos do React:

- **useState Hook**: Gerenciamento de estado local
- **Manipulação de Arrays**: Adição dinâmica de elementos
- **Event Handlers**: Manipulação de eventos de clique e input
- **Renderização Condicional**: Exibição baseada em estado
- **Mapeamento de Listas**: Renderização de arrays como elementos JSX

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvido por

Este projeto foi desenvolvido como parte dos estudos de React Hooks e gerenciamento de estado em aplicações React.

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐
