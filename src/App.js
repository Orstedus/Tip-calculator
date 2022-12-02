import { useState } from 'react';
import PercentBtn from './components/PercentBtn';
import ResPlate from './components/resPlate/ResPlate';
import { SInput } from './components/UI/input/SInput';
import SButtonDark from './components/UI/SButtonDark/SButtonDark';
import './styles/app.css'

function App() {

  const [percent, setPercent] = useState(100)
  const [bill, setBill] = useState(1)
  const [people, setPeople] = useState(1)
  const [error, setError] = useState(0)

  const changeBill = (e) => {
    if(Number(e.target.value)){
      setBill(e.target.value)
      setError(false)
    }else{
      setError(true)
    }
  }

  const changePeople = (e) => {
    if(Number(e.target.value)){
      setPeople(e.target.value)
      setError(false)
    }else {
      setError(true)
    }
  }

  const reset = () => {
    setBill(0)
    setPeople(0)
    setPercent(100)
    setError(false)
  }


  return (
    <div className="App">
      <div className='mainPlate'>
        <div className='calc'>
          <SInput type="text" func={e=>changeBill(e)} doll={false} error={error} errorFunc={setError}/>
          <PercentBtn func={setPercent} funcInput={e=>setPercent(e.target.value)} name='custom' percent={percent}/>
          <SInput type="text" func={e=>changePeople(e)} doll={true} error={error} errorFunc={setError}/>
        </div>
        <div className='result'>
          {bill&&percent&&people
          ?<ResPlate title='Tip Amount' disc='/ person'>${(((bill/100)*percent)/people).toFixed(2)}</ResPlate>
          :<ResPlate title='Tip Amount' disc='/ person'>$0</ResPlate>
          }
          {bill&&percent&&people
          ?<ResPlate title='Total' disc='/ person'>${(bill/people+bill/people/100*percent).toFixed(2)}</ResPlate>
          :<ResPlate title='Total' disc='/ person'>$0</ResPlate>
          }
          <SButtonDark func={reset}>RESET</SButtonDark>
        </div>
      </div>
    </div>
  );
}

export default App;
