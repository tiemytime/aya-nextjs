"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import StarfieldBackground from "@/components/background";
import { LoadingBar } from '../components/loading-bar';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to globe page after 2.5 seconds
    const timer = setTimeout(() => {
      router.push('/globe');
    }, 2500);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <StarfieldBackground />
      <div className="flex text-white items-center justify-center min-h-screen flex-col relative z-10 px-4">
        {/* <div className='top-4 sm:top-8 absolute left-4 sm:left-8'>
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={64} 
            height={64}
            className="w-12 h-12 sm:w-16 sm:h-16 mb-4" 
          />
        </div> */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-marcellus font-bold text-center">One prayer</div>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-marcellus font-bold text-center">One world</div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 flex items-center justify-center"> 
          <div className="w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] rounded-full opacity-40 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(248, 217, 140, 0.9) 0%, rgba(249, 115, 22, 0.3) 40%, transparent 70%)'
            }}
          ></div>
        </div>
        
        <LoadingBar />
      </div>
    </>
  );
}
