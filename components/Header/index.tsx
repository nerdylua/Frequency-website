"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { GlowEffect } from '@/components/ui/glow-effect';

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Join our frequency"
          paragraph="Joining Frequency Club means stepping into a vibrant tech community where you get to work on real-world projects, explore cutting-edge technologies like AI, IoT, and web development, and participate in top-tier hackathons and research."
          center
          mb="65px"
          width="800px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[900px] rounded-lg shadow-lg"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[16/9]">
                <GlowEffect
                  colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
                  mode='static'
                  blur='medium'
                  scale={1.008}
                />
                <Image 
                  src="/images/logo/freq-group-photo.jpg" 
                  alt="Frequency Club Group Photo" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;