import React from 'react';

function Headlines() {
  return (
    <section className="grid gap-16 pt-96">
      <div>
        {/* First Headline Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 mx-4">
          <div className="flex flex-col justify-center w-full md:w-auto ml-0 md:ml-4">
            <h1 className="text-2xl font-bold">Headline</h1>
            <p className="mt-2">Description goes here in 2-3 lines to give just a brief outline.</p>
            <button className="bg-black text-white rounded-md p-2 mt-4 w-20">CTA</button>
          </div>
          <div className="w-full md:w-96 h-60 bg-gray-400 rounded-tr-lg mt-4 md:mt-0"></div>
        </div>

        {/* Second Headline Section */}
        <div className="p-10">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-96 h-60 bg-gray-400 rounded-tr-lg mb-4 md:mb-0"></div>
            <div className="flex flex-col justify-center w-full md:w-auto mr-0 md:mr-4">
              <h1 className="text-2xl font-bold">Headline</h1>
              <p className="mt-2 text-right">Description goes here in 2-3 lines to give just a brief outline.</p>
              <button className="bg-black text-white rounded-md p-2 mt-4 w-20">CTA</button>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-10 pl-10">
      <hr className="border-t border-black" />
      </div>
    </section>
  );
}

export default Headlines;
