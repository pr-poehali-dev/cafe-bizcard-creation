import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const dishes = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/214a4f69-46df-4012-82a0-9b52d143d641/files/e3fd23c5-4215-46e8-a923-8e74d15b85ac.jpg",
      title: "Паста с овощами",
      description: "Домашняя паста со свежими сезонными овощами"
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/214a4f69-46df-4012-82a0-9b52d143d641/files/1d867b02-43cd-432e-bf7f-ed05322269af.jpg",
      title: "Десерт дня",
      description: "Нежный торт с ягодами и кремом"
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/214a4f69-46df-4012-82a0-9b52d143d641/files/e3fd23c5-4215-46e8-a923-8e74d15b85ac.jpg",
      title: "Авторская кухня",
      description: "Эксклюзивные блюда от нашего шеф-повара"
    }
  ];

  const contacts = [
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (495) 123-45-67",
      link: "tel:+74951234567"
    },
    {
      icon: "Mail",
      label: "Email",
      value: "director@cafe.ru",
      link: "mailto:director@cafe.ru"
    },
    {
      icon: "MapPin",
      label: "Адрес",
      value: "Москва, ул. Примерная, 1",
      link: "https://maps.google.com"
    }
  ];

  const socials = [
    { icon: "Instagram", link: "#", color: "hover:text-pink-600" },
    { icon: "Facebook", link: "#", color: "hover:text-blue-600" },
    { icon: "Send", link: "#", color: "hover:text-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <section className="mb-16 animate-fade-in">
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[400px] md:h-auto">
                <img 
                  src="https://cdn.poehali.dev/projects/214a4f69-46df-4012-82a0-9b52d143d641/files/eb13e257-9c77-4613-863b-19baad432af0.jpg" 
                  alt="Коммерческий директор"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-secondary/10">
                <div className="mb-6">
                  <h1 className="text-4xl md:text-5xl font-bold text-accent mb-3">
                    Анна Петрова
                  </h1>
                  <p className="text-xl text-primary font-semibold mb-2">
                    Коммерческий директор
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Кафе "Вкусный уголок"
                  </p>
                </div>
                
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  Более 10 лет опыта в ресторанном бизнесе. 
                  Создаём незабываемую атмосферу и радуем гостей 
                  авторской кухней и безупречным сервисом.
                </p>
                
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.location.href = 'tel:+74951234567'}
                  >
                    <Icon name="Phone" className="mr-2" size={20} />
                    Позвонить
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 hover:bg-secondary/50 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:director@cafe.ru'}
                  >
                    <Icon name="Mail" className="mr-2" size={20} />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 text-center">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contacts.map((contact, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white"
                onClick={() => window.open(contact.link, '_blank')}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name={contact.icon as any} className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    <p className="font-semibold text-foreground">{contact.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Мы в социальных сетях</h3>
                <p className="opacity-90">Следите за нашими новостями и акциями</p>
              </div>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant="secondary"
                    className={`transition-all duration-300 hover:scale-110 ${social.color}`}
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    <Icon name={social.icon as any} size={24} />
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 text-center">
            Наши фирменные блюда
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <Card 
                key={dish.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-accent mb-2">{dish.title}</h3>
                  <p className="text-muted-foreground">{dish.description}</p>
                  <Button 
                    variant="link" 
                    className="mt-4 text-primary p-0 h-auto font-semibold group/btn"
                  >
                    Узнать больше
                    <Icon name="ArrowRight" className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground">
            © 2024 Кафе "Вкусный уголок". Создано для гурманов с любовью ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
