import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
// impt se props types import hote h
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner'

const News = (props)=>{
  const [results,setResults]=useState([])
  const [loading,setLoading]=useState(true)
  const [nextPage,setNextPage]=useState("");
  const [totalResults,setTotalResults]=useState(0)
  // document.title = `${capitalizeFirstLetter(props.catogary)} - News Monkey`;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // jab render method run ho jayega tab componentDidMount run hoga


  // reason for [] at the end??
  useEffect(()=>{
    const  updateNews =async()=> {
      const url = `https://newsdata.io/api/1/news?apikey=pub_269848ab7a8915158bb7805a3121a6b5ee535&country=${props.country}&category=${props.catogary}&language=en`
  
  
      // jab hamne url ko hit kiya to fir hamne Spinner show kiya 
      let data = await fetch(url);
      setLoading(true);
  
      let parsedData = await data.json();
      setResults(parsedData.results);
      setTotalResults(parsedData.totalResults);
      // setNextPage(parsedData.nextPage);
      setLoading(false);
      setNextPage(parsedData.nextPage);
    }
    updateNews();
  },[props.country,props.catogary])

  // all code for infinete scroll
  const fetchMoreData = async () => {
     const url = `https://newsdata.io/api/1/news?apikey=pub_269848ab7a8915158bb7805a3121a6b5ee535&country=${props.country}&category=${props.catogary}&language=en&page=${nextPage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setResults(results.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
    setNextPage(parsedData.nextPage);
  };
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" ,marginTop:"90px"}}>News Wall-Top headlines {props.catogary !== 'top' ? `on ${capitalizeFirstLetter(props.catogary)}` : " "}</h1>

        {loading && <Spinner />}
        {/* <Spinner /> */}
        {/* news item component ,news component ke andar h */}

        {/* for infinite scrool */}
        <InfiniteScroll
          dataLength={results ? results.length : 0}
          next={fetchMoreData}
          hasMore={results.length !== totalResults}
          loader={<Spinner />}
          endMessage={
            <h2 style={{ textAlign: 'center' }}>
            {loading === false && <b>Oops! articles got over </b>}
            </h2>
        }
        >
          <div className='container my-3'>
            <div className="row">

              { results.map((ele) => {
                return <div className='col-md-4' key={ele.link}>
                  <NewsItem title={ele.title ? ele.title.slice(0, 25) : ""} description={ele.description ? ele.description.slice(0, 30) : ""} imgurl={ele.image_url ? ele.image_url : ""} newsurl={ele.link} author={ele.creator} date={ele.pubDate} source={ele.source_id} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }

  // 1....... ye kion likha... samajh nahi aaya
  News.defaultProp = {
    country: "in",
    // pageSize: 8,
    catogary: "top",
    // nextPage: "",
  }
  // 2..... ye kya h...aur isse kya hota h??
  News.propTypes = {
    country: PropTypes.string,
    // pageSize: PropTypes.number,
    catogary: PropTypes.string,
    nextPage: PropTypes.string,
  }
  
  export default News