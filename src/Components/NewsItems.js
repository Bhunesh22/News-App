import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <>
      <div className="card my-3">
      <span className="position-absolute top-0 translate-middle-y badge rounded-pill bg-dark" style={{zIndex:"2", right:"-2%" }}>
    {source}

  </span>
  <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2022/03/fandosensexniftyderivative-770x433.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </>
    )
  }
}

export default NewsItems