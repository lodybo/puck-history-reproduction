import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const pages = {
  '/': {
    'content': [ {
      'type': 'HeadingBlock',
      'props': { 'title': 'Edit this page by adding /edit to the end of the URL', 'id': 'HeadingBlock-1694032984497' }
    } ], 'root': { 'props': { 'title': '' } }
  }
};

async function seed() {
  for (const [path, content] of Object.entries(pages)) {
    await prisma.page.upsert({
      where: { path },
      update: { data: content },
      create: { path, data: content }
    });
  }
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
