export const WhatWeDo = function(props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        className="object-contain absolute"
        src="../static/images/bg-one.png"
      />
      <div className="relative z-10 flex flex-col">
        <p className="text-center text-6xl font-display mb-10">WHAT WE DO</p>
        <button className="font-body text-4xl p-4 bg-lightyellow mb-8">
          Learning Labs
        </button>
        <button className="font-body text-4xl p-4 bg-lightyellow mb-8">
          Exploration Labs
        </button>
        <button className="font-body text-4xl p-4 bg-lightyellow mb-8">
          Sunday Sessions
        </button>
      </div>
    </div>
  );
};
