// function Home() {
//   return <h1>Home Page</h1>;
// }
// export default Home;
import React from "react";

const HealthCareLanding = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --primary: #0f766e;
          --secondary: #f59e0b;
          --border: #c7e0dc;
          --text-muted: #374151;
        }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          color: var(--text-muted);
          overflow: hidden;
        }

        /* BACKGROUND */
        .bg {
          position: fixed;
          inset: 0;
          background-image: url("https://investorplace.com/wp-content/uploads/2019/08/healthcare1600a.jpg");
          background-size: cover;
          background-position: center;
          filter: blur(8px);
          transform: scale(1.1);
          z-index: -2;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.75);
          z-index: -1;
        }

        /* SCROLL */
        .main {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          position: relative;
          z-index: 1;
        }

        .section {
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          align-items: center;
          padding: 0 90px;
          border-left: 6px solid var(--primary);
        }

        /* TOP CENTERED SECTIONS */
        .top-center {
          align-items: flex-start;
          padding-top: 60px;
        }

        .top-center > div {
          width: 100%;
          text-align: center;
        }

        .top-center h1 {
          margin-bottom: 30px;
        }

        /* HERO */
        .hero-tag {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 14px;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 22px;
          color: var(--primary);
        }

        .hero-desc {
          font-size: 17px;
          line-height: 1.75;
          max-width: 560px;
          margin-bottom: 26px;
        }

        .hero-points {
          list-style: none;
          padding-left: 0;
        }

        .hero-points li {
          position: relative;
          padding-left: 26px;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .hero-points li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }

        
        h1, h2, h3 {
          color: var(--primary);
          font-weight: 600;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .image img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 14px;
          border: 1px solid var(--border);
        }

        button {
          margin-top: 20px;
          padding: 10px 24px;
          background: var(--secondary);
          border: none;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* SERVICES */
        .services {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 30px;
        }

        .card {
          padding: 26px;
          background: rgba(255,255,255,0.96);
          border: 1px solid var(--border);
          border-radius: 14px;
        }

        .card p {
          font-size: 15px;
          line-height: 1.6;
        }

        /* FAQ */
        .faq p {
          margin-bottom: 16px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        /* FOOTER */
        .footer {
          justify-content: center;
          text-align: center;
        }

        a {
          color: var(--primary);
          text-decoration: none;
          margin: 0 10px;
          font-weight: 500;
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="bg"></div>
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="main">

        {/* SLIDE 1 — HERO */}
        <section className="section">
          <div className="grid-2">
            <div>
              <p className="hero-tag">Smart Healthcare Platform</p>

              <h1 className="hero-title">
                Smart Healthcare, <br />
                Simplified for Everyone
              </h1>

              <p className="hero-desc">
                HealthCare+ helps patients book appointments, consult doctors,
                manage medical records, and receive AI-powered health guidance
                through one secure digital platform.
              </p>

              <ul className="hero-points">
                <li>Easy appointment scheduling</li>
                <li>AI health assistant for quick guidance</li>
                <li>Digital medical reports & lab tests</li>
                <li>Mental wellness & preventive care</li>
              </ul>
            </div>

            <div className="image">
              <img
                src="https://investorplace.com/wp-content/uploads/2019/08/healthcare1600a.jpg"
                alt="Smart Healthcare Platform"
              />
            </div>
          </div>
        </section>

        {/* SLIDE 2 — SERVICES */}
        <section className="section">
          <div>
            <h1>Our Services</h1>

            <div className="services">
              <div className="card">
                <h3>Schedule Appointments</h3>
                <p>Book online or in-person consultations with verified doctors.</p>
                <button>Book Appointment</button>
              </div>

              <div className="card">
                <h3>AI Health Assistant</h3>
                <p>Instant health guidance and symptom insights.</p>
                <button>Ask AI</button>
              </div>

              <div className="card">
                <h3>Lab Test Booking</h3>
                <p>Book diagnostic tests and receive reports digitally.</p>
                <button>Book Test</button>
              </div>

              <div className="card">
                <h3>Health Insights</h3>
                <p>Track health trends and wellness metrics.</p>
                <button>View Insights</button>
              </div>

              <div className="card">
                <h3>Medical Reports</h3>
                <p>Securely manage prescriptions and reports.</p>
                <button>View Reports</button>
              </div>

              <div className="card">
                <h3>Mental Wellness</h3>
                <p>Tools and resources for emotional well-being.</p>
                <button>Explore Wellness</button>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 3 — FAQ */}
        <section className="section top-center">
          <div className="faq">
            <h1>FAQs</h1>
            {/* <p><strong>Is my data secure?</strong><br />Yes, all data is encrypted and protected.</p>
            <p><strong>Does AI replace doctors?</strong><br />No, it only assists with guidance.</p>
            <p><strong>Can I access reports anytime?</strong><br />Yes, through your account.</p> */}
          </div>
        </section>

        {/* SLIDE 4 — ABOUT US*/}
        <section className="section top-center">
          <div>
            <h1>About Us</h1>

            {/* <p>
              HealthCare+ is built to make healthcare access simpler, smarter,
              and more reliable through secure digital solutions.
            </p>

            <ul style={{ maxWidth: "600px", margin: "0 auto" }}>
              <li>Patient-first digital healthcare</li>
              <li>AI-powered health assistance</li>
              <li>Secure medical records</li>
              <li>Mental and physical wellness support</li>
            </ul> */}
          </div>
        </section>

        {/* SLIDE 5 — FOOTER */}
        <section className="section footer">
          <div>
            <h2>Terms & Policies</h2>

            <p>
              HealthCare+ provides digital healthcare tools to support
              medical decision-making, not replace professionals.
            </p>

            <p>
              <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
            </p>

            <p>© 2025 HealthCare+. All rights reserved.</p>
          </div>
        </section>

      </div>
    </>
  );
};

export default HealthCareLanding;

