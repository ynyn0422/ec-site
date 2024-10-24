// app/pages/products/layout.tsx
"use client"; // クライアントコンポーネントとして指定

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Products</h1>
      {children} {/* 子コンポーネントをここに表示 */}
    </div>
  );
};

export default ProductsLayout;
