// Site-wide constants shared by the header, footer, and pages.

// Prefix an internal path with the configured `base`, so the site still works if it moves.
export const withBase = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const contactEmail = 'ainafoundry@purplemaia.org';

export const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: 'Projects', href: withBase('projects/') },
  { label: 'About', href: withBase('about/') },
  { label: 'Blog', href: 'https://blog.labs.purplemaia.org/', external: true },
];

export const statusLabels: Record<string, string> = {
  active: 'Active',
  prototype: 'Prototype',
  testing: 'Testing',
  'initial-build': 'Initial Build',
  venture: 'Venture',
  research: 'Research',
  completed: 'Completed',
};
