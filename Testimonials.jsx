import React from 'react';

function Testimonials() {
  return (
    <section className="grid gap-10 p-10">
      <div>
        <h1 className="text-center font-bold text-3xl">
          TESTIMONIALS IN ONE TO TWO LINES; CITE ONLY THE RELEVANT POINTS, GET RID OF THE FLUFF
        </h1>
      </div>
      
      {/* First Name Last Name Position */}
      <div className="p-5">
        <div className="flex items-center justify-center my-5">
          <div className="rounded-full bg-gray-500 h-20 w-20"></div>
          <div className="flex flex-col ml-4">
            <p className="font-bold">firstName lastName</p>
            <p className="text-gray-600">Position</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Tagline / Sign Up Now */}
      <div className="flex justify-center">
        <div className="bg-gray-200 w-full max-w-6xl h-screen sm:h-screen flex flex-col items-center justify-center rounded-lg ">
          <h1 className="text-xl text-white font-bold">CALL-TO-ACTION-TAGLINE</h1>
          <button className="bg-white text-black rounded-md p-2 m-1 text-md">Sign Up Now</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
