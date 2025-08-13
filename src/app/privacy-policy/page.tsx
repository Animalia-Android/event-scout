// app/privacy/page.tsx
export const metadata = { title: 'Privacy Policy — Event Scout' };

const sections = [
  { id: 'who-we-are', title: '1) Who we are & how to contact us' },
  { id: 'info-we-collect', title: '2) Information we collect' },
  { id: 'how-we-use', title: '3) How we use your information' },
  { id: 'sharing', title: '4) When we share information' },
  { id: 'retention', title: '5) Data retention' },
  { id: 'your-rights', title: '6) Your choices & rights' },
  { id: 'security', title: '7) Security' },
  { id: 'transfers', title: '8) International transfers' },
  { id: 'links', title: '9) Third-party links' },
  { id: 'cookies', title: '10) Cookies (web only)' },
  { id: 'children', title: '11) Children’s privacy' },
  { id: 'changes', title: '12) Changes to this Policy' },
  { id: 'contact', title: '13) Contact' },
];

function Section({
  id,
  title,
  children,
}: React.PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="group relative mt-12 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {/* accent bar */}
        <span className="absolute -left-4 top-2 h-5 w-1 rounded bg-indigo-500/80 hidden sm:block" />
        {title}
        {/* anchor link */}
        <a
          aria-label="Anchor"
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-indigo-600 dark:text-indigo-400"
        >
          #
        </a>
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  const lastUpdated = 'August 13, 2025';

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* header */}
      <header className="border-b border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Privacy Policy
            </h1>
            <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Last updated: {lastUpdated}
            </span>
          </div>
        </div>
      </header>

      {/* body */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid gap-10 lg:grid-cols-[260px_1fr]">
        {/* TOC */}
        <aside className="lg:sticky lg:top-28 lg:self-start print:hidden">
          <nav
            aria-label="Table of contents"
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4"
          >
            <p className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
              On this page
            </p>
            <ul className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-md px-2 py-1 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content card */}
        <article className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm">
          <div className="border-b border-zinc-200 dark:border-zinc-800 px-6 sm:px-10 py-6">
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300">
              This Privacy Policy describes how <strong>Event Scout</strong>{' '}
              collects, uses, and shares information when you use our websites,
              mobile apps, and related services.
            </p>

            {/* callout */}
            <div className="mt-4 rounded-xl border border-indigo-300/40 bg-indigo-50/60 dark:bg-indigo-500/10 dark:border-indigo-500/40 p-4">
              <p className="text-sm sm:text-[15px] text-indigo-900 dark:text-indigo-200">
                <strong>Quick summary:</strong> We collect only what we need to
                run Event Scout and <em>do not sell</em> your personal
                information.
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8">
            {/* === Paste your policy content into these blocks === */}
            <Section id="who-we-are" title="1) Who we are & how to contact us">
              {/* Replace with your text */}
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Controller:</strong> Sellers Systems Inc
                </li>
                <li>
                  <strong>Contact:</strong> privacy@SellersSystems.com
                </li>
                <li>
                  <strong>Postal:</strong> 270 Park Ave, New York City, New
                  York, 10017, USA
                </li>
              </ul>
              <p>
                Questions? Email <strong>privacy@SellersSystems.com</strong>.
              </p>
            </Section>

            <Section id="info-we-collect" title="2) Information we collect">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-6">
                a) You provide to us
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Account details (name, email, password or SSO)</li>
                <li>Profile settings (city, categories, saved events)</li>
                <li>Feedback, support messages</li>
              </ul>

              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-6">
                b) Collected automatically
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Device/app data, crash logs</li>
                <li>Usage analytics (pages, taps, features)</li>
                <li>IP address & coarse location</li>
              </ul>

              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-6">
                c) Location (optional)
              </h3>
              <p>
                If enabled, we use your device location to find nearby events.
                You can disable this any time in device settings.
              </p>
            </Section>

            {/* …repeat Section blocks for the rest… */}
            <Section id="how-we-use" title="3) How we use your information">
              <ul className="list-disc pl-5 space-y-2">
                <li>Operate and improve the Services</li>
                <li>Authenticate and manage your account</li>
                <li>Show relevant events (based on search, prefs, location)</li>
                <li>
                  Send service communications; optional marketing with consent
                </li>
                <li>Prevent fraud and ensure security</li>
              </ul>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Legal bases (EEA/UK): consent, contract, legitimate interests,
                legal compliance.
              </p>
            </Section>

            {/* Add sections: sharing, retention, your-rights, security, transfers, links, cookies, children, changes, contact */}

            <hr className="my-10 border-zinc-200 dark:border-zinc-800" />
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Event Scout. All rights reserved.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
