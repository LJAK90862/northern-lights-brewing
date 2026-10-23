import { Trans } from '@lingui/react/macro'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo"><Trans>Northern Lights Brewing Co.</Trans></a>
        <ul className="nav-links">
          <li><a href="#story"><Trans>Our Story</Trans></a></li>
          <li><a href="#beers"><Trans>The Beers</Trans></a></li>
          <li><a href="#process"><Trans>How We Brew</Trans></a></li>
          <li><a href="#taproom"><Trans>Taproom</Trans></a></li>
          <li><a href="#contact" className="nav-cta"><Trans>Visit Us</Trans></a></li>
        </ul>
        <LanguageSwitcher />
      </nav>

      {/* HERO */}
      <header className="hero">
        <p className="hero-label"><Trans>Craft beer from the edge of the Arctic Circle</Trans></p>
        <h1><Trans>Beer that speaks every language.</Trans></h1>
        <p className="hero-sub"><Trans>Great beer doesn't need translation, but great stories do. We brew in a place where the northern lights dance across the sky and the water runs so pure it doesn't need filtering. From our tiny brewery above the 66th parallel, we send bottles to every corner of the world.</Trans></p>
        <div className="hero-buttons">
          <a href="#beers" className="btn-primary"><Trans>Explore our beers</Trans></a>
          <a href="#taproom" className="btn-outline"><Trans>Find the taproom</Trans></a>
        </div>
      </header>

      {/* STORY */}
      <section className="section" id="story">
        <p className="section-label"><Trans>Our Story</Trans></p>
        <h2><Trans>Going global, staying local.</Trans></h2>
        <div className="grid-two">
          <div className="card">
            <h3><Trans>Where it started</Trans></h3>
            <p><Trans>Three friends who met at a fishing village in northern Norway. One brewed beer in her garage. One ran a boat. One couldn't stop talking about how the whole world should taste this. That last one was probably right.</Trans></p>
          </div>
          <div className="card">
            <h3><Trans>Where it's going</Trans></h3>
            <p><Trans>What began as a local obsession is now reaching bars and bottle shops across borders and time zones. We didn't plan to go international. The beer just started showing up in places we'd never been. Turns out good things don't need a passport, just a bottle cap.</Trans></p>
          </div>
        </div>
      </section>

      {/* BEERS */}
      <section className="section section-light" id="beers">
        <p className="section-label"><Trans>The Beers</Trans></p>
        <h2><Trans>Every bottle tells a story in any language.</Trans></h2>
        <div className="grid-three">
          <div className="beer-card">
            <div className="beer-emoji">🌲</div>
            <h3><Trans>Arctic Pine IPA</Trans></h3>
            <p className="beer-abv"><Trans>7.2% ABV</Trans></p>
            <p><Trans>Tastes like walking through a pine forest after rain. We forage the tips ourselves in late spring when the new growth is still bright green. Bitter enough to wake you up, smooth enough to keep you drinking.</Trans></p>
          </div>
          <div className="beer-card">
            <div className="beer-emoji">🌊</div>
            <h3><Trans>Midnight Sun Lager</Trans></h3>
            <p className="beer-abv"><Trans>4.8% ABV</Trans></p>
            <p><Trans>Brewed during the three months when the sun never sets. Crisp, clean, and cold enough to cut through a summer night that never gets dark. The locals call it "the one that crosses every border without stopping."</Trans></p>
          </div>
          <div className="beer-card">
            <div className="beer-emoji">🔥</div>
            <h3><Trans>Birchwood Stout</Trans></h3>
            <p className="beer-abv"><Trans>6.5% ABV</Trans></p>
            <p><Trans>Heated with birchwood from the forest behind the brewery. The smoke adds a whisper of flavour you won't find anywhere else. So dark you can't see through it. We ship this one everywhere and the label is in six languages because people kept asking.</Trans></p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <p className="section-label"><Trans>How We Brew</Trans></p>
        <h2><Trans>Old methods, new reach.</Trans></h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3><Trans>Source locally</Trans></h3>
            <p><Trans>Every ingredient comes from within 200 kilometres of the brewery. Our barley grows in fields that see midnight sun. Our water filters through volcanic rock for a thousand years before it reaches us.</Trans></p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3><Trans>Brew small</Trans></h3>
            <p><Trans>500 litres at a time. Every batch is numbered and dated. When it's gone, it's gone. We'd rather make something perfect than something scalable. The world is big enough to appreciate small things.</Trans></p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3><Trans>Ship everywhere</Trans></h3>
            <p><Trans>From a village of 400 people to bottle shops in 12 countries. The beer doesn't change when it crosses a border. The labels do. We translate everything because someone on the other side deserves to know what they're drinking.</Trans></p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-light" id="values">
        <p className="section-label"><Trans>What We Believe</Trans></p>
        <h2><Trans>Borders are for maps, not for beer.</Trans></h2>
        <div className="grid-two">
          <div className="card">
            <h3><Trans>Zero waste, full flavour</Trans></h3>
            <p><Trans>Our spent grain feeds the cattle next door. Our wastewater irrigates the barley fields. The bottles come back, get washed, and go out again. Nothing leaves the loop. Sustainability isn't a marketing word here. It's just Tuesday.</Trans></p>
          </div>
          <div className="card">
            <h3><Trans>Speak every language</Trans></h3>
            <p><Trans>Our labels are printed in Norwegian, English, German, Japanese, Spanish and French. Not because we had to. Because someone in Osaka wrote us a letter saying they couldn't read the back of the bottle, and that felt wrong. Now every word on every bottle is in every language we ship to.</Trans></p>
          </div>
          <div className="card">
            <h3><Trans>Small team, big world</Trans></h3>
            <p><Trans>Seven people run this entire brewery. We don't have a marketing department. We have a brewer who writes the copy, a designer who draws the labels, and five people who do everything else. Going international didn't require more people. It required better systems.</Trans></p>
          </div>
          <div className="card">
            <h3><Trans>Fire brewed, ice cold</Trans></h3>
            <p><Trans>We heat our kettles with birchwood. We cool our tanks with Arctic air. Old methods produce things that new methods can't replicate. The world has enough industrial lager. It doesn't need another one from us.</Trans></p>
          </div>
        </div>
      </section>

      {/* TAPROOM */}
      <section className="section" id="taproom">
        <p className="section-label"><Trans>The Taproom</Trans></p>
        <h2><Trans>Come find us. Bring your own glass.</Trans></h2>
        <div className="taproom-content">
          <p><Trans>We're open Thursday to Sunday, tucked into the side of a hill above the fjord. There's no sign on the road because everyone around here already knows where we are. If you're visiting from somewhere else, follow the smell.</Trans></p>
          <p><Trans>The taproom seats 30 people. We don't take reservations. The menu changes every week because we brew what we feel like brewing. Bring cash or card, we don't mind. Bring your own glass and we'll knock a krone off your first pour.</Trans></p>
          <p><Trans>People come from all over. Last month we had visitors from Tokyo, Buenos Aires, and a town in Latvia we'd never heard of. They all said the same thing: this is worth the trip. We think so too, but we're biased.</Trans></p>
          <div className="taproom-details">
            <div>
              <h3><Trans>Hours</Trans></h3>
              <p><Trans>Thursday — Sunday<br/>14:00 — 22:00</Trans></p>
            </div>
            <div>
              <h3><Trans>Location</Trans></h3>
              <p><Trans>Somewhere above the 66th parallel<br/>Follow the fjord, turn at the red barn</Trans></p>
            </div>
            <div>
              <h3><Trans>Contact</Trans></h3>
              <p><Trans>hello@northernlightsbrewing.no<br/>Or just show up. We're always here.</Trans></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <h2><Trans>Life's too short to drink beer you can't read about.</Trans></h2>
        <p><Trans>Whether you're in Oslo, Osaka, or that town in Latvia, we want you to know exactly what's in your glass. Every ingredient, every story, every word. In your language.</Trans></p>
        <a href="#contact" className="btn-primary"><Trans>Get in touch</Trans></a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <p className="footer-logo"><Trans>Northern Lights Brewing Co.</Trans></p>
            <p className="footer-tagline"><Trans>Craft beer from the edge of the Arctic Circle. Brewed locally. Enjoyed globally. Translated for everyone.</Trans></p>
          </div>
          <div className="footer-links">
            <div>
              <h4><Trans>Brewery</Trans></h4>
              <ul>
                <li><a href="#story"><Trans>Our Story</Trans></a></li>
                <li><a href="#beers"><Trans>The Beers</Trans></a></li>
                <li><a href="#process"><Trans>How We Brew</Trans></a></li>
                <li><a href="#taproom"><Trans>Taproom</Trans></a></li>
              </ul>
            </div>
            <div>
              <h4><Trans>Info</Trans></h4>
              <ul>
                <li><a href="#"><Trans>Shipping</Trans></a></li>
                <li><a href="#"><Trans>Stockists</Trans></a></li>
                <li><a href="#"><Trans>Press</Trans></a></li>
                <li><a href="#"><Trans>Careers</Trans></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p><Trans>&copy; 2026 Northern Lights Brewing Co. All rights reserved. Brewed above the 66th parallel.</Trans></p>
        </div>
      </footer>
    </div>
  )
}

export default App
