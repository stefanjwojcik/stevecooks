import { getAllModules } from '@/lib/content';
import ModuleCard from '@/components/ModuleCard';
import PixelIcon from '@/components/PixelIcon';

export default function Home() {
  const modules = getAllModules();

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16 pt-8">
          <div className="flex justify-center mb-6">
            <PixelIcon type="fish" size={120} />
          </div>
          <h1 className="pixel-font text-4xl md:text-5xl text-neon-pink neon-glow mb-6">
            Pescatarian
            <br />
            Cooking Classes
          </h1>
          <p className="text-pastel-blue text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Master the fundamentals of pescatarian cooking through video lessons and hands-on techniques.
            Explore Anglo, Mediterranean, and Asian cuisines!
          </p>
        </header>

        {/* Modules Grid */}
        <section className="mb-16">
          <h2 className="pixel-font text-2xl text-neon-blue text-center mb-8 neon-glow">
            Choose Your Module
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="pixel-border border-neon-purple bg-black/40 p-8 max-w-3xl mx-auto">
          <h2 className="pixel-font text-xl text-neon-purple mb-4 text-center">
            What You&apos;ll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-pastel-blue">
            <div>
              <h3 className="font-bold text-neon-yellow mb-2">Proteins</h3>
              <p className="text-sm">Tofu, seitan, TVP, salmon, shrimp, and tilapia</p>
            </div>
            <div>
              <h3 className="font-bold text-neon-yellow mb-2">Grains</h3>
              <p className="text-sm">Rice, lentils, quinoa, and more</p>
            </div>
            <div>
              <h3 className="font-bold text-neon-yellow mb-2">Breads</h3>
              <p className="text-sm">Fundamentals of bread making</p>
            </div>
            <div>
              <h3 className="font-bold text-neon-yellow mb-2">Broths</h3>
              <p className="text-sm">Vegetable-based broths across cultures</p>
            </div>
            <div>
              <h3 className="font-bold text-neon-yellow mb-2">Salads & Sauces</h3>
              <p className="text-sm">Essential recipes from around the world</p>
            </div>
            <div>
              <h3 className="font-bold text-neon-yellow mb-2">Complete Meals</h3>
              <p className="text-sm">Bringing all techniques together</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
