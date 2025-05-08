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
          <p>📌 Wolne terminy na maj i czerwiec</p>
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
              Elegancki namiot cateringowy w klasycznym z szarym wykończeniem. Przestronna konstrukcja idealna na przyjęcia plenerowe, wesela i imprezy firmowe. Zapewnia komfortowe schronienie dla gości niezależnie od pogody.              </div>
            </div>

            {/* PROPOZYCJA 1 */}
            <div className={styles.photoAndText1}>
              <div className={styles.photo1}>
                <img src="./namiot3.jpg" alt="Namiot na przyjęcie weselne" />
              </div>
              <div className={styles.text1}>
              Profesjonalny namiot cateringowy w białym kolorze. Łatwy i szybki montaż pozwala na organizację przyjęć w dowolnej lokalizacji. Doskonale sprawdza się podczas imprez rodzinnych i wydarzeń biznesowych
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

          
        </section>

        <section className={styles.section} id="dmuchance">
          <h2>Dmuchańce</h2>
          <p>Wynajmujemy dmuchańce na każdą okazję. Dmuchane zamki, zjeżdżalnie, tory przeszkód, dmuchane piłkarzyki i wiele innych.</p>
          <div className={styles.dmuchaniecContainer}>
  <img src="./dmuchaniec_labirynt.jpg" alt="Duży dmuchaniec Labirynt" className={styles.dmuchaniec} />
  <div className={styles.dmuchaniecText}>
    <h3>Labirynt</h3>
    <div className={styles.dmuchaniecSpecs}>
      <div className={styles.specItem}>
        <span className={styles.specIcon}>📏</span>
        <span className={styles.specLabel}>Wymiary:</span>
        <span className={styles.specValue}>7x6 m</span>
      </div>
      <div className={styles.specItem}>
        <span className={styles.specIcon}>🔝</span>
        <span className={styles.specLabel}>Wysokość:</span>
        <span className={styles.specValue}>6 m</span>
      </div>
      <div className={styles.specItem}>
        <span className={styles.specIcon}>⤵</span>
        <span className={styles.specLabel}>Półka zjazdowa:</span>
        <span className={styles.specValue}>3.6 m</span>
      </div>
    </div>
    <p className={styles.description}>Duża zjeżdżalnia z torem przeszkód. Idealna propozycja dla starszych dzieci. Emocje gwarantowane!</p>
  </div>
</div>
<div className={styles.dmuchaniecContainer}>
  <img src="./dmuchaniec_krokodyl.jpg" alt="Duży dmuchaniec Krokodyl" className={styles.dmuchaniec} />
  <div className={styles.dmuchaniecText}>
    <h3>Krokodyl</h3>
    <div className={styles.dmuchaniecSpecs}>
      <div className={styles.specItem}>
        <span className={styles.specIcon}>📏</span>
        <span className={styles.specLabel}>Wymiary:</span>
        <span className={styles.specValue}>9x4.5 m</span>
      </div>
      <div className={styles.specItem}>
        <span className={styles.specIcon}>🔝</span>
        <span className={styles.specLabel}>Wysokość:</span>
        <span className={styles.specValue}>7 m</span>
      </div>
      <div className={styles.specItem}>
        <span className={styles.specIcon}>↘</span>
        <span className={styles.specLabel}>Półka zjazdowa:</span>
        <span className={styles.specValue}>3.6 m</span>
      </div>
    </div>
    <p className={styles.description}>Duża zjeżdżalnia w Amazońskim stylu. Klasyczna konstrukcja z dynamicznym zjazdem, który dostarczy dzieciom niezapomnianych wrażeń.</p>
  </div>
</div>
<div className={styles.dmuchaniecContainer}>
  <img src="./dmuchaniec_dzungla.jpg" alt="Średni dmuchaniec Dżungla" className={styles.dmuchaniec} />
  <div className={styles.dmuchaniecText}>
    <h3>Dżungla</h3>
    <div className={styles.dmuchaniecSpecs}>
      <div className={styles.specItem}>
        <span className={styles.specIcon}>📏</span>
        <span className={styles.specLabel}>Wymiary:</span>
        <span className={styles.specValue}>7x3.5 m</span>
      </div>
      <div className={styles.specItem}>
        <span className={styles.specIcon}>🔝</span>
        <span className={styles.specLabel}>Wysokość:</span>
        <span className={styles.specValue}>6 m</span>
      </div>
      <div className={styles.specItem}>
        <span className={styles.specIcon}>↘</span>
        <span className={styles.specLabel}>Półka zjazdowa:</span>
        <span className={styles.specValue}>3.1 m</span>
      </div>
    </div>
    <p className={styles.description}>Kompaktowa zjeżdżalnia w tropikalnym stylu, idealna do mniejszych przestrzeni.</p>
  </div>
</div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Wakacyjna Przygoda &copy; 2025</p>
      </footer>
    </div>
  );
}
