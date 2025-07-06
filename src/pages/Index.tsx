import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    details: "",
  });

  const services = [
    {
      id: "daily",
      title: "Ежедневная уборка",
      description: "Поддержание чистоты в вашем доме или офисе ежедневно",
      icon: "Calendar",
      color: "bg-blue-500",
    },
    {
      id: "general",
      title: "Генеральная уборка",
      description:
        "Комплексная уборка после ремонта или перед важными событиями",
      icon: "Zap",
      color: "bg-green-500",
    },
    {
      id: "construction",
      title: "Уборка после ремонта",
      description: "Удаление строительной пыли и грязи для возвращения чистоты",
      icon: "Hammer",
      color: "bg-purple-500",
    },
    {
      id: "office",
      title: "Уборка офисов",
      description: "Профессиональная уборка рабочих пространств",
      icon: "Building",
      color: "bg-orange-500",
    },
    {
      id: "eco",
      title: "Эко-уборка",
      description: "Использование только экологически чистых средств",
      icon: "Leaf",
      color: "bg-teal-500",
    },
    {
      id: "deep",
      title: "Глубокая очистка",
      description:
        "Профессиональное оборудование для особо сложных загрязнений",
      icon: "Sparkles",
      color: "bg-pink-500",
    },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки заявки
    console.log("Заявка:", { ...formData, services: selectedServices });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={18} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                КлинингПро Сургут
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Phone" size={16} />
                <span>+7 (912) 345-67-89</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Заказать услугу
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Быстрый заказ</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                Творческий подход к
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent block">
                  идеальной чистоте
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Мы превращаем уборку в искусство. Современные технологии,
                экологичные средства и индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-30"></div>
              <img
                src="/img/338eac68-be24-4c62-8aa5-b13e9eded6fc.jpg"
                alt="Команда клининговой компании"
                className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Наши услуги
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящие услуги для создания индивидуальной программы
              уборки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                  selectedServices.includes(service.id)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => handleServiceToggle(service.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center`}
                    >
                      <Icon
                        name={service.icon}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <div className="flex items-center mt-1">
                        <Checkbox
                          checked={selectedServices.includes(service.id)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-500">
                          Выбрать услугу
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedServices.length > 0 && (
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-200">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2 text-blue-700">
                  Выбрано услуг: {selectedServices.length}
                </h4>
                <p className="text-gray-600 mb-4">
                  Готовы создать индивидуальную программу уборки специально для
                  вас
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  Оформить заявку
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                О нашей компании
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Мы предоставляем профессиональные услуги по уборке в городе
                Сургут. Наши специалисты используют современное оборудование и
                экологически чистые средства для обеспечения чистоты и гигиены.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">
                    Экологически чистые средства
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Работаем 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Гарантия качества</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Опытная команда</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/img/b644847c-198c-4c0c-a425-3575aa42dbef.jpg"
                alt="Иконки клининговых услуг"
                className="relative z-10 rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Заказать индивидуальную программу
              </h3>
              <p className="text-xl text-gray-600">
                Расскажите о ваших потребностях, и мы создадим персональную
                программу уборки
              </p>
            </div>

            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-lg font-semibold">
                      Ваше имя
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phoneNumber"
                      className="text-lg font-semibold"
                    >
                      Телефон
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="emailAddress"
                      className="text-lg font-semibold"
                    >
                      Email
                    </Label>
                    <Input
                      id="emailAddress"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-lg font-semibold">
                      Адрес
                    </Label>
                    <Input
                      id="address"
                      placeholder="Где проводить уборку?"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="details" className="text-lg font-semibold">
                    Особые пожелания
                  </Label>
                  <Textarea
                    id="details"
                    placeholder="Опишите ваши потребности: площадь, частота уборки, особые требования..."
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-4 text-lg font-semibold"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    Мы свяжемся с вами в течение 30 минут
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold">Телефон</h4>
              <p className="text-blue-100">+7 (912) 345-67-89</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold">Email</h4>
              <p className="text-blue-100">info@surgutcleaning.ru</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold">Адрес</h4>
              <p className="text-blue-100">г. Сургут, ул. Ленина, д. 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={18} className="text-white" />
                </div>
                <h5 className="text-xl font-bold">КлинингПро Сургут</h5>
              </div>
              <p className="text-gray-400">
                Творческий подход к идеальной чистоте. Профессиональные услуги
                клининга в Сургуте.
              </p>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Ежедневная уборка</li>
                <li>Генеральная уборка</li>
                <li>Уборка после ремонта</li>
                <li>Уборка офисов</li>
                <li>Эко-уборка</li>
              </ul>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Контакты</h6>
              <div className="space-y-2 text-gray-400">
                <p>+7 (912) 345-67-89</p>
                <p>info@surgutcleaning.ru</p>
                <p>г. Сургут, ул. Ленина, д. 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 КлинингПро Сургут. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
