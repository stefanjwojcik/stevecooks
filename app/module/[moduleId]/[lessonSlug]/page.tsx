import { getAllLessons, getLesson, getLessonsByModule } from '@/lib/content';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import PixelIcon from '@/components/PixelIcon';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

interface LessonPageProps {
  params: Promise<{
    moduleId: string;
    lessonSlug: string;
  }>;
}

export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((lesson) => ({
    moduleId: lesson.module,
    lessonSlug: lesson.slug,
  }));
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { moduleId, lessonSlug } = await params;
  const lesson = getLesson(moduleId, lessonSlug);

  if (!lesson) {
    notFound();
  }

  const allModuleLessons = getLessonsByModule(moduleId);
  const currentIndex = allModuleLessons.findIndex((l) => l.slug === lessonSlug);
  const nextLesson = currentIndex < allModuleLessons.length - 1 ? allModuleLessons[currentIndex + 1] : null;
  const prevLesson = currentIndex > 0 ? allModuleLessons[currentIndex - 1] : null;

  // Parse markdown content
  const htmlContent = await marked(lesson.content);

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <nav className="mb-8 flex gap-4">
          <Link
            href="/"
            className="pixel-button text-neon-blue hover:text-neon-pink transition-colors text-xs"
          >
            Home
          </Link>
          <Link
            href={`/module/${moduleId}`}
            className="pixel-button text-neon-purple hover:text-neon-pink transition-colors text-xs"
          >
            ← Module
          </Link>
        </nav>

        {/* Lesson Header */}
        <header className="mb-8 pixel-border border-neon-pink bg-black/40 p-6">
          <div className="flex items-center gap-4 mb-4">
            <PixelIcon type={lesson.icon} size={64} />
            <h1 className="pixel-font text-2xl md:text-3xl text-neon-pink neon-glow">
              {lesson.title}
            </h1>
          </div>
        </header>

        {/* Videos Section */}
        {lesson.videos && lesson.videos.length > 0 && (
          <section className="mb-12">
            <h2 className="pixel-font text-xl text-neon-blue mb-6 neon-glow">
              Video {lesson.videos.length > 1 ? 'Lessons' : 'Lesson'}
            </h2>
            {lesson.videos.map((video, index) => (
              <YouTubeEmbed key={index} video={video} />
            ))}
          </section>
        )}

        {/* Lesson Content */}
        <article className="pixel-border border-neon-purple bg-black/40 p-8 mb-8">
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>

        {/* Navigation Buttons */}
        <nav className="flex justify-between gap-4 mb-12">
          {prevLesson ? (
            <Link
              href={`/module/${moduleId}/${prevLesson.slug}`}
              className="pixel-button text-neon-green hover:text-neon-yellow transition-colors flex-1 text-center"
            >
              ← Previous: {prevLesson.title}
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}

          {nextLesson ? (
            <Link
              href={`/module/${moduleId}/${nextLesson.slug}`}
              className="pixel-button text-neon-green hover:text-neon-yellow transition-colors flex-1 text-center"
            >
              Next: {nextLesson.title} →
            </Link>
          ) : (
            <Link
              href={`/module/${moduleId}`}
              className="pixel-button text-neon-pink hover:text-neon-yellow transition-colors flex-1 text-center"
            >
              Back to Module →
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
