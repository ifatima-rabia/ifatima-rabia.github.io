function News() {
  return (
    <main className="container">
      <section className="section">
        <h2 className="news-title">News</h2>

        {/* NEWS ITEM 1 */}

        <div className="news-item">
          <div className="news-date">
            April 16, 2026
          </div>

          <div className="news-content">
            <p>
              Recipient of the Best Graduate Oral Presentation Award titled "Quantifying the Effects of Mold Surface Chemistry, 
              Surface Area-to-Volume Ratio, and Evaporation on Hydrogel Gelation" (Environmental and Materials Sciences & Engineering Category) 
              at Research and Project Showcase (RAPS), Clarkson University
            </p>

            <img
              src="/raps.jpg"
              alt="Conference"
              className="news-image"
            />
          </div>
        </div>

            <div className="news-item">
            <div className="news-date">November 3-4, 2025</div>

            <div className="news-content">
                <p>Conduted customer discover interviews with industry experts 
                being a part of NSF I-Corps regional training
                 at AIChE Annual Meeting, John B. Hynes Veterans Memorial Convention Center, 
                Marriott Copley Place, Sheraton, Boston, MA</p>

                <div className="news-images">
                <img src="/aiche.JPG" />
                <img src="/aiche company.jpeg" />
                </div>
            </div>
        </div>

              <div className="news-item">
          <div className="news-date">
            July 10th, 2025
          </div>

          <div className="news-content">
            <p>
              Passed Ph.D. Candidacy Exam titled "Engineering Cartilage-Mimetic hMSC-Laden Hydrogels via Diels-Alder
              Bioorthogonal Click Chemistry for Cartilage Tissue Regeneration"
            </p>

            <img
              src="/candidacy.JPG"
              alt="Conference"
              className="news-image"
            />
          </div>
        </div>

        <div className="news-item">
            <div className="news-date">March 25-28, 2025</div>

            <div className="news-content">
                <p>Presented my work titled "A Diels-Alder Click Chemistry Approach to Fabricating Hydrogels with 
                Physiologically-Relevant Properties" at Society for Biomaterials Annual Meeting & Exposition (SFB),
                Chicago, Illinois
                </p>

                <div className="news-images">
                <img src="/poster.jpg" />
                <img src="/SFB 1 2025.JPG" />
                </div>
            </div>
        </div>

                      <div className="news-item">
          <div className="news-date">
            October 7th, 2024
          </div>

          <div className="news-content">
            <p>
              Presented first departmental seminar titled "A Novel Approach Using Diels-Alder Click Chemistry
              to Engineer a Cartilage-Mimmetic Human Mesenchymal Stem Cell-Laden Hyaluronic acid-Collage Hydrogel"
            </p>

            <img
              src="/Seminar2024.jpeg"
              alt="Conference"
              className="news-image"
            />
          </div>
        </div>

        <div className="news-item">
          <div className="news-date">
            July 31st, 2024
          </div>

          <div className="news-content">
            <p>Passed Ph.D. Qualifying Exam titled "Engineering Cartilage-Mimetic Properties in Human Mesenchymal
            Stem Cell-Laden Hydrogel using Diels-Alder Click Chemistry"</p>
          </div>
        </div>

      </section>
    </main>
  );
}

export default News;