import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const BirthdayCountdown = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(/lovable-uploads/7f95d394-79a5-4eb7-b61b-1b5ce632ebb5.png)',
        }}
      />
      
      {/* Subtle gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-100/20 to-pink-200/30" />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Floating Sparkles */}
        <Sparkles className="floating text-yellow-300 absolute top-20 left-1/4 h-8 w-8" />
        <Sparkles className="floating text-pink-300 absolute top-40 right-1/4 h-6 w-6" />
        <Sparkles className="floating text-yellow-300 absolute bottom-20 left-1/3 h-7 w-7" />
        
        {/* Main Content */}
        <div className="text-center">
          <h1 className="mb-8 text-4xl font-bold text-white md:text-6xl 
                       drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Contagem Regressiva
          </h1>
          
          {/* Countdown Frame with Enhanced Neon Effect */}
          <div className="rounded-lg bg-gradient-to-r from-pink-500/30 to-purple-500/30 p-6 
                        backdrop-blur-sm shadow-[0_0_20px_rgba(236,72,153,0.5)] 
                        animate-pulse">
            <div className="shadow-[0_0_30px_rgba(236,72,153,0.7)]
                          bg-gradient-to-r from-pink-500/20 to-purple-500/20 
                          rounded-lg p-1">
              <iframe
                id="online-alarm-kur-iframe"
                src="https://embed-countdown.onlinealarmkur.com/pt/#2025-03-03T00:00:00@America%2FSao_Paulo"
                width="360"
                height="80"
                style={{ border: 0, backgroundColor: 'transparent', color: 'white' }}
                className="mx-auto max-w-full rounded-lg text-white"
              />
            </div>
          </div>
          
          {/* Additional Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <Sparkles className="sparkle text-yellow-300 h-6 w-6" />
            <Sparkles className="sparkle text-pink-300 h-6 w-6" />
            <Sparkles className="sparkle text-yellow-300 h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCountdown;