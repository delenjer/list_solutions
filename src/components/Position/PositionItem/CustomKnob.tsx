import React, { useState } from 'react';

export const CustomKnob = React.forwardRef<HTMLDivElement, {}>((props, ref) => {

  return (
    <div className="position-list__dnd-icon-box" ref={ref}></div>
  );
});

CustomKnob.displayName = 'CustomKnob';
