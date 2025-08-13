import React from 'react';

export const metadata = { title: 'Terms & Conditions — Event Scout' };

function Section({
  id,
  title,
  children,
}: React.PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="pt-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mt-3 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300 space-y-4">
        {children}
      </div>
      <hr className="mt-10 border-zinc-200 dark:border-zinc-800" />
    </section>
  );
}

export default function TermsConditionsPage() {
  const lastUpdated = 'August 13, 2025';

  return (
    <main>
      <main className="min-h-screen text-zinc-900  bg-gray-750 dark:text-zinc-100">
        <div className="mx-auto max-w-3xl px-6 py-12">
          {/* Header */}
          <header>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Terms & Conditions
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Last updated: {lastUpdated}
            </p>
          </header>

          {/* Intro (short and generic) */}
          <p className="mt-8 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">
            These Terms & Conditions (“Terms”) govern your access to and use of
            the Event Scout websites, mobile applications, and related services
            (“Services”). By using the Services, you agree to these Terms and
            our Privacy Policy.
          </p>
          <hr className="mt-10 border-zinc-200 dark:border-zinc-800" />

          {/* Sections — paste your content from the canvas T&C */}
          <Section id="who-we-are" title="1) Who we are & contact">
            <ul className="list-disc list-inside space-y-1.5">
              <li>
                <strong>Provider:</strong> Sellers Systems
              </li>
              <li>
                <strong>Contact:</strong> support@SellersSystems.com
              </li>
              <li>
                <strong>Postal:</strong> 270 Park Ave, New York City, New York,
                10017, USA
              </li>
            </ul>
          </Section>

          <Section id="eligibility" title="2) Eligibility & accounts">
            <p>
              You must be at least 13 years old (or the minimum age of digital
              consent in your jurisdiction). You are responsible for your
              account and credentials. We may suspend or terminate accounts that
              violate these Terms or applicable law.
            </p>
          </Section>

          <Section id="use" title="3) Use of the Services">
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to use the Services. You agree not to copy, modify,
              reverse engineer, or misuse the Services, and not to upload
              unlawful or infringing content.
            </p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>No automated scraping or data harvesting</li>
              <li>No impersonation or security bypassing</li>
              <li>No illegal or rights-violating activity</li>
            </ul>
          </Section>

          <Section
            id="third-parties"
            title="4) Third-party events, links & services"
          >
            <p>
              Event listings and ticketing may be provided by third parties with
              their own terms and privacy policies. We are not responsible for
              third-party accuracy, availability, pricing, or refunds.
            </p>
          </Section>

          <Section
            id="payments"
            title="5) Payments & subscriptions (if applicable)"
          >
            <p>
              Prices and taxes are shown before purchase and may change.
              Payments may be processed by third-party providers. Subscriptions
              (if offered) may auto-renew unless canceled before the renewal
              date.
            </p>
          </Section>

          <Section id="ip" title="6) Intellectual property">
            <p>
              The Services and all related materials are owned by Event Scout or
              its licensors and protected by law. No rights are granted except
              as expressly stated in these Terms.
            </p>
          </Section>

          <Section id="content" title="7) User content & feedback">
            <p>
              You retain ownership of content you submit and grant us a
              worldwide, royalty-free, sublicensable license to use it to
              operate and improve the Services. Feedback may be used without
              obligation.
            </p>
          </Section>

          <Section id="legal" title="8) Disclaimers & limitation of liability">
            <p className="text-[14px]">
              THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE
              MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES. WE
              ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY WILL NOT EXCEED THE
              GREATER OF $100 OR THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE
              THE CLAIM.
            </p>
          </Section>

          <Section id="indemnity" title="9) Indemnification">
            <p>
              You agree to indemnify and hold Event Scout harmless from claims
              arising from your content, use of the Services, or violation of
              these Terms or law.
            </p>
          </Section>

          <Section
            id="changes"
            title="10) Changes, termination & governing law"
          >
            <ul className="list-disc list-inside space-y-1.5">
              <li>
                <strong>Changes:</strong> We may update the Services or these
                Terms at any time.
              </li>
              <li>
                <strong>Termination:</strong> You may stop using the Services at
                any time; we may suspend or terminate for any reason.
              </li>
              <li>
                <strong>Governing law:</strong> These Terms are governed by the
                laws of NY/USA.
              </li>
            </ul>
          </Section>
        </div>
      </main>
    </main>
  );
}
