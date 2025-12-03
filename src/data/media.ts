export type Media = {
  date: string
  title: string
  source: string
  url?: string
}

export const media: Media[] = [
  {
    date: '2024-07',
    title: 'AI Is Coming — Crypto Can Help Make It Right',
    source: 'Grayscale',
    url: 'https://research.grayscale.com/reports/ai-is-coming-crypto-can-help-make-it-right'
  },
  {
    date: '2021-01',
    title: 'Numbers Protocol\'s blockchain camera Capture App safeguards the integrity of photos',
    source: 'TechCrunch',
    url: 'https://techcrunch.com/2021/01/12/numbers-protocols-blockchain-camera-capture-app-safeguards-the-integrity-of-photos/'
  },
  {
    date: '2020-04',
    title: 'What is Numbers Protocol',
    source: 'Filecoin',
    url: 'https://filecoin.io/blog/posts/tammy-yang-and-bofu-chen-numbers/'
  },
  {
    date: '2019-11',
    title: 'Privacy Included: Rethinking the Smart Home',
    source: 'Mozilla',
    url: 'https://foundation.mozilla.org/en/insights/privacy-included/'
  }
]
