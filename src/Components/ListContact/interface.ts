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
export interface IDataModelType {
  model_id: number;
  model_name: string;
  model_type: string;
  latitude: number;
  longitude: number;
  height: number;
  size: {
    x: number;
    y: number;
  };
}

export interface IDataDetailModel {
  id: number;
  name: string;
  type: string;
  position: {
    latitude: number;
    longitude: number;
    altitude: number;
  },
  size: {
    x: number;
    y: number;
  };
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
  model: Array<IDataModelType>;
  detailmodel: Array<IDataModelType>;
}
