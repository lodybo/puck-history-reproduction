import prisma from '~/prisma.server';
import { Data } from '@measured/puck';

export async function getPageContent(slug: string): Promise<Data | undefined> {
  const page = await prisma.page.findUnique({
    where: { path: slug },
  });

  return page?.data as Data;
}

export function savePageContent(slug: string, data: any) {
  return prisma.page.upsert({
    where: { path: slug },
    update: { data },
    create: { path: slug, data },
  });
}
