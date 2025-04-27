'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Home() {
  const activeSection = useActiveSection();

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><a href="#start" className={activeSection === 'start' ? styles.active : ''}>Start</a></li>
          <li><a href="#planujesz_impreze" className={activeSection === 'planujesz_impreze' ? styles.active : ''}>Planujesz imprezę?</a></li>
          <li><a href="#namioty" className={activeSection === 'namioty' ? styles.active : ''}>Namioty</a></li>
          <li><a href="#dmuchance" className={activeSection === 'dmuchance' ? styles.active : ''}>Dmuchańce</a></li>
          <li><a href="#galeria" className={activeSection === 'galeria' ? styles.active : ''}>Oferta</a></li>
          <li><a href="#kontakt" className={activeSection === 'kontakt' ? styles.active : ''}>Kontakt</a></li>
        </ul>
        <img src="./Wakacyjna_przygoda.svg" alt="Logo Wakacyjna przygoda" />
      </nav>
      <div className={styles.hero_bar} id="start">
        <div className={styles.hero}>
          <h1>Wakacyjna Przygoda<br />Kompleksowa obsługa uroczystości plenerowych</h1>
          {/* <button className={styles.cta}>Zobacz ofertę</button> */}
        </div>
      </div>
      <main className={styles.main}>
        {/* SEKCJA 1 */}
        <section className={styles.section} id="planujesz_impreze">
          <h2 className={styles.headerDark}>Planujesz imprezę?</h2>
          <p>Zapewniamy wynajem namiotów cateringowych wraz z pełnym wyposażeniem dla 20 do 200 osób!
            <br />Oferujemy profesjonalną obsługę, nowoczesny sprzęt z 2024 i 2025 roku oraz niezapomniane atrakcje na każdą okazję.</p>
          <p>📅 Zapraszamy do rezerwacji na 2025 rok</p>
          <p>📌 Wolne terminy na maj</p>
          <div className={styles.ctas}>
            <a>Zarezerwuj</a>
          </div>
        </section>

        {/* SEKCJA 2 - NAMIOTY */}
        <section className={styles.section} id="namioty">
          <h2 className={styles.header}>Namioty cateringowe</h2>
          <p>Wynajmujemy namioty cateringowe dla 20 do 200 osoób.<br />Wszystkie namioty są nowe, wykonane z materiałów najwyższej jakości, odporne na deszcz i wiatr.<br />Wszystkie namioty posiadają certyfikaty bezpieczeństwa.</p>
          <p className={styles.coloredText}>🎁 Montaż, demontaż oraz girlandowe oświetlenie – GRATIS!</p>

          <div className={styles.gallery}>
            {/* PROPOZYCJA 1 */}
            <div className={styles.photoAndText1}>
              <div className={styles.photo1}>
                <img src="./namiot2.jpg" alt="Namiot na przyjęcie weselne" />
              </div>
              <div className={styles.text1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.
              </div>
            </div>

            {/* PROPOZYCJA 1 */}
            <div className={styles.photoAndText1}>
              <div className={styles.photo1}>
                <img src="./namiot3.jpg" alt="Namiot na przyjęcie weselne" />
              </div>
              <div className={styles.text1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.
              </div>
            </div>
          </div>
          <p>Dostępne białe namioty z eleganckim szarym wykończeniem:</p>
          <ul>
            <li>5x6 m (30 m²) – do 35 osób siedzących</li>
            <li>5x8 m (40 m²) – do 45 osób siedzących</li>
            <li>5x10 m (50 m²) – do 55 osób siedzących</li>
            <li>5x12 m (60 m²) – do 70 osób siedzących</li>
            <li>8x12 m (96 m²) – do 110 osób siedzących</li>
          </ul>
          <h3 className={styles.header}>Wyposażenie i akcesoria</h3>
          <div className={styles.tentsListsContainer}>
            <ul className={styles.tentsList}>
              <li>🔹 Meble bankietowe</li>
              <li>✔️ Wygodne krzesła bankietowe</li>
              <li>✔️ Stoły prostokątne 180x90 cm, 140x80 cm</li>
              <li>✔️ Stoły okrągłe</li>
              <li>✔️ Eleganckie białe obrusy</li>
            </ul>

            <ul className={styles.tentsList}>
              <li>🔹 Zastawa stołowa</li>
              <li>✔️ Kompletna zastawa dla gości</li>
              <li>✔️ Warniki do wody</li>
              <li>✔️ Dzbanki, półmiski, wazy i akcesoria</li>
              <li>✔️ Podtalerze</li>
            </ul>

            <ul className={styles.tentsList}>
              <li>🔹 Dodatkowe opcje</li>
              <li>✔️ Podłoże ze sztucznej trawy</li>
              <li>✔️ Catering</li>
              <li>✔️ Profesjonalne nagłośnienie i oświetlenie</li>
              <li>✔️ Animacje</li>
            </ul>
          </div>
          {/* PROPOZYCJA 2 */}
          <div className={styles.photoAndText2}>
            <div className={styles.photo2}>
              <img src="./namiot2.jpg" alt="Namiot na przyjęcie weselne" />
            </div>
            <div className={styles.text2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.
            </div>
          </div>

          {/* PROPOZYCJA 3 */}
          <div className={styles.photoAndText3}>
            <div className={styles.photo3}>
              <img src="./namiot2.jpg" alt="Namiot na przyjęcie weselne" />
            </div>
            <div className={styles.text3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.
            </div>
          </div>

          
        </section>

        <section className={styles.section} id="dmuchance">
          <h2>Dmuchańce</h2>
          <p>Wynajmujemy dmuchańce na każdą okazję. Dmuchane zamki, zjeżdżalnie, tory przeszkód, dmuchane piłkarzyki, dmuchane kręgle i wiele innych atrakcji dla dzieci i dorosłych.</p>
          <div className={styles.ctas}>
            <a>Zobacz ofertę</a>
          </div>
        </section>
        <section className={styles.section}>Sekcja 4</section>
        <section className={styles.section}>Sekcja 5</section>
      </main>
      <footer className={styles.footer}>
        <p>Wakacyjna Przygoda &copy; 2025</p>
        <p>Projekt i wykonanie: Robert Sławeta</p>
      </footer>
    </div>
  );
}
