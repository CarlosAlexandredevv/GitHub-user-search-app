import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function Title() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };
  return (
    <div className="w-full flex justify-between items-center pb-8">
      <h1 className="text-2xl font-semibold text-black dark:text-white">
        devfinder
      </h1>
      <button
        className="flex items-center gap-3"
        onClick={() => darkModeHandler()}
      >
        <h3 className="text-sm font-bold">
          {dark ? (
            <p className="tracking-widest text-white">LIGHT</p>
          ) : (
            <p className="tracking-widest text-icon">DARK</p>
          )}
        </h3>
        {dark && <Sun size={28} className="text-white" />}
        {!dark && <Moon size={28} className="text-icon" />}
      </button>
    </div>
  );
}
