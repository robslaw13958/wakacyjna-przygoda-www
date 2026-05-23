'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Carousel from "./carousel.js";
import { useActiveSection } from "../hooks/useActiveSection";

const tentSlides = [
  {
    img: "./namiot2.jpg",
    alt: "Namiot weselny",
    desc: "Elegancki namiot z szarym wykończeniem — idealny na wesela i imprezy firmowe.",
  },
  {
    img: "./namiot3.jpg",
    alt: "Namiot biały",
    desc: "Biały namiot cateringowy — łatwy montaż w dowolnej lokalizacji.",
  },
  {
    img: "./namiot4.jpg",
    alt: "Namiot biały",
    desc: "Biały namiot cateringowy — łatwy montaż w dowolnej lokalizacji.",
  },
];

const interiorSlides = [
  {
    img: "./wnetrze1.jpg",
    alt: "Stolik kawowy",
    desc: "Stolik kawowy",
  },
  {
    img: "./wnetrze2.jpg",
    alt: "Zastawa stołowa",
    desc: "Wnętrze namiotu - stoły z zastawą",
  },
  {
    img: "./wnetrze3.jpg",
    alt: "Stoły bez zastawy",
    desc: "Wersja bez zastawy",
  },
];

const inflatables = [
  {
    id: "labirynt",
    name: "Labirynt 3w1",
    imgs: ["./dmuchaniec_labirynt.jpeg", "./dmuchaniec_labirynt2.jpeg", "./dmuchaniec_labirynt3.jpg"],
    alt: "Dmuchaniec Labirynt",
    wymiary: "7 × 6 m",
    wysokosc: "6 m (zjazd 3,1 m)",
    desc: "Najciekawszy dmuchaniec w ofercie. 3w1 - Zjeżdżalnia, skakaniec, tor przeszkód",
  },
  {
    id: "torPrzeszkod",
    name: "Tor Przeszkód",
    imgs: ["./dmuchaniec_torprzeszkod.jpeg", "./dmuchaniec_torprzeszkod2.jpeg", "./dmuchaniec_torprzeszkod3.jpeg", "./dmuchaniec_torprzeszkod4.jpeg"],
    alt: "Dmuchaniec Tor przeszkód",
    wymiary: "12 × 3 m",
    wysokosc: null,
    desc: "Tor przeszkód idealny na festyn.",
  },
  {
    id: "amazonka",
    name: "Amazonka",
    imgs: ["./dmuchaniec_amazonka.jpg"],
    alt: "Dmuchaniec Amazonka",
    wymiary: "8 × 4,5 m",
    wysokosc: "6 m (zjazd 3,1 m)",
    desc: "Kolorowa dżungla z drzewami i zwierzakami — idealna zjeżdżalnia dla młodszych i starszych dzieci.",
  },
  {
    id: "jungle",
    name: "Jungle",
    imgs: ["./dmuchaniec_jungle.jpeg"],
    alt: "Dmuchaniec Jungle",
    wymiary: "9 × 4,5 m",
    wysokosc: "6 m (zjazd 3,1 m)",
    desc: "Tropikalna przygoda w sercu dżungli — zjeżdżalnia z papugami i dzikimi zwierzętami.",
  },
  {
    id: "krokodyl",
    name: "Krokodyl",
    imgs: ["./dmuchaniec_krokodyl.jpg"],
    alt: "Dmuchaniec Krokodyl",
    wymiary: "9 × 4,5 m",
    wysokosc: "7 m (zjazd 3,6 m)",
    desc: "Ogromny krokodyl ze stromym ślizgiem — przyciąga wzrok i daje mnóstwo frajdy!",
  },
  {
    id: "minecraft",
    name: "Minecraft",
    imgs: ["./dmuchaniec_minecraft.jpg"],
    alt: "Dmuchaniec Minecraft",
    wymiary: "9 × 4,5 m",
    wysokosc: "7 m (zjazd 3,6 m)",
    desc: "Duży dmuchaniec idealny dla fanów popularnej gry z blokami.",
  },
  {
    id: "zoo",
    name: "Zoo",
    imgs: ["./dmuchaniec_zoo.jpg"],
    alt: "Dmuchaniec Zoo",
    wymiary: "9 × 4,5 m",
    wysokosc: "7 m (zjazd 3,6 m)",
    desc: "Zjeżdżalnia z całym wesołym zoo — lew, zebra i słoń czekają na zabawę!",
  },
  {
    id: "lego",
    name: "Lego",
    imgs: ["./dmuchaniec_lego.jpg"],
    alt: "Dmuchaniec Lego",
    wymiary: "5 × 5 m",
    wysokosc: "4 m",
    desc: "Mała zjeżdżalnia z motywem klocków i miejscem do skakania. Kolorowy klasyk!",
  },
  {
    id: "zoo_skok",
    name: "Zoo do skakania",
    imgs: ["./dmuchaniec_zoo_skok.jpg"],
    alt: "Dmuchaniec Zoo do skakania",
    wymiary: "6 × 6 m",
    wysokosc: null,
    desc: "Kolorowa arena z figurkami zwierząt — świetna zabawa dla maluchów bez zjeżdżalni.",
  },
  {
    id: "boisko",
    name: "Boisko",
    imgs: ["./dmuchaniec_boisko.jpg"],
    alt: "Dmuchane boisko do piłki nożnej",
    wymiary: "6 × 11 m",
    wysokosc: null,
    desc: "Dmuchane boisko do piłki nożnej — idealne jako dodatek do zjeżdżalni. Bezpieczna rywalizacja i dużo śmiechu!",
  },
];

