import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Devloper =()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <div className='"w-3/4 m-10 bg-cyan-700'>
            <div className='mt-0 m-20'>
            <Slider {...settings}>
                {data.map((d)=>(
                    <div className='bg-white h-[400px] text-black rounded-xl'>
                        <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
                            <img src={d.img}  alt="" className='h-44 w-44 rounded-full m-2'/>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4 p-4'>
                            <p className='text-xl font-semibold'>{d.name}</p>
                            <p>{d.review}</p>
                            <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl m-4' >Read More</button>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>

        </div>
    )
}


const data = [
    {
        name:`Tapan Mahata`,
        img:`Tapan.jpeg`,
        review : `Hi , I am a student of IIT Guwahati Mtech Datascience (2023-2025 batch) . I love to train machine learning and deep learning models .`
    },
    {
        name:`Diganta Diasi`,
        img:`Diganta.jpeg`,
        review : ` We aim to make our diagnostic tools accessible to healthcare professionals worldwide, regardless of their resources or location.`
    },
    {
        name:`Tarun Rajput`,
        img:`Tarun.jpeg`,
        review : `Hello, I'm Tarun Kumar, pursuing M.Tech in Data Science at IIT Guwahati and PgDIIT at IIT Bombay. Interested in Gen AI, LLMs,ML, and AI`
    },
    {
        name:`Major Vaibhav Mishra`,
        img:`Major.jpeg`,
        review : `Hi , I am a student of IIT Guwahati Mtech Datascience (2023-2025 batch) . I love to train machine learning and deep learning models .`
    },
    {
        name:`Anjali Jaishwal`,
        img:`Anjali.png`,
        review : `Hi , I am a student of IIT Guwahati Mtech Datascience (2023-2025 batch) . I love to train machine learning and deep learning models .`
    }
]



export default Devloper;