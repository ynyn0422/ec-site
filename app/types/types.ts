export type Product = {
  id: number;
  name: string;
  description: string | null; // 修正: string から string | null に変更
  price: number;
  imageUrl: string | null; // 修正: string から string | null に変更
};
export type ErrorResponse = {
  error: string;
};