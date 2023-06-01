import React, { useState, useEffect } from 'react';
import fetchQuote from '../logic/fetchAPI';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const callFecthApi = async () => {
      try {
        const fetchedQuote = await fetchQuote();
        setQuote(fetchedQuote[0].quote);
      } catch (error) {
        setError(error.message);
      }
    };
    callFecthApi();
  }, [setQuote, setError]);

  let quoteContent;
  if (!quote && !error) {
    quoteContent = <p>...loading</p>;
  } else if (error && !quote) {
    quoteContent = <p>{error}</p>;
  } else {
    quoteContent = <p>{quote}</p>;
  }

  return (
    <>
      <div className="quote-container">{quoteContent}</div>
    </>
  );
};

export default Quote;
