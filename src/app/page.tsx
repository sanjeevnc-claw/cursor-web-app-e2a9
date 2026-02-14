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
            background: #000;
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
            background: rgba(0, 0, 0, 0.95);
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

        .download-btn {
            background: #6366f1;
            color: white;
            padding: 0.7rem 1.5rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.3s;
        }

        .download-btn:hover {
            background: #5856f9;
        }

        /* Hero */
        .hero {
            padding: 8rem 0 6rem;
            text-align: center;
            background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
        }

        .hero h1 {
            font-size: 4.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
        }

        .hero p {
            font-size: 1.3rem;
            color: #ccc;
            margin-bottom: 3rem;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-bottom: 5rem;
            flex-wrap: wrap;
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
            border-radius: 16px;
            overflow: hidden;
            max-width: 1000px;
            margin: 0 auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .demo-header {
            background: #1a1a1a;
            padding: 1rem;
            border-bottom: 1px solid #333;
            display: flex;
            align-items: center;
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

        .demo-content {
            padding: 2rem;
            font-family: 'Courier New', monospace;
            background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
        }

        .typing-animation {
            font-size: 1.1rem;
            color: #e6edf3;
        }

        .cursor-blink {
            animation: blink 1s infinite;
            color: #6366f1;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        .code-line {
            margin-bottom: 0.8rem;
            display: flex;
        }

        .line-number {
            color: #6e7681;
            width: 40px;
            flex-shrink: 0;
        }

        .keyword { color: #ff7b72; }
        .string { color: #a5d6ff; }
        .function { color: #d2a8ff; }
        .comment { color: #8b949e; }

        /* Features */
        .features {
            padding: 8rem 0;
            background: #0a0a0a;
        }

        .features h2 {
            text-align: center;
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .features-subtitle {
            text-align: center;
            font-size: 1.2rem;
            color: #ccc;
            margin-bottom: 5rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 3rem;
        }

        .feature-card {
            background: #111;
            padding: 3rem;
            border-radius: 16px;
            border: 1px solid #333;
            transition: all 0.3s;
        }

        .feature-card:hover {
            border-color: #6366f1;
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }

        .feature-card h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: #fff;
            font-weight: 600;
        }

        .feature-card p {
            color: #ccc;
            line-height: 1.7;
            font-size: 1rem;
        }

        /* Testimonials */
        .testimonials {
            padding: 8rem 0;
            background: #111;
        }

        .testimonials h2 {
            text-align: center;
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 5rem;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .testimonial {
            background: #1a1a1a;
            padding: 2.5rem;
            border-radius: 12px;
            border: 1px solid #333;
        }

        .testimonial p {
            font-size: 1.1rem;
            color: #ccc;
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .author-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .author-info h4 {
            color: #fff;
            font-weight: 600;
        }

        .author-info span {
            color: #888;
            font-size: 0.9rem;
        }

        /* CTA */
        .cta {
            padding: 8rem 0;
            text-align: center;
            background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
        }

        .cta h2 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .cta p {
            font-size: 1.3rem;
            color: #ccc;
            margin-bottom: 3rem;
            max-width: 600px;
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
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 3rem;
        }

        .footer-section h3 {
            color: #fff;
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section li {
            margin-bottom: 0.8rem;
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
            text-align: center;
            color: #666;
        }

        /* Mobile */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .hero h1 {
                font-size: 3rem;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .features-grid,
            .testimonials-grid {
                grid-template-columns: 1fr;
            }

            .demo-content {
                height: 300px;
                padding: 1rem;
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
                <li><a href="#changelog">Changelog</a></li>
            </ul>
            <a href="#" class="download-btn">Download</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>The AI-first code editor</h1>
                <p>Built to make you extraordinarily productive, Cursor is the best way to code with AI. Write, edit, and debug code faster than ever before.</p>
                
                <div class="hero-buttons">
                    <a href="#" class="btn-primary">Download for free</a>
                    <a href="#" class="btn-secondary">Watch demo</a>
                </div>

                <div class="hero-demo">
                    <div class="demo-header">
                        <div class="dot red"></div>
                        <div class="dot yellow"></div>
                        <div class="dot green"></div>
                        <span style="margin-left: 1rem; color: #ccc; font-size: 0.9rem;">main.py</span>
                    </div>
                    <div class="demo-content">
                        <div class="code-line">
                            <span class="line-number">1</span>
                            <span class="comment"># Ask Cursor to generate a function</span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">2</span>
                            <span class="keyword">def</span> <span class="function">fibonacci</span>(n):
                        </div>
                        <div class="code-line">
                            <span class="line-number">3</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"""Generate fibonacci sequence up to n"""</span>
                        </div>
                        <div class="code-line">
                            <span class="line-number">4</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span> n <= 1:
                        </div>
                        <div class="code-line">
                            <span class="line-number">5</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> n
                        </div>
                        <div class="code-line">
                            <span class="line-number">6</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> fibonacci(n-1) + fibonacci(n-2)
                        </div>
                        <div class="code-line">
                            <span class="line-number">7</span>
                            <span class="cursor-blink">|</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features" id="features">
            <div class="container">
                <h2>Built for productivity</h2>
                <p class="features-subtitle">Cursor is engineered to make you extraordinarily productive. Every feature is designed to help you build software faster with the power of AI.</p>
                
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">💬</div>
                        <h3>Chat with your codebase</h3>
                        <p>Ask questions about your entire project. Cursor understands your code structure and can explain complex logic, find bugs, or suggest improvements across files.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>AI-powered autocomplete</h3>
                        <p>Get intelligent code suggestions that understand your patterns. Cursor predicts your next edit and can write entire functions based on your coding style.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">✨</div>
                        <h3>Edit in natural language</h3>
                        <p>Select code and describe what you want to change. Cursor will make the edits for you, understanding context and maintaining your code's integrity.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🔍</div>
                        <h3>Instant code answers</h3>
                        <p>Get explanations for any piece of code instantly. Understand how functions work, trace data flow, and learn from your own codebase.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🛠️</div>
                        <h3>Smart refactoring</h3>
                        <p>Highlight code and ask Cursor to refactor, optimize, or rewrite it. Get better performance, cleaner structure, or modern syntax with AI assistance.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🔒</div>
                        <h3>Privacy first</h3>
                        <p>Your code stays private. Use privacy mode to ensure sensitive code never leaves your machine, or choose which files to share with AI models.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <div class="container">
                <h2>Loved by developers</h2>
                <div class="testimonials-grid">
                    <div class="testimonial">
                        <p>"Cursor has completely transformed how I code. The AI suggestions are so accurate it feels like magic. I'm shipping features 3x faster."</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">S</div>
                            <div class="author-info">
                                <h4>Sarah Chen</h4>
                                <span>Full Stack Engineer at Stripe</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>"The natural language editing is incredible. I can describe what I want and Cursor just does it. It's like having a senior developer pair programming with me."</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">M</div>
                            <div class="author-info">
                                <h4>Marcus Rodriguez</h4>
                                <span>Senior Engineer at Notion</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>"I was skeptical about AI coding tools until I tried Cursor. Now I can't imagine coding without it. The productivity boost is unreal."</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">A</div>
                            <div class="author-info">
                                <h4>Alex Kim</h4>
                                <span>Tech Lead at Discord</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta">
            <div class="container">
                <h2>Ready to code faster?</h2>
                <p>Join thousands of developers who are building software at the speed of thought with Cursor.</p>
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