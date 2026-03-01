import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Video {
  url: string;
  title: string;
}

export interface Lesson {
  slug: string;
  title: string;
  module: string;
  order: number;
  icon: string;
  videos: Video[];
  content: string;
}

export interface Module {
  id: string;
  name: string;
  icon: string;
  lessons: Lesson[];
}

const contentDirectory = path.join(process.cwd(), 'content/modules');

const moduleNames: { [key: string]: string } = {
  proteins: 'Cooking Proteins',
  grains: 'Cooking Grains',
  bread: 'Basics of Bread',
  broths: 'Vegetable-Based Broths',
  salads: 'Salads',
  sauces: 'Essential Sauces',
  meals: 'Bringing It All Together',
  pantry: 'Kitchen Staples & Tools',
};

export function getAllModules(): Module[] {
  const moduleIds = Object.keys(moduleNames);

  return moduleIds.map(moduleId => {
    const modulePath = path.join(contentDirectory, moduleId);
    const lessons = getLessonsByModule(moduleId);

    return {
      id: moduleId,
      name: moduleNames[moduleId],
      icon: moduleId,
      lessons: lessons.sort((a, b) => a.order - b.order),
    };
  }).filter(module => module.lessons.length > 0);
}

export function getLessonsByModule(moduleId: string): Lesson[] {
  const modulePath = path.join(contentDirectory, moduleId);

  if (!fs.existsSync(modulePath)) {
    return [];
  }

  const fileNames = fs.readdirSync(modulePath);
  const lessons = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(modulePath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        module: data.module,
        order: data.order || 0,
        icon: data.icon || 'default',
        videos: data.videos || [],
        content,
      };
    });

  return lessons;
}

export function getLesson(moduleId: string, slug: string): Lesson | null {
  const fullPath = path.join(contentDirectory, moduleId, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    module: data.module,
    order: data.order || 0,
    icon: data.icon || 'default',
    videos: data.videos || [],
    content,
  };
}

export function getAllLessons(): Lesson[] {
  const modules = getAllModules();
  return modules.flatMap(module => module.lessons);
}
