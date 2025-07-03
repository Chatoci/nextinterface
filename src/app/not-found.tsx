"use client";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/lib/i18n";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('nextinterface-locale') as Locale;
    if (savedLocale && ['en', 'th', 'lo', 'zh'].includes(savedLocale)) {
      setCurrentLocale(savedLocale);
      document.body.classList.remove('font-lao', 'font-thai', 'font-english', 'font-chinese');
      document.body.classList.add(`font-${savedLocale === 'lo' ? 'lao' : savedLocale === 'th' ? 'thai' : savedLocale === 'zh' ? 'chinese' : 'english'}`);
    } else {
      setCurrentLocale('en');
      document.body.classList.remove('font-lao', 'font-thai', 'font-english', 'font-chinese');
      document.body.classList.add('font-english');
    }
  }, []);

  // Custom 404 translations
  const errorText = {
    en: {
      title: "Page Not Found",
      desc: "Sorry, the page you are looking for does not exist.",
      back: "Go Home"
    },
    th: {
      title: "ไม่พบหน้าที่คุณต้องการ",
      desc: "ขออภัย ไม่พบหน้าที่คุณค้นหา",
      back: "กลับหน้าหลัก"
    },
    lo: {
      title: "ບໍ່ພົບໜ້າທີ່ທ່ານຄົ້ນຫາ",
      desc: "ຂໍອະໄພ ບໍ່ພົບໜ້ານີ້",
      back: "ກັບໜ້າຫຼັກ"
    },
    zh: {
      title: "页面未找到",
      desc: "抱歉，您访问的页面不存在。",
      back: "返回首页"
    }
  };
  const lang = currentLocale as keyof typeof errorText;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="text-center">
        <div className="text-7xl font-extrabold mb-6 text-primary drop-shadow-lg">404</div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{errorText[lang].title}</h1>
        <p className="text-lg text-foreground/70 mb-8">{errorText[lang].desc}</p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 shadow-lg shadow-primary/25 text-lg px-8 py-4">
            {errorText[lang].back}
          </Button>
        </Link>
      </div>
    </div>
  );
} 