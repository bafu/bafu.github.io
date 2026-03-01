import type { Language } from '../i18n/types'

export type Experience = {
  period: string
  title: string
  organization: string
  organizationUrl: string
  description: string
  skills: string[]
}

const experienceData: Record<Language, Experience[]> = {
  en: [
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
  ],
  'zh-TW': [
    {
      period: '2020 - 至今',
      title: '創辦人暨執行長/技術長',
      organization: 'Numbers Protocol',
      organizationUrl: 'https://www.numbersprotocol.io/',
      description:
        '建立開放、去中心化的數位媒體溯源協議。保護了數百萬筆數位資產，並獲得多項國際獎項，包括 Tech4Trust 大獎。',
      skills: ['Blockchain', 'Open Source', 'Product Development']
    },
    {
      period: '2017 - 2020',
      title: '創辦人暨技術長',
      organization: 'DT42',
      organizationUrl: 'https://dt42.io/',
      description:
        '打造 AI 知識引擎，協助組織將內容轉化為互動式知識庫。領導技術團隊與產品願景。',
      skills: ['Artificial Intelligence', 'Product Development', 'Technical Leadership']
    },
    {
      period: '2014 - 2017',
      title: '技術主管',
      organization: 'Canonical Ltd.',
      organizationUrl: 'https://canonical.com/',
      description:
        '參與 Ubuntu 核心系統整合。領導與主要硬體製造商的 OEM 合作夥伴關係，優化其裝置上的 Ubuntu 體驗。',
      skills: ['Linux', 'Open Source', 'System Integration']
    }
  ],
  'zh-CN': [
    {
      period: '2020 - 至今',
      title: '创始人兼首席执行官/首席技术官',
      organization: 'Numbers Protocol',
      organizationUrl: 'https://www.numbersprotocol.io/',
      description:
        '构建开放、去中心化的数字媒体溯源协议。保护了数百万笔数字资产，并获得多项国际奖项，包括 Tech4Trust 大奖。',
      skills: ['Blockchain', 'Open Source', 'Product Development']
    },
    {
      period: '2017 - 2020',
      title: '创始人兼首席技术官',
      organization: 'DT42',
      organizationUrl: 'https://dt42.io/',
      description:
        '打造 AI 知识引擎，帮助组织将内容转化为互动式知识库。领导技术团队与产品愿景。',
      skills: ['Artificial Intelligence', 'Product Development', 'Technical Leadership']
    },
    {
      period: '2014 - 2017',
      title: '技术主管',
      organization: 'Canonical Ltd.',
      organizationUrl: 'https://canonical.com/',
      description:
        '参与 Ubuntu 核心系统集成。领导与主要硬件制造商的 OEM 合作伙伴关系，优化其设备上的 Ubuntu 体验。',
      skills: ['Linux', 'Open Source', 'System Integration']
    }
  ],
  ja: [
    {
      period: '2020 - 現在',
      title: '創業者兼CEO/CTO',
      organization: 'Numbers Protocol',
      organizationUrl: 'https://www.numbersprotocol.io/',
      description:
        'デジタルメディアの来歴を記録するオープンな分散型プロトコルを構築。数百万のデジタル資産を保護し、Tech4Trust賞を含む複数の国際賞を受賞。',
      skills: ['Blockchain', 'Open Source', 'Product Development']
    },
    {
      period: '2017 - 2020',
      title: '創業者兼CTO',
      organization: 'DT42',
      organizationUrl: 'https://dt42.io/',
      description:
        '組織がコンテンツをインタラクティブなナレッジベースに変換するAIナレッジエンジンを開発。技術チームと製品ビジョンをリード。',
      skills: ['Artificial Intelligence', 'Product Development', 'Technical Leadership']
    },
    {
      period: '2014 - 2017',
      title: 'テックリード',
      organization: 'Canonical Ltd.',
      organizationUrl: 'https://canonical.com/',
      description:
        'Ubuntuのコアシステム統合に貢献。主要ハードウェアメーカーとのOEMパートナーシップをリードし、デバイス向けUbuntuを最適化。',
      skills: ['Linux', 'Open Source', 'System Integration']
    }
  ]
}

export function getExperiences(lang: Language): Experience[] {
  return experienceData[lang] ?? experienceData.en
}
