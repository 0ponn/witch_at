import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Witchat",
  description: "Privacy policy for Witchat anonymous ephemeral chat",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--witch-soot-950)] text-[var(--witch-parchment)] p-8 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-8 text-[var(--witch-parchment-muted)] hover:text-[var(--witch-parchment)] text-sm"
      >
        ← Back to Witchat
      </Link>

      <h1 className="text-3xl font-semibold mb-2">Privacy Policy</h1>
      <p className="text-[var(--witch-parchment-muted)] text-sm mb-8">
        Last updated: March 2025
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-medium mb-3">Overview</h2>
          <p className="text-[#c4bdb4] leading-relaxed">
            Witchat is an anonymous, ephemeral chat service. We are committed to
            protecting your privacy by collecting as little information as
            possible.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-3">
            Information We Do Not Collect
          </h2>
          <ul className="text-[#c4bdb4] leading-relaxed list-disc pl-6 space-y-2">
            <li>No personally identifiable information (PII)</li>
            <li>No email addresses or phone numbers</li>
            <li>No account registration required</li>
            <li>No IP address logging</li>
            <li>No message content stored permanently</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-3">Message Expiration</h2>
          <p className="text-[#c4bdb4] leading-relaxed">
            All messages are ephemeral and expire within 24 hours. Messages
            exist only in memory during active chat sessions and are not
            persisted to any database or storage system.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-3">Session Data</h2>
          <p className="text-[#c4bdb4] leading-relaxed">
            When you connect to Witchat, a random color and sigil are assigned
            to your session. This information is temporary and discarded when
            you disconnect or close your browser.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-3">Local Storage</h2>
          <p className="text-[#c4bdb4] leading-relaxed">
            Witchat may store preferences locally in your browser (such as sound
            settings and topic subscriptions). This data never leaves your
            device and can be cleared through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-3">Analytics</h2>
          <p className="text-[#c4bdb4] leading-relaxed">
            We use privacy-focused analytics to understand general usage
            patterns. No personal data or message content is included in
            analytics.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-3">Third-Party Services</h2>
          <p className="text-[#c4bdb4] leading-relaxed">
            Witchat uses Cloudflare for content delivery. Please refer to{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--witch-parchment-muted)] underline hover:text-[var(--witch-parchment)]"
            >
              Cloudflare&apos;s Privacy Policy
            </a>{" "}
            for information about their data practices.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-3">Contact</h2>
          <p className="text-[#c4bdb4] leading-relaxed">
            For privacy concerns or questions, contact us at{" "}
            <a
              href="mailto:privacy@0pon.com"
              className="text-[var(--witch-parchment-muted)] underline hover:text-[var(--witch-parchment)]"
            >
              privacy@0pon.com
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="mt-12 pt-6 border-t border-[#2a2428] text-[var(--witch-parchment-muted)] text-sm">
        <p>Witchat is a service of 0pon.com</p>
      </footer>
    </main>
  );
}
