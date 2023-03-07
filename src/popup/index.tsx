import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const Popup = () => {
  return (
    <div>
      <span>Video Element</span>
    </div>
  );
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Popup></Popup>
    </StrictMode>,
  );
}
