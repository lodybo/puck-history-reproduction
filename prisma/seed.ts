import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const pages = {
  '/': {
    'root': { 'props': { 'title': '' } },
    'zones': {},
    'content': [ {
      'type': 'Heading',
      'props': {
        'id': 'Heading-1694032984497',
        'size': 'xxxl',
        'text': 'Home page',
        'align': 'center',
        'level': '1',
      }
    }, {
      'type': 'Text',
      'props': {
        'id': 'Text-c8a0073a-9d67-4b30-8f31-281a76dedaa3',
        'size': 'm',
        'text': 'Bewerk deze pagina door naar "/edit" te gaan.',
        'align': 'left',
        'color': 'default',
        'padding': '24px'
      }
    } ]
  }
};

async function seed() {
  for (const [ path, content ] of Object.entries(pages)) {
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
