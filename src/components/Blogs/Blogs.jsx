import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmark}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div className="md:w-2/3">
      <h2>Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} 
        blog={blog}
        handleAddBookmark={handleAddBookmark}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddBookmark: PropTypes.func,
}

export default Blogs;
