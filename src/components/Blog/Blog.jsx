import PropTypes from 'prop-types';
import { FaBookMedical } from "react-icons/fa6";

const Blog = ({blog}) => {
const {title, cover, cover_photo, author, author_img, posted_date, reading_time, hashtags} = blog;
console.log(blog);
    return (
        <div className='mb-10'>
            <img className='rounded-xl' src={cover_photo} alt={`Title of the cover picture {title}`} />
            <div className='flex justify-between items-center mt-8 mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p className='text-left font-semibold text-[#11111199] text-opacity-60'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-xl font-medium opacity-60'>{reading_time}</span>
                    <button className='w-4 ml-3'><FaBookMedical></FaBookMedical></button>
                </div>
            </div>
            <h2 className="text-[40px] font-bold text-left leading-[160%] mb-4">{title}</h2>
            <div className='flex gap-4 text-xl font-medium opacity-60 mb-5'>
                {
                    hashtags.map((hashtag, index) => <a key={index}>{hashtag}</a>)
                }
            </div>
            <p className='text-xl text-[#6047EC] text-left font-semibold underline mb-9'><a href="" >Mark As Read</a></p>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;