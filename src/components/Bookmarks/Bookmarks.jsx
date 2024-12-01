import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md: w-1/3 bg-gray-300 ml-4 mt-4 pt-4'>
            <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            <h2 className='text-3xl'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;