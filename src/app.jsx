import { createEffect, createSignal } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [online, setOnline] = createSignal(false);

  createEffect(() => {
    window.electronAPI.clientToggle();
  }, [online])

  return <div className="w-full relative flex flex-col container gap-y-4 px-8 py-2">
  <div class="text-center mx-auto">
    <div class="font-medium">Guapp Credits</div>
    <div class="flex items-center gap-x-3 text-center mx-auto pl-1">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M7.48979 0H7.48983V3.21427H7.48981C5.25594 3.21427 3.42125 4.92337 3.22202 7.1053H0C0.205252 3.14664 3.48005 0 7.48979 0ZM14.9898 7.48471V5.72372H7.48978V8.88162H11.5479C10.9731 10.5706 9.37334 11.7857 7.48983 11.7857V15C11.6319 15 14.9898 11.6421 14.9898 7.5C14.9898 7.4949 14.9898 7.4898 14.9898 7.48471Z" fill="#667385"/>
      </svg>
      <span class="text-white font-semibold text-[22px]">0.00</span>
    </div>
  </div>
  <input id="checkbox" class="hidden" type="checkbox" onChange={() => setOnline(!online())} />
  <label className="button block mx-auto" htmlFor="checkbox">
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute z-0">
      <g filter="url(#filter0_d_512_8187)">
        <ellipse cx="100" cy="104" rx="50" ry="50" transform="rotate(-180 100 104)" fill="url(#paint0_linear_512_8187)" />
      </g>
      <g filter="url(#filter1_d_512_8187)">
        <circle cx="100" cy="104" r="48" transform="rotate(-180 100 104)" fill="url(#paint1_linear_512_8187)" />
      </g>
      <circle cx="100" cy="104" r="44.5714" style={{ fill: online() ? '#5ac090' : '#18181B'}} />
      <defs>
        <filter id="filter0_d_512_8187" x="0" y="0" width="200" height="200" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha" />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.858824 0 0 0 0 0.27451 0 0 0 0 0.333333 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_512_8187" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_512_8187" result="shape" />
        </filter>
        <filter id="filter1_d_512_8187" x="37" y="37" width="126" height="126" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha" />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.187095 0 0 0 0 0.193843 0 0 0 0 0.220833 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_512_8187" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_512_8187" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_512_8187" x1="100" y1="54" x2="100" y2="154" gradientUnits="userSpaceOnUse">
          <stop stop-color="#24242B" />
          <stop offset="1" stop-color="#27272D" />
        </linearGradient>
        <linearGradient id="paint1_linear_512_8187" x1="100" y1="56" x2="100" y2="152" gradientUnits="userSpaceOnUse">
          <stop stop-color="#212126" />
          <stop offset="1" stop-color="#1A1A1E" />
        </linearGradient>
      </defs>
    </svg>
    <span className="icon mx-auto z-10">
      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6287 3.4875C17.3287 3.3 16.9912 3.1875 16.6162 3.1875C16.4662 3.1875 16.3537 3.1875 16.2037 3.225C15.7162 3.3375 15.3037 3.6375 15.0787 4.0875C14.6287 4.875 14.8537 5.85 15.6037 6.375C17.7037 7.8375 18.9787 10.2 18.9787 12.7875C18.9787 14.925 18.1537 16.9125 16.6162 18.375C15.1537 19.7625 13.2787 20.55 11.2537 20.55H10.9537C6.97871 20.4 3.64121 17.025 3.52871 13.0125C3.45371 10.3875 4.72871 7.9125 6.86621 6.4125C7.61621 5.8875 7.80371 4.875 7.35371 4.0875C7.09121 3.675 6.71621 3.375 6.22871 3.3C6.11621 3.2625 6.00371 3.2625 5.85371 3.2625C5.47871 3.2625 5.14121 3.375 4.84121 3.6C1.39121 5.8875 -0.408791 9.975 0.0787091 14.1375C0.716209 19.275 4.87871 23.4 10.0162 23.925C10.4287 23.9625 10.8412 24 11.2537 24C14.0662 24 16.6537 22.9875 18.7537 21.1125C21.1162 18.975 22.5037 15.9375 22.5037 12.7125C22.5037 9.0375 20.7037 5.5875 17.6287 3.4875Z" fill="currentColor"/>
        <path d="M11.2537 11.7375C12.2287 11.7375 13.0162 10.95 13.0162 9.975V1.7625C13.0162 0.7875 12.2287 0 11.2537 0C10.2787 0 9.49121 0.7875 9.49121 1.7625V9.975C9.49121 10.95 10.2787 11.7375 11.2537 11.7375Z" fill="currentColor"/>
      </svg>
    </span> 
  </label> 
  <div className="flex items-center gap-x-4 mt-8 hidden">
    <input name="autoboot" type="checkbox" onChange={() => window.electronAPI.autobootToggle()}  />
    <label htmlFor="autoboot">Start at system boot</label>
  </div>
  <div class="text-center">
    <div class="text-sm font-medium">Currently { online() ? 'Earning...' : 'Offline' }</div>
    <div class="flex items-center gap-x-2 text-center justify-center mt-2">
      { online() ? (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_512_8179)">
      <path d="M7.99993 7.21897L4.70013 10.5188L3.75732 9.57604L7.99993 5.33337L12.2426 9.57604L11.2998 10.5188L7.99993 7.21897Z" fill="#50AF95"/>
      </g>
      <defs>
      <clipPath id="clip0_512_8179">
      <rect width="16" height="16" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      ) : (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_512_8206)">
        <path d="M7.99996 7.05767L11.2998 3.75781L12.2426 4.70062L8.94276 8.00047L12.2426 11.3003L11.2998 12.2431L7.99996 8.94327L4.70014 12.2431L3.75732 11.3003L7.05716 8.00047L3.75732 4.70062L4.70014 3.75781L7.99996 7.05767Z" fill="#DB4655"/>
        </g>
        <defs>
        <clipPath id="clip0_512_8206">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
      </svg> 
      ) }
      <div class="font-medium"><span class="text-white text-lg">0.00</span> Mb/s</div>
    </div>
    <a href="https://www.guapp.ai" target='_blank' rel="noopener" class="mx-auto mt-2 flex items-center justify-center gap-x-2 text-white bg-[#1e1e22] rounded-full py-2 px-4 border border-gray-700">
      <span>Open Guapp</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 4V5.33333H3.33333V12.6667H10.6667V9.33333H12V13.3333C12 13.7015 11.7015 14 11.3333 14H2.66667C2.29848 14 2 13.7015 2 13.3333V4.66667C2 4.29848 2.29848 4 2.66667 4H6.66667ZM14 2V8L11.4707 5.47133L7.4714 9.4714L6.52859 8.5286L10.528 4.52867L8 2H14Z" fill="white"/>
      </svg>
    </a>
  </div>
</div> 
}

render(() => <App />, document.getElementById('app'))