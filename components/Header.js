export const Header = function(props) {
  return (
    <header className="absolute z-10">
      <div className="fixed p-20 w-full flex flex-row justify-between">
        <svg
          className="n-logo"
          width="48"
          height="60"
          viewBox="0 0 53 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.015 53.5229C42.015 53.8049 41.827 54.0869 41.357 54.0869H35.247C34.871 54.0869 34.683 53.8049 34.683 53.5229V47.9769H29.137C28.761 47.9769 28.573 47.7889 28.573 47.3189V41.8669H23.027C22.651 41.8669 22.463 41.6789 22.463 41.2089V29.5529H16.917C16.541 29.5529 16.259 29.3649 16.259 28.9889V17.3328H11.371V53.5229C11.371 53.8049 11.183 54.0869 10.807 54.0869H4.697C4.227 54.0869 4.039 53.8049 4.039 53.5229V4.45485C4.039 4.07885 4.227 3.89085 4.697 3.89085H10.807C11.183 3.89085 11.371 4.07885 11.371 4.45485V10.0009H16.917C17.387 10.0009 17.575 10.2829 17.575 10.6589V16.1109H23.027C23.497 16.1109 23.591 16.3929 23.591 16.7689V28.4249H29.137C29.513 28.4249 29.795 28.5189 29.795 28.9889V40.6449H34.683V4.45485C34.683 4.07885 34.871 3.89085 35.247 3.89085H41.357C41.827 3.89085 42.015 4.07885 42.015 4.45485V53.5229ZM48.783 64.8969C51.603 64.8969 52.825 63.3929 52.825 60.8549V11.7869C52.825 10.4709 52.449 9.43685 51.885 8.77885L45.305 2.29285C43.801 0.976853 42.109 0.224852 40.135 0.224852H35.247C32.145 0.224852 31.017 1.35285 31.017 4.45485V18.8369L14.661 2.29285C13.345 0.882849 11.747 0.224852 9.491 0.224852H4.697C1.595 0.224852 0.467 1.35285 0.467 4.45485V52.1129C0.467 54.1809 1.125 55.9669 2.629 57.4709L9.021 63.8629C9.773 64.6149 10.713 64.8969 12.029 64.8969H18.233C20.959 64.8969 22.181 63.3929 22.181 60.8549V46.2849L39.571 63.8629C40.417 64.6149 41.263 64.8969 42.579 64.8969H48.783Z"
            fill="#4B0A40"
          />
        </svg>
        <button className="ham flex flex-col items-end h-6 justify-between">
          <div className="hamline top" />
          <div className="hamline middle" />
          <div className="hamline btm" />
        </button>
      </div>

      <p className="px-20 pt-48 font-body">
        Hands on creative tech explorations. For beginners.
      </p>

      <style jsx>{`
        .hamline {
          width 60px;
          height: 4px;
          border-radius: 10px;
          background-color: #4B0A40;
        }
        button {
          pointer-events: all;
          outline: none;
        }
        button:hover .hamline.top {
          width: 35px;
          transition: 200ms ease;
        }
        button:hover .hamline.middle {
          width: 20px;
          transition: 500ms ease;
        }
        button:hover .hamline.btm {
          width: 40px;
          transition: 300ms ease;
        }
      `}</style>
    </header>
  );
};