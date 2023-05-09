import React from 'react';

export default function Button(props: { className: string; text: string }) {
  return <div className={props.className}>{props.text}</div>;
}
