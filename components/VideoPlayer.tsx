import React, { ReactNode } from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => (
  <div>
    <video width="100%" height="auto" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>{title}</p>
  </div>
);

export default VideoPlayer;
