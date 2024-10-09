import React from 'react';

function Container() {
  return (
    <section className="w-full">
      <div className="h-screen max-h-full flex items-center justify-center">
        {/* Box */}
        <div className="bg-gray-100 w-full max-w-5xl rounded-lg pt-8 pb-10 mt-10 md:mt-48 shadow-xl relative md:border md:border-black">
          <h2 className="p-4 text-lg font-bold">LOGO</h2>
          {/* Inside box */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 p-4">
            <div>
              <div className="bg-gray-200 w-full max-w-2xl h-48 rounded-xl mx-auto"></div>
            </div>
            <div className="flex justify-between">
              <div className="bg-gray-200 w-full max-w-xl h-48 rounded-xl mx-auto rotate-90"></div>
            </div>
            <div>
              <div className="bg-gray-200 w-full max-w-2xl h-48 rounded-xl mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Container;
