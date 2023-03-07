import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const Options = () => {
  // useEffect(() => {
  //   // Restores select box and checkbox state using the preferences
  //   // stored in chrome.storage.
  //   chrome.storage.sync.get(
  //     {
  //       favoriteColor: 'red',
  //       likesColor: true,
  //     },
  //     (items) => {
  //       setColor(items.favoriteColor);
  //       setLike(items.likesColor);
  //     },
  //   );
  // }, []);

  // const saveOptions = () => {
  //   // Saves options to chrome.storage.sync.
  //   chrome.storage.sync.set(
  //     {
  //       favoriteColor: color,
  //       likesColor: like,
  //     },
  //     () => {
  //       // Update status to let user know options were saved.
  //       setStatus('Options saved.');
  //       const id = setTimeout(() => {
  //         setStatus('');
  //       }, 1000);
  //       return () => clearTimeout(id);
  //     },
  //   );
  // };

  return (
    <div>
      <span>So far so good!</span>
    </div>
  );
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Options></Options>
    </StrictMode>,
  );
}
