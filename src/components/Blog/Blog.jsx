import React from 'react';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {
    const {title,cover,reading_time,author,author_img,posted_date,hashtags,id} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex mb-8'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button onClick={()=>handleBookmarks(blog)} className='ml-2  '> <FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span><a href="">#{hash} </a></span>)
                }
            </p>

            <button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-blue-400 font-bold underline'>Mark as read</button>

        </div>
    );
};

export default Blog;