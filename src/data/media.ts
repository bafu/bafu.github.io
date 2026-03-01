import type { Language } from '../i18n/types'

export type Media = {
  date: string
  title: string
  source: string
  url?: string
}

const mediaData: Record<Language, Media[]> = {
  en: [
    {
      date: '2024-07',
      title: 'AI Is Coming — Crypto Can Help Make It Right',
      source: 'Grayscale',
      url: 'https://research.grayscale.com/reports/ai-is-coming-crypto-can-help-make-it-right'
    },
    {
      date: '2021-01',
      title: "Numbers Protocol's blockchain camera Capture App safeguards the integrity of photos",
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
  ],
  'zh-TW': [
    {
      date: '2024-07',
      title: 'AI 來了 — 加密技術能助其正道',
      source: 'Grayscale',
      url: 'https://research.grayscale.com/reports/ai-is-coming-crypto-can-help-make-it-right'
    },
    {
      date: '2021-01',
      title: 'Numbers Protocol 的區塊鏈相機 Capture App 守護照片完整性',
      source: 'TechCrunch',
      url: 'https://techcrunch.com/2021/01/12/numbers-protocols-blockchain-camera-capture-app-safeguards-the-integrity-of-photos/'
    },
    {
      date: '2020-04',
      title: '什麼是 Numbers Protocol',
      source: 'Filecoin',
      url: 'https://filecoin.io/blog/posts/tammy-yang-and-bofu-chen-numbers/'
    },
    {
      date: '2019-11',
      title: '隱私優先：重新思考智慧家庭',
      source: 'Mozilla',
      url: 'https://foundation.mozilla.org/en/insights/privacy-included/'
    }
  ],
  'zh-CN': [
    {
      date: '2024-07',
      title: 'AI 来了 — 加密技术能助其正道',
      source: 'Grayscale',
      url: 'https://research.grayscale.com/reports/ai-is-coming-crypto-can-help-make-it-right'
    },
    {
      date: '2021-01',
      title: 'Numbers Protocol 的区块链相机 Capture App 守护照片完整性',
      source: 'TechCrunch',
      url: 'https://techcrunch.com/2021/01/12/numbers-protocols-blockchain-camera-capture-app-safeguards-the-integrity-of-photos/'
    },
    {
      date: '2020-04',
      title: '什么是 Numbers Protocol',
      source: 'Filecoin',
      url: 'https://filecoin.io/blog/posts/tammy-yang-and-bofu-chen-numbers/'
    },
    {
      date: '2019-11',
      title: '隐私优先：重新思考智能家居',
      source: 'Mozilla',
      url: 'https://foundation.mozilla.org/en/insights/privacy-included/'
    }
  ],
  ja: [
    {
      date: '2024-07',
      title: 'AIが来る — 暗号技術が正しい道へ導く',
      source: 'Grayscale',
      url: 'https://research.grayscale.com/reports/ai-is-coming-crypto-can-help-make-it-right'
    },
    {
      date: '2021-01',
      title: 'Numbers Protocolのブロックチェーンカメラ Capture Appが写真の完全性を守る',
      source: 'TechCrunch',
      url: 'https://techcrunch.com/2021/01/12/numbers-protocols-blockchain-camera-capture-app-safeguards-the-integrity-of-photos/'
    },
    {
      date: '2020-04',
      title: 'Numbers Protocolとは',
      source: 'Filecoin',
      url: 'https://filecoin.io/blog/posts/tammy-yang-and-bofu-chen-numbers/'
    },
    {
      date: '2019-11',
      title: 'プライバシー込み：スマートホームを再考する',
      source: 'Mozilla',
      url: 'https://foundation.mozilla.org/en/insights/privacy-included/'
    }
  ]
}

export function getMedia(lang: Language): Media[] {
  return mediaData[lang] ?? mediaData.en
}
