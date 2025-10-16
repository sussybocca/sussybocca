import React from 'react';
import { Video } from '../../types';
import FeedItem from '../feed/FeedItem';

interface Props {
  videos: Video[];
}

export default function VideoGrid({ videos }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {videos.map(video => <FeedItem key={video.id} video={video} />)}
    </div>
  );
}
