# 🚀 Portfolio - Nicolas Giudice

Portfolio personal desarrollado con **Next.js 16**, **TypeScript** y **Tailwind CSS**, implementando principios de **Clean Architecture** para un código mantenible, escalable y testeable.

---

## ✨ Características

- ⚡ **Next.js 15** con App Router
- 📘 **TypeScript** para type safety
- 🎨 **Tailwind CSS** para estilos
- 🏗️ **Clean Architecture** - Código organizado en capas
- 📦 **Modular** - Separación por features/módulos
- 🧪 **Testeable** - Arquitectura que facilita testing
- ♿ **Accesible** - Siguiendo mejores prácticas
- 📱 **Responsive** - Adaptado a todos los dispositivos

---

## 🏗️ Arquitectura del Proyecto

Este proyecto sigue los principios de **Clean Architecture**, organizando el código en capas bien definidas:

```
├── app/                   # Next.js App Router (solo páginas/rutas)
├── modules/               # Módulos de dominio (Clean Architecture)
│   ├── about/             # Módulo "Sobre mí"
│   ├── contact/           # Módulo de contacto
│   ├── projects/          # Módulo de proyectos
│   ├── resume/            # Módulo de CV
│   └── skills/            # Módulo de habilidades
├── shared/                # Código compartido
│   └── ui/components/     # Componentes compartidos
└── types/                 # Tipos TypeScript compartidos
```

---

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ngiudi/ngiudi-portfolio.git

# Entrar al directorio
cd portfolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm start        # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

---

## 🛠️ Tecnologías Utilizadas

### Core
- **Framework**: Next.js 15
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS

### UI/UX
- **Iconos**: Heroicons
- **Fuentes**: Geist Sans & Geist Mono

### Arquitectura
- **Patrón**: Clean Architecture
- **Organización**: Feature-based modules

---

## 🎨 Personalización

### Colores del Tema

Los colores están inspirados en VS Code Dark Theme y se pueden personalizar en `app/globals.css`.

### Componentes

Todos los componentes compartidos están en `shared/ui/components/` y pueden ser reutilizados en cualquier módulo.

---

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
