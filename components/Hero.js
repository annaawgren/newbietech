import { Shapes } from "./Shapes";

export const Hero = function(props) {
  return (
    <div className="w-full flex justify-end flex-shrink-0 flex-no-wrap flex-col flex-grow max-w-full min-h-full overflow-visible bg-lightpink">
      <div className="relative w-full flex-grow-0 flex-shrink-0 overflow-hidden">
        <Shapes />

        <div className="flex items-center justify-center">
          <svg
            width="50"
            height="50"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.987 36.9L38.9956 72.8913L3.00422 36.9"
              stroke="#4B0A40"
              stroke-width="6"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          opacity: 0;
          animation-name: fadein;
          animation-delay: 2000ms;
          animation-duration: 500ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};
