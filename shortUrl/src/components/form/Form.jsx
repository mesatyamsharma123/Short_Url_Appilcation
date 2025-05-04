import axios from 'axios';
import React, { useState } from 'react';

function Form() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/shorten/', {
        url: url,
      });
      setShortUrl(response.data.short_url);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-6 md:mt-40">
      <div className="bg-slate-700 p-6 py-10 flex flex-col md:flex-row md:justify-between items-center md:space-x-4 rounded-2xl space-y-4 md:space-y-0 shadow-xl">
        <div className="w-full md:flex-1">
          <input 
            className="w-full px-6 placeholder:font-semibold placeholder:px-6 py-2  text-slate700 bg-white rounded-lg"
            placeholder="Enter your link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="w-full md:w-auto">
          <button onClick={handleSubmit} className="text-center font-bold text-white bg-slate-400 rounded-xl px-4 py-2">
            Shorten it
          </button>
        </div>
      </div>

      {shortUrl && (
        <div>
          <li className="list-none font-bold mt-8 md:mt-15 rounded-2xl bg-slate-600 text-white px-6 py-6 text-lg shadow-xl">
            {shortUrl}
          </li>
        </div>
      )}
    </section>
  );
}

export default Form;
