'use client';

import type { Video } from '@/services/useFirestoreVideos';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type PhotoGridProps = {
    videos: Video[];
};

const PhotoGrid: React.FC<PhotoGridProps> = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const handleVideoClick = (embedUrl: string) => {
        setSelectedVideo(embedUrl);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    useEffect(() => {
        if (selectedVideo) {
            const script = document.createElement('script');
            script.src = 'https://www.tiktok.com/embed.js';
            script.async = true;
            document.body.appendChild(script);

            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (
                        mutation.type === 'childList' &&
                        mutation.target instanceof HTMLElement &&
                        mutation.target.matches('div[data-e2e="video-v2-EmbedVideo-EmbedVideoWrapper"]')
                    ) {
                        const embedDiv = mutation.target as HTMLElement;
                        embedDiv.style.maxWidth = '800px';
                        embedDiv.style.margin = '0 auto';
                    }
                });
            });

            const targetNode = document.body;
            const config = { childList: true, subtree: true };
            observer.observe(targetNode, config);

            return () => {
                document.body.removeChild(script);
                observer.disconnect();
            };
        }
    }, [selectedVideo]);

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4">
                {videos.map((video, index) => (
                    <div className='flex flex-col gap-5' key={index}>
                        <div
                            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg"
                            onClick={() => handleVideoClick(video.embedUrl)}
                        >
                            <Image
                                src={video.thumbnail}
                                width={502}
                                height={720}
                                alt={`Video ${index + 1}`}
                                className="w-full h-auto"
                            />

                        </div>
                        <div className='flex gap-5 items-center'>
                            <Image src={video.post_avatar} alt='avatar' width={1080} height={1080} className='rounded-full overflow-hidden w-10 h-10' />
                            <p>{video.post_user}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg p-4 max-w-3xl  w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <blockquote
                            className="tiktok-embed"
                            cite={selectedVideo}
                            data-video-id={selectedVideo.split('/').pop()}
                        >
                            <section>
                                loading...
                            </section>
                        </blockquote>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGrid;
