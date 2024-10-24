// app/pages/products/[id]/page.tsx
"use client"; // クライアントコンポーネントとして指定

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // useParamsをインポート

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const ProductDetail = () => {
  const { id } = useParams(); // useParamsを使ってidを取得
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
        return;
      }
      const data: Product = await response.json();
      setProduct(data);
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
