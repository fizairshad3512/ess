import React from 'react';
import { type FeedPost } from '../../types';

interface PostItemProps {
  post: FeedPost;
  onLike: (id: string) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onLike }) => {
  return (
    <div className="ann-item">
      {/* Header */}
      <div className="ann-hd">
        <div className="ann-av" style={{ background: post.authorColor }}>
          {post.authorInitials}
        </div>
        <div>
          <div className="ann-name">{post.authorName}</div>
          <div className="ann-role">{post.authorRole}</div>
        </div>
        <div className="ann-time">{post.time}</div>
      </div>

      {/* Body */}
      <div className="ann-body" dangerouslySetInnerHTML={{ __html: post.body }} />

      {/* Footer */}
      <div className="ann-foot">
        <button className="ann-like" onClick={() => onLike(post.id)}>
          <span>{post.emoji}</span>
          <span className="ann-ln">{post.likes}</span>
        </button>
        <a href="#" className="ann-cmt">{post.comments}</a>
      </div>
    </div>
  );
};

export default PostItem;
