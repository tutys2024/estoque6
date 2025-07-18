# Configuração para GitHub Pages

Este projeto foi configurado para ser hospedado no GitHub Pages. Siga os passos abaixo para fazer o deploy:

## Configurações Realizadas

1. **vite.config.js**: Adicionada configuração `base: '/estoque-gav-pwa/'` para funcionar corretamente no GitHub Pages
2. **package.json**: Adicionado script `deploy` e dependência `gh-pages`
3. **GitHub Actions**: Criado workflow automático para deploy em `.github/workflows/deploy.yml`

## Como fazer o deploy

### Opção 1: Deploy Automático (Recomendado)

1. Faça push do código para o repositório no GitHub
2. Vá em **Settings** > **Pages** no seu repositório
3. Em **Source**, selecione **GitHub Actions**
4. O deploy será feito automaticamente a cada push na branch `main`

### Opção 2: Deploy Manual

1. Instale as dependências: `npm install`
2. Execute o comando: `npm run deploy`

## Configurações no GitHub

1. No seu repositório, vá em **Settings** > **Pages**
2. Em **Source**, selecione:
   - **GitHub Actions** (para deploy automático)
   - OU **Deploy from a branch** > **gh-pages** (para deploy manual)

## URL do Site

Após o deploy, seu site estará disponível em:
`https://[seu-usuario].github.io/estoque-gav-pwa/`

## Observações Importantes

- O nome do repositório deve ser `estoque-gav-pwa` para que as configurações funcionem corretamente
- Se você mudar o nome do repositório, atualize a propriedade `base` no `vite.config.js`
- Certifique-se de que o repositório seja público ou tenha GitHub Pages habilitado para repositórios privados

