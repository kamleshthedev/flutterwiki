const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="fill-current text-white"
          d="M0 0H24V24H0z"
          // transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="flex mt-6 bg-white justify-center dark:bg-gray-900 rounded-3xl p-1">
      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          const theme = localStorage.getItem('theme');
          console.log(theme);
          if (theme == 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          }
        }}
        className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
      >
        {sunIcon}
      </button>
    </div>
  );
};

export default function Footer({ copyrightText }) {
  return (
    <footer className="py-16 flex flex-col items-center">
      <p className="dark:text-white uppercase mb-3 font-bold opacity-60">
        {copyrightText}
      </p>
      {/* <ThemeSwitcher /> */}
    </footer>
  );
}
