// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ここにデータを追加するコードを記述します
  await prisma.product.createMany({
    data: [
      {
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 100,
        imageUrl: 'http://example.com/image1.jpg',
      },
      {
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 200,
        imageUrl: 'http://example.com/image2.jpg',
      },
      // 他の製品データを追加
    ],
  });
}

main()
  .then(() => {
    console.log('Seeding completed.');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
