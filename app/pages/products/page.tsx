// src/app/pages/index.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // APIから商品データを取得
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`products/${product.id}`}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <Image src={product.imageUrl} alt={product.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;