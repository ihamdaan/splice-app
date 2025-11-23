import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Users, 
  Target, 
  TrendingUp, 
  Gift, 
  Zap, 
  CheckCircle, 
  XCircle,
  Plane,
  Fuel,
  Share2,
  Repeat,
  Trophy,
  MessageCircle,
  ArrowDown,
  Coins,
  Briefcase,
  PieChart,
  UserRound,
  Plus
} from 'lucide-react';

/**
 * Splice Landing Page
 * Design Philosophy: Immersive, storytelling, neumorphic, 3D-feel without WebGL overhead.
 */

const SpliceLanding = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- Brand Colors & Styles ---
  const styles = {
    neumorphic: "shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]",
    neumorphicInset: "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
    cardFloat: "shadow-[0_20px_60px_rgba(106,77,255,0.15)]",
    glowPrimary: "shadow-[0_0_40px_rgba(106,77,255,0.3)]",
    gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-[#6A4DFF] to-[#8B6FFF]",
  };

  // --- Components ---

  const Logo = () => (
    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <div className={`w-10 h-10 rounded-full bg-[#6A4DFF] flex items-center justify-center relative overflow-hidden ${styles.neumorphic}`}>
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FFB800] fill-current transform group-hover:rotate-180 transition-transform duration-700 ease-in-out">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
          <path d="M6 9c0-2 2-3 6-3s6 1 6 3-2 3-6 3-6 1-6 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <span className="font-extrabold text-2xl tracking-tight text-[#6A4DFF]">Splice</span>
    </div>
  );

  const Nav = () => (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F2F2F7]/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'How It Works For You', id: 'how-it-works' },
            { label: 'How It Works For Us', id: 'business-model' },
            { label: 'Experiences', id: 'stories' }
          ].map((item) => (
            <button 
              key={item.label} 
              onClick={() => scrollToSection(item.id)}
              className="text-[#6E6E6E] hover:text-[#6A4DFF] font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button className={`px-6 py-2.5 rounded-full bg-[#6A4DFF] text-white font-bold hover:bg-[#1E1E1E] transition-all duration-300 ${styles.neumorphic}`}>
            App Coming Soon
          </button>
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#F2F2F7]">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#8B6FFF] to-[#6A4DFF] blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#FFB800] to-transparent blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mt-10">
        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/50 border border-[#6A4DFF]/20 text-[#6A4DFF] font-semibold text-sm animate-fade-in-up">
          ✨ The new standard for targeted savings
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1E1E1E] leading-[1.1] tracking-tight mb-6 animate-fade-in-up delay-100">
          Save Smarter. <br />
          <span className={styles.gradientText}>Reach Goals Better.</span>
        </h1>
        <p className="text-xl text-[#6E6E6E] max-w-2xl mx-auto animate-fade-in-up delay-200">
          Create goal-based savings solo or with friends. Earn up to <span className="text-[#6A4DFF] font-bold">9% returns</span> + exclusive rewards matched to what you're actually saving for.
        </p>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
          Most people abandon savings goals within 3 weeks. We make it stick.
        </p>
        
        <button 
          onClick={() => scrollToSection('how-it-works')}
          className={`group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#6A4DFF] text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#5839FF] ${styles.glowPrimary}`}
        >
          <span>See How It Works</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative w-full max-w-4xl h-[400px] mt-16 perspective-1000">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 animate-float-slow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6A4DFF] to-[#8B6FFF] opacity-10"></div>
            <Target size={80} className="text-[#6A4DFF]" />
            <div className="absolute -top-10 -right-10 w-16 h-16 rounded-full bg-[#FFB800] flex items-center justify-center shadow-lg animate-bounce-slow">
               <span className="text-white font-bold">₹</span>
            </div>
            <div className="absolute -bottom-5 -left-12 w-12 h-12 rounded-full bg-[#FFB800] flex items-center justify-center shadow-lg animate-bounce-slower">
               <span className="text-white font-bold text-sm">₹</span>
            </div>
        </div>

        {[...Array(5)].map((_, i) => (
            <div 
                key={i}
                className="absolute left-1/2 top-1/2 w-12 h-12 bg-white rounded-full border-2 border-[#6A4DFF] flex items-center justify-center shadow-md z-10"
                style={{
                    transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateX(180px) rotate(-${i * 72}deg)`,
                }}
            >
                <Users size={20} className="text-[#6A4DFF]" />
            </div>
        ))}
      </div>
    </section>
  );

  const Comparison = () => (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">Traditional Savings Don't Cut It</h2>
          <p className="text-[#6E6E6E]">It's time to upgrade your piggy bank.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          <div className="flex-1 p-10 rounded-3xl bg-[#F2F2F7] border border-gray-200 relative opacity-70 hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -top-6 left-10 bg-[#6E6E6E] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">The Old Way</div>
            <div className="mb-8 flex justify-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center grayscale opacity-50">
                    <Target size={48} />
                </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#6E6E6E]">
                <XCircle size={20} /> 3-4% Returns
              </li>
              <li className="flex items-center gap-3 text-[#6E6E6E]">
                <XCircle size={20} /> Generic Coupons
              </li>
              <li className="flex items-center gap-3 text-[#6E6E6E]">
                <XCircle size={20} /> Save Alone
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center md:w-0 relative z-10">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A4DFF] to-[#8B6FFF] text-white font-black flex items-center justify-center shadow-lg text-xl absolute">
                 VS
             </div>
          </div>

          <div className={`flex-1 p-10 rounded-3xl bg-white border-2 border-[#6A4DFF] relative ${styles.cardFloat}`}>
            <div className="absolute -top-6 left-10 bg-[#6A4DFF] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">The Splice Way</div>
            <div className="mb-8 flex justify-center relative">
                 <div className="absolute inset-0 bg-[#6A4DFF] blur-[40px] opacity-20 rounded-full"></div>
                 <div className="w-32 h-32 bg-gradient-to-br from-[#6A4DFF] to-[#8B6FFF] rounded-full flex items-center justify-center text-white shadow-xl animate-float-slow">
                    <Zap size={48} fill="currentColor" className="text-[#FFB800]" />
                </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#1E1E1E] font-semibold">
                <CheckCircle size={20} className="text-[#00C9A7]" /> Up to 9% Returns
              </li>
              <li className="flex items-center gap-3 text-[#1E1E1E] font-semibold">
                <CheckCircle size={20} className="text-[#00C9A7]" /> Tailored Goal-Based Rewards
              </li>
              <li className="flex items-center gap-3 text-[#1E1E1E] font-semibold">
                <CheckCircle size={20} className="text-[#00C9A7]" /> Save in a Pool with 10 more Friends
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

    const StoryStep = ({ number, title, description, visual, align = 'left' }) => (
    <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 py-24 ${
        align === 'right' ? 'md:flex-row-reverse' : ''
    }`}>
        
        {/* LEFT TEXT SECTION */}
        <div className="flex-1 space-y-6">
        <div className="text-6xl font-black text-[#FFB800] leading-none drop-shadow-[0_0_12px_rgba(255,184,0,0.4)]">
            {number}
        </div>

        <h3 className="text-3xl font-bold text-white">
            {title}
        </h3>

        <p className="text-lg text-white/80 leading-relaxed">
            {description}
        </p>
        </div>

        {/* RIGHT VISUAL SECTION */}
        <div className="flex-1">
        <div className="w-full aspect-[4/3] rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-40" />
            {visual}
        </div>
        </div>

    </div>
    );

  const StoryFlow = () => {
    const steps = [
  {
    id: "01",
    title: "Choose Your Saving Mode",
    desc: "Start solo or create a shared pool with up to 10 friends. Every member follows the same saving plan — amount, duration, and streak. Perfect for group trips, tech purchases, or any planned expense.",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border-4 border-[#6A4DFF] flex items-center justify-center bg-white z-10">
          <Users size={40} className="text-[#6A4DFF]" />
        </div>
        <div className="absolute w-48 h-1 bg-[#F2F2F7]" />
        <div className="absolute right-10 w-20 h-20 rounded-full bg-[#F2F2F7] flex items-center justify-center">
          <Target size={24} className="text-gray-400" />
        </div>
      </div>
    )
  },

  {
    id: "02",
    title: "Set Goal, Amount & Streak",
    desc: "Describe your goal, target amount per person, and group size. Choose a streak confidence: 14-day streak earns 7% or a 28-day streak earns 9% returns. The lock-in period for the amount need not to be matching with the streak duration, and you always start with a 1% of the the pool amount as base deposit to activate the pool.",
    visual: (
      <div className="w-64 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform rotate-3">
        <div className="text-sm text-[#6E6E6E] mb-2">Goal Details per head</div>
        <div className="font-bold text-[#1E1E1E] text-lg mb-1">Ladakh Trip</div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#6A4DFF] font-bold">₹40,000</span>
          <span className="text-xs bg-[#FFB800]/20 text-[#b08002] px-2 py-1 rounded">9% Return</span>
        </div>
        <div className="h-2 bg-[#F2F2F7] rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-[#6A4DFF]"></div>
        </div>
      </div>
    ) 
  },

  {
    id: "03",
    title: "Activate & Bring Your Squad",
    desc: "Make the 1% of the the pool amount as base deposit — this activates your Splice Pool and starts your streak. Splice instantly generates an invite link you can share. Friends join with the same base amount and streak settings. Your returns and bonuses apply only if the streak is maintained.",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
          <MessageCircle size={32} />
        </div>
        <div className="bg-white px-6 py-3 rounded-full shadow-md text-[#6A4DFF] font-mono text-sm border border-[#6A4DFF]/20">
          splice.app/join/ladakh-24
        </div>
        <div className="flex gap-2">
          <UserRound className="w-10 h-10 bg-gray-100 rounded-full" />
          <UserRound className="w-10 h-10 bg-gray-100 rounded-full" />
          <UserRound className="w-10 h-10 bg-gray-100 rounded-full" />
          <Plus className="w-10 h-10 bg-gray-100 rounded-full" />
        </div>
      </div>
    )
  },

  {
    id: "04",
    title: "Earn Goal-Matched Rewards",
    desc: "Once your streak is active, Splice unlocks rewards based on your goal type — not generic offers. Trip goals get flight discounts up to 20%, fuel cashback up to 5%, hotel deals, luggage offers, or other goal tailored coupons. We curate personalized & meaningful offers for each pool. Rewards stay locked until streak completion.",
    visual: (
      <div className="relative w-full h-full">
        <div className="absolute top-10 left-10 w-40 bg-white p-4 rounded-xl shadow-lg z-20 animate-float-slow">
          <Plane className="text-[#6A4DFF] mb-2" />
          <div className="font-bold">20% OFF</div>
          <div className="text-xs text-gray-500">Indigo Flights</div>
        </div>
        <div className="absolute bottom-10 right-10 w-40 bg-white p-4 rounded-xl shadow-lg z-10 animate-float-slower">
          <Fuel className="text-[#FFB800] mb-2" />
          <div className="font-bold">5% Cashback</div>
          <div className="text-xs text-gray-500">Indian Oil</div>
        </div>
      </div>
    )
  },

  {
    id: "05",
    title: "Complete Streak & Cash Out",
    desc: "Finish your 14-day or 28-day streak to unlock new rewards after each streak completion. By the end of the saving plan, you receive your principal + streak returns (7% or 9%) + all unlocked rewards. Completing a goal also gives an extra 5% cashback as a booster for your next Splice Pool. Followed no streak? Not a problem you still get a base 5% of increment on your amount invested within the lock-in period.",
    visual: (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800] to-[#ffda7d] opacity-10 rounded-full animate-pulse"></div>
        <Trophy size={200} className="text-[#FFB800] relative z-10" fill="currentColor" />
        <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl z-20">
          WIN BIG!
        </div>
        <div className="absolute top-10 right-20 w-3 h-3 bg-[#6A4DFF] rounded-full" />
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-[#00C9A7] rounded-full" />
      </div>
    )
  }
];


    return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6A4DFF] to-[#8B6FFF] opacity-90"></div>

        {/* Floating Bubbles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
            <div
            key={i}
            className="absolute bg-white rounded-full opacity-30 animate-float-slow"
            style={{
                width: Math.random() * 50 + 10 + "px",
                height: Math.random() * 50 + 10 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animationDuration: Math.random() * 5 + 5 + "s"
            }}
            />
        ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Splice Journey
            </h2>
            <div className="w-20 h-1 bg-[#FFB800] mx-auto rounded-full" />
        </div>

        <div className="space-y-10">
            {steps.map((step, index) => (
            <StoryStep
                key={step.id}
                number={step.id}
                title={step.title}
                description={step.desc}
                visual={step.visual}
                align={index % 2 === 1 ? "right" : "left"}
            />
            ))}
        </div>
        </div>
    </section>
    );
  };

  const BusinessModel = () => (
    <section id="business-model" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#F2F2F7] text-[#6A4DFF] font-bold text-sm uppercase tracking-widest">
                    Transparent & Fair Business Model
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">The "Catch" You Were Looking For</h2>
                <p className="text-lg text-[#6E6E6E]">
                    Most apps hide how they make money. We don't. Here is our <span className="text-[#6A4DFF] font-bold">Win-Win-Win</span> engine.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting Lines for Desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#6A4DFF]/20 via-[#6A4DFF] to-[#6A4DFF]/20 -translate-y-1/2 z-0"></div>

                {/* Step 1 */}
                <div className={`relative bg-white p-8 rounded-3xl border border-gray-100 z-10 ${styles.neumorphic}`}>
                    <div className="w-16 h-16 rounded-2xl bg-[#F2F2F7] flex items-center justify-center text-[#6A4DFF] mb-6 mx-auto relative group-hover:scale-110 transition-transform">
                        <Coins size={32} />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00C9A7] rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3">Your Money Works Harder</h3>
                    <p className="text-center text-[#6E6E6E] text-sm leading-relaxed">
                        You save. We pool it and invest in safe, <strong className="text-[#1E1E1E]">SEBI-regulated corporate bonds</strong>.
                        <br/><br/>
                        <span className="text-[#6A4DFF] font-bold">Result:</span> You get 9% returns (vs 3% in savings accts). We keep a tiny management fee.
                    </p>
                </div>

                {/* Step 2 */}
                <div className={`relative bg-white p-8 rounded-3xl border border-[#6A4DFF] z-10 transform md:-translate-y-6 ${styles.cardFloat}`}>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6A4DFF] to-[#8B6FFF] flex items-center justify-center text-white mb-6 mx-auto shadow-lg animate-float-slow">
                        <Briefcase size={36} />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFB800] rounded-full flex items-center justify-center text-[#1E1E1E] text-xs font-bold">2</div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-3 text-[#6A4DFF]">Your Intent Has Value</h3>
                    <p className="text-center text-[#6E6E6E] text-sm leading-relaxed">
                        Brands (Indigo, Apple, etc.) are desperate for customers planning purchases. They pay us a <strong className="text-[#1E1E1E]">Commission</strong> to reach you.
                        <br/><br/>
                        <span className="text-[#6A4DFF] font-bold">The Shift:</span> We don't sell your data. We sell the <em>opportunity</em> to offer you a deal.
                    </p>
                </div>

                {/* Step 3 */}
                <div className={`relative bg-white p-8 rounded-3xl border border-gray-100 z-10 ${styles.neumorphic}`}>
                    <div className="w-16 h-16 rounded-2xl bg-[#F2F2F7] flex items-center justify-center text-[#6A4DFF] mb-6 mx-auto relative group-hover:scale-110 transition-transform">
                        <PieChart size={32} />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00C9A7] rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3">We Flip the Split</h3>
                    <p className="text-center text-[#6E6E6E] text-sm leading-relaxed">
                        Typical apps keep 100% of that commission.
                        <br/><br/>
                        <span className="text-[#6A4DFF] font-bold">Splice Way:</span> We pass the majority back to YOU as discounts. You get the returns AND the marketing budget.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );

  const Benefits = () => (
    <section className="py-32 bg-[#F2F2F7] relative">
      <div className="max-w-7xl mx-auto px-6">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">Why Splice Beats Everything</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-white rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 ${styles.neumorphic}`}>
                <div className="w-14 h-14 rounded-2xl bg-[#6A4DFF] flex items-center justify-center text-white mb-6 shadow-lg">
                    <TrendingUp size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-3">Up to 9% Returns</h3>
                <p className="text-[#6E6E6E]">7% for 14 days streak, 9% for 28 days streak. Even without streaks, earn 5% base.</p>
            </div>

            <div className={`bg-white rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 ${styles.neumorphic}`}>
                <div className="w-14 h-14 rounded-2xl bg-[#FFB800] flex items-center justify-center text-white mb-6 shadow-lg">
                    <Gift size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-3">Smart Rewards</h3>
                <p className="text-[#6E6E6E]">Targeted discounts based on your goal. Flight deals for trips, tech deals for gadgets.</p>
            </div>

            <div className={`bg-white rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 ${styles.neumorphic}`}>
                <div className="w-14 h-14 rounded-2xl bg-[#8B6FFF] flex items-center justify-center text-white mb-6 shadow-lg">
                    <Repeat size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-3">Flexible Lock-ins</h3>
                <p className="text-[#6E6E6E]">Choose your liquidity preference. Custom fragments allow real-life cash flow flexibility.</p>
            </div>
         </div>
      </div>
    </section>
  );

  const Metrics = () => (
    <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Measuring What Matters</h2>
            
            <div className="relative w-64 h-64 mx-auto mb-12">
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="128" cy="128" r="120" stroke="#E5E7EB" strokeWidth="12" fill="none" />
                    <circle 
                        cx="128" 
                        cy="128" 
                        r="120" 
                        stroke="#6A4DFF" 
                        strokeWidth="12" 
                        fill="none" 
                        strokeDasharray={2 * Math.PI * 120}
                        strokeDashoffset={2 * Math.PI * 120 * (1 - 0.7)}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-[#1E1E1E]">70%</span>
                    <span className="text-sm text-[#6E6E6E] font-medium mt-2">Streak Completion</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Goal Success', val: '85%', color: 'text-[#00C9A7]' },
                    { label: 'Redemption', val: '60%', color: 'text-[#FFB800]' },
                    { label: 'Retention', val: '40%', color: 'text-[#8B6FFF]' },
                ].map((m) => (
                    <div key={m.label} className="bg-[#F2F2F7] px-4 py-8 rounded-2xl shadow-sm">
                        <div className={`text-4xl font-bold ${m.color}`}>{m.val}</div>
                        <div className="text-lg bold text-gray-500">{m.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );

  const Testimonials = () => (
    <section id="stories" className="py-32 bg-[#F2F2F7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Real Goals. Real Results. Real Experiences</h2>
            <div className="flex flex-col md:flex-row gap-8">
                {[
                    { q: "We saved ₹2L for Goa and got 20% off flights. Splice rewards actually matched what we needed.", n: "Priya & Squad", g: "Group Trip", c: "#6A4DFF" },
                    { q: "28-day streak = 9% return + fuel cashback. My Ladakh trip cost way less than planned.", n: "Arjun M.", g: "Solo Trip", c: "#FFB800" },
                    { q: "Finally a savings app that understands what I'm actually saving for. The rewards made sense.", n: "Neha K.", g: "Tech Upgrade", c: "#8B6FFF" }
                ].map((t, i) => (
                    <div key={i} className={`flex-1 p-8 rounded-3xl bg-white ${styles.neumorphic} border-l-4`} style={{ borderColor: t.c }}>
                        <p className="text-lg text-[#1E1E1E] italic mb-6">"{t.q}"</p>
                        <div>
                            <div className="font-bold text-[#1E1E1E]">{t.n}</div>
                            <div className="text-sm text-[#6E6E6E]">{t.g}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );

  const CTA = () => (
    <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6A4DFF] to-[#8B6FFF]"></div>
        <div className="absolute inset-0 opacity-20">
             {[...Array(20)].map((_, i) => (
                 <div key={i} className="absolute bg-white rounded-full opacity-30 animate-float-slow"
                      style={{
                          width: Math.random() * 50 + 10 + 'px',
                          height: Math.random() * 50 + 10 + 'px',
                          top: Math.random() * 100 + '%',
                          left: Math.random() * 100 + '%',
                          animationDuration: Math.random() * 5 + 5 + 's'
                      }}
                 />
             ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Start Your Splice Journey</h2>
            <p className="text-xl opacity-90 mb-10">Join thousands saving smarter, together.</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["Up to 9% returns", "Goal-matched rewards", "Save with friends"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {tag}
                    </span>
                ))}
            </div>

            <button className="bg-[#FFB800] text-[#1E1E1E] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#ffc933] hover:scale-105 transition-all shadow-2xl shadow-[#FFB800]/40">
                Create Your Pool Today →
            </button>
        </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-[#F2F2F7] py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
                <Logo />
                <p className="mt-4 text-[#6E6E6E]">Save Smarter. Grow Better.</p>
                <div className="flex gap-4 mt-6">
                     {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-[#6A4DFF]/10 flex items-center justify-center text-[#6A4DFF] hover:bg-[#6A4DFF] hover:text-white transition-colors cursor-pointer"><Share2 size={14} /></div>)}
                </div>
            </div>
            
            {[
                { h: "Product", l: ["How It Works", "Pricing", "FAQs"] },
                { h: "Company", l: ["About", "Careers", "Contact"] },
                { h: "Legal", l: ["Terms", "Privacy", "Regulatory"] }
            ].map((col) => (
                <div key={col.h}>
                    <h4 className="font-bold text-[#1E1E1E] mb-6">{col.h}</h4>
                    <ul className="space-y-3 text-[#6E6E6E]">
                        {col.l.map(link => <li key={link} className="hover:text-[#6A4DFF] cursor-pointer">{link}</li>)}
                    </ul>
                </div>
            ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6E6E6E]">
            <p>© 2025 Splice. All rights reserved.</p>
            <div className="flex gap-4">
                <span className="px-3 py-1 border border-[#6A4DFF] text-[#6A4DFF] rounded-md text-xs font-medium">SEBI Registered</span>
                <span className="px-3 py-1 border border-[#6A4DFF] text-[#6A4DFF] rounded-md text-xs font-medium">SSL Secured</span>
            </div>
        </div>
    </footer>
  );

  return (
    <div className="font-sans bg-[#F2F2F7] text-[#1E1E1E] overflow-x-hidden selection:bg-[#6A4DFF] selection:text-white">
      <Nav />
      <Hero />
      <Comparison />
      <StoryFlow />
      <BusinessModel />
      <Benefits />
      <Metrics />
      <Testimonials />
      <CTA />
      <Footer />

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
        .perspective-1000 { perspective: 1000px; }
        .stroke-text {
            -webkit-text-stroke: 2px #1E1E1E; 
            color: transparent;
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default SpliceLanding;