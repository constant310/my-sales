import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  ShieldCheck,
  Trash2,
  UserRound,
  BriefcaseBusiness,
  CircleHelp,
} from "lucide-react";
import "./delete-account.css";

export default function DeleteAccountPage() {
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

      <section className="delete-hero">
        <div className="delete-copy">
          <div className="legal-eyebrow">
            <ShieldCheck size={14} />
            ACCOUNT PRIVACY
          </div>

          <h1>
            Delete your <span>mySales</span> account
          </h1>

          <p>
            We&apos;re sorry to see you go. If you no longer wish to use
            mySales, you can request deletion of your account and associated
            data.
          </p>

          <div className="delete-public">
            <ShieldCheck size={18} />
            <div>
              <strong>This page is publicly accessible.</strong>
              <small>You do not need to be logged in to request deletion.</small>
            </div>
          </div>
        </div>

        <div className="delete-art" aria-hidden="true">
          <div className="delete-art-bg">
            <div className="delete-browser">
              <div className="browser-dots"><i /><i /><i /></div>
              <div className="browser-user"><UserRound size={24} /></div>
              <span /><span /><span />
            </div>
            <div className="delete-trash">
              <div className="trash-lid" />
              <div className="trash-body"><i /><i /><i /></div>
            </div>
            <div className="delete-check"><Check size={20} /></div>
          </div>
        </div>
      </section>

      <section className="delete-main">
        <div className="delete-layout">
          <section className="delete-form-card">
            <div className="delete-number">01</div>
            <div>
              <p className="delete-kicker">ACCOUNT DELETION</p>
              <h2>Request account deletion</h2>
              <p className="delete-intro">
                Fill out the form below to request deletion of your mySales
                account and associated data. We will verify your request before
                processing the deletion.
              </p>
            </div>

            <form className="delete-form" action="/api/delete-account" method="POST">
              <label>
                Email address or phone number used for mySales
                <b>*</b>
                <div className="delete-input">
                  <Mail size={18} />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter the email associated with your account"
                  />
                </div>
                <small>We&apos;ll use this to verify and process your request.</small>
              </label>

              <label>
                Reason for deleting account
                <span>(optional)</span>
                <select name="reason" defaultValue="">
                  <option value="">Select a reason</option>
                  <option value="I no longer use mySales">I no longer use mySales</option>
                  <option value="Missing features">Missing features</option>
                  <option value="Technical problems">Technical problems</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <div className="delete-info-strip">
                <ShieldCheck size={18} />
                <span>
                  After you submit this request, we may contact you to verify
                  your identity before we process the deletion.
                </span>
              </div>

              <button type="submit" className="delete-button">
                <Trash2 size={17} />
                Delete My Account
              </button>

              <p className="delete-privacy-note">
                🔒 We respect your privacy. See our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </form>
          </section>

          <aside className="next-card">
            <div className="delete-number">02</div>
            <p className="delete-kicker">WHAT HAPPENS NEXT</p>
            <h2>We&apos;ll guide you through it.</h2>

            <div className="next-step">
              <div>1</div>
              <section>
                <strong>Request received</strong>
                <p>Your deletion request is recorded for review.</p>
              </section>
            </div>

            <div className="next-step">
              <div>2</div>
              <section>
                <strong>We verify your request</strong>
                <p>We may contact you to confirm account ownership.</p>
              </section>
            </div>

            <div className="next-step">
              <div>3</div>
              <section>
                <strong>Deletion is processed</strong>
                <p>Your account and associated data are processed according to our deletion procedure.</p>
              </section>
            </div>

            <div className="next-note">
              <Clock3 size={17} />
              <span>Permanent actions cannot be undone.</span>
            </div>
          </aside>
        </div>

        <section className="delete-section">
          <div className="section-heading">
            <span>03</span>
            <div>
              <p>BEFORE YOU CONTINUE</p>
              <h2>What happens when your account is deleted?</h2>
            </div>
          </div>

          <div className="delete-grid">
            <InfoCard icon={<UserRound />} title="Account information" text="Your personal account information, including profile and login information, will be deleted." />
            <InfoCard icon={<BriefcaseBusiness />} title="Business & sales data" text="Business information and data associated with your account may be deleted as part of the account deletion process." />
            <InfoCard icon={<ShieldCheck />} title="Information that may remain" text="Certain information may be retained where required by law or for legitimate security, fraud prevention or compliance purposes." />
            <InfoCard icon={<Clock3 />} title="Retention" text="Information that must be retained will only remain for the period required for the applicable purpose." />
          </div>
        </section>

        <section className="delete-support">
          <div className="support-icon"><CircleHelp /></div>
          <div>
            <p>NEED HELP?</p>
            <h3>Have questions about your account or data?</h3>
          </div>
          <a href="mailto:support@mysales.app">
            <Mail size={16} /> Contact Support
          </a>
        </section>
      </section>

      <LegalFooter />
    </main>
  );
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="delete-info-card">
      <div className="delete-info-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function LegalFooter() {
  return (
    <footer className="legal-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="legal-brand footer-brand">
            <span className="legal-mark">M</span>
            <span>MY<span>SALES</span></span>
          </Link>
          <p>Simple software for every business.<br />Powerful tools to help you sell more,<br />track better, and grow faster.</p>
        </div>

        <div><b>Product</b><Link href="/#features">Features</Link><Link href="/#how">How It Works</Link><Link href="/#pricing">Pricing</Link><Link href="/#updates">Updates</Link></div>
        <div><b>Company</b><Link href="/#about">About Us</Link><a href="mailto:support@mysales.app">Contact Us</a><Link href="/#blog">Blog</Link><Link href="/#careers">Careers</Link></div>
        <div><b>Legal</b><Link href="/terms">Terms & Conditions</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/delete-account">Delete Account</Link></div>

        <div>
          <b>Join our waitlist</b>
          <p>Be the first to know when MySales launches.</p>
          <Link href="/#waitlist" className="footer-cta">Join the Waitlist <ArrowRight size={15} /></Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 MySales. All rights reserved.</span>
        <span>Built in Nigeria 🇳🇬 for African businesses.</span>
      </div>
    </footer>
  );
}
