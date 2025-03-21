export interface Topic {
    id: string;
    title: string;
    description: string;
    authorId: string;
    likes: string[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface CreateTopicDto {
    title: string;
    description: string;
  }