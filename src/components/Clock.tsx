import React from 'react';
import '../styles/clock.scss';
import timer_down_icon_inactive from '../assets/timer_down_icon_inactive.svg';
import timer_up_icon_inactive from '../assets/timer_up_icon_inactive.svg';

type ClockProps = {
  hours?: string;
  minutes?: string;
  seconds?: string;
  onChange?: () => void;
};

export const Clock: React.FC<ClockProps> = ({ hours, minutes, seconds, onChange }) => {
  return (
    <div className='container'>
      <input className='container__time-input' type='text' value={1} onChange={onChange} />
      <div className='container__arrow-box'>
        <div>
          <img src={timer_up_icon_inactive}></img>
        </div>
        <div>
          <img src={timer_down_icon_inactive}></img>
        </div>
      </div>
      <div className='container__time-input'>{'00'}</div>
      <div className='container__arrow-box'>
        <div>
          <img src={timer_up_icon_inactive}></img>
        </div>
        <div>
          <img src={timer_down_icon_inactive}></img>
        </div>
      </div>
      <div className='container__time-input'>{'00'}</div>
      <div className='container__arrow-box'>
        <div>
          <img src={timer_up_icon_inactive}></img>
        </div>
        <div>
          <img src={timer_down_icon_inactive}></img>
        </div>
      </div>

      <select name='time' className='container__selector'>
        <option value='am'>AM</option>
        <option value='pm'>PM</option>
      </select>
    </div>
  );
};
