"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { GlowEffect } from '@/components/ui/glow-effect';

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container">
        <SectionTitle
          title="Join our frequency"
          paragraph="Joining Frequency Club means stepping into a vibrant tech community where you get to work on real-world projects, explore cutting-edge technologies like AI, IoT, and web development, and participate in top-tier hackathons and research."
          center
          mb="65px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp mx-auto max-w-[900px] relative group" data-wow-delay=".15s">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-900">
                <GlowEffect
                  colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
                  mode="static"
                  blur="medium"
                  scale={1.008}
                  className="opacity-75"
                />
                <Image 
                  src="/images/logo/freq-group-photo.jpg" 
                  alt="Frequency Club Group Photo" 
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-900"
                  priority
                />
                <div className="absolute top-0 left-0 h-[4px] w-[90%] bg-gradient-to-r from-blue-400 to-purple-500 animate-border-move origin-left z-20 blur-[2px]" />
                <div className="absolute top-0 right-0 w-[4px] h-[90%] bg-gradient-to-b from-purple-500 to-pink-500 animate-border-move-delay origin-top z-20 blur-[2px]" />
                <div className="absolute bottom-0 right-0 h-[4px] w-[90%] bg-gradient-to-l from-pink-400 to-blue-500 animate-border-move origin-right z-20 blur-[2px]" />
                <div className="absolute bottom-0 left-0 w-[4px] h-[90%] bg-gradient-to-t from-blue-500 to-purple-400 animate-border-move-delay origin-bottom z-20 blur-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes border-move {
          0% { transform: scaleX(0); opacity: 0.5; }
          100% { transform: scaleX(0.9); opacity: 1; }
        }
        @keyframes border-move-vertical {
          0% { transform: scaleY(0); opacity: 0.5; }
          100% { transform: scaleY(0.9); opacity: 1; }
        }
        .animate-border-move {
          animation: border-move 6s ease-in-out infinite alternate;
        }
        .animate-border-move-delay {
          animation: border-move-vertical 6s ease-in-out infinite alternate 1s;
        }
        .section-title .paragraph {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
          line-height: 1.75;
          font-size: 1.1rem;
        }
        @media (min-width: 768px) {
          .section-title .paragraph {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Video;