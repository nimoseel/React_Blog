import React from 'react';
import Post from './Post.jsx';
import './posts.css';
// import {Link} from 'react-router-dom'


function Posts({posts}) {
return (
	<ul className="posts">
            {posts.slice(0).reverse().map( item => {
                return(
                    <li key={item.id}>
                        <Post
                        thumbnail={item.thumbnail}
                        title={item.title}
                        mainBg={item.mainBg}
                        category={item.category}
                        profileImg={item.profileImg}
                        contents={item.contents}
                        userName={item.userName}
                        created={item.created}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default Posts;