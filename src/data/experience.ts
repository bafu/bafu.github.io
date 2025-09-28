export type Experience = {
  period: string
  title: string
  organization: string
  organizationUrl: string
  description: string
  skills: string[]
}

export const experiences: Experience[] = [
  {
    period: '2020 - Present',
    title: 'Founder & CEO/CTO',
    organization: 'Numbers Protocol',
    organizationUrl: 'https://www.numbersprotocol.io/',
    description:
      'Built an open, decentralized protocol for digital media provenance. Secured millions of digital assets and won multiple international awards including the Tech4Trust Award.',
    skills: ['Blockchain', 'Open Source', 'Product Development']
  },
  {
    period: '2017 - 2020',
    title: 'Founder & CTO',
    organization: 'DT42',
    organizationUrl: 'https://dt42.io/',
    description:
      'Created an AI knowledge engine that helps organizations transform content into interactive knowledge bases. Led technical team and product vision.',
    skills: ['Artificial Intelligence', 'Product Development', 'Technical Leadership']
  },
  {
    period: '2014 - 2017',
    title: 'Techlead',
    organization: 'Canonical Ltd.',
    organizationUrl: 'https://canonical.com/',
    description:
      "Contributed to Ubuntu's core system integration. Led key OEM partnerships with major hardware manufacturers to optimize Ubuntu for their devices.",
    skills: ['Linux', 'Open Source', 'System Integration']
  }
]
