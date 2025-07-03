"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getTranslation, type Locale } from "@/lib/i18n";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Zap, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Shield,
  Clock,
  MessageCircle,
  Sparkles,
  Award,
  Menu,
  X,
  ChevronRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const [showPopup, setShowPopup] = useState(true);
  
  // Load saved locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('nextinterface-locale') as Locale;
    if (savedLocale && ['en', 'th', 'lo', 'zh'].includes(savedLocale)) {
      setCurrentLocale(savedLocale);
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = savedLocale;
      
      // Apply language-specific font
      document.body.classList.remove('font-lao', 'font-thai', 'font-english', 'font-chinese');
      document.body.classList.add(`font-${savedLocale === 'lo' ? 'lao' : savedLocale === 'th' ? 'thai' : savedLocale === 'zh' ? 'chinese' : 'english'}`);
      
      // Check if Lao font is loaded
      if (savedLocale === 'lo') {
        document.fonts.ready.then(() => {
          console.log('Fonts loaded, checking Noto Sans Lao Looped...');
          const isLoaded = document.fonts.check('1em "Noto Sans Lao Looped"');
          console.log('Noto Sans Lao Looped loaded:', isLoaded);
        });
      }
    } else {
      // Set default language
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.body.classList.remove('font-lao', 'font-thai', 'font-english', 'font-chinese');
      document.body.classList.add('font-english');
    }
  }, []);

  // Save locale to localStorage when it changes
  const handleLocaleChange = (locale: Locale) => {
    setCurrentLocale(locale);
    localStorage.setItem('nextinterface-locale', locale);
    
    // Set document direction for RTL languages (if needed in the future)
    // For now, all our languages are LTR
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = locale;
    
    // Apply language-specific font
    document.body.classList.remove('font-lao', 'font-thai', 'font-english', 'font-chinese');
    const fontClass = locale === 'lo' ? 'lao' : locale === 'th' ? 'thai' : locale === 'zh' ? 'chinese' : 'english';
    document.body.classList.add(`font-${fontClass}`);
    
    // Debug logging
    console.log('Language changed to:', locale);
    console.log('Font class applied:', `font-${fontClass}`);
    console.log('Body classes:', document.body.className);
    
    // Check if Lao font is loaded
    if (locale === 'lo') {
      document.fonts.ready.then(() => {
        console.log('Fonts loaded, checking Noto Sans Lao Looped...');
        const isLoaded = document.fonts.check('1em "Noto Sans Lao Looped"');
        console.log('Noto Sans Lao Looped loaded:', isLoaded);
        if (!isLoaded) {
          console.warn('Noto Sans Lao Looped font not loaded!');
        }
      });
    }
  };
  
  const t = getTranslation(currentLocale);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-[700px] max-h-[70vh] p-0 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow"
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
            >
              <X className="h-6 w-6 text-black" />
            </button>
            <a
              href="https://www.facebook.com/profile.php?id=61577731963654"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/popup.jpg"
                alt="Popup"
                className="block w-full h-auto max-h-[60vh] object-contain cursor-pointer"
                width={800}
                height={450}
              />
            </a>
          </div>
        </div>
      )}
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float pointer-events-none" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/20 rounded-full animate-float pointer-events-none" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/40 rounded-full animate-float pointer-events-none" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/25 rounded-full animate-float pointer-events-none" style={{animationDelay: '3s'}}></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 z-50 transition-all duration-300 shadow-sm shadow-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Image src="/images/logo.png" alt="Logo" className="h-8 w-8 object-contain" width={32} height={32} />
              <Sparkles className="h-4 w-4 text-primary absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-xl font-bold text-foreground bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Nextinterface
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium focus-enhanced">
              {t.nav.services}
            </a>
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium focus-enhanced">
              {t.nav.features}
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium focus-enhanced">
              {t.nav.testimonials}
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium focus-enhanced">
              {t.nav.contact}
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLocale={currentLocale} onLocaleChange={handleLocaleChange} />
            <ThemeToggle />
            <Button className="hidden md:block bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 shadow-lg shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/30 btn-enhanced" asChild>
              <a href="https://m.me/Nextinterface" target="_blank" rel="noopener noreferrer">
                {t.nav.getStarted}
              </a>
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300 focus-enhanced"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-black/20 z-50">
            <div className="px-6 py-4 space-y-4">
              <a href="#services" className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-medium focus-enhanced">
                {t.nav.services}
              </a>
              <a href="#features" className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-medium focus-enhanced">
                {t.nav.features}
              </a>
              <a href="#testimonials" className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-medium focus-enhanced">
                {t.nav.testimonials}
              </a>
              <a href="#contact" className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-medium focus-enhanced">
                {t.nav.contact}
              </a>
              <div className="pt-4 border-t border-border/50">
                <Button className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 shadow-lg shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/30 btn-enhanced" asChild>
                  <a href="https://m.me/Nextinterface" target="_blank" rel="noopener noreferrer">
                    {t.nav.getStarted}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25">
            {t.hero.badge}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent animate-gradient">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 shadow-lg shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/30 btn-enhanced text-lg px-8 py-4" asChild>
              <a href="https://m.me/Nextinterface" target="_blank" rel="noopener noreferrer">
                {t.hero.startProject}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 btn-enhanced text-lg px-8 py-4" asChild>
              <a href="https://m.me/Nextinterface" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-5 w-5" />
                {t.hero.watchDemo}
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">{t.hero.stats.projects}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-foreground/70">{t.hero.stats.satisfaction}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-foreground/70">{t.hero.stats.support}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25">
              {t.services.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.services.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm card-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {t.services.customDesign.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-foreground/70 mb-6">
                  {t.services.customDesign.description}
                </CardDescription>
                <ul className="space-y-3 text-sm text-foreground/60">
                  {t.services.customDesign.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm card-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {t.services.development.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-foreground/70 mb-6">
                  {t.services.development.description}
                </CardDescription>
                <ul className="space-y-3 text-sm text-foreground/60">
                  {t.services.development.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm card-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {t.services.mobileFirst.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-foreground/70 mb-6">
                  {t.services.mobileFirst.description}
                </CardDescription>
                <ul className="space-y-3 text-sm text-foreground/60">
                  {t.services.mobileFirst.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25">
              {t.showcase.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.showcase.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              {t.showcase.subtitle}
            </p>
          </div>
          
          {/* Featured Project */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/25 group-hover:shadow-3xl group-hover:shadow-primary/40 transition-all duration-500">
                  <Image 
                    src="/project/recom.png"
                    alt="Featured Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width={800}
                    height={450}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{t.showcase.featuredProject}</h3>
                    <div className="flex space-x-4">
                      <Button size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm" asChild>
                        <a href="https://1stdesignads.netlify.app/" target="_blank" rel="noopener noreferrer">
                          {t.showcase.viewLive}
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20" asChild>
                        <a href="https://1stdesignads.netlify.app/" target="_blank" rel="noopener noreferrer">
                          {t.showcase.caseStudy}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t.showcase.featuredProject}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  A modern e-commerce platform built with Next.js and TypeScript, featuring advanced search, 
                  real-time inventory, and seamless payment integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Next.js</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Tailwind CSS</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Stripe</Badge>
                </div>
                <Button className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 shadow-lg shadow-primary/25 transition-all duration-300 transform hover:scale-105" asChild>
                  <a href="https://1stdesignads.netlify.app/" target="_blank" rel="noopener noreferrer">
                    {t.showcase.viewProject}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card key={project} className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <Image 
                    src={`/project/p${project}.png`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={225}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Project {project}</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Modern web application with cutting-edge features and responsive design.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">React</Badge>
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">Node.js</Badge>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-white" asChild>
                      <a href="/not-exist">{t.showcase.viewProject}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
              {t.showcase.viewAllProjects}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25">
              {t.features.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.features.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {t.features.fastPerformance.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  {t.features.fastPerformance.description}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {t.features.secureReliable.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  {t.features.secureReliable.description}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {t.features.quickDelivery.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  {t.features.quickDelivery.description}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {t.features.support247.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  {t.features.support247.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25">
              {t.testimonials.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-foreground/60 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-red-600/10 border-primary/30 shadow-2xl shadow-primary/20 backdrop-blur-sm overflow-hidden group">
            <CardContent className="pt-16 pb-16 px-8 relative z-10">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                {t.cta.title}
              </h2>
              <p className="text-lg text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                {t.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 shadow-xl shadow-primary/25 transition-all duration-300 transform hover:scale-105 group hover:shadow-2xl hover:shadow-primary/40 text-lg px-12 py-6" asChild>
                  <a href="https://www.facebook.com/profile.php?id=61577731963654" target="_blank" rel="noopener noreferrer">
                    {t.cta.startConsultation}
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </Button>
                <Button variant="outline" className="text-lg px-12 py-6 border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 group" asChild>
                  <a href="https://www.facebook.com/profile.php?id=61577731963654" target="_blank" rel="noopener noreferrer">
                    <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    {t.cta.viewWork}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25">
              {t.contact.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-foreground mb-8">{t.contact.contactInfo}</h3>
              <div className="space-y-6">
                <div className="flex items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg mb-1">{t.contact.email}</p>
                    <p className="text-foreground/70">nextinterfacere@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg mb-1">{t.contact.phone}</p>
                    <p className="text-foreground/70">+856 20 5999 1574</p>
                  </div>
                </div>
                
                <div className="flex items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg mb-1">{t.contact.location}</p>
                    <p className="text-foreground/70">Laos, Vientiane</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t.contact.quickContact}</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t.contact.name}
                  className="w-full p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <textarea
                  placeholder={t.contact.message}
                  rows={6}
                  className="w-full p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 shadow-lg shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/30 text-lg py-4">
                  {t.contact.sendMessage}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <a 
              href="https://www.facebook.com/profile.php?id=61577731963654" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
            >
              <Facebook className="h-6 w-6 text-primary group-hover:text-primary/80" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
            >
              <Instagram className="h-6 w-6 text-primary group-hover:text-primary/80" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
            >
              <Twitter className="h-6 w-6 text-primary group-hover:text-primary/80" />
            </a>
          </div>
          
          <p className="text-foreground/70">
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
