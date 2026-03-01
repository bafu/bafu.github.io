import type { Language } from '../i18n/types'

export type Award = {
  year: string
  title: string
  description?: string
  url?: string
}

const awardData: Record<Language, Award[]> = {
  en: [
    { year: '2024', title: 'Blockchain 30 Influential Figures', description: 'Recognized by Web3+ for influence in the blockchain space.', url: 'https://web3plus.bnext.com.tw/article/3226?' },
    { year: '2024', title: 'Tech4Trust Social Impact Award', description: 'Recognized for contributions to building a more trustworthy digital ecosystem.' },
    { year: '2024', title: 'Top 50 International Startups', description: 'Selected at the 4YFN (4 Years From Now) startup event in Barcelona.' },
    { year: '2024', title: 'Google News Digital Transformation Program', description: 'Recognized for its impact on media verification.' },
    { year: '2023', title: 'SXSW Pitch Competition Winner', description: 'Winner in the Metaverse & Web3 category, a significant moment of global recognition.' },
    { year: '2022', title: 'Educational Foundation Hu Dinghua Young Research Innovation Award', url: 'https://pan.itri.org.tw/news/news_content.aspx?nid=83068DD26EB826BB' },
    { year: '2022', title: 'Top 50 Startups Award', description: 'Awarded at the World Festival.' },
    { year: '2022', title: 'Top Application in Web3', description: 'Recognized by Product Hunt.' },
    { year: '2020', title: 'National Development Fund', description: 'Selected and funded by the National Development Fund.', url: 'https://www.df.gov.tw/' },
    { year: '2020', title: 'AIT #Cohack Competition Winner' },
    { year: '2018', title: 'Arm Innovator', description: 'Recognized as Arm Innovator (2018 - 2021).' },
    { year: '2018', title: 'Audi Innovation Award, Ecosystem Prize', description: 'First Audi Innovation Award in Taiwan.', url: 'https://technews.tw/2018/06/06/taiwans-first-audi-innovation-award/?fbclid=IwY2xjawJTS8NleHRuA2FlbQIxMQABHQB5FxdRxkeV15dHbC4ReMSlZ_i5-QCcDP82hRTjKK8FsLFshFoHCfC6rA_aem_M4T_54DzF138Bkg4VXTJ4Q' },
    { year: '2017', title: 'Taiwan Inno Entrep. Center, Selected Startup' },
    { year: '2017', title: 'FITI Innovation, Excellent Award', description: '1st place.' },
    { year: '2016', title: 'Pepper Robot Contest', description: '3rd place.' },
  ],
  'zh-TW': [
    { year: '2024', title: '區塊鏈 30 位影響力人物', description: 'Web3+ 認可在區塊鏈領域的影響力。', url: 'https://web3plus.bnext.com.tw/article/3226?' },
    { year: '2024', title: 'Tech4Trust 社會影響力獎', description: '因對建立更可信賴的數位生態系統的貢獻而獲獎。' },
    { year: '2024', title: '全球 50 強新創', description: '在巴塞隆納 4YFN (4 Years From Now) 新創活動中入選。' },
    { year: '2024', title: 'Google 新聞數位轉型計畫', description: '因在媒體驗證方面的影響力而獲選。' },
    { year: '2023', title: 'SXSW 競賽冠軍', description: 'Metaverse & Web3 類別冠軍，全球認可的重要時刻。' },
    { year: '2022', title: '潘文淵基金會胡定華年輕研究創新獎', url: 'https://pan.itri.org.tw/news/news_content.aspx?nid=83068DD26EB826BB' },
    { year: '2022', title: '全球 50 強新創獎', description: '於世界創新節獲獎。' },
    { year: '2022', title: 'Web3 最佳應用', description: 'Product Hunt 認可。' },
    { year: '2020', title: '國發基金', description: '獲國家發展基金選中並投資。', url: 'https://www.df.gov.tw/' },
    { year: '2020', title: 'AIT #Cohack 競賽冠軍' },
    { year: '2018', title: 'Arm 創新者', description: '獲選為 Arm 創新者 (2018 - 2021)。' },
    { year: '2018', title: 'Audi 創新獎生態系統獎', description: '台灣首屆 Audi 創新獎。', url: 'https://technews.tw/2018/06/06/taiwans-first-audi-innovation-award/?fbclid=IwY2xjawJTS8NleHRuA2FlbQIxMQABHQB5FxdRxkeV15dHbC4ReMSlZ_i5-QCcDP82hRTjKK8FsLFshFoHCfC6rA_aem_M4T_54DzF138Bkg4VXTJ4Q' },
    { year: '2017', title: '台灣創新創業中心，入選新創' },
    { year: '2017', title: 'FITI 創新創業激勵計畫，卓越獎', description: '第一名。' },
    { year: '2016', title: 'Pepper 機器人大賽', description: '第三名。' },
  ],
  'zh-CN': [
    { year: '2024', title: '区块链 30 位影响力人物', description: 'Web3+ 认可在区块链领域的影响力。', url: 'https://web3plus.bnext.com.tw/article/3226?' },
    { year: '2024', title: 'Tech4Trust 社会影响力奖', description: '因对构建更可信赖的数字生态系统的贡献而获奖。' },
    { year: '2024', title: '全球 50 强初创', description: '在巴塞罗那 4YFN (4 Years From Now) 初创活动中入选。' },
    { year: '2024', title: 'Google 新闻数字转型计划', description: '因在媒体验证方面的影响力而获选。' },
    { year: '2023', title: 'SXSW 竞赛冠军', description: 'Metaverse & Web3 类别冠军，全球认可的重要时刻。' },
    { year: '2022', title: '潘文渊基金会胡定华年轻研究创新奖', url: 'https://pan.itri.org.tw/news/news_content.aspx?nid=83068DD26EB826BB' },
    { year: '2022', title: '全球 50 强初创奖', description: '于世界创新节获奖。' },
    { year: '2022', title: 'Web3 最佳应用', description: 'Product Hunt 认可。' },
    { year: '2020', title: '国发基金', description: '获国家发展基金选中并投资。', url: 'https://www.df.gov.tw/' },
    { year: '2020', title: 'AIT #Cohack 竞赛冠军' },
    { year: '2018', title: 'Arm 创新者', description: '获选为 Arm 创新者 (2018 - 2021)。' },
    { year: '2018', title: 'Audi 创新奖生态系统奖', description: '台湾首届 Audi 创新奖。', url: 'https://technews.tw/2018/06/06/taiwans-first-audi-innovation-award/?fbclid=IwY2xjawJTS8NleHRuA2FlbQIxMQABHQB5FxdRxkeV15dHbC4ReMSlZ_i5-QCcDP82hRTjKK8FsLFshFoHCfC6rA_aem_M4T_54DzF138Bkg4VXTJ4Q' },
    { year: '2017', title: '台湾创新创业中心，入选初创' },
    { year: '2017', title: 'FITI 创新创业激励计划，卓越奖', description: '第一名。' },
    { year: '2016', title: 'Pepper 机器人大赛', description: '第三名。' },
  ],
  ja: [
    { year: '2024', title: 'ブロックチェーン影響力30人', description: 'Web3+によりブロックチェーン分野での影響力が認められる。', url: 'https://web3plus.bnext.com.tw/article/3226?' },
    { year: '2024', title: 'Tech4Trust社会的インパクト賞', description: 'より信頼性の高いデジタルエコシステム構築への貢献が認められる。' },
    { year: '2024', title: '世界トップ50スタートアップ', description: 'バルセロナの4YFN（4 Years From Now）スタートアップイベントで選出。' },
    { year: '2024', title: 'Googleニュースデジタルトランスフォーメーションプログラム', description: 'メディア検証への影響が認められる。' },
    { year: '2023', title: 'SXSWピッチコンペティション優勝', description: 'Metaverse & Web3カテゴリ優勝。世界的な認知の重要な瞬間。' },
    { year: '2022', title: '潘文淵財団 胡定華若手研究イノベーション賞', url: 'https://pan.itri.org.tw/news/news_content.aspx?nid=83068DD26EB826BB' },
    { year: '2022', title: 'トップ50スタートアップ賞', description: 'ワールドフェスティバルで受賞。' },
    { year: '2022', title: 'Web3トップアプリケーション', description: 'Product Huntが認定。' },
    { year: '2020', title: '国家発展基金', description: '国家発展基金に選出・出資。', url: 'https://www.df.gov.tw/' },
    { year: '2020', title: 'AIT #Cohackコンペティション優勝' },
    { year: '2018', title: 'Armイノベーター', description: 'Armイノベーターとして認定 (2018 - 2021)。' },
    { year: '2018', title: 'Audiイノベーションアワード エコシステム賞', description: '台湾初のAudiイノベーションアワード。', url: 'https://technews.tw/2018/06/06/taiwans-first-audi-innovation-award/?fbclid=IwY2xjawJTS8NleHRuA2FlbQIxMQABHQB5FxdRxkeV15dHbC4ReMSlZ_i5-QCcDP82hRTjKK8FsLFshFoHCfC6rA_aem_M4T_54DzF138Bkg4VXTJ4Q' },
    { year: '2017', title: '台湾イノベーション&アントレプレナーシップセンター、選出スタートアップ' },
    { year: '2017', title: 'FITIイノベーション優秀賞', description: '1位。' },
    { year: '2016', title: 'Pepperロボットコンテスト', description: '3位。' },
  ],
}

export function getAwards(lang: Language): Award[] {
  return awardData[lang] ?? awardData.en
}
