import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterType, setFilterType] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const jobs = [
    {
      id: 1,
      title: 'Frontend разработчик',
      company: 'TechCorp',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '150,000 - 250,000 ₽',
      description: 'Ищем опытного Frontend разработчика для работы с React и TypeScript. Требуется опыт от 3 лет.',
      requirements: ['React', 'TypeScript', 'HTML/CSS', 'Git'],
      remote: true
    },
    {
      id: 2,
      title: 'UX/UI дизайнер',
      company: 'DesignStudio',
      location: 'Санкт-Петербург',
      type: 'Частичная занятость',
      salary: '80,000 - 120,000 ₽',
      description: 'Создавай потрясающие пользовательские интерфейсы для мобильных и веб приложений.',
      requirements: ['Figma', 'Adobe Creative Suite', 'Прототипирование'],
      remote: false
    },
    {
      id: 3,
      title: 'Backend разработчик',
      company: 'DataSystems',
      location: 'Екатеринбург',
      type: 'Полная занятость',
      salary: '180,000 - 300,000 ₽',
      description: 'Разрабатывай масштабируемые серверные решения на Node.js и Python.',
      requirements: ['Node.js', 'Python', 'PostgreSQL', 'Docker'],
      remote: true
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'StartupInc',
      location: 'Новосибирск',
      type: 'Полная занятость',
      salary: '200,000 - 350,000 ₽',
      description: 'Управляй жизненным циклом продукта от идеи до запуска.',
      requirements: ['Agile', 'Аналитика', 'Управление командой'],
      remote: true
    }
  ];

  const aiQuestions = [
    "Расскажите о себе и своем опыте работы",
    "Почему вы заинтересованы в этой позиции?",
    "Какие ваши главные профессиональные достижения?",
    "Как вы решаете сложные рабочие задачи?",
    "Где вы видите себя через 5 лет?"
  ];

  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterLocation === '' || job.location === filterLocation) &&
      (filterType === '' || job.type === filterType)
    );
  });

  const handleNextQuestion = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < aiQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('Спасибо! Ваши ответы отправлены HR-менеджеру.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Заголовок */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Briefcase" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-900">JobPortal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Войти</Button>
              <Button>Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Поиск и фильтры */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">Найти работу мечты</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Поиск по названию вакансии..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterLocation} onValueChange={setFilterLocation}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Город" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все города</SelectItem>
                <SelectItem value="Москва">Москва</SelectItem>
                <SelectItem value="Санкт-Петербург">Санкт-Петербург</SelectItem>
                <SelectItem value="Екатеринбург">Екатеринбург</SelectItem>
                <SelectItem value="Новосибирск">Новосибирск</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Тип работы" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все типы</SelectItem>
                <SelectItem value="Полная занятость">Полная занятость</SelectItem>
                <SelectItem value="Частичная занятость">Частичная занятость</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Список вакансий */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-slate-600">
                      <span className="flex items-center">
                        <Icon name="Building2" size={16} className="mr-1" />
                        {job.company}
                      </span>
                      <span className="flex items-center">
                        <Icon name="MapPin" size={16} className="mr-1" />
                        {job.location}
                      </span>
                      {job.remote && (
                        <Badge variant="secondary">
                          <Icon name="Wifi" size={14} className="mr-1" />
                          Удаленно
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600">{job.salary}</div>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requirements.map((req, index) => (
                    <Badge key={index} variant="secondary">{req}</Badge>
                  ))}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button onClick={() => setSelectedJob(job)}>
                      Откликнуться на вакансию
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Отклик на вакансию: {job.title}</DialogTitle>
                    </DialogHeader>
                    
                    <Tabs defaultValue="resume" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="resume">Резюме</TabsTrigger>
                        <TabsTrigger value="interview">ИИ-Интервью</TabsTrigger>
                        <TabsTrigger value="test">Тестирование</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="resume" className="space-y-4">
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">Имя и фамилия</label>
                            <Input placeholder="Введите ваше имя" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Email</label>
                            <Input type="email" placeholder="your@email.com" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Телефон</label>
                            <Input placeholder="+7 (999) 123-45-67" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Опыт работы</label>
                            <Textarea placeholder="Опишите ваш опыт работы..." rows={4} />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Загрузить резюме</label>
                            <Input type="file" accept=".pdf,.doc,.docx" />
                          </div>
                          <Button className="w-full">
                            <Icon name="Send" size={16} className="mr-2" />
                            Отправить резюме
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="interview" className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Icon name="Bot" size={20} className="mr-2 text-blue-600" />
                            ИИ-Ассистент HR
                          </h4>
                          <p className="text-sm text-slate-600">
                            Пройдите краткое собеседование с нашим ИИ-ассистентом. 
                            Это поможет HR-менеджеру лучше понять ваши навыки и мотивацию.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">
                              Вопрос {currentQuestion + 1} из {aiQuestions.length}
                            </label>
                            <div className="mt-2 p-3 bg-slate-100 rounded">
                              {aiQuestions[currentQuestion]}
                            </div>
                          </div>
                          <Textarea 
                            placeholder="Введите ваш ответ..."
                            rows={4}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && e.target.value.trim()) {
                                handleNextQuestion(e.target.value);
                                e.target.value = '';
                              }
                            }}
                          />
                          <Button 
                            onClick={() => {
                              const textarea = document.querySelector('textarea[placeholder="Введите ваш ответ..."]');
                              if (textarea.value.trim()) {
                                handleNextQuestion(textarea.value);
                                textarea.value = '';
                              }
                            }}
                          >
                            {currentQuestion < aiQuestions.length - 1 ? 'Следующий вопрос' : 'Завершить интервью'}
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="test" className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Icon name="Brain" size={20} className="mr-2 text-green-600" />
                            Тестирование навыков
                          </h4>
                          <p className="text-sm text-slate-600">
                            Пройдите короткий тест для оценки ваших профессиональных навыков.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">1. Что такое React?</h5>
                            <div className="space-y-2">
                              {['JavaScript библиотека для UI', 'Backend framework', 'База данных', 'CSS препроцессор'].map((option, index) => (
                                <label key={index} className="flex items-center space-x-2">
                                  <input type="radio" name="q1" value={option} />
                                  <span>{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. Какой принцип SOLID нарушается?</h5>
                            <Textarea placeholder="Опишите пример..." rows={3} />
                          </div>
                          
                          <Button className="w-full">
                            <Icon name="CheckCircle" size={16} className="mr-2" />
                            Завершить тест
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-slate-400 mb-4" />
            <h3 className="text-xl font-medium text-slate-600 mb-2">Вакансии не найдены</h3>
            <p className="text-slate-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;