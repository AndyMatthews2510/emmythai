/* Emmy Thai — plain HTML/JavaScript edition
   Updated 7 Sep 2026. No framework or build step required. */

const SUBJECTS = {
  thai: {
    id: 'thai', title: 'หลักภาษา', eyebrow: 'บ้านคำมหัศจรรย์', icon: 'ก ข ค', colorClass: 'bg-thai', cardColor: 'pink',
    description: 'รู้จักอักษรสามหมู่ ผันวรรณยุกต์ และค้นหาตัวอักษรที่ไม่ออกเสียง',
    lessons: [
      { id:'thai-classes', title:'ไตรยางศ์และอักษรสามหมู่', short:'อักษรสามหมู่', icon:'🏠',
        summary:'พยัญชนะไทยแบ่งเป็นอักษรกลาง 9 ตัว อักษรสูง 11 ตัว และอักษรต่ำ 24 ตัว การรู้หมู่อักษรช่วยให้ผันวรรณยุกต์ได้ถูกต้อง',
        points:['อักษรกลาง 9 ตัว: ก จ ฎ ฏ ด ต บ ป อ','อักษรสูง 11 ตัว: ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห','อักษรต่ำ 24 ตัว: ค ฅ ฆ ง ช ซ ฌ ญ ฑ ฒ ณ ท ธ น พ ฟ ภ ม ย ร ล ว ฬ ฮ'],
        cards:[['🏡','อักษรกลาง','ก จ ฎ ฏ ด ต บ ป อ'],['⛰️','อักษรสูง','ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห'],['🌿','อักษรต่ำ','ค ฅ ฆ ง ช ซ ฌ ญ ฑ ฒ ณ ท ธ น พ ฟ ภ ม ย ร ล ว ฬ ฮ']] },
      { id:'thai-tones', title:'การผันวรรณยุกต์', short:'วรรณยุกต์', icon:'🎵',
        summary:'รูปวรรณยุกต์คือเครื่องหมายที่เขียน ส่วนเสียงวรรณยุกต์คือเสียงที่ได้ยิน ต้องดูหมู่อักษร คำเป็น–คำตาย และความยาวของสระร่วมกัน',
        points:['อักษรกลางใช้ตัวอย่าง กา–ก่า–ก้า–ก๊า–ก๋า เพื่อเห็นเสียง 5 ระดับ','อย่าดูเพียงรูปวรรณยุกต์ ต้องดูหมู่อักษรและชนิดคำด้วย','เต่า: ต เป็นอักษรกลาง เป็นคำเป็น มีไม้เอก จึงออกเสียงเอก'],
        cards:[['🐦','กา','เสียงสามัญ ไม่มีรูปวรรณยุกต์'],['🎶','ก่า–ก้า','เสียงเอก–เสียงโท'],['🎼','ก๊า–ก๋า','เสียงตรี–เสียงจัตวา']] },
      { id:'thai-karan', title:'ตัวการันต์และไม้ทัณฑฆาต', short:'ตัวการันต์', icon:'🤫',
        summary:'เครื่องหมาย ์ เรียกว่า “ไม้ทัณฑฆาต” ตัวอักษรที่มีเครื่องหมายนี้กำกับเรียกว่า “ตัวการันต์” เวลาอ่านเราไม่ออกเสียงตัวนั้น และบางคำอาจมีพยัญชนะที่ไม่ออกเสียงเป็นกลุ่ม จึงต้องดูคำอ่านทั้งคำ',
        points:['โทรศัพท์ อ่านว่า โท-ระ-สับ — ตัวที่มีไม้ทัณฑฆาตคือ ท์','การ์ตูน อ่านว่า กา-ตูน — ตัวการันต์คือ ร์','วันจันทร์และภาพยนตร์มีช่วงอักษรไม่ออกเสียงเป็นกลุ่ม จึงต้องจำคำอ่านทั้งคำ'],
        cards:[['📱','โทรศัพท์','อ่านว่า โท-ระ-สับ · ท์ มีไม้ทัณฑฆาต'],['🖍️','การ์ตูน','อ่านว่า กา-ตูน · ร์ ไม่ออกเสียง'],['🌙','วันจันทร์','อ่านว่า วัน-จัน · ทร์ ไม่ออกเสียง'],['🐘','สัตว์','อ่านว่า สัด · ว์ ไม่ออกเสียง'],['🎬','ภาพยนตร์','อ่านว่า พาบ-พะ-ยน · ตร์ ไม่ออกเสียง']] }
    ]
  },
  social: {
    id:'social', title:'สังคมศึกษา', eyebrow:'นักสืบกาลเวลา', icon:'🧭', colorClass:'bg-social', cardColor:'orange',
    description:'คิดเรื่องเวลา ปฏิทิน หลักฐาน วิถีชีวิต และการเปลี่ยนแปลงของชุมชน',
    lessons:[
      { id:'social-time', chapter:1, title:'บทที่ 1 · อดีต ปัจจุบัน อนาคต', short:'กาลเวลา', icon:'⏳',
        summary:'อดีตคือสิ่งที่เกิดแล้ว ปัจจุบันคือสิ่งที่กำลังเกิด และอนาคตคือสิ่งที่ยังไม่เกิด การใช้คำบอกเวลาช่วยเรียงเรื่องได้ถูกต้อง',
        points:['อดีต = เหตุการณ์ที่เกิดขึ้นแล้ว','ปัจจุบัน = เหตุการณ์ที่กำลังเกิดขึ้น','อนาคต = เหตุการณ์ที่ยังไม่เกิดขึ้น'],
        cards:[['⬅️','อดีต','เหตุการณ์ที่เกิดขึ้นแล้ว'],['⏺️','ปัจจุบัน','เหตุการณ์ที่กำลังเกิดขึ้น'],['➡️','อนาคต','เหตุการณ์ที่ยังไม่เกิดขึ้น']] },
      { id:'social-calendar', chapter:2, title:'บทที่ 2 · วันสำคัญและปฏิทิน', short:'ปฏิทิน', icon:'🗓️',
        summary:'ปฏิทินช่วยวางแผนและตรวจวัน เดือน ปี วันสำคัญบางวันตรงวันที่เดิม ส่วนวันทางจันทรคติเปลี่ยนวันที่สากลในแต่ละปี',
        points:['ใช้ปฏิทินดูวัน นัดหมาย และวางแผนล่วงหน้า','นับวันย้อนหลังหรือไปข้างหน้าอย่างเป็นขั้นตอน','วันสำคัญบางวันอิงวันที่สากล บางวันอิงจันทรคติ'],
        cards:[['✅','ประโยชน์ของปฏิทิน','ดูวัน นัดหมาย และวางแผนล่วงหน้า']] },
      { id:'social-evidence', chapter:3, title:'บทที่ 3 · สืบค้นเหตุการณ์ที่ผ่านมา', short:'หลักฐาน', icon:'🔍',
        summary:'ภาพถ่าย เอกสาร สิ่งของ และคำบอกเล่าช่วยสืบค้นอดีต ควรเปรียบเทียบหลายแหล่งและดูว่าใครสร้างหลักฐาน เมื่อใด และเพื่ออะไร',
        points:['หลักฐานช่วยให้รู้เรื่องในอดีต','หลักฐานแต่ละชนิดมีความน่าเชื่อถือต่างกัน','ควรตรวจหลายแหล่งก่อนสรุป'],
        cards:[['📜','หลักฐานชั้นต้น','สิ่งที่เกิดหรือสร้างในช่วงเหตุการณ์นั้น']] },
      { id:'social-community', chapter:4, newest:true, title:'บทที่ 4 · วิถีชีวิตของคนในชุมชน', short:'ชุมชน', icon:'🏘️',
        summary:'อาชีพ การเดินทาง อาหาร และประเพณีของคนในชุมชนสัมพันธ์กับภูมิประเทศ ทรัพยากร และความต้องการของคน ชุมชนชนบทมักทำเกษตร ส่วนชุมชนเมืองมักค้าขาย ผลิตสินค้า และให้บริการ',
        points:['ชุมชนริมน้ำมักใช้ประโยชน์จากน้ำ เช่น เรือ ประมง และการค้าริมน้ำ','ชุมชนชนบทมักสัมพันธ์กับเกษตรกรรมและทรัพยากรธรรมชาติ','ชุมชนเมืองมีงานค้าขาย การผลิต และบริการมากขึ้น','ประเพณีช่วยสร้างความสัมพันธ์และความเป็นอันหนึ่งอันเดียวกัน'],
        cards:[['🚣','ชุมชนริมน้ำ','มักใช้เรือ ทำประมง หรือค้าขายที่เกี่ยวกับน้ำ'],['🌾','ชุมชนชนบท','คนจำนวนมากประกอบอาชีพเกษตรกรรมและพึ่งพาธรรมชาติ'],['🏙️','ชุมชนเมือง','คนจำนวนมากทำงานค้าขาย ผลิตสินค้า และให้บริการ'],['🎊','ประเพณี','กิจกรรมที่คนในชุมชนร่วมกันทำและสืบต่อกันมา']] },
      { id:'social-change', chapter:5, newest:true, title:'บทที่ 5 · การเปลี่ยนแปลงของชุมชน', short:'การเปลี่ยนแปลง', icon:'🏙️',
        summary:'เทคโนโลยี การคมนาคม ภัยธรรมชาติ และโรคระบาดทำให้วิถีชีวิตเปลี่ยนไป เช่น จดหมายเป็นอีเมล ตะเกียงเป็นไฟฟ้า และเรือเป็นรถไฟฟ้า เราควรวิเคราะห์ทั้งประโยชน์ ผลกระทบ และวิธีปรับตัว',
        points:['การคมนาคมเปลี่ยนได้จากเรือหรือรถแบบเดิมสู่รถยนต์และรถไฟฟ้า','การสื่อสารเปลี่ยนจากจดหมายสู่โทรศัพท์และอีเมล','เครื่องใช้ไฟฟ้าช่วยประหยัดเวลาแต่ต้องใช้อย่างปลอดภัย','การเปลี่ยนแปลงควรมองทั้งผลดี ผลเสีย และผู้ได้รับผลกระทบ'],
        cards:[['🚆','การคมนาคม','จากแบบเดิมสู่ระบบที่รวดเร็วขึ้น'],['📧','การสื่อสาร','จากจดหมายสู่โทรศัพท์และอีเมล'],['💡','เครื่องใช้','จากของใช้แรงคนสู่เครื่องใช้ไฟฟ้า'],['⚖️','คิดก่อนตัดสิน','มองผลดี ผลเสีย ผู้ได้รับผลกระทบ และทางเลือก']] },
      { id:'social-community-detective', chapter:6, newest:true, title:'บทที่ 6 · นักสำรวจวิถีชุมชน', short:'สำรวจชุมชน', icon:'🕵️‍♀️',
        summary:'บทประยุกต์จากบทที่ 4 ฝึกสังเกตภูมิประเทศ อาชีพ การเดินทาง อาหาร และประเพณี แล้วใช้หลักฐานอธิบายว่าทำไมแต่ละชุมชนจึงมีวิถีชีวิตต่างกัน',
        points:['เริ่มจากคำถาม ไม่เริ่มจากคำตอบที่เดาไว้','สังเกต สัมภาษณ์ และบันทึกข้อมูล','เปรียบเทียบหลักฐานหลายชิ้นก่อนสรุป','หลีกเลี่ยงการเหมารวม เช่น “ทุกคน” หากหลักฐานไม่ได้บอกเช่นนั้น'],
        cards:[['🗺️','ดูภูมิประเทศ','ริมน้ำ ที่ราบ ภูเขา หรือเมือง มีผลต่อการใช้ชีวิต'],['🧑‍🌾','ดูอาชีพ','อาชีพช่วยบอกทรัพยากรและความต้องการของชุมชน'],['🛶','ดูการเดินทาง','เรือ รถยนต์ รถไฟ หรือการเดิน สัมพันธ์กับพื้นที่'],['🔎','ตรวจหลายหลักฐาน','สังเกต สัมภาษณ์ และเปรียบเทียบก่อนสรุป']] },
      { id:'social-better-community', chapter:7, newest:true, title:'บทที่ 7 · นักออกแบบชุมชนน่าอยู่', short:'ชุมชนน่าอยู่', icon:'🌱',
        summary:'บทประยุกต์จากบทที่ 5 ฝึกเปรียบเทียบอดีตกับปัจจุบัน คิดผลดี–ผลเสียของการเปลี่ยนแปลง และเลือกวิธีปรับตัวที่ปลอดภัย เหมาะกับคนและสิ่งแวดล้อม',
        points:['เปรียบเทียบสิ่งเดิมกับสิ่งใหม่โดยใช้หลักฐาน','คิดทั้งประโยชน์และผลกระทบ','รับฟังคนหลายกลุ่มก่อนเสนอทางเลือก','เลือกวิธีที่ช่วยคนและลดผลเสียต่อสิ่งแวดล้อม'],
        cards:[['↔️','ก่อน–หลัง','เปรียบเทียบสิ่งเดิมกับสิ่งใหม่โดยใช้หลักฐาน'],['✅','ผลดี','สิ่งที่ช่วยให้สะดวก รวดเร็ว ปลอดภัย หรือมีคุณภาพชีวิตดีขึ้น'],['⚠️','ผลกระทบ','สิ่งที่อาจสร้างปัญหาแก่คน ชุมชน หรือธรรมชาติ'],['🌿','ทางเลือกที่รอบคอบ','รับฟังหลายฝ่าย เลือกวิธีที่ได้ประโยชน์และลดผลเสีย']] }
    ]
  },
  kaew: {
    id:'kaew', title:'แก้วจอมแก่น', eyebrow:'อ่าน คิด แล้วลองใช้', icon:'📚', colorClass:'bg-kaew', cardColor:'purple',
    description:'ฝึกจับใจความ เหตุ–ผล ความรู้สึก และข้อคิดจากบทที่ 7–12',
    lessons:[
      {id:'kaew-7',title:'บทที่ 7 · โอ๊ย! ปวดท้องจริง',short:'ปวดท้องจริง',icon:'🍬',summary:'แก้วแบ่งขนมสีสดให้เพื่อน แม้มีคำเตือนเรื่องความปลอดภัย เมื่อเกิดอาการปวดท้อง เด็ก ๆ จึงเรียนรู้ว่าสีสวยไม่ได้แปลว่าอาหารปลอดภัย',points:['ดูฉลากและแหล่งที่มา','ถ้าปวดท้องให้หยุดกินและบอกผู้ใหญ่'],cards:[['🔎','สัญญาณที่ควรหยุดคิด','ไม่มีฉลาก ไม่รู้แหล่งที่มา หรือสีสดผิดธรรมชาติ']]},
      {id:'kaew-8',title:'บทที่ 8 · ฝึกอาชีพ',short:'ฝึกอาชีพ',icon:'🚲',summary:'แก้วสำรวจอาชีพหลายแบบ และพบว่าความฝันต้องมาพร้อมการเรียนรู้ การฝึกทักษะ และความรับผิดชอบ',points:['ความสนใจเป็นจุดเริ่มต้น','อาชีพต้องอาศัยทักษะและการฝึก'],cards:[['🌟','อาชีพในฝัน','เริ่มจากความสนใจ แล้วฝึกทักษะที่จำเป็น']]},
      {id:'kaew-9',title:'บทที่ 9 · แม่ครัวหัวป่าก์',short:'แม่ครัว',icon:'🥣',summary:'การทำอาหารต้องมีขั้นตอน ความสะอาด และความรับผิดชอบ พื้นที่ส่วนรวมไม่ใช่ที่เล่นจนรบกวนผู้อื่น',points:['ทำตามขั้นตอน','รักษาความสะอาด','ช่วยกันดูแลพื้นที่ส่วนรวม'],cards:[['🧹','ครัวที่ปลอดภัย','เตรียมของตามขั้นตอน ไม่เล่นปาอาหาร และช่วยทำความสะอาด']]},
      {id:'kaew-10',title:'บทที่ 10 · แก้วกับแก่น',short:'แก้วกับแก่น',icon:'🐿️',summary:'การเลี้ยงสัตว์ไม่ใช่เพียงความสนุก ต้องเตรียมที่อยู่ อาหาร เวลา และขอความช่วยเหลือจากผู้ใหญ่หรือสัตวแพทย์เมื่อสัตว์ป่วย',points:['ให้อาหารและที่อยู่ที่เหมาะสม','สังเกตอาการทุกวัน'],cards:[['💚','เจ้าของสัตว์ที่รับผิดชอบ','ดูแลทุกวันและรู้ว่าจะขอความช่วยเหลือจากใคร']]},
      {id:'kaew-11',title:'บทที่ 11 · นักดนตรีเอก',short:'นักดนตรีเอก',icon:'🎻',summary:'เสียงดนตรีที่ดีเกิดจากการเรียนรู้กับผู้รู้ ฝึกอย่างสม่ำเสมอ และรับฟังคำแนะนำ ไม่ได้เกิดจากความรีบร้อน',points:['เรียนรู้จากตัวอย่าง','ฝึกซ้ำ','รับคำแนะนำและปรับปรุง'],cards:[['🎼','เก่งขึ้นได้อย่างไร','เรียนรู้ → ฝึกซ้ำ → ฟังคำแนะนำ → ปรับปรุง']]},
      {id:'kaew-12',title:'บทที่ 12 · ถามผี',short:'ถามผี',icon:'🕵️',summary:'เด็ก ๆ เรียนรู้ว่าความเชื่อและข่าวเล่าต้องตรวจสอบด้วยหลักฐาน และการยอมรับความจริงช่วยรักษาความไว้ใจของเพื่อน',points:['แยกคำเล่าจากหลักฐาน','ตรวจสอบก่อนเชื่อ'],cards:[['🔍','หลักฐาน','สิ่งที่สังเกตหรือตรวจสอบได้ ไม่ใช่เพียงคำเล่าต่อกัน']]}
    ]
  },
  bird: {
    id:'bird', title:'นกกางเขน', eyebrow:'นักสืบใจความสำคัญ', icon:'🐦', colorClass:'bg-bird', cardColor:'teal',
    description:'ติดตามครอบครัวนกทั้ง 9 ตอน แล้วค้นหาเหตุ–ผลและข้อคิด',
    lessons:[
      {id:'bird-1',title:'ตอนที่ 1 · ทำรัง',short:'ทำรัง',icon:'🪹',summary:'พ่อนกและแม่นกเลือกรูที่กำแพงเก่าในสวนของบ้านที่มีคนใจดี แล้วช่วยกันสร้างรัง',points:['เลือกที่ปลอดภัย','ช่วยกันสร้างรัง'],cards:[['🧱','ที่ทำรัง','รูที่กำแพงเก่าในสวน']]},
      {id:'bird-2',title:'ตอนที่ 2 · ลูกนก',short:'ลูกนก',icon:'🥚',summary:'แม่นกวางไข่ 4 ฟอง พ่อแม่ผลัดกันดูแลและหาอาหาร เมื่อลูกนกออกจากไข่ ทั้งคู่ช่วยกันเลี้ยง',points:['ไข่ 4 ฟอง','พ่อแม่ผลัดกันดูแล'],cards:[['🥚','จำนวนไข่','4 ฟอง']]},
      {id:'bird-3',title:'ตอนที่ 3 · เพลงกล่อมลูก',short:'เพลงกล่อมลูก',icon:'🎶',summary:'ลูกนกชื่อ นิ่ม นิด หน่อย และน้อย พ่อนกสอนว่าการร้องเพลงต้องเริ่มจากการฟัง ลองทำ และฝึกทีละน้อย',points:['ฟังก่อน','ลองทำ','ฝึกซ้ำ'],cards:[['🐦','ลูกนก 4 ตัว','นิ่ม นิด หน่อย และน้อย']]},
      {id:'bird-4',title:'ตอนที่ 4 · ความสามัคคี',short:'ความสามัคคี',icon:'🤝',summary:'นิ่มใช้อำนาจความเป็นพี่จนพี่น้องทะเลาะกัน เมื่อเข้าใจความผิด นิ่มจึงขอโทษและทุกตัวกลับมาสามัคคีกัน',points:['ไม่ข่มน้อง','ยอมรับผิดและขอโทษ'],cards:[['💞','การเป็นพี่ที่ดี','ดูแล แบ่งปัน และไม่ข่มน้อง']]},
      {id:'bird-5',title:'ตอนที่ 5 · คำสั่งสอน',short:'คำสั่งสอน',icon:'🕊️',summary:'พ่อแม่สอนให้ลูกดูแลตนเองและอยู่ร่วมกันอย่างสงบ และเตือนว่านกป่าต้องการอิสระ ไม่ควรถูกจับขังกรง',points:['ดูแลตนเอง','เคารพอิสระของสัตว์'],cards:[['🌳','สิ่งที่ดีต่อนกป่า','ให้อยู่ตามธรรมชาติและสังเกตจากระยะห่าง']]},
      {id:'bird-6',title:'ตอนที่ 6 · ลูกนกตกใจ',short:'ลูกนกตกใจ',icon:'🔎',summary:'ลูกนกคิดว่าสิ่งที่ไม่รู้จักคือยักษ์ แต่พ่อนกไปตรวจสอบและพบว่าเป็นลุงชู คนทำสวนใจดี จึงรู้ว่าการคาดเดาอาจต่างจากความจริง',points:['อย่ารีบสรุปจากความกลัว','ตรวจสอบก่อนเชื่อ'],cards:[['🧑‍🌾','สิ่งที่คิดว่าเป็นยักษ์','ลุงชู คนทำสวน']]},
      {id:'bird-7',title:'ตอนที่ 7 · หัดบิน',short:'หัดบิน',icon:'🪽',summary:'พ่อแม่สาธิตการบินและให้ลูกลองทีละขั้น ลูกแต่ละตัวใช้เวลาไม่เท่ากัน แต่เก่งขึ้นได้ด้วยการฝึกซ้ำอย่างปลอดภัย',points:['ดูตัวอย่าง','ลองทีละขั้น','ฝึกซ้ำ'],cards:[['📈','วิธีเรียนทักษะใหม่','ดูตัวอย่าง → ลองทำ → รับคำแนะนำ → ฝึกซ้ำ']]},
      {id:'bird-8',title:'ตอนที่ 8 · ความดื้อของนิ่ม',short:'ความดื้อของนิ่ม',icon:'⚠️',summary:'นิ่มมั่นใจว่าบินได้เองและไม่ยอมฝึกตามคำสอน สุดท้ายจึงบินตกและบาดเจ็บ',points:['ความมั่นใจไม่เท่ากับความพร้อม','รับฟังคำแนะนำเพื่อความปลอดภัย'],cards:[['🛡️','มั่นใจอย่างปลอดภัย','รับฟังคำแนะนำและฝึกจนพร้อม']]},
      {id:'bird-9',title:'ตอนที่ 9 · ลูกนกพ้นอกพ่อแม่',short:'พ้นอกพ่อแม่',icon:'🌤️',summary:'ประนอมช่วยดูแลนิ่มที่บาดเจ็บและปล่อยกลับครอบครัวเมื่อนิ่มหายดี ต่อมานิดและหน่อยถูกจับขังกรง เรื่องจึงเตือนให้มนุษย์เมตตาและเคารพอิสระของสัตว์',points:['ช่วยสัตว์อย่างเหมาะสม','ไม่ยิง ไม่ดัก และไม่ขังนก'],cards:[['🕊️','ข้อคิดตอนจบ','ไม่ยิง ไม่ดัก และไม่ขังนก']]}
    ]
  }
};

