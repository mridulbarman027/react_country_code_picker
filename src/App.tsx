import './App.css';
import PhoneNoInput from './component/PhoneNoInput';
import { useState } from 'react';

function App() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <div className="App">
      <PhoneNoInput setPhoneNumber={setPhoneNumber} />
    </div>
  );
}

export default App;
