import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import flags from '../assets/images/countries_flags.png';
import countriesList from '../assets/json/countries_list.json';

interface CountryPickerProps {
  onSelect: React.Dispatch<
    React.SetStateAction<{
      name: string;
      code: string;
      phoneCode: string;
    }>
  >;
}

const CountryPicker = ({ onSelect }: CountryPickerProps) => {
  const [selectedCountry, setSelectedCountry] = useState<{
    name: string;
    code: string;
    phoneCode: string;
    position: string;
  }>();

  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    if (!selectedCountry) return;
    onSelect({
      code: selectedCountry?.code,
      name: selectedCountry?.name,
      phoneCode: '+' + selectedCountry?.phoneCode
    });
  }, [selectedCountry]);

  return (
    <div className='flex flex-col items-center w-full relative bg-white'>

      <div
        onClick={() => setDropDown(!dropDown)}
        className="flex items-center gap-2"
      >
        <span
          style={{
            backgroundImage: `url(${flags})`,
            height: '16px',
            width: '24px',
            backgroundPosition: `0px ${selectedCountry?.position
              ? selectedCountry.position
              : '-2245px'
              }`,
            backgroundSize: '24px 3876px'
          }}
        ></span>
        <span>
          <MdKeyboardArrowDown size={22} />
        </span>
      </div>

      <div className='absolute left-0'>
        {dropDown && (
          <div className="flex flex-col max-h-[40vh] overflow-y-auto bg-white">
            {countriesList.map((country, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedCountry({
                      name: country.countryName,
                      code: country.countryCode,
                      phoneCode: country.code as unknown as string,
                      position: country.backgroundPosition.y
                        ? country.backgroundPosition.y
                        : '-3180'
                    });
                    setDropDown(false);
                  }}
                  key={index}
                  className="flex items-center gap-4 w-full p-4 bg-gray-50 active:bg-onActiveBgLight"
                >
                  <span
                    tabIndex={0}
                    style={{
                      backgroundImage: `url(${flags})`,
                      height: '16px',
                      width: '24px',
                      backgroundPosition: `0px ${country.backgroundPosition.y}`,
                      backgroundSize: '24px 3876px'
                    }}
                  ></span>
                  {/* // eslint-disable-next-line prettier/prettier */}
                  <span>{country.countryNameAndCode}</span>
                </div>
              );
            })}
          </div>
        )}

      </div>


    </div>
  );
};

export default CountryPicker;
