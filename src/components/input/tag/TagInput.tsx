import Input from '../text/Input';
import React, { useState } from 'react';
import Tag from './Tag';

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputTag, setInputTag] = useState<string>('');

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags((prev) => [...prev, tag]);
    }
    setInputTag('');
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(inputTag);
    }
  };

  return (
    <div className="flex flex-col gap-[18px]">
      <Input
        title="태그"
        value={inputTag}
        onChange={setInputTag}
        onKeyDown={handleKeyDown}
      />
      <div className="flex flex-wrap gap-[8px]">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            text={tag}
            onClick={() => removeTag(tag)}
            showDeleteButton
          />
        ))}
      </div>
    </div>
  );
};

export default TagInput;
