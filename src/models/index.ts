export interface Post {
  postId: number,
  content: string,
  created: number,
}

export interface PostCardProps {
  content: string,
  created: number,
}

export interface CreatePostsProps {
  posts: Post[]
  setPosts: (val: Post[]) => void,
}

export interface NewPostProps {
  setPosts: (val: Post[]) => void,
}


// export interface IProps1 {
//   event: React.FormEvent<HTMLFormElement>
//   massage: string, 
//   setMassage: (val: string) => void, 
//   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
// };

// export interface IProps2 {
//   posts: IPost[], 
//   setPosts: (val: IPost[]) => void,
// };

// export interface ButtonProps {
//   handleDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
//   handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
//   handleUpdate?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// }

