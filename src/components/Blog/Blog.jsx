import React from 'react';

const Blog = ({blog}) => {
    const {title,cover,reading_time,author,author_img,posted_date,hashtags} = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span><a href="">#{hash} </a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;