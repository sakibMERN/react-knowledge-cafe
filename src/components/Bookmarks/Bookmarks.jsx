import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="md:w-1/3 space-y-6">
      <div className=" px-12 py-5 bg-[#6047EC] bg-opacity-10 rounded-lg">
      <h3 className="text-2xl text-[#6047ec] opacity-100 font-bold leading-[160%]">Spent time on read: {readTime} min</h3>
      </div>
      <div className=" bg-gray-100 rounded-lg md:h-[1000px] overflow-auto">
        <h1 className=" text-2xl font-bold leading-[160%] mt-[30px] ml-[30px] mb-4 ">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, index) => (
          <Bookmark
            key={index}
            bookmark={bookmark}
          ></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readTime: PropTypes.number,
};

export default Bookmarks;
