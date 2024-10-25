import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div className="md:w-2/3">
      
      {blogs.map((blog,index) => (
        <Blog key={index} 
        blog={blog}
        handleAddBookmark={handleAddBookmark}
        handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.number
}

export default Blogs;
