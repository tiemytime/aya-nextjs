"use client"

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

export function LoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 2; // Adjust speed as needed
      });
    }, 50); // Update every 50ms

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-64 sm:w-80 md:w-96 mt-8">
      <Progress value={progress} className="h-1 bg-white/20" />
    </div>
  );
}
