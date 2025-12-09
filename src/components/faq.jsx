import { useState } from 'react';

function FAQ() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleAnswer = () => {
    setIsHidden(!isHidden);
    
  };

  return (
    <div className="faq">
      <h1 className="heading-text" id="faq">Часто задаваемые вопросы</h1>
      <div className="questions">
        <div className="question">
          <h3 onClick={toggleAnswer}>Предоставляете ли вы скидки?</h3>
          {!isHidden && (
            <p>Да, у нас действуют скидки при оплате: 
              <ul>
                <li>1 месяц - без скидки</li>
                <li>3 месяца - скидка 5%</li>
                <li>6 месяцев - скидка 10%</li>
                <li>12 месяцев - скидка 15%</li>
              </ul>
            </p>
          )}
        </div>
          
      </div>
    </div>
  );
}

export default FAQ;