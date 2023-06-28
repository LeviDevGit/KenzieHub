export async function fetchApi<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(`https://kenziehub.herokuapp.com/${input}`, init);
  const result = await data.json();

  return result as T;
}

export interface Root {
  user: User;
  token: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: Tech[];
  works: Work[];
  created_at: string;
  updated_at: string;
  avatar_url: any;
}

export interface Tech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Work {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}