const QUESTIONS = [
  {id:'t1',subject:'thai',lesson:'thai-classes',q:'ข้อใดเป็นอักษรกลาง',choices:['ก','ข','ค','ห'],a:'ก',ex:'ก เป็นหนึ่งในอักษรกลาง 9 ตัว'},
  {id:'t2',subject:'thai',lesson:'thai-classes',q:'ข้อใดเป็นอักษรสูง',choices:['ส','ง','ม','ย'],a:'ส',ex:'ส เป็นอักษรสูง'},
  {id:'t3',subject:'thai',lesson:'thai-tones',q:'ชุด กา–ก่า–ก้า–ก๊า–ก๋า เรียงเสียงอย่างไร',choices:['สามัญ–เอก–โท–ตรี–จัตวา','เอก–โท–ตรี–จัตวา–สามัญ','สามัญ–โท–เอก–ตรี–จัตวา'],a:'สามัญ–เอก–โท–ตรี–จัตวา',ex:'อักษรกลางสามารถใช้ชุดนี้สาธิตเสียงวรรณยุกต์ทั้ง 5'},
  {id:'t4',subject:'thai',lesson:'thai-tones',q:'การหาว่า “เต่า” ออกเสียงอะไร ควรดูอะไรให้ครบ',choices:['หมู่อักษร + คำเป็น/คำตาย + รูปวรรณยุกต์','ดูไม้เอกอย่างเดียว','ดูจำนวนตัวอักษร'],a:'หมู่อักษร + คำเป็น/คำตาย + รูปวรรณยุกต์',ex:'ต้องพิจารณาหลายองค์ประกอบร่วมกัน'},
  {id:'t5',subject:'thai',lesson:'thai-karan',q:'เครื่องหมาย ์ เรียกว่าอะไร',choices:['ไม้ทัณฑฆาต','ไม้เอก','ไม้ยมก','การันต์'],a:'ไม้ทัณฑฆาต',ex:'ตัวอักษรที่มีไม้ทัณฑฆาตกำกับเรียกว่าตัวการันต์'},
  {id:'t6',subject:'thai',lesson:'thai-karan',q:'คำว่า “โทรศัพท์” ตัวใดมีไม้ทัณฑฆาตกำกับ',choices:['ท์','พ์','ศ์','รศัพท์'],a:'ท์',ex:'โทรศัพท์เขียนด้วย “ท์” ที่มีไม้ทัณฑฆาต แม้เวลาอ่านต้องดูช่วงเสียงทั้งคำ'},

  {id:'s1',subject:'social',lesson:'social-time',q:'ประโยค “พรุ่งนี้มาริซ่าจะอ่านหนังสือ” กล่าวถึงเวลาใด',choices:['อนาคต','อดีต','ปัจจุบัน'],a:'อนาคต',ex:'พรุ่งนี้เป็นเวลาหลังจากวันนี้ จึงเป็นอนาคต'},
  {id:'s2',subject:'social',lesson:'social-time',q:'ข้อใดเรียงเหตุการณ์ตามเวลาได้ถูกต้อง',choices:['เกิด → เข้าอนุบาล → เรียน ป.2','เรียน ป.2 → เกิด → เข้าอนุบาล','เข้าอนุบาล → เรียน ป.2 → เกิด'],a:'เกิด → เข้าอนุบาล → เรียน ป.2',ex:'การเกิดมาก่อนเข้าเรียน และอนุบาลมาก่อน ป.2'},
  {id:'s3',subject:'social',lesson:'social-calendar',q:'ถ้ามีสอบวันที่ 18 และต้องทบทวนล่วงหน้า 5 วัน ควรเริ่มวันที่เท่าไร',choices:['วันที่ 13','วันที่ 14','วันที่ 23','วันที่ 5'],a:'วันที่ 13',ex:'นับถอยหลังจากวันที่ 18 จำนวน 5 วันได้วันที่ 13'},
  {id:'s4',subject:'social',lesson:'social-evidence',q:'ถ้าต้องการรู้วันเกิดที่แน่นอน หลักฐานใดน่าเชื่อถือที่สุด',choices:['สูติบัตร','ความเห็นของเพื่อน','ภาพวาดไม่ลงวันที่','เรื่องที่เดาเอง'],a:'สูติบัตร',ex:'สูติบัตรเป็นเอกสารทางราชการที่บันทึกข้อมูลการเกิดโดยตรง'},

  {id:'s4a',subject:'social',lesson:'social-community',q:'เหตุใดชุมชนริมน้ำจึงมักมีอาชีพหรือการเดินทางเกี่ยวกับน้ำ',choices:['คนใช้ทรัพยากรและเส้นทางที่อยู่ใกล้','ทุกคนชอบสีฟ้า','กฎหมายบังคับให้ใช้เรือ','ไม่มีถนนในโลก'],a:'คนใช้ทรัพยากรและเส้นทางที่อยู่ใกล้',ex:'ภูมิประเทศและทรัพยากรมีอิทธิพลต่ออาชีพและการเดินทาง'},
  {id:'s4b',subject:'social',lesson:'social-community',q:'ชุมชนชนบทมักมีอาชีพใดมาก',choices:['เกษตรกรรม','นักบินอวกาศ','พนักงานรถไฟใต้ดินทุกคน','นักแสดงทุกคน'],a:'เกษตรกรรม',ex:'ชุมชนชนบทมีพื้นที่และทรัพยากรธรรมชาติที่เหมาะกับการเพาะปลูกและเลี้ยงสัตว์'},
  {id:'s4c',subject:'social',lesson:'social-community',q:'ประเพณีในชุมชนมีความสำคัญอย่างไร',choices:['ช่วยสร้างความสัมพันธ์และความเป็นอันหนึ่งอันเดียวกัน','ทำให้ทุกคนมีอาชีพเดียวกัน','ทำให้ภูมิประเทศเปลี่ยนทันที','ทำให้ไม่ต้องเคารพกติกา'],a:'ช่วยสร้างความสัมพันธ์และความเป็นอันหนึ่งอันเดียวกัน',ex:'การร่วมประเพณีทำให้คนพบปะ ช่วยเหลือ และเห็นคุณค่าของชุมชนร่วมกัน'},
  {id:'s4d',subject:'social',lesson:'social-community',q:'พบภาพเรือ ตลาดริมน้ำ และคนจับปลา ข้อสรุปใดมีหลักฐานรองรับมากที่สุด',choices:['ชุมชนนี้มีวิถีชีวิตสัมพันธ์กับแหล่งน้ำ','ทุกคนว่ายน้ำเก่ง','ชุมชนนี้ไม่มีถนนเลย','ทุกคนมีอาชีพเดียวกัน'],a:'ชุมชนนี้มีวิถีชีวิตสัมพันธ์กับแหล่งน้ำ',ex:'หลักฐานชี้ว่าบางส่วนของชีวิตสัมพันธ์กับน้ำ แต่ไม่ควรเหมารวมเกินข้อมูล'},
  {id:'s4e',subject:'social',lesson:'social-community',q:'ข้อใดเรียงเหตุและผลของวิถีชุมชนได้สมเหตุสมผล',choices:['มีแม่น้ำ → มีทรัพยากรน้ำ → ใช้เรือและทำประมง','ทำประมง → แม่น้ำจึงเกิดขึ้น','ใช้รถไฟฟ้า → ทุกคนจึงเป็นเกษตรกร'],a:'มีแม่น้ำ → มีทรัพยากรน้ำ → ใช้เรือและทำประมง',ex:'สภาพแวดล้อมเอื้อต่อทรัพยากรและวิถีชีวิตบางอย่าง'},

  {id:'s5a',subject:'social',lesson:'social-change',q:'ถ้าชุมชนสร้างถนนใหม่ ข้อใดเป็นการวิเคราะห์ที่รอบด้านที่สุด',choices:['ดูทั้งการเดินทางที่สะดวกขึ้นและผลต่อบ้านหรือธรรมชาติ','ดูเฉพาะว่าถนนใหม่','ตัดสินจากรูปหนึ่งใบ','ถามคนเพียงคนเดียว'],a:'ดูทั้งการเดินทางที่สะดวกขึ้นและผลต่อบ้านหรือธรรมชาติ',ex:'การเปลี่ยนแปลงควรมองผลดี ผลเสีย และผู้เกี่ยวข้องหลายฝ่าย'},
  {id:'s5b',subject:'social',lesson:'social-change',q:'ข้อใดเรียงวิธีสื่อสารจากอดีตมาสู่ปัจจุบันได้เหมาะสม',choices:['จดหมาย → โทรศัพท์ → อีเมล','อีเมล → จดหมาย → โทรศัพท์','โทรศัพท์ → อีเมล → จดหมาย'],a:'จดหมาย → โทรศัพท์ → อีเมล',ex:'วิธีสื่อสารพัฒนาให้ส่งข่าวได้รวดเร็วขึ้น'},
  {id:'s5c',subject:'social',lesson:'social-change',q:'การเปลี่ยนจากตะเกียงมาใช้หลอดไฟฟ้าช่วยให้แสงสว่างอย่างไร',choices:['สะดวกขึ้น','หายไปทั้งหมด','ใช้ไม่ได้ตอนกลางคืน','ไม่ต้องระวังไฟ'],a:'สะดวกขึ้น',ex:'หลอดไฟฟ้าใช้สะดวก แต่ยังต้องใช้อย่างปลอดภัยและประหยัด'},
  {id:'s5d',subject:'social',lesson:'social-change',q:'เมื่อถุงพลาสติกสะดวกแต่สร้างขยะ ทางเลือกใดเหมาะสมที่สุด',choices:['พกถุงใช้ซ้ำและรับถุงใหม่เท่าที่จำเป็น','รับถุงหลายใบทุกครั้ง','ทิ้งถุงลงแม่น้ำ','เผาถุงใกล้บ้าน'],a:'พกถุงใช้ซ้ำและรับถุงใหม่เท่าที่จำเป็น',ex:'ถุงใช้ซ้ำช่วยลดขยะจากพลาสติกใช้ครั้งเดียว'},

  {id:'s6a',subject:'social',lesson:'social-community-detective',q:'นักสำรวจพบภาพทุ่งนา คลอง และเรือบรรทุกผัก หลักฐานชุดนี้สนับสนุนข้อใดมากที่สุด',choices:['ชุมชนทำเกษตรและใช้ทางน้ำบางส่วน','ทุกบ้านขายโทรศัพท์','ไม่มีใครเดินทางทางบก','ทุกคนทำงานเหมือนกัน'],a:'ชุมชนทำเกษตรและใช้ทางน้ำบางส่วน',ex:'ทุ่งนาและผักชี้ถึงเกษตร ส่วนคลองและเรือชี้ถึงการใช้ทางน้ำ โดยไม่ควรเหมารวมทุกคน'},
  {id:'s6b',subject:'social',lesson:'social-community-detective',q:'ลำดับใดเหมาะกับการสำรวจวิถีชีวิตในชุมชน',choices:['ตั้งคำถาม → สังเกตและสัมภาษณ์ → บันทึก → เปรียบเทียบ → สรุป','สรุปก่อน → เดาคำตอบ → ถามคนเดียว','ถ่ายภาพ → ลบข้อมูล → สรุปทันที'],a:'ตั้งคำถาม → สังเกตและสัมภาษณ์ → บันทึก → เปรียบเทียบ → สรุป',ex:'ต้องเก็บข้อมูลและเปรียบเทียบก่อนสรุป'},
  {id:'s6c',subject:'social',lesson:'social-community-detective',q:'ชุมชนหนึ่งมีน้ำท่วมตามฤดูและใช้เรือเดินทาง แผนใดเหมาะกับพื้นที่ที่สุด',choices:['มีจุดปลอดภัย เสื้อชูชีพ และเส้นทางอพยพที่คนรู้ร่วมกัน','ห้ามทุกคนออกจากบ้านตลอดปี','เก็บของสำคัญไว้ต่ำกว่าระดับน้ำ','ให้เด็กพายเรือคนเดียว'],a:'มีจุดปลอดภัย เสื้อชูชีพ และเส้นทางอพยพที่คนรู้ร่วมกัน',ex:'การเตรียมพร้อมและมีแผนอพยพช่วยลดความเสี่ยง'},
  {id:'s6d',subject:'social',lesson:'social-community-detective',q:'นอกจากภูมิประเทศและทรัพยากร สิ่งใดช่วยอธิบายความต่างของวิถีชีวิตชุมชน',choices:['ความต้องการของคน','สีเสื้อ','ชื่อเล่น','ลายมือ'],a:'ความต้องการของคน',ex:'ความต้องการร่วมกับสภาพพื้นที่และทรัพยากรทำให้เกิดอาชีพและบริการที่ต่างกัน'},

  {id:'s7a',subject:'social',lesson:'social-better-community',q:'ลำดับใดช่วยวิเคราะห์การเปลี่ยนแปลงของชุมชนได้รอบคอบ',choices:['ดูอดีตและปัจจุบัน → เก็บหลักฐาน → เปรียบเทียบผลดี–ผลเสีย → เสนอวิธีปรับตัว','เลือกคำตอบที่ชอบ → หาเหตุผลมาสนับสนุน','ถามคนเดียว → ตัดสินแทนทุกคน'],a:'ดูอดีตและปัจจุบัน → เก็บหลักฐาน → เปรียบเทียบผลดี–ผลเสีย → เสนอวิธีปรับตัว',ex:'เริ่มจากข้อมูล แล้วค่อยชั่งผลกระทบและเสนอทางเลือก'},
  {id:'s7b',subject:'social',lesson:'social-better-community',q:'ชุมชนกำลังพิจารณารถไฟฟ้า หลักฐานชุดใดช่วยตัดสินใจได้ดีที่สุด',choices:['จำนวนผู้ใช้ เวลาเดินทาง ค่าใช้จ่าย ความปลอดภัย และผลต่อชุมชน','ความชอบของคนเพียงคนเดียว','สีของขบวนรถ','รูปโฆษณาหนึ่งรูป'],a:'จำนวนผู้ใช้ เวลาเดินทาง ค่าใช้จ่าย ความปลอดภัย และผลต่อชุมชน',ex:'ข้อมูลหลายด้านช่วยตัดสินใจได้รอบคอบกว่า'},
  {id:'s7c',subject:'social',lesson:'social-better-community',q:'ไฟฟ้าช่วยให้ชีวิตสะดวกขึ้น แต่วิธีใช้ใดปลอดภัยที่สุด',choices:['ใช้มือแห้ง ไม่จับสายชำรุด และบอกผู้ใหญ่เมื่อพบความผิดปกติ','เสียบปลั๊กหลายชั้นจนเต็ม','จับปลั๊กด้วยมือเปียก','ซ่อมสายไฟเอง'],a:'ใช้มือแห้ง ไม่จับสายชำรุด และบอกผู้ใหญ่เมื่อพบความผิดปกติ',ex:'น้ำและอุปกรณ์ชำรุดเพิ่มความเสี่ยงไฟฟ้าช็อต'},
  {id:'s7d',subject:'social',lesson:'social-better-community',q:'แผนพัฒนาชุมชนที่ดีควรรับฟังคนหลายกลุ่ม และลดอะไรที่อาจเกิดขึ้น',choices:['ผลกระทบ','คำถาม','หลักฐาน','ความร่วมมือ'],a:'ผลกระทบ',ex:'การพัฒนาที่รอบคอบต้องเพิ่มประโยชน์พร้อมลดผลกระทบต่อคนและสิ่งแวดล้อม'},

  {id:'k1',subject:'kaew',lesson:'kaew-7',q:'ถ้าขนมไม่มีฉลากและสีสดผิดธรรมชาติ ควรทำอย่างไร',choices:['ถามผู้ใหญ่และหลีกเลี่ยงการกิน','กินเยอะ ๆ ก่อน','แบ่งให้เพื่อนทุกคน','ซ่อนฉลาก'],a:'ถามผู้ใหญ่และหลีกเลี่ยงการกิน',ex:'ไม่รู้แหล่งที่มาเป็นสัญญาณให้หยุดและตรวจสอบ'},
  {id:'k2',subject:'kaew',lesson:'kaew-8',q:'ความฝันเรื่องอาชีพควรมาพร้อมอะไร',choices:['การเรียนรู้และฝึกทักษะ','การรอให้เก่งเอง','การเลียนแบบเพื่อนอย่างเดียว'],a:'การเรียนรู้และฝึกทักษะ',ex:'ความสนใจเป็นจุดเริ่ม แต่ทักษะเกิดจากการเรียนรู้และฝึก'},
  {id:'k3',subject:'kaew',lesson:'kaew-10',q:'ถ้าสัตว์เลี้ยงป่วย เด็กควรทำอย่างไร',choices:['บอกผู้ใหญ่และขอคำแนะนำจากสัตวแพทย์','ปล่อยไว้เอง','ให้ยาอะไรก็ได้'],a:'บอกผู้ใหญ่และขอคำแนะนำจากสัตวแพทย์',ex:'การดูแลสัตว์ต้องขอความช่วยเหลือที่เหมาะสม'},
  {id:'k4',subject:'kaew',lesson:'kaew-11',q:'ข้อใดช่วยให้เล่นดนตรีดีขึ้นที่สุด',choices:['ฝึกสม่ำเสมอและฟังคำแนะนำ','รีบเล่นให้เร็วที่สุด','เปลี่ยนเครื่องดนตรีทุกวัน'],a:'ฝึกสม่ำเสมอและฟังคำแนะนำ',ex:'ทักษะดีขึ้นจากการฝึกและปรับปรุง'},
  {id:'k5',subject:'kaew',lesson:'kaew-12',q:'ก่อนเชื่อข่าวเล่า ควรทำอะไร',choices:['ตรวจสอบหลักฐาน','เชื่อทันที','บอกต่อทันที'],a:'ตรวจสอบหลักฐาน',ex:'ข่าวเล่าหรือความเชื่อควรตรวจสอบก่อนเชื่อ'},

  {id:'b1',subject:'bird',lesson:'bird-2',q:'แม่นกวางไข่กี่ฟอง',choices:['4 ฟอง','2 ฟอง','6 ฟอง'],a:'4 ฟอง',ex:'ในเรื่องแม่นกวางไข่ 4 ฟอง'},
  {id:'b2',subject:'bird',lesson:'bird-3',q:'ลูกนก 4 ตัวชื่ออะไร',choices:['นิ่ม นิด หน่อย น้อย','แก้ว แก่น กล้า เก่ง','นก หนู หมู แมว'],a:'นิ่ม นิด หน่อย น้อย',ex:'ลูกนกชื่อ นิ่ม นิด หน่อย และน้อย'},
  {id:'b3',subject:'bird',lesson:'bird-6',q:'สิ่งที่ลูกนกคิดว่าเป็นยักษ์จริง ๆ คือใคร',choices:['ลุงชู คนทำสวน','นายพราน','ครูใหญ่'],a:'ลุงชู คนทำสวน',ex:'พ่อนกตรวจสอบแล้วพบว่าเป็นลุงชู'},
  {id:'b4',subject:'bird',lesson:'bird-7',q:'วิธีฝึกบินที่เหมาะสมคือข้อใด',choices:['ดูตัวอย่าง → ลองทำ → รับคำแนะนำ → ฝึกซ้ำ','กระโดดทันทีโดยไม่ฝึก','ไม่ฟังใครเลย'],a:'ดูตัวอย่าง → ลองทำ → รับคำแนะนำ → ฝึกซ้ำ',ex:'ทักษะใหม่ควรเรียนทีละขั้นอย่างปลอดภัย'},
  {id:'b5',subject:'bird',lesson:'bird-8',q:'เหตุใดนิ่มจึงบาดเจ็บ',choices:['มั่นใจเกินความพร้อมและไม่ฝึกตามคำสอน','เพราะฝนตกเท่านั้น','เพราะไม่กินอาหาร'],a:'มั่นใจเกินความพร้อมและไม่ฝึกตามคำสอน',ex:'เรื่องชี้ให้เห็นว่าความมั่นใจไม่เท่ากับความพร้อม'},
  {id:'b6',subject:'bird',lesson:'bird-9',q:'ข้อคิดสำคัญเกี่ยวกับนกป่าคืออะไร',choices:['ควรเมตตาและเคารพอิสระของสัตว์','ควรจับขังกรงทุกตัว','ควรไล่นกออกจากสวน'],a:'ควรเมตตาและเคารพอิสระของสัตว์',ex:'ตอนจบเตือนว่าไม่ควรยิง ดัก หรือขังนกป่า'}
];

