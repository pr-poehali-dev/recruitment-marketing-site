import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ users: 0, hires: 0, time: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Анимация счетчиков
    const animateCounters = () => {
      const targets = { users: 50000, hires: 12000, time: 75 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          users: Math.floor(targets.users * progress),
          hires: Math.floor(targets.hires * progress),
          time: Math.floor(targets.time * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);
    };
    
    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  const solutions = [
    {
      icon: 'Users',
      title: 'Привлечение талантов',
      description: 'Создавайте привлекательные карьерные страницы и автоматизируйте процесс поиска кандидатов'
    },
    {
      icon: 'Target',
      title: 'Точное таргетирование',
      description: 'Находите идеальных кандидатов с помощью ИИ-алгоритмов и расширенной аналитики'
    },
    {
      icon: 'Zap',
      title: 'Автоматизация',
      description: 'Оптимизируйте рабочие процессы с помощью автоматических уведомлений и интеграций'
    }
  ];

  const integrations = [
    { name: 'Workday', logo: '💼' },
    { name: 'BambooHR', logo: '🎋' },
    { name: 'Greenhouse', logo: '🏠' },
    { name: 'Lever', logo: '⚖️' },
    { name: 'SmartRecruiters', logo: '🧠' },
    { name: 'JazzHR', logo: '🎵' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Навигация */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b transition-all duration-700 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">RecruitPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-slate-600 hover:text-primary transition-colors">Решения</a>
              <a href="#products" className="text-slate-600 hover:text-primary transition-colors">Продукты</a>
              <a href="#integrations" className="text-slate-600 hover:text-primary transition-colors">Интеграции</a>
              <a href="#resources" className="text-slate-600 hover:text-primary transition-colors">Ресурсы</a>
              <Button variant="outline" className="mr-2">Войти</Button>
              <Button>Начать бесплатно</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Новое в рекрутинге
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Революция в <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                рекрутинговом
              </span> <br />
              маркетинге
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Привлекайте лучших кандидатов, автоматизируйте процессы найма и создавайте 
              выдающийся опыт взаимодействия с помощью нашей инновационной платформы.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
                Начать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Hero изображение */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <img 
              src="/img/f0ee1272-2d50-48fa-8be9-68de2393724c.jpg" 
              alt="Recruitment Dashboard" 
              className="mx-auto rounded-2xl shadow-2xl max-w-4xl w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters.users.toLocaleString()}+
              </div>
              <p className="text-slate-600">Активных пользователей</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters.hires.toLocaleString()}+
              </div>
              <p className="text-slate-600">Успешных найма</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters.time}%
              </div>
              <p className="text-slate-600">Экономия времени</p>
            </div>
          </div>
        </div>
      </section>

      {/* Решения */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Комплексные решения
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              От привлечения кандидатов до финального найма — всё в одной платформе
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-scale-in`} style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name={solution.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Интеграции */}
      <section id="integrations" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Интеграция с ATS системами
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Бесшовная интеграция с популярными системами управления кандидатами
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 p-6 text-center border-0 shadow-md">
                <div className="text-4xl mb-3">{integration.logo}</div>
                <p className="text-sm font-medium text-slate-700">{integration.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы революционизировать свой рекрутинг?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Присоединитесь к тысячам компаний, которые уже трансформировали свой процесс найма
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary transition-all">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Users" size={28} className="text-primary" />
                <span className="text-xl font-bold">RecruitPro</span>
              </div>
              <p className="text-slate-400">
                Инновационная платформа для современного рекрутинга
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Recruitment Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ATS Integration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-slate-400">
                <li>info@recruitpro.com</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 RecruitPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;