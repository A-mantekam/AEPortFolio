import React, { useEffect, useRef } from 'react';
import './Projects.css';

import P1 from './../assets/Projects/P1.mp4';
import P2 from './../assets/Projects/P2.mp4';
import P3 from './../assets/Projects/P3.mp4';
import P4 from './../assets/Projects/P4.mp4';
import P5 from './../assets/Projects/P5.mp4';
import P6 from './../assets/Projects/P6.mp4';

const videos = [P2, P3, P5, P1, P4, P6];

const Project = () => {
    const videoRefs = useRef([]);
    const scrollRef = useRef(null);

    // Play first video on mount
    useEffect(() => {
        const firstVideo = videoRefs.current[0];
        if (firstVideo) {
            firstVideo.play();
        }
    }, []);

    // Hover play logic
    const handleMouseEnter = (index) => {
        videoRefs.current.forEach((video, i) => {
            if (video) {
                if (i === index) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    };

    // Scroll functions
    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };

    return (
        <div className='Project-area' id='Project-area'>
            <div className='Project-title'>OUR PROJECTS</div>

            <div className="scroll-container">
                <button className="scroll-btn left" onClick={scrollLeft}>
                    &#10094;
                </button>

                <div className='Projects-scroll' ref={scrollRef}>
                    {videos.map((videoSrc, index) => (
                        <div className='video-wrapper' key={index}>
                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                src={videoSrc}
                                loop
                                muted
                                playsInline
                                className='video'
                                onMouseEnter={() => handleMouseEnter(index)}
                            />
                        </div>
                    ))}
                </div>

                <button className="scroll-btn right" onClick={scrollRight}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Project;
