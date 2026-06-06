import fs from 'fs';
import path from 'path';
import type { Post } from './types';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));
  const posts = files.map(f => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), 'utf-8');
    return JSON.parse(raw) as Post;
  });
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostById(id: string): Post | undefined {
  const filePath = path.join(POSTS_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as Post;
}
