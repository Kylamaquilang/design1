import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div>
          <nav className="p-4 flex flex-row sm:flex-row items-center justify-between">
            <h1 className="text-2xl font-bold mb-2 sm:mb-0 mr-0 sm:mr-8">LOGO</h1>
            
            {/* Hamburger Icon */}
            <div className="sm:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            {/* Page Links */}
            <div className={`flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
              <p>pagelink1</p>
              <p>pagelink1</p>
              <p>pagelink1</p>
              <p>pagelink1</p>
            </div>

            {/* Right Section */}
            <div className={`flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0 ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
              <p>pagelink1</p>
              <p className="text-xl hidden sm:block">|</p>
              <p>pagelink1</p>
              <button className="bg-black rounded-md w-20 h-8 text-center text-white">Label</button>
            </div>
          </nav>
          <hr className="border-t border-black" />
        </div>
    </section>
  );
}

export default Nav;
