import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Toggle from './components/toggle.jsx';

const root = createRoot(document.getElementById('app'));
root.render(<div className="w-full relative flex flex-col container gap-y-4 px-8">
  <input id="checkbox" type="checkbox" />
  <label className="button block mx-auto" htmlFor="checkbox">
    <span className="icon mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mx-auto">
        <g>
          <path d="M17.35 12.79a.72.72 0 01-.49-.19 7.24 7.24 0 00-9.66 0 .751.751 0 01-1.06-.06.76.76 0 01.07-1.06 8.7 8.7 0 0111.64 0 .76.76 0 01.07 1.06.792.792 0 01-.57.25z"></path>
          <path d="M20 10a.76.76 0 01-.51-.2 10.87 10.87 0 00-15 0 .75.75 0 11-1-1.1 12.36 12.36 0 0117 0A.75.75 0 0120 10zM9.38 15.64a.75.75 0 01-.6-.3.74.74 0 01.15-1.05 5.06 5.06 0 016.15 0 .751.751 0 01.15 1.05.76.76 0 01-1.05.15 3.59 3.59 0 00-4.35 0 .78.78 0 01-.45.15zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
        </g>
      </svg>
    </span> 
  </label> 
  <div className="flex items-center gap-x-4 mt-8">
    <Toggle />
    <label htmlFor="">Start at system boot</label>
  </div>
  <div className="flex items-center gap-x-4">
    <Toggle />
    <label htmlFor="">Update automatically</label>
  </div>
</div>
);