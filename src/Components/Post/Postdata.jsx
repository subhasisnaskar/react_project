import React, { useEffect, useState } from 'react'
import './Post.css'
import postpohoto from '../../assesets/imgs/post_banner.jpg'

const Postdata = () => {
    const [data, setData] = useState ([]);

    useEffect (() => {
        fetch('https://dummyjson.com/posts?limit=6')
        .then((response) => response.json())
        .then((json) => {
          setData(json.posts);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, [])


   


  return (
    <>
     {data.map(post => (
             <div  key={post.id} className='col-lg-4 col-md-6'>
                <div className="blog_box">
                <div className="post_img">
                        <img src={postpohoto} alt="" className='img-fluid'/>
                        <div className="date_tag">
                        <p>01/02/2025 </p>
                        <p className="relaled">Finance </p>
                        </div>
                    </div>

                <h3 className='' key={post.id}>{post.title}</h3>
              
                <a href="www.google.com">Read More</a>
                </div>
           
     </div>
           )
           )} 
    </>
  )
}

export default Postdata
