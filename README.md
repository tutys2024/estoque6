# Sistema de Controle de Estoque - GAV Resorts

## 📱 PWA Moderno e Altamente Visual

Um sistema completo de controle de estoque desenvolvido como Progressive Web App (PWA) para GAV Resorts, com interface moderna, altamente visual e conectado ao Firebase.

## ✨ Características Principais

### 🎨 Interface Moderna e Visual
- Design moderno com gradientes e animações suaves
- Interface altamente visual com cards, gráficos e indicadores coloridos
- Responsivo para desktop e mobile
- Tema escuro/claro automático
- Animações e transições fluidas com Framer Motion

### 🔥 Integração Firebase
- Conexão completa com Firebase Realtime Database
- Autenticação de usuários
- Armazenamento de imagens no Firebase Storage
- Sincronização em tempo real

### 📱 Funcionalidades PWA
- Instalável como aplicativo nativo
- Funciona offline com Service Worker
- Notificações push
- Sincronização em background
- Ícones e splash screens personalizados

### 📊 Funcionalidades do Sistema

#### Dashboard
- Visão geral com estatísticas em tempo real
- Gráficos de movimentação mensal
- Distribuição por categorias
- Atividade recente
- Alertas de estoque

#### Controle de Estoque
- Lista visual de produtos com cards modernos
- Filtros por categoria e status
- Busca em tempo real
- Indicadores visuais de estoque (Normal, Baixo, Fora)
- Barras de progresso para níveis de estoque

#### Adicionar Itens
- Formulário intuitivo e visual
- Upload de imagens
- Validação em tempo real
- Integração com Firebase
- Feedback visual de sucesso/erro

#### Relatórios e Análises
- Gráficos interativos (Recharts)
- Análise de movimentação
- Evolução de valor do estoque
- Distribuição por categorias
- Itens mais movimentados
- Alertas de estoque
- Exportação de relatórios

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Recharts** - Gráficos
- **Firebase** - Backend e banco de dados
- **Service Worker** - Funcionalidades PWA

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone <repository-url>

# Entre no diretório
cd estoque-gav-pwa

# Instale as dependências
pnpm install

# Execute o servidor de desenvolvimento
pnpm run dev --host
```

### Build para Produção
```bash
# Gerar build otimizado
pnpm run build

# Preview do build
pnpm run preview
```

## 🔧 Configuração Firebase

O projeto já está configurado com as credenciais do Firebase fornecidas:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBtHsMyqpfsxBtjKhIfsdob3KPSqUuNW8I",
  authDomain: "estoque1-c5809.firebaseapp.com",
  databaseURL: "https://estoque1-c5809-default-rtdb.firebaseio.com",
  projectId: "estoque1-c5809",
  storageBucket: "estoque1-c5809.firebasestorage.app",
  messagingSenderId: "336482475976",
  appId: "1:336482475976:web:6dad267532360b718b2afd"
}
```

## 📱 Funcionalidades PWA

### Instalação
- O app pode ser instalado como aplicativo nativo
- Prompt de instalação automático
- Ícones personalizados (192x192 e 512x512)

### Offline
- Funciona offline com cache inteligente
- Sincronização automática quando online
- Notificações de status de conexão

### Notificações
- Notificações push para alertas de estoque
- Permissões solicitadas automaticamente
- Integração com sistema de notificações do dispositivo

## 🎯 Melhorias Implementadas

### Usabilidade
- Interface intuitiva e fácil de usar
- Navegação fluida com animações
- Feedback visual imediato
- Responsividade completa

### Performance
- Carregamento rápido com Vite
- Lazy loading de componentes
- Otimização de imagens
- Cache inteligente

### Acessibilidade
- Contraste adequado
- Navegação por teclado
- Textos alternativos
- Estrutura semântica

## 📊 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   ├── Dashboard.jsx    # Dashboard principal
│   ├── Inventory.jsx    # Lista de produtos
│   ├── AddItem.jsx      # Formulário de adição
│   └── Reports.jsx      # Relatórios e gráficos
├── lib/
│   ├── firebase.js      # Configuração Firebase
│   └── pwa.js          # Utilitários PWA
├── App.jsx             # Componente principal
└── main.jsx           # Entry point

public/
├── manifest.json       # Manifest PWA
├── sw.js              # Service Worker
├── icon-192.png       # Ícone 192x192
└── icon-512.png       # Ícone 512x512
```

## 🔐 Segurança

- Validação de dados no frontend
- Regras de segurança do Firebase
- Sanitização de inputs
- Autenticação obrigatória

## 📈 Próximos Passos

- Implementar autenticação de usuários
- Adicionar mais tipos de relatórios
- Implementar sistema de backup
- Adicionar notificações por email
- Integração com código de barras
- Sistema de múltiplos usuários/permissões

## 🤝 Suporte

Para suporte técnico ou dúvidas sobre o sistema, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido para GAV Resorts** - Sistema de Controle de Estoque PWA

