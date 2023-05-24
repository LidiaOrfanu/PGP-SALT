export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

export interface ISection {
    tag?:string
}

export const categories: ISection[] = [
    { tag: "french" },
    { tag: "history" },
    { tag: "mystery" },
    { tag: "fiction" },
    { tag: "american" },
];

