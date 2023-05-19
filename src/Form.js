import React from 'react'
import { RealtimeData } from './RealtimeData'
export const Form = ({ func }) => {
    const [str, setStr] = useState(";klj");
  
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setStr(value);
    };
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
      func(str);



    };
  
    return (
      <div>
        <RealtimeData name="Prem" lname="Acharya" data={str} />
  
       <p>form action="" onSubmit={handleOnSubmit}
          <input name="userName" type="text" onChange={handleOnChange} /></p> 
          <button>Submit</button>
        </form>
      </div>
    );
  };