export default function Home() {
  const activeSection = useActiveSection();

  const allItems = [...inflatables];

  const [activeImgs, setActiveImgs] = useState(
    () => Object.fromEntries(allItems.map(item => [item.id, 0]))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImgs(prev => {
        const next = { ...prev };
        allItems.forEach(item => {
          if (item.imgs.length > 1) {
            next[item.id] = (prev[item.id] + 1) % item.imgs.length;
          }
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
          <h1>
            <span>Kielce i okolice</span>
            Wakacyjna Przygoda<br />Kompleksowa obsługa<br />uroczystości plenerowych
          </h1>
        </div>
      </div>

      <main className={styles.main}>

        {/* SEKCJA 1 — O NAS */}
        <section className={styles.section} id="planujesz_impreze">
          <h2 className={styles.headerDark}>Planujesz imprezę?</h2>
          <p>Zapewniamy wynajem namiotów cateringowych wraz z pełnym wyposażeniem dla 20 do 200 osób. Oferujemy profesjonalną obsługę, nowoczesny sprzęt z 2025 i 2026 roku oraz niezapomniane atrakcje na każdą okazję.</p>
          <p>Obsługujemy całe woj. świętokrzyskie — Kielce, Chęciny, Morawicę, Masłów, Zagnańsk, Daleszyce i okolice. Nasz sprzęt przywozimy, montujemy i odbieramy sami.</p>
          <p>📅 Zapraszamy do rezerwacji na 2026 rok &nbsp;·&nbsp; 📌 Wolne terminy na wakacje!</p>
        </section>

        {/* SEKCJA 2 — NAMIOTY */}
        <section className={styles.section} id="namioty">
          <h2 className={styles.header}>Namioty cateringowe</h2>
          <p>Wynajmujemy namioty cateringowe dla 20 do 200 osób. Wszystkie namioty są nowe, wykonane z materiałów najwyższej jakości, odporne na deszcz i wiatr.</p>
          <p>Dostępne w różnych rozmiarach i konfiguracjach — z bokami lub bez, z podłogą, oświetleniem girlandowym i innymi dodatkami. Przyjeżdżamy, montujemy i odbieramy wszystko sami.</p>
          <p className={styles.coloredText}>Montaż, demontaż oraz girlandowe oświetlenie — GRATIS</p>

          {/* KARUZELA NAMIOTÓW */}
          <Carousel items={tentSlides} interval={4000} />
          <Carousel items={interiorSlides} interval={4000} />

          <p>Dostępne białe namioty z eleganckim szarym wykończeniem:</p>
          <ul>
            <li>5 × 6 m (30 m²) — do 35 osób siedzących</li>
            <li>5 × 8 m (40 m²) — do 45 osób siedzących</li>
            <li>5 × 10 m (50 m²) — do 55 osób siedzących</li>
            <li>5 × 12 m (60 m²) — do 70 osób siedzących</li>
            <li>8 × 12 m (96 m²) — do 110 osób siedzących</li>
          </ul>

          <h3 className={styles.header}>Wyposażenie i akcesoria</h3>
          <div className={styles.tentsListsContainer}>
            <ul className={styles.tentsList}>
              <li>Meble bankietowe</li>
              <li>Wygodne krzesła bankietowe</li>
              <li>Stoły prostokątne 180×90 cm, 140×80 cm</li>
              <li>Stoły okrągłe</li>
              <li>Eleganckie białe obrusy</li>
            </ul>
            <ul className={styles.tentsList}>
              <li>Zastawa stołowa</li>
              <li>Kompletna zastawa dla gości</li>
              <li>Warniki do wody</li>
              <li>Dzbanki, półmiski, wazy i akcesoria</li>
              <li>Podtalerze</li>
            </ul>
            <ul className={styles.tentsList}>
              <li>Dodatkowe opcje</li>
              <li>Podłoże ze sztucznej trawy</li>
              <li>Catering</li>
              <li>Profesjonalne nagłośnienie i oświetlenie</li>
              <li>Animacje</li>
            </ul>
          </div>
        </section>

        {/* SEKCJA 3 — DMUCHAŃCE */}
        <section className={styles.section} id="dmuchance">
          <h2 className={styles.headerDark}>Dmuchańce</h2>
          <p>Wynajmujemy dmuchańce na każdą okazję — zamki, zjeżdżalnie, tory przeszkód i wiele innych. Nowe, kolorowe, bezpieczne. Wszystko przywozimy, rozkładamy i odbieramy po zakończeniu zabawy.</p>

          <div className={styles.dmuchaniecGrid}>
            {inflatables.map((item) => (
              <div key={item.id} className={styles.dmuchaniecCard}>
                <div className={styles.dmuchaniecImgWrap}>
                  {item.imgs.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={item.alt}
                      className={styles.dmuchaniecImage}
                      style={{
                        opacity: i === activeImgs[item.id] ? 1 : 0,
                        transition: "opacity 0.6s ease",
                      }}
                    />
                  ))}
                  {item.imgs.length > 1 && (
                    <div className={styles.dmuchaniecDots}>
                      {item.imgs.map((_, i) => (
                        <span
                          key={i}
                          className={`${styles.dmuchaniecDot} ${i === activeImgs[item.id] ? styles.dmuchaniecDotActive : ""}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles.dmuchaniecBody}>
                  <h3 className={styles.dmuchaniecName}>{item.name}</h3>
                  <div className={styles.dmuchaniecMeta}>
                    <span className={styles.dmuchaniecMetaItem}>
                      <strong>{item.wymiary}</strong>
                    </span>
                    {item.wysokosc && (
                      <span className={styles.dmuchaniecMetaItem}>
                        wys. <strong>{item.wysokosc}</strong>
                      </span>
                    )}
                  </div>
                  <p className={styles.dmuchaniecDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className={styles.footer} id="footer">
        <p>Wakacyjna Przygoda to lokalna firma z pasją do dobrej zabawy. Nasz sprzęt jest nowy (roczniki 2025/2026), obsługa szybka i punktualna, a ceny uczciwe. Zadowolenie klienta to dla nas priorytet — dlatego zawsze oferujemy montaż w cenie i elastyczne terminy.</p>
        <div className={styles.footerDivider} />
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <p className={styles.footerLabel}>Telefon</p>
            <a href="tel:+48788547012">788 547 012</a>
          </div>
          <div className={styles.footerContent}>
            <p className={styles.footerLabel}>E-mail</p>
            <a href="mailto:wakacyjnaprzygoda22@gmail.com">wakacyjnaprzygoda22@gmail.com</a>
          </div>
          <div className={styles.footerContent}>
            <p className={styles.footerLabel}>Social media</p>
            <div>
              <a style={{ marginRight: 16 }} href="https://www.facebook.com/profile.php?id=100083137700568" target="_blank" rel="noopener">Facebook</a>
              <a href="https://www.instagram.com/wakacyjna_przygoda.official" target="_blank" rel="noopener">Instagram</a>
            </div>


          </div>
        </div>
        <p className={styles.footerCopyright}>📍 Kielce, woj. Świętokrzyskie &nbsp;·&nbsp; Wakacyjna Przygoda © 2026</p>
      </footer>
    </div>
  );
}