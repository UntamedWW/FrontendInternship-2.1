import { useState } from 'react';
import './StartPage'
function Message() {
    const [modalActive, setModalActive] = useState(false)
  
  const [name, setName] = useState(String);
  const [age, setAge] = useState(Number);

  const ChangeBackBtn = () => {
    setName('mario');
    setAge(25);
  }

  const OpenBtn = () => {
    setName('mriddsds');
    setAge(30);
  }

  const addAgeBtn = () => {
    setAge(age + 1);
  }

    return (
        <>
        <p>{name} is {age} years old!!</p>
      <button className='OpenBtn' onClick={() => OpenBtn()}>Next</button>
      <button className='ChangeBackBtn' onClick={() => ChangeBackBtn()}>Back</button>
      <button className='' onClick={() => setModalActive(true)}>Open universal modal window</button>
      <button className='addAgeBtn' onClick={() => addAgeBtn()}>+</button>
        </>
    );
}

export default Message;