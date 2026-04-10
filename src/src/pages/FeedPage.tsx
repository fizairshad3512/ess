import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addPost, toggleLike } from '../features/feed/feedSlice';
import { useToast } from '../hooks/useToast';
import type { FeedPost } from '../types';

const FeedPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const posts = useAppSelector((state) => state.feed.posts);
  const [postText, setPostText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [activeTab, setActiveTab] = useState('post');

  const handlePost = () => {
    if (!postText.trim()) return;

    const newPost: FeedPost = {
      id: Date.now().toString(),
      authorInitials: 'FI',
      authorName: 'Fiza Irshad',
      authorRole: 'Software Engineer',
      authorColor: 'var(--color-primary)',
      time: 'Just now',
      body: postText,
      emoji: '👍',
      likes: 0,
      likeText: 'Be the first to react',
      comments: 'Comment',
      liked: false,
    };

    dispatch(addPost(newPost));
    setPostText('');
    setCharCount(0);
    showToast('Post created successfully!');
  };

  const handlePostTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setPostText(text);
    setCharCount(text.length);
  };

  const handleLike = (postId: string) => {
    dispatch(toggleLike(postId));
  };

  return (
    <div className="pb">
      {/* Header */}
      <div>
        <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>Team Feed</div>
      </div>

      {/* Create Post Card */}
      <div className="card">
        <div className="ch">
          <span className="ct">Create Post</span>
        </div>
        <div className="post-box">
          <div className="pbtabs">
            <button
              className={`pbt ${activeTab === 'post' ? 'on' : ''}`}
              onClick={() => setActiveTab('post')}
            >
              Post
            </button>
            <button
              className={`pbt ${activeTab === 'photo' ? 'on' : ''}`}
              onClick={() => setActiveTab('photo')}
            >
              Photo / Video
            </button>
            <button
              className={`pbt ${activeTab === 'document' ? 'on' : ''}`}
              onClick={() => setActiveTab('document')}
            >
              Document
            </button>
          </div>
          <div className="pb-row">
            <div className="pb-av">FI</div>
            <textarea
              className="pb-ta"
              placeholder="Write something to share with your team..."
              value={postText}
              onChange={handlePostTextChange}
              maxLength={2000}
            />
          </div>
          <div className="pb-foot" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '11.5px', color: 'var(--ink3)' }}>
              {charCount} / 2000
            </span>
            <button
              className="pub-btn"
              onClick={handlePost}
              disabled={!postText.trim()}
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      {/* Recent Posts Card */}
      <div className="card">
        <div className="ch">
          <span className="ct">Recent Posts</span>
        </div>
        <div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="ann-item">
                <div className="ann-hd">
                  <div
                    className="ann-av"
                    style={{ backgroundColor: post.authorColor }}
                  >
                    {post.authorInitials}
                  </div>
                  <div>
                    <div className="ann-name">{post.authorName}</div>
                    <div className="ann-role">{post.authorRole}</div>
                  </div>
                  <div className="ann-time">{post.time}</div>
                </div>
                <div
                  className="ann-body"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
                <div className="ann-foot">
                  <div
                    className="ann-like"
                    onClick={() => handleLike(post.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span style={{ fontSize: '12px' }}>{post.emoji}</span>
                    <span className="ann-ln" style={{ fontSize: '11px', color: 'var(--ink3)' }}>
                      {post.liked ? post.likes + 1 : post.likes > 0 ? post.likes : post.likeText}
                    </span>
                  </div>
                  <div className="ann-cmt">{post.comments}</div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '24px 16px', textAlign: 'center', color: 'var(--ink3)', fontSize: '12.5px' }}>
              No posts yet. Be the first to share!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
