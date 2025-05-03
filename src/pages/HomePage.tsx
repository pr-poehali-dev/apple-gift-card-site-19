
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HomePage = () => {
  const giftCardData = [
    {
      value: 1000,
      icon: "Gift",
      color: "text-blue-500",
      description: "Подарочная карта Apple Store номиналом 1000 рублей"
    },
    {
      value: 2500,
      icon: "ShoppingBag",
      color: "text-purple-500",
      description: "Подарочная карта Apple Store номиналом 2500 рублей"
    },
    {
      value: 5000,
      icon: "CreditCard",
      color: "text-pink-500",
      description: "Подарочная карта Apple Store номиналом 5000 рублей"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f7]">
      {/* Навигация */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-medium text-black">
            Apple Gift
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Главная
            </Link>
            <Link to="/products" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Карты
            </Link>
            <Link to="/guide" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Инструкция
            </Link>
          </nav>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/products">Купить сейчас</Link>
          </Button>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="w-full py-24 md:py-32 bg-[#ffffff] text-center">
        <div className="container mx-auto px-4 md:px-6 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Apple Gift Card
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Идеальный подарок для тех, кто любит технику Apple.
            Один подарок — миллион возможностей.
          </p>
          <div className="pt-6">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
              <Link to="/products">Выбрать карту</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Превью карт */}
      <section className="w-full py-16 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Доступные номиналы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCardData.map((card) => (
              <Card key={card.value} className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-40 h-32 mb-6 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2 ${card.color}`}>
                        <Icon name={card.icon} size={32} />
                      </div>
                      <img 
                        src={`https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=300&auto=format&fit=crop`} 
                        alt={`Apple Gift Card ${card.value} руб.`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{card.value} ₽</h3>
                  <p className="text-gray-600 text-center mb-6">
                    {card.description}
                  </p>
                  <Button asChild variant="outline" className="rounded-full w-full">
                    <Link to={`/products#card-${card.value}`}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Почему Apple Gift? */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Почему Apple Gift Card?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 text-3xl">🎮</div>
              <h3 className="text-xl font-semibold mb-3">Игры и приложения</h3>
              <p className="text-gray-600">Откройте доступ к миллионам приложений и игр в App Store.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 text-3xl">🎵</div>
              <h3 className="text-xl font-semibold mb-3">Музыка и фильмы</h3>
              <p className="text-gray-600">Наслаждайтесь музыкой, фильмами и сериалами из iTunes.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 text-3xl">☁️</div>
              <h3 className="text-xl font-semibold mb-3">iCloud и подписки</h3>
              <p className="text-gray-600">Оплачивайте хранилище iCloud и другие подписки Apple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="w-full py-8 bg-[#f5f5f7] border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Apple Gift Card. Все права защищены.
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-900">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-900">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
