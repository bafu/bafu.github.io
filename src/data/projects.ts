export type Project = {
  title: string
  url: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Nit - Create onchain provenance like Git',
    url: 'https://github.com/numbersprotocol/nit',
    description:
      'A toolkit for verifying the authenticity and integrity of digital media through cryptographic signatures and blockchain technologies.',
    tags: ['Digital Provenance', 'Web3', 'Open Standards']
  },
  {
    title: 'ERC-7053: Interoperable Digital Media Indexing',
    url: 'https://eips.ethereum.org/EIPS/eip-7053',
    description:
      'A universal indexing method to record, discover and retrieve the history of digital media on EVM-compatible blockchains.',
    tags: ['Digital Provenance', 'Web3', 'Open Standards']
  },
  {
    title: 'Capture Cam',
    url: 'https://github.com/numbersprotocol/capture-lite',
    description: 'The 1st web3 camera app with onchain provenance and C2PA.',
    tags: ['Digital Provenance', 'Web3', 'C2PA']
  },
  {
    title: 'BerryNet',
    url: 'https://github.com/DT42/BerryNet',
    description:
      'Deep learning gateway on edge devices. Deploy AI image recognition and object detection with ease on Raspberry Pi and other IoT devices.',
    tags: ['AI', 'IoT', 'Edge Computing']
  },
  {
    title: 'AIKEA',
    url: 'https://github.com/dt42/aikea',
    description:
      'An AI knowledge engine architecture that helps transform unstructured content into structured, searchable knowledge bases.',
    tags: ['AI', 'Right-to-Repair', 'Privacy']
  }
]
