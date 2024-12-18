import React, {Component} from 'react';
import NewsItem from '../Component/NewsItem';
import Loader from '../Component/Loader';

export class NewsRoom extends Component {

  constructor () {
    super ();
    this.state = {
      articles: [], // this.article (if getting data from this component)
      loading: false,
      page: 1
    };
  }

  // Fetching data from API
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6af5b56e716e4fce979bf3681ab9c8dd&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true}) ;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6af5b56e716e4fce979bf3681ab9c8dd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true}) ;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }


  handleNextClick = async () =>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/`${this.props.pageSize}`)){
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6af5b56e716e4fce979bf3681ab9c8dd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true}) ;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  }

  render () {
    return (
      <div className="px-10">
        <h2 className="mt-4 text-2xl font-semibold ">Top Headlines:</h2>
        {this.state.loading && <Loader />}
        <div className="w-full gap-3 py-10 flex justify-center flex-wrap">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title.slice(0,45)+'...'}
                description={element.description ? element.description.slice(0, 88)+'...' : "description is not available"}
                imageUrl={element.urlToImage ? element.urlToImage : "https://nypost.com/wp-content/uploads/sites/2/2024/12/newspress-collage-gbbobcdxt-1734368733963.jpg?quality=75&strip=all&1734350757&w=1024"}
                newsUrl={element.url}
              />
            );
          })}
        </div>
        <div className='flex justify-between mb-5'>
          <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className={`bg-blue-700  rounded-lg hover:bg-blue-800 px-3 py-2 text-white `} >&larr; Prev</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/`${this.props.pageSize}`)} onClick={this.handleNextClick} className='bg-blue-700 rounded-lg hover:bg-blue-800 px-3 py-2 text-white  ' >Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default NewsRoom;
