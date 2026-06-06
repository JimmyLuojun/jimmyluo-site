export interface BodyBlock {
  t: 'lead' | 'p' | 'h' | 'q';
  c: string;
}

export interface PostContent {
  title: string;
  excerpt: string;
  sub: string;
  tags: string[];
  body: BodyBlock[];
}

export interface Post {
  id: string;
  type: 'article' | 'video' | 'photo';
  platform: 'wechat' | 'weibo' | 'channel' | 'longform' | 'photo';
  featured?: boolean;
  date: string;
  read?: number;
  length?: string;
  count?: number;
  url?: string;
  cover?: string;
  zh: PostContent;
  en: PostContent;
}

export type Lang = 'zh' | 'en';
export type ViewMode = 'grid' | 'list';
export type FilterType = 'all' | 'article' | 'video' | 'photo';
export type Theme = 'terminal' | 'editorial' | 'luminous';
export type Accent = 'default' | 'ice' | 'violet' | 'mint' | 'rust';
export type Density = 'regular' | 'cozy';
