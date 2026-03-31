const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <span className="badge">Virtual trading only</span>
        <h1>Trade IPL Player Shares Like a Real Exchange</h1>
        <p>
          IPL Trader is a simulated limit-order market where prices are discovered from bids and asks, not fixed odds.
          Start with Rs 10,00,000 virtual balance and build your fantasy portfolio.
        </p>
        <div className="ctaRow">
          <a href={`${appUrl}/register`} className="btn btnPrimary">Start Free Simulation</a>
          <a href={`${appUrl}/market`} className="btn btnGhost">View Live Market</a>
        </div>
      </section>

      <h2 className="sectionTitle">Why it feels real</h2>
      <section className="grid">
        <article className="card">
          <h3>Order Book Matching</h3>
          <p>Place limit buys and sells and get executed based on market depth and matching rules.</p>
        </article>
        <article className="card">
          <h3>Live Sentiment Events</h3>
          <p>Match-driven events nudge player sentiment and create short-term opportunities.</p>
        </article>
        <article className="card">
          <h3>Portfolio Analytics</h3>
          <p>Track net worth, open orders, and leaderboard rank with real-time updates.</p>
        </article>
      </section>

      <h2 className="sectionTitle">How it works</h2>
      <section className="grid">
        <article className="card">
          <h3>1. Create Account</h3>
          <p>Instant signup gives you virtual cash to start trading immediately.</p>
        </article>
        <article className="card">
          <h3>2. Place Orders</h3>
          <p>Buy or sell player shares at your chosen price and quantity.</p>
        </article>
        <article className="card">
          <h3>3. Manage Risk</h3>
          <p>Use portfolio and market views to rebalance as matches unfold.</p>
        </article>
      </section>

      <div className="disclaimer">
        IPL Trader is a skill and learning simulation. No real money, no cash-out, no gambling services.
      </div>

      <section className="ctaRow" style={{ marginBottom: 10 }}>
        <a href={`${appUrl}/register`} className="btn btnPrimary">Create Your Portfolio</a>
        <a href={`${appUrl}/login`} className="btn btnGhost">Sign In</a>
      </section>

      <footer>
        <span>IPL Trader</span>
        <span>Built for educational virtual trading</span>
      </footer>
    </main>
  );
}
