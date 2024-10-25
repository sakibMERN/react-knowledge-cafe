import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  return (
    <div className='mx-[30px] bg-white rounded-lg mb-4'>
        <h3 className='text-lg font-semibold leading-[160%] p-5'>{bookmark.title} </h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark