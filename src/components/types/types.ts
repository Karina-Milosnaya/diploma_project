export type TButton = {
  buttonText: string;
  isDisabled: boolean;
  typeButton: string;
  functionClick: () => void;
};

export type TCard = {
  cardImage: string;
  cardDate: string;
  cardTitle: string;
};

export type TUserName = {
  fullname: string;
};

export type TPost = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [
    {
      launch_id: string;
      provider: string;
    }
  ];
  events: [];
};

export type TPostt = {
  post: TPost;
};

export type TTab = {
  tabContent: string;
  isDisabled: boolean;
};
