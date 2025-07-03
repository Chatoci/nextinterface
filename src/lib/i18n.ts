export type Locale = 'en' | 'th' | 'lo' | 'zh'

export const locales: Locale[] = ['en', 'th', 'lo', 'zh']

export const defaultLocale: Locale = 'en'

export const localeNames = {
  en: 'English',
  th: 'ไทย',
  lo: 'ລາວ',
  zh: '中文'
}

export const localeFlags = {
  en: '🇺🇸',
  th: '🇹🇭',
  lo: '🇱🇦',
  zh: '🇨🇳'
}

// Thai translations
const th = {
  nav: {
    services: 'บริการ',
    features: 'คุณสมบัติ',
    testimonials: 'เสียงจากลูกค้า',
    contact: 'ติดต่อ',
    getStarted: 'เริ่มต้นใช้งาน'
  },
  hero: {
    badge: 'บริการออกแบบเว็บไซต์มืออาชีพ',
    title: 'เปลี่ยนโฉม',
    titleHighlight: 'การมีอยู่ดิจิทัลของคุณวันนี้',
    subtitle: 'เราสร้างเว็บไซต์ที่สวยงามและทันสมัยที่ไม่เพียงแต่ดูน่าประทับใจ แต่ยังขับเคลื่อนผลลัพธ์ด้วย จากแนวคิดสู่การเปิดตัว เราจัดการทุกอย่างด้วยความแม่นยำและความคิดสร้างสรรค์',
    startProject: 'เริ่มโปรเจกต์',
    watchDemo: 'ดูตัวอย่าง',
    stats: {
      projects: 'โปรเจกต์ที่เสร็จสิ้น',
      satisfaction: 'ความพึงพอใจของลูกค้า',
      support: 'บริการสนับสนุน'
    }
  },
  services: {
    badge: 'ความเชี่ยวชาญของเรา',
    title: 'บริการของเรา',
    subtitle: 'โซลูชันการออกแบบเว็บที่ครอบคลุมที่ปรับแต่งตามความต้องการทางธุรกิจของคุณด้วยเทคโนโลยีล่าสุด',
    customDesign: {
      title: 'ออกแบบตามสั่ง',
      description: 'การออกแบบที่เป็นเอกลักษณ์และเน้นแบรนด์ที่โดดเด่นจากคู่แข่งด้วยสุนทรียศาสตร์สมัยใหม่',
      features: ['บูรณาการเอกลักษณ์แบรนด์', 'ออกแบบ UI/UX ตามสั่ง', 'เลย์เอาต์ที่ตอบสนอง']
    },
    development: {
      title: 'การพัฒนา',
      description: 'เว็บไซต์ที่ทันสมัย เร็ว และขยายได้ที่สร้างด้วยเทคโนโลยีล่าสุดและแนวทางปฏิบัติที่ดีที่สุด',
      features: ['Next.js & React', 'SEO ที่เหมาะสม', 'เน้นประสิทธิภาพ']
    },
    mobileFirst: {
      title: 'มือถือก่อน',
      description: 'ประสบการณ์ที่สมบูรณ์แบบในทุกอุปกรณ์และขนาดหน้าจอด้วยอินเทอร์เฟซที่ปรับให้เหมาะกับการสัมผัส',
      features: ['ตอบสนองมือถือ', 'ปรับให้เหมาะกับการสัมผัส', 'โหลดเร็ว']
    }
  },
  showcase: {
    badge: 'ผลงานของเรา',
    title: 'แสดงผลงานของเรา',
    subtitle: 'ค้นพบโปรเจกต์ล่าสุดของเราและดูว่าเรากลายเป็นแนวคิดเป็นประสบการณ์ดิจิทัลที่สวยงามได้อย่างไร',
    featuredProject: 'โปรเจกต์แนะนำ',
    viewLive: 'ดูสด',
    caseStudy: 'กรณีศึกษา',
    viewProject: 'ดูโปรเจกต์',
    viewAllProjects: 'ดูโปรเจกต์ทั้งหมด'
  },
  features: {
    badge: 'ทำไมต้องเลือกเรา',
    title: 'ทำไมต้องเลือก Nextinterface?',
    subtitle: 'เรารวมความคิดสร้างสรรค์กับเทคโนโลยีเพื่อส่งมอบผลลัพธ์ที่โดดเด่นที่เกินความคาดหวัง',
    fastPerformance: {
      title: 'ประสิทธิภาพเร็ว',
      description: 'เว็บไซต์ที่เร็วเป็นสายฟ้าที่ทำให้ผู้เยี่ยมชมของคุณมีส่วนร่วมและแปลงผลได้ดีขึ้น'
    },
    secureReliable: {
      title: 'ปลอดภัยและเชื่อถือได้',
      description: 'ความปลอดภัยระดับองค์กรและการรับประกันเวลาใช้งาน 99.9% เพื่อความสบายใจ'
    },
    quickDelivery: {
      title: 'ส่งมอบเร็ว',
      description: 'เวลาการส่งมอบที่รวดเร็วโดยไม่ประนีประนอมคุณภาพหรือความใส่ใจในรายละเอียด'
    },
    support247: {
      title: 'บริการสนับสนุน 24/7',
      description: 'การสนับสนุนตลอด 24 ชั่วโมงเพื่อช่วยให้คุณประสบความสำเร็จและเติบโตธุรกิจของคุณ'
    }
  },
  testimonials: {
    badge: 'ความสำเร็จของลูกค้า',
    title: 'ลูกค้าของเราพูดอะไร',
    subtitle: 'อย่าเพียงแค่เชื่อคำพูดของเรา - ฟังจากลูกค้าที่พึงพอใจของเราที่ได้เปลี่ยนโฉมการมีอยู่ดิจิทัลของพวกเขา',
    testimonials: [
      {
        text: 'Nextinterface เปลี่ยนโฉมการมีอยู่ออนไลน์ของเราโดยสิ้นเชิง เว็บไซต์ใหม่ไม่เพียงแต่สวยงาม แต่ยังขับเคลื่อนการแปลงผลได้ดีกว่าเดิมมาก ความใส่ใจในรายละเอียดของทีมนั้นยอดเยี่ยม',
        name: 'ซาราห์ จอห์นสัน',
        role: 'CEO, TechStart'
      },
      {
        text: 'เป็นมืออาชีพ ตอบสนอง และส่งมอบสิ่งที่เราต้องการอย่างแท้จริง ทีมที่ Nextinterface เกินความคาดหวังของเราและผลลัพธ์พูดแทนตัวมันเอง',
        name: 'ไมค์ เชน',
        role: 'ผู้ก่อตั้ง, GlobalTech'
      },
      {
        text: 'ความใส่ใจในรายละเอียดและแนวทางการออกแบบสมัยใหม่สร้างความแตกต่างทั้งหมด เว็บไซต์ใหม่ของเราเป็นเกมเชนเจอร์และปรับปรุงการรับรู้แบรนด์ของเราอย่างมีนัยสำคัญ',
        name: 'เอมิลี่ เดวิส',
        role: 'ผู้อำนวยการสร้างสรรค์, DesignCo'
      }
    ]
  },
  cta: {
    title: 'พร้อมที่จะเปลี่ยนโฉมเว็บไซต์ของคุณหรือยัง?',
    subtitle: 'มาคุยกันเรื่องโปรเจกต์ของคุณและสร้างสิ่งที่น่าประทับใจด้วยกัน เริ่มต้นด้วยการปรึกษาฟรีวันนี้และเข้าร่วมกับลูกค้าที่พึงพอใจหลายร้อยคน',
    startConsultation: 'เริ่มการปรึกษาฟรี',
    viewWork: 'ดูผลงานของเรา'
  },
  contact: {
    badge: 'ติดต่อเรา',
    title: 'มาเริ่มโปรเจกต์ของคุณกัน',
    subtitle: 'พร้อมที่จะเริ่มโปรเจกต์ของคุณหรือยัง? ติดต่อเราวันนี้เพื่อการปรึกษาฟรีและมาสร้างสิ่งที่น่าประทับใจด้วยกัน',
    contactInfo: 'ข้อมูลติดต่อ',
    quickContact: 'ติดต่อด่วน',
    email: 'อีเมล',
    phone: 'โทรศัพท์',
    location: 'ที่ตั้ง',
    name: 'ชื่อของคุณ',
    emailPlaceholder: 'อีเมลของคุณ',
    message: 'ข้อความของคุณ',
    sendMessage: 'ส่งข้อความ'
  },
  footer: {
    rights: '© 2024 Nextinterface สงวนลิขสิทธิ์ บริการออกแบบเว็บไซต์มืออาชีพ'
  }
}

