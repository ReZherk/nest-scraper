# 🕷️ Nest Scraper

Proyecto de prueba desarrollado con **NestJS** para explorar y comprender el scraping web, tanto estático como dinámico, aplicando los conceptos en un entorno práctico.

## 📦 Clonar el repositorio

```bash
git clone https://github.com/ReZherk/nest-scraper.git
cd nest-scraper
```

## 🛠️ Requisitos

- **Node.js** v23.13.0

## 📁 Estructura del proyecto

```
src
│
├── scraper
│   ├── scraper.module.ts
│   ├── scraper.controller.ts
│   ├── services
│   │     ├── static-scraper.service.ts
│   │     └── dynamic-scraper.service.ts
│   │
│   └── interfaces
│         └── article.interface.ts
│
├── app.module.ts
└── main.ts
```

## 📚 Dependencias

Instalar con:

```bash
npm install axios cheerio puppeteer
```

| Librería | Descripción |
|----------|-------------|
| **Axios** | Cliente HTTP para Node.js. Realiza solicitudes a páginas web (GET, POST, etc.) y obtiene su contenido HTML. |
| **Cheerio** | Interpreta y manipula HTML en el servidor con una sintaxis similar a jQuery (`$('div.title')`). Ideal para extraer datos del HTML descargado con Axios. |
| **Puppeteer** | Controla un navegador Chromium/Chrome de forma automática. Perfecto para páginas dinámicas que requieren renderizado de JavaScript. |
