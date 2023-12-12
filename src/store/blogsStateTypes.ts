type Blog = {
  title: string;
  content: string;
  time: Date;
};

export type BlogsStateType = {
  blogs: Blog[];
  cacheBlog: boolean;
  fetchingBlogs: boolean;
  fetchBlogError: boolean;
};
