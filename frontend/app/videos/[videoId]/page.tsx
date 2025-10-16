import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import VideoPlayer from '../../components/video-player/VideoPlayer';
import { Video, Comment } from '../../types';
import { useAuth } from '../../hooks/useAuth';

export default function VideoPage() {
  const router = useRouter();
  const { videoId } = router.query;
  const [video, setVideo] = useState<Video | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const { user } = useAuth();
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (!videoId) return;
    fetch(`http://localhost:3000/videos/${videoId}`)
      .then(res => res.json())
      .then(setVideo);

    fetch(`http://localhost:3000/videos/${videoId}/comments`)
      .then(res => res.json())
      .then(setComments);
  }, [videoId]);

  const postComment = async () => {
    if (!user || !commentText) return;
    const res = await fetch(`http://localhost:3000/videos/${videoId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
      body: JSON.stringify({ content: commentText }),
    });
    const newComment = await res.json();
    setComments([newComment, ...comments]);
    setCommentText('');
  };

  if (!video) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
      <VideoPlayer src={`http://localhost:3000/videos/${video.id}/stream`} />
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        {user && (
          <div className="flex space-x-2 mb-4">
            <input
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              className="flex-1 p-2 rounded bg-gray-700"
              placeholder="Add a comment..."
            />
            <button onClick={postComment} className="px-4 py-2 bg-blue-600 rounded">Post</button>
          </div>
        )}
        <div className="space-y-2">
          {comments.map(c => (
            <div key={c.id} className="p-2 bg-gray-800 rounded">
              <span className="font-bold">{c.userId}: </span>{c.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
