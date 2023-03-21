import { Link } from 'react-router-dom';
import  './postCard.css';
import PlaceHolder from '../../assets/rectangle-placholder.svg';

const PostCard = ({data}) => {
    
  return (
    <div className='post'>
        
        {data.image ? (
          <img src={data.image} alt="" className="post-img" />
        ):(
          <img src={PlaceHolder} alt="" className="post-img" />
        )
  }
       
    <div className="post-info">
        <Link to={`/posts/${data.id}`} className='link'>
        <span className="post-title">
            {data.title}
        </span>
        </Link>
        <hr/>
        <span className="post-date">date</span>
        <p className="post-desc">
            {data.desc}
        </p>

    </div>
    </div>
  )
}

export default PostCard