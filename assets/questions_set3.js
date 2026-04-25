// ชุดที่ 3 - การเขียนโปรแกรม PLC
const examSet3 = {
  id: 3,
  title: "การเขียนโปรแกรม PLC",
  description: "คำศัพท์การเขียนโปรแกรม, ฟังก์ชันคำสั่ง, I/O Planning, ซอฟต์แวร์",
  questions: [
    {
      id: 1,
      text: "ภาษาการเขียนโปรแกรม PLC ตามมาตรฐาน IEC 61131-3 มีกี่ภาษา?",
      choices: [
        "ก. 3 ภาษา",
        "ข. 5 ภาษา",
        "ค. 7 ภาษา",
        "ง. 10 ภาษา"
      ],
      answer: 1
    },
    {
      id: 2,
      text: "ภาษาใดเป็นที่นิยมมากที่สุดในการเขียนโปรแกรม PLC สำหรับผู้เริ่มต้น?",
      choices: [
        "ก. Structured Text (ST)",
        "ข. Ladder Diagram (LD)",
        "ค. Function Block Diagram (FBD)",
        "ง. Instruction List (IL)"
      ],
      answer: 1
    },
    {
      id: 3,
      text: "คำสั่ง LD (Load) ใน Instruction List หมายถึง?",
      choices: [
        "ก. โหลดข้อมูลจากหน่วยความจำ",
        "ข. เริ่มต้น Rung ด้วย Normally Open Contact",
        "ค. บันทึกโปรแกรม",
        "ง. ส่งสัญญาณเอาท์พุต"
      ],
      answer: 1
    },
    {
      id: 4,
      text: "คำสั่ง OUT ใน Instruction List หมายถึง?",
      choices: [
        "ก. ออกจากโปรแกรม",
        "ข. กำหนดให้ Output Coil ทำงาน",
        "ค. อ่านค่าอินพุต",
        "ง. ลบข้อมูล"
      ],
      answer: 1
    },
    {
      id: 5,
      text: "AND Circuit ใน Ladder Diagram สร้างโดย?",
      choices: [
        "ก. ต่อ Contact แบบขนาน",
        "ข. ต่อ Contact แบบอนุกรม",
        "ค. ใช้ NOT Contact เดียว",
        "ง. ใช้ Timer Contact"
      ],
      answer: 1
    },
    {
      id: 6,
      text: "OR Circuit ใน Ladder Diagram สร้างโดย?",
      choices: [
        "ก. ต่อ Contact แบบอนุกรม",
        "ข. ต่อ Contact แบบขนาน",
        "ค. ใช้ NOT Contact",
        "ง. ใช้ Counter"
      ],
      answer: 1
    },
    {
      id: 7,
      text: "NOT Circuit ใน Ladder Diagram สร้างโดย?",
      choices: [
        "ก. ใช้ Normally Open Contact",
        "ข. ใช้ Normally Closed Contact",
        "ค. ต่อ Contact แบบขนาน",
        "ง. ใช้ Output Coil เพียงอย่างเดียว"
      ],
      answer: 1
    },
    {
      id: 8,
      text: "Self Retention Circuit ใน Ladder Diagram ต้องมีองค์ประกอบใด?",
      choices: [
        "ก. Timer เท่านั้น",
        "ข. Output Contact ต่อขนาน Start และ NC Stop Contact ต่ออนุกรม",
        "ค. Counter เท่านั้น",
        "ง. Analog Input เท่านั้น"
      ],
      answer: 1
    },
    {
      id: 9,
      text: "Flicker Circuit ใช้เพื่อ?",
      choices: [
        "ก. ควบคุมความเร็วมอเตอร์",
        "ข. ทำให้ Output ติดดับสลับกันตามเวลาที่กำหนด (สัญญาณกะพริบ)",
        "ค. นับจำนวนชิ้นงาน",
        "ง. ป้องกันไฟกระชาก"
      ],
      answer: 1
    },
    {
      id: 10,
      text: "Order Control Circuit คือวงจรประเภทใด?",
      choices: [
        "ก. วงจรควบคุมแบบสุ่ม",
        "ข. วงจรควบคุมตามลำดับขั้นตอน (Step by step)",
        "ค. วงจรควบคุมความเร็ว",
        "ง. วงจรป้องกันไฟฟ้า"
      ],
      answer: 1
    },
    {
      id: 11,
      text: "Emergency Stop Circuit ควรออกแบบอย่างไรเพื่อความปลอดภัยสูงสุด?",
      choices: [
        "ก. ใช้ NO Contact เพื่อประหยัดพลังงาน",
        "ข. ใช้ NC Contact และตัด Power ทางฮาร์ดแวร์ด้วย ไม่ควรพึ่งเฉพาะซอฟต์แวร์",
        "ค. ต่อขนานกับ Output เสมอ",
        "ง. ใช้ Timer circuit"
      ],
      answer: 1
    },
    {
      id: 12,
      text: "ตาราง I/O Table (I/O Assignment) ที่ดีควรมีข้อมูลใด?",
      choices: [
        "ก. เฉพาะ Address เท่านั้น",
        "ข. Address, ชื่ออุปกรณ์, ฟังก์ชันการทำงาน, และ Comment อธิบาย",
        "ค. เฉพาะชื่ออุปกรณ์",
        "ง. เฉพาะ Comment"
      ],
      answer: 1
    },
    {
      id: 13,
      text: "การกำหนด I/O Address ใน PLC มีความสำคัญอย่างไร?",
      choices: [
        "ก. ไม่มีความสำคัญ ใช้ชื่อใดก็ได้",
        "ข. เป็นการระบุว่าโปรแกรมจะอ้างอิงถึงจุด I/O ตัวใด ต้องตรงกับการเดินสายไฟ",
        "ค. ใช้สำหรับการสื่อสารเท่านั้น",
        "ง. ใช้สำหรับการแสดงผลบน HMI เท่านั้น"
      ],
      answer: 1
    },
    {
      id: 14,
      text: "คำสั่ง SET ใน PLC โปรแกรมทำหน้าที่อะไร?",
      choices: [
        "ก. ตั้งค่าเวลา Timer",
        "ข. ทำให้ Coil หรือ Bit เป็น ON และล็อกค่าไว้จนกว่าจะ RESET",
        "ค. ลบโปรแกรม",
        "ง. รีสตาร์ท PLC"
      ],
      answer: 1
    },
    {
      id: 15,
      text: "คำสั่ง RESET (RST) ใน PLC โปรแกรมทำหน้าที่อะไร?",
      choices: [
        "ก. รีสตาร์ท PLC",
        "ข. ทำให้ Coil หรือ Bit เป็น OFF",
        "ค. รีเซ็ตค่า Analog",
        "ง. ลบโปรแกรมทั้งหมด"
      ],
      answer: 1
    },
    {
      id: 16,
      text: "การ Save โปรแกรมใน PLC Software มีความสำคัญอย่างไร?",
      choices: [
        "ก. ช่วยเพิ่มความเร็ว PLC",
        "ข. เก็บโปรแกรมไว้ในคอมพิวเตอร์ เพื่อสำรองข้อมูลและแก้ไขในภายหลัง",
        "ค. ส่งโปรแกรมไปยัง PLC โดยอัตโนมัติ",
        "ง. ลดขนาดโปรแกรม"
      ],
      answer: 1
    },
    {
      id: 17,
      text: "Program Monitoring ในซอฟต์แวร์ PLC แสดงอะไร?",
      choices: [
        "ก. แสดงรายการ Error ในโปรแกรม",
        "ข. แสดงสถานะ ON/OFF ของ Contact และ Coil ใน Ladder Diagram แบบ Real-time",
        "ค. แสดงการตั้งค่าการสื่อสาร",
        "ง. แสดงประวัติการ Download"
      ],
      answer: 1
    },
    {
      id: 18,
      text: "ขั้นตอนการสร้างโปรแกรม PLC ที่ถูกต้องคือ?",
      choices: [
        "ก. Download → เขียนโปรแกรม → ทดสอบ",
        "ข. วิเคราะห์ความต้องการ → กำหนด I/O → เขียนโปรแกรม → ทดสอบ → Download",
        "ค. Download → ทดสอบ → เขียนโปรแกรม",
        "ง. ทดสอบ → เขียนโปรแกรม → กำหนด I/O"
      ],
      answer: 1
    },
    {
      id: 19,
      text: "Condition Control Circuit ใช้ทำอะไร?",
      choices: [
        "ก. ควบคุมตามเวลา",
        "ข. ควบคุมการทำงานตามเงื่อนไขที่กำหนด เช่น ค่าเซ็นเซอร์เกินค่าที่กำหนด",
        "ค. ควบคุมลำดับขั้นตอน",
        "ง. ควบคุมการนับ"
      ],
      answer: 1
    },
    {
      id: 20,
      text: "Time Control Circuit ใช้ทำอะไร?",
      choices: [
        "ก. ควบคุมตามเงื่อนไข",
        "ข. ควบคุมการทำงานตามระยะเวลาที่กำหนด",
        "ค. ควบคุมลำดับขั้นตอน",
        "ง. นับจำนวนชิ้นงาน"
      ],
      answer: 1
    },
    {
      id: 21,
      text: "ใน Ladder Diagram การเขียน Comment มีประโยชน์อย่างไร?",
      choices: [
        "ก. ทำให้โปรแกรมทำงานเร็วขึ้น",
        "ข. ช่วยอธิบายการทำงานของโปรแกรม ทำให้ง่ายต่อการบำรุงรักษาและแก้ไข",
        "ค. ลดขนาดโปรแกรม",
        "ง. เพิ่มความปลอดภัย"
      ],
      answer: 1
    },
    {
      id: 22,
      text: "การ Compile โปรแกรม PLC หมายถึงอะไร?",
      choices: [
        "ก. การส่งโปรแกรมไปยัง PLC",
        "ข. การแปลงโปรแกรมที่เขียนเป็นรูปแบบที่ PLC เข้าใจได้ และตรวจสอบ Error",
        "ค. การบันทึกโปรแกรม",
        "ง. การลบโปรแกรมเก่า"
      ],
      answer: 1
    },
    {
      id: 23,
      text: "ข้อใดคือความแตกต่างระหว่าง Output Coil (--( )--) และ SET Coil (--( S )--)?",
      choices: [
        "ก. ไม่มีความแตกต่าง",
        "ข. Output Coil จะ OFF เมื่อเงื่อนไขไม่เป็นจริง แต่ SET Coil จะล็อก ON ไว้จนกว่าจะ RESET",
        "ค. SET Coil ทำงานเร็วกว่า",
        "ง. Output Coil ใช้ไฟมากกว่า"
      ],
      answer: 1
    },
    {
      id: 24,
      text: "การเขียน One Shot (P Contact) ใช้ทำอะไร?",
      choices: [
        "ก. ทำให้ Coil ทำงานตลอดเวลา",
        "ข. ตรวจจับ Rising Edge และให้สัญญาณเพียง 1 Scan เมื่อสัญญาณเปลี่ยนจาก OFF เป็น ON",
        "ค. ทำให้ Coil กะพริบ",
        "ง. หยุดการทำงานของ PLC"
      ],
      answer: 1
    },
    {
      id: 25,
      text: "ก่อนเขียนโปรแกรม PLC สิ่งแรกที่ต้องทำคือ?",
      choices: [
        "ก. เปิดซอฟต์แวร์และเริ่มเขียน Ladder ทันที",
        "ข. วิเคราะห์และเข้าใจลำดับการทำงาน และกำหนด I/O ของระบบ",
        "ค. Download โปรแกรมทดสอบก่อน",
        "ง. รีสตาร์ท PLC"
      ],
      answer: 1
    },
    {
      id: 26,
      text: "ฟังก์ชัน MOV (Move) ใน PLC ทำหน้าที่อะไร?",
      choices: [
        "ก. เคลื่อนที่อุปกรณ์",
        "ข. คัดลอกค่าจากตำแหน่งหนึ่งไปยังอีกตำแหน่งหนึ่งในหน่วยความจำ",
        "ค. คำนวณค่าเฉลี่ย",
        "ง. ลบข้อมูล"
      ],
      answer: 1
    },
    {
      id: 27,
      text: "ฟังก์ชัน ADD ใน PLC ทำหน้าที่อะไร?",
      choices: [
        "ก. เพิ่มโมดูล I/O",
        "ข. บวกค่าตัวเลขสองค่า และเก็บผลลัพธ์",
        "ค. เพิ่มความเร็ว PLC",
        "ง. เพิ่ม Comment"
      ],
      answer: 1
    },
    {
      id: 28,
      text: "ฟังก์ชัน CMP (Compare) ใน PLC ใช้ทำอะไร?",
      choices: [
        "ก. บีบอัดข้อมูล",
        "ข. เปรียบเทียบค่าสองค่า และให้ผลลัพธ์เป็น True/False",
        "ค. Copy โปรแกรม",
        "ง. ตรวจสอบสาย Communication"
      ],
      answer: 1
    },
    {
      id: 29,
      text: "ในการเขียนโปรแกรม Flicker ด้วย Timer จำเป็นต้องใช้ Timer กี่ตัวขั้นต่ำ?",
      choices: [
        "ก. 1 ตัว",
        "ข. 2 ตัว",
        "ค. 3 ตัว",
        "ง. 4 ตัว"
      ],
      answer: 1
    },
    {
      id: 30,
      text: "ข้อใดคือคำสั่งที่ใช้เปรียบเทียบว่าค่า A มากกว่าค่า B?",
      choices: [
        "ก. CMP A = B",
        "ข. CMP A > B",
        "ค. ADD A + B",
        "ง. MOV A → B"
      ],
      answer: 1
    },
    {
      id: 31,
      text: "ใน PLC โปรแกรม Section หรือ Network คืออะไร?",
      choices: [
        "ก. ชื่อเครือข่ายสื่อสาร",
        "ข. กลุ่มของ Rung ที่จัดรวมกันเป็นหมวดหมู่ เพื่อความเป็นระเบียบ",
        "ค. ชนิดของ I/O Module",
        "ง. ประเภทของสายไฟ"
      ],
      answer: 1
    },
    {
      id: 32,
      text: "ใน PLC สัญลักษณ์ %I0.0 (หรือ X0, I0) หมายถึงอะไร?",
      choices: [
        "ก. Output ที่จุดที่ 0",
        "ข. Input ที่จุดที่ 0",
        "ค. ค่า Timer 0",
        "ง. ค่า Counter 0"
      ],
      answer: 1
    },
    {
      id: 33,
      text: "ใน PLC สัญลักษณ์ %Q0.0 (หรือ Y0, Q0) หมายถึงอะไร?",
      choices: [
        "ก. Input ที่จุดที่ 0",
        "ข. Output ที่จุดที่ 0",
        "ค. ค่า Memory Bit 0",
        "ง. ค่า Timer 0"
      ],
      answer: 1
    },
    {
      id: 34,
      text: "Internal Relay (หรือ Auxiliary Relay, Memory Bit) ใน PLC คืออะไร?",
      choices: [
        "ก. รีเลย์จริงที่ต่อกับอุปกรณ์ภายนอก",
        "ข. บิตหน่วยความจำภายในที่ใช้เป็นตัวแปรชั่วคราวในโปรแกรม",
        "ค. โมดูล I/O เสริม",
        "ง. แหล่งจ่ายไฟสำรอง"
      ],
      answer: 1
    },
    {
      id: 35,
      text: "ใน PLC โปรแกรม การ Cross Reference ช่วยอะไร?",
      choices: [
        "ก. ตรวจสอบการสื่อสาร",
        "ข. ค้นหาทุกตำแหน่งที่มีการใช้ Address/Symbol นั้นๆ ในโปรแกรม",
        "ค. คำนวณค่าตัวเลข",
        "ง. บันทึกโปรแกรม"
      ],
      answer: 1
    },
    {
      id: 36,
      text: "ใน Ladder Diagram หากมี Coil ซ้ำกัน (Duplicate Coil) จะเกิดอะไรขึ้น?",
      choices: [
        "ก. โปรแกรมทำงานได้เร็วขึ้น",
        "ข. อาจเกิดพฤติกรรมที่ไม่แน่นอน เพราะ Rung สุดท้ายจะ Override ผลของ Rung ก่อนหน้า",
        "ค. PLC จะ Error และหยุดทำงาน",
        "ง. ไม่มีผลใดๆ"
      ],
      answer: 1
    },
    {
      id: 37,
      text: "การใช้ Symbol (Symbolic Address) แทน Address จริงในโปรแกรม PLC มีประโยชน์อย่างไร?",
      choices: [
        "ก. ทำให้โปรแกรมทำงานเร็วขึ้น",
        "ข. ทำให้โปรแกรมอ่านเข้าใจง่าย และแก้ไขได้สะดวกเมื่อ Address เปลี่ยน",
        "ค. ลดขนาดของโปรแกรม",
        "ง. เพิ่มความปลอดภัย"
      ],
      answer: 1
    },
    {
      id: 38,
      text: "ใน IEC 61131-3 Function Block Diagram (FBD) มีลักษณะอย่างไร?",
      choices: [
        "ก. ใช้รูปแบบบรรทัดคำสั่ง",
        "ข. แสดงการทำงานเป็นบล็อกที่เชื่อมต่อกัน คล้ายแผนภาพวงจรอิเล็กทรอนิกส์",
        "ค. ใช้สัญลักษณ์รีเลย์",
        "ง. ใช้ภาษาข้อความ"
      ],
      answer: 1
    },
    {
      id: 39,
      text: "Structured Text (ST) ใน IEC 61131-3 มีลักษณะคล้ายภาษาใด?",
      choices: [
        "ก. Assembly Language",
        "ข. Pascal / C",
        "ค. HTML",
        "ง. SQL"
      ],
      answer: 1
    },
    {
      id: 40,
      text: "Sequential Function Chart (SFC) เหมาะกับงานประเภทใด?",
      choices: [
        "ก. การคำนวณทางคณิตศาสตร์",
        "ข. การควบคุมตามลำดับขั้นตอน (Sequence Control) ที่ซับซ้อน",
        "ค. การสื่อสารเครือข่าย",
        "ง. การแสดงผล HMI"
      ],
      answer: 1
    },
    {
      id: 41,
      text: "ในโปรแกรม PLC ถ้า Input X0 = ON และ X1 = OFF ผลลัพธ์ของวงจร AND คือ?",
      choices: [
        "ก. ON",
        "ข. OFF",
        "ค. ขึ้นอยู่กับ Output",
        "ง. ไม่แน่นอน"
      ],
      answer: 1
    },
    {
      id: 42,
      text: "ในโปรแกรม PLC ถ้า Input X0 = OFF และ X1 = OFF ผลลัพธ์ของวงจร OR คือ?",
      choices: [
        "ก. ON",
        "ข. OFF",
        "ค. ขึ้นอยู่กับค่า Timer",
        "ง. ไม่แน่นอน"
      ],
      answer: 1
    },
    {
      id: 43,
      text: "ขั้นตอนการทดสอบโปรแกรม PLC ด้วย Simulation ที่ถูกต้องคือ?",
      choices: [
        "ก. Download → Run → ทดสอบ I/O จริง",
        "ข. เปิด Simulation → Force Input → ตรวจสอบ Output ใน Simulator",
        "ค. ตัดไฟทั้งหมด → ทดสอบ",
        "ง. รีสตาร์ท PLC → ทดสอบ"
      ],
      answer: 1
    },
    {
      id: 44,
      text: "การใส่ Comment บน Rung ใน Ladder Diagram ควรเขียนอะไร?",
      choices: [
        "ก. ชื่อโปรแกรมเมอร์",
        "ข. อธิบายหน้าที่ของ Rung นั้น เช่น 'Start circuit for Motor A'",
        "ค. วันที่สร้าง",
        "ง. ชื่อโรงงาน"
      ],
      answer: 1
    },
    {
      id: 45,
      text: "ใน Self Retention Circuit หากไม่มี NC Stop Contact จะเกิดอะไร?",
      choices: [
        "ก. วงจรทำงานเร็วขึ้น",
        "ข. ไม่สามารถหยุดการทำงานได้ผ่านโปรแกรม",
        "ค. Output จะไม่ทำงาน",
        "ง. Timer จะ Reset อัตโนมัติ"
      ],
      answer: 1
    },
    {
      id: 46,
      text: "การเขียน Order Control (Step Control) ใน PLC นิยมใช้เทคนิคใด?",
      choices: [
        "ก. ใช้ Analog Input",
        "ข. ใช้ Internal Relay หรือ Step Flag เพื่อบอกว่ากำลังทำงานอยู่ขั้นตอนใด",
        "ค. ใช้ Physical Output ล้วนๆ",
        "ง. ใช้ Communication Protocol"
      ],
      answer: 1
    },
    {
      id: 47,
      text: "ใน PLC โปรแกรมเมื่อต้องการนับชิ้นงาน 100 ชิ้นแล้วหยุดสายพาน ควรใช้?",
      choices: [
        "ก. TON Timer",
        "ข. CTU Counter ตั้งค่า PV = 100",
        "ค. Self Retention Circuit",
        "ง. Flicker Circuit"
      ],
      answer: 1
    },
    {
      id: 48,
      text: "ใน PLC โปรแกรม เมื่อต้องการให้ Alarm ดังหลังจากเซ็นเซอร์ตรวจพบ 5 วินาที ควรใช้?",
      choices: [
        "ก. CTU Counter",
        "ข. TON Timer ตั้งค่า PT = 5 วินาที",
        "ค. Self Retention Circuit",
        "ง. Flicker Circuit"
      ],
      answer: 1
    },
    {
      id: 49,
      text: "ใน PLC ฟังก์ชัน SUB ทำหน้าที่อะไร?",
      choices: [
        "ก. เพิ่มโปรแกรมย่อย",
        "ข. ลบค่าตัวเลข (Subtraction)",
        "ค. หยุดการทำงาน",
        "ง. สื่อสารกับ Sub-module"
      ],
      answer: 1
    },
    {
      id: 50,
      text: "Program Save ในซอฟต์แวร์ PLC ควรบันทึกไฟล์ในรูปแบบใด?",
      choices: [
        "ก. .txt เพื่อเปิดกับ Notepad ได้",
        "ข. รูปแบบ Native format ของซอฟต์แวร์นั้น เช่น .gx3, .zap, .acd เพื่อรักษาข้อมูลครบถ้วน",
        "ค. .pdf เพื่อพิมพ์ได้",
        "ง. .jpg เพื่อดูภาพได้"
      ],
      answer: 1
    }
  ]
};
