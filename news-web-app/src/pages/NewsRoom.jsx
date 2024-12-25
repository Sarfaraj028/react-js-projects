import React, { useEffect, useState } from 'react';
import NewsItem from '../Component/NewsItem';
import Loader from '../Component/Loader';
import PropTypes from 'prop-types';

const NewsRoom = ({ category = 'general', country = 'us', pageSize = 12, apiKey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Function to convert first letter to uppercase
  const toUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Function to fetch data based on the current page
  const updatePage = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  // useEffect hook to fetch data on initial load
  useEffect(() => {
    document.title = `${toUpperCase(category)} - NewsWindow`
    updatePage();
  }, [page, country, category, apiKey, pageSize]);

  // Handle previous page click
  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Handle next page click
  const handleNextClick = () => {
    if (page + 1 <= Math.ceil(totalResults / pageSize)) {
      setPage(page + 1);
    }
  };

  return (
    <div className="px-10 w-full h-auto">
      <h2 className="mt-24 m-4 underline text-center text-2xl font-semibold ">
        NewsWindow - Top {toUpperCase(category)} Headlines:
      </h2>
      <div className="w-full h-auto gap-3 py-10 pt-4 flex justify-center flex-wrap">
        {loading && <Loader />}
        {!loading &&
          articles.map((element) => (
            <NewsItem
              source={element.source.name}
              key={element.url}
              title={element.title.slice(0, 45) + '...'}
              description={
                element.description
                  ? element.description.slice(0, 88) + '...'
                  : 'Description is not available'
              }
              imageUrl={
                element.urlToImage
                  ? element.urlToImage
                  : 'https://nypost.com/wp-content/uploads/sites/2/2024/12/newspress-collage-gbbobcdxt-1734368733963.jpg?quality=75&strip=all&1734350757&w=1024'
              }
              newsUrl={element.url}
              date={element.publishedAt}
              author={element.author}
            />
          ))}
      </div>
      <div className="flex justify-between mb-5">
        <button
          disabled={page <= 1}
          onClick={handlePrevClick}
          className="bg-blue-700 rounded-lg hover:bg-blue-800 px-3 py-2 text-white"
        >
          &larr; Prev
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          onClick={handleNextClick}
          className="bg-blue-700 rounded-lg hover:bg-blue-800 px-3 py-2 text-white"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

// NewsRoom.defaultProps = {
//   category: 'general',
//   country: 'us',
//   pageSize: 12,
// }; outdated

NewsRoom.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
  apiKey: PropTypes.string.isRequired,
};

export default NewsRoom;
