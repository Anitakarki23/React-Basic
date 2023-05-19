import logo from './logo.svg';
import './App.css';
import { Title } from './Title';
import { Form } from './form';
import { ShowResult } from './showresult';

function App() {
  const [counter, setCounter] = useState(134560);
  const [display, setDisplay] = useState("juhygtfc qwrqwr d");
  const [Ttle, setTtle] = useState("hhh");

   const increase = () => {
     setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
   };

  return (
    <div className="App">
      <p>datat in real time</p>
      <Title />
      <Form func={setDisplay} />
      <ShowResult show={display} />
      <Title Ttle ={Ttle}/>

      <p>{counter}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button> 
    </div>
  );
}

export default App;