const STORAGE_KEY = 'emmythai-html-progress-v3';
const state = loadState();
let currentSubject = null;
let currentQuiz = [];
let quizIndex = 0;
let answered = false;

function loadState() {
  try {
    return Object.assign({stars:0, attempts:0, correct:0, completed:{}, bySubject:{}}, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
  } catch (_) {
    return {stars:0, attempts:0, correct:0, completed:{}, bySubject:{}};
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateStars();
}
function updateStars() { document.getElementById('starCount').textContent = state.stars || 0; }
function esc(s='') { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }
function app() { return document.getElementById('app'); }
function setActive(selector, value) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector('[' + selector + '="' + value + '"]');
  if (btn) btn.classList.add('active');
}

function renderHome() {
  currentSubject = null;
  setActive('data-view', 'home');
  const cards = Object.values(SUBJECTS).map(s => `
    <button class="subject-card" data-open-subject="${s.id}" data-color="${s.cardColor}">
      <div class="card-icon">${s.icon}</div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.description)}</p>
      <div class="card-action">เปิด ${s.lessons.length} บท →</div>
    </button>`).join('');
  app().innerHTML = `
    <section class="hero">
      <div>
        <span class="badge">✨ ภารกิจวันนี้</span>
        <h2>พิชิตภาษาไทย<br>และสังคมศึกษา</h2>
        <p>เล่นทีละด่าน ฝึกทั้งความจำ ความเข้าใจ และการคิดวิเคราะห์ เนื้อหาสังคมศึกษาอัปเดตครบถึง <strong>บทที่ 7</strong> แล้ว</p>
        <div class="button-row"><button class="primary-btn" data-open-subject="social">เริ่มสังคมศึกษา บท 4–7</button><button class="secondary-btn" data-view-go="quiz">ลองแบบทดสอบ</button></div>
      </div>
      <div class="hero-visual" aria-hidden="true">🧠📚</div>
    </section>
    <div class="section-title"><div><p class="eyebrow">เลือกวิชา</p><h2>วันนี้อยากฝึกอะไร?</h2></div><p>กลับมาทำซ้ำได้ทุกเมื่อ</p></div>
    <section class="subject-grid">${cards}</section>`;
}

function renderSubject(id) {
  const s = SUBJECTS[id]; if (!s) return renderHome();
  currentSubject = id;
  setActive('data-subject', id);
  const lessons = s.lessons.map((l,i)=>`
    <button class="lesson-card ${l.newest?'newest':''}" data-open-lesson="${l.id}">
      <div class="lesson-number">${l.chapter ? 'บทที่ '+l.chapter : 'บท/ตอนที่ '+(i+1)} ${l.newest?'<span class="new-label">อัปเดตล่าสุด</span>':''}</div>
      <div class="card-icon">${l.icon}</div>
      <h3>${esc(l.short || l.title)}</h3>
      <p>${esc(l.summary)}</p>
    </button>`).join('');
  app().innerHTML = `
    <button class="back-btn" data-view-go="home">← หน้าแรก</button>
    <section class="subject-banner ${s.colorClass}"><div><p class="eyebrow">${esc(s.eyebrow)}</p><h2>${esc(s.title)}</h2><p>${esc(s.description)}</p></div><div class="big-icon">${s.icon}</div></section>
    <div class="section-title"><div><h2>เลือกบทเรียน</h2><p>${s.lessons.length} บท/ตอน</p></div>${id==='social'?'<span class="badge">ใหม่: บท 4–7</span>':''}</div>
    <section class="lesson-grid">${lessons}</section>`;
}

function findLesson(id) {
  for (const subject of Object.values(SUBJECTS)) {
    const lesson = subject.lessons.find(l => l.id === id);
    if (lesson) return {subject, lesson};
  }
  return null;
}

function renderLesson(id) {
  const found = findLesson(id); if (!found) return renderHome();
  const {subject:s, lesson:l} = found; currentSubject = s.id; setActive('data-subject', s.id);
  const cards = (l.cards || []).map(c=>`<div class="flashcard"><div><div class="fc-icon">${c[0]}</div><strong>${esc(c[1])}</strong><p>${esc(c[2])}</p></div></div>`).join('');
  const qs = QUESTIONS.filter(q=>q.lesson===l.id).length;
  app().innerHTML = `
    <button class="back-btn" data-open-subject="${s.id}">← กลับไป ${esc(s.title)}</button>
    <section class="lesson-detail">
      <article class="lesson-main">
        <span class="badge">${l.icon} ${esc(l.short || 'บทเรียน')}</span>
        <h2>${esc(l.title)}</h2>
        <p class="lesson-summary">${esc(l.summary)}</p>
        <ul class="key-points">${(l.points||[]).map(p=>`<li>${esc(p)}</li>`).join('')}</ul>
        <div class="button-row">
          ${qs?`<button class="primary-btn" data-lesson-quiz="${l.id}">ฝึกบทนี้ ${qs} ข้อ</button>`:''}
          <button class="secondary-btn" data-complete-lesson="${l.id}">${state.completed[l.id]?'✓ ทบทวนแล้ว':'ทำเครื่องหมายว่าทบทวนแล้ว'}</button>
        </div>
      </article>
      <aside class="flashcard-panel"><h3>Flash Cards</h3>${cards || '<div class="empty">บทนี้ยังไม่มีแฟลชการ์ด</div>'}</aside>
    </section>`;
}

function startQuiz(filterLesson=null) {
  let pool = filterLesson ? QUESTIONS.filter(q=>q.lesson===filterLesson) : QUESTIONS;
  currentQuiz = shuffle(pool).slice(0, filterLesson ? pool.length : Math.min(10,pool.length));
  quizIndex = 0; answered = false;
  setActive('data-view', 'quiz');
  renderQuiz();
}

function renderQuiz() {
  if (!currentQuiz.length) return startQuiz();
  if (quizIndex >= currentQuiz.length) return renderQuizResult();
  const q = currentQuiz[quizIndex]; const subject = SUBJECTS[q.subject];
  const choices = shuffle(q.choices).map(c=>`<button class="choice-btn" data-answer="${esc(c)}">${esc(c)}</button>`).join('');
  app().innerHTML = `
    <section class="quiz-layout">
      <article class="quiz-panel">
        <span class="badge">${subject.icon} ${esc(subject.title)}</span>
        <div class="quiz-progress"><span style="width:${((quizIndex)/currentQuiz.length)*100}%"></span></div>
        <p class="eyebrow">ข้อ ${quizIndex+1} / ${currentQuiz.length}</p>
        <div class="quiz-question">${esc(q.q)}</div>
        <div class="choice-list">${choices}</div>
        <div id="feedback"></div>
      </article>
      <aside class="quiz-meta">
        <div class="stat"><span>ดาวสะสม</span><strong>⭐ ${state.stars}</strong></div>
        <div class="stat"><span>ตอบถูกทั้งหมด</span><strong>${state.correct}</strong></div>
        <div class="stat"><span>ทำทั้งหมด</span><strong>${state.attempts}</strong></div>
      </aside>
    </section>`;
}

function answerQuestion(answer) {
  if (answered) return; answered = true;
  const q = currentQuiz[quizIndex]; const correct = answer === q.a;
  document.querySelectorAll('.choice-btn').forEach(btn=>{
    btn.disabled = true;
    if (btn.dataset.answer === q.a) btn.classList.add('correct');
    else if (btn.dataset.answer === answer) btn.classList.add('wrong');
  });
  state.attempts += 1;
  state.bySubject[q.subject] = state.bySubject[q.subject] || {attempts:0,correct:0};
  state.bySubject[q.subject].attempts += 1;
  if (correct) { state.correct += 1; state.stars += 1; state.bySubject[q.subject].correct += 1; }
  saveState();
  document.getElementById('feedback').innerHTML = `<div class="feedback ${correct?'good':'try'}"><strong>${correct?'ถูกต้อง! ⭐':'ลองใหม่ในรอบหน้า'}</strong>${esc(q.ex)}</div><div class="button-row"><button class="primary-btn" data-next-question>${quizIndex+1===currentQuiz.length?'ดูผล':'ข้อต่อไป →'}</button></div>`;
}

function renderQuizResult() {
  const sessionTotal = currentQuiz.length;
  app().innerHTML = `<section class="quiz-panel"><span class="badge">🏁 จบรอบแล้ว</span><h2>เก่งมาก! ทำครบ ${sessionTotal} ข้อแล้ว</h2><p>ข้อที่ยังไม่แม่นสามารถกลับไปเปิดบทเรียนแล้วลองใหม่ได้ การทำซ้ำช่วยให้จำได้นานขึ้น</p><div class="button-row"><button class="primary-btn" data-view-go="quiz">สุ่มชุดใหม่</button><button class="secondary-btn" data-view-go="home">กลับหน้าแรก</button></div></section>`;
}

function renderParent() {
  setActive('data-view','parent');
  const accuracy = state.attempts ? Math.round(state.correct/state.attempts*100) : 0;
  const completed = Object.keys(state.completed||{}).length;
  const subjectRows = Object.values(SUBJECTS).map(s=>{
    const p = state.bySubject[s.id] || {attempts:0,correct:0};
    const pct = p.attempts ? Math.round(p.correct/p.attempts*100) : 0;
    return `<div class="report-card"><h3>${s.icon} ${esc(s.title)}</h3><div class="metric">${pct}%</div><p>ตอบถูก ${p.correct} จาก ${p.attempts} ข้อ</p><div class="subject-progress bar"><span style="width:${pct}%"></span></div></div>`;
  }).join('');
  app().innerHTML = `
    <div class="section-title"><div><p class="eyebrow">สำหรับผู้ปกครอง</p><h2>คุณแม่ดูผล</h2></div><button class="secondary-btn" data-reset-progress>ล้างผลบนเครื่องนี้</button></div>
    <section class="report-grid">
      <div class="report-card"><h3>⭐ ดาวสะสม</h3><div class="metric">${state.stars}</div><p>ได้ 1 ดาวเมื่อตอบถูก</p></div>
      <div class="report-card"><h3>🎯 ความแม่นยำ</h3><div class="metric">${accuracy}%</div><p>${state.correct} / ${state.attempts} ข้อ</p></div>
      <div class="report-card"><h3>📖 บทที่ทบทวน</h3><div class="metric">${completed}</div><p>ทำเครื่องหมายจากหน้าบทเรียน</p></div>
      ${subjectRows}
    </section>`;
}

function markComplete(id) {
  if (!state.completed[id]) { state.completed[id] = new Date().toISOString(); state.stars += 1; saveState(); }
  renderLesson(id);
}

function resetProgress() {
  if (!confirm('ล้างดาวและผลแบบทดสอบทั้งหมดบนอุปกรณ์นี้หรือไม่?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state.stars=0; state.attempts=0; state.correct=0; state.completed={}; state.bySubject={};
  saveState(); renderParent();
}

function handleClick(e) {
  const subjectBtn = e.target.closest('[data-open-subject]'); if (subjectBtn) return renderSubject(subjectBtn.dataset.openSubject);
  const lessonBtn = e.target.closest('[data-open-lesson]'); if (lessonBtn) return renderLesson(lessonBtn.dataset.openLesson);
  const lessonQuiz = e.target.closest('[data-lesson-quiz]'); if (lessonQuiz) return startQuiz(lessonQuiz.dataset.lessonQuiz);
  const complete = e.target.closest('[data-complete-lesson]'); if (complete) return markComplete(complete.dataset.completeLesson);
  const answer = e.target.closest('[data-answer]'); if (answer) return answerQuestion(answer.dataset.answer);
  const next = e.target.closest('[data-next-question]'); if (next) { quizIndex++; answered=false; return renderQuiz(); }
  const viewBtn = e.target.closest('[data-view-go]'); if (viewBtn) return goView(viewBtn.dataset.viewGo);
  const navSubject = e.target.closest('.nav-btn[data-subject]'); if (navSubject) return renderSubject(navSubject.dataset.subject);
  const navView = e.target.closest('.nav-btn[data-view]'); if (navView) return goView(navView.dataset.view);
  const reset = e.target.closest('[data-reset-progress]'); if (reset) return resetProgress();
}

function goView(view) {
  if (view==='home') return renderHome();
  if (view==='quiz') return startQuiz();
  if (view==='parent') return renderParent();
}

document.addEventListener('click', handleClick);
updateStars();
renderHome();
