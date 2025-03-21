export interface Post {
    id: string; // Unique identifier for the post
    content: string; // The content of the post (e.g., a joke or comedic material)
    topicId: string; // The ID of the topic this post belongs to
    authorId: string; // The ID of the user who created the post
    likes: string[]; // Array of user IDs who liked the post
    createdAt: Date; // Timestamp when the post was created
    updatedAt: Date; // Timestamp when the post was last updated
  }
  
  export interface CreatePostDto {
    content: string; // Content of the post
    topicId: string; // ID of the topic this post belongs to
  }
  
  export interface UpdatePostDto {
    content?: string; // Optional updated content
  }