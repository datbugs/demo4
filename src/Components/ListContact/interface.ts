export interface IUserItem {
  id: string;
  first_name: string;
}

export interface DataDetail {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<DataDetail>;
  support: {
    url: string;
    text: string;
  };
}
