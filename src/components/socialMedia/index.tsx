import React from 'react';

interface SocialMediaProps {
  title: string;
  description: string;
  style: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ title, description, style }) => {
  return (
    <button className={style}>
      <h1 className='text-4xl font-semibold'>{title}</h1>
      <p>{description}</p>
    </button>
  );
}

export default SocialMedia;
