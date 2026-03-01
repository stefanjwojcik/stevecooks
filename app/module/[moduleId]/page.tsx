import { getAllModules, getLessonsByModule } from '@/lib/content';
import LessonCard from '@/components/LessonCard';
import PixelIcon from '@/components/PixelIcon';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ModulePageProps {
  params: Promise<{
    moduleId: string;
  }>;
}

export async function generateStaticParams() {
  const modules = getAllModules();
  return modules.map((module) => ({
    moduleId: module.id,
  }));
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { moduleId } = await params;
  const modules = getAllModules();
  const module = modules.find((m) => m.id === moduleId);

  if (!module) {
    notFound();
  }

  const lessons = getLessonsByModule(moduleId);

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block mb-8 pixel-button text-neon-blue hover:text-neon-pink transition-colors"
        >
          ← Back to Modules
        </Link>

        {/* Module Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <PixelIcon type={module.icon} size={100} />
          </div>
          <h1 className="pixel-font text-3xl md:text-4xl text-neon-pink neon-glow mb-4">
            {module.name}
          </h1>
          <p className="text-pastel-purple text-lg">
            {lessons.length} {lessons.length === 1 ? 'Lesson' : 'Lessons'} Available
          </p>
        </header>

        {/* Lessons List */}
        <section className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        </section>

        {lessons.length === 0 && (
          <div className="text-center pixel-border border-neon-yellow bg-black/40 p-8 max-w-2xl mx-auto">
            <p className="text-pastel-yellow text-lg">
              No lessons available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
