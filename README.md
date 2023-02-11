# Fundamentos do React com [ViteJS](https://vitejs.dev/)

Vite funciona como um template básico, um ponto de partida com o mínimo necessário para iniciar um projeto com React. É com ele que criaremos um simples sistema de lista de presença para dar os primeiros passos em React.

## Estrutura React

Os arquivos que formam nossa aplicação React estão dentro da pasta `src`. Nela nós temos o `main.jsx`, que importa o arquivo `App.jxs` e renderiza seu conteúdo através do `index.html`.

## JSX

JSX é a sintaxe utilizada pelo React para desenvolvermos interfaces misturando Javascript e HTML.

## Importando arquivos CSS

A pasta `styles` vai conter nossas folhas de estilo CSS. Para importar, por exemplo, o arquivo `global.css` ao nosso projeto basta adicionar o seguinte código ao arquivo `main.jsx`:

```
import './styles/global.css';
```
