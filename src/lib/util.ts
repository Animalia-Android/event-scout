import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EventoEvent } from '@prisma/client';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function captilize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function getEvents(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    //to refresh cache regularly
    // {
    //   next: {
    //     revalidate: 300,
    //   },
    // }
    //to remove server side caching for this fetch
    // { cache: 'no-cache' }
  );

  const events: EventoEvent[] = await response.json();
  return events;
}

export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await response.json();
  return event;
}
