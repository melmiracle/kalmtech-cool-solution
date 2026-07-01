export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  image: string;
  description: string;
  specifications: ProductSpec[];
  price?: string;
  availability: string;
}

export interface ProductCategory {
  image: string;
  title: string;
  description: string;
  availability: string;
  category: "IT" | "Aircon";
  items: ProductVariant[];
}
