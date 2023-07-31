import React from 'react'
// it contains card
const NewsItem =(props)=>{
        let { title, description, imgurl, newsurl, author, date, source } = props;
        return (
            <div className='my-3'>
                {/* news item component ,news component ke andar h */}
                <div className="card" style={{ borderRadius: "22px",display: "flex" }}>
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{}}>
                        {!source ? "Unknown" : source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={!imgurl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxB9yuvDIkOct5wn-QXXB0FEUI7fgehesYg&usqp=CAU" : imgurl} className="card-img-top" alt="ye bhi thik h" />
                    <div className="card-body">
                        {/* span ke tag se hame badges mil raha h.. */}
                        <h5 className="card-title">{title}....</h5>
                        <p className="card-text">{description}....</p>

                        {/* iska use ham author aur date lane me karenge + ham date to gmt me convert bhi kar denge */}
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {!date ? "Unknown" : new Date(date).toGMTString()}</small></p>

                        {/* target="_blank" aishe lickne se new tab me open hoga */}
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-danger btn-sm">Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
