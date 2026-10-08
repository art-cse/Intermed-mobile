import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "1Clinic Intermed | RideShare",
  description: "Projekt mësimor: lista, detajet dhe kërkesa e simuluar me Next.js dhe Neon.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sq">
      <body>
        <a className="skip-link" href="#content">Kalo te përmbajtja</a>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="1Clinic Intermed — faqja kryesore">
            <span className="brand-mark" aria-hidden="true">+</span>
            <span>1Clinic <strong>Intermed</strong></span>
          </Link>
          <span className="course-label">Mobile · Java 4</span>
        </header>
        <div id="content">{children}</div>
        <footer>Projekt mësimor · Të dhëna fiktive · Pa rezervime reale</footer>
      </body>
    </html>
  );
}
