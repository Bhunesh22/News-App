import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}

static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string 

}

capitalizeFirstLetter = (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

constructor(props){
  super(props);
  this.state = {
    articles: [],
    loading: true,
    page: 1,
    totalResults: 0
  }
  document.title = `${this.capitalizeFirstLetter(this.props.category)} - Times News`
}

async updateNews(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f03b5abf4da74819bbc556f589bc3983&page=${this.state.page}&pageSize=${this.props.pageSize}`
  this.setState({loading: true})
  let data = await fetch(url)
  let parseData = await data.json();
  this.setState({articles: parseData.articles,
                 totalResults: parseData.totalResults,
                 loading: false
                })
}

async componentDidMount(){
 this.updateNews()
}



fetchMoreData = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f03b5abf4da74819bbc556f589bc3983&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
  
  this.setState({page: this.state.page + 1})
  let data = await fetch(url)
  let parseData = await data.json();
  this.setState({articles: this.state.articles.concat(parseData.articles),
                 totalResults: parseData.totalResults,
                })
};

  render() {
    return (
        <>
        <div className="container my-3">
          
        <h1 className='mb-5 text-center' style={{marginTop: "100px"}}>Top {this.capitalizeFirstLetter(this.props.category)}-Headlines</h1>
        {this.state.loading && <Loader/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader/>}
        >
        <div className="container row mb-4" >
        {this.state.articles.map((elements)=>{return <div className="col-md-4 mb-3" key={elements.url}> <NewsItems title={elements.title} description={elements.description} imageUrl={elements.urlToImage} newsUrl={elements.url} author = {elements.author} date = {elements.publishedAt} source = {elements.source.name}/></div>
          })}
          </div>
          </InfiniteScroll>
        </div>
        </>
    )
  }
}

export default news 