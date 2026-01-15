// function Home() {
//   return <h1>Home Page</h1>;
// }
// export default Home;
import React from "react";

const HealthCareLanding = () => {
  return (
    <>
      <style>{`
        :root {
          --primary: #0f766e;
          --secondary: #f59e0b;
          --bg-light: #e6f4f1;
          --border: #c7e0dc;
          --text-muted: #374151;
        }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          font-family: "Segoe UI", Arial, sans-serif;
          color: var(--text-muted);
        }

        .main-container {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
        }

        .section {
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          border-left: 6px solid var(--primary);
        }

        header {
          padding: 18px 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          border-bottom: 1px solid var(--border);
        }

        header h2 {
          color: var(--primary);
          font-weight: 700;
        }

        .auth-buttons button {
          margin-left: 12px;
          padding: 8px 18px;
          border: 1px solid var(--primary);
          background: white;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
        }

        .center {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 90px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .image-box img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 14px;
          border: 1px solid var(--border);
        }

        .hero {
          background: var(--bg-light);
        }

        .hero h1 {
          font-size: 44px;
        }

        .hero p {
          font-size: 18px;
          line-height: 1.8;
          margin: 15px 0 25px;
        }

        .hero ul {
          list-style: disc;
          padding-left: 20px;
        }

        .hero li {
          margin-bottom: 10px;
          font-weight: 600;
        }

        .service {
          background: #ffffff;
        }

        .service h1 {
          font-size: 34px;
          color: var(--primary);
        }

        .service p {
          font-size: 16px;
          line-height: 1.8;
        }

        .service ul {
          margin-top: 20px;
          padding-left: 18px;
        }

        .service li {
          margin-bottom: 10px;
        }

        .service button {
          margin-top: 30px;
          padding: 10px 24px;
          background: var(--secondary);
          border: none;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .footer {
          background: var(--bg-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        footer {
          text-align: center;
          font-size: 14px;
        }

        footer a {
          color: var(--primary);
          text-decoration: none;
          margin: 0 12px;
        }
      `}</style>

      <div className="main-container">

        {/* SLIDE 1 */}
        <section className="section hero">
          <header>
            <h2>HealthCare+</h2>
            <div className="auth-buttons">
              <button onClick={() => alert("Redirecting to Login page...")}>
                Login
              </button>
              <button onClick={() => alert("Redirecting to Registration page...")}>
                Register
              </button>
            </div>
          </header>

          <div className="center">
            <div className="grid-2">
              <div>
                <h1>Digital Healthcare Platform</h1>
                <p>
                  Secure, reliable and accessible healthcare services
                  connecting patients and medical professionals digitally.
                </p>
                <ul>
                  <li>Data privacy & compliance</li>
                  <li>Verified doctors</li>
                  <li>Care anytime, anywhere</li>
                </ul>
              </div>

              <div className="image-box">
                <img
                  src="https://investorplace.com/wp-content/uploads/2019/08/healthcare1600a.jpg"
                  alt="HealthCare Platform"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 2 */}
        <section className="section service">
          <div className="center">
            <div className="grid-2">
              <div>
                <h1>Book Consultation</h1>
                <p>
                  Schedule medical consultations digitally without
                  long waiting times.
                </p>
                <ul>
                  <li>Choose date & time</li>
                  <li>Online or in-person</li>
                  <li>Instant confirmation</li>
                </ul>
                <button onClick={() => alert("Book Consultation feature coming soon!")}>
                  Book Appointment
                </button>
              </div>

              <div className="image-box">
                <img
                  src="https://img.freepik.com/premium-photo/doctor-patient-consultation-modern-clinic_605022-6631.jpg"
                  alt="Book Consultation"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 3 */}
        <section className="section service">
          <div className="center">
            <div className="grid-2">
              <div>
                <h1>Find Doctors</h1>
                <p>Discover qualified doctors across specialties.</p>
                <ul>
                  <li>Hospital affiliation</li>
                  <li>Experience & ratings</li>
                  <li>Availability check</li>
                </ul>
                <button onClick={() => alert("Find Doctors feature coming soon!")}>
                  Search Doctors
                </button>
              </div>

              <div className="image-box">
                <img
                  src="https://wallpaperaccess.com/full/620016.jpg"
                  alt="Find Doctors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 4 */}
        <section className="section service">
          <div className="center">
            <div className="grid-2">
              <div>
                <h1>Know Your Medicines</h1>
                <p>Access verified medicine information safely.</p>
                <ul>
                  <li>Dosage & instructions</li>
                  <li>Side effects</li>
                  <li>Verified sources</li>
                </ul>
                <button onClick={() => alert("Know Your Medicines feature coming soon!")}>
                  Explore Medicines
                </button>
              </div>

              <div className="image-box">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/760/792/non_2x/blue-and-white-capsules-pill-spilled-out-from-white-plastic-bottle-container-global-healthcare-concept-antibiotics-drug-resistance-antimicrobial-capsule-pills-pharmaceutical-industry-free-photo.jpg"
                  alt="Know your Medicine"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section className="section footer">
          <footer>
            <p>
              <a href="#">Terms & Conditions</a> |
              <a href="#">Privacy Policy</a>
            </p>
            <p>© 2025 HealthCare+. All rights reserved.</p>
          </footer>
        </section>

      </div>
    </>
  );
};

export default HealthCareLanding;
