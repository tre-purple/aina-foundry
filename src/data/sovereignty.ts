// Shared positioning content: the Sovereign Stack, its layers, and our values.
// Layer keys match the `stack` field in project frontmatter.

export type StackLayer = 'data' | 'compute' | 'intelligence';

export const stackLayers: {
  key: StackLayer;
  name: string;
  question: string;
  highlights: string[];
  summary: string;
}[] = [
  {
    key: 'data',
    name: 'Data Sovereignty',
    question: 'Whose hands hold the data?',
    highlights: ['hands'],
    summary:
      'Data should be governed by the place it is generated, collected, or stored — and local communities should determine how it is used. In our context, data is maintained and respected like ʻāina or wai.',
  },
  {
    key: 'compute',
    name: 'Compute Sovereignty',
    question: 'Whose machines run it, and how is it run?',
    highlights: ['machines', 'how'],
    summary:
      'The ability of a state, region, or organization to maintain strategic control over critical computing infrastructure. In our context, compute that utilizes regenerative practices first.',
  },
  {
    key: 'intelligence',
    name: 'Community Intelligence',
    question: 'Whose values shape how the system works in Hawaiʻi?',
    highlights: ['values', 'system works in Hawaiʻi'],
    summary:
      'Tools, agents, and AI built on that foundation — shaped by Native Hawaiian values and community needs, so we can power our own intelligence.',
  },
];

export const values = [
  {
    title: 'Culturally Rooted & Community Governed',
    description:
      'Native Hawaiian values, ʻike, and community participation shape how the infrastructure is designed, governed, and used.',
  },
  {
    title: 'Data Sovereignty',
    description:
      'Guided by the CARE Principles for Indigenous Data Governance, communities retain authority over their data, knowledge, access, and governance.',
  },
  {
    title: 'Sustainable Infrastructure We Control',
    description:
      'We build on hardware we own and manage, using recycled and repurposed computers where possible, and design systems that communities can repair, upgrade, and maintain locally.',
  },
  {
    title: 'Regenerative by Design',
    description:
      'We prioritize renewable energy, such as solar-powered compute, and build for sustainability and resilience over speed and scale.',
  },
];
