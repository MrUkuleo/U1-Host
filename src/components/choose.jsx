import { Shield, Headset, Gauge } from "lucide-react";
import Card from "./subcomponents/card";

function Choose() {
    const cardReasonData = [
      {
        header: "Защита от DDOS-атак",
        icon: Shield,
        text: "При покупке любого сервера вы получаете бесплатный AntiDDoS в подарок!",
      },
      {
        header: "Поддержка",
        icon: Headset,
        text: "Наша поддержка с радостью ответит на все Ваши вопросы",
      },
      {
        header: "Высокая скорость",
        icon: Gauge,
        text: "Полностью выделенная мощность для ваших нужд, и полный root-доступ",
      }
    ];
    return(
    <>
        <div className="choose">
        <h1 class="heading-text">Почему выбирают нас?</h1>
        <div className="cards">
          {cardReasonData.map((card, index) => (
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

export default Choose;