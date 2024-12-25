
const NewsItem = (props) => {
  
    let {title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
      <div className="relative max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span style={{top: "-10px", right: "-17px"}} className="absolute bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-red-600 dark:text-white">{source}</span>
        <a href="#">
          <img
            className="rounded-t-lg max-w-xm"
            src={imageUrl}
            alt=""
            style={{width: "100%", height: "200px"}}
          />
        </a>
        <div className="px-3 pt-2 pb-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title} 
            </h5> 
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="flex justify-between mb-2 text-zinc-400 text-xs"><span className="text-green-400">By _{ author ? author : "Unknown" }</span> <span>{date.slice(0, 10)}</span> </p>
          <a
            href={newsUrl} target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    );
}

export default NewsItem;
