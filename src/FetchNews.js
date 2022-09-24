import React,{useState} from 'react'
import axios from 'axios'
export default function FetchNews() {

    const[news,setNews]=useState([])

    const fetchNews =() =>{
        //console.log("clicked");
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=fdf7f55c9b114fd2a95d61c0ef61c7fd")
        .then((response)=>{
            //console.log(response);
            setNews(response.data.articles)
        })
    }
  return (
    <>
    <button className='btn btn-primary my-3' onClick={fetchNews}>FetchNews</button>

    <div className='container'>
        <div className='row'>
            {
                news.map((value)=>{
                    return(
                        <div className="col-4">
                            <div className="card" style={{width: "18rem"}}>
                            <img src={value.urlToImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">{value.title}</h5>
                            <p className="card-text">{value.description}</p>
                            <a href="#" className="btn btn-primary">Main</a>
                        </div>
                    </div>
                </div>
                );
            })
            }
        </div>
    </div>
    </>
  )
}
