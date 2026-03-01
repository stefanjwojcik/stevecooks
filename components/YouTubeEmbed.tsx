import React from 'react';
import { Video } from '@/lib/content';

interface YouTubeEmbedProps {
  video: Video;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ video }) => {
  return (
    <div className="my-6">
      <div className="pixel-border border-neon-pink bg-black/30 overflow-hidden">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-3 bg-black/50">
          <p className="text-sm text-pastel-pink pixel-font">{video.title}</p>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
