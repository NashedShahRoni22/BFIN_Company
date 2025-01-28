import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./BlogDetails.css"
import Loader from '../../shared/Loader';
export default function BlogDetails() {
const {slug} = useParams();
const [data, setData] = useState({});
const [loader, setLoader] = useState(false);
useEffect(()=>{
    setLoader(true)
    fetch(`https://api.blog.bfinit.com/api/v1/single_blog_view/${slug}`)
    .then(res => res.json())
    .then(data => {
        setData(data?.data);
        setLoader(false);
    }
    )
},[slug])

  return (
    <section>
    {
        loader ?
        <Loader/>
        :
        <div className='mx-5 md:container md:mx-auto py-5 md:py-10 flex flex-col gap-5'>
            <img src={data?.thumbnail} alt="" className='w-full md:h-[350px] lg:h-[450px]' />
            <h5 className='text-xl font-semibold'>{data?.title}</h5>
            <div id="preview" dangerouslySetInnerHTML={{__html: data?.content}} />
        </div>
    }
    </section>
  )
}
