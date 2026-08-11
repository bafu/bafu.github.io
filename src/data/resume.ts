import type { Language } from '../i18n/types'

export type ResumeCopy = {
  eyebrow: string
  role: string
  location: string
  summary: string
  print: string
  sections: {
    profile: string
    experience: string
    expertise: string
    selectedWork: string
    recognition: string
    talks: string
    education: string
  }
  highlights: string[]
  expertise: string[]
  projectLink: string
  present: string
  education: {
    degree: string
    school: string
    year: string
  }
  meta: {
    title: string
    description: string
  }
}

const resumeCopy: Record<Language, ResumeCopy> = {
  en: {
    eyebrow: 'One-page résumé',
    role: 'Founder & CEO/CTO · Software Engineer & AI Builder',
    location: 'Taiwan · Working globally',
    summary:
      'Entrepreneur and engineer working across digital provenance, artificial intelligence, and open-source systems. I build products and teams that make complex technology useful, verifiable, and ready for the real world.',
    print: 'Print / Save PDF',
    sections: {
      profile: 'Profile',
      experience: 'Experience',
      expertise: 'Core expertise',
      selectedWork: 'Selected work',
      recognition: 'Recognition',
      talks: 'Selected talks',
      education: 'Education'
    },
    highlights: [
      'Co-founded Numbers Protocol and leads the company as CEO/CTO, building an open protocol for digital media provenance.',
      'Previously founded the edge-AI company DT42 and led Ubuntu system integration and OEM partnerships at Canonical.',
      'Builds in public through open-source projects, open standards, technical writing, and talks on trustworthy digital media.'
    ],
    expertise: [
      'Digital provenance',
      'AI systems',
      'Open-source strategy',
      'Product development',
      'Technical leadership',
      'Blockchain',
      'Edge computing',
      'System integration'
    ],
    projectLink: 'View project',
    present: 'Present',
    education: {
      degree: 'M.S., Computer Science and Information Engineering',
      school: 'National Cheng Kung University',
      year: '2007'
    },
    meta: {
      title: 'Bofu Chen — Résumé',
      description:
        'One-page résumé of Bofu Chen, founder and CEO/CTO of Numbers Protocol, software engineer, and open-source contributor.'
    }
  },
  'zh-TW': {
    eyebrow: '單頁履歷',
    role: '創辦人暨執行長／技術長 · 軟體工程師與 AI 建構者',
    location: '台灣 · 與全球協作',
    summary:
      '橫跨數位內容溯源、人工智慧與開源系統的創業者及工程師。致力於打造產品與團隊，讓複雜技術真正實用、可驗證，並能在現實世界中落地。',
    print: '列印／儲存 PDF',
    sections: {
      profile: '個人摘要',
      experience: '工作經歷',
      expertise: '核心專長',
      selectedWork: '精選作品',
      recognition: '獎項與肯定',
      talks: '精選演講',
      education: '學歷'
    },
    highlights: [
      '共同創辦 Numbers Protocol 並擔任執行長／技術長，打造開放的數位媒體溯源協議。',
      '曾創辦邊緣 AI 公司 DT42，並於 Canonical 領導 Ubuntu 系統整合與 OEM 合作。',
      '透過開源專案、開放標準、技術寫作及演講，持續公開分享可信任數位媒體的實作經驗。'
    ],
    expertise: [
      '數位內容溯源',
      'AI 系統',
      '開源策略',
      '產品開發',
      '技術領導',
      '區塊鏈',
      '邊緣運算',
      '系統整合'
    ],
    projectLink: '查看專案',
    present: '至今',
    education: {
      degree: '資訊工程學系碩士',
      school: '國立成功大學',
      year: '2007'
    },
    meta: {
      title: '陳伯符 — 個人履歷',
      description:
        '陳伯符的單頁履歷。Numbers Protocol 創辦人暨執行長／技術長、軟體工程師與開源貢獻者。'
    }
  },
  ja: {
    eyebrow: '1ページ履歴書',
    role: '創業者兼CEO/CTO · ソフトウェアエンジニア & AIビルダー',
    location: '台湾 · グローバルに活動',
    summary:
      'デジタルプロヴェナンス、人工知能、オープンソースシステムに取り組む起業家兼エンジニア。複雑な技術を実用的で検証可能なものにし、現実の世界で機能するプロダクトとチームを構築しています。',
    print: '印刷 / PDF保存',
    sections: {
      profile: 'プロフィール',
      experience: '職歴',
      expertise: '専門分野',
      selectedWork: '主なプロジェクト',
      recognition: '受賞・評価',
      talks: '主な講演',
      education: '学歴'
    },
    highlights: [
      'Numbers Protocolを共同創業し、CEO/CTOとしてデジタルメディアのプロヴェナンスを記録するオープンプロトコルを構築。',
      '以前はエッジAI企業DT42を創業し、CanonicalでUbuntuのシステム統合とOEMパートナーシップをリード。',
      'オープンソース、オープン標準、技術記事、講演を通じ、信頼できるデジタルメディアの実践を公開。'
    ],
    expertise: [
      'デジタルプロヴェナンス',
      'AIシステム',
      'オープンソース戦略',
      'プロダクト開発',
      '技術リーダーシップ',
      'ブロックチェーン',
      'エッジコンピューティング',
      'システム統合'
    ],
    projectLink: 'プロジェクトを見る',
    present: '現在',
    education: {
      degree: '情報工学 修士',
      school: '国立成功大学',
      year: '2007'
    },
    meta: {
      title: 'Bofu Chen — 履歴書',
      description:
        'Numbers Protocol創業者兼CEO/CTO、ソフトウェアエンジニア、オープンソースコントリビューターであるBofu Chenの1ページ履歴書。'
    }
  }
}

export function getResumeCopy(lang: Language): ResumeCopy {
  return resumeCopy[lang] ?? resumeCopy.en
}
