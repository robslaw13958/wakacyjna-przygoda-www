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
          <li><a href="#footer" className={activeSection === 'footer' ? styles.active : ''}>Kontakt</a></li>
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
            <p>Szukasz sprawdzonej firmy, która zajmuje się wynajmem dmuchańców i namiotów w Kielcach i okolicach? Wakacyjna Przygoda to kompleksowa obsługa imprez plenerowych – od małych rodzinnych urodzin po duże eventy firmowe i festyny gminne. <br/>Oferujemy nowoczesne dmuchańce dla dzieci, namioty eventowe, akcesoria i pełną obsługę na miejscu. <br/>Obsługujemy całe woj. świętokrzyskie – Kielce, Chęciny, Morawicę, Masłów, Zagnańsk, Daleszyce i okolice.</p>
          <p>📅 Zapraszamy do rezerwacji na 2025 rok</p>
          <p>📌 Wolne terminy na maj i czerwiec</p>
        </section>

        {/* SEKCJA 2 - NAMIOTY */}
        <section className={styles.section} id="namioty">
          <h2 className={styles.header}>Namioty cateringowe</h2>
          <p>Wynajmujemy namioty cateringowe dla 20 do 200 osoób.<br />Wszystkie namioty są nowe, wykonane z materiałów najwyższej jakości, odporne na deszcz i wiatr.</p>
          <p>Nasze namioty imprezowe na wynajem to idealne rozwiązanie na każdą okazję – wesele, komunię, imprezę firmową, a nawet spontaniczny grill. Namioty dostępne są w różnych rozmiarach i konfiguracjach – z bokami lub bez, z podłogą, oświetleniem girlandowym i innymi dodatkami. Wynajem namiotu w Kielcach jeszcze nigdy nie był tak prosty – przyjeżdżamy, montujemy i odbieramy wszystko sami. Ty tylko korzystasz z imprezy.</p>
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
          <p>Dmuchańce to hit każdej imprezy dla dzieci. Nasze konstrukcje są nowe, kolorowe i bezpieczne – idealne na festyny, pikniki rodzinne, urodziny i komunie. W ofercie m.in. Dmuchaniec Labirynt, Krokodyl i Dżungla. Wszystko przywozimy, rozkładamy i odbieramy po zakończeniu zabawy. Wynajem dmuchańca w Kielcach i okolicznych miejscowościach to nasza specjalność.</p>
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
          <div className={styles.dmuchaniecContainer}>
            <img src="./dmuchaniec_junglePark.jpg" alt="Duży dmuchaniec Dżungla" className={styles.dmuchaniec} />
            <div className={styles.dmuchaniecText}>
              <h3>Jungle Park</h3>
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
              <p className={styles.description}>OPIS</p>
            </div>
          </div>
          <div className={styles.dmuchaniecContainer}>
            <img src="./dmuchaniec_lego.jpg" alt="Mały dmuchaniec Lego" className={styles.dmuchaniec} />
            <div className={styles.dmuchaniecText}>
              <h3>Lego</h3>
              <div className={styles.dmuchaniecSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>📏</span>
                  <span className={styles.specLabel}>Wymiary:</span>
                  <span className={styles.specValue}>5x5 m</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>🔝</span>
                  <span className={styles.specLabel}>Wysokość:</span>
                  <span className={styles.specValue}>4 m</span>
                </div>
              </div>
              <p className={styles.description}>Mała zjeżdżalnia z motywem klocków z miejscem do skakania.</p>
            </div>
          </div>
          <div className={styles.dmuchaniecContainer}>
            <img src="./dmuchaniec_lego_duzy.jpg" alt="Duży dmuchaniec Lego" className={styles.dmuchaniec} />
            <div className={styles.dmuchaniecText}>
              <h3>Duże Lego</h3>
              <div className={styles.dmuchaniecSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>📏</span>
                  <span className={styles.specLabel}>Wymiary:</span>
                  <span className={styles.specValue}>7x6 m</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>🔝</span>
                  <span className={styles.specLabel}>Wysokość:</span>
                  <span className={styles.specValue}>5 m</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>↘</span>
                  <span className={styles.specLabel}>Półka zjazdowa:</span>
                  <span className={styles.specValue}>3.1 m</span>
                </div>
              </div>
              <p className={styles.description}>Duża zjeżdżalnia w klockowym stylu z miejscem do skakania oraz z przeszkodami.</p>
            </div>
          </div>
          <div className={styles.dmuchaniecContainer}>
            <img src="./dmuchaniec_minionki.jpg" alt="Dmuchaniec z Minionkami" className={styles.dmuchaniec} />
            <div className={styles.dmuchaniecText}>
              <h3>Minionki</h3>
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
              <p className={styles.description}>Zjeżdżalnia z Minionkami.</p>
            </div>
          </div>
          <div className={styles.dmuchaniecContainer}>
            <img src="./dmuchaniec_zoo.jpg" alt="Dmuchaniec Zoo" className={styles.dmuchaniec} />
            <div className={styles.dmuchaniecText}>
              <h3>Zoo</h3>
              <div className={styles.dmuchaniecSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>📏</span>
                  <span className={styles.specLabel}>Wymiary:</span>
                  <span className={styles.specValue}>8.5x4.5 m</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>🔝</span>
                  <span className={styles.specLabel}>Wysokość:</span>
                  <span className={styles.specValue}>6.5 m</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>↘</span>
                  <span className={styles.specLabel}>Półka zjazdowa:</span>
                  <span className={styles.specValue}>3.6 m</span>
                </div>
              </div>
              <p className={styles.description}>Zjeżdżalnia z motywem Zoo.</p>
            </div>
          </div>
          <div className={styles.dmuchaniecContainer}>
            <img src="./skakaniec_zoo.jpg" alt="Duży skakaniec Zoo" className={styles.dmuchaniec} />
            <div className={styles.dmuchaniecText}>
              <h3>Dżungla</h3>
              <div className={styles.dmuchaniecSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>📏</span>
                  <span className={styles.specLabel}>Wymiary:</span>
                  <span className={styles.specValue}>6x6 m</span>
                </div>
              </div>
              <p className={styles.description}>Dmuchaniec do skakania z przeszkodami w motywie Zoo. Idealna propozycja jako drugi dmuchaniec dla mniejszych dzieci na imprezy prywatne.</p>
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
      <footer className={styles.footer} id="footer">
        <p>Wakacyjna Przygoda to lokalna firma z pasją do dobrej zabawy. Nasz sprzęt jest nowy (roczniki 2024/2025), obsługa szybka i punktualna, a ceny uczciwe. Zadowolenie klienta to dla nas priorytet – dlatego zawsze oferujemy montaż w cenie, elastyczne terminy, a także pomoc przy organizacji.

<br/>👉 Planujesz imprezę? Potrzebny Ci dmuchaniec w Kielcach albo namiot imprezowy w świętokrzyskim? Skontaktuj się z nami – pomożemy Ci zorganizować niezapomniane wydarzenie!</p>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <p>Telefon: <a href="tel:+48788547012">788 547 012</a></p>
            <p>E-Mail: <a href="mailto:wakacyjnaprzygoda22@gmail.com">wakacyjnaprzygoda22@gmail.com</a></p>
          </div>
          <div className={styles.footerContent}>
            <p>Facebook: <a href="https://www.facebook.com/profile.php?id=100083137700568" target="_blank" rel="noopener">Wakacyjna Przygoda</a></p>
            
          </div>
        </div>
        <p>📍 Kielce, woj. Świętokrzyskie</p>
        <p>Wakacyjna Przygoda &copy; 2025</p>
      </footer>
    </div>
  );
}
