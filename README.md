# Portfólio Pessoal

Este é um site de portfólio pessoal moderno e responsivo construído com Next.js, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React TSParticles
- EmailJS

## Funcionalidades

- Design moderno e responsivo
- Animações suaves usando Framer Motion
- Efeito de partículas interativo
- Formulário de contato funcional
- Navegação suave entre seções
- Otimizado para SEO
- Totalmente acessível

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` na raiz do projeto e adicione suas credenciais do EmailJS:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

4. Inicie o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Personalização

- Imagens: Substitua as imagens na pasta `public` com suas próprias imagens
- Conteúdo: Edite os textos e informações nos componentes em `src/components`
- Estilos: Personalize as cores e estilos em `tailwind.config.ts` e `src/app/globals.css`
- EmailJS: Configure seu template e serviço no [EmailJS Dashboard](https://dashboard.emailjs.com)

## Estrutura do Projeto

```
src/
  ├── app/
  │   ├── layout.tsx
  │   ├── page.tsx
  │   └── globals.css
  ├── components/
  │   ├── Header.tsx
  │   ├── Hero.tsx
  │   ├── About.tsx
  │   ├── Projects.tsx
  │   ├── Contact.tsx
  │   └── Footer.tsx
  └── config/
      └── emailjs.ts
```

## Deploy

O projeto está pronto para ser implantado na Vercel. Basta conectar seu repositório e configurar as variáveis de ambiente.

## Licença

MIT
