import "./App.css";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";
import News from "./News";

function App() {
  return (
    <div>
      <header className="topbar">
        <div className="topbar-inner">
        <div className="topbar-left">
          <a href="/#" className="brand">Rabia</a>

          <nav className="nav">
            <a href="/#publications">Publications</a>
            <a href="/#awards">Awards</a>
            <a href="/#teaching">Teaching</a>
            <Link to="/news">News</Link>
            <a
              href="https://docs.google.com/document/d/1IsytFJg-MY2cIQ0BV43847gXgkow9P0qgGSf67jaTTE/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </nav>
        </div>

        <div className="topbar-right">
          <a
            href="https://scholar.google.com/citations?user=1QLwnTEAAAAJ&hl=en&authuser=2"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <img src="/google.svg" alt="Google Scholar" className="header-icon" />
          </a>


          <a
            href="https://www.linkedin.com/in/fatima-rabia/"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <FaLinkedin />
          </a>
        </div>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={

      <main className="container">
        <section className="hero">
          <div className="hero-image">
            <img src="/rf.jpg" alt="Numan" />

            <div className="image-contact">
              <p className="email-row">
                <MdEmail className="email-icon" />
                <span>rafatim@clarkson.edu</span>
              </p>

              <p className="email-row">
                <MdEmail className="email-icon" />
                <span>rabiafatima1012@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="hero-text">
            <h1>Rabia Fatima</h1>

            <p>
              PhD Candidate (ABD)
            </p>

            <p>
            PhD Candidate (3rd year) in{" "}
            <a
              href="https://sites.clarkson.edu/almeidalab/"
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              The Almeida Biomaterials Lab for Stem Cell Engineering
            </a> 
            {" "}at{" "}
            <a
              href="https://www.clarkson.edu/academics/schools-colleges/engineering/chemical-biomolecular-engineering-department"
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              Chemical and Biomolecular Engineering, Clarkson University
            </a>. I am advised by{" "}
            <a
              href="https://www.clarkson.edu/people/bethany-almeida"
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              Dr. Bethany Almeida
            </a>,  
            working in the area of biomaterials and tissue engineering. 
            My research focuses on fabrication of advanced biomaterials, including hydrogels and nanoparticles with tunable 
            physicochemical properties, and study biomaterial–cell interactions to develop 
            systems for tissue repair and therapeutic delivery.
            </p>

            <p>
              Research interests include Biomaterials, Tissue Engineering, Regenerative Medicine, 
              Drug Delivery, Therapeutic Delivery
            </p>
          </div>
        </section>

        <section id="publications" className="section">
          <h2>Publications</h2>

          <div className="publication-item">
            <div className="publication-image">
              <img src="/paper1.png" alt="Publication 1" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.1002/jbm.a.37992"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                Hyaluronic Acid/Type I Collagen Hydrogels With Tunable Physicochemical 
                Properties Using Diels–Alder Click Chemistry
              </h3>
              <p className="publication-authors">
                <strong>Rabia Fatima</strong>, Bethany Almeida
              </p>
              <p className="publication-venue">
                <em>Journal of Biomedical Materials Research Part A<br /> 
                  John Wiley & Sons Publisher, 2025<br/>
                  <strong>Funding:</strong> This work was supported by National Science Foundation, 2138587.</em>
              </p>

            </div>
          </div>

          <div className="publication-item">
            <div className="publication-image">
              <img src="/paper2.pdf" alt="Publication 2" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.1039/D4TB00716F"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
            Methods to achieve tissue-mimetic physicochemical properties in hydrogels for 
            regenerative medicine and tissue engineering
              </h3>
              <p className="publication-authors">
                <strong>Rabia Fatima</strong>, Bethany Almeida
              </p>
              <p className="publication-venue">
                <em>Journal of Materials Chemistry B<br /> 
                  Royal Society of Chemistry, 2024<br/>
                  <strong>Funding:</strong> This work was supported by National Science Foundation, 2138587.</em>
              </p>

            </div>
          </div>
        </section>
        <section id="publications" className="section">
          <h2>Other Publications</h2>
          
          <div className="publication-item">
            <div className="publication-image">
              <img src="/Review with Dr. Farooq.jpg" alt="Publication 3" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.1016/j.apenergy.2025.126285"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
             Advanced monometallic and bimetallic catalysts for energy efficient propylene production 
             via propane dehydrogenation pathways–A review
              </h3>
              <p className="publication-authors">
                Bilal Fareed, Farooq Sher, Fatima Zafar, Imane Ziani, Bohong Wang,{" "}
                  <strong>Rabia Fatima</strong>, Alexander Chupin, Emina Boškailo, Muhammad Kashif Khan, Mariam Ameen
              </p>
              <p className="publication-venue">
                <em>Applied Energy, Elsevier Publisher, 2025<br/>
                  <strong>Funding:</strong> This work was funded by International Society of Engineering Science and Technology (ISEST), UK 
                  as well as supported by “Pioneer” and “Leading Goose” R&D Program of Zhejiang (2024C04049), China.</em>
              </p>

            </div>
          </div>

                <div className="publication-item">
            <div className="publication-image">
              <img src="/phytochemical study.png" alt="Publication 4" />
              <p className="publication-links">
                <a
                  href="https://d1wqtxts1xzle7.cloudfront.net/79055099/8-5-294-941-libre.pdf?1642565117=&response-content-disposition=inline%3B+filename%3DPhytochemical_study_of_acetone_solvent_e.pdf&Expires=1776558810&Signature=Xn5OPW~A46DDXO~uMn8xbXINGUHdxugkXShaJmfMNDHjX1gQPDXA0hCgN6kyz9g-970YZVNoCs2j3h94G4T-P7VgvlSxrbnpMglXA3PTt-om~W6hXm4qtZWbuCWxz9yvKF3q0AIOyvpBTBd7VxPl5dJ4ObMtWQPOHcUQuL6UPH-XsOSm9wGKy0-SkamuxG2JHQGr4ML592Yn2JdEqnFaJ05KVyLJhZynsDzBveHOOEw4NovUynOLiaC-MDUbvNKTks84hDBNylhE4HLPU8qZQ1DQ6Ggx~JEeVF1yRLOCzvjfxx05gGRS4Sho5MskIwY0l-fJlhRGjmwhZiO0IUoHMQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
             Phytochemical study of acetone solvent extract of Coriander sativum
          
              </h3>
              <p className="publication-authors">
                Sammar Nathenial, Areeba Fatima, <strong>Rabia Fatima</strong>,
                   Nimra Ijaz, Nehdiya Saeed, Aroosa Shafqat, Lubaina Leghari
              </p>
              <p className="publication-venue">
                <em>Journal of Pharmacognosy and Phytochemistry, 
                  2019<br/>
                  </em>
              </p>

            </div>
          </div>

        </section>

        <section id="book-chapters" className="section">
          <h2>Book Chapters</h2>

          <ol className="book-chapter-list">
            <li className="book-chapter-item">
              <h3>Chapter 10 - Real-time decision support systems in chemical and process engineering</h3>
              <p className="publication-authors">
                Gulzat Aitkaliyeva Saman Hameed, Seckin Karagoz, Ali Ozdemir, Arash Khosravi,
                <strong> Rabia Fatima</strong>, Zulqarnain
              </p>
              <p className="publication-venue">
                <em>Elsevier Publisher, 2025</em>
              </p>
            </li>

            <li className="book-chapter-item">
              <h3>
                Chapter 10 - Biomass-derived carbonaceous materials for adsorptive removal of environmental
                pollutants and CO2 capture applications
              </h3>
              <p className="publication-authors">
                Farooq Sher, Narcisa Smječanin Omerbegovi, Seyid Zeynab Hashimzada, Abdelqader El Guerraf,
                Mahnoor Mansoor Khan, Emina K. Sher, Mariam Hameed, Ayesha Zafar,
                <strong> Rabia Fatima</strong>, Hiba Ghazouani
              </p>
              <p className="publication-venue">
                <em>Sustainable Applications of Pomegranate Peels, Elsevier Publisher, 2025</em>
              </p>
            </li>

            <li className="book-chapter-item">
              <h3>Nanomaterials for sustainable pest and disease management in agriculture</h3>
              <p className="publication-authors">
                Ayesha Shafqat, Arshad Rasool, <strong>Rabia Fatima</strong>, Muhammad Majeed,
                Khursheed Ur Rahman, Altaf Hussain Narejo, Muhammad Ishtiaq, Shazia Kousar,
                Afshan Farid
              </p>
              <p className="publication-venue">
                <em>Harnessing nanoomics and nanozymes for sustainable agriculture, 2024</em>
              </p>
            </li>

            <li className="book-chapter-item">
              <h3>Precision farming with nanoscale sensors: monitoring soil, water, and crop health</h3>
              <p className="publication-authors">
                Jyoti Rani, Arshad Rasool, Hassan Sher, <strong>Rabia Fatima</strong>, Javeed Hussain,
                Muhammad Majeed, Faisal Hussain, Olim K Khojimatov, Khadim Hussain
              </p>
              <p className="publication-venue">
                <em>Harnessing nanoomics and nanozymes for sustainable agriculture, 2024</em>
              </p>
            </li>

            <li className="book-chapter-item">
              <h3>Nanotechnology for improved crop resilience in challenging environments</h3>
              <p className="publication-authors">
                Arshad Rasool, Milka Tariq, Muhammad Asif, Ghulam Mujtaba Shah,
                <strong> Rabia Fatima</strong>, Muhammad Majeed, Robina Aziz, Jehanzeb Khan,
                Khadim Hussain, Abduraimov Ozodbek
              </p>
              <p className="publication-venue">
                <em>Harnessing nanoomics and nanozymes for sustainable agriculture, 2024</em>
              </p>
            </li>

            <li className="book-chapter-item">
              <h3>Nanotechnology for soil remediation and land restoration</h3>
              <p className="publication-authors">
                Muhammad Majeed, Wajeeha Noor, Arshad Rasool, Muhammad Saleem, Iqra Bashir,
                <strong> Rabia Fatima</strong>, Allah Bakhsh Gulshan, Dwaipayan Sinha, Satarupa Nath,
                Shumaila Hassan, Zehra Batool, Shahid Abbas, Arslan Rafique
              </p>
              <p className="publication-venue">
                <em>Harnessing nanoomics and nanozymes for sustainable agriculture, 2024</em>
              </p>
            </li>
          </ol>
        </section>


        <section id="awards" className="section">
          <h2>
            Awards
          </h2>
          <p class="award-text">
            <li>
            < strong>Best Graduate Oral Presentation in Environmental and Materials Sciences & Engineering:</strong> Awarded by Research and Project Showcase, Clarkson University, 2026 <br/>
            </li>
            <li>
            < strong>3rd Prize in Essay Writing Competition:</strong> Awarded by Pakistan Youth Community (PYC), Lahore, Pakistan, 2019 <br/>
            </li>
            <li>
            < strong> 2nd Prize in Best Business Idea:</strong> Awarded by 1st International Conference on Science, Technology and Innovation,
                      Kinnaird College, Pakistan, 2019  <br/>
              </li>
              <li>
            < strong>2nd Prize, Best Breast Cancer Documentary:</strong>  Breast Cancer Awareness Competition,
                      University of Health Sciences, Pakistan, 2018
              </li>
          </p>
        </section>

        <section id="teaching" className="section">
          <h2>Teaching</h2>

          <p><strong>Students Mentored</strong></p>

          <ul className="mentored-students">
            <li>
              <strong>Erin Reynolds</strong> (B.S. Candidate, Chemical Engineering, Clarkson University)<br/>
              <span className="student-date">Sum 2025 – Present</span> <br/>
              
            </li>

            <li>
              <strong>Roy Annis</strong> (B.S. Candidate, Chemical Engineering, Clarkson University)<br/>
              <span className="student-date">Sum 2025 – Present</span><br />
              
            </li>

            <li>
              <strong>Devin Fitzpatrick</strong> (B.S. Candidate, Chemical Engineering, Clarkson University)<br />
              <span className="student-date">Fall 2024</span><br />
            </li>
          </ul>
          <br/>

          <strong>Teaching Assistant</strong><br/>
          <br/>
          
          <strong>CH-260: Thermodynamics and Energy Balance</strong><br/>
            Spring 2024
            <ul>
            <li>
              graded and provided feedback to students assignments
            </li>
            <li>
              held office hours (4hr/week) to answer assignment and course work
            </li>
            </ul>
        </section>

      </main>
       }
        />

      <Route path="/news" element={<News />} />
      </Routes>

      <footer className="bottombar">
      <p>Updated in April 2026 by Rabia</p>
    </footer>
    </div>
  );
}

export default App;