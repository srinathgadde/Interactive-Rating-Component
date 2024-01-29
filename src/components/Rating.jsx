import React from "react";

function Rating() {
  return (
    <div className="bg-blue-950 p-5 flex flex-col items-center justify-center aspect-w-5 aspect-h-16">
      <div className="flex">
        <img src="icon-star.svg" alt="star icon" />
        <img src="icon-star.svg" alt="star icon" />
        <img src="icon-star.svg" alt="star icon" />
        <img src="icon-star.svg" alt="star icon" />
        <img src="icon-star.svg" alt="star icon" />
      </div>

      <h1 className="text-white font-bold p-3 text-left">How did we do?</h1>
      <p className="text-gray-400 p-4">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex">
        <button className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center">
          1
        </button>
        <button className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center">
          2
        </button>
        <button className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center">
          3
        </button>
        <button className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center">
          4
        </button>
        <button className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center">
          5
        </button>
      </div>
      <div className="p-4">
        <button className="text-white font-bold bg-green-600 p-3 rounded-xl items-center">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Rating;
