export interface Note {
  slug: string;
  title: string;
  content: string;
  isDraft: boolean;
  createdAt: string;
  desc: string; 
}

export interface NoteVirtual extends Note {
  parsed: any;
}
