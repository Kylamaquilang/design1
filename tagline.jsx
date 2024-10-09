import React from 'react';

function Tagline() {
  return (
    <section className="h-screen max-h-screen">
      <div className="bg-gradient-to-t from-gray-200 h-full w-full">
        <div className="flex flex-col items-center h-full text-center font-bold">
          <h1 className="text-3xl sm:text-5xl p-4 md:p-14">TAGLINE</h1>
          <button className="bg-black text-white rounded-md p-2 m-1 mt-4 w-24 sm:w-28">CTA</button>
        </div>
      </div>
    </section>
  );
}

export default Tagline;
