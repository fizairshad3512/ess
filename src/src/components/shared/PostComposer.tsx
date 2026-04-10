import React, { useState } from 'react';
import { CURRENT_USER } from '../../data/constants';
import TabGroup from '../ui/TabGroup';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

interface PostComposerProps {
  onPost: (text: string) => void;
  tabs?: string[];
}

const PostComposer: React.FC<PostComposerProps> = ({
  onPost,
  tabs = ['Post', 'Photo / Video', 'Document'],
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [text, setText] = useState('');
  const MAX_CHARS = 2000;
  const charCount = text.length;

  const handlePublish = () => {
    if (text.trim()) {
      onPost(text);
      setText('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-4">
      {/* Tab Group */}
      <div className="mb-4">
        <TabGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Composer Body */}
      <div className="flex gap-3 mb-4">
        <Avatar initials={CURRENT_USER.initials} size="md" />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, MAX_CHARS))}
          placeholder="Share an update with your team..."
          className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          rows={3}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {charCount} / {MAX_CHARS}
        </div>
        <Button variant="primary" onClick={handlePublish}>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default PostComposer;
