export interface Post {
  id: string,
  content: string,
  created: number,
}

export interface PostCardProps {
  content: string,
  created: number,
  children: React.ReactElement;
}

export interface CreatePostsProps {
  posts: Post[]
  setPosts: (val: Post[]) => void,
}

export interface NewPostProps {
  setPosts: (val: Post[]) => void,
}

export interface LinkProps
  extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  > {
  replace?: boolean;
  state?: any;
  to: To;
  reloadDocument?: boolean;
  preventScrollReset?: boolean;
  relative?: "route" | "path";
}

type To = string | Partial<Path>;

interface Path {
  pathname: string;
  search: string;
  hash: string;
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

