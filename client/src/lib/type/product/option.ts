export interface Option {
  id: number;
  name: string;
  value: string;
  stock: number;
  addPrice: number;
  level: number;
  images?: string[];
  options: Option[];
}

export interface ProductOption {
  result: boolean;
  data: {
    type: string;
    names: string[];
    options: Option[];
  };
}
