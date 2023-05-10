import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Button } from './Button';
import '../styles/clock.scss';
import timer_down_icon_inactive from '../assets/timer_down_icon_inactive.svg';
import timer_up_icon_inactive from '../assets/timer_up_icon_inactive.svg';

type ClockProps = {
  value: Date;
  setTime: Dispatch<SetStateAction<[]>>;
  onChange: (value: Date) => void;
};

export const Clock: React.FC<ClockProps> = ({ value, onChange }) => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [meridiem, setMeridiem] = useState<string>('AM');

  const setUp = (onClose: any) => {
    let hour;
    if (meridiem === 'AM' && hours === 12) {
      setTime([0, minutes, seconds]);
    } else if (meridiem === 'PM' && hours === 12) {
      setTime([hours, minutes, seconds]);
    } else if (meridiem === 'PM' && hours !== 12) {
      hour = hours + 12;
      setTime([hour, minutes, seconds]);
    } else {
      setTime([hours, minutes, seconds]);
    }
    onClose();
  };

  const setSelectedDateTime = () => {
    console.log('selected date & time', value);
    return value;
  };

  const initSelection = () => {
    console.log('empty selected date');
  };

  useEffect(() => {
    setSelectedDateTime();
  }, [value]);

  return (
    <>
      <div className='container'>
        <input className='container__time-input' type='text' value={hours} readOnly />
        <div className='container__arrow-box'>
          <div>
            <img src={timer_up_icon_inactive}></img>
          </div>
          <div>
            <img src={timer_down_icon_inactive}></img>
          </div>
        </div>
        <input className='container__time-input' type='text' value={minutes} readOnly />
        <div className='container__arrow-box'>
          <div>
            <img src={timer_up_icon_inactive}></img>
          </div>
          <div>
            <img src={timer_down_icon_inactive}></img>
          </div>
        </div>
        <input className='container__time-input' type='text' value={seconds} readOnly />
        <div className='container__arrow-box'>
          <div>
            <img src={timer_up_icon_inactive}></img>
          </div>
          <div>
            <img src={timer_down_icon_inactive}></img>
          </div>
        </div>

        <select
          name='time'
          value={meridiem}
          className='container__selector'
          onChange={(e) => {
            setMeridiem(e.target.value);
          }}
        >
          <option value='am'>AM</option>
          <option value='pm'>PM</option>
        </select>
      </div>
      <div className='date-time-selector__actions'>
        <Button className='button__set-up' text={'Set up'} onClick={() => setUp(onClose)} />
        <Button className='button__cancel' text={'Cancel'} onClick={initSelection} />
      </div>
    </>
  );
};
