# Sistema de Login e Gerenciamento de Produtos

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina **Programar em Linguagem Interpretada** e consiste em uma aplicação React que implementa um sistema de autenticação e gerenciamento de produtos.

### 🎯 Objetivo
Construir uma aplicação simples usando React com HTML, CSS e JavaScript, demonstrando conceitos de:
- Autenticação de usuários
- Gerenciamento de estado
- Manipulação de listas
- Roteamento simples
- Interface responsiva

## 🚀 Funcionalidades

### 🔐 Sistema de Login
- Página de login com validação de credenciais
- Autenticação baseada em array de usuários predefinidos
- Mensagens de feedback para login bem-sucedido ou credenciais inválidas
- Interface moderna e responsiva

### 🏠 Página Home
- Listagem de produtos com ID, nome e preço
- Funcionalidade para adicionar novos produtos
- Funcionalidade para remover produtos existentes
- Formatação de preços em Real brasileiro (R$)

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção da interface
- **JavaScript (ES6+)** - Linguagem de programação principal
- **CSS3** - Estilização e layout responsivo
- **HTML5** - Estrutura das páginas

## 📂 Estrutura do Projeto

```
UNIFACISA-REACT-PROJECT/
├── node_modules/              # Dependências do projeto
├── public/                    # Arquivos públicos
├── src/
│   ├── assets/               # Recursos estáticos
│   ├── components/           # Componentes React
│   │   ├── Login.jsx         # Componente de login
│   │   ├── Login.css         # Estilos do login
│   │   ├── Home.jsx          # Componente da página home
│   │   └── Home.css          # Estilos da página home
│   ├── data/                 # Dados da aplicação
│   │   ├── usuarios.js       # Array de usuários
│   │   └── produtos.js       # Array inicial de produtos
│   ├── login/                # Módulo de login (se houver)
│   ├── App.css               # Estilos principais da aplicação
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globais
│   └── main.jsx              # Ponto de entrada da aplicação
├── .gitignore                # Arquivos ignorados pelo Git
├── eslint.config.js          # Configuração do ESLint
├── index.html                # Template HTML principal
├── package-lock.json         # Lock das dependências
├── package.json              # Configurações e dependências do projeto
├── README.md                 # Documentação do projeto
└── vite.config.js            # Configuração do Vite
```

## 👥 Dados de Teste

### Usuários Cadastrados
- **John Smith**: `john.smith@email.com` / `securepassword`
- **Carolina Fernandes**: `carol.f@email.com` / `carol_pass`
- **Michael Williams**: `mike.w@email.com` / `michael2024`
- **Ana Beatriz Costa**: `anabeatriz@email.com` / `anab_123`
- **Lucas Pereira**: `lucas.p@email.com` / `lucas_senha`
- **Emily Davis**: `emily.d@email.com` / `emilydavis`

### Produtos Iniciais
- Mouse sem fio Logitech MX Master 3S - R$ 599,90
- Teclado mecânico gamer HyperX Alloy Origins - R$ 499,50
- Webcam Full HD Logitech C920S Pro - R$ 349,99
- Microfone condensador Blue Yeti - R$ 799,00
- Monitor gamer LG UltraGear 27 polegadas - R$ 1.899,90
- Placa de vídeo NVIDIA GeForce RTX 4070 - R$ 4.500,00
- Caixa de som Bluetooth JBL Flip 6 - R$ 699,00
- Roteador Wi-Fi 6 TP-Link Archer AX55 - R$ 499,90

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/eduardo-oliveira-dev/unifacisa-react-project
cd unifacisa-react-project
```
2. Execute o projeto:
```bash
npm run dev

3. Acesse no navegador:
```
http://localhost:5173/
```

## 📱 Como Usar

1. **Login**: Na página inicial, digite o email e senha de um dos usuários cadastrados
2. **Autenticação**: Após login bem-sucedido, você será redirecionado para a página home
3. **Visualizar Produtos**: Na home, você verá a lista de produtos cadastrados
4. **Adicionar Produto**: Use o formulário no topo para adicionar novos produtos
5. **Remover Produto**: Clique no botão "Remover" ao lado de qualquer produto

## 🎨 Design

O projeto utiliza um design moderno com:
- **Cores**: Paleta azul e cinza com acentos verdes e vermelhos
- **Layout**: Cards centralizados com sombras suaves
- **Responsividade**: Adaptável para diferentes tamanhos de tela
- **Interatividade**: Efeitos hover e transições suaves

## 📚 Conceitos Demonstrados

- **React Hooks**: useState para gerenciamento de estado
- **Event Handling**: Manipulação de eventos de formulário
- **Array Methods**: map(), filter(), find() para manipulação de dados
- **Conditional Rendering**: Renderização condicional de elementos
- **Component Props**: Passagem de dados entre componentes
- **CSS Flexbox**: Layout responsivo e alinhamento
- **Form Validation**: Validação de formulários

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Programar em Linguagem Interpretada.
