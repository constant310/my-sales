import "../legal.css";
import Link from "next/link";

const sections = [
  ["Acceptance of Terms", "By creating an account or using MySales, you agree to these Terms and Conditions and our Privacy Policy."],
  ["About MySales", "MySales is a business management application that helps you manage sales, inventory, customers, staff, transactions, receipts, and other business operations. We do not guarantee any specific business result."],
  ["User Accounts", "You are responsible for providing accurate information, keeping your account secure, protecting your login details, and notifying us if you believe your account has been compromised."],
  ["Your Data and Responsibility", "You are responsible for the accuracy, legality, and completeness of information you enter into MySales. You retain your rights to your business data."],
  ["Payments and Subscriptions", "Some features may require a subscription. Applicable prices and payment terms will be presented before purchase. Payments may be processed through trusted third-party payment providers."],
  ["Acceptable Use", "You agree not to use MySales for unlawful activities, fraud, abuse, unauthorized access, malicious code, or activity that may harm the platform, our users, or third parties."],
  ["Termination", "We may suspend or terminate access where necessary, including for material violations of these Terms, fraud, security risks, unlawful use, non-payment, or legal requirements."],
  ["Limitation of Liability", "To the maximum extent permitted by applicable law, MySales will not be liable for indirect, incidental, special, consequential, or punitive losses arising from your use of the service."],
  ["Changes to Terms", "We may update these Terms from time to time. Significant changes may be communicated through the application, website, email, or another appropriate method."],
  ["Contact Us", "If you have questions about these Terms and Conditions, please contact us at ifiokabasiudoe@gmail.com."],
];

export default function TermsPage() {
  return (
    <main className="legal-page">
      <nav className="legal-nav">
        <Link href="/" className="brand">
          <span className="brand-mark">M</span>
          <span>MYSALES</span>
        </Link>
        <div className="nav-links">
          <Link href="/#features">Features</Link>
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <Link href="/#waitlist" className="nav-cta">Join Waitlist</Link>
      </nav>

      <section className="legal-hero">
        <div>
          <div className="legal-eyebrow">PLEASE READ CAREFULLY</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="updated">Last updated: August 9, 2026</p>
          <p className="intro">
            These Terms and Conditions govern your use of the MySales
            application and related services. By accessing or using MySales,
            you agree to be bound by these terms.
          </p>
        </div>
        <div className="legal-illustration document">✓</div>
      </section>

      <section className="legal-sections">
        {sections.map(([title, text], index) => (
          <article className="legal-card" key={title}>
            <div className="legal-icon">{index + 1}</div>
            <div>
              <h2>{index + 1}. {title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="legal-note">
        <strong>By using MySales</strong>
        <span>You acknowledge that you have read, understood, and agree to these Terms &amp; Conditions.</span>
      </div>

      <footer className="legal-footer">
        <div className="footer-brand">
          <Link href="/" className="brand"><span className="brand-mark">M</span><span>MYSALES</span></Link>
          <p>The smart way to run your business. Simple, powerful, and built for you.</p>
        </div>
        <div>
          <strong>Product</strong>
          <Link href="/#features">Features</Link>
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/#pricing">Pricing</Link>
        </div>
        <div>
          <strong>Legal</strong>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:ifiokabasiudoe@gmail.com">ifiokabasiudoe@gmail.com</a>
          <Link href="/#waitlist">Join the Waitlist</Link>
        </div>
      </footer>
    </main>
  );
}
