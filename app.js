(() => {
  const groups = {
    "กลาง": [..."กจฎฏดตบปอ"],
    "สูง": [..."ขฃฉฐถผฝศษสห"],
    "ต่ำ": [..."คฅฆงชซฌญฑฒณทธนพฟภมยรลวฬฮ"]
  };
  const letterNames = {
    ก:"กอ ไก่",จ:"จอ จาน",ฎ:"ดอ ชฎา",ฏ:"ตอ ปฏัก",ด:"ดอ เด็ก",ต:"ตอ เต่า",บ:"บอ ใบไม้",ป:"ปอ ปลา",อ:"ออ อ่าง",
    ข:"ขอ ไข่",ฃ:"ขอ ขวด",ฉ:"ฉอ ฉิ่ง",ฐ:"ถอ ฐาน",ถ:"ถอ ถุง",ผ:"ผอ ผึ้ง",ฝ:"ฝอ ฝา",ศ:"สอ ศาลา",ษ:"สอ ฤๅษี",ส:"สอ เสือ",ห:"หอ หีบ",
    ค:"คอ ควาย",ฅ:"คอ คน",ฆ:"คอ ระฆัง",ง:"งอ งู",ช:"ชอ ช้าง",ซ:"ซอ โซ่",ฌ:"ชอ เฌอ",ญ:"ยอ หญิง",ฑ:"ทอ มณโฑ",ฒ:"ทอ ผู้เฒ่า",ณ:"นอ เณร",ท:"ทอ ทหาร",ธ:"ทอ ธง",น:"นอ หนู",พ:"พอ พาน",ฟ:"ฟอ ฟัน",ภ:"พอ สำเภา",ม:"มอ ม้า",ย:"ยอ ยักษ์",ร:"รอ เรือ",ล:"ลอ ลิง",ว:"วอ แหวน",ฬ:"ลอ จุฬา",ฮ:"ฮอ นกฮูก"
  };
  const toneItems = [
    {word:"กา",tone:"สามัญ"},{word:"ก่า",tone:"เอก"},{word:"ก้า",tone:"โท"},{word:"ก๊า",tone:"ตรี"},{word:"ก๋า",tone:"จัตวา"},
    {word:"จอง",tone:"สามัญ"},{word:"ป้อน",tone:"โท"},{word:"บ่อย",tone:"เอก"},{word:"บ้า",tone:"โท"},{word:"ตั๋ว",tone:"จัตวา"},
    {word:"อ่อน",tone:"เอก"},{word:"เต๋า",tone:"จัตวา"},{word:"ดาว",tone:"สามัญ"},{word:"เกี๊ยว",tone:"ตรี"},{word:"อิ่ม",tone:"เอก"},
    {word:"เดียว",tone:"สามัญ"},{word:"เดี่ยว",tone:"เอก"},{word:"เดี้ยว",tone:"โท"},{word:"เดี๊ยว",tone:"ตรี"},{word:"เดี๋ยว",tone:"จัตวา"},
    {word:"กง",tone:"สามัญ"},{word:"ก่ง",tone:"เอก"},{word:"ก้ง",tone:"โท"},{word:"ก๊ง",tone:"ตรี"},{word:"ก๋ง",tone:"จัตวา"},
    {word:"กาน",tone:"สามัญ"},{word:"ก่าน",tone:"เอก"},{word:"ก้าน",tone:"โท"},{word:"ก๊าน",tone:"ตรี"},{word:"ก๋าน",tone:"จัตวา"},
    {word:"จำปา",tone:"สามัญ"},{word:"เต่า",tone:"เอก"},{word:"เต้น",tone:"โท"},{word:"บ๊วย",tone:"ตรี"},{word:"ก๋วยเตี๋ยว",tone:"จัตวา"}
  ];
  const flashcardSets = [
    [
      {word:"โทรศัพท์",reading:"โท-ระ-สับ",karan:"พ์"},{word:"ชอล์ก",reading:"ช็อก",karan:"ก์"},{word:"รถเมล์",reading:"รด-เม",karan:"ล์"},{word:"มนุษย์",reading:"มะ-นุด",karan:"ย์"},{word:"เจดีย์",reading:"เจ-ดี",karan:"ย์"},
      {word:"สัตว์",reading:"สัด",karan:"ว์"},{word:"พระสงฆ์",reading:"พระ-สง",karan:"ฆ์"},{word:"การ์ตูน",reading:"กา-ตูน",karan:"ร์"},{word:"หนังสือพิมพ์",reading:"หนัง-สือ-พิม",karan:"พ์"},{word:"ซื่อสัตย์",reading:"ซื่อ-สัด",karan:"ย์"}
    ],
    [
      {word:"วันจันทร์",reading:"วัน-จัน",karan:"ร์"},{word:"วันอาทิตย์",reading:"วัน-อา-ทิด",karan:"ย์"},{word:"วันเสาร์",reading:"วัน-เสา",karan:"ร์"},{word:"สัปดาห์",reading:"สับ-ดา",karan:"ห์"},{word:"รถยนต์",reading:"รด-ยน",karan:"ต์"},
      {word:"เครื่องยนต์",reading:"เครื่อง-ยน",karan:"ต์"},{word:"ภาพยนตร์",reading:"พาบ-พะ-ยน",karan:"ร์"},{word:"ลิฟต์",reading:"ลิบ",karan:"ต์"},{word:"สตางค์",reading:"สะ-ตาง",karan:"ค์"},{word:"ไดโนเสาร์",reading:"ได-โน-เสา",karan:"ร์"}
    ],
    [
      {word:"แพทย์",reading:"แพด",karan:"ย์"},{word:"พิสูจน์",reading:"พิ-สูด",karan:"น์"},{word:"สงกรานต์",reading:"สง-กราน",karan:"ต์"},{word:"อัศจรรย์",reading:"อัด-สะ-จัน",karan:"ย์"},{word:"มหัศจรรย์",reading:"มะ-หัด-สะ-จัน",karan:"ย์"},{word:"วรรณยุกต์",reading:"วัน-นะ-ยุก",karan:"ต์"},
      {word:"วิทยาศาสตร์",reading:"วิด-ทะ-ยา-สาด",karan:"ร์"},{word:"ภูมิศาสตร์",reading:"พู-มิ-สาด",karan:"ร์"},{word:"ดาราศาสตร์",reading:"ดา-รา-สาด",karan:"ร์"},{word:"สัมภาษณ์",reading:"สำ-พาด",karan:"ณ์"},{word:"ยักษ์",reading:"ยัก",karan:"ษ์"},{word:"ประโยชน์",reading:"ประ-โหยด",karan:"น์"},
      {word:"ครรภ์",reading:"คัน",karan:"ภ์"},{word:"ขรรค์",reading:"ขัน",karan:"ค์"},{word:"เวทมนตร์",reading:"เวด-มน",karan:"ร์"},{word:"อัฒจันทร์",reading:"อัด-ทะ-จัน",karan:"ร์"},{word:"ปัญหาเชาวน์",reading:"ปัน-หา-เชา",karan:"น์"},{word:"พราหมณ์",reading:"พราม",karan:"ณ์"}
    ],
    [
      {word:"สิงห์บุรี",reading:"สิง-บุ-รี",karan:"ห์"},{word:"อุตรดิตถ์",reading:"อุด-ตะ-ระ-ดิด",karan:"ถ์"},{word:"บุรีรัมย์",reading:"บุ-รี-รำ",karan:"ย์"},{word:"สุราษฎร์ธานี",reading:"สุ-ราด-ทา-นี",karan:"ร์"},{word:"ประจวบคีรีขันธ์",reading:"ประ-จวบ-คี-รี-ขัน",karan:"ธ์"}
    ],
    [
      {word:"โจทย์ปัญหา",reading:"โจด-ปัน-หา",karan:"ย์"},{word:"โทรทัศน์",reading:"โท-ระ-ทัด",karan:"น์"},{word:"ความสัมพันธ์",reading:"ความ-สำ-พัน",karan:"ธ์"},{word:"พันธุ์พืช",reading:"พัน-พืด",karan:"ธุ์"},{word:"บริสุทธิ์",reading:"บอ-ริ-สุด",karan:"ธิ์"},{word:"ผลิตภัณฑ์",reading:"ผะ-หลิด-ตะ-พัน",karan:"ฑ์"},
      {word:"คำศัพท์",reading:"คำ-สับ",karan:"พ์"},{word:"รามเกียรติ์",reading:"ราม-มะ-เกียน",karan:"ติ์"},{word:"วัดโพธิ์",reading:"วัด-โพ",karan:"ธิ์"},{word:"ศักดิ์สิทธิ์",reading:"สัก-สิด",karan:"ดิ์ และ ธิ์"},{word:"ดวงจันทร์",reading:"ดวง-จัน",karan:"ร์"}
    ]
  ];
  const visualSheets = [
    {file:"sheet-1.png",crop:300,rowStep:384,words:["หนังสือพิมพ์","ซื่อสัตย์","วันจันทร์","วันอาทิตย์","วันเสาร์","สัปดาห์","รถยนต์","เครื่องยนต์"]},
    {file:"sheet-2.png",crop:300,rowStep:384,words:["ภาพยนตร์","ลิฟต์","สตางค์","ไดโนเสาร์","แพทย์","พิสูจน์","สงกรานต์","อัศจรรย์"]},
    {file:"sheet-3.png",crop:300,rowStep:384,words:["ครรภ์","ขรรค์","เวทมนตร์","อัฒจันทร์","ปัญหาเชาวน์","พราหมณ์","สิงห์บุรี","อุตรดิตถ์"]},
    {file:"sheet-4.png",crop:300,rowStep:384,words:["มหัศจรรย์","วรรณยุกต์","วิทยาศาสตร์","ภูมิศาสตร์","ดาราศาสตร์","สัมภาษณ์","ยักษ์","ประโยชน์"]},
    {file:"sheet-5.png",crop:300,rowStep:384,words:["โทรศัพท์","ชอล์ก","รถเมล์","มนุษย์","เจดีย์","สัตว์","พระสงฆ์","การ์ตูน"]},
    {file:"sheet-6.png",crop:300,rowStep:384,words:["บุรีรัมย์","สุราษฎร์ธานี","ประจวบคีรีขันธ์","โจทย์ปัญหา","โทรทัศน์","ความสัมพันธ์","พันธุ์พืช","บริสุทธิ์"]},
    {file:"sheet-7.png",crop:385,rowStep:512,words:["ผลิตภัณฑ์","คำศัพท์","รามเกียรติ์","วัดโพธิ์","ศักดิ์สิทธิ์","ดวงจันทร์"]}
  ];
  const wordVisuals = {};
  visualSheets.forEach(sheet=>sheet.words.forEach((word,index)=>{
    const row=Math.floor(index/2),col=index%2;
    wordVisuals[word]={file:sheet.file,crop:sheet.crop,col,rowStart:row*sheet.rowStep};
  }));
  const karanItems = flashcardSets.flat().filter(item => item.karan !== "ดิ์ และ ธิ์");
  const karanOptions = ["พ์","ก์","ล์","ย์","ว์","ฆ์","ร์","ห์","ต์","ค์","น์","ษ์","ภ์","ณ์","ถ์","ธ์","ฑ์","ติ์","ธุ์","ธิ์"];
  const toneOptions = ["สามัญ","เอก","โท","ตรี","จัตวา"];
  const allLetters = Object.entries(groups).flatMap(([group,letters]) => letters.map(letter => ({letter,group})));
  const classWordItems = [
    {word:"ภูเขา",blank:"ภูเ_า",fill:"ข",initial:"ภ",group:"ต่ำ"},{word:"ผลไม้",blank:"_ลไม้",fill:"ผ",initial:"ผ",group:"สูง"},{word:"ผีเสื้อ",blank:"_ีเสื้อ",fill:"ผ",initial:"ผ",group:"สูง"},{word:"ถุงเท้า",blank:"_ุงเท้า",fill:"ถ",initial:"ถ",group:"สูง"},{word:"ข้าวโพด",blank:"_้าวโพด",fill:"ข",initial:"ข",group:"สูง"},
    {word:"ถั่ว",blank:"_ั่ว",fill:"ถ",initial:"ถ",group:"สูง"},{word:"เสือ",blank:"_ือ",fill:"ส",initial:"ส",group:"สูง"},{word:"หัวใจ",blank:"_ัวใจ",fill:"ห",initial:"ห",group:"สูง"},{word:"ศาลา",blank:"_าลา",fill:"ศ",initial:"ศ",group:"สูง"},{word:"ฝา",blank:"_า",fill:"ฝ",initial:"ฝ",group:"สูง"},
    {word:"ธรรมะ",initial:"ธ",group:"ต่ำ"},{word:"น้ำตาล",initial:"น",group:"ต่ำ"},{word:"ทบทวน",initial:"ท",group:"ต่ำ"},{word:"ซ้อม",initial:"ซ",group:"ต่ำ"},{word:"ธรรมชาติ",initial:"ธ",group:"ต่ำ"},
    {word:"จำปา",initial:"จ",group:"กลาง"},{word:"เต่า",initial:"ต",group:"กลาง"},{word:"เต้น",initial:"ต",group:"กลาง"},{word:"บ๊วย",initial:"บ",group:"กลาง"},{word:"ก๋วยเตี๋ยว",initial:"ก",group:"กลาง"}
  ];
  const theoryQuizItems = [
    {prompt:"ไตรยางศ์แบ่งพยัญชนะไทยเป็นกี่หมู่?",subject:"อักษรสูง · อักษรกลาง · อักษรต่ำ",correct:"3 หมู่",options:["2 หมู่","3 หมู่","5 หมู่"],explanation:"ไตรยางศ์แบ่งพยัญชนะเป็น 3 หมู่ คือ อักษรสูง อักษรกลาง และอักษรต่ำ"},
    {prompt:"อักษรกลางมีทั้งหมดกี่ตัว?",subject:"ก จ ฎ ฏ ด ต บ ป อ",correct:"9 ตัว",options:["9 ตัว","11 ตัว","24 ตัว"],explanation:"อักษรกลางมี 9 ตัว ได้แก่ ก จ ฎ ฏ ด ต บ ป อ"},
    {prompt:"อักษรสูงมีทั้งหมดกี่ตัว?",subject:"ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",correct:"11 ตัว",options:["9 ตัว","11 ตัว","24 ตัว"],explanation:"อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห"},
    {prompt:"อักษรต่ำมีทั้งหมดกี่ตัว?",subject:"ต่ำคู่ 14 ตัว + ต่ำเดี่ยว 10 ตัว",correct:"24 ตัว",options:["14 ตัว","20 ตัว","24 ตัว"],explanation:"อักษรต่ำมี 24 ตัว แบ่งเป็นอักษรต่ำคู่ 14 ตัว และอักษรต่ำเดี่ยว 10 ตัว"},
    {prompt:"ชุดใดเป็นอักษรกลางทั้งหมด?",subject:"เลือกคำตอบที่ถูกต้อง",correct:"ก จ ด ต บ ป อ",options:["ก จ ด ต บ ป อ","ข ฉ ถ ผ ฝ ส ห","ค ง ช น ม ร ว"],explanation:"ก จ ด ต บ ป อ เป็นอักษรกลางทั้งหมด"},
    {prompt:"อักษรกลางคำเป็นผันวรรณยุกต์ได้กี่เสียง?",subject:"กา · ก่า · ก้า · ก๊า · ก๋า",correct:"5 เสียง",options:["3 เสียง","4 เสียง","5 เสียง"],explanation:"อักษรกลางคำเป็นผันได้ครบ 5 เสียง ได้แก่ สามัญ เอก โท ตรี และจัตวา"},
    {prompt:"รูปวรรณยุกต์ใดทำให้อักษรกลางเป็นเสียงเอก?",subject:"ก_า",correct:"ไม้เอก ่",options:["ไม้เอก ่","ไม้โท ้","ไม้ตรี ๊"],explanation:"อักษรกลางคำเป็นเมื่อใส่ไม้เอกจะเป็นเสียงเอก เช่น ก่า"},
    {prompt:"รูปวรรณยุกต์ใดทำให้อักษรกลางเป็นเสียงจัตวา?",subject:"ก_า",correct:"ไม้จัตวา ๋",options:["ไม้โท ้","ไม้ตรี ๊","ไม้จัตวา ๋"],explanation:"อักษรกลางคำเป็นเมื่อใส่ไม้จัตวาจะเป็นเสียงจัตวา เช่น ก๋า"}
  ];
  const worksheetChoiceItems = [
    {prompt:"คำใดมีพยัญชนะต้นเป็นอักษรกลางและมีเสียงสามัญ?",subject:"เลือกคำให้ตรงกับโจทย์",correct:"จำปา",options:["จำปา","เฟื่องฟ้า","มะลิ"],explanation:"จำปา ขึ้นต้นด้วย จ ซึ่งเป็นอักษรกลาง และพยางค์ “จำ” เป็นเสียงสามัญ"},
    {prompt:"คำใดมีพยัญชนะต้นเป็นอักษรกลางและมีเสียงเอก?",subject:"เลือกคำให้ตรงกับโจทย์",correct:"เต่า",options:["กุ้ง","ผึ้ง","เต่า"],explanation:"เต่า ขึ้นต้นด้วย ต ซึ่งเป็นอักษรกลาง และมีไม้เอก จึงเป็นเสียงเอก"},
    {prompt:"คำใดมีพยัญชนะต้นเป็นอักษรกลางและมีเสียงโท?",subject:"เลือกคำให้ตรงกับโจทย์",correct:"เต้น",options:["เต้น","อ่าน","เดิน"],explanation:"เต้น ขึ้นต้นด้วย ต ซึ่งเป็นอักษรกลาง และมีไม้โท จึงเป็นเสียงโท"},
    {prompt:"คำใดมีพยัญชนะต้นเป็นอักษรกลางและมีเสียงตรี?",subject:"เลือกคำให้ตรงกับโจทย์",correct:"บ๊วย",options:["ข้าว","ย่า","บ๊วย"],explanation:"บ๊วย ขึ้นต้นด้วย บ ซึ่งเป็นอักษรกลาง และมีไม้ตรี จึงเป็นเสียงตรี"},
    {prompt:"คำใดมีพยัญชนะต้นเป็นอักษรกลางและมีเสียงจัตวา?",subject:"เลือกคำให้ตรงกับโจทย์",correct:"ก๋วยเตี๋ยว",options:["ส้มตำ","ก๋วยเตี๋ยว","ไก่ย่าง"],explanation:"ก๋วยเตี๋ยว ขึ้นต้นด้วย ก ซึ่งเป็นอักษรกลาง และมีไม้จัตวา จึงเป็นเสียงจัตวา"},
    {prompt:"คำใดมีเสียงวรรณยุกต์เหมือนคำว่า “กุ้งเต้น”?",subject:"กุ้งเต้น",correct:"เก้าอี้",options:["ไข่ลวก","เก้าอี้","แม่ค้า"],explanation:"กุ้ง–เต้น และ เก้า–อี้ ออกเสียงโทเหมือนกันทั้งสองพยางค์"},
    {prompt:"ข้อใดผันวรรณยุกต์แล้วมีความหมายทุกคำ?",subject:"เลือกชุดคำ",correct:"ปา ป่า ป้า ป๊า ป๋า",options:["ปา ป่า ป้า ป๊า ป๋า","คา ค่า ค้า ค๊า ค๋า","กา ก่า ก้า ก๊า ก๋า"],explanation:"ปา ป่า ป้า ป๊า และป๋า เป็นคำที่มีความหมายครบทั้ง 5 เสียง"},
    {prompt:"เติมคำให้ประโยคได้ใจความเหมาะสม",subject:"ทำ ______ ให้ดีที่สุด",correct:"ปัจจุบัน",options:["พรุ่งนี้","วันนี้","ปัจจุบัน"],explanation:"ประโยคที่สมบูรณ์คือ “ทำปัจจุบันให้ดีที่สุด”"},
    {prompt:"เครื่องหมาย ์ เรียกว่าอะไร?",subject:"์",correct:"ไม้ทัณฑฆาต",options:["ไม้เอก","ไม้ทัณฑฆาต","ไม้จัตวา"],explanation:"เครื่องหมาย ์ เรียกว่าไม้ทัณฑฆาต ใช้กำกับตัวอักษรที่ไม่ออกเสียง"},
    {prompt:"ตัวอักษรที่มีเครื่องหมาย ์ กำกับเรียกว่าอะไร?",subject:"พ์ · ร์ · ย์",correct:"ตัวการันต์",options:["ตัวสะกด","ตัวควบกล้ำ","ตัวการันต์"],explanation:"ตัวอักษรที่มีไม้ทัณฑฆาตกำกับเรียกว่า “ตัวการันต์” และไม่ออกเสียงตัวนั้น"}
  ];
  const sentenceQuizItems = [
    {prompt:"เลือกคำที่ขึ้นต้นด้วยอักษรต่ำ เติมให้ประโยคสมบูรณ์",subject:"คุณยายฟัง ______ ที่วัดทุกวันพระ",correct:"ธรรมะ",options:["ธรรมะ","สวดมนต์","เพลง"],explanation:"ธรรมะ ขึ้นต้นด้วย ธ ซึ่งเป็นอักษรต่ำ ประโยคคือ “คุณยายฟังธรรมะที่วัดทุกวันพระ”"},
    {prompt:"เลือกคำที่ขึ้นต้นด้วยอักษรต่ำ เติมให้ประโยคสมบูรณ์",subject:"ฉันชอบน้ำแข็งใสที่มี ______ หลายสี",correct:"น้ำตาล",options:["น้ำตาล","ผลไม้","ขนม"],explanation:"น้ำตาล ขึ้นต้นด้วย น ซึ่งเป็นอักษรต่ำ"},
    {prompt:"เลือกคำที่ขึ้นต้นด้วยอักษรต่ำ เติมให้ประโยคสมบูรณ์",subject:"นักเรียนควร ______ บทเรียนอย่างสม่ำเสมอ",correct:"ทบทวน",options:["ทบทวน","อ่าน","เขียน"],explanation:"ทบทวน ขึ้นต้นด้วย ท ซึ่งเป็นอักษรต่ำ"},
    {prompt:"เลือกคำที่ขึ้นต้นด้วยอักษรต่ำ เติมให้ประโยคสมบูรณ์",subject:"พี่ฝึก ______ ตีกลองทุกวันหลังเลิกเรียน",correct:"ซ้อม",options:["ซ้อม","ตี","ฝึก"],explanation:"ซ้อม ขึ้นต้นด้วย ซ ซึ่งเป็นอักษรต่ำ"},
    {prompt:"เลือกคำที่ขึ้นต้นด้วยอักษรต่ำ เติมให้ประโยคสมบูรณ์",subject:"คุณพ่อศึกษาเส้นทาง ______ ที่เขาใหญ่",correct:"ธรรมชาติ",options:["ธรรมชาติ","ป่าเขา","กลางแจ้ง"],explanation:"ธรรมชาติ ขึ้นต้นด้วย ธ ซึ่งเป็นอักษรต่ำ"}
  ];
  const multiSelectQuizItems = [
    {prompt:"เลือกพยัญชนะที่เป็นอักษรกลางทั้งหมด",subject:"แตะได้มากกว่า 1 ตัว",multi:true,correct:["ก","จ","ด","ป","อ"],options:["ก","ข","จ","ด","ม","ป","ส","อ"],explanation:"อักษรกลางในชุดนี้คือ ก จ ด ป และ อ"},
    {prompt:"เลือกพยัญชนะที่เป็นอักษรสูงทั้งหมด",subject:"แตะได้มากกว่า 1 ตัว",multi:true,correct:["ข","ฉ","ผ","ส","ห"],options:["ข","ค","ฉ","ผ","ม","ส","ห","ฮ"],explanation:"อักษรสูงในชุดนี้คือ ข ฉ ผ ส และ ห"},
    {prompt:"เลือกพยัญชนะที่เป็นอักษรต่ำทั้งหมด",subject:"แตะได้มากกว่า 1 ตัว",multi:true,correct:["ค","ง","ช","ม","ร"],options:["ก","ค","ง","จ","ช","ผ","ม","ร"],explanation:"อักษรต่ำในชุดนี้คือ ค ง ช ม และ ร"},
    {prompt:"เลือกคำที่มีพยัญชนะต้นเป็นอักษรกลางทั้งหมด",subject:"แตะได้มากกว่า 1 คำ",multi:true,correct:["ไก่","จาน","เต่า","ปลา"],options:["ไก่","จาน","เต่า","ปลา","เสือ","ม้า"],explanation:"ไก่–ก จาน–จ เต่า–ต และ ปลา–ป ขึ้นต้นด้วยอักษรกลาง"},
    {prompt:"เลือกคำที่มีพยัญชนะต้นเป็นอักษรสูงทั้งหมด",subject:"แตะได้มากกว่า 1 คำ",multi:true,correct:["ไข่","ฉิ่ง","ถุง","ฝา"],options:["ไข่","ฉิ่ง","ถุง","ฝา","จาน","ลิง"],explanation:"ไข่–ข ฉิ่ง–ฉ ถุง–ถ และ ฝา–ฝ ขึ้นต้นด้วยอักษรสูง"}
  ];
  const socialItems = [
    {topic:"time",level:"ฝึกจำ",icon:"🕰️",prompt:"คำว่า “เมื่อวานนี้” บอกช่วงเวลาใด?",subject:"เมื่อวานนี้ ฉันกลับมาจากสนามเด็กเล่น",correct:"อดีต",options:["อดีต","ปัจจุบัน","อนาคต"],explanation:"เมื่อวานนี้เป็นเวลาที่ผ่านไปแล้ว จึงเป็นอดีต"},
    {topic:"time",level:"ฝึกเข้าใจ",icon:"✏️",prompt:"เหตุการณ์นี้อยู่ในช่วงเวลาใด?",subject:"ตอนนี้ฉันกำลังท่องสูตรคูณ",correct:"ปัจจุบัน",options:["อดีต","ปัจจุบัน","อนาคต"],explanation:"คำว่า “ตอนนี้” และ “กำลัง” บอกว่าเหตุการณ์เกิดขึ้นในปัจจุบัน"},
    {topic:"time",level:"ฝึกเข้าใจ",icon:"🏃",prompt:"เหตุการณ์นี้อยู่ในช่วงเวลาใด?",subject:"สัปดาห์หน้าโรงเรียนจะจัดกิจกรรมกีฬา",correct:"อนาคต",options:["อดีต","ปัจจุบัน","อนาคต"],explanation:"สัปดาห์หน้ายังมาไม่ถึง จึงเป็นอนาคต"},
    {topic:"time",level:"ฝึกจำ",icon:"⏪",prompt:"เลือกคำบอกเวลาที่เป็นอดีตทั้งหมด",subject:"แตะทุกคำที่หมายถึงเวลาที่ผ่านไปแล้ว",multi:true,correct:["เมื่อวานนี้","เดือนก่อน","ปีที่แล้ว"],options:["เมื่อวานนี้","วันนี้","เดือนก่อน","ปีนี้","ปีที่แล้ว","พรุ่งนี้"],explanation:"เมื่อวานนี้ เดือนก่อน และปีที่แล้ว ล้วนเป็นเวลาที่ผ่านไปแล้ว"},
    {topic:"time",level:"ฝึกจำ",icon:"▶️",prompt:"เลือกคำบอกเวลาที่เป็นปัจจุบันทั้งหมด",subject:"แตะทุกคำที่บอกสิ่งที่กำลังเกิดขึ้น",multi:true,correct:["วันนี้","ตอนนี้","ปีนี้"],options:["วันนี้","ตอนนี้","สัปดาห์ที่แล้ว","ปีนี้","เดือนหน้า","พรุ่งนี้"],explanation:"วันนี้ ตอนนี้ และปีนี้ เป็นคำบอกช่วงเวลาปัจจุบัน"},
    {topic:"time",level:"ฝึกจำ",icon:"⏩",prompt:"เลือกคำบอกเวลาที่เป็นอนาคตทั้งหมด",subject:"แตะทุกคำที่หมายถึงเวลาที่ยังมาไม่ถึง",multi:true,correct:["พรุ่งนี้","สัปดาห์หน้า","ปีหน้า"],options:["เมื่อก่อน","พรุ่งนี้","สัปดาห์หน้า","เดือนนี้","ปีหน้า","วานซืน"],explanation:"พรุ่งนี้ สัปดาห์หน้า และปีหน้า ยังมาไม่ถึง จึงเป็นอนาคต"},
    {topic:"time",level:"ฝึกคิดวิเคราะห์",icon:"🧩",prompt:"ข้อใดต่างจากข้ออื่น เพราะเป็นเหตุการณ์ในอนาคต?",subject:"อ่านคำบอกเวลาและการกระทำให้ครบก่อนเลือก",correct:"พรุ่งนี้ฉันมีเรียนพิเศษ",options:["พรุ่งนี้ฉันมีเรียนพิเศษ","ตอนนี้คุณแม่กำลังทำกับข้าว","พี่สาวทำการบ้านอยู่ในขณะนี้"],explanation:"ข้อแรกมีคำว่า “พรุ่งนี้” จึงเป็นอนาคต ส่วนอีกสองข้อมี “ตอนนี้/ขณะนี้” จึงเป็นปัจจุบัน"},
    {topic:"time",level:"ฝึกคิดวิเคราะห์",icon:"🛏️",prompt:"ลำดับกิจวัตรตอนเช้าข้อใดสมเหตุสมผลที่สุด?",subject:"คิดว่าอะไรควรเกิดก่อนและหลัง",correct:"ตื่นนอน → แปรงฟัน → กินข้าว → ไปโรงเรียน",options:["ไปโรงเรียน → ตื่นนอน → กินข้าว → แปรงฟัน","ตื่นนอน → แปรงฟัน → กินข้าว → ไปโรงเรียน","กินข้าว → ไปโรงเรียน → ตื่นนอน → แปรงฟัน"],explanation:"เราต้องตื่นนอนก่อน แล้วดูแลตนเอง กินอาหาร และจึงเดินทางไปโรงเรียน"},
    {topic:"time",level:"ฝึกประยุกต์",icon:"📆",prompt:"ถ้าวันนี้เป็นวันพุธ “วันมะรืนนี้” คือวันอะไร?",subject:"พรุ่งนี้เลื่อนไป 1 วัน และมะรืนนี้เลื่อนไป 2 วัน",correct:"วันศุกร์",options:["วันพฤหัสบดี","วันศุกร์","วันเสาร์"],explanation:"ถ้าวันนี้วันพุธ พรุ่งนี้คือวันพฤหัสบดี และมะรืนนี้คือวันศุกร์"},
    {topic:"time",level:"ฝึกคิดวิเคราะห์",icon:"🚩",prompt:"เหตุการณ์ใดจะเกิดขึ้นเป็นลำดับสุดท้าย?",subject:"เมื่อวานฉันไปตลาด · ตอนนี้ฉันอ่านหนังสือ · สัปดาห์หน้าฉันจะไปทัศนศึกษา",correct:"ไปทัศนศึกษา",options:["ไปตลาด","อ่านหนังสือ","ไปทัศนศึกษา"],explanation:"สัปดาห์หน้าอยู่ในอนาคต จึงเกิดหลังเหตุการณ์เมื่อวานและตอนนี้"},

    {topic:"calendar",level:"ฝึกเข้าใจ",icon:"📅",prompt:"ปฏิทินช่วยเราเรื่องใดได้บ้าง?",subject:"เลือกประโยชน์ของปฏิทินให้ครบ",multi:true,correct:["บอกวัน เดือน และปี","เตือนวันนัดหมาย","วางแผนกิจกรรม"],options:["บอกวัน เดือน และปี","เตือนวันนัดหมาย","วางแผนกิจกรรม","บอกน้ำหนักตัว"],explanation:"ปฏิทินใช้บอกวัน เดือน ปี เตือนความจำ และช่วยวางแผนกิจกรรม"},
    {topic:"calendar",level:"ฝึกจำ",icon:"🎉",prompt:"วันขึ้นปีใหม่ตรงกับวันที่เท่าไร?",subject:"วันเริ่มต้นปีปฏิทินใหม่",correct:"1 มกราคม",options:["1 มกราคม","13 เมษายน","31 ธันวาคม"],explanation:"วันขึ้นปีใหม่ตรงกับวันที่ 1 มกราคมของทุกปี"},
    {topic:"calendar",level:"ฝึกจำ",icon:"🧒",prompt:"วันเด็กแห่งชาติตรงกับวันใด?",subject:"ดูรูปแบบวันที่ ไม่ได้กำหนดเป็นเลขวันที่เดียวทุกปี",correct:"วันเสาร์ที่ 2 ของเดือนมกราคม",options:["วันเสาร์ที่ 1 ของเดือนมกราคม","วันเสาร์ที่ 2 ของเดือนมกราคม","วันอาทิตย์ที่ 2 ของเดือนมกราคม"],explanation:"วันเด็กแห่งชาติตรงกับวันเสาร์ที่ 2 ของเดือนมกราคม"},
    {topic:"calendar",level:"ฝึกจำ",icon:"💦",prompt:"ประเพณีสงกรานต์อยู่ในช่วงวันที่ใด?",subject:"ประเพณีปีใหม่ไทยที่มีการเล่นสาดน้ำ",correct:"13–15 เมษายน",options:["1–3 มกราคม","13–15 เมษายน","10–12 ธันวาคม"],explanation:"วันสงกรานต์อยู่ระหว่างวันที่ 13–15 เมษายน"},
    {topic:"calendar",level:"ฝึกประยุกต์",icon:"💙",prompt:"มาริซ่าอยากเตรียมการ์ดให้คุณแม่ในวันแม่แห่งชาติ ควรบันทึกวันใดในปฏิทิน?",subject:"เลือกวันที่ของวันแม่แห่งชาติ",correct:"12 สิงหาคม",options:["6 เมษายน","12 สิงหาคม","10 ธันวาคม"],explanation:"วันที่ 12 สิงหาคมเป็นวันเฉลิมพระชนมพรรษาสมเด็จพระบรมราชชนนีพันปีหลวงและวันแม่แห่งชาติ"},
    {topic:"calendar",level:"ฝึกจำ",icon:"🏛️",prompt:"วันรัฐธรรมนูญตรงกับวันที่เท่าไร?",subject:"วันที่ระลึกถึงการพระราชทานรัฐธรรมนูญ",correct:"10 ธันวาคม",options:["5 ธันวาคม","10 ธันวาคม","31 ธันวาคม"],explanation:"วันรัฐธรรมนูญตรงกับวันที่ 10 ธันวาคมของทุกปี"},
    {topic:"calendar",level:"ฝึกเข้าใจ",icon:"🕯️",prompt:"กิจกรรมใดเหมาะกับวันวิสาขบูชา?",subject:"เลือกกิจกรรมทางพระพุทธศาสนาให้ครบ",multi:true,correct:["ตักบาตร","ฟังธรรม","เวียนเทียน"],options:["ตักบาตร","ฟังธรรม","เวียนเทียน","เล่นสาดน้ำ"],explanation:"ชาวพุทธนิยมตักบาตร ฟังธรรม และเวียนเทียนในวันวิสาขบูชา ส่วนการเล่นสาดน้ำเป็นกิจกรรมของสงกรานต์"},
    {topic:"calendar",level:"ฝึกจำ",icon:"🌕",prompt:"วันลอยกระทงตรงกับวันใดตามปฏิทินจันทรคติ?",subject:"คืนพระจันทร์เต็มดวงในเดือน 12",correct:"วันขึ้น 15 ค่ำ เดือน 12",options:["วันขึ้น 15 ค่ำ เดือน 6","วันแรม 1 ค่ำ เดือน 8","วันขึ้น 15 ค่ำ เดือน 12"],explanation:"วันลอยกระทงตรงกับวันขึ้น 15 ค่ำ เดือน 12"},
    {topic:"calendar",level:"ฝึกคิดวิเคราะห์",icon:"🔔",prompt:"ถ้ามีนัดทำฟันเดือนหน้า วิธีใดช่วยไม่ให้ลืมได้ดีที่สุด?",subject:"คิดถึงการใช้ปฏิทินเป็นเครื่องมือเตือนความจำ",correct:"จดวันและเวลาไว้ในปฏิทิน",options:["รอให้เพื่อนเตือน","จดวันและเวลาไว้ในปฏิทิน","จำไว้ในใจอย่างเดียว"],explanation:"การจดวันและเวลาไว้ในปฏิทินช่วยเตือนความจำและช่วยวางแผนล่วงหน้า"},
    {topic:"calendar",level:"ฝึกคิดวิเคราะห์",icon:"🗓️",prompt:"ข้อใดเรียงวันสำคัญตามลำดับในหนึ่งปีได้ถูกต้อง?",subject:"เริ่มจากเดือนมกราคมไปถึงเดือนธันวาคม",correct:"วันขึ้นปีใหม่ → วันจักรี → วันสงกรานต์ → วันรัฐธรรมนูญ",options:["วันสงกรานต์ → วันขึ้นปีใหม่ → วันรัฐธรรมนูญ → วันจักรี","วันขึ้นปีใหม่ → วันจักรี → วันสงกรานต์ → วันรัฐธรรมนูญ","วันรัฐธรรมนูญ → วันสงกรานต์ → วันจักรี → วันขึ้นปีใหม่"],explanation:"1 ม.ค. มาก่อน 6 เม.ย. จากนั้น 13–15 เม.ย. และ 10 ธ.ค. อยู่ท้ายปี"},
    {topic:"calendar",level:"ฝึกจำ",icon:"👨",prompt:"จากปฏิทินเดือนธันวาคม วันพ่อแห่งชาติอยู่วันที่เท่าไร?",subject:"เดือนธันวาคม พ.ศ. 2568",correct:"5 ธันวาคม",options:["5 ธันวาคม","10 ธันวาคม","25 ธันวาคม"],explanation:"วันพ่อแห่งชาติตรงกับวันที่ 5 ธันวาคม"},
    {topic:"calendar",level:"ฝึกเข้าใจ",icon:"🪷",prompt:"ข้อใดจับคู่วันสำคัญทางพระพุทธศาสนาได้ถูกต้อง?",subject:"สังเกตเดือนตามจันทรคติ",correct:"วันวิสาขบูชา — ขึ้น 15 ค่ำ เดือน 6",options:["วันวิสาขบูชา — ขึ้น 15 ค่ำ เดือน 6","วันมาฆบูชา — ขึ้น 15 ค่ำ เดือน 12","วันเข้าพรรษา — ขึ้น 15 ค่ำ เดือน 3"],explanation:"วันวิสาขบูชาตรงกับวันขึ้น 15 ค่ำ เดือน 6; วันมาฆบูชาคือขึ้น 15 ค่ำ เดือน 3 และวันเข้าพรรษาคือแรม 1 ค่ำ เดือน 8"},

    {topic:"evidence",level:"ฝึกจำ",icon:"👵",prompt:"ถ้าอยากรู้เรื่องวัยเด็กของคุณตา วิธีใดเหมาะที่สุด?",subject:"เลือกแหล่งข้อมูลที่อยู่ในเหตุการณ์หรือใกล้ชิดเหตุการณ์",correct:"สอบถามคุณตาหรือผู้ใหญ่ในครอบครัว",options:["เดาเองจากอายุ","สอบถามคุณตาหรือผู้ใหญ่ในครอบครัว","ถามเพื่อนที่โรงเรียน"],explanation:"ผู้ใหญ่ในครอบครัวสามารถถ่ายทอดประสบการณ์และรายละเอียดของเหตุการณ์ที่ผ่านมาได้"},
    {topic:"evidence",level:"ฝึกเข้าใจ",icon:"📷",prompt:"ภาพถ่ายเก่าช่วยให้เรารู้อะไรได้ดีที่สุด?",subject:"ภาพการตั้งบ้านเรือนริมแม่น้ำ",correct:"สภาพบ้านเรือนและวิถีชีวิตในอดีต",options:["สภาพบ้านเรือนและวิถีชีวิตในอดีต","เวลาเกิดที่แน่นอนของทุกคน","เหตุการณ์ในอนาคต"],explanation:"ภาพถ่ายบันทึกสภาพของสถานที่ ผู้คน หรือเหตุการณ์ในอดีตให้เราสังเกตได้"},
    {topic:"evidence",level:"ฝึกจำ",icon:"📜",prompt:"เอกสารใดเหมาะที่สุดสำหรับตรวจสอบวัน เวลา และสถานที่เกิด?",subject:"ต้องการข้อมูลการเกิดที่ทางราชการบันทึกไว้",correct:"สูติบัตร (ใบเกิด)",options:["สูติบัตร (ใบเกิด)","ภาพวาด","ปฏิทินตั้งโต๊ะ"],explanation:"สูติบัตรเป็นเอกสารราชการที่บันทึกวัน เวลา สถานที่เกิด และข้อมูลบิดามารดา"},
    {topic:"evidence",level:"ฝึกจำ",icon:"🏠",prompt:"เอกสารใดบอกรายละเอียดที่ตั้งบ้านและสมาชิกในบ้าน?",subject:"มีข้อมูลชื่อสมาชิกและเลขประจำตัวประชาชน",correct:"ทะเบียนบ้าน",options:["สูติบัตร","ทะเบียนบ้าน","สมุดวาดภาพ"],explanation:"ทะเบียนบ้านเป็นเอกสารราชการที่มีรายละเอียดที่ตั้งบ้านและสมาชิกในบ้าน"},
    {topic:"evidence",level:"ฝึกเข้าใจ",icon:"🧰",prompt:"เลือกหลักฐานที่ใช้สืบค้นเรื่องราวของครอบครัวได้ทั้งหมด",subject:"นักสืบที่ดีใช้ข้อมูลหลายชนิดประกอบกัน",multi:true,correct:["คำบอกเล่าของผู้ใหญ่","ภาพถ่ายเก่า","สูติบัตร","ทะเบียนบ้าน"],options:["คำบอกเล่าของผู้ใหญ่","ภาพถ่ายเก่า","สูติบัตร","ทะเบียนบ้าน","นิทานที่แต่งขึ้น"],explanation:"คำบอกเล่า ภาพถ่าย และเอกสารราชการล้วนช่วยค้นหาอดีตได้ ส่วนเรื่องแต่งไม่ใช่หลักฐานของครอบครัว"},
    {topic:"evidence",level:"ฝึกคิดวิเคราะห์",icon:"✅",prompt:"นักสืบตัวน้อยควรทำอย่างไรให้ข้อมูลน่าเชื่อถือขึ้น?",subject:"คุณยายจำปีได้ไม่แน่ใจ แต่มีภาพถ่ายและเอกสารเก็บไว้",correct:"เปรียบเทียบคำบอกเล่ากับภาพถ่ายและเอกสาร",options:["เชื่อข้อมูลแรกทันที","เปรียบเทียบคำบอกเล่ากับภาพถ่ายและเอกสาร","เลือกคำตอบที่ชอบที่สุด"],explanation:"การตรวจสอบข้อมูลจากหลักฐานหลายแหล่งช่วยให้เรื่องราวถูกต้องและน่าเชื่อถือมากขึ้น"},
    {topic:"evidence",level:"ฝึกคิดวิเคราะห์",icon:"🔍",prompt:"ข้อใดเป็นข้อจำกัดของภาพถ่ายเก่า?",subject:"ภาพหนึ่งภาพอาจแสดงสิ่งที่เห็น แต่ไม่ได้บอกทุกอย่าง",correct:"อาจไม่ทราบวันหรือเรื่องราวทั้งหมดหากไม่มีคำอธิบาย",options:["ภาพถ่ายบอกอนาคตได้","อาจไม่ทราบวันหรือเรื่องราวทั้งหมดหากไม่มีคำอธิบาย","ภาพถ่ายไม่แสดงสถานที่เลย"],explanation:"ภาพถ่ายช่วยให้เห็นสภาพในอดีต แต่ควรมีคำบอกเล่าหรือเอกสารช่วยยืนยันวันและรายละเอียด"},
    {topic:"evidence",level:"ฝึกเข้าใจ",icon:"🧵",prompt:"เส้นเวลามีประโยชน์อย่างไร?",subject:"นำปีและเหตุการณ์มาเรียงต่อกัน",correct:"ช่วยเรียงลำดับเหตุการณ์ก่อน–หลังให้ชัดเจน",options:["ช่วยเรียงลำดับเหตุการณ์ก่อน–หลังให้ชัดเจน","ใช้ทำนายอนาคต","ใช้แทนสูติบัตรได้ทุกเรื่อง"],explanation:"เส้นเวลาแสดงเหตุการณ์ตามลำดับ จึงช่วยให้จำและเล่าเรื่องได้ง่ายและถูกต้อง"},
    {topic:"evidence",level:"ฝึกจำ",icon:"👶",prompt:"จากเรื่องของเด็กชายต่อ เหตุการณ์ใดเกิดขึ้นก่อนสุด?",subject:"พ.ศ. 2555 เกิด · 2557 มีน้องสาว · 2558 ซื้อบ้านใหม่ · 2561 เข้า ป.1",correct:"เกิดที่โรงพยาบาล",options:["เกิดที่โรงพยาบาล","มีน้องสาว","เข้าเรียนชั้น ป.1"],explanation:"การเกิดใน พ.ศ. 2555 อยู่ก่อนเหตุการณ์ พ.ศ. 2557 และ พ.ศ. 2561"},
    {topic:"evidence",level:"ฝึกคิดวิเคราะห์",icon:"➗",prompt:"เด็กชายต่อเกิด พ.ศ. 2555 และมีน้องสาว พ.ศ. 2557 เหตุการณ์ห่างกันกี่ปี?",subject:"นำปีหลังลบด้วยปีก่อน: 2557 − 2555",correct:"2 ปี",options:["1 ปี","2 ปี","3 ปี"],explanation:"พ.ศ. 2557 ลบ พ.ศ. 2555 เท่ากับ 2 ปี"},
    {topic:"evidence",level:"ฝึกคิดวิเคราะห์",icon:"🏡",prompt:"ถ้ามีน้องสาวใน พ.ศ. 2557 และครอบครัวซื้อบ้านใหม่ในปีถัดไป บ้านใหม่ถูกซื้อในปีใด?",subject:"ปีถัดไปเพิ่มขึ้น 1 ปี",correct:"พ.ศ. 2558",options:["พ.ศ. 2556","พ.ศ. 2558","พ.ศ. 2560"],explanation:"ปีถัดจาก พ.ศ. 2557 คือ พ.ศ. 2558"},
    {topic:"evidence",level:"ฝึกคิดวิเคราะห์",icon:"➡️",prompt:"เหตุการณ์ใดเกิดถัดจากคุณแม่ลาออกจากงานประจำใน พ.ศ. 2560?",subject:"เส้นเวลา: 2560 คุณแม่ลาออก · 2561 ต่อเข้า ป.1 · 2562 ไปเยี่ยมคุณตาคุณยาย",correct:"ต่อเข้าเรียนชั้น ป.1",options:["ต่อเกิด","ต่อเข้าเรียนชั้น ป.1","ครอบครัวมีน้องสาว"],explanation:"บนเส้นเวลา เหตุการณ์ถัดจาก พ.ศ. 2560 คือ ต่อเข้าเรียนชั้น ป.1 ใน พ.ศ. 2561"},
    {topic:"evidence",level:"ฝึกคิดวิเคราะห์",icon:"🧭",prompt:"ถ้าคำบอกเล่ากับสูติบัตรระบุวันเกิดต่างกัน ควรทำอย่างไร?",subject:"ต้องการวันที่แน่นอนและยังอยากเข้าใจเรื่องราวของครอบครัว",correct:"ใช้สูติบัตรยืนยันวันที่ และถามเพิ่มเติมถึงเหตุผลของความต่าง",options:["ทิ้งหลักฐานทั้งหมด","ใช้สูติบัตรยืนยันวันที่ และถามเพิ่มเติมถึงเหตุผลของความต่าง","เลือกวันที่ที่จำง่ายกว่า"],explanation:"สูติบัตรเหมาะสำหรับยืนยันข้อมูลการเกิด ส่วนคำบอกเล่าช่วยเติมรายละเอียด ควรใช้ร่วมกันอย่างมีเหตุผล"}
  ];
  const $ = (id) => document.getElementById(id);
  const randomize = (arr) => [...arr].sort(() => Math.random() - .5);
  const initialState = {stars:0,attempts:0,correct:0,classRuns:[],toneRuns:[],karanRuns:[],socialRuns:[],quizRuns:[],mistakes:{}};
  let data;
  try { data = {...initialState,...JSON.parse(localStorage.getItem("marisaThaiProgress") || "{}")}; } catch { data = {...initialState}; }
  const save = () => { localStorage.setItem("marisaThaiProgress",JSON.stringify(data)); renderStats(); };
  const addResult = (key, correct) => {
    data.attempts += 1;
    if (correct) { data.correct += 1; data.stars += 1; }
    else data.mistakes[key] = (data.mistakes[key] || 0) + 1;
    save();
  };
  const celebrate = () => {
    const holder=$("celebration");
    ["#f59e0b","#22c55e","#3b82f6","#a855f7","#f43f5e"].forEach((color,i) => {
      for(let j=0;j<4;j++){
        const bit=document.createElement("i"); bit.className="confetti"; bit.style.left=`${8+Math.random()*84}%`; bit.style.background=color; bit.style.animationDelay=`${i*.04+j*.03}s`; holder.appendChild(bit);
        setTimeout(()=>bit.remove(),1600);
      }
    });
  };
  const speak = (text) => {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang="th-TH"; u.rate=.72; speechSynthesis.speak(u);
  };
  function setWordVisual(id,word){
    const el=$(id),visual=wordVisuals[word];
    if(!visual){el.hidden=true;el.style.backgroundImage="";return;}
    const y=visual.rowStart/(1536-visual.crop)*100;
    el.hidden=false;
    el.style.aspectRatio=`512 / ${visual.crop}`;
    el.style.backgroundImage=`url("assets/flashcards/${visual.file}")`;
    el.style.backgroundSize=`200% ${1536/visual.crop*100}%`;
    el.style.backgroundPosition=`${visual.col*100}% ${y}%`;
    el.setAttribute("aria-label",`ภาพประกอบคำว่า ${word}`);
  }

  document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => {
    document.querySelectorAll(".tab,.screen").forEach(el=>el.classList.remove("active"));
    tab.classList.add("active"); $(tab.dataset.screen).classList.add("active");
    if(tab.dataset.screen==="parent-view") renderStats();
  }));

  let classRound=[], classIndex=0, classScore=0, classLocked=false;
  function newClassRun(){ classRound=randomize(allLetters).slice(0,10); classIndex=0; classScore=0; showClassQuestion(); }
  function showClassQuestion(){
    if(classIndex>=classRound.length){
      data.classRuns.push({score:classScore,total:10,date:new Date().toISOString()}); save();
      $("classLetter").textContent=classScore>=8?"🏅":"👏"; $("classPrompt").textContent=`จบด่านแล้ว ได้ ${classScore}/10 คะแนน`;
      $("classFeedback").className="feedback correct"; $("classFeedback").textContent="แตะบ้านใดก็ได้เพื่อเริ่มรอบใหม่"; celebrate(); classLocked=false; return;
    }
    classLocked=false; const q=classRound[classIndex]; $("classLetter").textContent=q.letter; $("classPrompt").textContent="ตัวนี้อยู่บ้านไหนนะ?"; $("classFeedback").textContent=""; $("classFeedback").className="feedback";
    $("classProgressText").textContent=`ข้อ ${classIndex+1}/10`; $("classProgressBar").style.width=`${(classIndex+1)*10}%`;
    document.querySelectorAll("[data-class-answer]").forEach(b=>b.classList.remove("correct-answer","wrong-answer"));
  }
  document.querySelectorAll("[data-class-answer]").forEach(btn=>btn.addEventListener("click",()=>{
    if(classIndex>=classRound.length){ newClassRun(); return; }
    if(classLocked)return; classLocked=true; const q=classRound[classIndex], answer=btn.dataset.classAnswer, ok=answer===q.group;
    btn.classList.add(ok?"correct-answer":"wrong-answer"); document.querySelector(`[data-class-answer="${q.group}"]`).classList.add("correct-answer");
    $("classFeedback").className=`feedback ${ok?"correct":"wrong"}`; $("classFeedback").textContent=ok?`ถูกต้อง! ${q.letter} เป็นอักษร${q.group} +1 ดาว`:`เกือบถูกแล้ว ${q.letter} เป็นอักษร${q.group}`;
    if(ok){classScore++;celebrate();} addResult(`ตัว ${q.letter} – อักษร${q.group}`,ok); setTimeout(()=>{classIndex++;showClassQuestion();},1150);
  }));
  $("speakLetter").addEventListener("click",()=>{ const q=classRound[classIndex]; if(q)speak(letterNames[q.letter]||q.letter); });

  let toneRound=[],toneIndex=0,toneScore=0,toneLocked=false;
  function newToneRun(){toneRound=randomize(toneItems).slice(0,10);toneIndex=0;toneScore=0;showToneQuestion();}
  function showToneQuestion(){
    if(toneIndex>=toneRound.length){
      data.toneRuns.push({score:toneScore,total:10,date:new Date().toISOString()});save();$("toneWord").textContent=toneScore>=8?"🏅":"👏";$("toneFeedback").className="feedback correct";$("toneFeedback").textContent=`จบด่านแล้ว ได้ ${toneScore}/10 คะแนน แตะคำตอบใดก็ได้เพื่อเริ่มใหม่`;celebrate();toneLocked=false;return;
    }
    toneLocked=false;const q=toneRound[toneIndex];$("toneWord").textContent=q.word;$("toneFeedback").textContent="";$("toneFeedback").className="feedback";$("toneProgressText").textContent=`ข้อ ${toneIndex+1}/10`;$("toneProgressBar").style.width=`${(toneIndex+1)*10}%`;document.querySelectorAll("[data-tone-answer]").forEach(b=>b.classList.remove("correct-answer","wrong-answer"));
  }
  document.querySelectorAll("[data-tone-answer]").forEach(btn=>btn.addEventListener("click",()=>{
    if(toneIndex>=toneRound.length){newToneRun();return;} if(toneLocked)return;toneLocked=true;const q=toneRound[toneIndex],answer=btn.dataset.toneAnswer,ok=answer===q.tone;
    btn.classList.add(ok?"correct-answer":"wrong-answer");document.querySelector(`[data-tone-answer="${q.tone}"]`).classList.add("correct-answer");$("toneFeedback").className=`feedback ${ok?"correct":"wrong"}`;$("toneFeedback").textContent=ok?`เก่งมาก! ${q.word} เป็นเสียง${q.tone} +1 ดาว`:`ลองจำใหม่ ${q.word} เป็นเสียง${q.tone}`;if(ok){toneScore++;celebrate();}addResult(`คำ “${q.word}” – เสียง${q.tone}`,ok);setTimeout(()=>{toneIndex++;showToneQuestion();},1200);
  }));
  $("speakWord").addEventListener("click",()=>{const q=toneRound[toneIndex];if(q)speak(q.word);});

  let karanRound=[],karanIndex=0,karanScore=0,karanLocked=false;
  function makeKaranChoices(correct){
    return randomize([correct,...randomize(karanOptions.filter(x=>x!==correct)).slice(0,2)]);
  }
  function newKaranRun(){karanRound=randomize(karanItems).slice(0,10);karanIndex=0;karanScore=0;showKaranQuestion();}
  function showKaranQuestion(){
    if(karanIndex>=karanRound.length){
      data.karanRuns.push({score:karanScore,total:10,date:new Date().toISOString()});save();$("karanVisual").hidden=true;$("karanWord").textContent=karanScore>=8?"🏅":"👏";$("karanChoices").innerHTML="";$("karanFeedback").className="feedback correct";$("karanFeedback").textContent=`จบด่านแล้ว ได้ ${karanScore}/10 คะแนน`;
      const again=document.createElement("button");again.textContent="เล่นอีกครั้ง";again.addEventListener("click",newKaranRun);$("karanChoices").appendChild(again);celebrate();return;
    }
    karanLocked=false;const q=karanRound[karanIndex];setWordVisual("karanVisual",q.word);$("karanWord").textContent=q.word;$("karanFeedback").textContent="";$("karanFeedback").className="feedback";$("karanProgressText").textContent=`ข้อ ${karanIndex+1}/10`;$("karanProgressBar").style.width=`${(karanIndex+1)*10}%`;$("karanChoices").innerHTML="";
    makeKaranChoices(q.karan).forEach(option=>{const b=document.createElement("button");b.textContent=option;b.addEventListener("click",()=>answerKaran(b,option));$("karanChoices").appendChild(b);});
  }
  function answerKaran(btn,answer){
    if(karanLocked)return;karanLocked=true;const q=karanRound[karanIndex],ok=answer===q.karan;btn.classList.add(ok?"correct-answer":"wrong-answer");[...$("karanChoices").children].find(b=>b.textContent===q.karan)?.classList.add("correct-answer");$("karanFeedback").className=`feedback ${ok?"correct":"wrong"}`;$("karanFeedback").textContent=ok?`ถูกต้อง! ${q.word} อ่านว่า ${q.reading} +1 ดาว`:`ลองดูเครื่องหมาย ์ อีกครั้ง คำตอบคือ ${q.karan} อ่านว่า ${q.reading}`;if(ok){karanScore++;celebrate();}addResult(`${q.word} – ตัวการันต์ ${q.karan}`,ok);setTimeout(()=>{karanIndex++;showKaranQuestion();},1500);
  }
  $("speakKaranWord").addEventListener("click",()=>{const q=karanRound[karanIndex];if(q)speak(q.word);});

  let flashcardSetIndex=0,flashcardIndex=0;
  function renderFlashcard(){
    const set=flashcardSets[flashcardSetIndex],card=set[flashcardIndex];setWordVisual("flashcardVisual",card.word);$("flashcardCounter").textContent=`${flashcardIndex+1}/${set.length}`;$("flashcardWord").textContent=card.word;$("flashcardReading").textContent=`อ่านว่า ${card.reading} · ตัวการันต์ ${card.karan}`;
  }
  $("flashcardSet").addEventListener("change",event=>{flashcardSetIndex=Number(event.target.value);flashcardIndex=0;renderFlashcard();});
  $("prevFlashcard").addEventListener("click",()=>{const set=flashcardSets[flashcardSetIndex];flashcardIndex=(flashcardIndex-1+set.length)%set.length;renderFlashcard();});
  $("nextFlashcard").addEventListener("click",()=>{const set=flashcardSets[flashcardSetIndex];flashcardIndex=(flashcardIndex+1)%set.length;renderFlashcard();});
  $("speakFlashcard").addEventListener("click",()=>speak(flashcardSets[flashcardSetIndex][flashcardIndex].word));

  const socialModeInfo = {
    mixed:{label:"ท้าทายรวม",total:15},time:{label:"กาลเวลา",total:10},calendar:{label:"ปฏิทิน",total:10},evidence:{label:"นักสืบอดีต",total:10}
  };
  const socialTopicInfo = {
    time:{label:"อดีต–ปัจจุบัน–อนาคต",mistake:"สังคม · กาลเวลา"},
    calendar:{label:"วันสำคัญและปฏิทิน",mistake:"สังคม · ปฏิทิน"},
    evidence:{label:"หลักฐานและเส้นเวลา",mistake:"สังคม · นักสืบอดีต"}
  };
  let selectedSocialMode="mixed",socialQuiz=[],socialIndex=0,socialScore=0,socialWrong=[],socialLocked=false,socialSelected=new Set();
  function pickBalancedSocial(topic){
    const pool=socialItems.filter(q=>q.topic===topic),thinking=pool.filter(q=>q.level==="ฝึกคิดวิเคราะห์"||q.level==="ฝึกประยุกต์"),foundation=pool.filter(q=>!thinking.includes(q));
    return [...randomize(thinking).slice(0,3),...randomize(foundation).slice(0,2)];
  }
  function makeSocialQuiz(mode){
    if(mode==="mixed") return randomize([...pickBalancedSocial("time"),...pickBalancedSocial("calendar"),...pickBalancedSocial("evidence")]);
    return randomize(socialItems.filter(q=>q.topic===mode)).slice(0,10);
  }
  document.querySelectorAll("[data-social-mode]").forEach(btn=>btn.addEventListener("click",()=>{
    selectedSocialMode=btn.dataset.socialMode;
    document.querySelectorAll("[data-social-mode]").forEach(item=>{const chosen=item===btn;item.classList.toggle("selected",chosen);item.setAttribute("aria-checked",String(chosen));});
    const info=socialModeInfo[selectedSocialMode];$("startSocial").textContent=`เริ่มภารกิจ${info.label} ${info.total} ข้อ`;
  }));
  function startSocial(){
    socialQuiz=makeSocialQuiz(selectedSocialMode);socialIndex=0;socialScore=0;socialWrong=[];socialSelected=new Set();
    $("socialIntro").hidden=true;$("socialResult").hidden=true;$("socialPlay").hidden=false;showSocialQuestion();
  }
  function showSocialQuestion(){
    if(socialIndex>=socialQuiz.length){finishSocial();return;}
    socialLocked=false;socialSelected=new Set();const q=socialQuiz[socialIndex],topic=socialTopicInfo[q.topic];
    $("socialCounter").textContent=`ข้อ ${socialIndex+1}/${socialQuiz.length}`;$("socialScore").textContent=socialScore;$("socialProgressBar").style.width=`${(socialIndex+1)/socialQuiz.length*100}%`;
    $("socialLevel").textContent=q.level;$("socialTopic").textContent=topic.label;$("socialIcon").textContent=q.icon;$("socialQuestion").textContent=q.prompt;$("socialSubject").textContent=q.subject;
    $("socialInstruction").hidden=!q.multi;$("checkSocial").hidden=!q.multi;$("nextSocial").hidden=true;$("socialFeedback").textContent="";$("socialFeedback").className="feedback quiz-solution";$("socialAnswers").innerHTML="";$("socialAnswers").classList.toggle("long-options",q.options.some(option=>option.length>18));
    randomize(q.options).forEach(option=>{const b=document.createElement("button");b.textContent=option;b.setAttribute("aria-pressed","false");b.addEventListener("click",()=>{if(q.multi){if(socialLocked)return;const selected=socialSelected.has(option);if(selected)socialSelected.delete(option);else socialSelected.add(option);b.classList.toggle("selected-answer",!selected);b.setAttribute("aria-pressed",String(!selected));}else answerSocial(b,option);});$("socialAnswers").appendChild(b);});
  }
  function recordSocialAnswer(q,ok){
    const correctText=Array.isArray(q.correct)?q.correct.join(" · "):q.correct;
    if(ok){socialScore++;celebrate();}else socialWrong.push(`${q.prompt} → ${correctText}`);
    addResult(socialTopicInfo[q.topic].mistake,ok);$("socialScore").textContent=socialScore;
    $("socialFeedback").className=`feedback quiz-solution ${ok?"correct":"wrong"}`;
    $("socialFeedback").textContent=`${ok?"ถูกต้อง! นักสืบเก่งมาก +1 ดาว":"ยังไม่ถูกค่ะ ลองอ่านเหตุผลนะ"}\nเฉลย: ${correctText}\nเพราะ: ${q.explanation}`;
    $("nextSocial").textContent=socialIndex===socialQuiz.length-1?"ดูผลภารกิจ":"ข้อต่อไป";$("nextSocial").hidden=false;
  }
  function answerSocial(btn,answer){
    if(socialLocked)return;socialLocked=true;const q=socialQuiz[socialIndex],ok=answer===q.correct;
    btn.classList.add(ok?"correct-answer":"wrong-answer");[...$("socialAnswers").children].find(b=>b.textContent===q.correct)?.classList.add("correct-answer");[...$("socialAnswers").children].forEach(b=>b.disabled=true);recordSocialAnswer(q,ok);
  }
  function checkSocialAnswer(){
    if(socialLocked)return;const q=socialQuiz[socialIndex];if(!q.multi||socialSelected.size===0){$("socialFeedback").className="feedback quiz-solution wrong";$("socialFeedback").textContent="เลือกอย่างน้อย 1 คำตอบก่อนนะคะ";return;}
    socialLocked=true;const correctSet=new Set(q.correct),ok=socialSelected.size===correctSet.size&&[...socialSelected].every(answer=>correctSet.has(answer));
    [...$("socialAnswers").children].forEach(b=>{b.disabled=true;b.classList.remove("selected-answer");if(correctSet.has(b.textContent))b.classList.add("correct-answer");else if(socialSelected.has(b.textContent))b.classList.add("wrong-answer");});$("checkSocial").hidden=true;recordSocialAnswer(q,ok);
  }
  function finishSocial(){
    data.socialRuns.push({score:socialScore,total:socialQuiz.length,mode:selectedSocialMode,date:new Date().toISOString(),wrong:socialWrong});save();$("socialPlay").hidden=true;$("socialResult").hidden=false;const passed=socialScore/socialQuiz.length>=.8;
    $("socialResult").innerHTML=`<div class="result-emoji">${passed?"🕵️‍♀️🏅":"🧭"}</div><h2>${passed?"ภารกิจสำเร็จ!":"นักสืบฝึกเก่งขึ้นแล้ว"}</h2><p>ชุด${socialModeInfo[selectedSocialMode].label} · มาริซ่าได้ <strong>${socialScore}/${socialQuiz.length} คะแนน</strong></p>${socialWrong.length?`<div class="review-list"><strong>เบาะแสที่ควรกลับไปดูอีกครั้ง</strong><ul>${socialWrong.map(x=>`<li>${x}</li>`).join("")}</ul></div>`:"<p>วิเคราะห์ถูกทุกข้อเลย!</p>"}<button id="retrySocial" class="primary-button social-primary">ทำภารกิจนี้อีกครั้ง</button> <button id="chooseSocial" class="text-button">เลือกภารกิจอื่น</button>`;
    $("retrySocial").addEventListener("click",startSocial);$("chooseSocial").addEventListener("click",()=>{$("socialResult").hidden=true;$("socialIntro").hidden=false;});celebrate();
  }
  $("startSocial").addEventListener("click",startSocial);$("checkSocial").addEventListener("click",checkSocialAnswer);$("nextSocial").addEventListener("click",()=>{if(!socialLocked)return;socialIndex++;showSocialQuestion();});$("exitSocial").addEventListener("click",()=>{$("socialPlay").hidden=true;$("socialIntro").hidden=false;});

  const quizModeInfo = {
    worksheet:{label:"จากภาพแบบเรียน",total:20}, mixed:{label:"สุ่มรวม",total:10}, class:{label:"ไตรยางศ์",total:15}, tone:{label:"วรรณยุกต์",total:15}, karan:{label:"ตัวการันต์",total:15}
  };
  const letterQuiz = (count) => randomize(allLetters).slice(0,count).map(q=>({type:"class",prompt:"พยัญชนะตัวนี้เป็นอักษรหมู่ใด?",subject:q.letter,correct:q.group,options:["สูง","กลาง","ต่ำ"],explanation:`${q.letter} เป็นอักษร${q.group}`}));
  const wordClassQuiz = (count) => randomize(classWordItems).slice(0,count).map(q=>({type:"class-word",prompt:"พยัญชนะต้นของคำนี้เป็นอักษรหมู่ใด?",subject:q.word,correct:q.group,options:["สูง","กลาง","ต่ำ"],explanation:`คำว่า ${q.word} มีพยัญชนะต้นคือ ${q.initial} ซึ่งเป็นอักษร${q.group}`}));
  const fillHighQuiz = (count) => randomize(classWordItems.filter(q=>q.fill)).slice(0,count).map(q=>({type:"fill",prompt:`เติมอักษรสูงให้เป็นคำว่า “${q.word}”`,subject:q.blank,correct:q.fill,options:randomize([q.fill,...randomize(groups["สูง"].filter(x=>x!==q.fill)).slice(0,2)]),explanation:`เติม ${q.fill} แล้วได้คำว่า ${q.word} โดย ${q.fill} เป็นอักษรสูง`}));
  const toneQuiz = (count) => randomize(toneItems).slice(0,count).map(q=>({type:"tone",prompt:"คำนี้มีเสียงวรรณยุกต์อะไร?",subject:q.word,correct:q.tone,options:randomize(toneOptions),explanation:`คำว่า ${q.word} เป็นเสียงวรรณยุกต์${q.tone}`}));
  const karanQuiz = (count) => randomize(karanItems).slice(0,count).map(q=>({type:"karan",prompt:"ส่วนใดคือตัวการันต์ในคำนี้?",subject:q.word,correct:q.karan,options:makeKaranChoices(q.karan),explanation:`${q.word} มีตัวการันต์คือ ${q.karan} ไม่ออกเสียงส่วนนั้น และอ่านว่า ${q.reading}`}));
  const readingQuiz = (count) => randomize(karanItems).slice(0,count).map(q=>({type:"reading",prompt:"คำนี้อ่านว่าอย่างไร?",subject:q.word,correct:q.reading,options:randomize([q.reading,...randomize(karanItems.filter(x=>x.reading!==q.reading).map(x=>x.reading)).slice(0,2)]),explanation:`${q.word} อ่านว่า ${q.reading} โดยมีตัวการันต์ ${q.karan}`}));

  let selectedQuizMode="worksheet",quiz=[],quizIndex=0,quizScore=0,quizWrong=[],quizLocked=false,quizSelected=new Set();
  function makeQuiz(mode){
    if(mode==="mixed") return randomize([...letterQuiz(3),...toneQuiz(2),...karanQuiz(2),...readingQuiz(1),...randomize(sentenceQuizItems).slice(0,1),...randomize(multiSelectQuizItems).slice(0,1)]);
    if(mode==="class") return randomize([...letterQuiz(5),...wordClassQuiz(4),...fillHighQuiz(3),...randomize(multiSelectQuizItems).slice(0,3)]);
    if(mode==="tone") return randomize([...toneQuiz(10),...randomize(worksheetChoiceItems.slice(0,8)).slice(0,5)]);
    if(mode==="karan") return randomize([...karanQuiz(8),...readingQuiz(5),...worksheetChoiceItems.slice(8,10)]);
    return randomize([
      ...fillHighQuiz(4),
      ...wordClassQuiz(3),
      ...randomize(theoryQuizItems).slice(0,2),
      ...randomize(worksheetChoiceItems.slice(0,8)).slice(0,4),
      ...randomize(sentenceQuizItems).slice(0,3),
      ...randomize(multiSelectQuizItems).slice(0,2),
      ...toneQuiz(1),
      ...randomize(worksheetChoiceItems.slice(8,10)).slice(0,1)
    ]);
  }
  document.querySelectorAll("[data-quiz-mode]").forEach(btn=>btn.addEventListener("click",()=>{
    selectedQuizMode=btn.dataset.quizMode;
    document.querySelectorAll("[data-quiz-mode]").forEach(item=>{const chosen=item===btn;item.classList.toggle("selected",chosen);item.setAttribute("aria-checked",String(chosen));});
    const info=quizModeInfo[selectedQuizMode];$("startQuiz").textContent=`เริ่มชุด${info.label} ${info.total} ข้อ`;
  }));
  function startQuiz(){quiz=makeQuiz(selectedQuizMode);quizIndex=0;quizScore=0;quizWrong=[];quizSelected=new Set();$("quizIntro").hidden=true;$("quizResult").hidden=true;$("quizPlay").hidden=false;showQuizQuestion();}
  function showQuizQuestion(){
    if(quizIndex>=quiz.length){finishQuiz();return;}quizLocked=false;quizSelected=new Set();const q=quiz[quizIndex];$("quizCounter").textContent=`ข้อ ${quizIndex+1}/${quiz.length}`;$("quizScore").textContent=quizScore;$("quizProgressBar").style.width=`${(quizIndex+1)/quiz.length*100}%`;$("quizQuestion").textContent=q.prompt;setWordVisual("quizVisual",q.subject);$("quizSubject").textContent=q.subject;$("quizSubject").classList.toggle("subject-small",q.subject.length>4);$("quizInstruction").hidden=!q.multi;$("checkQuiz").hidden=!q.multi;$("nextQuiz").hidden=true;$("quizFeedback").textContent="";$("quizFeedback").className="feedback quiz-solution";$("quizAnswers").innerHTML="";$("quizAnswers").classList.toggle("long-options",q.options.some(option=>option.length>12));
    q.options.forEach(option=>{const b=document.createElement("button");b.textContent=option;b.addEventListener("click",()=>{if(q.multi){if(quizLocked)return;const selected=quizSelected.has(option);if(selected)quizSelected.delete(option);else quizSelected.add(option);b.classList.toggle("selected-answer",!selected);b.setAttribute("aria-pressed",String(!selected));}else answerQuiz(b,option);});$("quizAnswers").appendChild(b);});
  }
  function recordQuizAnswer(q,ok){
    const correctText=Array.isArray(q.correct)?q.correct.join(" · "):q.correct;
    if(ok){quizScore++;celebrate();}else quizWrong.push(`${q.subject} → ${correctText}`);
    addResult(`${q.subject} – ${correctText}`,ok);$("quizScore").textContent=quizScore;
    $("quizFeedback").className=`feedback quiz-solution ${ok?"correct":"wrong"}`;
    $("quizFeedback").textContent=`${ok?"ถูกต้อง! +1 ดาว":"ยังไม่ถูกค่ะ"}\nเฉลย: ${correctText}\n${q.explanation||"ลองทบทวนคำตอบนี้อีกครั้งนะคะ"}`;
    $("nextQuiz").textContent=quizIndex===quiz.length-1?"ดูผลคะแนน":"ข้อต่อไป";$("nextQuiz").hidden=false;
  }
  function answerQuiz(btn,answer){
    if(quizLocked)return;quizLocked=true;const q=quiz[quizIndex],ok=answer===q.correct;btn.classList.add(ok?"correct-answer":"wrong-answer");[...$("quizAnswers").children].find(b=>b.textContent===q.correct)?.classList.add("correct-answer");[...$("quizAnswers").children].forEach(b=>b.disabled=true);recordQuizAnswer(q,ok);
  }
  function checkMultiQuiz(){
    if(quizLocked)return;const q=quiz[quizIndex];if(!q.multi||quizSelected.size===0){$("quizFeedback").className="feedback quiz-solution wrong";$("quizFeedback").textContent="เลือกอย่างน้อย 1 คำตอบก่อนนะคะ";return;}
    quizLocked=true;const correctSet=new Set(q.correct),ok=quizSelected.size===correctSet.size&&[...quizSelected].every(answer=>correctSet.has(answer));
    [...$("quizAnswers").children].forEach(b=>{b.disabled=true;b.classList.remove("selected-answer");if(correctSet.has(b.textContent))b.classList.add("correct-answer");else if(quizSelected.has(b.textContent))b.classList.add("wrong-answer");});$("checkQuiz").hidden=true;recordQuizAnswer(q,ok);
  }
  $("checkQuiz").addEventListener("click",checkMultiQuiz);
  $("nextQuiz").addEventListener("click",()=>{if(!quizLocked)return;quizIndex++;showQuizQuestion();});
  function finishQuiz(){
    data.quizRuns.push({score:quizScore,total:quiz.length,mode:selectedQuizMode,date:new Date().toISOString(),wrong:quizWrong});save();$("quizPlay").hidden=true;$("quizResult").hidden=false;const passed=quizScore/quiz.length>=.8;$("quizResult").innerHTML=`<div class="result-emoji">${passed?"🏅":"🌈"}</div><h2>${passed?"ยอดเยี่ยมมาก!":"เก่งขึ้นอีกก้าวแล้ว"}</h2><p>ชุด${quizModeInfo[selectedQuizMode].label} · มาริซ่าได้ <strong>${quizScore}/${quiz.length} คะแนน</strong></p>${quizWrong.length?`<div class="review-list"><strong>ลองทบทวนอีกครั้ง</strong><ul>${quizWrong.map(x=>`<li>${x}</li>`).join("")}</ul></div>`:"<p>ตอบถูกทุกข้อเลย!</p>"}<button id="retryQuiz" class="primary-button">ทำชุดนี้อีกครั้ง</button> <button id="chooseQuiz" class="text-button">เลือกชุดอื่น</button>`;$("retryQuiz").addEventListener("click",startQuiz);$("chooseQuiz").addEventListener("click",()=>{$("quizResult").hidden=true;$("quizIntro").hidden=false;});celebrate();
  }
  $("startQuiz").addEventListener("click",startQuiz);

  function renderStats(){
    $("totalStars").textContent=data.stars;$("statStars").textContent=`${data.stars} ⭐`;$("statAttempts").textContent=`${data.attempts} ข้อ`;$("statAccuracy").textContent=data.attempts?`${Math.round(data.correct/data.attempts*100)}%`:"–";const latest=data.quizRuns.at(-1),kr=data.karanRuns.at(-1),sr=data.socialRuns.at(-1);$("statKaran").textContent=kr?`${kr.score}/${kr.total}`:"ยังไม่ได้เล่น";$("statSocial").textContent=sr?`${sr.score}/${sr.total}`:"ยังไม่ได้เล่น";$("statQuiz").textContent=latest?`${latest.score}/${latest.total}`:"ยังไม่ได้ทำ";
    const weak=Object.entries(data.mistakes).sort((a,b)=>b[1]-a[1]).slice(0,5);$("weakAreas").innerHTML=weak.length?weak.map(([key,count])=>`<div class="weak-item"><span>${key}</span><strong>ผิด ${count} ครั้ง</strong></div>`).join(""):"<p>ยังไม่มีข้อที่ต้องทบทวนเป็นพิเศษ</p>";
    const cr=data.classRuns.at(-1),tr=data.toneRuns.at(-1);$("goalClass").classList.toggle("goal-done",!!cr&&cr.score>=8);$("goalTone").classList.toggle("goal-done",!!tr&&tr.score>=8);$("goalKaran").classList.toggle("goal-done",!!kr&&kr.score>=8);$("goalSocial").classList.toggle("goal-done",!!sr&&sr.score/sr.total>=.8);$("goalQuiz").classList.toggle("goal-done",!!latest&&latest.score/latest.total>=.8);
  }
  $("resetProgress").addEventListener("click",()=>{if(confirm("ต้องการล้างคะแนนและเริ่มเก็บผลใหม่ใช่ไหม?")){data={...initialState,mistakes:{},classRuns:[],toneRuns:[],karanRuns:[],socialRuns:[],quizRuns:[]};save();}});

  newClassRun();newToneRun();newKaranRun();renderFlashcard();renderStats();
})();
