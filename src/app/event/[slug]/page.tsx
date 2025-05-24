import H1 from '@/components/h1';
import { captilize, getEvent, sleep } from '@/lib/util';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug;
  const event = await getEvent(slug);

  const {
    id,
    name,
    city,
    location,
    date,
    organizerName,
    imageUrl,
    description,
  } = event;

  return (
    <main>
      <section className="flex justify-center items-center relative overflow-hidden py-14 md:py-20">
        <Image
          className="object-cover z-0 blur-3xl"
          src={imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />

        <div className="z-1 flex flex-col lg:flex-row gap-6 lg:gap-16 relative">
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">{name}</H1>
            <p className="whitespace-nowrap">
              Organized by <span className="italic">{organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
