import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Edit3,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import "./privacy-policy.css";

const sections = [
  {
    icon: <UserRound />,
    title: "1. Information We Collect",
    text: "We collect information you provide directly such as your name, email address, phone number, and business information. We also collect data related to your business activities including products, sales, customers, inventory, staff, and transactions.",
  },
  {
    icon: <BarChart3 />,
    title: "2. How We Use Your Information",
    text: "We use your information to provide and improve MySales, manage your account, process transactions, generate reports, provide customer support, and keep the app secure.",
  },
  {
    icon: <LockKeyhole />,
    title: "3. How We Store and Protect Your Information",
    text: "We store your data on secure servers and use industry-standard security measures to protect it from unauthorized access, disclosure, alteration, or destruction.",
  },
  {
    icon: <Network />,
    title: "4. Sharing of Information",
    text: "We do not sell your personal information. We may share your information with trusted third-party service providers who help us operate our app, subject to confidentiality obligations.",
  },
  {
    icon: <ShieldCheck />,
    title: "5. Your Rights and Choices",
    text: "You can update, export, or delete your account and data at any time from within the app or by contacting us. You have the right to access and correct your personal information.",
  },
  {
    icon: <UsersRound />,
    title: "6. Children’s Privacy",
    text: "MySales is not intended for children under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    icon: <Edit3 />,
    title: "7. Changes to This Policy",
    text: "We may update this Privacy Policy from time to time. We will notify you of any changes by updating the “Last updated” date on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-topbar">
        🎁 Free to start for a month. When the month is over?
        <b>You only need ₦500 to continue.</b>
      </div>

      <nav className="privacy-nav">
        <Link href="/" className="privacy-brand">
          <span className="privacy-mark">M</span>
          <span>MY<span>SALES</span></span>
        </Link>

        <div className="privacy-links">
          <Link href="/#features">Features</Link>
          <Link href="/#how">How It Works</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#faq">FAQ</Link>
        </div>

        <Link href="/#waitlist" className="privacy-cta">
          Join Waitlist <ArrowRight size={15} />
        </Link>
      </nav>

      <section className="privacy-hero">
        <div className="privacy-hero-copy">
          <div className="privacy-eyebrow">
            <ShieldCheck size={14} />
            YOUR PRIVACY MATTERS
          </div>

          <h1>Privacy Policy</h1>
          <p className="privacy-date">Last updated: May 24, 2025</p>

          <p className="privacy-intro">
            At MySales, your privacy is important to us. This Privacy Policy
            explains how we collect, use, store, and protect your information
            when you use our application and services.
          </p>
        </div>

        <div className="privacy-art" aria-hidden="true">
          <div className="privacy-art-bg">
            <div className="privacy-doc">
              <span /><span /><span /><span />
            </div>
            <div className="privacy-shield">
              <LockKeyhole size={38} />
            </div>
            <div className="privacy-person"><UserRound size={19} /></div>
            <div className="privacy-check"><Check size={18} /></div>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="privacy-rule" />

        <div className="privacy-list">
          {sections.map((section) => (
            <article className="privacy-item" key={section.title}>
              <div className="privacy-icon">{section.icon}</div>
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </article>
          ))}

          <article className="privacy-item">
            <div className="privacy-icon"><Mail /></div>
            <div>
              <h2>8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <a className="privacy-email" href="mailto:ifiokabasiudoe@gmail.com">
                <Mail size={16} />
                Email: ifiokabasiudoe@gmail.com
              </a>
            </div>
          </article>
        </div>

        <div className="privacy-trust">
          <div><ShieldCheck size={22} /></div>
          <section>
            <strong>Your trust is our priority</strong>
            <p>We are committed to keeping your data safe and helping you manage your business with confidence.</p>
          </section>
        </div>
      </section>

      <footer className="privacy-footer">
        <div className="privacy-footer-grid">
          <div>
            <Link href="/" className="privacy-brand footer-brand">
              <span className="privacy-mark">M</span>
              <span>MY<span>SALES</span></span>
            </Link>
            <p>The smart way to run your business.<br />Simple, powerful, and built for you.</p>
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
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/delete-account">Delete Account</Link>
          </div>

          <div>
            <b>Join our waitlist</b>
            <p>Be the first to know when MySales launches.</p>
            <Link href="/#waitlist" className="privacy-footer-cta">
              Join the Waitlist <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="privacy-footer-bottom">
          <span>© 2026 MySales. All rights reserved.</span>
          <span>Built in Nigeria 🇳🇬 for African businesses.</span>
        </div>
      </footer>
    </main>
  );
}