// Lao translations
const lo = {
  nav: {
    services: 'ບໍລິການ',
    features: 'ຄຸນສົມບັດ',
    testimonials: 'ຄຳເຫັນລູກຄ້າ',
    contact: 'ຕິດຕໍ່',
    getStarted: 'ເລີ່ມຕົ້ນ'
  },
  hero: {
    badge: 'ບໍລິການອອກແບບເວັບໄຊທ໌ມືອາຊີບ',
    title: 'ປ່ຽນແປງ',
    titleHighlight: 'ການມີຢູ່ດິຈິຕອນຂອງທ່ານມື້ນີ້',
    subtitle: 'ພວກເຮົາສ້າງເວັບໄຊທ໌ທີ່ສວຍງາມ ທັນສະໄໝ ທີ່ບໍ່ພຽງແຕ່ເບິ່ງສວຍງາມ ແຕ່ຍັງຂັບເຄື່ອນຜົນລັບໄດ້ ຈາກແນວຄິດສູ່ການເປີດຕົວ ພວກເຮົາຈັດການທຸກຢ່າງດ້ວຍຄວາມແມ່ນຍໍາ ແລະ ຄວາມຄິດສ້າງສັນ',
    startProject: 'ເລີ່ມໂປຣເຈັກ',
    watchDemo: 'ເບິ່ງຕົວຢ່າງ',
    stats: {
      projects: 'ໂປຣເຈັກທີ່ສຳເລັດ',
      satisfaction: 'ຄວາມພໍໃຈຂອງລູກຄ້າ',
      support: 'ບໍລິການສະໜັບສະໜູນ'
    }
  },
  services: {
    badge: 'ຄວາມຊ່ຽວຊານຂອງພວກເຮົາ',
    title: 'ບໍລິການຂອງພວກເຮົາ',
    subtitle: 'ວິທີແກ້ໄຂການອອກແບບເວັບທີ່ຄົບຖ້ວນທີ່ປັບແຕ່ງຕາມຄວາມຕ້ອງການທາງທຸລະກິດຂອງທ່ານດ້ວຍເທັກໂນໂລຊີລ່າສຸດ',
    customDesign: {
      title: 'ອອກແບບຕາມສັ່ງ',
      description: 'ການອອກແບບທີ່ເປັນເອກະລັກ ແລະ ເນັ້ນແບຣນທີ່ໂດດເດັ່ນຈາກຄູ່ແຂ່ງດ້ວຍສິນລະປະທັນສະໄໝ',
      features: ['ການລວມເອກະລັກແບຣນ', 'ອອກແບບ UI/UX ຕາມສັ່ງ', 'ເລຍໂອຕທີ່ຕອບສະໜອງ']
    },
    development: {
      title: 'ການພັດທະນາ',
      description: 'ເວັບໄຊທ໌ທີ່ທັນສະໄໝ ໄວ ແລະ ຂະຫຍາຍໄດ້ທີ່ສ້າງດ້ວຍເທັກໂນໂລຊີລ່າສຸດ ແລະ ການປະຕິບັດທີ່ດີທີ່ສຸດ',
      features: ['Next.js & React', 'SEO ທີ່ເໝາະສົມ', 'ເນັ້ນປະສິດທິພາບ']
    },
    mobileFirst: {
      title: 'ມືຖືກ່ອນ',
      description: 'ປະສົບການທີ່ສົມບູນແບບໃນທຸກອຸປະກອນ ແລະ ຂະໜາດຈໍທີ່ມີອິນເຕີເຟດທີ່ປັບເໝາະກັບການສຳພັດ',
      features: ['ຕອບສະໜອງມືຖື', 'ປັບເໝາະກັບການສຳພັດ', 'ໂຫຼດໄວ']
    }
  },
  showcase: {
    badge: 'ຜົນງານຂອງພວກເຮົາ',
    title: 'ສະແດງຜົນງານຂອງພວກເຮົາ',
    subtitle: 'ຄົ້ນພົບໂປຣເຈັກລ່າສຸດຂອງພວກເຮົາ ແລະ ເບິ່ງວ່າພວກເຮົາປ່ຽນແນວຄິດເປັນປະສົບການດິຈິຕອນທີ່ສວຍງາມໄດ້ແນວໃດ',
    featuredProject: 'ໂປຣເຈັກແນະນຳ',
    viewLive: 'ເບິ່ງສົດ',
    caseStudy: 'ກໍລະນີສຶກສາ',
    viewProject: 'ເບິ່ງໂປຣເຈັກ',
    viewAllProjects: 'ເບິ່ງໂປຣເຈັກທັງໝົດ'
  },
  features: {
    badge: 'ເປັນຫຍັງຕ້ອງເລືອກ Nextinterface?',
    title: 'ເປັນຫຍັງຕ້ອງເລືອກ Nextinterface?',
    subtitle: 'ພວກເຮົາລວມຄວາມຄິດສ້າງສັນກັບເທັກໂນໂລຊີເພື່ອສົ່ງມອບຜົນລັບທີ່ດີເລີດທີ່ເກີນຄວາມຄາດຫວັງ',
    fastPerformance: {
      title: 'ປະສິດທິພາບໄວ',
      description: 'ເວັບໄຊທ໌ທີ່ໄວເປັນສາຍຟ້າທີ່ເຮັດໃຫ້ຜູ້ເຂົ້າເບິ່ງຂອງທ່ານມີສ່ວນຮ່ວມ ແລະ ແລກປ່ຽນຜົນໄດ້ດີກວ່າ'
    },
    secureReliable: {
      title: 'ປອດໄພ ແລະ ໄວ້ວາງໃຈໄດ້',
      description: 'ຄວາມປອດໄພລະດັບອົງກອນ ແລະ ການຮັບປະກັນເວລາໃຊ້ງານ 99.9% ເພື່ອຄວາມສະບາຍໃຈ'
    },
    quickDelivery: {
      title: 'ສົ່ງມອບໄວ',
      description: 'ເວລາການສົ່ງມອບທີ່ລື່ນໄວໂດຍບໍ່ປະນິປະນົມຄຸນນະພາບ ຫຼື ຄວາມສົນໃຈໃນລາຍລະອຽດ'
    },
    support247: {
      title: 'ບໍລິການສະໜັບສະໜູນ 24/7',
      description: 'ການສະໜັບສະໜູນຕະຫຼອດ 24 ຊົ່ວໂມງເພື່ອຊ່ວຍໃຫ້ທ່ານປະສົບຜົນສຳເລັດ ແລະ ເຕີບໂຕທຸລະກິດຂອງທ່ານ'
    }
  },
  testimonials: {
    badge: 'ຄວາມສຳເລັດຂອງລູກຄ້າ',
    title: 'ລູກຄ້າຂອງພວກເຮົາເວົ້າຫຍັງ',
    subtitle: 'ຢ່າພຽງແຕ່ເຊື່ອຄຳເວົ້າຂອງພວກເຮົາ - ຟັງຈາກລູກຄ້າທີ່ພໍໃຈຂອງພວກເຮົາທີ່ໄດ້ປ່ຽນແປງການມີຢູ່ດິຈິຕອນຂອງພວກເຂົາ',
    testimonials: [
      {
        text: 'Nextinterface ປ່ຽນແປງການມີຢູ່ອອນລາຍຂອງພວກເຮົາໂດຍສິ້ນສຸດ ເວັບໄຊທ໌ໃໝ່ບໍ່ພຽງແຕ່ສວຍງາມ ແຕ່ຍັງຂັບເຄື່ອນການແລກປ່ຽນໄດ້ດີກວ່າເກົ່າຫຼາຍ ຄວາມສົນໃຈໃນລາຍລະອຽດຂອງທີມນັ້ນຍອດຢ້ຽມ',
        name: 'ຊາຣາ ຈອນສັນ',
        role: 'CEO, TechStart'
      },
      {
        text: 'ເປັນມືອາຊີບ ຕອບສະໜອງ ແລະ ສົ່ງມອບສິ່ງທີ່ພວກເຮົາຕ້ອງການຢ່າງແທ້ຈິງ ທີມທີ່ Nextinterface ເກີນຄວາມຄາດຫວັງຂອງພວກເຮົາ ແລະ ຜົນລັບເວົ້າແທນຕົວມັນເອງ',
        name: 'ໄມກ ເຊນ',
        role: 'ຜູ້ກໍ່ຕັ້ງ, GlobalTech'
      },
      {
        text: 'ຄວາມສົນໃຈໃນລາຍລະອຽດ ແລະ ວິທີການອອກແບບທັນສະໄໝສ້າງຄວາມແຕກຕ່າງທັງໝົດ ເວັບໄຊທ໌ໃໝ່ຂອງພວກເຮົາເປັນການປ່ຽນແປງແບບກິມ ແລະ ປັບປຸງການຮັບຮູ້ແບຣນຂອງພວກເຮົາຢ່າງມີຄວາມໝາຍ',
        name: 'ເອມິລີ ເດວິສ',
        role: 'ຜູ້ອຳນວຍການສ້າງສັນ, DesignCo'
      }
    ]
  },
  cta: {
    title: 'ພ້ອມທີ່ຈະປ່ຽນແປງເວັບໄຊທ໌ຂອງທ່ານບໍ?',
    subtitle: 'ມາຄົວກັນເລື່ອງໂປຣເຈັກຂອງທ່ານ ແລະ ສ້າງສິ່ງທີ່ປະທັບໃຈດ້ວຍກັນ ເລີ່ມຕົ້ນດ້ວຍການປຶກສາຟຣີມື້ນີ້ ແລະ ເຂົ້າຮ່ວມກັບລູກຄ້າທີ່ພໍໃຈຫຼາຍຮ້ອຍຄົນ',
    startConsultation: 'ເລີ່ມການປຶກສາຟຣີ',
    viewWork: 'ເບິ່ງຜົນງານຂອງພວກເຮົາ'
  },
  contact: {
    badge: 'ຕິດຕໍ່ພວກເຮົາ',
    title: 'ມາເລີ່ມໂປຣເຈັກຂອງທ່ານກັນ',
    subtitle: 'ພ້ອມທີ່ຈະເລີ່ມໂປຣເຈັກຂອງທ່ານບໍ? ຕິດຕໍ່ພວກເຮົາມື້ນີ້ສຳລັບການປຶກສາຟຣີ ແລະ ມາສ້າງສິ່ງທີ່ປະທັບໃຈດ້ວຍກັນ',
    contactInfo: 'ຂໍ້ມູນຕິດຕໍ່',
    quickContact: 'ຕິດຕໍ່ດ່ວນ',
    email: 'ອີເມວ',
    phone: 'ໂທລະສັບ',
    location: 'ສະຖານທີ່',
    name: 'ຊື່ຂອງທ່ານ',
    emailPlaceholder: 'ອີເມວຂອງທ່ານ',
    message: 'ຂໍ້ຄວາມຂອງທ່ານ',
    sendMessage: 'ສົ່ງຂໍ້ຄວາມ'
  },
  footer: {
    rights: '© 2024 Nextinterface ສະຫງວນລິຂະສິດ ບໍລິການອອກແບບເວັບໄຊທ໌ມືອາຊີບ'
  }
}

