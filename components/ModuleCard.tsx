import React from 'react';
import Link from 'next/link';
import { Module } from '@/lib/content';
import PixelIcon from './PixelIcon';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const colors = [
    'neon-pink',
    'neon-blue',
    'neon-purple',
    'neon-yellow',
    'neon-green',
    'neon-orange',
  ];

  const colorIndex = module.id.length % colors.length;
  const color = colors[colorIndex];

  return (
    <Link href={`/module/${module.id}`}>
      <div
        className={`pixel-border border-${color} bg-black/40 hover:bg-black/60 transition-all cursor-pointer group p-6`}
      >
        <div className="flex flex-col items-center text-center gap-4">
          <div className="group-hover:scale-110 transition-transform">
            <PixelIcon type={module.icon} size={80} />
          </div>
          <h2 className={`pixel-font text-${color} neon-glow text-sm md:text-base`}>
            {module.name}
          </h2>
          <p className="text-pastel-blue text-sm">
            {module.lessons.length} {module.lessons.length === 1 ? 'Lesson' : 'Lessons'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
