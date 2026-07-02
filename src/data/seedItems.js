export const seedItems = [
  {
    id: crypto.randomUUID(),
    title: 'React Documentation',
    url: 'https://react.dev',
    tags: ['react', 'docs', 'frontend'],
    favorite: true,
    createdAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Vite Getting Started',
    url: 'https://vitejs.dev/guide/',
    tags: ['vite', 'tooling'],
    favorite: false,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Project Ideas',
    url: '',
    tags: ['ideas', 'todo'],
    favorite: false,
    createdAt: new Date(Date.now() - 172800000).toISOString()
  }
];
