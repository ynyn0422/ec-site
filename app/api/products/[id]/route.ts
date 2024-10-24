import { NextApiRequest } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(req: NextApiRequest, { params }: { params: { id: string } }) {
    const { id } = params; // URL から id を取得
  
    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(id) }, // id を数値に変換して検索
      });
  
      if (!product) {
        return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
      }
  
      return new Response(JSON.stringify(product), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Failed to fetch product' }), { status: 500 });
    }
  }