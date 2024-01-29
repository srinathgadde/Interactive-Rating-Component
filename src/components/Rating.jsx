import React, { useState } from "react";

function Rating() {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRating = (rating) => {
    setSelectedRating(rating);
    console.log(rating);
  };

  const handleFormSubmitted = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return isSubmitted ? (
    <>
      <div>
        <img src="https://img.freepik.com/free-vector/thank-you-lettering_1262-6963.jpg?w=1060&t=st=1706534474~exp=1706535074~hmac=0e1a85a5c4fc835d541673390d00f048fd8f87e2f8c8b42a330cebcadb859964"></img>
      </div>
    </>
  ) : (
    <form
      onSubmit={handleFormSubmitted}
      className="bg-blue-950 p-5 flex flex-col items-center justify-center aspect-w-5 aspect-h-16"
    >
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
      {/* {selectedRating} */}
      <div className="flex">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            key={rating}
            onClick={() => handleRating(rating)}
            className={`text-white mr-5 p-4 border rounded-full w-12 h-12 flex items-center justify-center 
                  ${
                    selectedRating === rating
                      ? "bg-orange-400"
                      : "hover:bg-gray-400 hover:text-white hover:border-white"
                  }`}
          >
            {rating}
          </button>
        ))}
      </div>

      <div className="p-4 w-[700px]">
        {selectedRating === undefined && (
          <button
            onClick={() => alert("Please select the rating")}
            // disabled={true} // or disable your button in some way
            className="text-white font-bold bg-orange-400 p-3 rounded-xl items-center w-full hover:text-orange-400 hover:bg-white"
          >
            Submit
          </button>
        )}

        {selectedRating !== undefined && (
          <button className="text-white font-bold bg-orange-400 p-3 rounded-xl items-center w-full hover:text-orange-400 hover:bg-white">
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export default Rating;
