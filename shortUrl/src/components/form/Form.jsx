import React from 'react';

function Form() {
  return (
    <section className=" max-w-6xl mx-auto px-6 py-6 md:mt-40">
      <div className="bg-slate-700 p-6 py-10 flex flex-col md:flex-row md:justify-between items-center md:space-x-4 rounded-2xl space-y-4 md:space-y-0 shadow-xl">
        
    

        <div className="w-full md:flex-1">
          <input 
            className="w-full placeholder:font-semibold placeholder:px-2 py-2 text-slate700 bg-white rounded-lg" 
            placeholder="Enter your link" 
          />
        </div>

        <div className="w-full md:w-auto">
          <p className="text-center text-white bg-slate-400 rounded-xl px-4 py-2">Shorten it</p>
        </div>

      </div>
      <div className=''>
        <li className='list-none mt-8 md:mt-15 rounded-2xl bg-slate-600 text-white px-6 py-6 text-lg shadow-xl'>This is your link</li>
      </div>
    </section>
  );
}

export default Form;
