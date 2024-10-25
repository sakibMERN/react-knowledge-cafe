import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time) => {
    setReadTime(readTime + time);
    console.log(readTime);
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex gap-6 mt-8">
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
