import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';


export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi()
    const {
        isLoding,
        error,
        data: videos,
    } = useQuery({
        queryKey: ["videos", keyword], // 배열의 형태로 지정.
        queryFn: async () => {
            return youtube.search(keyword);
        }, staleTime: 1000 * 60 * 1
    });

    return (
      <>
        {isLoding && <p>Loding...</p>}
        {error && <p>에러가 발생했다! 🤔</p>}
        {videos && (
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
                {videos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </ul>
        )}
      </>
    );
}