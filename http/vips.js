const vips = [
    { qq: '280001088', name: '零落白夜', money: '100' },
    { qq: '2592526921', name: '靜', money: '50' },
    { qq: '3428550100', name: '葛小伦', money: '22' },
    { qq: '430841254', name: '北宸', money: '20' }, { qq: '1834727719', name: '茶杯', money: '20' },
    { qq: '947062775', name: 'Waneefan', money: '18' },
    { qq: '3170119613', name: '༺星河如梦༺', money: '15' },
    { qq: '2235106255', name: '彦', money: '13' },
    { qq: '946024122', name: '星河', money: '11' },
    { qq: '3065699812', name: '四月的阵雨孕育五月的芳香', money: '10' },
    { qq: '1330167188', name: '离离原上草', money: '10' },
    { qq: '2641164263', name: '🤔🤔🤔', money: '10' }
    , { qq: '459098757', name: '眉间雪', money: '10' },
    { qq: '2563727567', name: '╰ァ 真爱必将永恒 ℡', money: '10' },
    { qq: '807324278', name: '雄灬雷霆万钧', money: '10' },
    { qq: '1843948100', name: '謎語', money: '10' },
    { qq: '1929965449', name: '紅月明[讋]', money: '10' },
    { qq: '1377419640', name: 'Death', money: '10' },
    { qq: '2530893953', name: '咖啡', money: "10" },
    { qq: '1391650267', name: '沧海横流', money: "10" },
    { qq: '1422572107', name: '平凡之路', money: '10' },
    { qq: '1787586409', name: '白日梦想家', money: '10' },
    { qq: '875283874', name: 'smile', money: '10' },
    { qq: '2829088393', name: '彦', money: '10' },
    { qq: '2026035521', name: '云炽', money: '10' },
    { qq: '2749542582', name: '光ᯤ⁹ᴳ⁺', money: '10' },
    { qq: '1530143230', name: 'Vikap', money: '10' },
    { qq: '605698647', name: '萬侍帝國龍膽會會長天地壽', money: '10' },
    { qq: '1755009392', name: '幻丶', money: '10' },
    { qq: '13733129255', name: '魂殇丶幻夜', money: '10' },
    { qq: '172057688', name: '翔', money: '10' },
    { qq: '3240530452', name: '寄朝雲', money: '10' },
    { qq: '1731299038', name: '烟火', money: '10' },
    { qq: '3011640998', name: 'MissingYou', money: '10' },
    { qq: '1302523287', name: '栗山真白', money: '10' },
    { qq: '2817766933', name: '觅风', money: '10' },
    { qq: '2328674701', name: '六分新鲜', money: '10' },
    { qq: '445562195', name: '古巷', money: '10' },
    { qq: '717359598', name: 'coin', money: '10' },
    { qq: '1628404462', name: '西伯利亚大仓鼠', money: '10' },
    { qq: '1057911583', name: '有烂就要摆', money: '10' },
    { qq: '568977941', name: '戒烟', money: '10' },
    { qq: '1123638862', name: '墨心', money: '6.66' },
    { qq: '3282873514', name: 'Fletcher.X', money: '6.66' },
    { qq: '2593452779', name: 'Whisky', money: '6' },
    { qq: '2695875650', name: '第四真祖', money: '6' },
    { qq: '2292443696', name: '尘缘如幻梦', money: '5' },
    { qq: '2806266318', name: '无尽', money: '5' },
    { qq: '3069636940', name: '•᷄ᯅ•᷅', money: '5' },
    { qq: '1139806843', name: '薄荷微凉', money: '5' },
    { qq: '1058237230', name: 'kiúliuà', money: '5' },
    { qq: '1090994366', name: '难免散场', money: '5' },
    { qq: '1922964800', name: 'Easy无可SAMURAI', money: '5' },
    { qq: '1344815249', name: '世界和平', money: '5' },
    { qq: '1466780562', name: 'ζั吉尔伽美什', money: '5' },
    { qq: '3552980955', name: 'ζ伊吹童子', money: '5' },
    { qq: '1026626579', name: '丨小龙丨', money: '5' },
    { qq: '940829815', name: '起名好难', money: '5' },
    { qq: '2398020090', name: '黑色的小白', money: '5' },
    { qq: '1499100501', name: '缘过何烟影', money: '5' },
    { qq: '1689118129', name: '二十四桥明月夜​', money: '5' },
    { qq: '1434463133', name: 'RE​', money: '5' },
    { qq: '940467751', name: '無味', money: '5' },
    { qq: '3143845950', name: 'ડ꧖ꦿ', money: '5' },
    { qq: '3085902399', name: '你与晚风皆甜', money: '5' },
    { qq: '2956751973', name: '纯潔★雨汐', money: '5' },
    { qq: '524233683', name: '      ', money: '5' },
    { qq: '2074143020', name: '贪财好色一身正气', money: '5' },
    { qq: '2428276554', name: '仿生obi会梦到电子ani吗', money: '5' },
    { qq: '3186743216', name: '念', money: '5' },
    { qq: '2664140619', name: '笺中诗', money: '5' },
    { qq: '3014553776', name: 'Blank', money: '5' },
    { qq: '1223142483', name: '氧化钠', money: '5' },
    { qq: '3195239296', name: '依旧ZQ', money: '4' },
    { qq: '2720898486', name: '人生QAQ', money: '4' },
    { qq: '1732253807', name: '天逸', money: '3' },
    { qq: '2334385343', name: 'Stronger', money: '3' },
    { qq: '450008868', name: '求求你不要在秀啦', money: '3' },
    { qq: '634978080', name: '有点意思', money: '3' },
    { qq: '1731946771', name: 'товарищ', money: '3' },
    { qq: '2214075596', name: 'WIND', money: '3' },
    { qq: '296252098', name: '寒殇', money: '3' },
    { qq: '2283703730', name: '无冕之王', money: '3' },
    { qq: '209333524', name: '神话', money: '3' },
    { qq: '2786713799', name: 'Einsa.', money: '3' },
    { qq: '3084504476', name: '夏威夷小猛兽', money: '3' },
    { qq: '2316726138', name: '刀尖上的蔷薇', money: '3' },
    { qq: '247715443', name: 'koudai', money: '3' },
    { qq: '1040329786', name: '郭', money: '3' },
    { qq: '592333123', name: '🥴🥴🥴', money: '3' },
    { qq: '3037652101', name: '炎彦', money: '3' },
    { qq: '1240959351', name: 'zytyyds', money: '3' },
    { qq: '3288676911', name: '猫不吃鱼', money: '3' },
    { qq: '3027222579', name: '清风', money: '3' }

]
export { vips }