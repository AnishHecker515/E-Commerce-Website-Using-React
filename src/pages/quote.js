import { useEffect, useState } from "react";

function Quote() {
    const [quote, setQuote] = useState(null); 
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchRandomQuote = async () => {
            try {
                setLoading(true); 
                const response = await fetch('https://dummyjson.com/quotes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const randomIndex = Math.floor(Math.random() * data.quotes.length); 
                setQuote(data.quotes[randomIndex]); 
            } catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchRandomQuote(); 
    }, []); 

    if (loading) return <p>Loading...</p>; 
    if (error) return <p>Error: {error}</p>; 

    return (
        <div className="quote-container">
            {quote && ( 
                <blockquote>
                    <p>"{quote.quote}"</p>
                    <footer>- {quote.author}</footer>
                </blockquote>
            )}
        </div>
    );
}

export default Quote;
