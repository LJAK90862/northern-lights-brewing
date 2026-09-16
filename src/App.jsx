import './App.css'

function App() {
  return (
    <div className="app">
      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">Northern Lights Brewing Co.</a>
        <ul className="nav-links">
          <li><a href="#story">Our Story</a></li>
          <li><a href="#beers">The Beers</a></li>
          <li><a href="#process">How We Brew</a></li>
          <li><a href="#taproom">Taproom</a></li>
          <li><a href="#contact" className="nav-cta">Visit Us</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero">
        <p className="hero-label">Craft beer from the edge of the Arctic Circle</p>
        <h1>Beer that speaks every language.</h1>
        <p className="hero-sub">Great beer doesn't need translation, but great stories do. We brew in a place where the northern lights dance across the sky and the water runs so pure it doesn't need filtering. From our tiny brewery above the 66th parallel, we send bottles to every corner of the world.</p>
        <div className="hero-buttons">
          <a href="#beers" className="btn-primary">Explore our beers</a>
          <a href="#taproom" className="btn-outline">Find the taproom</a>
        </div>
      </header>

      {/* STORY */}
      <section className="section" id="story">
        <p className="section-label">Our Story</p>
        <h2>Going global, staying local.</h2>
        <div className="grid-two">
          <div className="card">
            <h3>Where it started</h3>
            <p>Three friends who met at a fishing village in northern Norway. One brewed beer in her garage. One ran a boat. One couldn't stop talking about how the whole world should taste this. That last one was probably right.</p>
          </div>
          <div className="card">
            <h3>Where it's going</h3>
            <p>What began as a local obsession is now reaching bars and bottle shops across borders and time zones. We didn't plan to go international. The beer just started showing up in places we'd never been. Turns out good things don't need a passport, just a bottle cap.</p>
          </div>
        </div>
      </section>

      {/* BEERS */}
      <section className="section section-light" id="beers">
        <p className="section-label">The Beers</p>
        <h2>Every bottle tells a story in any language.</h2>
        <div className="grid-three">
          <div className="beer-card">
            <div className="beer-emoji">🌲</div>
            <h3>Arctic Pine IPA</h3>
            <p className="beer-abv">7.2% ABV</p>
            <p>Tastes like walking through a pine forest after rain. We forage the tips ourselves in late spring when the new growth is still bright green. Bitter enough to wake you up, smooth enough to keep you drinking.</p>
          </div>
          <div className="beer-card">
            <div className="beer-emoji">🌊</div>
            <h3>Midnight Sun Lager</h3>
            <p className="beer-abv">4.8% ABV</p>
            <p>Brewed during the three months when the sun never sets. Crisp, clean, and cold enough to cut through a summer night that never gets dark. The locals call it "the one that crosses every border without stopping."</p>
          </div>
          <div className="beer-card">
            <div className="beer-emoji">🔥</div>
            <h3>Birchwood Stout</h3>
            <p className="beer-abv">6.5% ABV</p>
            <p>Heated with birchwood from the forest behind the brewery. The smoke adds a whisper of flavour you won't find anywhere else. So dark you can't see through it. We ship this one everywhere and the label is in six languages because people kept asking.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <p className="section-label">How We Brew</p>
        <h2>Old methods, new reach.</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Source locally</h3>
            <p>Every ingredient comes from within 200 kilometres of the brewery. Our barley grows in fields that see midnight sun. Our water filters through volcanic rock for a thousand years before it reaches us.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Brew small</h3>
            <p>500 litres at a time. Every batch is numbered and dated. When it's gone, it's gone. We'd rather make something perfect than something scalable. The world is big enough to appreciate small things.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Ship everywhere</h3>
            <p>From a village of 400 people to bottle shops in 12 countries. The beer doesn't change when it crosses a border. The labels do. We translate everything because someone on the other side deserves to know what they're drinking.</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-light" id="values">
        <p className="section-label">What We Believe</p>
        <h2>Borders are for maps, not for beer.</h2>
        <div className="grid-two">
          <div className="card">
            <h3>Zero waste, full flavour</h3>
            <p>Our spent grain feeds the cattle next door. Our wastewater irrigates the barley fields. The bottles come back, get washed, and go out again. Nothing leaves the loop. Sustainability isn't a marketing word here. It's just Tuesday.</p>
          </div>
          <div className="card">
            <h3>Speak every language</h3>
            <p>Our labels are printed in Norwegian, English, German, Japanese, Spanish and French. Not because we had to. Because someone in Osaka wrote us a letter saying they couldn't read the back of the bottle, and that felt wrong. Now every word on every bottle is in every language we ship to.</p>
          </div>
          <div className="card">
            <h3>Small team, big world</h3>
            <p>Seven people run this entire brewery. We don't have a marketing department. We have a brewer who writes the copy, a designer who draws the labels, and five people who do everything else. Going international didn't require more people. It required better systems.</p>
          </div>
          <div className="card">
            <h3>Fire brewed, ice cold</h3>
            <p>We heat our kettles with birchwood. We cool our tanks with Arctic air. Old methods produce things that new methods can't replicate. The world has enough industrial lager. It doesn't need another one from us.</p>
          </div>
        </div>
      </section>

      {/* TAPROOM */}
      <section className="section" id="taproom">
        <p className="section-label">The Taproom</p>
        <h2>Come find us. Bring your own glass.</h2>
        <div className="taproom-content">
          <p>We're open Thursday to Sunday, tucked into the side of a hill above the fjord. There's no sign on the road because everyone around here already knows where we are. If you're visiting from somewhere else, follow the smell.</p>
          <p>The taproom seats 30 people. We don't take reservations. The menu changes every week because we brew what we feel like brewing. Bring cash or card, we don't mind. Bring your own glass and we'll knock a krone off your first pour.</p>
          <p>People come from all over. Last month we had visitors from Tokyo, Buenos Aires, and a town in Latvia we'd never heard of. They all said the same thing: this is worth the trip. We think so too, but we're biased.</p>
          <div className="taproom-details">
            <div>
              <h3>Hours</h3>
              <p>Thursday — Sunday<br/>14:00 — 22:00</p>
            </div>
            <div>
              <h3>Location</h3>
              <p>Somewhere above the 66th parallel<br/>Follow the fjord, turn at the red barn</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>hello@northernlightsbrewing.no<br/>Or just show up. We're always here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <h2>Life's too short to drink beer you can't read about.</h2>
        <p>Whether you're in Oslo, Osaka, or that town in Latvia, we want you to know exactly what's in your glass. Every ingredient, every story, every word. In your language.</p>
        <a href="#contact" className="btn-primary">Get in touch</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <p className="footer-logo">Northern Lights Brewing Co.</p>
            <p className="footer-tagline">Craft beer from the edge of the Arctic Circle. Brewed locally. Enjoyed globally. Translated for everyone.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Brewery</h4>
              <ul>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#beers">The Beers</a></li>
                <li><a href="#process">How We Brew</a></li>
                <li><a href="#taproom">Taproom</a></li>
              </ul>
            </div>
            <div>
              <h4>Info</h4>
              <ul>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Stockists</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Northern Lights Brewing Co. All rights reserved. Brewed above the 66th parallel.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
