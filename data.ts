
import { Question, QuestionType } from './types';

const opts = (a: string, b: string, c: string, d: string) => [a, b, c, d];

export const QUESTIONS: Question[] = [
  // ===================== 第一章 绪论 =====================
  {
    id: '1-c-1',
    chapter: '1',
    type: QuestionType.Single,
    content: '在飞机发展的进程中，在相当长的一段时期里其主攻方向是',
    options: opts('具有足够的强度和刚度', '不断提高飞行速度', '不断改进生产工艺', '尽量减轻自身重量'),
    answer: 'B',
    explanation: '飞机发展的早期和中期，追求更高的速度以缩短航行时间和获得军事优势是主要驱动力。'
  },
  {
    id: '1-c-2',
    chapter: '1',
    type: QuestionType.Single,
    content: '改善飞机性能,促进飞机发展的基本途径是',
    options: opts('改善飞机气动特性', '采用功率大、品质优良的发动机', '确保飞机的操纵性和稳定性', '以上都是'),
    answer: 'D',
    explanation: '飞机性能的提升依赖于气动外形优化、动力装置升级以及操纵稳定性的保障，缺一不可。'
  },
  {
    id: '1-c-3',
    chapter: '1',
    type: QuestionType.Single,
    content: '世界公认的第一次成功地进行带动力飞行的飞机制造和试飞者是',
    options: opts('莱特兄弟于 1903 年', '兰利于 1903 年', '莱特兄弟于 1902 年', '蒙哥尔菲于 1783 年'),
    answer: 'A',
    explanation: '1903年12月17日，莱特兄弟驾驶“飞行者一号”完成了人类历史上首次有动力、可操纵、重于空气的飞行。'
  },
  {
    id: '1-c-4',
    chapter: '1',
    type: QuestionType.Single,
    content: '当今世界民用运输机的主要制造厂商是',
    options: opts('波音公司', '麦道公司', '空中客车工业集团', 'A 和 C'),
    answer: 'D',
    explanation: '波音（Boeing）和空中客车（Airbus）是目前全球最大的两家民用飞机制造商。麦道公司已被波音收购。'
  },
  {
    id: '1-c-5',
    chapter: '1',
    type: QuestionType.Single,
    content: '现代民用客机普遍采用的机翼配置型式为',
    options: opts('双凸翼型', '下单翼', '后掠翼', '中单翼'),
    answer: 'B',
    explanation: '下单翼布局便于起落架收纳、发动机维护，且在迫降时能起到缓冲保护作用，便于乘客撤离。'
  },
  {
    id: '1-c-6',
    chapter: '1',
    type: QuestionType.Single,
    content: '现代民用客机普遍采用的机翼配置型式为',
    options: opts('双凸翼型', '下单翼', '后掠翼', '中单翼'),
    answer: 'B',
    explanation: '同上，下单翼是现代客机的主流布局。'
  },
  {
    id: '1-c-7',
    chapter: '1',
    type: QuestionType.Single,
    content: '对旅客机的特殊要求可以概括为',
    options: opts('强度高,刚度好', '维护方便,工艺性好', '安全、经济、舒适', '气动外形好、重量轻'),
    answer: 'C',
    explanation: '民用客机运营的核心三要素：安全性（首要）、经济性（航空公司盈利基础）、舒适性（乘客体验）。'
  },
  {
    id: '1-c-8',
    chapter: '1',
    type: QuestionType.Single,
    content: '飞行安全即无飞行事故,在执行飞行任务时发生飞机失事的基本原因可以分为三大类:',
    options: opts('单因素、双因素、多因素', '人、飞机、环境', '机场内、进场区、巡路上', '机组、航管、签派'),
    answer: 'B',
    explanation: 'SHEL模型指出，航空事故原因主要归结为：人（Software/Liveware）、机械（Hardware）、环境（Environment）。'
  },
  {
    id: '1-c-9',
    chapter: '1',
    type: QuestionType.Single,
    content: '对飞行事故的统计表明,飞行事故的多发阶段是',
    options: opts('飞机滑跑和起飞阶段', '飞机巡航阶段', '飞机起飞和着陆阶段', '飞机爬升和下降阶段'),
    answer: 'C',
    explanation: '起飞和着陆阶段（黑色11分钟）操作复杂、离地近，是事故最高发的阶段。'
  },
  {
    id: '1-c-10',
    chapter: '1',
    type: QuestionType.Single,
    content: '对世界商用客机过去 10 年(84～94)飞行事故原因统计表明,因机组原因引起的飞行事故约占总事故的',
    options: opts('85%', '70%', '90%', '80%'),
    answer: 'D',
    explanation: '虽然数据随年代变化，但历史统计表明人为因素（特别是机组原因）通常占飞行事故的70%-80%左右。'
  },
  {
    id: '1-m-1',
    chapter: '1',
    type: QuestionType.Multi,
    content: '飞行事故的人为原因主要包括',
    options: opts('机组人员', '机务维护人员', '空管与签派人员', '气象人员'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '人为差错不仅限于飞行员，还包括维护维修不当、指挥调度失误以及气象情报支持人员的疏忽。'
  },
  {
    id: '1-m-2',
    chapter: '1',
    type: QuestionType.Multi,
    content: '对飞机的基本要求是',
    options: opts('良好的气动外形,制造工艺性好', '足够的强度、刚度，重量轻', '经济性好；使用维护方便', '安全、经济、舒适'),
    answer: ['A', 'B', 'C'],
    explanation: '选项D是针对“旅客机”的特殊要求，而A、B、C是对所有飞机的通用基本工程要求。'
  },
  {
    id: '1-m-3',
    chapter: '1',
    type: QuestionType.Multi,
    content: '对旅客机的特殊要求可概括为',
    options: opts('气动外形好，维护方便', '安全性好', '经济性、舒适性好', '强度高，重量轻'),
    answer: ['B', 'C'],
    explanation: '相比军用机，客机更强调绝对的安全、运营的经济效益以及乘客的舒适体验。'
  },
  {
    id: '1-m-4',
    chapter: '1',
    type: QuestionType.Multi,
    content: '提高飞机飞行速度的主要途径是',
    options: opts('改善飞机气动特性', '采用功率大，品质优良的发动机', '采用先进导航系统', '确保飞机稳定性、操纵性'),
    answer: ['A', 'B', 'D'],
    explanation: '速度取决于推力与阻力的关系（A、B），以及在高速下飞机的可控性（D）。导航系统与飞行速度本身的物理极限无直接关系。'
  },
  {
    id: '1-s-1',
    chapter: '1',
    type: QuestionType.Short,
    content: '简述旅客机按性能特点的分类。',
    answer: '按巡航速度分为低速、亚音速、高亚音速和超音速客机；按载重航程分为短程客机、中程客机和远程客机；按客座数分为小型客机、中型客机和大型客机。',
    explanation: '分类标准通常包括速度、航程和载客量。'
  },
  {
    id: '1-s-2',
    chapter: '1',
    type: QuestionType.Short,
    content: '简述民用运输机的基本组成。',
    answer: '机体、起落装置、飞行操纵系统、动力装置与飞机设备等。',
    explanation: '这是飞机结构的五大基本组成部分。'
  },

  // ===================== 第二章 飞机飞行载荷与机体 =====================
  {
    id: '2-c-1',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞机载荷是指',
    options: opts('升力', '重力和气动力', '道面支持力', '飞机运营时所受到的所有外力'),
    answer: 'D',
    explanation: '飞机载荷是指飞机在飞行或地面操作过程中所承受的所有外部作用力。'
  },
  {
    id: '2-c-2',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞机大速度平飞时,双凸翼型机翼表面气动力的特点是',
    options: opts('上下翼面均受吸力', '上下翼面均受压力', '上翼面受吸力,下翼面受压力', '上翼面受压力,下翼面受吸力'),
    answer: 'A',
    explanation: '大速度平飞时迎角很小，对于双凸翼型，气流流过上下翼面都会加速，根据伯努利定理，流速增加压强减小，因此上下表面均可能产生吸力，但上表面吸力大于下表面吸力以产生升力。'
  },
  {
    id: '2-c-3',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞机小速度大迎角平飞时,双凸翼型机翼表面气动力的特点是',
    options: opts('上下翼面均受吸力', '上下翼面均受压力', '上翼面受吸力,下翼面受压力', '上翼面受压力,下翼面受吸力'),
    answer: 'C',
    explanation: '大迎角状态下，上翼面流速加快形成吸力，下翼面气流受阻形成压力，上下压力差产生较大升力。'
  },
  {
    id: '2-c-4',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞机在水平面内作等速圆周运动时,其所受外力为',
    options: opts('升力、重力、推力、阻力、向心力', '升力、重力、推力、阻力不平衡,其合力提供向心力', '所受升力随坡度增大而增大', 'B 和 C 都对'),
    answer: 'B',
    explanation: '向心力不是外力，而是由升力的水平分量（合力）提供的。'
  },
  {
    id: '2-c-5',
    chapter: '2',
    type: QuestionType.Single,
    content: '双发飞机空中转弯的向心力由',
    options: opts('飞机重力提供', '机翼升力提供', '发动机推力提供', '副翼气动力提供'),
    answer: 'B',
    explanation: '飞机转弯时倾斜机身，升力的水平分量提供向心力。'
  },
  {
    id: '2-c-6',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞机转弯时的坡度的主要限制因素有',
    options: opts('飞机重量大小', '飞机尺寸大小', '发动机推力、机翼临界迎角、飞机结构强度', '机翼剖面形状'),
    answer: 'C',
    explanation: '大坡度转弯需要更大的升力来维持高度，这受到临界迎角（失速风险）、结构强度（过载限制）和发动机推力（克服增加的诱导阻力）的限制。'
  },
  {
    id: '2-c-7',
    chapter: '2',
    type: QuestionType.Single,
    content: '某运输机在飞行中遇到了很强的垂直上突风,为了保证飞机结构受载安全,飞行员一般采用的控制方法是',
    options: opts('适当降低飞行高度', '适当增加飞行高度', '适当降低飞行速度', '适当增大飞行速度'),
    answer: 'C',
    explanation: '降低飞行速度可以减小突风引起的附加载荷（过载），从而保护机体结构。'
  },
  {
    id: '2-c-8',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞机平飞遇垂直向上突风作用时,载荷的变化量主要由',
    options: opts('相对速度大小和方向的改变决定', '相对速度大小的改变决定', '相对速度方向的改变决定', '突风方向决定'),
    answer: 'C',
    explanation: '垂直突风改变了气流的相对方向（即改变了迎角），迎角的急剧变化导致升力急剧变化，从而产生附加载荷。'
  },
  {
    id: '2-c-9',
    chapter: '2',
    type: QuestionType.Single,
    content: '在某飞行状态下,飞机升力方向的过载是指',
    options: opts('装载的人员、货物超过规定', '升力过大', '该状态下飞机升力与重量之比值', '该状态下飞机所受外力的合力在升力方向的分量与飞机重量的比值'),
    answer: 'C',
    explanation: '过载因数（Load Factor）定义为升力与重力的比值（n = L/W）。'
  },
  {
    id: '2-c-10',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞机水平转弯时的过载',
    options: opts('与转弯半径有关', '与转弯速度有关', '随转弯坡度增大而减小', '随转弯坡度增大而增大'),
    answer: 'D',
    explanation: '转弯坡度越大，所需的升力水平分量越大，总升力必须增加以保持高度，因此过载（L/W）增大。'
  },
  {
    id: '2-c-11',
    chapter: '2',
    type: QuestionType.Single,
    content: 'n 设计与 n 使用的实际意义分别是',
    options: opts('表明飞机结构承载能力和飞机飞行中的受载限制', '表明飞机飞行中的受载限制和飞机结构承载能力', '表明飞机结构的受载限制和飞机飞行中实际受载大小', '表示飞机结构承载余量和飞机飞行中实际受载大小'),
    answer: 'A',
    explanation: '设计过载（n设计）是结构设计的极限标准，使用过载（n使用）是飞行操作手册中规定的最大允许过载。'
  },
  {
    id: '2-c-12',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞机在低空飞行或起飞、着陆过程中如遇到垂直方向突风,则应注意',
    options: opts('因飞机升力突增而受载增大', '因飞机升力突减而掉高度太多,可能导致下俯接地', '因飞机阻力突增而失控', '因发动机功率突减而减速'),
    answer: 'B',
    explanation: '低空遭遇下洗气流（垂直向下突风）会使有效迎角减小，升力骤减，导致飞机快速掉高度，极易发生坠地事故（微暴流危害）。'
  },
  {
    id: '2-c-13',
    chapter: '2',
    type: QuestionType.Single,
    content: '在机翼内装上燃油,前缘吊装发动机,对机翼结构',
    options: opts('会增大翼根部弯矩、剪力和扭矩', '可减小翼根部弯矩、剪力和扭矩', '有利于飞机保持水平姿态', '有利于保持气动外形'),
    answer: 'B',
    explanation: '这叫“卸载作用”。机翼上的升力向上，而发动机和燃油的重力向下，两者抵消一部分，从而减小了传递到翼根的弯矩。'
  },
  {
    id: '2-c-14',
    chapter: '2',
    type: QuestionType.Single,
    content: '常见的机翼结构型式为',
    options: opts('上单翼、中单翼、下单翼', '桁梁式、桁条式、蒙皮式', '布质蒙皮机翼、金属蒙皮机翼', '梁式、单块式、夹层与整体结构机翼'),
    answer: 'D',
    explanation: '这是按结构受力形式的分类。梁式以梁承弯，单块式以蒙皮和桁条承弯。'
  },
  {
    id: '2-c-15',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞行中机翼会产生扭转变形,其结构原因是',
    options: opts('压力中心线、重心线不重合', '压力中心线、重心线与刚心线不重合', '采用单梁结构', '前缘吊装有发动机'),
    answer: 'B',
    explanation: '气动力作用在压力中心，结构的抗扭能力围绕刚心。两线不重合会产生扭矩，导致机翼扭转。'
  },
  {
    id: '2-c-16',
    chapter: '2',
    type: QuestionType.Single,
    content: '飞行中机翼沿翼展方向的受力特点是',
    options: opts('从翼根到翼尖逐渐增大', '从翼尖到翼根逐渐增大', '载荷大小基本不变', '翼尖处受载情况严重'),
    answer: 'B',
    explanation: '机翼是一个悬臂梁，弯矩从翼尖向翼根累积，翼根处弯矩最大。'
  },
  {
    id: '2-c-17',
    chapter: '2',
    type: QuestionType.Single,
    content: '与机翼受载相对比,机身受载的特点是',
    options: opts('主要承受对称载荷', '主要承受非对称载荷', '机身以承受装载及部件传给的集中力为主', '机身主要承受结构质量力'),
    answer: 'C',
    explanation: '机身像一个支承梁，主要承受机翼、尾翼、起落架传递来的集中载荷以及内部装载的分布载荷。'
  },
  {
    id: '2-c-18',
    chapter: '2',
    type: QuestionType.Single,
    content: '前三点式飞机以单侧主轮接地,此时传给机身的载荷为',
    options: opts('对称载荷', '非对称载荷', '静载荷', '分布载荷'),
    answer: 'B',
    explanation: '单侧着陆导致左右受力不平衡，产生非对称载荷，使机身承受扭矩。'
  },
  {
    id: '2-c-19',
    chapter: '2',
    type: QuestionType.Single,
    content: '现代飞机都是以骨架加蒙皮的薄壁结构,按结构情况将机身分为',
    options: opts('梁式、单块式、夹层与整体结构', '桁梁式、桁条式、蒙皮式', '桁架式、硬壳式、薄壳式', '桁架式、多梁式、硬壳式'),
    answer: 'B',
    explanation: '机身结构主要分为桁梁式（强梁）、桁条式（弱梁/无梁，蒙皮受力大）和蒙皮式（硬壳）。'
  },
  {
    id: '2-c-20',
    chapter: '2',
    type: QuestionType.Single,
    content: '桁条式机身基本组成的构件有',
    options: opts('桁条、蒙皮、梁、肋', '桁条、蒙皮、隔框', '桁条、蒙皮、地板、壁板', '桁条、梁、蒙皮、隔框'),
    answer: 'B',
    explanation: '桁条式机身主要由纵向的桁条、横向的隔框和蒙皮组成，没有强梁。'
  },
  {
    id: '2-c-21',
    chapter: '2',
    type: QuestionType.Single,
    content: '什么是构件的强度',
    options: opts('构件抵抗变形的能力', '构件抵抗破坏的能力', '构件保持原有平衡形态的能力', '构件的承载能力'),
    answer: 'B',
    explanation: '强度是指材料或结构在受力时抵抗破坏（断裂或塑性变形）的能力。'
  },
  {
    id: '2-c-22',
    chapter: '2',
    type: QuestionType.Single,
    content: '什么是飞机结构的刚度',
    options: opts('飞机结构抵抗变形的能力', '飞机结构抵抗破坏的能力', '飞机结构保持其平衡形态的能力', '飞机结构的承载能力'),
    answer: 'A',
    explanation: '刚度是指结构在受力时抵抗弹性变形的能力。'
  },
  {
    id: '2-c-23',
    chapter: '2',
    type: QuestionType.Single,
    content: '安全系数的定义是',
    options: opts('n 设计/n 破坏', 'n 设计/n 使用', 'n 使用/ n 设计', 'p 破坏/p 设计'),
    answer: 'B',
    explanation: '安全系数 f = 结构设计极限载荷 / 最大使用载荷。通常为1.5。'
  },
  {
    id: '2-c-24',
    chapter: '2',
    type: QuestionType.Single,
    content: '现代大型客机采用的强度设计准则是',
    options: opts('静强度设计', '经济寿命/损伤容限设计', '疲劳安全寿命设计', '破损安全设计'),
    answer: 'B',
    explanation: '损伤容限设计允许结构存在微小裂纹，只要在检修周期内裂纹不扩展到临界值即可，结合经济寿命，是现代客机的主流设计准则。'
  },
  {
    id: '2-c-25',
    chapter: '2',
    type: QuestionType.Single,
    content: '现代大型飞机副翼都是分段的，其主要目的是',
    options: opts('减小操纵力矩', '提高操纵效率', '增大操纵力矩', '提高操纵灵活性，防止因机翼弯曲变形过大时引起副翼偏转卡滞'),
    answer: 'D',
    explanation: '机翼在大载荷下会弯曲，分段副翼可以避免因长轴变形导致的卡滞。'
  },
  {
    id: '2-c-26',
    chapter: '2',
    type: QuestionType.Single,
    content: '现代飞机采用全动平尾的主要目的是',
    options: opts('减小飞机俯仰操纵力矩和杆力', '保证飞机迅速升降', '减小干扰阻力', '改善飞机在高速飞行时的俯仰操纵性'),
    answer: 'D',
    explanation: '高速飞行时激波会导致舵面效率降低（舵面反效），全动平尾能保持良好的俯仰操纵效能。'
  },
  {
    id: '2-c-27',
    chapter: '2',
    type: QuestionType.Single,
    content: '为了防止飞机高速飞行时出现副翼反操纵现象，大型运输机采用了',
    options: opts('襟副翼', '差动副翼', '内、外混和副翼', '副翼前缘加配重'),
    answer: 'C',
    explanation: '高速时使用内侧副翼（靠近翼根，刚度大），低速时配合外侧副翼，防止机翼扭转导致的反效。'
  },
  {
    id: '2-c-28',
    chapter: '2',
    type: QuestionType.Single,
    content: '在飞机结构寿命期内，其结构的失效故障发生率随时间的变化规律呈现',
    options: opts('“盆式”曲线', '线性增加曲线', '线性下降曲线', '随机变化曲线'),
    answer: 'A',
    explanation: '浴盆曲线：早期故障率高，中期稳定（偶然故障），后期因磨损疲劳故障率再次升高。'
  },
  {
    id: '2-m-1',
    chapter: '2',
    type: QuestionType.Multi,
    content: '机翼的功用是',
    options: opts('吊装发动机、起落架等部件', '装载飞机燃油', '安装操纵机构', '产生升力'),
    answer: ['A', 'B', 'D'],
    explanation: '机翼不仅产生升力，也是主要的燃油储存空间和发动机挂载点。'
  },
  {
    id: '2-m-2',
    chapter: '2',
    type: QuestionType.Multi,
    content: '飞机按机翼平面形状分为',
    options: opts('平直翼', '三角翼', '后掠翼', '双凸翼'),
    answer: ['A', 'B', 'C'],
    explanation: '双凸翼是指翼型（剖面形状），不是平面形状。'
  },
  {
    id: '2-m-3',
    chapter: '2',
    type: QuestionType.Multi,
    content: '飞机在垂直平面内曲线飞行时升力往往比平飞时大，为保证结构安全，飞行中控制所受升力过大的基本方法是',
    options: opts('控制飞行速度', '控制航迹半径', '控制发动机功率', '限制飞机重量'),
    answer: ['A', 'B'],
    explanation: '过载 n = V^2 / (g * R)。控制速度V和半径R可以直接控制过载。'
  },
  {
    id: '2-m-4',
    chapter: '2',
    type: QuestionType.Multi,
    content: '下列关于飞机过载的描述，正确的有',
    options: opts('突风过载总比平飞过载大', '飞机过载值大小表明飞机的受载的严重程度', '飞机设计过载大小表明其经受强突风的能力', '飞机的过载值可能小于零'),
    answer: ['B', 'C', 'D'],
    explanation: '突风过载是叠加在平飞过载上的，可能增加也可能减小总过载。过载可以为负（如倒飞或强下突风）。'
  },
  {
    id: '2-m-5',
    chapter: '2',
    type: QuestionType.Multi,
    content: '机翼的主要变形有',
    options: opts('弯曲', '扭转', '剪切', '拉伸'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '机翼受力复杂，这四种基本变形都会发生。'
  },
  {
    id: '2-m-6',
    chapter: '2',
    type: QuestionType.Multi,
    content: '对飞机结构的主要刚度要求包括',
    options: opts('防止弹性变形过大使气动性变坏与副翼反逆', '结构变形不导致操纵与传动机构卡阻', '机、尾翼颤振临界速度大于最大允许飞行速度', '飞机滑跑不应抖动'),
    answer: ['A', 'B', 'C'],
    explanation: '刚度不足会导致颤振、操纵反效和机械卡阻。'
  },
  {
    id: '2-m-7',
    chapter: '2',
    type: QuestionType.Multi,
    content: '飞机飞行试验包括',
    options: opts('检查飞机的低、高速性能，颤振临界速度范围，操纵性、稳定性', '验证发动机空中工作特性；检查飞行管理系统对各种飞行状态的控制；地面制动能力', '飞行载荷试验', '各系统功能可靠性试验'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '飞行试验是验证飞机性能和安全性的最终环节，涵盖所有系统和工况。'
  },
  {
    id: '2-s-1',
    chapter: '2',
    type: QuestionType.Short,
    content: '说明飞机过载概念及其实用意义。',
    answer: '飞机在某飞行状态下升力与重力的比值称为过载。过载表明了机体受载的严重程度。设计过载和使用过载值越大，说明该飞机承受过载的能力越强。',
    explanation: '过载是衡量机体受力的核心指标，直接关系到结构安全。'
  },
  {
    id: '2-s-2',
    chapter: '2',
    type: QuestionType.Short,
    content: '说明安全系数与剩余强度系数的概念。',
    answer: '结构设计载荷与使用时允许的最大载荷的比值称为安全系数；结构破坏载荷与设计载荷的比值称为剩余强度系数。',
    explanation: '安全系数通常为1.5，保证使用安全；剩余强度系数>1说明结构强度满足设计要求。'
  },
  {
    id: '2-f-3',
    chapter: '2',
    type: QuestionType.Fill,
    content: '机翼外载荷的特点是：气动载荷与机翼结构质量力从翼尖到翼根逐渐_____，所以机翼结构从翼尖到翼根逐渐_____；在机翼上安装发动机、加装燃油后，在飞行中可使机翼翼根受载______，这种作用称为_____。',
    answer: '增大；变宽增厚；减小；卸载作用',
    explanation: '机翼根部受力最大，因此结构最强；翼上集中质量能抵消部分气动升力造成的弯矩。'
  },
  {
    id: '2-f-4',
    chapter: '2',
    type: QuestionType.Fill,
    content: '民用运输机的尾翼包括______和_______ 两部分。前者由_______和_______组成，后者由_______和________组成。',
    answer: '水平尾翼；垂直尾翼；水平安定面；升降舵；垂直安定面；方向舵',
    explanation: '尾翼的基本构造，安定面起稳定作用，舵面起操纵作用。'
  },
  {
    id: '2-f-5',
    chapter: '2',
    type: QuestionType.Fill,
    content: '飞机结构强度、刚度试验主要包括______、 _________和__________几种。',
    answer: '静力试验；动力试验；飞行试验',
    explanation: '验证结构的三个必经阶段：地面静力加载、动力震动/疲劳测试、空中实际飞行测试。'
  },
  {
    id: '2-j-1',
    chapter: '2',
    type: QuestionType.Judge,
    content: '飞机在垂直平面内作曲线飞行与平飞所受外力类型相同,有升力、重力、推力或拉力、阻力。',
    answer: 'Y',
    explanation: '基本受力类型相同，只是大小和平衡关系不同。'
  },
  {
    id: '2-j-2',
    chapter: '2',
    type: QuestionType.Judge,
    content: '飞机机动飞行和平飞遇突风时的过载比平飞时大。',
    answer: 'N',
    explanation: '机动飞行（如急转弯）和突风通常会增加过载，但也可能产生负过载或小于1的过载，不能一概而论“比平飞大”（平飞n=1）。'
  },
  {
    id: '2-j-3',
    chapter: '2',
    type: QuestionType.Judge,
    content: '飞机结构强、刚度校核，不仅要经过静力试验和动力试验，而且还应进行飞行试验。',
    answer: 'Y',
    explanation: '飞行试验是最终验证。'
  },
  {
    id: '2-j-4',
    chapter: '2',
    type: QuestionType.Judge,
    content: '机翼的配置型式有平直翼、后掠翼、三角翼和变后掠翼',
    answer: 'N',
    explanation: '题目表述的是平面形状，而“配置型式”通常指上/中/下单翼。如果指平面形状，描述是正确的，但根据题库答案为错，考点应为“机翼平面形状分类”而非配置形式。'
  },
  {
    id: '2-j-5',
    chapter: '2',
    type: QuestionType.Judge,
    content: '复合式机翼通常在靠近翼根处为单块式结构，其余部分为梁式结构。',
    answer: 'N',
    explanation: '通常翼根受力大，采用多梁或单块式；翼尖受力小，采用梁式。但具体视机型而定，此题库答案为错。'
  },
  {
    id: '2-j-6',
    chapter: '2',
    type: QuestionType.Judge,
    content: '飞机在垂直平面内作曲线飞行时，机翼、尾翼传给机身的载荷为不对称载荷，机身在对称载荷下主要产生扭转变形。',
    answer: 'N',
    explanation: '垂直平面机动是对称载荷，机身主要受弯；水平机动或单侧受力才是不对称载荷，产生扭转。'
  },
  {
    id: '2-j-7',
    chapter: '2',
    type: QuestionType.Judge,
    content: '人体承受过载的能力与人体姿态有关，飞机处于严重过载时人体俯卧能承受较大过载。',
    answer: 'Y',
    explanation: '俯卧或仰卧位，血液受惯性力影响沿血管横向流动，对脑部供血影响较小，故耐受力最强。'
  },

  // ===================== 第三章 飞机起落架系统 =====================
  {
    id: '3-c-1',
    chapter: '3',
    type: QuestionType.Single,
    content: '轮式起落架的配置型式有',
    options: opts('前三点式、后三点式、自行车式', '构架式、支柱套筒式、摇臂式', '前三点式、后三点式、小车式', '船身式、浮筒式、轮式、滑橇式'),
    answer: 'A',
    explanation: '这是按轮子布局分类。B是结构形式，C混淆了概念，D是起落装置类型。'
  },
  {
    id: '3-c-2',
    chapter: '3',
    type: QuestionType.Single,
    content: '现代客机起落架的结构型式为',
    options: opts('构架式、支柱套筒式、摇臂式、小车式', '前三点式、后三点式、小车式', '前三点式、后三点式、自行车式', '支柱套筒式、摇臂式、小车式'),
    answer: 'A',
    explanation: '这是按减震支柱的结构分类。现代客机多用支柱套筒式，重型机多用小车式。'
  },
  {
    id: '3-c-3',
    chapter: '3',
    type: QuestionType.Single,
    content: '前三点式起落架相对后三点式起落架突出的优点是',
    options: opts('地面运动稳定性好', '转弯灵活', '着陆滑跑阻力小', '驾驶员前方视线好'),
    answer: 'A',
    explanation: '前三点式重心在主轮之前，着陆滑跑不慎偏转时，惯性力矩有助于自动回正，稳定性好，防拿大顶。'
  },
  {
    id: '3-c-4',
    chapter: '3',
    type: QuestionType.Single,
    content: '小车式起落架在轮架上安装稳定减震器，其功用是',
    options: opts('减小减震支柱受力', '保证飞机转弯灵活', '减弱飞机颠簸跳动', '减缓轮架俯仰振动'),
    answer: 'D',
    explanation: '小车式轮架可以绕枢轴转动，稳定阻尼器用于防止轮架发生剧烈的俯仰摆动。'
  },
  {
    id: '3-c-5',
    chapter: '3',
    type: QuestionType.Single,
    content: '飞机着陆滑跑受水平撞击时，减震效果最好的起落架结构型式是',
    options: opts('构架式起落架', '摇臂式起落架', '支柱套筒式起落架', '自行车式起落架'),
    answer: 'B',
    explanation: '摇臂式起落架的机轮安装在摇臂上，不仅能吸收垂直撞击，也能很好地缓解水平撞击。'
  },
  {
    id: '3-c-6',
    chapter: '3',
    type: QuestionType.Single,
    content: '飞机前轮中立机构的功用是',
    options: opts('保证滑行方向稳定性', '便于操纵前轮自由转弯', '防止前轮摆振', '保证正常着陆接地时，前轮位于中立位置'),
    answer: 'D',
    explanation: '防止起落架收起时卡阻，以及保证着陆接地瞬间前轮不偏转以防侧滑损坏。'
  },
  {
    id: '3-c-7',
    chapter: '3',
    type: QuestionType.Single,
    content: '某飞机轮胎充气压力为 6Kg/cm2，按充气压力分类，此轮胎属于',
    options: opts('低压轮胎', '中压轮胎', '高压轮胎', '超高压轮胎'),
    answer: 'B',
    explanation: '通常低压<3-4kg/cm2，中压4-9kg/cm2，高压>9kg/cm2。'
  },
  {
    id: '3-c-8',
    chapter: '3',
    type: QuestionType.Single,
    content: '有内胎的机轮在轮毂和轮胎侧面画有红色标线，其目的是为了便于检查',
    options: opts('轮胎是否漏气', '轮胎是否严重磨损', '刹车盘位置是否有改变', '轮胎相对轮毂是否相对错动'),
    answer: 'D',
    explanation: '滑移标线。如果红线错位，说明轮胎与轮毂发生了相对转动，可能扯断气门嘴。'
  },
  {
    id: '3-c-9',
    chapter: '3',
    type: QuestionType.Single,
    content: '飞机着陆减震基本原理是',
    options: opts('.延长下沉速度 Vy 的消失时间，消耗接地能量', '支柱和轮胎内的气体压缩，吸收能量', '支柱内油液摩擦，消耗能量', '增大地面阻力'),
    answer: 'A',
    explanation: '根据冲量定理 F*t = m*v，延长撞击时间t，可以减小撞击力F。'
  },
  {
    id: '3-c-10',
    chapter: '3',
    type: QuestionType.Single,
    content: '保证油气式减震支柱减震的使用性能的控制方法是',
    options: opts('调节通油孔面积大小', '增大气体压力', '增加灌油量', '使油气灌充量符合规定'),
    answer: 'D',
    explanation: '严格按照勤务图表（R-T曲线）充气充油是保证性能的前提。'
  },
  {
    id: '3-c-11',
    chapter: '3',
    type: QuestionType.Single,
    content: '某机着陆时油气式减震支柱发出刚性碰撞声，其原因可能是',
    options: opts('支柱充气压力高，灌油量多', '支柱充气压力太高', '支柱灌油太多', '支柱油液漏失'),
    answer: 'D',
    explanation: '油液漏失导致液压缓冲作用失效，出现“打底”现象，金属直接撞击。'
  },
  {
    id: '3-c-12',
    chapter: '3',
    type: QuestionType.Single,
    content: '油气式减震支柱减弱飞机着陆滑跑的颠簸跳动主要靠',
    options: opts('气体压缩吸收能量', '油液通过小孔摩擦耗散能量', '密封装置摩擦消耗能量', '机轮吸收消耗能量'),
    answer: 'B',
    explanation: '气体像弹簧储存能量（会反弹），油液流过小孔产生热能耗散能量（阻尼），从而减弱颠簸。'
  },
  {
    id: '3-c-13',
    chapter: '3',
    type: QuestionType.Single,
    content: '起落架过载的定义为：起落架某方向的载荷',
    options: opts('与飞机重量之比值', '与起落架重量之比值', '与飞机最大着陆重量之比值', '与起落架停机载荷之比值'),
    answer: 'D',
    explanation: '起落架的过载通常是指其承受的撞击力与静止时承受的重力（停机载荷）的比值。'
  },
  {
    id: '3-c-14',
    chapter: '3',
    type: QuestionType.Single,
    content: '在所有起落架可收放的飞机上都会设置下列哪种起落架警告信号装置',
    options: opts('表示起落架位置的指位表', '表示起落架完全放下并锁好的信号灯', '表示起落架完全收上并锁好的信号灯', '一个喇叭或其他音响警告装置及一个红色警告灯'),
    answer: 'D',
    explanation: '当飞机要在着陆构型但起落架未放下时，必须有声光警告（红灯+喇叭）提醒飞行员。'
  },
  {
    id: '3-c-15',
    chapter: '3',
    type: QuestionType.Single,
    content: '在所有起落架可收放的飞机上，必须安装专门装置，以便',
    options: opts('在空速大于结构安全允许值时，防止起落架放出', '起落架在收上位置时，防止油门被收到低于安全功率位置', '如果正常放下起落架失效，起落架能应急放下', '如果正常飞行操纵机构失效，起落架能收上或放下'),
    answer: 'C',
    explanation: '应急放下系统（如重力、手摇泵、冷气瓶）是适航强制要求。'
  },
  {
    id: '3-c-16',
    chapter: '3',
    type: QuestionType.Single,
    content: '起落架信号系统通常给出下面哪种信号',
    options: opts('红灯亮表示位置与手柄不符；放下锁好无灯；收上锁好绿灯', '收上锁好和放下锁好绿灯；红灯亮不安全', '收上锁好时有指示且绿灯；放下锁好无灯', '红灯亮表示位置与手柄不符；放下锁好绿灯；收上锁好没有灯'),
    answer: 'D',
    explanation: '标准逻辑：绿灯=放下锁好；灯灭=收上锁好；红灯=过渡中或不安全。'
  },
  {
    id: '3-c-17',
    chapter: '3',
    type: QuestionType.Single,
    content: '为了防止地面误收起落架，收放系统设有',
    options: opts('收放位置指示灯', '放下位置锁', '地面安全电门与保险销', '停机系留指示'),
    answer: 'C',
    explanation: '空地电门（WOW switch）和地面安全销（Gear Pin）是双重保险。'
  },
  {
    id: '3-c-18',
    chapter: '3',
    type: QuestionType.Single,
    content: '起落架收放系统位置警告信号的作用是',
    options: opts('提醒驾驶员立即收上起落架', '提醒驾驶员立即放下起落架', '防止误收起落架', '告诉驾驶员起落架手柄位置与起落架位置不一致'),
    answer: 'B',
    explanation: '主要警告是在进近阶段提醒放下起落架。'
  },
  {
    id: '3-c-19',
    chapter: '3',
    type: QuestionType.Single,
    content: '现代大型飞机在干跑道上着陆减速中，起主要减速作用的减速力是',
    options: opts('气动阻力', '反推力', '刹车地面摩擦力', '减震支柱气体及流体作用力'),
    answer: 'C',
    explanation: '在干跑道上，机轮刹车提供的减速率最高。'
  },
  {
    id: '3-c-20',
    chapter: '3',
    type: QuestionType.Single,
    content: '对刹车减速的要求是',
    options: opts('能获得最大刹车力矩', '安全、高效', '制动时间越短越好', '刹车既灵活又平稳'),
    answer: 'B',
    explanation: '既要刹得住（高效），又不能抱死爆胎或侧滑（安全）。'
  },
  {
    id: '3-c-21',
    chapter: '3',
    type: QuestionType.Single,
    content: '飞机着陆刹车减速时，其滑跑动能消失于',
    options: opts('减震支柱气体吸收', '减震支柱油液消耗', '地面摩擦', '刹车盘间的摩擦'),
    answer: 'D',
    explanation: '动能转化为热能，主要在刹车盘（定子和转子）摩擦面上产生巨量热量。'
  },
  {
    id: '3-c-22',
    chapter: '3',
    type: QuestionType.Single,
    content: '飞机着陆滑跑使用刹车装置进行人工刹车的基本要领是',
    options: opts('随着滑跑速度的减小逐渐减小刹车压力', '随着滑跑速度的减小逐渐增大刹车压力', '地面摩擦系数越小越要增大刹车压力', '刹车压力始终保持恒定'),
    answer: 'B',
    explanation: '高速时升力大，轮载小，容易抱死，需轻刹；随着速度减小，升力减小，轮载增加，可以施加更大刹车压力。'
  },
  {
    id: '3-c-23',
    chapter: '3',
    type: QuestionType.Single,
    content: '最高刹车效率过程是指',
    options: opts('刹车压力保持最大的过程', '随着滑跑速度减小逐渐增大刹车压力的过程', '刹车力矩大于结合力矩的刹车过程', '恰当使用刹车使地面对机轮的摩擦力随时都处于最大的刹车过程'),
    answer: 'D',
    explanation: '理想刹车是将滑移率控制在最佳值（约15%），此时地面摩擦力最大。'
  },
  {
    id: '3-c-24',
    chapter: '3',
    type: QuestionType.Single,
    content: '为便于飞机在地面灵活运动以及滑跑中的方向修正，前起落架必须设置有',
    options: opts('前轮中立机构', '前轮转弯机构', '前轮减摆装置', '前轮刹车装置'),
    answer: 'B',
    explanation: '转弯机构允许飞行员通过手轮或脚蹬控制前轮偏转。'
  },
  {
    id: '3-c-25',
    chapter: '3',
    type: QuestionType.Single,
    content: '防滞刹车装置的功用是',
    options: opts('提高刹车效率', '减小刹车油液的压力', '防止拖胎', 'A 和 C'),
    answer: 'D',
    explanation: '防滞系统防止机轮抱死拖胎（C），并保持最佳滑移率以获得最大刹车效率（A）。'
  },
  {
    id: '3-m-1',
    chapter: '3',
    type: QuestionType.Multi,
    content: '飞机起落架的基本功用有',
    options: opts('保证飞机地面灵活运动', '减小飞机着陆撞击与颠簸', '安全收放', '支持飞机停放、滑跑刹车减速'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '起落架是飞机在地面运动、停放、起降的关键部件。'
  },
  {
    id: '3-m-2',
    chapter: '3',
    type: QuestionType.Multi,
    content: '可收放式起落架的结构型式有',
    options: opts('构架式', '支柱套筒式', '摇臂式', '自行车式'),
    answer: ['A', 'B', 'C'],
    explanation: '自行车式是布局形式，不是结构形式。'
  },
  {
    id: '3-m-3',
    chapter: '3',
    type: QuestionType.Multi,
    content: '以油气式减震支柱着陆减震是利用',
    options: opts('气体压缩吸收接地能量', '油液高速流过隔板小孔的摩擦消耗能量', '地面刹车消耗能量', '刹车盘的摩擦耗散能量'),
    answer: ['A', 'B'],
    explanation: '油气减震支柱利用气体弹簧效应和油液阻尼效应。C和D是刹车系统的作用。'
  },
  {
    id: '3-m-4',
    chapter: '3',
    type: QuestionType.Multi,
    content: '造成机轮轮胎过热的主要原因有',
    options: opts('轮胎变形热', '地面摩擦热', '刹车热', '空气传导热'),
    answer: ['A', 'B', 'C'],
    explanation: '频繁变形、高速摩擦和刹车传导的热量是轮胎过热的三大元凶。'
  },
  {
    id: '3-m-5',
    chapter: '3',
    type: QuestionType.Multi,
    content: '起落架水平载荷的严重情况是由于',
    options: opts('道面不平整', '踩着刹车接地', '地面摩擦太大', '侧滑接地'),
    answer: ['A', 'B'],
    explanation: '刹车着陆产生巨大水平摩擦力（迎面撞击），道面不平也会产生水平分力。侧滑产生的是侧向载荷。'
  },
  {
    id: '3-m-6',
    chapter: '3',
    type: QuestionType.Multi,
    content: '起落架收放位置信号种类有',
    options: opts('电气信号', '警告信号', '机械信号', '变色灯光信号'),
    answer: ['A', 'B', 'C'],
    explanation: '包括驾驶舱的灯光指示（电气）、警告喇叭（警告）以及起落架舱上的机械指示杆（机械）。'
  },
  {
    id: '3-m-7',
    chapter: '3',
    type: QuestionType.Multi,
    content: '飞机起落架收放机构包括',
    options: opts('收放手柄与位置信号', '收放动作筒、位置锁及舱门收放与协调装置', '收放液压系统、电源等动力源', '地面安全装置、应急放下装置'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '涵盖了控制、执行、动力和安全/应急保障部分。'
  },
  {
    id: '3-m-8',
    chapter: '3',
    type: QuestionType.Multi,
    content: '现代大型客机缩短着陆滑跑距离的减速力有',
    options: opts('放出减速板与襟翼及飞机本身的气动阻力', '发动机反推力', '刹车盘间的摩擦力', '机轮与地面间的摩擦力'),
    answer: ['A', 'B', 'D'],
    explanation: '刹车盘摩擦是内力，机轮与地面的摩擦力才是使飞机减速的外力。'
  },
  {
    id: '3-m-9',
    chapter: '3',
    type: QuestionType.Multi,
    content: '在使用刹车施加刹车压力时，为了保证刹车安全、高效，应考虑的基本影响因素有',
    options: opts('飞机滑跑速度', '道面材料、粗糙度、干湿状况', '场压、场温', '刹车盘温度'),
    answer: ['A', 'B', 'D'],
    explanation: '速度影响轮载，道面状况影响摩擦系数，刹车盘温度影响刹车效能衰退。'
  },
  {
    id: '3-m-10',
    chapter: '3',
    type: QuestionType.Multi,
    content: '关于飞机滑跑刹车减速原理的表述，正确的有',
    options: opts('在一定限度内，使用刹车可增大地面与机轮的摩擦力', '刹车越重，减速越快', '飞机滑跑的动能大部分由刹车装置摩擦热耗散', '使用刹车增大了地面摩擦力，使飞机更快减速，从而缩短着陆滑跑距离'),
    answer: ['A', 'C', 'D'],
    explanation: 'B错误，因为刹车过重会导致抱死打滑，摩擦力反而降低（滑动摩擦小于最大静摩擦/滚动摩擦），且不安全。'
  },
  {
    id: '3-s-1',
    chapter: '3',
    type: QuestionType.Short,
    content: '简述对飞机起落架的性能要求。',
    answer: '保证飞机地面运动具有良好的稳定性和操纵性；具有良好的减震性；具有良好的刹车性能；收放安全可靠。',
    explanation: '稳定性防翻倒，操纵性便滑行，减震性护结构，刹车性短距离，收放性保巡航。'
  },
  {
    id: '3-s-2',
    chapter: '3',
    type: QuestionType.Short,
    content: '简述轮胎过热原因及危害。',
    answer: '轮胎过热是指工作温度过高，引起气压显著增大，橡胶抗拉与抗剪强度显著降低，导致脱层、剥离和爆破。其原因主要是轮胎变形热、地面摩擦热与刹车热。',
    explanation: '高温破坏橡胶结构，高压增加爆破风险。'
  },
  {
    id: '3-s-3',
    chapter: '3',
    type: QuestionType.Short,
    content: '简述前三点式起落架的飞机着陆滑跑刹车的基本方法。',
    answer: '飞机着陆前轮接地后，随着滑跑速度的减小逐渐增大刹车压力，跑道有水或结冰时则应缓和加压。',
    explanation: '利用载荷转移原理，低速时前轮压实，主轮载荷增加，可承受更大刹车力。'
  },
  {
    id: '3-j-1',
    chapter: '3',
    type: QuestionType.Judge,
    content: '着陆放起落架的警告信号是为了提醒飞行员在着陆前放下起落架，由于下滑着陆过程中，要收油门、放襟翼，所以警告信号一般与油门机构、襟翼收放机构相关联。',
    answer: 'Y',
    explanation: '如果油门收至慢车或襟翼处于着陆位而起落架未放下，系统会触发警告。'
  },
  {
    id: '3-j-2',
    chapter: '3',
    type: QuestionType.Judge,
    content: '油气式减震支柱的基本工作原理是利用气体压缩变形消耗撞击动能，减弱飞机颠簸跳动；利用油液高速流过限流孔吸收能量，减小撞击力。',
    answer: 'N',
    explanation: '反了。气体是弹性元件（储能），减小撞击力；油液是阻尼元件（耗能），减弱颠簸跳动。题目描述弄反了功能。'
  },
  {
    id: '3-j-3',
    chapter: '3',
    type: QuestionType.Judge,
    content: '在飞机着陆滑跑使用刹车过程中，有时会出现拖胎现象，其产生原因是由于机轮与地面之间结合力太小。',
    answer: 'Y',
    explanation: '结合力（摩擦力）不足以提供刹车力矩需要的反作用力，导致机轮停止转动而在此地面滑动（抱死）。'
  },
  {
    id: '3-j-4',
    chapter: '3',
    type: QuestionType.Judge,
    content: '飞机前轮中立机构的作用是用来保证飞机停放时前轮处于中立位置以便摆正飞机。',
    answer: 'N',
    explanation: '主要作用是空中收轮前自动回正，以及着陆接地瞬间保持正直。'
  },
  {
    id: '3-j-5',
    chapter: '3',
    type: QuestionType.Judge,
    content: '有防滞装置的刹车系统不利于滑行中单刹车转弯。',
    answer: 'N',
    explanation: '防滞系统通常在低速滑行时会自动解除（比如<15-20节），不影响差动刹车转弯。'
  },
  {
    id: '3-j-6',
    chapter: '3',
    type: QuestionType.Judge,
    content: '轮胎过热使橡胶抗拉与抗剪强度显著降低，导致脱层、剥离甚至发生爆胎。',
    answer: 'Y',
    explanation: '橡胶在高温下性能急剧恶化。'
  },
  {
    id: '3-f-1',
    chapter: '3',
    type: QuestionType.Fill,
    content: '飞机起落架的配置型式有______、______和_______几种。',
    answer: '前三点式、后三点式、自行车式',
    explanation: '这是最主要的三种布局。'
  },
  {
    id: '3-f-2',
    chapter: '3',
    type: QuestionType.Fill,
    content: '飞机起落架系统的结构型式包括_____、______和_______几种。',
    answer: '构架式、支柱套筒式、摇臂式',
    explanation: '按承力构件的构造分类。'
  },
  {
    id: '3-f-3',
    chapter: '3',
    type: QuestionType.Fill,
    content: '飞机轮胎按充气压力大小可分为_________、________、________和_________几种。',
    answer: '低压轮胎、中压轮胎、高压轮胎、超高压轮胎',
    explanation: '按内压分类，影响道面要求。'
  },
  {
    id: '3-f-4',
    chapter: '3',
    type: QuestionType.Fill,
    content: '采用涡扇式发动机的大、中型运输机，着陆滑跑简减速力主要包括_______、______和______三个方面。',
    answer: '空气阻力、刹车力、发动机反推力',
    explanation: '三大减速手段：气动、机轮、反推。'
  },
  {
    id: '3-f-5',
    chapter: '3',
    type: QuestionType.Fill,
    content: '对飞机滑跑刹车减速的要求可概括为______、_________。',
    answer: '安全、高效',
    explanation: '不偏出跑道、不爆胎（安全），距离尽可能短（高效）。'
  },

  // ===================== 第四章 飞行操纵系统 =====================
  {
    id: '4-c-1',
    chapter: '4',
    type: QuestionType.Single,
    content: '飞行操纵系统中主操纵系统在飞行中的功用是',
    options: opts('用来操纵副翼、方向舵和升降舵的运动', '操纵飞机绕纵轴、立轴和横轴转动，以改变或保持飞机的飞行姿态', '操纵飞机沿纵轴、立轴和横轴运动，以改变或保持飞机的飞行姿态', '操纵飞机起飞、着陆和上升、下降'),
    answer: 'B',
    explanation: '主操纵系统控制三个主舵面，进而控制飞机绕三个轴的姿态变化。'
  },
  {
    id: '4-c-2',
    chapter: '4',
    type: QuestionType.Single,
    content: '在飞行中，飞机需要向左改变航向时应',
    options: opts('蹬左脚蹬；向右转驾驶盘', '向左转驾驶盘；蹬左脚蹬', '向左转驾驶盘；蹬右脚蹬', '蹬右脚蹬；向右转驾驶盘'),
    answer: 'B',
    explanation: '左转弯需要左坡度（左转盘）和左偏航（蹬左舵）配合，协调转弯。'
  },
  {
    id: '4-c-3',
    chapter: '4',
    type: QuestionType.Single,
    content: '飞行操作系统中的手操纵和脚操纵动作',
    options: opts('与人体运动的本能反应相一致', '与人体运动的本能反应不一致', '与飞机运动相反', '手操纵动作与人体的本能反应一致，脚操纵与人体的本能反应不一致'),
    answer: 'A',
    explanation: '设计符合人体工程学：欲左倾则左压盘，欲左转则左蹬腿（类似骑车或身体重心偏移）。'
  },
  {
    id: '4-c-4',
    chapter: '4',
    type: QuestionType.Single,
    content: '操纵飞机升降舵是为了使飞机',
    options: opts('绕横轴转动', '使飞机作起飞、着陆运动', '沿飞机横轴方向运动', '绕纵轴作旋转运动'),
    answer: 'A',
    explanation: '升降舵控制俯仰，即绕横轴（Pitch axis）转动。'
  },
  {
    id: '4-c-5',
    chapter: '4',
    type: QuestionType.Single,
    content: '飞行员操纵飞机盘旋爬高时，后带驾驶杆并左转驾驶盘，那么右边副翼及升降舵的运动是',
    options: opts('向下偏和向下偏', '向上偏和向下偏', '向上偏和向上偏', '向下偏和向上偏'),
    answer: 'D',
    explanation: '左转盘->左副翼上，右副翼下（增加右翼升力）；后带杆->升降舵上偏（压尾抬头）。所以是右副翼向下，升降舵向上。'
  },
  {
    id: '4-c-6',
    chapter: '4',
    type: QuestionType.Single,
    content: '所谓飞行操作系统的主操纵力是指',
    options: opts('飞行员进行主操纵时施加在主操纵机构上的力', '飞行员进行主操纵时电传动机构操纵摇臂施加在各主操纵面上的作用力', '飞行员进行主操纵时所要提供的最大操纵力', '飞行员进行主操纵使主操纵面偏转后操纵面产生的使飞机改变飞行姿态的空气动力'),
    answer: 'A',
    explanation: '杆力/脚蹬力，即飞行员肌肉施加的力。'
  },
  {
    id: '4-c-7',
    chapter: '4',
    type: QuestionType.Single,
    content: '根据操纵力的传递特点可将飞机主操纵型式分为',
    options: opts('人工操纵与自动操纵', '无助力机械式主操纵与助力式主操纵', '液压式主操纵与电传式主操纵', '机械式主操纵与液压式主操纵'),
    answer: 'B',
    explanation: '主要分为直接人力驱动的（无助力/软式/硬式）和借助液压/电力的（有助力）。'
  },
  {
    id: '4-c-8',
    chapter: '4',
    type: QuestionType.Single,
    content: '飞机操纵系统中可使软式传动的钢索改变方向的是',
    options: opts('松紧螺套', '双摇臂', '滑轮', '导索环'),
    answer: 'C',
    explanation: '滑轮用于改变钢索走向；导索环限制抖动；松紧螺套调张力。'
  },
  {
    id: '4-c-9',
    chapter: '4',
    type: QuestionType.Single,
    content: '在软式传动中的钢索必须要有一定的预加张力，其原因是',
    options: opts('防止气温变化使钢索松弛', '在操纵舵面时减小钢索受力', '防止钢索使用过程中变松', '克服“弹性间隙”，改善系统灵敏性'),
    answer: 'D',
    explanation: '消除松弛，保证操纵指令能即时、准确地传递（减少死区）。'
  },
  {
    id: '4-c-10',
    chapter: '4',
    type: QuestionType.Single,
    content: '有液压助力器的飞行操纵系统中，操纵驾驶杆（盘或脚蹬）是控制液压助力器的',
    options: opts('控制活门（或配油柱塞）', '传动动作筒', '舵面传动杆', '液压供油开关'),
    answer: 'A',
    explanation: '驾驶杆的输入控制助力器的伺服阀（控制活门），进而控制液压油流向。'
  },
  {
    id: '4-c-11',
    chapter: '4',
    type: QuestionType.Single,
    content: '有些飞机的飞行操作系统中装有舵面锁定机构（舵面锁），可将舵面锁定在一定位置，舵面锁是在',
    options: opts('大风天飞机停放时使用，以防止舵面被风吹动使操作系统的构件受到撞击和磨损', '大风天平飞时使用，以保持飞机的稳定飞行', '地面停放和大风天的滑行时使用', '大风天滑行和大风天地面停放时使用'),
    answer: 'C',
    explanation: '防止地面阵风吹动舵面猛烈撞击限位块损坏结构。'
  },
  {
    id: '4-c-12',
    chapter: '4',
    type: QuestionType.Single,
    content: '在无回力式助力操作系统中，为了给飞行员提供适当的操纵感觉力以防止操纵过量和动作过于粗猛，系统都设置有',
    options: opts('感力和定中机构', '载荷限制器', '液压伺服控制器', '负补偿片'),
    answer: 'A',
    explanation: '由于液压助力器不可逆，飞行员感觉不到气动载荷，必须用弹簧等机构模拟杆力（人工感觉）。'
  },
  {
    id: '4-c-13',
    chapter: '4',
    type: QuestionType.Single,
    content: '襟副翼是指',
    options: opts('襟翼和副翼合为一体的操纵面', '襟翼放下时，副翼随之放下一定角度，起襟翼作用的副翼', '副翼放下时，襟翼随之放下一定角度，起副翼作用的襟翼', 'A 和 B'),
    answer: 'D',
    explanation: '襟副翼（Flaperon）兼具襟翼增升和副翼滚转的功能。'
  },
  {
    id: '4-c-14',
    chapter: '4',
    type: QuestionType.Single,
    content: '无助力机械式主操纵系统适用于',
    options: opts('大型运输机', '高亚音速飞机', '小型或低速飞机', '无自动驾驶设备的飞机'),
    answer: 'C',
    explanation: '小型低速飞机气动载荷小，人力足以克服。'
  },
  {
    id: '4-c-15',
    chapter: '4',
    type: QuestionType.Single,
    content: '随动补偿片与配平调整片相比',
    options: opts('两者的操纵完全相同', '两者都与舵面同向偏转', '两者都与舵面反向偏转，能减小操纵感力', '前者与舵面同向偏转，后者与舵面反向偏转'),
    answer: 'C',
    explanation: '补偿片通常反向偏转以产生气动助力，减轻杆力；配平片也是反向偏转，用于消除杆力。但随动是自动的，配平是人工/电动的。'
  },
  {
    id: '4-c-16',
    chapter: '4',
    type: QuestionType.Single,
    content: '在无回力的助力飞行操纵系统中，飞行时飞行员操纵舵面的操纵力能否减轻或消除?',
    options: opts('可以用舵面上的调整片来减轻或消除', '因舵面上没有调整片，故不能在飞行中减轻或消除', '可以用配平机构来减轻或消除', '因舵面上为随动补偿片，一般不能通过飞行员的主动操纵来减轻或消除'),
    answer: 'C',
    explanation: '无回力系统（不可逆）的杆力来自感力机构，消除杆力需调整感力机构的中立位置（配平机构），而非通过舵面上的空气动力片。'
  },
  {
    id: '4-c-17',
    chapter: '4',
    type: QuestionType.Single,
    content: '在驾驶舱中判断襟翼位置主要依据是',
    options: opts('襟翼手柄的位置', '襟翼驱动装置的运动', '襟翼指位表的指示', '液压系统工作是否正常'),
    answer: 'C',
    explanation: '仪表板上的指位表直接反馈襟翼的实际角度。'
  },
  {
    id: '4-c-18',
    chapter: '4',
    type: QuestionType.Single,
    content: '机翼上的缝翼是装在机翼前缘处的可动翼面，它的功用是',
    options: opts('代替襟翼，增加机翼升力', '起扰流或减速的作用', '起飞时增大飞机速度', '延缓气流分离，增大机翼临界迎角，从而增大升力'),
    answer: 'D',
    explanation: '前缘缝翼通过缝隙引流高能气流吹除附面层，推迟失速。'
  },
  {
    id: '4-c-19',
    chapter: '4',
    type: QuestionType.Single,
    content: '现代大型客机普遍采用的襟翼结构型式为',
    options: opts('简单式襟翼', '分裂式襟翼', '液压收放式襟翼', '开缝式襟翼'),
    answer: 'D',
    explanation: '富勒襟翼（多缝襟翼）效率最高，广泛应用。'
  },
  {
    id: '4-c-20',
    chapter: '4',
    type: QuestionType.Single,
    content: '装在机翼上表面的飞行扰流板与副翼配合作横侧操纵时，它的情况是',
    options: opts('在用驾驶盘操纵副翼的同时，两边机翼的扰流板张开', '与副翼同步工作，即副翼向上偏转时，机翼上的飞行扰流板向上张开', '与副翼工作相反，即副翼上偏的机翼飞行扰流板向下张开', '在操纵副翼的同时，副翼向上偏转的机翼飞行扰流板向上张开，副翼向下偏转的机翼扰流板紧贴翼面不动'),
    answer: 'D',
    explanation: '协助滚转：一侧副翼上偏（减升），同侧扰流板升起（破坏升力），合力使飞机向该侧滚转。另一侧保持不动。'
  },
  {
    id: '4-c-21',
    chapter: '4',
    type: QuestionType.Single,
    content: '配平调整片的基本功用是',
    options: opts('减小或消除操纵杆力', '带动主舵面反向偏转，修正飞机姿态', '直接用调整片对飞机进行姿态控制', '帮助飞机地面减速'),
    answer: 'A',
    explanation: '配平是为了松杆保持姿态，即消除杆力。'
  },
  {
    id: '4-c-22',
    chapter: '4',
    type: QuestionType.Single,
    content: '大型机俯仰配平操纵有三种方式：主电动配平、自动驾驶仪配平、人工机械配平。对俯仰配平的使用，起飞前',
    options: opts('只能采用人工机械操纵', '应根据飞机重心和襟翼位置因素，将水平安定面调定在绿色区域内的适当位置上', '应检查三种配平方式的超控关系是否正常', '使用配平刹车将水平安定面固定好'),
    answer: 'B',
    explanation: '起飞前必须设置安定面配平值（Green Band），以保证起飞时的抬头力矩适当。'
  },
  {
    id: '4-c-23',
    chapter: '4',
    type: QuestionType.Single,
    content: '马赫配平系统用来提供较高马赫数飞行时飞机的稳定性，关于它的使用是',
    options: opts('该系统需飞行员进行操纵才能实现马赫配平', '当 M>0.7 时,不需飞行员的操纵控制信号系统自动工作', '飞机飞行中,该系统随飞机速度的增大输出超控指令给舵机对安定面进行调整', '马赫配平系统通常使用于起飞滑跑的后段和着陆滑跑的前段,保证起飞、着陆的稳定性'),
    answer: 'C',
    explanation: '随马赫数增加，压力中心后移导致自动俯冲（马赫配平），系统会自动向上偏转安定面或升降舵来补偿，无需飞行员干预。'
  },
  {
    id: '4-c-24',
    chapter: '4',
    type: QuestionType.Single,
    content: '偏航阻尼器的功用是',
    options: opts('改善飞机高速飞行时的方向稳定性', '改善飞机低速飞行时的方向稳定性', '改善飞机小速度飞行时的方向和横侧稳定性', '按空速信号和方向舵侧滑角加速度信号以适时提供指令使方向舵相对飘摆振荡反方向偏转，从而增大偏航阻尼，消除飘摆'),
    answer: 'D',
    explanation: '荷兰滚（飘摆）是由于横侧稳定性过强而方向稳定性相对不足引起的。偏航阻尼器自动修正微小的偏航运动。'
  },
  {
    id: '4-c-25',
    chapter: '4',
    type: QuestionType.Single,
    content: '现代大中型飞机都设置有失速警告系统。在＿＿给飞行员提供明显的抖杆或灯光、音响警告信号，以便及时改出。',
    options: opts('飞机以临界迎角飞行', '大约比失速速度小 7％的速度飞行', '大约比失速速度大 7％的速度飞行', '飞机失速'),
    answer: 'C',
    explanation: '必须有提前量。通常在失速速度的1.05-1.07倍（即大7%）时触发。'
  },
  {
    id: '4-c-26',
    chapter: '4',
    type: QuestionType.Single,
    content: '飞机失速警告系统的功用是',
    options: opts('失速警告信号向飞行员表明飞机已经失速，飞机处于危急状态', '提醒飞行员飞机即将进入失速，应立即推杆减小迎角以防止飞机进入危险的失速状态', '告诉飞行员现在飞机飞行速度已经过小，必须加大油门增速', '飞机失速警告以驾驶杆抖动告警，告诉飞行员发动机有抖动故障'),
    answer: 'B',
    explanation: '失速警告目的是预防，改出动作通常是推杆减攻角、加油门。'
  },
  {
    id: '4-m-1',
    chapter: '4',
    type: QuestionType.Multi,
    content: '对飞行操纵系统的基本要求有',
    options: opts('手、脚操纵动作与人体生理本能反应一致', '良好的操纵性、稳定性', '操纵轻便、灵活、准确', '各舵面操纵互不干扰'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '通用设计准则。'
  },
  {
    id: '4-m-2',
    chapter: '4',
    type: QuestionType.Multi,
    content: '每架飞机都应有的操纵面有',
    options: opts('主操纵面', '增升装置', '配平装置', '随动补偿片与反补偿片'),
    answer: ['A', 'B'],
    explanation: '所有飞机都有主操纵面（副/升/方），现代飞机基本都有增升装置。配平片和补偿片并非每架飞机（如小型机或电传机）都必须以物理形态存在（可能有配平系统但无调整片）。题库答案为AB。'
  },
  {
    id: '4-m-3',
    chapter: '4',
    type: QuestionType.Multi,
    content: '影响给定的人工操纵的飞机飞行主操纵力的因素有',
    options: opts('飞行速度', '舵面尺寸', '舵偏角大小', '配平调整片位置'),
    answer: ['A', 'B', 'C'],
    explanation: '气动铰链力矩取决于动压（速度）、面积（尺寸）和偏角。配平片是用来消除它的，不是产生它的基本因素（虽然有关联，但ABC是直接物理因素）。'
  },
  {
    id: '4-m-4',
    chapter: '4',
    type: QuestionType.Multi,
    content: '无助力飞行主操纵机械传动机构的型式有',
    options: opts('硬式传动', '软式传动', '涡轮蜗杆传动', '混合式传动'),
    answer: ['A', 'B', 'C'],
    explanation: '涡轮蜗杆通常用于配平或襟翼，不做主操纵传动（因为不可逆且慢）。此处题库答案可能为ABC或ABD？通常主操纵是软、硬、混合。C选项存疑，但依照PDF OCR显示正确答案为ABC。'
  },
  {
    id: '4-m-5',
    chapter: '4',
    type: QuestionType.Multi,
    content: '属于飞行主操纵系统操纵机构的有',
    options: opts('驾驶盘', '脚蹬', '配平手轮', '舵面锁手柄'),
    answer: ['A', 'B'],
    explanation: '配平手轮属于辅助操纵，舵面锁属于安全装置。'
  },
  {
    id: '4-m-6',
    chapter: '4',
    type: QuestionType.Multi,
    content: '属于飞机电传操纵的特点有',
    options: opts('操纵输入用电信号传递', '用侧杆取代驾驶杆、驾驶盘', '通过飞行控制计算机处理操纵信号后向液压助力器放出操纵指令', '电力传送操纵输入信号采用了多台计算机处理系统'),
    answer: ['A', 'C', 'D'],
    explanation: '侧杆（Side stick）是空客特色，并非电传操纵的必须特征（波音777也是电传，但用驾驶盘）。'
  },
  {
    id: '4-m-7',
    chapter: '4',
    type: QuestionType.Multi,
    content: '配平调整片的功用有',
    options: opts('用于飞行中减轻或消除操纵力', '有助于抵消飞机飞行中的不平衡力，控制飞机的平衡', '必要时可操纵调整片带动主舵面反向操纵，从而对飞机进行姿态修正控制或者用此方法来调整飞机的平衡', '平衡位于铰链轴线后部主操纵面的重量'),
    answer: ['A', 'B', 'C'],
    explanation: 'D是配重的作用。C指的是在主操纵失效时的备份操纵功能（如波音737的人工配平）。'
  },
  {
    id: '4-m-8',
    chapter: '4',
    type: QuestionType.Multi,
    content: '当飞机在地面并且有一个或两个推力手柄被推到起飞位，起飞形态警告就被预位，此时，能引起间歇性的起飞形态警告喇叭告警声响的情况有',
    options: opts('水平安定面不在绿区范围内', '飞机速度低于一定值', '襟翼未放到规定的起飞角度范围', '减速板手柄不在“放下”卡位'),
    answer: ['A', 'C', 'D'],
    explanation: '起飞构型警告三大件：配平、襟翼、减速板。'
  },
  {
    id: '4-s-1',
    chapter: '4',
    type: QuestionType.Short,
    content: '简述现代运输机一般有哪些操纵面。',
    answer: '副翼、升降舵、方向舵、全动平尾、后缘襟翼、前缘襟翼、前缘缝翼、飞行扰流板、地面扰流板。',
    explanation: '涵盖主操纵面（副/升/方）和辅助操纵面（增升/减速）。'
  },
  {
    id: '4-s-2',
    chapter: '4',
    type: QuestionType.Short,
    content: '简述电传操纵系统的主要特点。',
    answer: '操纵信号电力传递到飞行控制计算机，计算机接受操纵信号或自动驾驶信号等，经过处理后向液压助力器发出操纵指令传动舵面偏转。',
    explanation: 'Fly-By-Wire：计算机介入控制律，线缆代替钢索。'
  },
  {
    id: '4-s-3',
    chapter: '4',
    type: QuestionType.Short,
    content: '为了保证正常起飞,在飞机形态方面对飞机操纵系统有哪些使用要求?',
    answer: '放增升装置到起飞位；收起减速板；正确进行预配平。',
    explanation: '确保升力足够，阻力最小，且飞机配平状态适合离地。'
  },
  {
    id: '4-j-1',
    chapter: '4',
    type: QuestionType.Judge,
    content: '飞行中，飞机需要向右改变航向时，必须向右转动驾驶盘，蹬右脚蹬。此时，右副翼向上偏，方向舵向右偏转。',
    answer: 'Y',
    explanation: '协调转弯动作。'
  },
  {
    id: '4-j-2',
    chapter: '4',
    type: QuestionType.Judge,
    content: '对无助力式操纵的飞机在地面停放时，主舵面和操纵系统不致损坏，飞机上都装有舵面锁定机构。',
    answer: 'Y',
    explanation: '防止阵风吹动舵面撞击。'
  },
  {
    id: '4-j-3',
    chapter: '4',
    type: QuestionType.Judge,
    content: '为了减小杆力和减轻长途飞行的疲劳，现代高速大型飞机大多数装有配平调整片。',
    answer: 'N',
    explanation: '现代大型机通常使用全动平尾进行俯仰配平，而不是升降舵上的配平片（虽然可能有，但主要手段是全动平尾）。此题判断为错，侧重于“调整片”不是唯一手段。'
  },
  {
    id: '4-j-4',
    chapter: '4',
    type: QuestionType.Judge,
    content: '飞机飞行主操纵系统的基本组成是副翼、方向舵、升降舵。',
    answer: 'N',
    explanation: '系统组成包括：驾驶舱操纵机构（杆/舵）、传动系统、执行机构（舵面）。题目混淆了“操纵面”和“操纵系统”。'
  },
  {
    id: '4-j-5',
    chapter: '4',
    type: QuestionType.Judge,
    content: '地面扰流板只在地面工作，飞行扰流板只在空中工作。',
    answer: 'N',
    explanation: '飞行扰流板在地面也工作（配合地面扰流板全开减速），在空中用于滚转辅助和减速；地面扰流板仅在地面工作。'
  },
  {
    id: '4-j-6',
    chapter: '4',
    type: QuestionType.Judge,
    content: '在一些飞机的液压助力操纵系统中，当助力器失效，可将整个助力器变为一个刚性杆，对系统进行人工应急（备用）操纵。',
    answer: 'Y',
    explanation: '手动回退模式（Manual Reversion）。'
  },
  {
    id: '4-j-7',
    chapter: '4',
    type: QuestionType.Judge,
    content: '现代大中型飞机横侧操纵的特点之一是通过副翼加飞行扰流板的偏转来完成的。',
    answer: 'Y',
    explanation: '副翼+扰流板协同控制滚转，尤其在低速或大坡度时。'
  },
  {
    id: '4-j-8',
    chapter: '4',
    type: QuestionType.Judge,
    content: '飞行扰流板和地面扰流板的基本功用是卸升、增阻、减速。起飞前所有飞行和地面扰流板均应在放下位，否则加油门起飞时会出现起飞形态警告。',
    answer: 'Y',
    explanation: '防止起飞时升力损失。'
  },
  {
    id: '4-j-9',
    chapter: '4',
    type: QuestionType.Judge,
    content: '大中型飞机机翼前缘除了有缝翼外，还有前缘襟翼，起飞前应通过其控制手柄将前缘襟翼放到规定位置，否则起飞加推力起飞时会出现起飞形态警告。',
    answer: 'Y',
    explanation: '前缘装置（LE Flaps/Slats）必须放出以保证起飞升力。'
  },
  {
    id: '4-f-1',
    chapter: '4',
    type: QuestionType.Fill,
    content: '飞行主操纵系统主要有______和_______两种型式。前者适用于_______飞机，后者适用于______飞机。',
    answer: '无助力操纵系统；助力操纵系统；小型低速；大中型高速',
    explanation: '根据人力是否足以克服气动载荷划分。'
  },
  {
    id: '4-f-2',
    chapter: '4',
    type: QuestionType.Fill,
    content: '无助力机械传动式主操纵系统中机械传动机构的型式有______、________和_________三种。',
    answer: '软式传动；硬式传动；混合式传动',
    explanation: '钢索、拉杆或二者结合。'
  },
  {
    id: '4-f-3',
    chapter: '4',
    type: QuestionType.Fill,
    content: '不可逆液压助力主操纵系统中的操纵力感觉装置的型式有______、________和_______几种。',
    answer: '弹簧式；动压罐式；杆力计算机',
    explanation: '模拟真实的气动载荷手感。'
  },
  {
    id: '4-f-4',
    chapter: '4',
    type: QuestionType.Fill,
    content: '小型飞机的增升装置通常只有_____；运输机的增升装置则包括______和______两部分。',
    answer: '后缘襟翼；后缘襟翼；前缘装置',
    explanation: '大型机需要更强的增升能力，所以增加了前缘缝翼/襟翼。'
  },

  // ===================== 第五章 飞机液压及气压传动系统 =====================
  {
    id: '5-c-1',
    chapter: '5',
    type: QuestionType.Single,
    content: '除去导管外，组成一个简单的液压系统还需要的附件是',
    options: opts('动作筒、液压油箱、储压器和控制活门', '油泵、油箱、安全活门和换向活门', '液压马达、动作筒和压力表', '油泵、油箱、控制活门和动作筒'),
    answer: 'D',
    explanation: '液压源（泵/箱）、控制元件（活门）、执行元件（动作筒）是最小系统要素。'
  },
  {
    id: '5-c-2',
    chapter: '5',
    type: QuestionType.Single,
    content: '在现代民航飞机上通常使用的液压油是',
    options: opts('矿物基液压油、矿物基和植物基的混和油、植物基液压油', '矿物基液压油、酒精基液压油、磷酸脂基液压油', '矿物基液压油、酒精基液压油、矿物基与磷酸脂基混和的液压油', '矿物基液压油、磷酸脂基液压油'),
    answer: 'D',
    explanation: 'BMS 3-11 (Skydrol) 是典型的磷酸酯基油（紫色），早期飞机用矿物油（红色 5606）。'
  },
  {
    id: '5-c-3',
    chapter: '5',
    type: QuestionType.Single,
    content: '液压油箱增压的目的是',
    options: opts('增大供油量', '增加供油速度', '保持流量不变', '提高并保持系统的高空性，防止管路气塞'),
    answer: 'D',
    explanation: '高空大气压低，泵吸口容易产生气穴（Cavitation），增压可防止此现象，保证泵正常吸油。'
  },
  {
    id: '5-c-4',
    chapter: '5',
    type: QuestionType.Single,
    content: '将油液压力能转变为旋转运动机械能的附件是',
    options: opts('齿轮泵', '动作筒', '液压马达', '蓄压器'),
    answer: 'C',
    explanation: '液压马达驱动襟翼、缝翼的旋转轴。'
  },
  {
    id: '5-c-5',
    chapter: '5',
    type: QuestionType.Single,
    content: '将机械能转变为压力能的液压附件是',
    options: opts('液压马达', '动作筒', '柱塞泵', '蓄压器'),
    answer: 'C',
    explanation: '泵是系统的动力源，将机械能转化为液压能。'
  },
  {
    id: '5-c-6',
    chapter: '5',
    type: QuestionType.Single,
    content: '某飞机液压系统指示的工作压力比正常值高但又不超过某一恒定值，分析其原因是',
    options: opts('安全活门失效，卸荷活门在起作用', '卸荷活门已失效，安全活门起作用', '卸荷活门已失效，减压活门在起作用', '卸荷活门、安全活门均已失效，减压活门在起作用'),
    answer: 'B',
    explanation: '卸荷活门（调压器）失效导致压力持续上升，直到达到安全活门（释压阀）的开启压力并维持在此高压。'
  },
  {
    id: '5-c-7',
    chapter: '5',
    type: QuestionType.Single,
    content: '液压系统蓄压器的主要功用是',
    options: opts('保证向油泵连续供油', '当系统中没有附件工作时，卸去油泵的负载', '可作为手摇泵的应急供油', '当系统有多个装置同时需供压时增大系统供油输出功率，减小压力波动；油泵供压失效，可提供有限应急供油'),
    answer: 'D',
    explanation: '蓄压器作用：储能（应急/辅助高峰需求）、消脉（平滑压力）、补油（补偿泄漏/热膨胀）。'
  },
  {
    id: '5-c-8',
    chapter: '5',
    type: QuestionType.Single,
    content: '某蓄压器初始充气压力为 1800PSI，当系统产生了 3000PSI 的油液压力时，该蓄压器的气体腔一边的压力是',
    options: opts('1800PSI', '2400PSI', '3000PSI', '4800PSI'),
    answer: 'C',
    explanation: '在正常工作状态下，蓄压器内油液和气体压力平衡。'
  },
  {
    id: '5-c-9',
    chapter: '5',
    type: QuestionType.Single,
    content: '能够自动地控制油液从正常系统或应急系统到动作筒的附件是',
    options: opts('节流活门', '换向活门', '单向活门', '减压活门'),
    answer: 'B',
    explanation: '通常指梭阀（Shuttle Valve），属于换向/选择活门的一种，自动选择高压端供油。'
  },
  {
    id: '5-c-10',
    chapter: '5',
    type: QuestionType.Single,
    content: '液压系统的安全活门的功用是',
    options: opts('保证系统的压力在规定的最大值以内', '保证系统的温度在规定的最大值以内', '保证系统的流量在规定的最大值以内', '以上都对'),
    answer: 'A',
    explanation: '类似于电路的保险丝，防止超压爆管。'
  },
  {
    id: '5-c-11',
    chapter: '5',
    type: QuestionType.Single,
    content: '当液压油泵工作时压力是正常的，如果油泵停止工作，液压系统就没有压力，这可能是由于',
    options: opts('选择活门漏油', '蓄压器油压低', '压力管路受阻', '蓄压器充气活门漏气'),
    answer: 'D',
    explanation: '油泵停止后系统压力应由蓄压器维持一段时间。如果立即掉零，说明蓄压器没能储能（气漏光了）。'
  },
  {
    id: '5-c-12',
    chapter: '5',
    type: QuestionType.Single,
    content: '通常用于飞机襟翼收放的液压驱动附件是',
    options: opts('液压马达', '动作筒', '液压油泵', '液压选择活门'),
    answer: 'A',
    explanation: '襟翼通常由螺杆驱动，需要旋转运动，故用液压马达。起落架收放通常用动作筒（直线运动）。'
  },
  {
    id: '5-c-13',
    chapter: '5',
    type: QuestionType.Single,
    content: '卸荷活门与齿轮泵一起使用是为了',
    options: opts('消除压力波动', '卸除系统压力', '自动控制油泵的充压与卸荷', '防止系统压力超过安全值'),
    answer: 'C',
    explanation: '定量泵（齿轮泵）必须配合卸荷阀，在系统不需要压力时让油液低压回油，减少发动机负载和油液发热。'
  },
  {
    id: '5-c-14',
    chapter: '5',
    type: QuestionType.Single,
    content: '油滤是用来清洁油液的装置，为了保证连续供油，在油滤装置里设置有',
    options: opts('放沉淀口', '旁通活门', '滤芯', '控制活门'),
    answer: 'B',
    explanation: '当滤芯堵塞时，旁通活门打开，让脏油通过以保证部件有油可用（宁可脏油，不可无油）。'
  },
  {
    id: '5-c-15',
    chapter: '5',
    type: QuestionType.Single,
    content: '大型飞机油箱增压气体通常来自',
    options: opts('压缩空气泵', '冲压空气', '发动机压气机引气', '以上都对'),
    answer: 'C',
    explanation: '引气系统提供最方便的高压气源。'
  },
  {
    id: '5-c-16',
    chapter: '5',
    type: QuestionType.Single,
    content: '油箱的正常供油口位置一般高于应急供油口，其原因是',
    options: opts('保证供油更清洁', '保证在正常供油管路破裂泄漏时有足够油液用于应急供压', '保证应急供油油泵进油口压力更高', '以上都对'),
    answer: 'B',
    explanation: '保留一部分液压油给备用系统（Standby System）。'
  },
  {
    id: '5-c-17',
    chapter: '5',
    type: QuestionType.Single,
    content: '通常大型运输机液压系统正常工作压力设置为',
    options: opts('2000PSI', '1000PSI', '3000PSI', '4000PSI'),
    answer: 'C',
    explanation: '3000 PSI 是行业标准，部分新机型（如A380/B787）采用5000 PSI。'
  },
  {
    id: '5-c-18',
    chapter: '5',
    type: QuestionType.Single,
    content: '就供油量而言齿轮泵、柱塞泵分别是',
    options: opts('定量油泵和变量油泵', '变量油泵和定量油泵', '供油连续性油泵和间断性油泵', '供油量大和供油量小'),
    answer: 'A',
    explanation: '齿轮泵排量固定；现代飞机的轴向柱塞泵通常带有斜盘调节机构，是变量泵。'
  },
  {
    id: '5-c-19',
    chapter: '5',
    type: QuestionType.Single,
    content: '现代许多飞机油压主系统之间设置有动力转换组件（PTU），其工作是',
    options: opts('当一个主系统液压油泵失效时，利用另一个工作正常的主系统压力驱动液压马达－油压油泵组件，从失效系统的油箱中抽油加压以对飞行安全有主要影响的部件供压', '当一个主系统失去动力源时，立即将该系统并入到正常的系统动力源上以连续供压', '当一个主系统失压时，通过转换，由正常供压的主系统供压，以保证所有传动部件正常工作', '视机型不同，可以是以上几种情况之一'),
    answer: 'A',
    explanation: 'PTU只传递动力（机械能），不传递液压油。'
  },
  {
    id: '5-m-1',
    chapter: '5',
    type: QuestionType.Multi,
    content: '对液压传动工作有重要影响的流体流动特性包括',
    options: opts('压力损失', '泄流损失', '气塞', '液压撞击'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '流体力学的基本问题。'
  },
  {
    id: '5-m-2',
    chapter: '5',
    type: QuestionType.Multi,
    content: '造成液压系统工作油量不足，压力持续下降的可能原因有',
    options: opts('系统中混有空气', '管路破裂或接头松动，密封失效', '控制活门或传动装置（如动作筒活塞与筒壁）存在间隙增大', '油箱增压压力不足'),
    answer: ['A', 'B', 'C'],
    explanation: '漏油（外漏B/内漏C）和气塞（A）都会导致建立不起压力。'
  },
  {
    id: '5-m-3',
    chapter: '5',
    type: QuestionType.Multi,
    content: '液压系统蓄压器的功用有',
    options: opts('保证向发动机驱动油泵供油', '减小系统压力波动，保持供压稳定', '增大系统输出功率', '系统失压时，可提供有限次数工作液压油作应急液压源'),
    answer: ['B', 'C', 'D'],
    explanation: 'A不对，蓄压器不是给泵供油的，是泵给它充能。'
  },
  {
    id: '5-m-4',
    chapter: '5',
    type: QuestionType.Multi,
    content: '多液压源系统工作特点是',
    options: opts('对重要部件，采取多个主系统联合供压', '每个主系统通常由两个或多个液压泵供压', '各主系统分别向各自分管的重要部件供压', '一般性工作部件由各自的主系统供压'),
    answer: ['A', 'B', 'D'],
    explanation: '冗余设计，关键部件（舵面）通常由多套系统驱动。'
  },
  {
    id: '5-m-5',
    chapter: '5',
    type: QuestionType.Multi,
    content: '引起液压系统压力损失的原因有',
    options: opts('传动油液流动产生的内摩擦及与管壁摩擦', '传动部件作功', '液压油流速或流向突然改变', '油箱增压压力变小'),
    answer: ['A', 'C'],
    explanation: '沿程损失和局部损失。'
  },
  {
    id: '5-m-6',
    chapter: '5',
    type: QuestionType.Multi,
    content: '客机多液压源系统动力源安排的特点有',
    options: opts('每个主系统通常由一个发动机驱动油泵和一个电机驱动油泵供压', '发动机驱动油泵及电机驱动油泵动力源分别来自不同发动机', '有些飞机多液压源系统还设有空气涡轮泵作为备用动力', '许多飞机液压系统之间还设有动力转换组件'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '动力源多样化（EDP, ACMP, RAT, PTU）保证可靠性。'
  },
  {
    id: '5-s-1',
    chapter: '5',
    type: QuestionType.Short,
    content: '简述液压系统的基本组成及主要附件。',
    answer: '油箱、油泵、蓄压器、油滤、控制活门、液压动作筒、液压马达等。',
    explanation: '源、控、执、辅四大件。'
  },
  {
    id: '5-s-2',
    chapter: '5',
    type: QuestionType.Short,
    content: '简述液压蓄压器的功用。',
    answer: '储存压力能，保证输出功率；减小压力波动；作为应急能源。',
    explanation: '储能、稳压、应急。'
  },
  {
    id: '5-s-3',
    chapter: '5',
    type: QuestionType.Short,
    content: '简述控制活门的基本类型和功用。',
    answer: '方向控制活门：控制液压油的流动方向；压力控制活门：控制液压油的传输压强；流量控制活门：控制液压油的流量大小。',
    explanation: '控制流体的三大要素：P, Q, Direction。'
  },
  {
    id: '5-j-1',
    chapter: '5',
    type: QuestionType.Judge,
    content: '反映液压系统能力的两个基本参数是压力大小和供油流量大小。',
    answer: 'Y',
    explanation: '功率 P = p * Q。'
  },
  {
    id: '5-j-2',
    chapter: '5',
    type: QuestionType.Judge,
    content: '液压油泵是一种把液压能转变为机械能的装置，飞机上常采用齿轮泵和柱塞泵两种。',
    answer: 'N',
    explanation: '泵是机械能转液压能。马达才是液压能转机械能。'
  },
  {
    id: '5-j-3',
    chapter: '5',
    type: QuestionType.Judge,
    content: '液压系统中油滤进出口压力差会因污染或结冰而增大，当这种压力差达到一定值时，油滤堵塞信号灯会发亮，这表示供压系统即将中断。',
    answer: 'N',
    explanation: '灯亮表示旁通阀即将打开或已打开，供油不会中断，只是油液不再被过滤。'
  },
  {
    id: '5-j-4',
    chapter: '5',
    type: QuestionType.Judge,
    content: '现代飞机出于安全原因，一般设置数个相对独立而几乎是平行工作的主供压系统，并且通常还有一个或多个备用（应急）供压系统。',
    answer: 'Y',
    explanation: '如波音的A/B/备用，空客的G/B/Y。'
  },
  {
    id: '5-j-5',
    chapter: '5',
    type: QuestionType.Judge,
    content: '液压系统如果内漏严重，那么油压油量会不断减少。',
    answer: 'N',
    explanation: '内漏是指高压油流回低压回油管，油量还在系统内，不会减少（外漏才会减少）。'
  },
  {
    id: '5-j-6',
    chapter: '5',
    type: QuestionType.Judge,
    content: '有的飞机液压系统压力表直接与蓄压器气体腔相连，当压力表指示为零时，则表示系统完全失压。',
    answer: 'N',
    explanation: '如果指示蓄压器气腔压力，指示为0表示预充气漏光了，或者仪表坏了；系统压力表通常在总管上。且即使系统卸压，蓄压器气压表应指示预充压力。题目表述有些模糊，但一般判断为错。'
  },
  {
    id: '5-j-7',
    chapter: '5',
    type: QuestionType.Judge,
    content: '小型飞机常采用单液压源系统，主要向起落架收放系统供压，有时还用于襟翼收放。',
    answer: 'Y',
    explanation: '通用航空小飞机结构简单，仅需液压驱动起落架。'
  },
  {
    id: '5-f-1',
    chapter: '5',
    type: QuestionType.Fill,
    content: '液压系统控制活门按其功用可分为_______、________和_______三类。',
    answer: '方向控制活门；压力控制活门；流量控制活门',
    explanation: '基础液压知识。'
  },
  {
    id: '5-f-2',
    chapter: '5',
    type: QuestionType.Fill,
    content: '飞机单液压源系统一般仅用于传动______，有的飞机也同时用于传动_______。',
    answer: '起落架收放；襟翼收放',
    explanation: '针对小型机。'
  },

  // ===================== 第六章 燃油系统 =====================
  {
    id: '6-c-1',
    chapter: '6',
    type: QuestionType.Single,
    content: '飞机燃油系统除了储存燃油并向发动机供油外，还应具备的功能有',
    options: opts('加油、放油', '油箱通气', '工作控制及信号显示', '以上都对'),
    answer: 'D',
    explanation: '完整的系统功能。'
  },
  {
    id: '6-c-2',
    chapter: '6',
    type: QuestionType.Single,
    content: '飞机燃油系统的基本功用是',
    options: opts('储存燃油并向发动机供油', '冷却滑油和液压油', '调整飞机重心位置及配平', '为机翼卸载'),
    answer: 'A',
    explanation: 'BCD是辅助功能或结构影响。'
  },
  {
    id: '6-c-3',
    chapter: '6',
    type: QuestionType.Single,
    content: '航空燃气涡轮发动机使用的燃油是',
    options: opts('航空汽油', '航空煤油', '液态氢', '航空柴油'),
    answer: 'B',
    explanation: 'JET A-1 / RP-3 均为航空煤油。'
  },
  {
    id: '6-c-4',
    chapter: '6',
    type: QuestionType.Single,
    content: '航空活塞式发动机使用的燃油是',
    options: opts('航空煤油', '酒精', '液化天然气', '航空汽油'),
    answer: 'D',
    explanation: '活塞机用高辛烷值汽油（AVGAS 100LL）。'
  },
  {
    id: '6-c-5',
    chapter: '6',
    type: QuestionType.Single,
    content: '单发选择供油的特点是',
    options: opts('燃油靠自身重力向发动机供油', '通过选择某一电动泵来向发动机供油', '通过燃油选择器控制左、右油箱向发动机供油', '飞行员可根据需要选择上述任何一种方式进行供油'),
    answer: 'C',
    explanation: '单发飞机通常有左右油箱，需要选择器来平衡燃油或切换油箱。'
  },
  {
    id: '6-c-6',
    chapter: '6',
    type: QuestionType.Single,
    content: '结构油箱突出的优点是',
    options: opts('抗漏性好', '维护方便，可整体更换', '最大限度地利用了机翼结构空间，使油箱重量最小而加油量最大', '以上都对'),
    answer: 'C',
    explanation: '结构油箱（整体油箱）直接利用机翼蒙皮和梁肋密封而成，空间利用率最高，重量最轻。'
  },
  {
    id: '6-c-7',
    chapter: '6',
    type: QuestionType.Single,
    content: '飞机燃油系统的型式主要取决于',
    options: opts('发动机相对于机体的位置', '发动机所用燃油的种类', '发动机的数量和种类', '发动机功率的大小'),
    answer: 'C',
    explanation: '单发、多发、活塞、涡轮决定了系统的复杂程度（如是否需要交输、增压泵数量等）。'
  },
  {
    id: '6-c-8',
    chapter: '6',
    type: QuestionType.Single,
    content: '飞机燃油箱通气的主要目的是',
    options: opts('消除加油或放油时油箱内外的压力差', '飞行中冷却油箱中的燃油', '使燃油溶解足够的空气', '保证给油箱增压泵一个正压力'),
    answer: 'A',
    explanation: '防止油箱因抽油产生负压被吸瘪，或因加油产生正压胀破。'
  },
  {
    id: '6-c-9',
    chapter: '6',
    type: QuestionType.Single,
    content: '发动机工作过程中如出现油滤堵塞信号（灯亮），则表明',
    options: opts('相应燃油滤因污染堵塞，供油已中断', '相应燃油滤因污染堵塞，油滤处于旁通状态', '相应燃油滤因污染堵塞，飞行员应立即选用备用管路供油', '相应燃油滤堵塞，实行发动机停车处置程序'),
    answer: 'B',
    explanation: '旁通阀打开，未过滤的燃油直接进入发动机，灯亮提醒维护。'
  },
  {
    id: '6-c-10',
    chapter: '6',
    type: QuestionType.Single,
    content: '搜油泵的功用是',
    options: opts('将辅助油箱残余燃油抽至主油箱', '将辅助油箱燃油转输至主油箱', '将辅助油箱残余燃油转输至放油管', '将辅助油箱残余燃油送到供油管'),
    answer: 'A',
    explanation: 'Scavenge pump，用于抽吸死油，减少不可用燃油量。'
  },
  {
    id: '6-c-11',
    chapter: '6',
    type: QuestionType.Single,
    content: '燃油滤是清除燃油中机械杂质、水份的清洁装置，为保证供油安全可靠，通常在油滤进出口之间设置有',
    options: opts('释压活门', '旁通活门', '计量活门', '选择活门'),
    answer: 'B',
    explanation: '旁通活门防止堵塞中断供油。'
  },
  {
    id: '6-c-12',
    chapter: '6',
    type: QuestionType.Single,
    content: '双发飞机处于正常供油状态，燃油关断活门',
    options: opts('处于关断位置', '处于接通位置', '由燃油压力打开', '由油压关闭'),
    answer: 'B',
    explanation: '正常飞行时防火切断阀（Spar Valve）必须打开。'
  },
  {
    id: '6-c-13',
    chapter: '6',
    type: QuestionType.Single,
    content: '双发飞机处于正常供油状态，其交输活门',
    options: opts('处于打开位', '处于关断位', '在油液压力下处于关断状态', '将因油液压力不同而处于不同工作状态'),
    answer: 'B',
    explanation: '正常情况各发用各油，交输阀关闭（隔离）。'
  },
  {
    id: '6-c-14',
    chapter: '6',
    type: QuestionType.Single,
    content: '双发飞机燃油系统中如果某一主油箱的所有增压泵都失效时，向相应发动机的供油将',
    options: opts('完全中断', '处于交输供油状态', '处于抽吸供油状态', '处于重力供油状态'),
    answer: 'C',
    explanation: '发动机自带的高压泵具有一定的抽吸能力（Suction Feed），但受高度限制。'
  },
  {
    id: '6-c-15',
    chapter: '6',
    type: QuestionType.Single,
    content: '双发飞行时，如果出现两边机翼油箱油量差超过规定值，这时应当',
    options: opts('暂时关闭燃油减少的油箱中的燃油增压泵', '先打开交输活门，再关闭油量少的油箱增压泵进行油量平衡，待油量平衡后，关闭交输活门，并接通已关闭的增压泵', '先打开交输活门，再关闭油量少的油箱增压泵进行油量平衡，待油量平衡后接通关闭的增压泵，并关闭交输活门', '将多油油箱中的燃油转输一部分到辅助油箱'),
    answer: 'C',
    explanation: '标准不平衡供油程序：开交输，关低油量侧泵（让高油量侧同时供给两台发），平衡后恢复。B和C描述类似，C更准确描述了恢复过程。'
  },
  {
    id: '6-c-16',
    chapter: '6',
    type: QuestionType.Single,
    content: '飞机采用压力加油的主要优点是',
    options: opts('可增大加油量污染小', '加油时间短，污染小', '可排除油箱内的有害气体', '以上都对'),
    answer: 'B',
    explanation: '单点压力加油速度快，且全封闭系统不易引入杂质。'
  },
  {
    id: '6-c-17',
    chapter: '6',
    type: QuestionType.Single,
    content: '国际民航组织对飞机必须设置空中放油系统的规定是',
    options: opts('最大起飞重量等于最大着陆重量', '最大起飞重量大于最大着陆重量 5％', '最大着陆重量大于最大起飞重量 105％', '最大着陆重量小于最大起飞重量 105％'),
    answer: 'B',
    explanation: '如果起飞重量远大于着陆重量（>105%），为了在起飞后立即迫降时不超重损坏结构，必须能放油。'
  },
  {
    id: '6-m-1',
    chapter: '6',
    type: QuestionType.Multi,
    content: '根据发动机配置情况，将飞机燃油系统分为',
    options: opts('单发选择供油系统', '双发独立与交输供油系统', '多发总汇流管供油', '重力与压力供油系统'),
    answer: ['A', 'B', 'C'],
    explanation: 'D是加油方式或供油动力方式，不是系统架构分类。'
  },
  {
    id: '6-m-2',
    chapter: '6',
    type: QuestionType.Multi,
    content: '双发飞机供油工作情况是',
    options: opts('起飞时独立供油与交输供油联合工作供油', '正常情况下左、右系统独立向两发动机供油', '单发飞行或两边油量不平衡时需进行交输供油', '以上都对'),
    answer: ['B', 'C'],
    explanation: '起飞时交输阀通常是关闭的，各供各，防止单侧故障影响另一侧。'
  },
  {
    id: '6-m-3',
    chapter: '6',
    type: QuestionType.Multi,
    content: '油箱按结构划分为',
    options: opts('硬壳式油箱', '软油箱', '整体油箱', '通气油箱'),
    answer: ['A', 'B', 'C'],
    explanation: '通气油箱是功能分类，不是结构构造分类。'
  },
  {
    id: '6-m-4',
    chapter: '6',
    type: QuestionType.Multi,
    content: '发动机工作过程中如出现燃油堵塞信号（灯亮），则表明',
    options: opts('油滤因污染而堵塞', '发动机会立即停车', '油滤的旁通活门已打开', '送往发动机的燃油不是很清洁'),
    answer: ['A', 'C', 'D'],
    explanation: '旁通阀打开后发动机不会立即停车，但燃油未过滤。'
  },
  {
    id: '6-m-5',
    chapter: '6',
    type: QuestionType.Multi,
    content: '双发飞机需进行交输供油的情况有',
    options: opts('一发失效时', '两边主油箱油量差超过规定时', '一边主油箱增压泵完全失效时', '需要进行油量转输时'),
    answer: ['A', 'B', 'D'],
    explanation: 'C选项：若一边泵失效，交输阀打开，由另一边泵供油，属于交输供油情况。但题库答案为ABD，可能是因为泵失效时，如果是抽吸供油则不算交输（视具体机型逻辑）。但通常A/B/D是标准答案。'
  },
  {
    id: '6-m-6',
    chapter: '6',
    type: QuestionType.Multi,
    content: '旅客机加油应特别注意',
    options: opts('燃油牌号', '油量单位', '防火安全', '加油方式'),
    answer: ['A', 'B', 'C'],
    explanation: '加错油、算错油量、着火都是致命错误。'
  },
  {
    id: '6-m-7',
    chapter: '6',
    type: QuestionType.Multi,
    content: '实施空中放油的注意事项有',
    options: opts('除了最紧急的情况外，应指挥飞机到指定的空域、规定高度上放油', '放油要特别注意避开居民区和工业区', '提醒飞行员留足规定的剩余油量', '放油时要防止污染飞机，防止着火'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '环保、安全、续航。'
  },
  {
    id: '6-m-8',
    chapter: '6',
    type: QuestionType.Multi,
    content: '油箱通气的目的有',
    options: opts('防止油箱内产生过大的正压和负压', '飞行中给油箱提供冲压空气压力，保证顺利向发动机供油', '排出油箱内燃油蒸汽，防止形成爆炸条件', '使燃油中富含空气，保证燃油良好的燃烧性'),
    answer: ['A', 'B', 'C'],
    explanation: '燃油中富含空气是不利的（氧化/气阻）。'
  },
  {
    id: '6-s-1',
    chapter: '6',
    type: QuestionType.Short,
    content: '简述飞机燃油系统的型式。',
    answer: '单发选择供油系统、双发独立与交输供油系统、多发总汇流管供油系统。',
    explanation: '根据发动机数量决定的系统拓扑结构。'
  },
  {
    id: '6-s-2',
    chapter: '6',
    type: QuestionType.Short,
    content: '简述运输机空中放油的注意事项。',
    answer: '到规定空域和规定高度放油；放油时飞机处于净型状态；留够足够的剩油量。',
    explanation: '防止燃油落地污染地面，防止静电/火花，保证能飞回机场。'
  },
  {
    id: '6-f-1',
    chapter: '6',
    type: QuestionType.Fill,
    content: '飞机燃油系统的型式有______、______和______三种。',
    answer: '单发选择供油系统；双发独立与交输供油系统；多发总汇流管供油系统',
    explanation: '同简答题。'
  },
  {
    id: '6-f-2',
    chapter: '6',
    type: QuestionType.Fill,
    content: '飞机地面加油方式包括______和_______两种。',
    answer: '重力加油；压力加油',
    explanation: '翼上加油口（慢）和单点加油口（快）。'
  },
  {
    id: '6-f-3',
    chapter: '6',
    type: QuestionType.Fill,
    content: '飞机空中放油方式包括______和_______两种。',
    answer: '重力放油；动力放油',
    explanation: '靠重力流出或靠泵泵出。'
  },
  {
    id: '6-j-1',
    chapter: '6',
    type: QuestionType.Judge,
    content: '双发飞机所有油箱增压泵失效时，发动机将失去推力。',
    answer: 'N',
    explanation: '发动机高压泵有抽吸能力，低空可维持运转。'
  },
  {
    id: '6-j-2',
    chapter: '6',
    type: QuestionType.Judge,
    content: '整体油箱包括硬壳式油箱和软油箱两种。',
    answer: 'N',
    explanation: '整体油箱是利用机翼结构密封而成，硬壳/软油箱是独立容器。'
  },
  {
    id: '6-j-3',
    chapter: '6',
    type: QuestionType.Judge,
    content: '多发飞机采用总汇流管供油系统，各发动机所需燃油必须经过总汇流管送往发动机燃油系统。',
    answer: 'N',
    explanation: '通常有独立供油路，汇流管用于交输，不必“必须”经过。题目表述过于绝对。'
  },
  {
    id: '6-j-4',
    chapter: '6',
    type: QuestionType.Judge,
    content: '飞机燃油系统的使用主要包括向发动机供油，给飞机加油，应急空中放油，以及给燃油通气、防冰和除冰。',
    answer: 'Y',
    explanation: '系统功能的完整描述。'
  },
  {
    id: '6-j-5',
    chapter: '6',
    type: QuestionType.Judge,
    content: '采用重力加油，在加油前飞机必须搭铁并接地，以防止静电跳火引起火灾。加油结束时，切记盖好并拧紧加油口盖。',
    answer: 'Y',
    explanation: '标准加油安全程序。'
  },

  // ===================== 第七章 飞机防冰排雨系统 =====================
  {
    id: '7-c-1',
    chapter: '7',
    type: QuestionType.Single,
    content: '翼面气动除冰通常用于',
    options: opts('高亚音速飞机', '大、中型飞机', '小型低速飞机', '涡扇式飞机'),
    answer: 'C',
    explanation: '气动除冰靴（De-icing boots）会破坏翼型，影响高速性能，且寿命短，多用于小型螺旋桨飞机。'
  },
  {
    id: '7-c-2',
    chapter: '7',
    type: QuestionType.Single,
    content: '采用翼面气动除冰的飞机，在不除冰时',
    options: opts('除冰带保持膨胀状态', '除冰带充以一定压力而防冰', '除冰带被抽成相当真空度而紧贴翼面', '视飞行速度高低而定'),
    answer: 'C',
    explanation: '抽真空使其紧贴前缘，减小对气动外形的影响。'
  },
  {
    id: '7-c-3',
    chapter: '7',
    type: QuestionType.Single,
    content: '现代运输机机翼防冰常采用',
    options: opts('气动除冰', '气热防冰', '电热防冰', '超声波除冰'),
    answer: 'B',
    explanation: '利用发动机引气进行热防冰是最高效可靠的方法。'
  },
  {
    id: '7-c-4',
    chapter: '7',
    type: QuestionType.Single,
    content: '飞机气热防冰可能的热空气来源是',
    options: opts('发动机压气机引气、燃烧加温器、废气加温器', '发动机引出的空气、真空泵、压缩空气箱', '燃烧加温器、废气加温器、废气', '涡轮压气机、空气储气瓶、APU 引气'),
    answer: 'A',
    explanation: '主要来源是压气机引气，但在活塞式或老式飞机上也可能用燃烧加热器或热交换器。'
  },
  {
    id: '7-c-5',
    chapter: '7',
    type: QuestionType.Single,
    content: '现代运输机采用气热防冰法，其热空气通常来自',
    options: opts('发动机压气机', '电热加温器', '发动机废气加温器', '已调空气总管'),
    answer: 'A',
    explanation: '涡扇发动机压气机引气量大、温度高，非常适合防冰。'
  },
  {
    id: '7-c-6',
    chapter: '7',
    type: QuestionType.Single,
    content: '飞机气热法防冰的部位通常有',
    options: opts('机翼、尾翼前缘；发动机前缘整流罩；进气导向叶片；飞机操纵面', '螺旋桨桨帽；机翼、尾翼前缘；风档玻璃', '发动机前缘整流罩及螺旋桨叶；机翼前缘', '机翼上下表面；发动机整流罩包皮；滑油及空气散热器整流包皮'),
    answer: 'A',
    explanation: '主要针对大面积结冰区域和发动机进气口。'
  },
  {
    id: '7-c-7',
    chapter: '7',
    type: QuestionType.Single,
    content: '在风档电加温防冰系统中，用来保持风档正常温度控制的部件是',
    options: opts('过热电门', '自耦变压器', '温度传感仪', '温度控制器'),
    answer: 'D',
    explanation: '温度控制器接收传感器信号，调节加热电源，保持恒温。'
  },
  {
    id: '7-c-8',
    chapter: '7',
    type: QuestionType.Single,
    content: '空速管的防冰方式为',
    options: opts('气热防冰', '电热防冰', '超声波除冰', '气动除冰'),
    answer: 'B',
    explanation: '空速管细长且位置特殊，只能用内置电阻丝电加热。'
  },
  {
    id: '7-c-9',
    chapter: '7',
    type: QuestionType.Single,
    content: '现代飞机风档防冰通常采用的方法是',
    options: opts('空调空气防冰', '气热防冰', '电加温防冰', '气动除冰'),
    answer: 'C',
    explanation: '电加温不仅防冰，还能提高玻璃韧性抗鸟击。'
  },
  {
    id: '7-c-10',
    chapter: '7',
    type: QuestionType.Single,
    content: '飞机风档电热防冰加温元件的安装位置是',
    options: opts('风档玻璃外表面', '风档玻璃内表面', '风档玻璃夹层中', '风档玻璃边框里'),
    answer: 'C',
    explanation: '导电膜或电阻丝夹在玻璃层中间，保护元件并均匀加热。'
  },
  {
    id: '7-c-11',
    chapter: '7',
    type: QuestionType.Single,
    content: '液体防冰原理是将防冰液',
    options: opts('与过冷水混和使混和液冰点高于防冰表面温度防止结冰', '与过冷水混和使混和液冰点等于防冰表面温度防止结冰', '与过冷水混和使混和液冰点低于防冰表面温度防止结冰', '喷洒在玻璃表面形成保护膜防止结冰'),
    answer: 'B',
    explanation: '实际上是降低冰点。题库答案给B（等于？），理论上应是降低冰点至环境温度以下（C）。但根据OCR，正确答案标记为B。注：标准原理是降低冰点，这里尊重题库原始答案B，但在解释中说明通常是降低冰点。'
  },
  {
    id: '7-c-12',
    chapter: '7',
    type: QuestionType.Single,
    content: '由飞行员直接以判断是否结冰的简单、可靠的结冰信号装置是',
    options: opts('压差式结冰信号器', '导电式结冰信号器', '旋转圆筒式结冰信号器', '直观式结冰探棒'),
    answer: 'D',
    explanation: '飞行员直接目视观察探棒上的结冰情况。'
  },
  {
    id: '7-c-13',
    chapter: '7',
    type: QuestionType.Single,
    content: '采用除冰带除冰的飞机在飞行中',
    options: opts('允许有一定量的结冰然后除冰', '为防止飞机结冰，除冰带一直处于充气膨胀状态', '应使除冰带一直处于收缩状态除冰', '用电加温方法使除冰带发热除冰'),
    answer: 'A',
    explanation: '气动除冰是“除冰”系统，需要冰积累到一定厚度（如0.5英寸）再充气崩裂，否则冰会形成“冰桥”。'
  },
  {
    id: '7-m-1',
    chapter: '7',
    type: QuestionType.Multi,
    content: '飞机的常用防/除冰方式有',
    options: opts('气动除冰', '液体防冰', '气热防冰', '电热防冰'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '四大主流方式。'
  },
  {
    id: '7-m-2',
    chapter: '7',
    type: QuestionType.Multi,
    content: '现代运输机主要防冰部位包括',
    options: opts('发动机前缘和风档', '发动机进气口', '各种探头', '汽化器'),
    answer: ['A', 'B', 'C'],
    explanation: '现代喷气机无汽化器。'
  },
  {
    id: '7-m-3',
    chapter: '7',
    type: QuestionType.Multi,
    content: '风档电热加温的目的是',
    options: opts('风档防冰与除雾', '提高风档抗鸟类撞击的强度', '提高风档排雨能力', '提高表面光洁度'),
    answer: ['A', 'B'],
    explanation: '加温使乙烯树脂中间层变软，增加弹性，提高抗冲击能力。'
  },
  {
    id: '7-m-4',
    chapter: '7',
    type: QuestionType.Multi,
    content: '风档排雨方法有',
    options: opts('刮水器刷除', '气动排雨', '风档排雨剂', '电热加温'),
    answer: ['A', 'B', 'C'],
    explanation: '电热加温主要防冰，排雨能力有限（虽然涂疏水层后有辅助作用），但主要排雨手段是ABC。'
  },
  {
    id: '7-m-5',
    chapter: '7',
    type: QuestionType.Multi,
    content: '关于风档排雨剂的表述，正确的有',
    options: opts('排雨剂喷洒在风档玻璃上会在玻璃表面形成均匀透明薄膜', '一般在飞行速度大且雨也大时使用排雨剂', '排雨剂不能在干燥风档上使用', '需使用排雨剂时，应人工接通驾驶舱内控制电门或按钮'),
    answer: ['B', 'C', 'D'],
    explanation: '排雨剂在小雨或干玻璃上使用会弄脏玻璃影响视线。'
  },
  {
    id: '7-s-1',
    chapter: '7',
    type: QuestionType.Short,
    content: '简述飞机结冰部位与防冰方式。',
    answer: '机翼、尾翼前缘一般采用气热防除冰方式；风挡、空速管、失速判别传感器等部位一般采用电热防除冰方式；某些通用机机翼、尾翼采用气动法除冰，风挡、螺旋桨采用液体防除冰方式。',
    explanation: '大面积用引气，关键小部件用电热。'
  },
  {
    id: '7-j-1',
    chapter: '7',
    type: QuestionType.Judge,
    content: '用于风档排雨的刮水器雨大、速度大工作时其排雨效果较差。',
    answer: 'Y',
    explanation: '高速气流会吹起刮水片使其离面。'
  },
  {
    id: '7-j-2',
    chapter: '7',
    type: QuestionType.Judge,
    content: '气动排雨利用发动机压气机引出的高压气体吹过风档表面，形成气层屏障而阻止雨滴打击。',
    answer: 'Y',
    explanation: '像气刀一样吹走雨水。'
  },
  {
    id: '7-j-3',
    chapter: '7',
    type: QuestionType.Judge,
    content: '导电式结冰信号器由受感器与随动器两部分组成。受感器里有内、外金属导电套筒，在无结冰环境时，内外套筒之间彼此绝缘不导通，当受感器结冰时，由于金属的热胀冷缩性使内外套筒导通，提供结冰信号。',
    answer: 'N',
    explanation: '原理错。通常是冰作为导体（电阻变化）或冰堵塞探头导致压力变化，而不是金属热胀冷缩导通。且导电式通常利用冰的电阻/电容特性。题库判定为错。'
  },
  {
    id: '7-j-4',
    chapter: '7',
    type: QuestionType.Judge,
    content: '各型结冰信号器的受感装置内都有加热电阻，加热电阻加热使受感装置上的结冰融化，以保持再次结冰时提供结冰信号。',
    answer: 'Y',
    explanation: '必须融化旧冰才能检测新冰。'
  },
  {
    id: '7-f-1',
    chapter: '7',
    type: QuestionType.Fill,
    content: '飞机防冰系统按防冰能量分为_____除冰、_______防冰、______防冰和_____防冰四种方法。',
    answer: '气动；气热；电热；液体',
    explanation: '能量形式分类。'
  },
  {
    id: '7-f-2',
    chapter: '7',
    type: QuestionType.Fill,
    content: '风挡排雨方式包括_____、______和______几种。',
    answer: '雨刷排雨；气动排雨；化学排雨剂排雨',
    explanation: '三种主要物理/化学排雨手段。'
  },

  // ===================== 第八章 飞机氧气系统与灭火系统 =====================
  {
    id: '8-c-1',
    chapter: '8',
    type: QuestionType.Single,
    content: '现代客机失压时旅客用氧的氧气源通常是',
    options: opts('高压氧气瓶', '化学氧气发生器', '手提式氧气瓶', '连续性氧气系统'),
    answer: 'B',
    explanation: '化学氧气发生器体积小、重量轻、免维护、产氧快，适合大量旅客应急使用。'
  },
  {
    id: '8-c-2',
    chapter: '8',
    type: QuestionType.Single,
    content: '飞机乘员应急医疗用氧采用',
    options: opts('手提式氧气瓶', '化学氧气发生器', '连续性氧气系统', '低压氧气瓶'),
    answer: 'A',
    explanation: '乘务员移动使用或急救使用手提氧气瓶。'
  },
  {
    id: '8-c-3',
    chapter: '8',
    type: QuestionType.Single,
    content: '连续供氧系统适用于飞行高度在____的飞机。',
    answer: 'A',
    options: opts('25000 英尺以下', '25000 英尺以上', '35000 英尺以上', '所有飞机都可以'),
    explanation: '连续供氧效率低，高空需要稀释供氧或加压供氧。25000英尺以下对氧分压要求相对较低。'
  },
  {
    id: '8-c-4',
    chapter: '8',
    type: QuestionType.Single,
    content: '机组使用的氧气瓶正常压力大约为',
    options: opts('3,000PSI', '1,800PSI', '400PSI', '4,000PSI'),
    answer: 'B',
    explanation: '标准机载氧气瓶满瓶压力通常为1850 PSI (约1800 PSI)。'
  },
  {
    id: '8-c-5',
    chapter: '8',
    type: QuestionType.Single,
    content: '飞行前检查氧气系统时氧气瓶释压膜片显示为红色，这表明',
    options: opts('氧气瓶压力正常，可以起飞', '氧气瓶已释压，飞机不能放飞', '氧气瓶压力偏高，但可以起飞', '氧气瓶压力偏低，但可以起飞'),
    answer: 'B',
    explanation: '红色指示片（绿片被吹飞或破裂显示红色）意味着氧气瓶超压排放过，瓶内可能已空。'
  },
  {
    id: '8-c-6',
    chapter: '8',
    type: QuestionType.Single,
    content: '机组氧气瓶供氧时间一般为',
    options: opts('60 分钟以上', '大约 40 分钟', '大约 10 分钟', '不超过 30 分钟'),
    answer: 'A',
    explanation: '需保证在紧急下降和改航过程中全程供氧，通常要求较长。'
  },
  {
    id: '8-c-7',
    chapter: '8',
    type: QuestionType.Single,
    content: '供飞机乘客使用的氧气发生器的供氧时间大约为',
    options: opts('30 分钟', '60 分钟', '40 分钟', '10 分钟'),
    answer: 'D',
    explanation: '化学氧气发生器通常持续15-22分钟，足够飞机从巡航高度下降到安全高度（10000英尺）。'
  },
  {
    id: '8-c-8',
    chapter: '8',
    type: QuestionType.Single,
    content: '机组氧气瓶的安全装置是',
    options: opts('通过压力表以监视压力是否过大', '设有安全塞，当氧气压力过高时自动打开释压', '绿色检查膜片，若被吹掉，说明已释压', '设有减压器，压力过高时会被减压'),
    answer: 'B',
    explanation: '易熔塞或爆破片，过热或过压时释放氧气到机外。'
  },
  {
    id: '8-c-9',
    chapter: '8',
    type: QuestionType.Single,
    content: '旅客化学氧气发生器点火供氧的必须条件是',
    options: opts('氧气面罩从服务组件舱掉出', '旅客氧气电门置接通位', '氧气面罩掉出，并将全部面罩拉下', '氧气面罩掉出，并且有一个面罩被拉下'),
    answer: 'D',
    explanation: '拉下面罩拔出释放销（Firing Pin），撞针撞击起爆药，启动化学反应。'
  },
  {
    id: '8-c-10',
    chapter: '8',
    type: QuestionType.Single,
    content: '对木材、布质、纸类与装饰材料失火时，最适用的灭火剂是',
    options: opts('水类灭火剂', '干粉灭火剂', '四氯化碳灭火剂', '甲基溴化物'),
    answer: 'A',
    explanation: 'A类火灾（固体有机物）用水冷却灭火效果好。'
  },
  {
    id: '8-c-11',
    chapter: '8',
    type: QuestionType.Single,
    content: '对油脂、油漆类液体着火最适宜的灭火剂是',
    options: opts('二氧化碳或卤代烃化学品灭火剂', '水类灭火剂', '干化学制品灭火剂', '四氯化碳灭火剂'),
    answer: 'A',
    explanation: 'B类火灾（液体）需窒息灭火，Halon或CO2有效。'
  },
  {
    id: '8-c-12',
    chapter: '8',
    type: QuestionType.Single,
    content: '电子设备舱失火，最适宜的灭火剂是',
    options: opts('水类灭火剂', '干粉灭火剂', '二氧化碳灭火剂或卤代烃化学品灭火剂', '四氯化碳灭火剂'),
    answer: 'C',
    explanation: 'C类火灾（电气），需要不导电且无残留的灭火剂，以免损坏精密电子设备。'
  },
  {
    id: '8-c-13',
    chapter: '8',
    type: QuestionType.Single,
    content: '禁止用于 D 类火情的灭火剂是',
    options: opts('二氧化碳', '卤代烃类', '水类', '干粉类'),
    answer: 'C',
    explanation: 'D类为金属火灾（镁、钛等），遇水会发生剧烈化学反应甚至爆炸。'
  },
  {
    id: '8-c-14',
    chapter: '8',
    type: QuestionType.Single,
    content: 'CO2 灭火瓶的正常的气体贮存压力为',
    options: opts('700～1000PSI', '1800PSI', '3000PSI', '2200～2800PSI'),
    answer: 'A',
    explanation: 'CO2在常温下液化存储，饱和蒸气压约为800 PSI左右。'
  },
  {
    id: '8-c-15',
    chapter: '8',
    type: QuestionType.Single,
    content: '表示 CO2 灭火瓶过热释放的指示器指示为',
    options: opts('红色膜片破裂', '黄色膜片破裂', '绿色膜片破裂', '绿色膜片可见'),
    answer: 'A',
    explanation: '红色圆盘缺失表示过热释放（排到机外）。'
  },
  {
    id: '8-c-16',
    chapter: '8',
    type: QuestionType.Single,
    content: '表示 CO2 灭火瓶已正常排放的指示器指示为',
    options: opts('红色膜片破裂', '黄色膜片破裂', '绿色膜片破裂', '绿色膜片可见'),
    answer: 'B',
    explanation: '黄色圆盘缺失表示正常释放（排到灭火管路）。'
  },
  {
    id: '8-c-17',
    chapter: '8',
    type: QuestionType.Single,
    content: '飞机灭火系统的火警信号为',
    options: opts('火警铃响', '火警灯亮', '语音告警', '火警灯亮，同时火警铃响'),
    answer: 'D',
    explanation: '声光双重报警确保引起注意。'
  },
  {
    id: '8-c-18',
    chapter: '8',
    type: QuestionType.Single,
    content: '过热探测器又称热敏开关或温感器，其工作原理是',
    options: opts('感受防火区温度达到告警值时，突然降低电阻值提供电信号报警', '感受防火区温度上升率过大而报警', '感受防火区温度达到告警值使其变形量达到一定值而接通火警信号报警', '感受防火区是否有着火征兆的烟雾存在而报警'),
    answer: 'C',
    explanation: '双金属片受热变形闭合触点。'
  },
  {
    id: '8-j-1',
    chapter: '8',
    type: QuestionType.Judge,
    content: '机组氧气面罩的供氧可按需要进行调节和选择为断续稀释氧气或者是 100％的纯氧气。',
    answer: 'Y',
    explanation: 'Normal（混气）/ 100% / Emergency（加压）三档可调。'
  },
  {
    id: '8-j-2',
    chapter: '8',
    type: QuestionType.Judge,
    content: '当化学氧气发生器启动供氧时，其表面温度可达到相当高的温度，切莫触摸或搬动，以免烫伤。',
    answer: 'Y',
    explanation: '化学反应放热剧烈，表面温度可达200度以上。'
  },
  {
    id: '8-j-3',
    chapter: '8',
    type: QuestionType.Judge,
    content: '驾驶舱内释放 CO2 灭火瓶后，CO2 气体浓度可能会过高而对人体产生危害。灭火过程中及灭火后一定时间内应注意通风并使用 100％纯氧。',
    answer: 'Y',
    explanation: '防止CO2中毒窒息。'
  },
  {
    id: '8-j-4',
    chapter: '8',
    type: QuestionType.Judge,
    content: '广泛用于飞机、发动机高释放率卤代烃化合物灭火剂主要有溴氯二氟甲烷（卤代 1211）和溴三氟甲烷（卤代 1031）。',
    answer: 'Y',
    explanation: 'Halon 1211 和 1301 是航空常用灭火剂。'
  },
  {
    id: '8-f-1',
    chapter: '8',
    type: QuestionType.Fill,
    content: '现代飞机氧气系统按供氧特点分为_______、________和________几种型式。氧气源主要有_______和______两种，另外还有应急用的______式氧气瓶。',
    answer: '连续供氧系统；断续供氧系统；增压式供氧系统；氧气瓶；化学氧气发生器；手提',
    explanation: '供氧方式与氧气来源的分类。'
  },
  {
    id: '8-s-1',
    chapter: '8',
    type: QuestionType.Short,
    content: '简述飞机氧气系统的使用注意事项。',
    answer: '采取适当防火措施，防止用氧管路、氧气瓶过热；禁止吸烟，无明火（应注意用氧后衣服和须发内仍可能留有氧气）；搬动氧气瓶应小心，开关氧气活门应柔和，用氧过后应立即关闭；用氧时避免检查电气及无线电系统；氧气瓶内压力下降到一定值时应充氧，以免加剧瓶内壁腐蚀；避免油、油脂和含油脂的化妆品与氧气接触；为机上氧气瓶充氧时，不得上下旅客与装卸货物，不得拆卸电器与接通电源，不得加油与放油，飞机 15 米范围内不得有机动车运动，机组与机务人员应彼此协调；氧气发生器供氧时表面温度可达 120℃，切勿触摸或搬动；飞前查看释放口膜片，飞行中发现氧气泄漏应关断氧气开关。',
    explanation: '核心是防油、防火、防震动、防污染。'
  },
  {
    id: '8-s-2',
    chapter: '8',
    type: QuestionType.Short,
    content: '简述飞机火情的类型。',
    answer: 'A 类：纸张、木材、纤维、橡胶、某些塑料等的着火；B 类：气体或液体着火，如汽油、煤油、油漆、油脂、丙烷等；C 类：电器设备短路、漏电、超温、跳火等引发的火灾；D 类：金属（如钠、镁、铝等）着火。',
    explanation: 'A固体，B液体气体，C电气，D金属。'
  },
  {
    id: '8-m-1',
    chapter: '8',
    type: QuestionType.Multi,
    content: '旅客机氧气源通常是',
    options: opts('机组氧气瓶', '手提式氧气瓶', '化学氧气发生器', '氧气袋'),
    answer: ['B', 'C'],
    explanation: '旅客主要用化学氧气发生器（固定）和手提瓶（急救）。机组瓶是独立的。题库答案包含B和C。部分题库可能选BC，有的选ABC，依题库标准选BC最稳妥（手提瓶用于旅客急救）。'
  },
  {
    id: '8-m-2',
    chapter: '8',
    type: QuestionType.Multi,
    content: '何时应启用飞机氧气设备',
    options: opts('驾驶舱失压或有烟雾时', '客舱失压时', '座舱灭火后或乘员生病急救时', '飞机升降率过大时'),
    answer: ['A', 'B', 'C'],
    explanation: '失压缺氧、烟雾排烟、医疗急救是三大使用场景。'
  },
  {
    id: '8-m-3',
    chapter: '8',
    type: QuestionType.Multi,
    content: '对旅客机氧气面罩的描述，正确的有',
    options: opts('面罩为柔性杯形，它还连有一个 1 升储氧袋', '使用时将面罩盖住口、鼻，同时拉动供氧启动绳即可得到供氧', '旅客面罩的数目和座位数相同', '旅客面罩位于头顶上方的旅客服务组件内，需供氧时只能人工启动方会落下'),
    answer: ['A', 'B'],
    explanation: 'C错，面罩数通常多于座位数（抱小孩）；D错，可自动落下（气压电门控制）。'
  },
  {
    id: '8-m-4',
    chapter: '8',
    type: QuestionType.Multi,
    content: '属于氧气系统使用注意事项的有',
    options: opts('不准吸烟，不准有明火', '保持氧气设备清洁，不得粘上尘土、金属、水汽等杂质', '以油脂为基本原料的面霜、唇膏或其他化妆品和 100％纯氧接触可引起严重烧伤', '为机上氧气瓶充氧时，不得上下旅客与装卸货物，不得放油和加油，飞机 15 米半径内不得有机动车运行'),
    answer: ['A', 'B', 'C', 'D'],
    explanation: '氧气助燃极其剧烈，严禁油污和火源。'
  },
  {
    id: '8-m-5',
    chapter: '8',
    type: QuestionType.Multi,
    content: '实现灭火的基本途径是',
    options: opts('尽快散失热量，将温度降到燃点以下', '阻止热量传递，防止火蔓延', '隔绝空气断氧', '移开可燃物品'),
    answer: ['A', 'B', 'C'],
    explanation: '冷却、隔离、窒息。移开可燃物在飞机上很难实现（燃油/结构），不是主要途径。'
  },
  {
    id: '8-m-6',
    chapter: '8',
    type: QuestionType.Multi,
    content: '飞机、发动机灭火系统的基本组成包括',
    options: opts('火警探测器', '灭火装置', '火情种类显示', '灭火剂量控制与显示'),
    answer: ['A', 'B'],
    explanation: '探测和灭火是核心。种类和剂量通常不是系统自动显示的（剂量是预设的）。'
  },
  {
    id: '8-m-7',
    chapter: '8',
    type: QuestionType.Multi,
    content: '对光电烟雾探测器的工作描述，正确的有',
    options: opts('飞行中探测器接通时，工作灯一直亮', '当无烟雾时，工作灯光线射不到光电管', '当有失火烟雾时，进入探测器的烟雾使工作灯光线折射到光电管，光电管导通输出报警信号', '测试时，可模拟火情，输入烟雾，探测器有信号输出则为正常'),
    answer: ['B', 'C'],
    explanation: '光电探测利用丁达尔效应（散射/折射）。'
  },

  // ===================== 第九章 气源系统和座舱环境控制系统 =====================
  {
    id: '9-c-1',
    chapter: '9',
    type: QuestionType.Single,
    content: '当人体长期处于 10,000 英尺高度上时，由于缺氧引起的最明显的症状是',
    options: opts('脉搏和呼吸加快', '头痛和疲倦', '视力和判断力下降', '嘴唇和指甲变兰'),
    answer: 'B',
    explanation: '缺氧初期症状包括头痛、疲劳、迟钝等。'
  },
  {
    id: '9-c-2',
    chapter: '9',
    type: QuestionType.Single,
    content: '旅客机的舒适座舱高度界限值是',
    options: opts('1,500 米', '2,400 米', '3,000 米', '4,500 米'),
    answer: 'B',
    explanation: '2400米（约8000英尺）是通常的舒适座舱高度界限。'
  },
  {
    id: '9-c-3',
    chapter: '9',
    type: QuestionType.Single,
    content: '旅客机的安全座舱高度界限值是',
    options: opts('1,500 米', '2,400 米', '3,000 米', '4,500 米'),
    answer: 'C',
    explanation: '3000米（约10000英尺）是安全界限，超过此高度需要吸氧。'
  },
  {
    id: '9-c-4',
    chapter: '9',
    type: QuestionType.Single,
    content: '旅客机的最大座舱高度不超过',
    options: opts('2,400 米', '3,000 米', '4,500 米', '6,000 米'),
    answer: 'C',
    explanation: '通常指在极端情况下的允许极限，或特定机型的设计极限。'
  },
  {
    id: '9-c-5',
    chapter: '9',
    type: QuestionType.Single,
    content: '现代飞机普遍采用增压气密座舱，其座舱高度是指',
    options: opts('飞机飞行高度', '座舱所对应的海拔高度', '座舱内空气绝对压力所对应的海拔高度', '反映座舱内外空气压力差的高度'),
    answer: 'C',
    explanation: '座舱高度是一个气压概念，指座舱内气压对应的标准大气高度。'
  },
  {
    id: '9-c-6',
    chapter: '9',
    type: QuestionType.Single,
    content: '人体对座舱高度变化的敏感反应是',
    options: opts('头痛、恶心', '视力模糊、运动迟缓', '胀耳或压耳感', '胃胀气，关节疼痛'),
    answer: 'C',
    explanation: '气压快速变化会导致耳膜内外压差，产生胀痛感（压耳）。'
  },
  {
    id: '9-c-7',
    chapter: '9',
    type: QuestionType.Single,
    content: '现代民用客机采用的气密座舱型式为',
    options: opts('再生式气密座舱', '通风式气密座舱', '全密封式气密座舱', '自由通风式座舱'),
    answer: 'B',
    explanation: '不断引入新鲜空气并排出陈旧空气，保持气压和空气质量。'
  },
  {
    id: '9-c-8',
    chapter: '9',
    type: QuestionType.Single,
    content: '飞机气源系统的可能供气源有',
    options: opts('发动机引起', 'APU 引气', '地面气源车', '以上都对'),
    answer: 'D',
    explanation: '飞行中主用发动机，地面用APU或气源车。'
  },
  {
    id: '9-c-9',
    chapter: '9',
    type: QuestionType.Single,
    content: '现代大中型运输机在飞行中气源系统的压缩空气来自',
    options: opts('专用压气机供气', '发动机压气机引气或（和）APU 引气', '地面气源车供气', '冲压空气供气'),
    answer: 'B',
    explanation: '涡扇发动机压气机引气是最主要的来源。'
  },
  {
    id: '9-c-10',
    chapter: '9',
    type: QuestionType.Single,
    content: '为了兼顾飞机乘员的生理要求和减轻飞机自重这两方面，喷气式飞机的最大余压规定值为',
    options: opts('7～9PSI', '5～7PSI', '7～9N/cm2', '5～7N/cm2'),
    answer: 'A',
    explanation: '通常最大压差控制在8-9 PSI左右。'
  },
  {
    id: '9-c-11',
    chapter: '9',
    type: QuestionType.Single,
    content: '为了兼顾乘员的舒适性,对旅客机座舱高度变化率的要求是',
    options: opts('上升率≯500 英尺/分,下降率≯350 英尺/分', '上升率≯350 英尺/分,下降率≯500 英尺/分', '升降率≯500 英尺/分', '350 英尺/分≤升降率≤500 英尺/分'),
    answer: 'A',
    explanation: '下降时气压增加，耳朵更难平衡压力，所以下降率限制更严。'
  },
  {
    id: '9-c-13',
    chapter: '9',
    type: QuestionType.Single,
    content: '对座舱余压的表述,正确的是',
    options: opts('座舱余压指飞机气密座舱内空气压力相对海平面的压力之差值', '座舱余压指飞机气密座舱内外压力之差值', '座舱余压指飞机气密座舱内外空气压力相对地面大气压的压力的差值', '座舱余压指未排出座舱外剩余空气的空气压力'),
    answer: 'B',
    explanation: '余压（Differential Pressure）即座舱内压与外压之差。'
  },
  {
    id: '9-c-14',
    chapter: '9',
    type: QuestionType.Single,
    content: '飞机气密座舱温度调节的基本方法是',
    options: opts('控制气源系统的引气温度不超过规定值', '对气源系统的高温引气进行冷却处理', '保持对座舱供气量基本恒定,调节供给座舱的空气温度', '控制进入座舱的热空气流量适当'),
    answer: 'C',
    explanation: '通常保持流量满足通风要求，通过调节供气温度来控制舱温。'
  },
  {
    id: '9-c-15',
    chapter: '9',
    type: QuestionType.Single,
    content: '对设置气密座舱的飞机,其座舱压力是指',
    options: opts('飞机所处海拔高度上的大气压力', '飞机气密座舱内空气的绝对压力', '飞机气密座舱内外气压差对座舱壁产生的压力', '飞机气密座舱内人员、货物对座舱产生的接触压力'),
    answer: 'B',
    explanation: '座舱压力即座舱高度对应的绝对压力。'
  },
  {
    id: '9-c-16',
    chapter: '9',
    type: QuestionType.Single,
    content: '现代民用客机空调组件中对引气制冷使用最广泛的系统是',
    options: opts('蒸发式制冷系统', '冲压空气制冷系统', '空气循环制冷系统', '组合式制冷系统'),
    answer: 'C',
    explanation: '空气循环机（ACM）系统是主流。'
  },
  {
    id: '9-c-17',
    chapter: '9',
    type: QuestionType.Single,
    content: '非气密座舱飞机降低舱温的方法是采用',
    options: opts('利用冲压冷空气使座舱通风降温', '制冷装置提供冷气', '控制供向座舱的空气温度', '简单空气循环冷却系统'),
    answer: 'A',
    explanation: '低空非增压飞机直接引入外部空气通风。'
  },
  {
    id: '9-c-18',
    chapter: '9',
    type: QuestionType.Single,
    content: '升压式空气循环制冷系统基本附件应包括',
    options: opts('冲压空气源、热交换器、涡轮', '热交换器、压气机、涡轮', '热交换器、涡轮、风扇', '预冷器、热交换器、涡轮、水分离器'),
    answer: 'D',
    explanation: '完整的ACM系统组件。'
  },
  {
    id: '9-c-19',
    chapter: '9',
    type: QuestionType.Single,
    content: '升压式循环制冷的冷路空气是指',
    options: opts('对热交换器进行冷却的冲压空气', '从热交换器冷却后流向压气机的空气', '从涡轮流向混和室的空气', '从预冷器流经热交换器、压气机、涡轮进入混和室的空气'),
    answer: 'D',
    explanation: '指被处理（冷却）的引气流路。'
  },
  {
    id: '9-c-20',
    chapter: '9',
    type: QuestionType.Single,
    content: '涡轮在升压式制冷系统中的基本功用是',
    options: opts('带动压气机运转，为冷路空气增压', '使空气在涡轮内膨胀作功，消耗气体内能降温', '加速冷路空气流动', '降低冷路空气的压力'),
    answer: 'B',
    explanation: '涡轮膨胀做功是核心降温手段。'
  },
  {
    id: '9-c-21',
    chapter: '9',
    type: QuestionType.Single,
    content: '飞机空调系统中双温活门的功用是',
    options: opts('根据控制器指令控制供气流量大小，以满足舱温要求', '根据控制器指令控制引气流量大小，以满足舱温要求', '根据控制器指令控制冷、热路活门的开度，使冷、热路空气以适当比例进入混和室，保持舱温在所要求的范围内', '视机型不同可以是以上某一种功用'),
    answer: 'C',
    explanation: '调节冷热比例来控制最终温度。'
  },
  {
    id: '9-c-22',
    chapter: '9',
    type: QuestionType.Single,
    content: '在自动调温工作方式下，双温活门双向电机是按____指令来工作的',
    options: opts('座舱温度传感器发出的', '飞行员发出的', '座舱温度选择器发出的', '座舱温度控制器发出的'),
    answer: 'D',
    explanation: '控制器综合传感器和选择器的信号，计算后驱动电机。'
  },
  {
    id: '9-c-23',
    chapter: '9',
    type: QuestionType.Single,
    content: '增压气密座舱的压力制度是指气密座舱内空气绝对压力和余压',
    options: opts('随座舱高度变化的规律', '随飞行高度变化的规律', '随座舱增压状态变化的规律', '随排气活门开度变化的规律'),
    answer: 'A',
    explanation: '压力制度描述了座舱压力随飞行高度变化的控制规律。'
  },
  {
    id: '9-c-24',
    chapter: '9',
    type: QuestionType.Single,
    content: '现代大型客机普遍采用的压力制度是',
    options: opts('起飞和初始爬升为自由通风，爬升到一定高度时开始增压，直至余压达到一定值后保持余压不变。下降、进近、着陆相反', '预增压起飞，着陆滑跑保持一定余压，爬升与下降随高度按比例变化，巡航保持余压', '起飞保持舱压不变，直到余压达一定值时保持余压', '先自由通风，而后保持舱压不变'),
    answer: 'B',
    explanation: '现代客机为了舒适，起飞前会预增压，整个过程平滑控制。'
  },
  {
    id: '9-c-25',
    chapter: '9',
    type: QuestionType.Single,
    content: '正常飞行中，气密座舱增压系统排气活门是由_____控制其开度的',
    options: opts('座舱增压方式选择开关', '座舱压力控制器', '真空膜盒', '交、直流电动机'),
    answer: 'B',
    explanation: '控制器发出指令控制活门。'
  },
  {
    id: '9-c-26',
    chapter: '9',
    type: QuestionType.Single,
    content: '气动式座舱压力调节系统排气活门的开、关动力是',
    options: opts('座舱空气压力', '真空泵', '座舱压力与基准腔压力差', '弹簧弹性力'),
    answer: 'C',
    explanation: '气动系统利用压差驱动。'
  },
  {
    id: '9-c-27',
    chapter: '9',
    type: QuestionType.Single,
    content: '电子电动式座舱压力调节系统排气活门的开、关动力是',
    options: opts('电磁驱动力', '交流或直流电机驱动力', '舱内、外压力差', '液压泵驱动力'),
    answer: 'B',
    explanation: '电机驱动活门运动。'
  },
  {
    id: '9-c-28',
    chapter: '9',
    type: QuestionType.Single,
    content: '座舱压力调节系统中安全活门的功用是',
    options: opts('当供气管路气滤堵塞时起旁通作用，防止供气中断', '防止外界大气压力大于座舱压力', '防止座舱余压超过规定值', '防止座舱失压'),
    answer: 'C',
    explanation: '正释压活门，防止胀破。'
  },
  {
    id: '9-c-29',
    chapter: '9',
    type: QuestionType.Single,
    content: '座舱压力调节系统中负释压活门的功用是',
    options: opts('防止座舱内的空气压力出现负值', '防止座舱内空气压力大于供气管路压力', '防止座舱余压过大', '防止座舱内空气压力低于外界大气压力'),
    answer: 'D',
    explanation: '防止座舱被吸瘪（外压大于内压）。'
  },
  {
    id: '9-c-30',
    chapter: '9',
    type: QuestionType.Single,
    content: '基本座舱压力调节系统的组成有',
    options: opts('座舱压力调节器，负释压活门', '座舱压力调节器、排气活门', '排气活门、安全活门', '座舱压力调节器、安全活门、负释压活门'),
    answer: 'B',
    explanation: '最核心的控制组件是控制器和排气活门（Outflow Valve）。'
  },
  {
    id: '9-c-31',
    chapter: '9',
    type: QuestionType.Single,
    content: '飞行中飞行员报告座舱高度突然迅速上升而且无法控制在最大允许高度以下时，则应',
    options: opts('让飞行员立即起动 APU 增大引气供应', '指挥飞机就近机场着陆', '指挥飞机紧急下降高度到 4500 米高度层飞行', '紧急下降高度到安全高度飞行'),
    answer: 'D',
    explanation: '紧急下降是失压的标准处置程序。'
  },
  {
    id: '9-c-32',
    chapter: '9',
    type: QuestionType.Single,
    content: '飞机气密座舱压力控制方法是',
    options: opts('控制向座舱的供气量', '控制座舱向外界的排气量', '使用敏感电门，按需要接通或断开供气增大增压泵', '使用敏感电门，控制增压泵输出压力'),
    answer: 'B',
    explanation: '供气量恒定，控制排气量（Outflow valve）来调节压力。'
  },
  {
    id: '9-m-1',
    chapter: '9',
    type: QuestionType.Multi,
    content: '现代客机通常在万米高空巡航飞行。高空飞行的突出优点是',
    options: opts('无云或少云，风速风向稳定，气象条件好', '空气极为新鲜，无污染，环境好', '保持相同空速比在低空时耗油率低，经济性好', '气温低，易进行调节'),
    answer: ['A', 'C'],
    explanation: '高空阻力小，省油，且气象稳定。'
  },
  {
    id: '9-m-2',
    chapter: '9',
    type: QuestionType.Multi,
    content: '对座舱空调系统的基本要求包括',
    options: opts('座舱高度、座舱高度变化率和座舱余压应符合规定', '适宜的座舱温度和湿度', '足够的换气次数及适宜的空气流动速度', '空气含氧量高，无有害气体'),
    answer: ['A', 'B', 'C'],
    explanation: '压力、温湿度、通风是三大核心指标。'
  },
  {
    id: '9-m-3',
    chapter: '9',
    type: QuestionType.Multi,
    content: '各机型飞机的空调用气的可能气源有',
    options: opts('发动机引气或 APU 供气', '专门的压气机供气', '冲压空气', '地面气源车或空调车供气'),
    answer: ['A', 'B', 'D'],
    explanation: '冲压空气主要用于冷却热交换器，通常不直接进入座舱（除非紧急情况）。'
  },
  {
    id: '9-m-4',
    chapter: '9',
    type: QuestionType.Multi,
    content: '空调组件温度调节的基本组成附件是',
    options: opts('座舱温度选择器、传感器', '压气机和涡轮', '座舱温度控制器', '双向电机机热、冷路活门'),
    answer: ['A', 'C', 'D'],
    explanation: 'B是制冷组件，不是温控逻辑组件。'
  },
  {
    id: '9-m-5',
    chapter: '9',
    type: QuestionType.Multi,
    content: '空调系统设置再循环风扇的目的是',
    options: opts('使已用空气再次返回座舱循环', '减小空调组件的工作负荷', '节省发动机功率', '使排出气密座舱的空气再次返回座舱循环'),
    answer: ['A', 'B', 'C'],
    explanation: '提高效率，减少引气需求。'
  },
  {
    id: '9-m-6',
    chapter: '9',
    type: QuestionType.Multi,
    content: '飞机座舱压力调节的方式有',
    options: opts('间接气动式', '电液动式', '电子气动式', '电子电动式'),
    answer: ['A', 'C', 'D'],
    explanation: '常见的调节方式。'
  },
  {
    id: '9-m-7',
    chapter: '9',
    type: QuestionType.Multi,
    content: '关于座舱压力调节系统，正确的说法有',
    options: opts('根据规定的座舱压力规律调节座舱压力', '调节座舱压力以满足飞行员所选择的余压、座舱高度及其变化率的参数要求', '控制座舱向外界的排气量而实现座舱压力调节', '在整个飞行过程中应使座舱压力保持恒定值'),
    answer: ['A', 'B', 'C'],
    explanation: 'D错，压力是变化的。'
  },
  {
    id: '9-m-8',
    chapter: '9',
    type: QuestionType.Multi,
    content: '电子电动式压力调节的工作特点是',
    options: opts('压力控制器按压力调节规律和所选参数及座舱实际压力产生控制电信号', '电信号通过电磁活门控制排气活门基准腔正压源和负压源的通断', '座舱压力控制器发出控制信号控制排气活门驱动电机运转，带动主排气活门开大或关小，以调节座舱压力', '通常主排气活门既可由直流电机驱动，也可由交流电机驱动'),
    answer: ['A', 'C', 'D'],
    explanation: 'B是电子气动式的特点。'
  },
  {
    id: '9-m-9',
    chapter: '9',
    type: QuestionType.Multi,
    content: '通风式气密座舱空调系统的基本组成部分为',
    options: opts('氧气供给系统', '气源系统', '空气温度调节系统', '座舱增压系统'),
    answer: ['B', 'C', 'D'],
    explanation: '气源、温控、增压是空调系统的三大部分。'
  },
  {
    id: '9-s-1',
    chapter: '9',
    type: QuestionType.Short,
    content: '简述对旅客机空调系统的基本要求',
    answer: '座舱高度、座舱高度变化率、余压、温度和湿度、座舱通风换气量。',
    explanation: '环境控制的关键参数。'
  },
  {
    id: '9-s-2',
    chapter: '9',
    type: QuestionType.Short,
    content: '简述座舱压力制度的概念。',
    answer: '飞机座舱高度和余压随飞机飞行高度的变化规律。',
    explanation: '定义了增压控制的逻辑曲线。'
  },
  {
    id: '9-s-3',
    chapter: '9',
    type: QuestionType.Short,
    content: '简述升压式空气循环制冷的主要附件及制冷基本原理。',
    answer: '升压式空气循环制冷系统的制冷流程可概括为：来自发动机的引气被分为冷路和热路两部分，其中热路空气经双温活门的控制直接流向混合室。而冷路空气则在双温活门的控制下首先经过初级热交换器进行初步冷却，然后由空气循环机的压气机提高压力，再经过次级热交换器的降温，最后在空气循环机的涡轮中膨胀做功，得到的冷空气进入混合室与热空气按一定比例混合。',
    explanation: '这是Bootstrap系统的标准工作循环。'
  },
  {
    id: '9-j-1',
    chapter: '9',
    type: QuestionType.Judge,
    content: '座舱气动式调压就是排气活门在气压控制信号与座舱压力之差作动下保持一定开度的调压方式。',
    answer: 'Y',
    explanation: '气动系统的原理。'
  },
  {
    id: '9-j-2',
    chapter: '9',
    type: QuestionType.Judge,
    content: '气密座舱的高度是指与飞行高度相对应的海拔高度。',
    answer: 'N',
    explanation: '座舱高度是指座舱压力对应的标准大气高度，通常远低于实际飞行高度。'
  },
  {
    id: '9-j-3',
    chapter: '9',
    type: QuestionType.Judge,
    content: '座舱高度变化率与座舱压力变化率是意义等价的两个概念。',
    answer: 'Y',
    explanation: '物理上等价，都是描述压力变化快慢。'
  },
  {
    id: '9-j-4',
    chapter: '9',
    type: QuestionType.Judge,
    content: '通常，气密座舱高度比实际飞行高度要低。',
    answer: 'Y',
    explanation: '因为座舱压力比外界高。'
  },
  {
    id: '9-j-5',
    chapter: '9',
    type: QuestionType.Judge,
    content: '旅客机调温系统一般把由发动机压气机引出的空气经预冷器后分成热路、冷路空气。其中冷路空气经由热交换器、压气机、涡轮进入混和室。',
    answer: 'Y',
    explanation: '正确描述了分路逻辑。'
  },
  {
    id: '9-j-6',
    chapter: '9',
    type: QuestionType.Judge,
    content: '确定气密座舱承压特性时，既要尽量满足乘员生理需求，也要考虑不使飞机结构重量增加太多。民用客机的座舱压力应高于飞行高度的气压，但低于海平面气压。',
    answer: 'N',
    explanation: '前半句对，但后半句表述有误导或不准确？座舱压力确实高于外界，但可以等于海平面（如低空飞行），通常巡航时低于海平面气压（即座舱高度>0）。题目判错可能是因为“应高于...低于...”这种绝对表述，或者逻辑关系。OCR答案为错。'
  },
  {
    id: '9-f-1',
    chapter: '9',
    type: QuestionType.Fill,
    content: '升压式空气循环制冷系统的制冷流程可概括为：来自发动机的引气被分为_____和______ 两部分，其中______经双温活门的控制直接流向混合室。而_____则在双温活门的控制下首先经过______进行初步冷却，然后由空气循环机的______提高压力，再经过______的降温，最后在空气循环机的_____中膨胀做功，得到的_____空气进入混合室与______空气按一定比例混合。',
    answer: '冷路；热路；热路空气；冷路空气；初级热交换器；压气机；次级热交换器；涡轮；冷；热',
    explanation: '考察ACM循环流程。'
  },
  {
    id: '9-f-2',
    chapter: '9',
    type: QuestionType.Fill,
    content: '对旅客机气密座舱空调的要求包括______。______、______、______和______几方面。',
    answer: '座舱高度；座舱高度变化率；余压；座舱温度和湿度；座舱通风换气',
    explanation: '同简答题1。'
  }
];
