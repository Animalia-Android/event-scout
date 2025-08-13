import 'server-only';

import { unstable_cache } from 'next/cache';
import { captilize } from './util';
import prisma from './db';
import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  //   //to refresh cache regularly
  //   // {
  //   //   next: {
  //   //     revalidate: 300,
  //   //   },
  //   // }
  //   //to remove server side caching for this fetch
  //   // { cache: 'no-cache' }
  // );

  // const events: EventoEvent[] = await response.json();
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : captilize(city),
    },
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;

  if (city === 'all') {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: captilize(city),
      },
    });
  }

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );

  // const event: EventoEvent = await response.json();
  console.log('******Fetching event from DB:*****', slug);

  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  console.log('******Fetched event from DB:*****', slug, event);

  if (!event) {
    console.log('******Event not found:*****', slug);
    return notFound();
  }

  return event;
});
