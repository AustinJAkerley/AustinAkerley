import { useState } from "react";
import { statelessVault } from "../data/resume";
import { ArrowLeftIcon, ExternalLinkIcon } from "./Icons";

type EncryptResponse = {
  version: string;
  algorithm: string;
  salt: string;
  nonce: string;
  ciphertext: string;
  tag: string;
};

type DecryptResponse = {
  plaintext: string;
};

export default function StatelessVaultProject() {
  const sv = statelessVault;

  // --- Encrypt state ---
  const [plaintext, setPlaintext] = useState("");
  const [encryptSecret, setEncryptSecret] = useState("");
  const [encryptResult, setEncryptResult] = useState<EncryptResponse | null>(null);
  const [encryptRaw, setEncryptRaw] = useState<string | null>(null);
  const [encryptLoading, setEncryptLoading] = useState(false);
  const [encryptError, setEncryptError] = useState<string | null>(null);

  // --- Decrypt state ---
  const [tab, setTab] = useState<"encrypt" | "decrypt">("encrypt");
  const [decryptBundle, setDecryptBundle] = useState("");
  const [decryptSecret, setDecryptSecret] = useState("");
  const [decryptResult, setDecryptResult] = useState<DecryptResponse | null>(null);
  const [decryptRaw, setDecryptRaw] = useState<string | null>(null);
  const [decryptLoading, setDecryptLoading] = useState(false);
  const [decryptError, setDecryptError] = useState<string | null>(null);

  async function handleEncrypt() {
    setEncryptLoading(true);
    setEncryptError(null);
    setEncryptResult(null);
    setEncryptRaw(null);
    try {
      const res = await fetch(`${sv.apiBase}/api/encrypt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plaintext, secret: encryptSecret }),
      });
      const data: unknown = await res.json();
      setEncryptRaw(JSON.stringify(data, null, 2));
      if (!res.ok) {
        const err = data as { error?: string };
        throw new Error(err.error ?? `HTTP ${res.status}`);
      }
      setEncryptResult(data as EncryptResponse);
    } catch (e) {
      setEncryptError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setEncryptLoading(false);
    }
  }

  async function handleDecrypt() {
    setDecryptLoading(true);
    setDecryptError(null);
    setDecryptResult(null);
    setDecryptRaw(null);
    try {
      let bundle: Record<string, string>;
      try {
        bundle = JSON.parse(decryptBundle) as Record<string, string>;
      } catch {
        throw new Error("Invalid JSON. Paste the full response bundle from the Encrypt step.");
      }
      const res = await fetch(`${sv.apiBase}/api/decrypt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...bundle, secret: decryptSecret }),
      });
      const data: unknown = await res.json();
      setDecryptRaw(JSON.stringify(data, null, 2));
      if (!res.ok) {
        const err = data as { error?: string };
        throw new Error(err.error ?? `HTTP ${res.status}`);
      }
      setDecryptResult(data as DecryptResponse);
    } catch (e) {
      setDecryptError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setDecryptLoading(false);
    }
  }

  function loadFromEncrypt() {
    if (encryptResult) {
      setDecryptBundle(JSON.stringify(encryptResult, null, 2));
      setDecryptSecret(encryptSecret);
      setTab("decrypt");
    }
  }

  return (
    <article className="project">
      <header className="project__hero">
        <div className="project__heroInner">
          <a className="project__back" href="#projects">
            <ArrowLeftIcon /> Back to projects
          </a>
          <span className="section__kicker">Project 04 / Crypto API</span>
          <h1 className="project__title">{sv.name}</h1>
          <p className="project__tagline">{sv.tagline}</p>
          <p className="project__intro">{sv.intro}</p>

          <ul className="chips project__heroChips">
            {sv.highlights.map((h) => (
              <li className="chip" key={h}>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ---------- Why it's interesting ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">What makes it interesting</span>
          <h2 className="section__title">A server with no memory</h2>
          <p className="section__lead">{sv.whyInteresting}</p>
        </div>

        <div className="feature__grid">
          <article className="card feature">
            <h3 className="feature__title">No database</h3>
            <p className="feature__text">
              Every request is handled in isolation. There's nothing written to disk, no row
              inserted, no key cached in memory between calls.
            </p>
          </article>
          <article className="card feature">
            <h3 className="feature__title">Historical leak-proof</h3>
            <p className="feature__text">
              A compromise of the server reveals nothing historical. There are no stored
              ciphertexts, sessions, or keys to exfiltrate.
            </p>
          </article>
          <article className="card feature">
            <h3 className="feature__title">Caller-held secret</h3>
            <p className="feature__text">
              The user's secret never leaves the client after the response returns. Lose it and
              the ciphertext is gone for good, by design.
            </p>
          </article>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">How it works</span>
          <h2 className="section__title">In plain English</h2>
          <p className="section__lead">{sv.howItWorks.lead}</p>
        </div>

        <div className="feature__grid">
          {sv.howItWorks.steps.map((s) => (
            <article className="card feature" key={s.label}>
              <h3 className="feature__title">{s.label}</h3>
              <p className="feature__text">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Interactive demo ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Interactive demo</span>
          <h2 className="section__title">Try it live</h2>
          <p className="section__lead">
            The form below calls the live API. Encrypt a string, then round-trip it back through
            Decrypt with one click.
          </p>
        </div>

        <div className="demo">
          {/* Disclaimer */}
          <p className="demo__disclaimer">
            ⚠ This is a live public API on a rate-limited free tier. Please do not paste real
            secrets, and do not lean on it for anything important.
          </p>

          {/* Tabs */}
          <div className="demo__tabs" role="tablist">
            <button
              className={`demo__tab${tab === "encrypt" ? " demo__tab--active" : ""}`}
              role="tab"
              aria-selected={tab === "encrypt"}
              onClick={() => setTab("encrypt")}
              type="button"
            >
              Encrypt
            </button>
            <button
              className={`demo__tab${tab === "decrypt" ? " demo__tab--active" : ""}`}
              role="tab"
              aria-selected={tab === "decrypt"}
              onClick={() => setTab("decrypt")}
              type="button"
            >
              Decrypt
            </button>
          </div>

          {/* Encrypt panel */}
          {tab === "encrypt" && (
            <div className="demo__panel" role="tabpanel">
              <div className="demo__field">
                <label className="demo__label" htmlFor="enc-plaintext">
                  Plaintext
                </label>
                <textarea
                  id="enc-plaintext"
                  className="demo__textarea"
                  placeholder="Enter the text you want to encrypt…"
                  value={plaintext}
                  onChange={(e) => setPlaintext(e.target.value)}
                  rows={3}
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="demo__field">
                <label className="demo__label" htmlFor="enc-secret">
                  Secret
                </label>
                <input
                  id="enc-secret"
                  className="demo__input"
                  type="password"
                  placeholder="Your encryption passphrase"
                  value={encryptSecret}
                  onChange={(e) => setEncryptSecret(e.target.value)}
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoComplete="new-password"
                  spellCheck={false}
                />
              </div>

              <div className="demo__actions">
                <button
                  className="btn btn--primary"
                  type="button"
                  onClick={handleEncrypt}
                  disabled={encryptLoading || !plaintext || !encryptSecret}
                >
                  {encryptLoading ? "Encrypting…" : "Encrypt"}
                </button>
                {encryptResult && (
                  <button
                    className="btn btn--ghost"
                    type="button"
                    onClick={loadFromEncrypt}
                  >
                    Load into Decrypt →
                  </button>
                )}
              </div>

              {encryptError && <p className="demo__error">{encryptError}</p>}

              {encryptResult && (
                <div className="demo__output">
                  <div>
                    <p className="demo__outputLabel">Result</p>
                    <dl className="demo__fieldList">
                      {(Object.entries(encryptResult) as [string, string][]).map(([k, v]) => (
                        <div className="demo__fieldRow" key={k}>
                          <dt className="demo__fieldKey">{k}</dt>
                          <dd className="demo__fieldVal">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div>
                    <p className="demo__outputLabel">Raw JSON</p>
                    <pre className="demo__pre">{encryptRaw}</pre>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Decrypt panel */}
          {tab === "decrypt" && (
            <div className="demo__panel" role="tabpanel">
              <div className="demo__field">
                <label className="demo__label" htmlFor="dec-bundle">
                  Ciphertext bundle (JSON)
                </label>
                <textarea
                  id="dec-bundle"
                  className="demo__textarea"
                  placeholder='Paste the full JSON response from the Encrypt step, e.g. {"version":"1","algorithm":"AES-256-GCM",...}'
                  value={decryptBundle}
                  onChange={(e) => setDecryptBundle(e.target.value)}
                  rows={6}
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="demo__field">
                <label className="demo__label" htmlFor="dec-secret">
                  Secret
                </label>
                <input
                  id="dec-secret"
                  className="demo__input"
                  type="password"
                  placeholder="The same passphrase used to encrypt"
                  value={decryptSecret}
                  onChange={(e) => setDecryptSecret(e.target.value)}
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoComplete="new-password"
                  spellCheck={false}
                />
              </div>

              <div className="demo__actions">
                <button
                  className="btn btn--primary"
                  type="button"
                  onClick={handleDecrypt}
                  disabled={decryptLoading || !decryptBundle || !decryptSecret}
                >
                  {decryptLoading ? "Decrypting…" : "Decrypt"}
                </button>
                {encryptResult && (
                  <button
                    className="btn btn--ghost"
                    type="button"
                    onClick={loadFromEncrypt}
                  >
                    ← Load example from Encrypt
                  </button>
                )}
              </div>

              {decryptError && <p className="demo__error">{decryptError}</p>}

              {decryptResult && (
                <div className="demo__output">
                  <div>
                    <p className="demo__outputLabel">Decrypted plaintext</p>
                    <p className="demo__resultText">{decryptResult.plaintext}</p>
                  </div>
                  <div>
                    <p className="demo__outputLabel">Raw JSON</p>
                    <pre className="demo__pre">{decryptRaw}</pre>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ---------- What I learned ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">What I learned</span>
          <h2 className="section__title">Building and shipping it</h2>
        </div>

        <div className="feature__grid">
          {sv.whatILearned.map((l) => (
            <article className="card feature" key={l.label}>
              <h3 className="feature__title">{l.label}</h3>
              <p className="feature__text">{l.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Links ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Links</span>
          <h2 className="section__title">Where to find it</h2>
        </div>

        <div className="feature__grid">
          <a
            className="card feature card--linkBlock"
            href={sv.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View StatelessVault source code on GitHub"
          >
            <h3 className="feature__title">Source code</h3>
            <p className="feature__text">Full implementation on GitHub.</p>
            <div className="card__link">
              <ExternalLinkIcon /> github.com/AustinJAkerley/StatelessVault
            </div>
          </a>
          <a
            className="card feature card--linkBlock"
            href={sv.apiBase}
            target="_blank"
            rel="noreferrer"
            aria-label="Open the StatelessVault live API site"
          >
            <h3 className="feature__title">Live API</h3>
            <p className="feature__text">
              Hosted on Azure Functions Flex Consumption. Free tier, rate-limited.
            </p>
            <div className="card__link">
              <ExternalLinkIcon /> statelessvault.azurewebsites.net
            </div>
          </a>
          <article className="card feature">
            <h3 className="feature__title">Endpoints</h3>
            <p className="feature__text">
              POST <code className="demo__inlineCode">/api/encrypt</code> takes{" "}
              <code className="demo__inlineCode">plaintext</code> +{" "}
              <code className="demo__inlineCode">secret</code>, returns a ciphertext bundle.
              <br />
              POST <code className="demo__inlineCode">/api/decrypt</code> takes the bundle +{" "}
              <code className="demo__inlineCode">secret</code>, returns{" "}
              <code className="demo__inlineCode">plaintext</code>.
            </p>
          </article>
        </div>
      </section>

      {/* ---------- Technical highlights ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Technical highlights</span>
          <h2 className="section__title">Stack at a glance</h2>
        </div>

        <ul className="chips">
          {sv.highlights.map((h) => (
            <li className="chip chip--badge" key={h}>
              {h}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
