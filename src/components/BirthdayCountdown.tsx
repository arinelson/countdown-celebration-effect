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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/7f95d394-79a5-4eb7-b61b-1b5ce632ebb5.png)',
          filter: 'brightness(0.9)'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Floating Sparkles */}
        <Sparkles className="floating text-yellow-300 absolute top-20 left-1/4 h-8 w-8" />
        <Sparkles className="floating text-pink-300 absolute top-40 right-1/4 h-6 w-6" delay={1} />
        <Sparkles className="floating text-yellow-300 absolute bottom-20 left-1/3 h-7 w-7" delay={2} />
        
        {/* Main Content */}
        <div className="text-center">
          <h1 className="mb-8 text-4xl font-bold text-white md:text-6xl">
            Contagem Regressiva
          </h1>
          
          {/* Countdown Frame */}
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <iframe
              id="online-alarm-kur-iframe"
              src="https://embed-countdown.onlinealarmkur.com/pt/#2025-03-03T00:00:00@America%2FSao_Paulo"
              width="360"
              height="80"
              style={{ border: 0 }}
              className="mx-auto max-w-full"
            />
          </div>
          
          {/* Additional Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <Sparkles className="sparkle text-yellow-300 h-6 w-6" />
            <Sparkles className="sparkle text-pink-300 h-6 w-6" delay={0.5} />
            <Sparkles className="sparkle text-yellow-300 h-6 w-6" delay={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCountdown;