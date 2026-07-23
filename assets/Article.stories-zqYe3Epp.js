import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,St as n,bt as r,wt as i,xt as a}from"./iframe-DInCeyBe.js";import{t as o}from"./MetricCard-Cs1lcyIF.js";import{n as s}from"./Thumbnail-xr-fiF6Q.js";import{t as c}from"./AudioPlayer-QCuET2it.js";import{t as l}from"./CaseNavigator-BWAs9KtW.js";import{t as u}from"./Summary-Cy68rjLC.js";import{t as d}from"./Article-SBzzMx-Y.js";var f,p,m,h=e((()=>{f={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},p=e=>(...t)=>({_$litDirective$:e,values:t}),m=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})),g,_,v=e((()=>{i(),h(),g=class extends m{constructor(e){if(super(e),this.it=a,e.type!==f.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===a||e==null)return this._t=void 0,this.it=e;if(e===n)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}},g.directiveName=`unsafeHTML`,g.resultType=1,_=p(g)})),y=e((()=>{v()})),b,x,S,C,w,T,E,D,O=e((()=>{r(),y(),d(),u(),c(),l(),o(),s(),{userEvent:b,within:x,expect:S,fn:C}=__STORYBOOK_MODULE_TEST__,w=`
<h1 id="sec-markdown-architecture">Heading Level 1 - Complete Markdown Architecture & System Benchmarks</h1>
<p>
  Lorem ipsum dolor sit amet, <strong>consectetur bold text</strong> and <em>italicized emphasis</em>. You can also combine <mark>highlighted mark text</mark>, <del>strikethrough text</del>, <ins>inserted text</ins>, <sub>subscript</sub>, <sup>superscript</sup>, and <abbr title="HyperText Markup Language">HTML</abbr> inline tags. Inline links look like <a href="#">cillum dolore eu fugiat</a>, and inline code renders as <code>const variable = "lorem";</code>.
</p>
<p>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
<p>
  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>

<h2 id="sec-code-controls">Heading Level 2 - Code, Controls &amp; Shortcuts</h2>
<p>
  Inline code looks like <code>const variable = "lorem";</code> and keyboard shortcuts render as <kbd>Ctrl</kbd> + <kbd>C</kbd> or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>.
</p>
<p>
  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
</p>

<p>Below is the system topology flow for our new edge rendering pipeline:</p>

  <!-- End users can place <mermaid-diagram> directly in the body! -->
  <mermaid-diagram chart="
    flowchart LR
      Client['Browser App'] --> Edge['CDN Edge Node']
      Edge --> Micro['Web Component Shell']
  "></mermaid-diagram>

  <p>The diagram above renders dynamically without breaking Shadow DOM boundaries.</p>

<h3 id="sec-lists-tasklists">Heading Level 3 - Lists & Task Lists</h3>

<h4 id="sec-unordered-list">Unordered List</h4>
<ul>
  <li><strong>Unordered Item One:</strong> Core architecture standards, design tokens, and modular slot allocations across complex web layouts.</li>
  <li><strong>Unordered Item Two:</strong> Nested items supported across all DOM depth levels:
    <ul>
      <li>Nested list item alpha with extended text to test typography wrappers.</li>
      <li>Nested list item beta:
        <ul>
          <li>Deep nested level three token resolution.</li>
          <li>Deep nested level three fallback state validation.</li>
        </ul>
      </li>
      <li>Nested list item gamma with accessibility metadata.</li>
    </ul>
  </li>
  <li><strong>Unordered Item Three:</strong> Edge network deployment, CDN cache invalidation, and static asset streaming.</li>
  <li><strong>Unordered Item Four:</strong> Micro-frontend isolation boundaries and global event dispatching guarantees.</li>
</ul>

<h4 id="sec-ordered-list">Ordered List</h4>
<ol>
  <li>First ordered step with inline criteria, linting rules, and strict TypeScript compiler checks.</li>
  <li>Second ordered step leading into technical requirements:
    <ol>
      <li>Sub-requirement criteria A: Zero cumulative layout shifts during re-renders.</li>
      <li>Sub-requirement criteria B: Minimal repaint overhead across virtualized node structures.</li>
      <li>Sub-requirement criteria C: Strict semantic tag mapping with comprehensive ARIA landmarks.</li>
    </ol>
  </li>
  <li>Third ordered step verifying cross-browser rendering fidelity and high contrast support.</li>
  <li>Fourth ordered step documenting API contracts and fault-tolerant fallback states.</li>
</ol>

<h4 id="sec-gfm-task-list">GFM Task List</h4>
<ul class="contains-task-list task-list">
  <li class="task-list-item"><input type="checkbox" checked disabled /> Complete core component architecture and atomic CSS token configuration</li>
  <li class="task-list-item"><input type="checkbox" checked disabled /> Fix Shadow DOM CSS selector invalidation and slot encapsulation bugs</li>
  <li class="task-list-item"><input type="checkbox" checked disabled /> Audit baseline accessibility, keyboard navigation paths, and screen reader announcements</li>
  <li class="task-list-item"><input type="checkbox" disabled /> Verify WCAG AAA High Contrast mode color ratios across all interactive states</li>
  <li class="task-list-item"><input type="checkbox" disabled /> Benchmark virtualized scroll rendering frame rates under 10,000 continuous DOM nodes</li>
</ul>

<h3 id="sec-collapsible-definition-lists">Heading Level 4 - Collapsible Sections & Definition Lists</h3>

<details open>
  <summary>Click to toggle technical implementation details (Open state)</summary>
  <p>
    This collapsible accordion relies on native <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> HTML elements, styled cleanly to match design system tokens.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
  </p>
</details>

<details>
  <summary>Click to expand additional runtime metrics (Closed state)</summary>
  <p>
    Memory allocation remains under 2.4 MB during virtualized rendering passes. Peak latency stays strictly within 16ms to maintain a fluid 60fps frame rate.
  </p>
</details>

<dl>
  <dt>Light DOM Projection</dt>
  <dd>Direct child elements passed into default slots that inherit host styles natively without encapsulation overhead.</dd>
  <dt>Shadow DOM Encapsulation</dt>
  <dd>Isolated internal component DOM preventing unwanted style leakage from and into the host application container.</dd>
  <dt>Virtual DOM Reconciliation</dt>
  <dd>Diffing algorithm designed to calculate minimal mutation trees prior to batching DOM write operations.</dd>
</dl>

<blockquote>
  <p>
    "Design systems are non-linear infrastructure projects that align technology with brand identity."
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <blockquote>
    <p>Nested blockquote demonstrating hierarchical quote indentation and citation styling.</p>
  </blockquote>
</blockquote>

<hr />

<h3 id="sec-data-summary-table">Data Summary Table</h3>
<table>
  <thead>
    <tr>
      <th>Framework</th>
      <th>Render Target</th>
      <th>Bundle Size</th>
      <th>Memory Usage</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Web Components</td>
      <td>Light / Shadow DOM</td>
      <td>4.2 KB</td>
      <td>1.2 MB</td>
      <td><code>Active</code></td>
    </tr>
    <tr>
      <td>Lit Protocol</td>
      <td>Shadow DOM</td>
      <td>6.1 KB</td>
      <td>1.8 MB</td>
      <td><code>Pending</code></td>
    </tr>
    <tr>
      <td>React Wrapper</td>
      <td>Virtual DOM</td>
      <td>12.8 KB</td>
      <td>4.5 MB</td>
      <td><code>Completed</code></td>
    </tr>
    <tr>
      <td>Svelte Core</td>
      <td>Compiled DOM</td>
      <td>2.1 KB</td>
      <td>0.9 MB</td>
      <td><code>Active</code></td>
    </tr>
    <tr>
      <td>Vue Custom Elements</td>
      <td>Shadow DOM</td>
      <td>8.4 KB</td>
      <td>2.7 MB</td>
      <td><code>Beta</code></td>
    </tr>
    <tr>
      <td>Solid Micro-shell</td>
      <td>Direct DOM Nodes</td>
      <td>3.0 KB</td>
      <td>1.1 MB</td>
      <td><code>Active</code></td>
    </tr>
  </tbody>
</table>

<h3 id="sec-media-figures">Media & Figures</h3>
<figure>
  <img src="https://picsum.photos/800/450" alt="Placeholder graphic illustrating Markdown layout" />
  <figcaption>Figure 1.1: Responsive figure caption powered by sub-atomic typography tokens. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</figcaption>
</figure>

<figure>
  <img src="https://picsum.photos/800/350" alt="Secondary layout schematic diagram" />
  <figcaption>Figure 1.2: Architecture blueprint showing DOM propagation flow and event listener boundaries.</figcaption>
</figure>

<hr />

<h2 id="sec-code-execution-samples">Code Execution Samples (10 Languages Test Suite)</h2>

<p>Below are ten code blocks covering different programming languages to verify syntax highlighting, auto-detection heuristics, and badge placement in the top-right corner.</p>

<h3 id="sec-lang-js">1. JavaScript (ES6+ Async/Await)</h3>
<pre><code class="language-js">// JavaScript API Fetch Handler with Retry Logic
async function fetchUserData(userId, maxRetries = 3) {
  const endpoint = "/api/v1/users/" + userId;
  let attempt = 0;
  
  while (attempt &lt; maxRetries) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("HTTP Status: " + response.status);
      const data = await response.json();
      return { success: true, user: data, timestamp: Date.now() };
    } catch (error) {
      attempt++;
      console.warn("Attempt " + attempt + " failed. Retrying...", error);
      if (attempt &gt;= maxRetries) {
        return { success: false, error: error.message };
      }
    }
  }
}</code></pre>

<h3 id="sec-lang-ts">2. TypeScript (Generics &amp; Interfaces)</h3>
<pre><code class="language-typescript">// TypeScript Generic Service Interface &amp; Registry
export interface RepositoryResponse&lt;T&gt; {
  data: T[];
  totalCount: number;
  hasMore: boolean;
  pageIndex: number;
}

export class UserRegistry&lt;T extends { id: string; createdAt: Date }&gt; {
  private items: Map&lt;string, T&gt; = new Map();

  public register(item: T): void {
    this.items.set(item.id, item);
  }

  public getById(id: string): T | undefined {
    return this.items.get(id);
  }

  public listRecent(limit: number): T[] {
    return Array.from(this.items.values())
      .sort((a, b) =&gt; b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }
}</code></pre>

<h3 id="sec-lang-python">3. Python (Class Definition &amp; Decorators)</h3>
<pre><code class="language-python"># Python Data Processing Pipeline
from typing import List, Optional
import time

class DataPipeline:
    def __init__(self, raw_data: List[float]):
        self._data = raw_data
        self._created_at = time.time()

    @property
    def normalized_values(self) -&gt; List[float]:
        """Returns values scaled between 0.0 and 1.0"""
        max_val = max(self._data) if self._data else 1.0
        return [v / max_val for v in self._data]

    def filter_outliers(self, threshold: float) -&gt; List[float]:
        """Filters values exceeding a specific threshold"""
        return [v for v in self._data if v &lt;= threshold]

pipeline = DataPipeline([12.5, 45.0, 99.1, 8.4, 150.2, 3.1])
print(f"Normalized: {pipeline.normalized_values}")
print(f"Filtered (&lt;100): {pipeline.filter_outliers(100.0)}")</code></pre>

<h3 id="sec-lang-html">4. HTML5 / Markup (Semantic Elements &amp; Attributes)</h3>
<pre><code class="language-markup">&lt;!-- HTML5 Card Component Structure --&gt;
&lt;article class="ds-card" data-active="true" aria-labelledby="card-title"&gt;
  &lt;header class="card-header"&gt;
    &lt;h3 id="card-title"&gt;System Notification&lt;/h3&gt;
    &lt;span class="badge badge-success"&gt;Live&lt;/span&gt;
  &lt;/header&gt;
  &lt;section class="card-body"&gt;
    &lt;p&gt;Operational status: &lt;mark&gt;Optimal&lt;/mark&gt;&lt;/p&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
  &lt;/section&gt;
  &lt;footer class="card-footer"&gt;
    &lt;button type="button" class="btn btn-primary"&gt;Acknowledge&lt;/button&gt;
  &lt;/footer&gt;
&lt;/article&gt;</code></pre>

<h3 id="sec-lang-css">5. CSS (Custom Properties, Flexbox &amp; Keyframes)</h3>
<pre><code class="language-css">/* Modern Responsive CSS Grid & Tokens */
.ds-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-md, 12px);
  padding: var(--space-lg, 16px);
  background-color: var(--color-surface, #F2F2F7);
  border: 1px solid var(--color-surface-border);
  border-radius: var(--radius-md, 8px);
}

@keyframes pulse {
  0% { opacity: 0.4; transform: scale(0.98); }
  50% { opacity: 0.8; transform: scale(1.02); }
  100% { opacity: 1.0; transform: scale(1.0); }
}</code></pre>

<h3 id="sec-lang-sql">6. SQL (Relational Aggregations &amp; Joins)</h3>
<pre><code class="language-sql">-- SQL User Performance Query
SELECT 
  u.user_id,
  u.email,
  COUNT(o.order_id) AS total_orders,
  SUM(o.total_amount) AS lifetime_value
FROM users u
INNER JOIN orders o ON u.user_id = o.customer_id
WHERE o.created_at &gt;= '2026-01-01' AND o.status = 'COMPLETED'
GROUP BY u.user_id, u.email
HAVING SUM(o.total_amount) &gt; 1000.00
ORDER BY lifetime_value DESC;</code></pre>

<h3 id="sec-lang-bash">7. Bash / Shell (CLI Build &amp; Deployment)</h3>
<pre><code class="language-bash">#!/usr/bin/env bash
# Production Build Automation Script
set -e

echo "Building production assets..."
npm run build -- --mode production

if [ -d "./dist" ]; then
  echo "Deploying to Docker edge node..."
  docker build -t my-app:latest .
  docker run -d -p 8080:80 my-app:latest
  echo "Deployment successfully verified."
fi</code></pre>

<h3 id="sec-lang-json">8. JSON (Configuration Payload)</h3>
<pre><code class="language-json">{
  "name": "@ds/article-organism",
  "version": "1.0.0",
  "private": true,
  "theme": "light",
  "features": {
    "syntaxHighlighting": true,
    "floatingNavigator": true,
    "audioReader": true,
    "virtualizedList": true
  },
  "metadata": {
    "author": "Design Systems Team",
    "license": "MIT"
  },
  "supportedLanguages": ["js", "ts", "py", "html", "css", "sql", "sh", "json", "cpp", "rust"]
}</code></pre>

<h3 id="sec-lang-cpp">9. C++ (Memory Allocation &amp; Standard Vectors)</h3>
<pre><code class="language-cpp">// C++ Memory Buffer Management
#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;memory&gt;

template &lt;typename T&gt;
class BufferPool {
private:
    std::vector&lt;T&gt; storage;
public:
    explicit BufferPool(size_t initial_capacity) {
        storage.reserve(initial_capacity);
    }

    void push(const T&amp; item) {
        storage.push_back(item);
    }

    size_t size() const {
        return storage.size();
    }
};</code></pre>

<h3 id="sec-lang-rust">10. Rust (Pattern Matching &amp; Error Result Handling)</h3>
<pre><code class="language-rust">// Rust Pattern Matching Example
fn evaluate_status(code: u32) -&gt; Result&lt;&amp;'static str, String&gt; {
    match code {
        200 =&gt; Ok("200 OK: Request succeeded"),
        201 =&gt; Ok("201 Created: Resource allocated"),
        404 =&gt; Err(String::from("404 Error: Resource not found")),
        500 =&gt; Err(String::from("500 Error: Internal server issue")),
        _ =&gt; Err(format!("Unhandled status code: {}", code)),
    }
}</code></pre>

<section class="footnotes">
  <ol>
    <li id="fn1">
      Footnote reference example covering inline markup architecture. <a href="#" class="footnote-backref">↩</a>
    </li>
    <li id="fn2">
      Secondary footnote verifying dynamic citation references. <a href="#" class="footnote-backref">↩</a>
    </li>
  </ol>
</section>
`,T={title:`Organisms/Article`,component:`ds-article`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`A stateless, highly configurable organism that orchestrates the layout for long-form case studies. Projects Markdown-parsed HTML safely into the Light DOM, ensuring global typography rules apply seamlessly without Shadow DOM interference.`}}},argTypes:{kicker:{control:`text`,table:{category:`Content`}},"title-text":{control:`text`,table:{category:`Content`}},"primary-label":{control:`text`,table:{category:`Content`}},"primary-icon":{control:`text`,table:{category:`Content`}},"secondary1-label":{control:`text`,table:{category:`Content`}},"secondary2-label":{control:`text`,table:{category:`Content`}},"show-kicker":{control:`boolean`,table:{category:`Core`}},"show-title":{control:`boolean`,table:{category:`Core`}},"show-social-share":{control:`boolean`,table:{category:`Core`}},"show-social-linkedin":{control:`boolean`,table:{category:`Core`}},"show-social-x":{control:`boolean`,table:{category:`Core`}},"show-social-facebook":{control:`boolean`,table:{category:`Core`}},"show-action-primary":{control:`boolean`,table:{category:`Core`}},"show-action-secondary1":{control:`boolean`,table:{category:`Core`}},"show-action-secondary2":{control:`boolean`,table:{category:`Core`}},"show-summary":{control:`boolean`,table:{category:`Core`}},"show-player":{control:`boolean`,table:{category:`Core`}},"show-toc":{control:`boolean`,table:{category:`Core`}},"show-navigator":{control:`boolean`,table:{category:`Core`}},"--ds-article-max-width":{control:`text`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-article-title-color":{control:`color`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-article-social-color":{control:`color`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-article-toc-top":{control:`text`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-article-toc-right":{control:`text`,table:{category:`SUB-ATOMIC PROPS`}}},args:{kicker:`2026 • TESTAMENTUS.ORG`,"title-text":`Building an e-reader`,"primary-label":`Pitch`,"primary-icon":`play-fill`,"secondary1-label":`Repository`,"secondary2-label":`Live Demo`,"show-kicker":!0,"show-title":!0,"show-social-share":!0,"show-social-linkedin":!0,"show-social-x":!0,"show-social-facebook":!0,"show-action-primary":!0,"show-action-secondary1":!0,"show-action-secondary2":!0,"show-summary":!0,"show-player":!0,"show-toc":!0,"show-navigator":!0,"--ds-article-toc-top":`100px`,"--ds-article-toc-right":`24px`},render:e=>t`
      <div style="background: var(--color-bg, #ffffff); min-height: 100vh; padding: 40px 20px; position: relative;">
        <ds-article
          style=${[e[`--ds-article-max-width`]?`--ds-article-max-width: ${e[`--ds-article-max-width`]};`:``,e[`--ds-article-title-color`]?`--ds-article-title-color: ${e[`--ds-article-title-color`]};`:``,e[`--ds-article-social-color`]?`--ds-article-social-color: ${e[`--ds-article-social-color`]};`:``,e[`--ds-article-toc-top`]?`--ds-article-toc-top: ${e[`--ds-article-toc-top`]};`:``,e[`--ds-article-toc-right`]?`--ds-article-toc-right: ${e[`--ds-article-toc-right`]};`:``].filter(Boolean).join(` `)||void 0}
          kicker=${e.kicker}
          title-text=${e[`title-text`]}
          primary-label=${e[`primary-label`]}
          primary-icon=${e[`primary-icon`]}
          secondary1-label=${e[`secondary1-label`]}
          secondary2-label=${e[`secondary2-label`]}
          show-kicker=${e[`show-kicker`]}
          show-title=${e[`show-title`]}
          show-social-share=${e[`show-social-share`]}
          show-social-linkedin=${e[`show-social-linkedin`]}
          show-social-x=${e[`show-social-x`]}
          show-social-facebook=${e[`show-social-facebook`]}
          show-action-primary=${e[`show-action-primary`]}
          show-action-secondary1=${e[`show-action-secondary1`]}
          show-action-secondary2=${e[`show-action-secondary2`]}
          show-summary=${e[`show-summary`]}
          show-player=${e[`show-player`]}
          show-toc=${e[`show-toc`]}
          show-navigator=${e[`show-navigator`]}>
          
          <ds-thumbnail
            slot="thumbnail"
            category="mobile"
            brand="apple"
            model="Apple iPhone 13"
            color="Midnight"
            screen-image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            max-height="320px"
          ></ds-thumbnail>

          <!-- SUMMARY SLOT -->
          <ds-summary slot="summary" text="Testamentus is a reading platform optimized for long-form retention. By strictly controlling line lengths and moving data to static edge delivery, it guarantees zero visual friction and instant load times.">
            <ds-metric-card value="+143%" label="Increase in session duration" variant="success"></ds-metric-card>
            <ds-metric-card value="US$ 5/mo" label="Fixed infrastructure cost"></ds-metric-card>
            <ds-metric-card value="0.9s" label="FCP Performance"></ds-metric-card>
            <ds-metric-card value="92/100" label="WCAG AA Compliance"></ds-metric-card>
          </ds-summary>

          <!-- PLAYER SLOT -->
          <ds-audio-player slot="player" duration="184" time="0" label-reader="Reader"></ds-audio-player>

          <!-- LIGHT DOM MARKDOWN BODY INJECTION -->
          ${_(w)}

          <!-- NAVIGATOR SLOT (FLOATING BOTTOM CENTER) -->
          <ds-case-navigator slot="navigator" current-index="1" total-cases="4"></ds-case-navigator>

        </ds-article>
      </div>
    `},E={args:{onDsArticleAction:C(),onDsArticleShare:C()},play:async({canvasElement:e,step:t})=>{x(e);let n=e.querySelector(`ds-article`);await t(`Verify shadow root elements render correctly`,async()=>{let e=n.shadowRoot.querySelector(`.btn-primary`);S(e).toBeTruthy()}),await t(`Verify TOC element renders inside article Shadow DOM`,async()=>{let e=n.shadowRoot.querySelector(`.article-toc`);S(e).toBeTruthy()}),await t(`Test primary action button click and custom event emission`,async()=>{let e=n.shadowRoot.querySelector(`.btn-primary`),t=!1;n.addEventListener(`ds-article-action`,e=>{e.detail.action===`primary`&&(t=!0)}),await b.click(e),S(t).toBe(!0)}),await t(`Test social share button event emission`,async()=>{let e=n.shadowRoot.querySelector(`.btn-share`),t=!1;n.addEventListener(`ds-article-share`,e=>{e.detail.platform===`native`&&(t=!0)}),await b.click(e),S(t).toBe(!0)})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    // Map event listeners to spy functions
    onDsArticleAction: fn(),
    onDsArticleShare: fn()
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const article = canvasElement.querySelector('ds-article');
    await step('Verify shadow root elements render correctly', async () => {
      const primaryBtn = article.shadowRoot.querySelector('.btn-primary');
      expect(primaryBtn).toBeTruthy();
    });
    await step('Verify TOC element renders inside article Shadow DOM', async () => {
      const toc = article.shadowRoot.querySelector('.article-toc');
      expect(toc).toBeTruthy();
    });
    await step('Test primary action button click and custom event emission', async () => {
      const primaryBtn = article.shadowRoot.querySelector('.btn-primary');
      let eventFired = false;
      article.addEventListener('ds-article-action', e => {
        if (e.detail.action === 'primary') eventFired = true;
      });
      await userEvent.click(primaryBtn);
      expect(eventFired).toBe(true);
    });
    await step('Test social share button event emission', async () => {
      const shareBtn = article.shadowRoot.querySelector('.btn-share');
      let shareFired = false;
      article.addEventListener('ds-article-share', e => {
        if (e.detail.platform === 'native') shareFired = true;
      });
      await userEvent.click(shareBtn);
      expect(shareFired).toBe(true);
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`CompleteArticle`]}));O();export{E as CompleteArticle,D as __namedExportsOrder,T as default,O as t};