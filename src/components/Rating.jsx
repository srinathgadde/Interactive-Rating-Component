import React, { useState } from "react";

function Rating() {
  const [selectRating, setSelectRating] = useState();

  const handleRating = (rating) => {
    setSelectRating(rating);
    console.log(rating);
  };

  return (
    <div className="bg-blue-950 p-5 flex flex-col items-center justify-center aspect-w-5 aspect-h-16">
      <div className="flex">
        <img src="icon-star.svg" alt="star icon" />
        <img src="icon-star.svg" alt="star icon" />
        <img src="icon-star.svg" alt="star icon" />
        <img src="icon-star.svg" alt="star icon" />
        <img src="icon-star.svg" alt="star icon" />
      </div>

      <h1 className="text-white font-bold p-3 text-3xl">How did we do?</h1>
      <p className="text-gray-400 p-4">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {/* <div className="flex"> */}
      {/* <button
          onClick={() => handleRating(1)}
          className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-400 hover:text-white hover:border-white"
        >
          1
        </button>
        <button
          onClick={() => handleRating(2)}
          className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-400 hover:text-white hover:border-white"
        >
          2
        </button>
        <button
          onClick={() => handleRating(3)}
          className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-400 hover:text-white hover:border-white"
        >
          3
        </button>
        <button
          onClick={() => handleRating(4)}
          className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-400 hover:text-white hover:border-white"
        >
          4
        </button>
        <button
          onClick={() => handleRating(5)}
          className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-400 hover:text-white hover:border-white"
        >
          5
        </button> */}

      {/* code is repetitive so we can just use the map function */}
      {/* {selectRating} */}
      <div className="flex">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating} // Added a key prop for React list rendering
            onClick={() => handleRating(rating)}
            className="text-white mr-5 p-4 border border-orange-400 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-400 hover:text-white hover:border-white"
          >
            {rating}
          </button>
        ))}
      </div>

      <div className="p-4 w-[700px]">
        <button className="text-white font-bold bg-orange-400 p-3 rounded-xl items-center w-full hover:text-orange-400 hover:bg-white">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Rating;
