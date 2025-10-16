import React, { useState } from 'react';
import { useVideo } from '../../hooks/useVideo';
import VideoEditor from '../../components/video-editor/VideoEditor';
import { generateThumbnail } from '../../utils/helpers';

export default function UploadPage() {
  const { uploadVideo } = useVideo();
  const [file, setFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    if (f) setThumbnail(generateThumbnail(f));
  };

  const handleUpload = async () => {
    if (file) await uploadVideo(file);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {file && <VideoEditor file={file} />}
      {thumbnail && <img src={thumbnail} className="mt-4 w-48 h-28 object-cover rounded" />}
      <button onClick={handleUpload} className="mt-4 px-4 py-2 bg-blue-600 rounded">Upload</button>
    </div>
  );
}