// English translations (default)
const en = {
  nav: {
    services: 'Services',
    features: 'Features',
    testimonials: 'Testimonials',
    contact: 'Contact',
    getStarted: 'Get Started'
  },
  hero: {
    badge: 'Professional Website Design Services',
    title: 'Transform Your Digital',
    titleHighlight: 'Presence Today',
    subtitle: 'We create stunning, modern websites that not only look amazing but also drive results. From concept to launch, we handle everything with precision and creativity.',
    startProject: 'Start Your Project',
    watchDemo: 'Watch Demo',
    stats: {
      projects: 'Projects Completed',
      satisfaction: 'Client Satisfaction',
      support: 'Support Available'
    }
  },
  services: {
    badge: 'Our Expertise',
    title: 'Our Services',
    subtitle: 'Comprehensive web design solutions tailored to your business needs with cutting-edge technology',
    customDesign: {
      title: 'Custom Design',
      description: 'Unique, brand-focused designs that stand out from the competition with modern aesthetics',
      features: ['Brand identity integration', 'Custom UI/UX design', 'Responsive layouts']
    },
    development: {
      title: 'Development',
      description: 'Modern, fast, and scalable websites built with cutting-edge technology and best practices',
      features: ['Next.js & React', 'SEO optimized', 'Performance focused']
    },
    mobileFirst: {
      title: 'Mobile First',
      description: 'Perfect experience across all devices and screen sizes with touch-optimized interfaces',
      features: ['Mobile responsive', 'Touch optimized', 'Fast loading']
    }
  },
  showcase: {
    badge: 'Our Portfolio',
    title: 'Showcase Our Work',
    subtitle: 'Discover our latest projects and see how we transform ideas into stunning digital experiences',
    featuredProject: 'Featured Project',
    viewLive: 'View Live',
    caseStudy: 'Case Study',
    viewProject: 'View Project',
    viewAllProjects: 'View All Projects'
  },
  features: {
    badge: 'Why Choose Us',
    title: 'Why Choose Nextinterface?',
    subtitle: 'We combine creativity with technology to deliver exceptional results that exceed expectations',
    fastPerformance: {
      title: 'Fast Performance',
      description: 'Lightning-fast websites that keep your visitors engaged and convert better'
    },
    secureReliable: {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for peace of mind'
    },
    quickDelivery: {
      title: 'Quick Delivery',
      description: 'Fast turnaround times without compromising quality or attention to detail'
    },
    support247: {
      title: '24/7 Support',
      description: 'Round-the-clock support to help you succeed and grow your business'
    }
  },
  testimonials: {
    badge: 'Client Success',
    title: 'What Our Clients Say',
    subtitle: 'Don\'t just take our word for it - hear from our satisfied clients who have transformed their digital presence',
    testimonials: [
      {
        text: 'Nextinterface transformed our online presence completely. The new website is not only beautiful but also drives conversions like never before. The team\'s attention to detail is outstanding.',
        name: 'Sarah Johnson',
        role: 'CEO, TechStart'
      },
      {
        text: 'Professional, responsive, and delivered exactly what we needed. The team at Nextinterface exceeded our expectations and the results speak for themselves.',
        name: 'Mike Chen',
        role: 'Founder, GlobalTech'
      },
      {
        text: 'The attention to detail and modern design approach made all the difference. Our new website is a game-changer and has significantly improved our brand perception.',
        name: 'Emily Davis',
        role: 'Creative Director, DesignCo'
      }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Website?',
    subtitle: 'Let\'s discuss your project and create something amazing together. Get started with a free consultation today and join hundreds of satisfied clients.',
    startConsultation: 'Start Free Consultation',
    viewWork: 'View Our Work'
  },
  contact: {
    badge: 'Get In Touch',
    title: 'Let\'s Start Your Project',
    subtitle: 'Ready to start your project? Contact us today for a free consultation and let\'s create something amazing together',
    contactInfo: 'Contact Information',
    quickContact: 'Quick Contact',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    name: 'Your Name',
    emailPlaceholder: 'Your Email',
    message: 'Your Message',
    sendMessage: 'Send Message'
  },
  footer: {
    rights: '© 2024 Nextinterface. All rights reserved. Professional website design services.'
  }
}

// Chinese translations (Simplified, placeholder)
const zh = {
  nav: {
    services: '服务',
    features: '特色',
    testimonials: '客户评价',
    contact: '联系',
    getStarted: '立即开始'
  },
  hero: {
    badge: '专业网站设计服务',
    title: '焕新您的',
    titleHighlight: '数字形象',
    subtitle: '我们打造令人惊艳、现代的网站，不仅外观出色，还能带来实际效果。从创意到上线，我们精益求精，富有创意。',
    startProject: '开始项目',
    watchDemo: '观看演示',
    stats: {
      projects: '已完成项目',
      satisfaction: '客户满意度',
      support: '支持服务'
    }
  },
  services: {
    badge: '我们的专长',
    title: '我们的服务',
    subtitle: '量身定制的全方位网站设计解决方案，采用最新技术',
    customDesign: {
      title: '定制设计',
      description: '独特、以品牌为中心的设计，现代美学，脱颖而出',
      features: ['品牌识别', '定制UI/UX设计', '响应式布局']
    },
    development: {
      title: '开发',
      description: '采用最新技术和最佳实践，打造现代、快速、可扩展的网站',
      features: ['Next.js & React', 'SEO优化', '注重性能']
    },
    mobileFirst: {
      title: '移动优先',
      description: '在所有设备和屏幕尺寸上都能获得完美体验',
      features: ['移动响应', '触控优化', '加载快速']
    }
  },
  showcase: {
    badge: '我们的作品',
    title: '案例展示',
    subtitle: '探索我们的最新项目，见证创意如何变为精彩的数字体验',
    featuredProject: '精选项目',
    viewLive: '在线查看',
    caseStudy: '案例分析',
    viewProject: '查看项目',
    viewAllProjects: '查看全部项目'
  },
  features: {
    badge: '为什么选择我们',
    title: '为什么选择 Nextinterface?',
    subtitle: '我们将创意与技术结合，交付超越预期的卓越成果',
    fastPerformance: {
      title: '极速性能',
      description: '闪电般的网站速度，提升用户参与度和转化率'
    },
    secureReliable: {
      title: '安全可靠',
      description: '企业级安全，99.9%在线率，安心无忧'
    },
    quickDelivery: {
      title: '快速交付',
      description: '高效交付，质量与细节兼顾'
    },
    support247: {
      title: '全天候支持',
      description: '全天候支持，助您成功发展业务'
    }
  },
  testimonials: {
    badge: '客户成功',
    title: '客户怎么说',
    subtitle: '听听我们的客户如何评价他们的数字转型',
    testimonials: [
      {
        text: 'Nextinterface 完全改变了我们的线上形象。新网站不仅美观，还极大提升了转化率。团队的细致令人印象深刻。',
        name: '李华',
        role: 'CEO, 科技启航'
      },
      {
        text: '专业、响应迅速，完全满足了我们的需求。Nextinterface 团队超出了我们的期望，成果有目共睹。',
        name: '王伟',
        role: '创始人, 环球科技'
      },
      {
        text: '注重细节和现代设计理念让我们的网站脱颖而出。新网站极大提升了我们的品牌形象。',
        name: '张敏',
        role: '创意总监, 设计公司'
      }
    ]
  },
  cta: {
    title: '准备好焕新您的网站了吗?',
    subtitle: '让我们一起讨论您的项目，创造非凡。立即免费咨询，加入数百位满意客户行列。',
    startConsultation: '免费咨询',
    viewWork: '查看作品'
  },
  contact: {
    badge: '联系我们',
    title: '开启您的项目',
    subtitle: '准备好开始您的项目了吗？立即联系我们，免费咨询，共创精彩。',
    contactInfo: '联系方式',
    quickContact: '快速联系',
    email: '邮箱',
    phone: '电话',
    location: '地址',
    name: '您的姓名',
    emailPlaceholder: '您的邮箱',
    message: '您的信息',
    sendMessage: '发送信息'
  },
  footer: {
    rights: '© 2024 Nextinterface. 保留所有权利. 专业网站设计服务。'
  }
}

export const translations = {
  en,
  th,
  lo,
  zh
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
} 