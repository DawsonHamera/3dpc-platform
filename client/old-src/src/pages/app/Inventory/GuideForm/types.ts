export type ContentBlockType = 'title' | 'text' | 'image' | 'link';

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  value: string;
}

export interface Step {
  id: string;
  contentBlocks: ContentBlock[];
}

export const generateId = () => Math.random().toString(36).substring(2, 10);
