import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
    const { title, thumbnails, channelTitle, publishedAt } = video.snippet; 
    const navigate = useNavigate();

    return (
        // 부가적인 객체들은 전달 할 때에는 두번째 인자에 전달하면 된다.
        <li
            onClick={() => {
                navigate(`videos/watch/${video.id}`, { state: { video } });
            }}
        >
        <img
          className="w-full rounded-lg"
          src={thumbnails.medium.url}
          alt={title}
        />
        <div>
          <p className="font-semibold my-2 line-clamp-2">{title}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
        </div>
      </li>
    );
}