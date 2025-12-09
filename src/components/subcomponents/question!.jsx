import { useState } from 'react';

function QuestAns(props) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleAnswer = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="faq">
      <div className="question">
        <h3 onClick={toggleAnswer}>props.q</h3>
        {!isHidden && (<p>props.a</p>)}
      </div>
    </div>
  );
}

export default FAQ;