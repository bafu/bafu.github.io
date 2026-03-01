import type { Language } from '../i18n/types'

export type Talk = {
  date: string
  title: string
  event: string
  url?: string
}

const talkData: Record<Language, Talk[]> = {
  en: [
    { date: '2025-02-24', title: 'Open and Transparent: Secure Digital Media with Blockchain', event: 'RightsCon25', url: 'https://x.com/numbersprotocol/status/1894009699852484927' },
    { date: '2024-05-08', title: 'IPTC Panel: AI and Image Authenticity', event: 'IPTC', url: 'https://youtu.be/4q7iBkRLCMQ?si=qZWn38r_El6NAK7f' },
    { date: '2022-12-16', title: 'Create the Full History of Digital Assets with Numbers Mainnet', event: 'Taipei Blockchain Week', url: 'https://www.youtube.com/watch?v=sGWkcnc7yoE' },
    { date: '2020-12-23', title: 'IPFS and Decentralized Cloud Storage', event: 'Blocktrend', url: 'https://www.blocktrend.today/p/ep94' },
    { date: '2020-08', title: 'Bring Trust into Data', event: 'Coscup', url: 'https://youtu.be/vlOCA-HmY9U?si=0aNYtojXYsPyZnki' },
    { date: '2020-01-17', title: 'Binance X Dev Meetup', event: 'Binance X' },
    { date: '2020-01', title: 'First Home Camera Which Puts Your Privacy First', event: 'MakerPro' },
    { date: '2020', title: 'Use blockchain and AI technologies to build traceable data system', event: 'Conference 2020' },
    { date: '2019-12-17', title: 'Qualcomm Innove in Taiwan Challenge, Final', event: 'Qualcomm', url: 'https://finance.ettoday.net/news/1604264' },
    { date: '2019-08', title: 'Edge AI with privacy-preserving computation to protect data privacy in personal data analysis', event: 'Coscup', url: 'https://youtu.be/rp_1Qlv4p7s?si=19Ozwcc3pwmdgkTX' },
    { date: '2018-06', title: 'Nvidia Taiwan Super AI Workshop', event: 'Nvidia headquarters' },
    { date: '2018-04-24', title: 'Berrynet First AI Gateway Meets TX2', event: 'Nvidia Jetson meetup' },
    { date: '2017-10', title: 'From Cloud to Edge', event: 'GTC Taiwan', url: 'https://www.twiota.org/EventDetails.aspx?id=08052f0b-0ace-429c-be4d-1557105f5f12' },
    { date: '2017-08', title: 'BerryNet Deep learning gateway on Raspberry Pi', event: 'Coscup', url: 'https://youtu.be/HOwbeFD6tF8?si=a_hybdZadXjgcrIg' },
    { date: '2017-07', title: 'First AI Gateway on RPi', event: 'NTU Hackathon' },
    { date: '2015-10', title: 'Technical Engineering Lead', event: 'Canonical', url: 'https://www.linkedin.com/in/bofuchen/' },
    { date: '2007', title: 'MS, Computer Science and Information Engineering', event: 'National Cheng Kung University' },
  ],
  'zh-TW': [
    { date: '2025-02-24', title: '開放透明：以區塊鏈保護數位媒體', event: 'RightsCon25', url: 'https://x.com/numbersprotocol/status/1894009699852484927' },
    { date: '2024-05-08', title: 'IPTC 座談：AI 與影像真實性', event: 'IPTC', url: 'https://youtu.be/4q7iBkRLCMQ?si=qZWn38r_El6NAK7f' },
    { date: '2022-12-16', title: '以 Numbers 主網建立數位資產完整歷史', event: '台北區塊鏈週', url: 'https://www.youtube.com/watch?v=sGWkcnc7yoE' },
    { date: '2020-12-23', title: 'IPFS 與去中心化雲端儲存', event: 'Blocktrend', url: 'https://www.blocktrend.today/p/ep94' },
    { date: '2020-08', title: '為資料帶來信任', event: 'Coscup', url: 'https://youtu.be/vlOCA-HmY9U?si=0aNYtojXYsPyZnki' },
    { date: '2020-01-17', title: 'Binance X 開發者聚會', event: 'Binance X' },
    { date: '2020-01', title: '隱私優先的首款家用攝影機', event: 'MakerPro' },
    { date: '2020', title: '以區塊鏈與 AI 技術建立可追溯的資料系統', event: 'Conference 2020' },
    { date: '2019-12-17', title: 'Qualcomm 台灣創新挑戰賽決賽', event: 'Qualcomm', url: 'https://finance.ettoday.net/news/1604264' },
    { date: '2019-08', title: '以隱私保護運算的邊緣 AI 保護個人資料分析中的資料隱私', event: 'Coscup', url: 'https://youtu.be/rp_1Qlv4p7s?si=19Ozwcc3pwmdgkTX' },
    { date: '2018-06', title: 'Nvidia 台灣超級 AI 工作坊', event: 'Nvidia 總部' },
    { date: '2018-04-24', title: 'BerryNet 首款 AI 閘道器與 TX2 結合', event: 'Nvidia Jetson 聚會' },
    { date: '2017-10', title: '從雲端到邊緣', event: 'GTC Taiwan', url: 'https://www.twiota.org/EventDetails.aspx?id=08052f0b-0ace-429c-be4d-1557105f5f12' },
    { date: '2017-08', title: 'BerryNet Raspberry Pi 深度學習閘道器', event: 'Coscup', url: 'https://youtu.be/HOwbeFD6tF8?si=a_hybdZadXjgcrIg' },
    { date: '2017-07', title: 'RPi 上的首款 AI 閘道器', event: '台大黑客松' },
    { date: '2015-10', title: '技術工程主管', event: 'Canonical', url: 'https://www.linkedin.com/in/bofuchen/' },
    { date: '2007', title: '碩士，資訊工程學系', event: '國立成功大學' },
  ],
  'zh-CN': [
    { date: '2025-02-24', title: '开放透明：以区块链保护数字媒体', event: 'RightsCon25', url: 'https://x.com/numbersprotocol/status/1894009699852484927' },
    { date: '2024-05-08', title: 'IPTC 座谈：AI 与影像真实性', event: 'IPTC', url: 'https://youtu.be/4q7iBkRLCMQ?si=qZWn38r_El6NAK7f' },
    { date: '2022-12-16', title: '以 Numbers 主网建立数字资产完整历史', event: '台北区块链周', url: 'https://www.youtube.com/watch?v=sGWkcnc7yoE' },
    { date: '2020-12-23', title: 'IPFS 与去中心化云存储', event: 'Blocktrend', url: 'https://www.blocktrend.today/p/ep94' },
    { date: '2020-08', title: '为数据带来信任', event: 'Coscup', url: 'https://youtu.be/vlOCA-HmY9U?si=0aNYtojXYsPyZnki' },
    { date: '2020-01-17', title: 'Binance X 开发者聚会', event: 'Binance X' },
    { date: '2020-01', title: '隐私优先的首款家用摄像头', event: 'MakerPro' },
    { date: '2020', title: '以区块链与 AI 技术建立可追溯的数据系统', event: 'Conference 2020' },
    { date: '2019-12-17', title: 'Qualcomm 台湾创新挑战赛决赛', event: 'Qualcomm', url: 'https://finance.ettoday.net/news/1604264' },
    { date: '2019-08', title: '以隐私保护计算的边缘 AI 保护个人数据分析中的数据隐私', event: 'Coscup', url: 'https://youtu.be/rp_1Qlv4p7s?si=19Ozwcc3pwmdgkTX' },
    { date: '2018-06', title: 'Nvidia 台湾超级 AI 工作坊', event: 'Nvidia 总部' },
    { date: '2018-04-24', title: 'BerryNet 首款 AI 网关与 TX2 结合', event: 'Nvidia Jetson 聚会' },
    { date: '2017-10', title: '从云端到边缘', event: 'GTC Taiwan', url: 'https://www.twiota.org/EventDetails.aspx?id=08052f0b-0ace-429c-be4d-1557105f5f12' },
    { date: '2017-08', title: 'BerryNet Raspberry Pi 深度学习网关', event: 'Coscup', url: 'https://youtu.be/HOwbeFD6tF8?si=a_hybdZadXjgcrIg' },
    { date: '2017-07', title: 'RPi 上的首款 AI 网关', event: '台大黑客松' },
    { date: '2015-10', title: '技术工程主管', event: 'Canonical', url: 'https://www.linkedin.com/in/bofuchen/' },
    { date: '2007', title: '硕士，计算机科学与信息工程', event: '国立成功大学' },
  ],
  ja: [
    { date: '2025-02-24', title: 'オープン＆透明：ブロックチェーンでデジタルメディアを保護', event: 'RightsCon25', url: 'https://x.com/numbersprotocol/status/1894009699852484927' },
    { date: '2024-05-08', title: 'IPTCパネル：AIと画像の真正性', event: 'IPTC', url: 'https://youtu.be/4q7iBkRLCMQ?si=qZWn38r_El6NAK7f' },
    { date: '2022-12-16', title: 'Numbers Mainnetでデジタル資産の完全な履歴を作成', event: '台北ブロックチェーンウィーク', url: 'https://www.youtube.com/watch?v=sGWkcnc7yoE' },
    { date: '2020-12-23', title: 'IPFSと分散型クラウドストレージ', event: 'Blocktrend', url: 'https://www.blocktrend.today/p/ep94' },
    { date: '2020-08', title: 'データに信頼を', event: 'Coscup', url: 'https://youtu.be/vlOCA-HmY9U?si=0aNYtojXYsPyZnki' },
    { date: '2020-01-17', title: 'Binance X 開発者ミートアップ', event: 'Binance X' },
    { date: '2020-01', title: 'プライバシーファーストの初のホームカメラ', event: 'MakerPro' },
    { date: '2020', title: 'ブロックチェーンとAI技術で追跡可能なデータシステムを構築', event: 'Conference 2020' },
    { date: '2019-12-17', title: 'Qualcomm台湾イノベーションチャレンジ決勝', event: 'Qualcomm', url: 'https://finance.ettoday.net/news/1604264' },
    { date: '2019-08', title: 'プライバシー保護計算によるエッジAIで個人データ分析のプライバシーを保護', event: 'Coscup', url: 'https://youtu.be/rp_1Qlv4p7s?si=19Ozwcc3pwmdgkTX' },
    { date: '2018-06', title: 'Nvidia台湾スーパーAIワークショップ', event: 'Nvidia本社' },
    { date: '2018-04-24', title: 'BerryNet初のAIゲートウェイがTX2と融合', event: 'Nvidia Jetsonミートアップ' },
    { date: '2017-10', title: 'クラウドからエッジへ', event: 'GTC Taiwan', url: 'https://www.twiota.org/EventDetails.aspx?id=08052f0b-0ace-429c-be4d-1557105f5f12' },
    { date: '2017-08', title: 'BerryNet Raspberry Pi上のディープラーニングゲートウェイ', event: 'Coscup', url: 'https://youtu.be/HOwbeFD6tF8?si=a_hybdZadXjgcrIg' },
    { date: '2017-07', title: 'RPi上の初のAIゲートウェイ', event: 'NTUハッカソン' },
    { date: '2015-10', title: 'テクニカルエンジニアリングリード', event: 'Canonical', url: 'https://www.linkedin.com/in/bofuchen/' },
    { date: '2007', title: '修士、コンピュータサイエンス・情報工学', event: '国立成功大学' },
  ],
}

export function getTalks(lang: Language): Talk[] {
  return talkData[lang] ?? talkData.en
}
