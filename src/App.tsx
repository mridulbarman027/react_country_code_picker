import './App.css';
import { useState } from 'react';
import PhoneNoInput from './component/PhoneNoInput';

function App() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <div className="App">
      <PhoneNoInput setPhoneNumber={setPhoneNumber} />
    </div>
  );
}

export default App;
