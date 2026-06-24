# Shivam Devraj — Portfolio

React + Vite + Tailwind CSS portfolio.

## Setup

```bash
npm install
npm run dev       # localhost pe chalega
npm run build     # production build
```

## Kaise edit kare

Har component file mein `// ✏️ EDIT HERE` comment hai — wahan se data change karo:

| File | Kya edit kare |
|------|---------------|
| `src/components/Hero.jsx` | Name, title, bio, CTA |
| `src/components/About.jsx` | About text, stats, journey |
| `src/components/Skills.jsx` | Skills aur levels (0-100) |
| `src/components/Experience.jsx` | Jobs/internships add karo |
| `src/components/Projects.jsx` | Projects add/remove karo |
| `src/components/WhyHire.jsx` | Reasons update karo |
| `src/components/Workflows.jsx` | Workflow steps |
| `src/components/DSA.jsx` | DSA stats aur topics |
| `src/components/Contact.jsx` | Email, GitHub, LinkedIn links |

## Contact Form Connect Karna (Formspree)

1. https://formspree.io pe free account banao
2. Ek form create karo — form ID milega (e.g. `xpzvwkab`)
3. `Contact.jsx` mein yeh code replace karo form ke `<div>` ko:

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* inputs waise hi rahenge, bas button type="submit" karo */}
</form>
```

## Vercel pe Deploy Karna

```bash
npm install -g vercel
vercel
```

Ya GitHub se connect karo — Vercel auto-deploy karega.
