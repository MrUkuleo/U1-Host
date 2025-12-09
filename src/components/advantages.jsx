import { Zap, Wallet, LineChart, Rocket, Settings, Shield } from "lucide-react";
import Card from "./subcomponents/card";

function Advantages() {
  const cardsData = [
        {
            header: "Высокая скорость",
            icon: Zap,
            text: "Серверы на базе современных процессоров и быстрых NVMe SSD",
        },
        {
            header: "Доступные цены",
            icon: Wallet,
            text: "Оптимальные тарифы без переплат",
        },
        {
            header: "99.99% Аптайм",
            icon: LineChart,
            text: "Гарантия стабильной работы ваших проектов",
        },
        {
            header: "Мгновенное развертывание",
            icon: Rocket,
            text: "Ваш сервер готов к работе сразу после оплаты",
        },
        {
            header: "Полный контроль",
            icon: Settings,
            text: "Удобная панель управления и доступ по SSH",
        },
        {
            header: "Надёжная защита",
            icon: Shield,
            text: "Современные технологии защиты ваших данных и серверов",
        },
    ];

    return (
    <>
        <div className="advantages">
        <h1 class="heading-text">Наши преимущества</h1>
        
        <div className="cards">
          {cardsData.map((card, index) => (
              <Card 
                  key={index} 
                  header={card.header}
                  icon={card.icon}
                  text={card.text}
              />
            ))}
        </div>
      </div>
    </>
    )
}

export default Advantages;