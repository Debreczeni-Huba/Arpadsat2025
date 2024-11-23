'use client';

import Image from 'next/image';
import Link from 'next/link';
import './styles.css';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"

export default function HomePage() {
  return (
    <>
      <Script src="/script.js" strategy="afterInteractive" />
      <Script 
        type="module" 
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" 
        strategy="afterInteractive" 
      />
      <Script 
        noModule 
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" 
        strategy="afterInteractive" 
      />
      <html lang="hu">
        <head>
          <title>ÁrpádSat</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=0.8" />
          <link rel="shortcut icon" type="image/x-icon" href="/Cansat_key_visual_pillars.ico" />
        </head>
        <body>
        <Analytics />
          <div className="background">
            <header className="header">
              <Image src="logo.jpg" className='logo' alt='logo'/>
              <nav className="navigation">
                <Link href="/index.html" className="navigation2 navelem2"><ion-icon name="home"></ion-icon>Home</Link>
                <Link href="/about.html" className="navigation2 navelem2"><ion-icon name="card"></ion-icon>Rólunk</Link>
                <Link href="/docs.html" className="navigation2 navelem2"><ion-icon name="list"></ion-icon>Dokumentációink</Link>
                <Link href="/second.html" className="navigation2 navelem2"><ion-icon name="barbell"></ion-icon>Másodlagos küldetésünk</Link>
                <Link href="/news.html" className="navigation2 navelem2"><ion-icon name="checkmark-done"></ion-icon>Blog</Link>
                <Link href="/calendar.html" className="navigation2 navelem2"><ion-icon name="calendar-number"></ion-icon>Ütemtervünk</Link>
              </nav>
              <button className="checkresp restat" onClick={() => console.log('Responsive Menu Opened')}><ion-icon name="menu"></ion-icon></button>
              <button className="checkresp restat2" onClick={() => console.log('Responsive Menu Closed')}><ion-icon name="close"></ion-icon></button>
            </header>

            <h2 className="title">Főoldal</h2>
            <section className="about">
              <div className="about-intro about-content">
                <h2>Üdvözöljük a CanSat versenyre nevezett ÁrpádSat csapat honlapján!</h2>
                <h3>Az ÁrpádSat csapat a CanSat versenyen vesz részt, mely egy a középiskolások számára tervezett, az űripart bemutató és népszerűsítő verseny. Az Európai Űrügynökség (ESA) azzal a céllal hirdeti meg minden évben, hogy a diákok megtapasztalhassák, hogy milyen részt venni egy valódi űr-projektben. A jelentkezők rengeteg tapasztalattal gazdagodnak, pl. rádiótechnikában, áramkörök tervezésében, emellett elsajátíthatják az űripar által elvárt precizitást. A versenyzők rengeteg hasonló érdeklődésű diákkal találkozhatnak, a döntő nyertesei nemzetközi kapcsolaikat gyarapíthatják a verseny folyamán. <br />
                    A versenyen 3-6 fős középiskolás csapatok vesznek részt. <br />
                    Mi maga a CanSat? <br />
                    A CanSat egy valós műhold szimulációja, amely minden olyan rendszerrel rendelkezik, amivel egy műholdnak rendelkeznie kell. Térfogata megegyezik egy dobozos üdítőével (innen ered a neve). A kihívás a diákok számára az, hogy ebbe a kis térbe bele tudják tervezni az összes alrendszert, ami megtalálható egy műholdon:
                    Tápegység, szenzorok, kommunikációs rendszer.
                    A versenyen a CanSat műholdakat rakétával nagyjából 1km-es magasságba juttatják. Itt a hordozó eszközről leválva megkezdik a küldetésüket, ami lehet egy tudományos kísérlet vagy egy technológiai demonstráció. <br />
                    A biztonságos landolást követően a csapatok elemzik és bemutatják a gyűjtött adatokat. <br /> Bővebben a <a href="https://www.cansatverseny.hu/mi-a-cansat">CanSat honlapján</a> tájékozódhatnak a versenyről.
                </h3>
              </div>
              <div className="about-intro about-content">
                <h2>És akkor mit csinál a mi csapatunk?</h2>
                <h3>Az ÁrpádSat csapat CanSat műholdja az elsődleges küldetés keretein belül mért hőmérséklet és légnyomás adatokon kívül meghatározza a helyzetét, repülés közbeni felvételeket készít, valamint méri több légszennyező anyag koncentrációját is. A küldetésünkről bővebben a <Link href="docs.html">PDR dokumentumunkból</Link> és a <Link href="second.html">Másodlagos küldetés oldalon</Link> tájékozódhat.</h3>
              </div>
            </section>
          </div>
        </body>
      </html>
    </>
  );
}