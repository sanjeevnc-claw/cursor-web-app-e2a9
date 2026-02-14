export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cursor - The AI-first code editor</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #fff;
            background: #0a0a0a;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.9);
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-bottom: 1px solid #333;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #fff;
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #fff;
        }

        .get-cursor {
            background: #6366f1;
            color: white;
            padding: 0.6rem 1.2rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            transition: background 0.3s;
        }

        .get-cursor:hover {
            background: #5856f9;
        }

        /* Hero */
        .hero {
            padding: 10rem 0 8rem;
            text-align: center;
            background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
        }

        .hero h1 {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
        }

        .hero p {
            font-size: 1.3rem;
            color: #ccc;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 4rem;
        }

        .btn-primary {
            background: #6366f1;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
        }

        .btn-primary:hover {
            background: #5856f9;
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: transparent;
            color: #ccc;
            padding: 1rem 2rem;
            border: 1px solid #333;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
        }

        .btn-secondary:hover {
            border-color: #6366f1;
            color: #fff;
        }

        .hero-demo {
            background: #111;
            border: 1px solid #333;
            border-radius: 12px;
            padding: 2rem;
            margin: 0 auto;
            max-width: 900px;
            position: relative;
        }

        .window-header {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #333;
        }

        .window-dots {
            display: flex;
            gap: 0.5rem;
        }

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27ca3f; }

        .code-preview {
            background: #0d1117;
            border-radius: 8px;
            padding: 1.5rem;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            color: #e6edf3;
            height: 300px;
            overflow: hidden;
            position: relative;
        }

        .code-line {
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
        }

        .line-number {
            color: #6e7681;
            width: 30px;
            flex-shrink: 0;
        }

        .code-content {
            color: #e6edf3;
        }

        .keyword { color: #ff7b72; }
        .string { color: #a5d6ff; }
        .function { color: #d2a8ff; }
        .comment { color: #8b949e; }

        /* Features */
        .features {
            padding: 8rem 0;
            background: #111;
        }

        .features h2 {
            text-align: center;
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .features-subtitle {
            text-align: center;
            font-size: 1.2rem;
            color: #ccc;
            margin-bottom: 5rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
        }

        .feature-card {
            background: #1a1a1a;
            padding: 2.5rem;
            border-radius: 12px;
            border: 1px solid #333;
            transition: all 0.3s;
        }

        .feature-card:hover {
            border-color: #6366f1;
            transform: translateY(-5px);
        }

        .feature-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
        }

        .feature-card h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #fff;
        }

        .feature-card p {
            color: #ccc;
            line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
            padding: 8rem 0;
            text-align: center;
            background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
        }

        .cta-section h2 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .cta-section p {
            font-size: 1.2rem;
            color: #ccc;
            margin-bottom: 3rem;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Footer */
        footer {
            background: #0a0a0a;
            padding: 4rem 0 2rem;
            border-top: 1px solid #333;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }

        .footer-section h3 {
            color: #fff;
            margin-bottom: 1rem;
            font-size: 1rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section li {
            margin-bottom: 0.5rem;
        }

        .footer-section a {
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: #6366f1;
        }

        .footer-bottom {
            border-top: 1px solid #333;
            padding-top: 2rem;
            margin-top: 2rem;
            text-align: center;
            color: #666;
        }

        /* Mobile */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .hero h1 {
                font-size: 2.8rem;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .features-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .hero-demo {
                margin: 0 10px;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <a href="#" class="logo">Cursor</a>
            <ul class="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#docs">Docs</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
            <a href="#" class="get-cursor">Get Cursor</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>The AI-first code editor</h1>
                <p>Built to make you extraordinarily productive, Cursor is the best way to code with AI.</p>
                
                <div class="hero-buttons">
                    <a href="#" class="btn-primary">Download for free</a>
                    <a href="#" class="btn-secondary">Try in browser</a>
                </div>

                <div class="hero-demo">
                    <div class="window-header">
                        <div class="window-dots">
                            <div class="dot red"></div>
                            <div class="dot yellow"></div>
                            <div class="dot green"></div>
                        </div>
                    </div>
                    <div class="code-preview">
                        <div class="code-line">
                            <span class="line-number">1</span>
                            <span class="code-content"><span class="keyword">import</span> <span class="string">'react'</span></span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">2</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">3</span>
                            <span class="code-content"><span class="comment">// Generate a button component</span></span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">4</span>
                            <span class="code-content"><span class="keyword">export</span> <span class="keyword">function</span> <span class="function">Button</span>({ <span class="string">children</span>, <span class="string">onClick</span> }) {</span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">5</span>
                            <span class="code-content">  <span class="keyword">return</span> (</span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">6</span>
                            <span class="code-content">    &lt;<span class="function">button</span></span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">7</span>
                            <span class="code-content">      <span class="string">onClick</span>={onClick}</span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">8</span>
                            <span class="code-content">      <span class="string">className</span>=<span class="string">"px-4 py-2 bg-blue-500 text-white rounded"</span></span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">9</span>
                            <span class="code-content">    &gt;</span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">10</span>
                            <span class="code-content">      {children}</span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">11</span>
                            <span class="code-content">    &lt;/<span class="function">button</span>&gt;</span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">12</span>
                            <span class="code-content">  )</span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">13</span>
                            <span class="code-content">}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features" id="features">
            <div class="container">
                <h2>Built for productivity</h2>
                <p class="features-subtitle">Cursor is designed from the ground up to be the most productive way to code. Every feature is crafted to help you build software faster.</p>
                
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🤖</div>
                        <h3>Chat with your project</h3>
                        <p>Ask questions about your codebase, get explanations for complex code, and receive suggestions tailored to your specific project.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>Tab to autocomplete</h3>
                        <p>Advanced AI predictions that understand your coding patterns and suggest entire functions, not just the next few characters.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">✏️</div>
                        <h3>Edit with natural language</h3>
                        <p>Select code and describe how you want to change it. Cursor will make the edits for you, understanding context and intent.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🔍</div>
                        <h3>Codebase answers</h3>
                        <p>Get instant answers about how your code works, where features are implemented, and how different parts connect.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🛠️</div>
                        <h3>Smart rewrites</h3>
                        <p>Highlight sections of code and ask Cursor to refactor, optimize, or completely rewrite using different approaches or frameworks.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🔒</div>
                        <h3>Privacy mode</h3>
                        <p>Keep your code private with local AI models or use privacy mode to ensure your code never leaves your machine.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <h2>Try the future of coding</h2>
                <p>Join thousands of developers building faster with AI. Get started in minutes.</p>
                <a href="#" class="btn-primary">Download Cursor</a>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Product</h3>
                    <ul>
                        <li><a href="#">Download</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Changelog</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Anysphere, Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>` }} />
  );
}