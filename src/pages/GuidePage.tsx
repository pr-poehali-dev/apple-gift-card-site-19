
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const GuidePage = () => {
  const steps = [
    {
      number: 1,
      title: "Выберите подарочную карту",
      description: "Выберите желаемый номинал подарочной карты в нашем каталоге.",
      icon: "GiftIcon"
    },
    {
      number: 2,
      title: "Оплатите заказ",
      description: "Оплатите заказ любым удобным для вас способом: банковской картой, электронным кошельком и т.д.",
      icon: "CreditCard"
    },
    {
      number: 3,
      title: "Получите код активации",
      description: "После оплаты вы получите код активации на указанный email или в личном кабинете.",
      icon: "Mail"
    },
    {
      number: 4,
      title: "Активируйте карту",
      description: "Активируйте подарочную карту в App Store, используя полученный код активации.",
      icon: "CheckCircle"
    }
  ];

  const usageInstructions = [
    {
      number: 1,
      title: "Активация в App Store",
      description: "Откройте App Store на своем устройстве Apple. Нажмите на свою учетную запись в правом верхнем углу, выберите 'Пополнить счет' и введите код."
    },
    {
      number: 2,
      title: "Активация на сайте Apple",
      description: "Перейдите на сайт apple.com/redeem, войдите в свою учетную запись Apple ID и введите код активации."
    },
    {
      number: 3,
      title: "Активация через iTunes",
      description: "Откройте iTunes на компьютере, войдите в свою учетную запись и выберите 'Пополнить' в разделе 'Учетная запись'. Введите код активации."
    }
  ];

  const faqItems = [
    {
      question: "Какой срок действия подарочной карты?",
      answer: "Подарочные карты Apple не имеют срока действия и активны до полного использования средств."
    },
    {
      question: "Могу ли я использовать карту частями?",
      answer: "Да, средства с карты списываются постепенно при каждой покупке, пока баланс не будет исчерпан."
    },
    {
      question: "Что можно купить с помощью Apple Gift Card?",
      answer: "Подарочную карту можно использовать для покупки приложений, игр, музыки, фильмов, книг, подписок (Apple Music, Apple TV+, iCloud) и аксессуаров в магазинах Apple."
    },
    {
      question: "Можно ли вернуть средства с активированной карты?",
      answer: "К сожалению, средства с активированной подарочной карты нельзя вернуть или обменять на наличные деньги."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f7]">
      {/* Заголовок */}
      <header className="w-full py-12 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Инструкция по использованию
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Узнайте, как приобрести и активировать подарочную карту Apple Gift Card
          </p>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          {/* Шаги покупки */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Как это работает</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-4 relative">
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                        {step.number}
                      </span>
                      <Icon name={step.icon} size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Инструкции по активации */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Инструкции по активации</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-6">
                {usageInstructions.map((instruction, index) => (
                  <div key={index} className="relative pl-8">
                    <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                      {instruction.number}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{instruction.title}</h3>
                    <p className="text-gray-600">{instruction.description}</p>
                    {index < usageInstructions.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Часто задаваемые вопросы */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                    {index < faqItems.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Футер */}
      <footer className="w-full py-8 bg-[#f5f5f7] border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Apple Gift Card. Все права защищены.
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="/terms" className="text-xs text-gray-500 hover:text-gray-900">
              Условия использования
            </a>
            <a href="/privacy" className="text-xs text-gray-500 hover:text-gray-900">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuidePage;
