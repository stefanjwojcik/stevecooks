import React from 'react';
import Link from 'next/link';
import { Lesson } from '@/lib/content';
import PixelIcon from './PixelIcon';

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <Link href={`/module/${lesson.module}/${lesson.slug}`}>
      <div className="pixel-border border-neon-blue bg-black/40 hover:bg-black/60 transition-all cursor-pointer group p-5">
        <div className="flex items-center gap-4">
          <div className="group-hover:scale-110 transition-transform flex-shrink-0">
            <PixelIcon type={lesson.icon} size={48} />
          </div>
          <div className="flex-1">
            <h3 className="text-neon-blue font-bold text-lg mb-1">{lesson.title}</h3>
            <p className="text-pastel-purple text-sm">
              {lesson.videos.length} {lesson.videos.length === 1 ? 'Video' : 'Videos'}
            </p>
          </div>
          <div className="text-neon-pink pixel-font text-2xl group-hover:translate-x-2 transition-transform">
            →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LessonCard;
