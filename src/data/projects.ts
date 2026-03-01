import type { Language } from '../i18n/types'

export type Project = {
  title: string
  url: string
  description: string
  tags: string[]
}

const projectData: Record<Language, Project[]> = {
  en: [
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
  ],
  'zh-TW': [
    {
      title: 'Nit - Create onchain provenance like Git',
      url: 'https://github.com/numbersprotocol/nit',
      description: '透過密碼學簽章與區塊鏈技術驗證數位媒體真實性與完整性的工具組。',
      tags: ['Digital Provenance', 'Web3', 'Open Standards']
    },
    {
      title: 'ERC-7053: Interoperable Digital Media Indexing',
      url: 'https://eips.ethereum.org/EIPS/eip-7053',
      description:
        '一種通用索引方法，用於在 EVM 相容區塊鏈上記錄、發現和檢索數位媒體的歷史。',
      tags: ['Digital Provenance', 'Web3', 'Open Standards']
    },
    {
      title: 'Capture Cam',
      url: 'https://github.com/numbersprotocol/capture-lite',
      description: '第一款具有鏈上溯源與 C2PA 的 Web3 相機應用程式。',
      tags: ['Digital Provenance', 'Web3', 'C2PA']
    },
    {
      title: 'BerryNet',
      url: 'https://github.com/DT42/BerryNet',
      description:
        '邊緣裝置上的深度學習閘道器。在 Raspberry Pi 及其他 IoT 裝置上輕鬆部署 AI 影像辨識與物件偵測。',
      tags: ['AI', 'IoT', 'Edge Computing']
    },
    {
      title: 'AIKEA',
      url: 'https://github.com/dt42/aikea',
      description: 'AI 知識引擎架構，協助將非結構化內容轉化為結構化、可搜尋的知識庫。',
      tags: ['AI', 'Right-to-Repair', 'Privacy']
    }
  ],
  'zh-CN': [
    {
      title: 'Nit - Create onchain provenance like Git',
      url: 'https://github.com/numbersprotocol/nit',
      description: '通过密码学签名与区块链技术验证数字媒体真实性与完整性的工具集。',
      tags: ['Digital Provenance', 'Web3', 'Open Standards']
    },
    {
      title: 'ERC-7053: Interoperable Digital Media Indexing',
      url: 'https://eips.ethereum.org/EIPS/eip-7053',
      description:
        '一种通用索引方法，用于在 EVM 兼容区块链上记录、发现和检索数字媒体的历史。',
      tags: ['Digital Provenance', 'Web3', 'Open Standards']
    },
    {
      title: 'Capture Cam',
      url: 'https://github.com/numbersprotocol/capture-lite',
      description: '第一款具有链上溯源与 C2PA 的 Web3 相机应用。',
      tags: ['Digital Provenance', 'Web3', 'C2PA']
    },
    {
      title: 'BerryNet',
      url: 'https://github.com/DT42/BerryNet',
      description:
        '边缘设备上的深度学习网关。在 Raspberry Pi 及其他 IoT 设备上轻松部署 AI 图像识别与目标检测。',
      tags: ['AI', 'IoT', 'Edge Computing']
    },
    {
      title: 'AIKEA',
      url: 'https://github.com/dt42/aikea',
      description: 'AI 知识引擎架构，帮助将非结构化内容转化为结构化、可搜索的知识库。',
      tags: ['AI', 'Right-to-Repair', 'Privacy']
    }
  ],
  ja: [
    {
      title: 'Nit - Create onchain provenance like Git',
      url: 'https://github.com/numbersprotocol/nit',
      description:
        '暗号署名とブロックチェーン技術によるデジタルメディアの真正性と完全性を検証するツールキット。',
      tags: ['Digital Provenance', 'Web3', 'Open Standards']
    },
    {
      title: 'ERC-7053: Interoperable Digital Media Indexing',
      url: 'https://eips.ethereum.org/EIPS/eip-7053',
      description:
        'EVM互換ブロックチェーン上でデジタルメディアの履歴を記録・発見・取得するための汎用インデクシング手法。',
      tags: ['Digital Provenance', 'Web3', 'Open Standards']
    },
    {
      title: 'Capture Cam',
      url: 'https://github.com/numbersprotocol/capture-lite',
      description: 'オンチェーン来歴とC2PAを備えた初のWeb3カメラアプリ。',
      tags: ['Digital Provenance', 'Web3', 'C2PA']
    },
    {
      title: 'BerryNet',
      url: 'https://github.com/DT42/BerryNet',
      description:
        'エッジデバイス上のディープラーニングゲートウェイ。Raspberry Piや他のIoTデバイスでAI画像認識と物体検出を簡単にデプロイ。',
      tags: ['AI', 'IoT', 'Edge Computing']
    },
    {
      title: 'AIKEA',
      url: 'https://github.com/dt42/aikea',
      description:
        '非構造化コンテンツを構造化された検索可能なナレッジベースに変換するAIナレッジエンジンアーキテクチャ。',
      tags: ['AI', 'Right-to-Repair', 'Privacy']
    }
  ]
}

export function getProjects(lang: Language): Project[] {
  return projectData[lang] ?? projectData.en
}
