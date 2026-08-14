import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  LockKeyhole,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import "./legal.css";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-topbar">
        🎁 Free to start for a month. When the month is over?
        <b>You only need ₦500 to continue.</b>
      </div>

      <nav className="legal-nav">
        <Link href="/" className="legal-brand">
          <span className="legal-mark">M</span>
          <span>MY<span>SALES</span></span>
        </Link>

        <div className="legal-links">
          <Link href="/#features">Features</Link>
          <Link href="/#how">How It Works</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#faq">FAQ</Link>
        </div>

        <Link href="/#waitlist" className="legal-nav-cta">
          Join Waitlist <ArrowRight size={15} />
        </Link>
      </nav>

      <section className="terms-hero">
        <div>
          <div className="legal-eyebrow">
            <FileText size={14} />
            TERMS OF SERVICE
          </div>

          <h1>Terms &amp; <span>Conditions</span></h1>

          <p className="terms-date">Last updated: May 24, 2025</p>

          <p className="terms-intro">
            These Terms &amp; Conditions govern your use of MySales and the
            services we provide. By using MySales, you agree to these terms.
          </p>
        </div>

        <div className="terms-art" aria-hidden="true">
          <div className="terms-art-bg">
            <div className="terms-document">
              <FileText size={42} />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="terms-shield">
              <ShieldCheck size={30} />
            </div>
            <div className="terms-check">
              <CheckCircle2 size={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="terms-content">
        <div className="terms-rule" />

        <article className="terms-section">
          <div className="terms-number">01</div>
          <div>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using MySales, you agree to be bound by these
              Terms &amp; Conditions. If you do not agree with these terms,
              please do not use the service.
            </p>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">02</div>
          <div>
            <h2>Use of the Service</h2>
            <p>
              MySales provides business management tools designed to help
              businesses manage sales, products, customers, inventory and
              related business activities.
            </p>
            <p>
              You agree to use the service only for lawful business purposes
              and in a way that does not interfere with the operation or
              security of the service.
            </p>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">03</div>
          <div>
            <h2>Your Account</h2>
            <p>
              You are responsible for providing accurate information and for
              keeping your account credentials secure. You are responsible for
              activities carried out through your account.
            </p>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">04</div>
          <div>
            <h2>Your Business Data</h2>
            <p>
              You retain responsibility for the business information and data
              you enter into MySales. You should maintain appropriate backups
              of important business records.
            </p>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">05</div>
          <div>
            <h2>Payments and Pricing</h2>
            <p>
              Any applicable fees for MySales services will be communicated to
              you through the service or our official communication channels.
              Prices and available plans may change from time to time.
            </p>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">06</div>
          <div>
            <h2>Prohibited Activities</h2>
            <p>
              You must not misuse MySales, attempt to gain unauthorized access,
              interfere with its operation, upload malicious content, or use
              the service for unlawful activities.
            </p>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">07</div>
          <div>
            <h2>Service Availability</h2>
            <p>
              We work to keep MySales available and reliable, but we do not
              guarantee that the service will always be uninterrupted or
              error-free. Maintenance, technical issues and circumstances
              outside our control may affect availability.
            </p>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">08</div>
          <div>
            <h2>Account Suspension or Termination</h2>
            <p>
              We may suspend or terminate access where necessary to protect the
              service, enforce these terms, prevent abuse, or comply with
              applicable legal requirements.
            </p>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">09</div>
          <div>
            <h2>Privacy</h2>
            <p>
              Your use of MySales is also subject to our Privacy Policy, which
              explains how we collect, use, store and protect information.
            </p>
            <Link href="/privacy-policy" className="terms-inline-link">
              Read our Privacy Policy <ArrowRight size={14} />
            </Link>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">10</div>
          <div>
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms &amp; Conditions from time to time. When
              we make changes, we will update the date shown on this page.
              Continued use of MySales after changes are published means you
              accept the updated terms.
            </p>
          </div>
        </article>

        <article className="terms-section">
          <div className="terms-number">11</div>
          <div>
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms &amp; Conditions, please
              contact us.
            </p>
            <a
              className="terms-email"
              href="mailto:ifiokabasiudoe@gmail.com"
            >
              <UserCheck size={16} />
              ifiokabasiudoe@gmail.com
            </a>
          </div>
        </article>

        <div className="terms-trust">
          <div>
            <LockKeyhole size={21} />
          </div>
          <section>
            <strong>Use MySales responsibly</strong>
            <p>
              These terms help keep the service useful, secure and reliable
              for every business using MySales.
            </p>
          </section>
        </div>
      </section>

      <footer className="legal-footer">
        <div className="footer-grid">
          <div>
            <Link href="/" className="legal-brand footer-brand">
              <span className="legal-mark">M</span>
              <span>MY<span>SALES</span></span>
            </Link>
            <p>
              Simple software for every business.
              <br />
              Powerful tools to help you sell more,
              <br />
              track better, and grow faster.
            </p>
          </div>

          <div>
            <b>Product</b>
            <Link href="/#features">Features</Link>
            <Link href="/#how">How It Works</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#updates">Updates</Link>
          </div>

          <div>
            <b>Company</b>
            <Link href="/#about">About Us</Link>
            <a href="mailto:support@mysales.app">Contact Us</a>
            <Link href="/#blog">Blog</Link>
            <Link href="/#careers">Careers</Link>
          </div>

          <div>
            <b>Legal</b>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/delete-account">Delete Account</Link>
          </div>

          <div>
            <b>Join our waitlist</b>
            <p>Be the first to know when MySales launches.</p>
            <Link href="/#waitlist" className="footer-cta">
              Join the Waitlist <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MySales. All rights reserved.</span>
          <span>Built in Nigeria 🇳🇬 for African businesses.</span>
        </div>
      </footer>
    </main>
  );
}
