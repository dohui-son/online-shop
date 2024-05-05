//representativeProduct.json 파일의 데이터 구조가 RepresentativeProduct 모델과 일치하는지 확인 필요

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // JSON 파일 읽기
  const data = fs.readFileSync("representativeProduct.json", "utf-8");

  // JSON 데이터를 JavaScript 객체로 변환
  const products = JSON.parse(data);

  // 각 제품에 대해 Prisma client를 사용하여 데이터베이스에 삽입
  for (const product of products) {
    await prisma.representativeProduct.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
