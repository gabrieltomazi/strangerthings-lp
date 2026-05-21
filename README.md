# 📺 Stranger Things: The Experience
https://github.com/user-attachments/assets/f96b8164-13c9-4e37-839e-ce51f7d73429

Um projeto interativo de interface web inspirado na série Stranger Things da Netflix. O objetivo principal deste projeto é proporcionar uma experiência imersiva através de animações fluidas, efeitos de scroll suave e tipografia temática.

## 🚀 Tecnologias Utilizadas
Este projeto foi totalmente modernizado e refatorado utilizando as melhores ferramentas para desenvolvimento robusto, animação e alta performance web:

<b>React & TypeScript:</b> Interface de usuário reescrita em TypeScript, garantindo tipagem estática, prevenção de erros em tempo de compilação, autocompletar inteligente e maior manutenibilidade.

<b>Tailwind CSS v4:</b> Adotado como motor de CSS utilitário nativo e integrado via plugin do Vite, oferecendo estilização rápida, responsiva e performática, substituindo a antiga solução baseada em styled-components.

<b>GSAP (GreenSock Animation Platform):</b> O motor de animações mais robusto do mercado, integrado de forma nativa com React utilizando o ecossistema oficial `@gsap/react`.

<b>ScrollSmoother:</b> Para criar a experiência de rolagem suave ("smooth scroll") fluida e premium em toda a página.

<b>ScrollTrigger:</b> Para sincronizar e disparar as animações com precisão absoluta de acordo com a rolagem da página.

<b>SplitText:</b> Para segmentação de textos em linhas, palavras e caracteres individuais, permitindo efeitos visuais refinados
de revelação de texto.

<b>Google Fonts:</b> Tipografia personalizada utilizando as fontes **Poppins** e a marcante **Benguiat** (típica do universo da série).

## ⚡ Funcionalidades Principais
<b>Scroll Infinito de Cidades:</b> Um letreiro (marquee) puramente em CSS que exibe as sedes da experiência sem interrupções.

<b>Animações de Texto:</b> Efeitos de revelação de texto letra por letra na seção Hero.

<b>Efeito Hover em Cards:</b> Interação de zoom e destaque (brightness) ao passar o mouse pelos ingressos das cidades.

<b>Smooth Navigation:</b> Sistema de ancoragem que desliza suavemente até as seções através do ScrollSmoother.

<b>Responsividade Total:</b> Layout adaptado para Desktop, Tablets e dispositivos Mobile (abaixo de 600px).

## 🛠️ Como rodar o projeto
Clone este repositório:

```
Bash
git clone https://github.com/gabrieltomazi/strangerthings-lp.git
```
Navegue até a pasta do projeto:
```
Bash
cd strangerthings-lp
npm run dev
```
## 📂 Estrutura de Arquivos
Abaixo está a organização de pastas do projeto após a refatoração para React, TypeScript e a arquitetura de Componentes Atômicos:
```plaintext
strangerthings-lp/
├── src/
│   ├── assets/
│   │   ├── fonts/            # Fontes personalizadas (ex: Benguiat Bold)
│   │   └── images/           # Assets visuais (.webp e .svg)
│   ├── components/           # Componentes modulares reutilizáveis
│   │   ├── atoms/            # Elementos menores (ex: Button, ArrowSvg)
│   │   ├── molecules/        # Blocos funcionais (ex: Header, BgMonster)
│   │   ├── organisms/        # Seções completas da página (ex: Hero, CitySection, Footer)
│   │   └── index.ts          # Exportador geral de componentes
│   ├── Home.tsx              # Tela e layout principal do projeto
│   ├── main.tsx              # Ponto de entrada do React e inicialização
│   └── vite-env.d.ts         # Definições globais de tipos do Vite
├── index.css                 # Importação do Tailwind CSS v4 e estilos globais
├── index.html                # Estrutura HTML principal (ponto de montagem #root)
├── package.json              # Script e gerenciamento de dependências
├── tsconfig.json             # Configurações e diretivas do TypeScript
└── vite.config.js            # Configurações do Vite (com suporte ao Tailwind)
```
## ✒️ Autor
Desenvolvido por Gabriel Tomazi —   [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-tomazi/)
