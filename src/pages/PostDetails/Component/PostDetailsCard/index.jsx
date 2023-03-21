import "./postDetailsCard.css";
import {  useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import paths from "../../../../constants/paths";
import DeleteIcon from '../../../../assets/delete-icon.svg';
import { Context } from "../../../../context/Context";

const PostDetailsCard = () => {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();
  // const { user } = useContext(Context);
  const user = true
  let { id: postId } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      const res = await axios.get(`http://localhost:5000/posts/${postId}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchPostDetails();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/posts/${postId}`, {
        data: { username: user.username },
      });
      navigate(paths.home);
    } catch (err) {}
  };
  const handleUpdate = async () => {
    try{
        const updatePost = {
            username: user.username,
            title,
            desc,
          };
          await axios.put(`http://localhost:5000/posts/${postId}`, updatePost);
          setUpdateMode(false)
    }catch(err){} 
  };

  return (
    <div className="singlePost container ">
      <div className="singlePost-wrapper">
        <img className="singlePost-img" src={post.image} alt="" />
        {updateMode ? (
          <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          autoFocus
          onChange={(e)=>setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePost-title">
            {title}
            {post.username === user?.username && (
              <div className="singlePost-edit">
                <i
                  className="singlePost-icon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePost-icon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePost-info">   
          <span className="singlePost-Author">
            Author:
              <b> {post.authorname}</b>
          </span>
          <span className="singlePost-date">{post.createdAt}</span>
        </div>
        {updateMode ? (
           <textarea
           className="singlePostDescInput"
           value={desc}
           onChange={(e) => setDesc(e.target.value)}
         />
        ):(
           <p className="singlePost-desc">{desc}</p>
        )}
       
      </div>
      {updateMode && (
        <div className="post-btn">
           <button className="singlePostButton" onClick={handleUpdate}>
           Update
         </button>
         </div> 
        )}
    </div>
  );
};

export default PostDetailsCard;
