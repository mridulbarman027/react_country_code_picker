import { useEffect, useState } from 'react';

import CountryPicker from './CountryPicker';

interface PhoneNoInputProps {
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneNoInput = ({ setPhoneNumber }: PhoneNoInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState<{
    name: string;
    code: string;
    phoneCode: string;
  }>({ name: 'India', code: 'In', phoneCode: '+91' });

  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState<number>();

  // const [inputFocus, setInputFocus] = useState<boolean>(false);

  useEffect(() => {
    setPhoneNumber(selectedCountry.phoneCode + enteredPhoneNumber?.toString());
  }, [selectedCountry, enteredPhoneNumber]);

  return (
    <div
      className={`flex justify-center items-center bg-surfaceLight w-full h-12 shadow rounded border bg-white focus-within:ring-[2px] `}
    >
      <div className="px-4 pt-2 pb-[9px] h-full flex justify-center items-center cursor-pointer hover:bg-gray-100 ">
        <CountryPicker onSelect={setSelectedCountry} />
      </div>

      <input
        type="number"
        className="w-full text-sm py-1 bg-white pl-0 pr-2
         outline-none "
        placeholder="Phone Number"
        value={enteredPhoneNumber}
        onChange={e =>
          setEnteredPhoneNumber(e.target.value as unknown as number)
        }
      />
    </div>
  );
};

export default PhoneNoInput;
