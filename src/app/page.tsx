export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cursor - The AI-First Code Editor</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #000;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
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
            font-size: 1.8rem;
            font-weight: bold;
            color: #fff;
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
        }

        .nav-links a {
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s;
            font-weight: 500;
        }

        .nav-links a:hover {
            color: #fff;
        }

        .download-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 0.8rem 1.8rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.2s;
        }

        .download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
            padding: 10rem 0 8rem;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        .hero h1 {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
        }

        .hero p {
            font-size: 1.4rem;
            color: #bbb;
            margin-bottom: 3.5rem;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.2rem 2.5rem;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: #ccc;
            padding: 1.2rem 2.5rem;
            border: 2px solid #444;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
        }

        .btn-secondary:hover {
            border-color: #667eea;
            color: #fff;
            background: rgba(102, 126, 234, 0.1);
        }

        /* Features */
        .features {
            padding: 8rem 0;
            background: #111;
        }

        .features h2 {
            text-align: center;
            font-size: 3rem;
            color: #fff;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .features-subtitle {
            text-align: center;
            font-size: 1.2rem;
            color: #999;
            margin-bottom: 5rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 3rem;
        }

        .feature {
            background: #1a1a1a;
            padding: 3rem;
            border-radius: 16px;
            border: 1px solid #333;
            transition: all 0.3s;
        }

        .feature:hover {
            border-color: #667eea;
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .feature-icon {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        .feature h3 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 1.2rem;
            font-weight: 600;
        }

        .feature p {
            color: #bbb;
            line-height: 1.7;
            font-size: 1.05rem;
        }

        /* Testimonials */
        .testimonials {
            padding: 8rem 0;
            background: #000;
            text-align: center;
        }

        .testimonials h2 {
            font-size: 3rem;
            color: #fff;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .testimonials-subtitle {
            font-size: 1.2rem;
            color: #999;
            margin-bottom: 5rem;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
        }

        .testimonial {
            background: #1a1a1a;
            padding: 2.5rem;
            border-radius: 16px;
            border: 1px solid #333;
        }

        .testimonial p {
            color: #ccc;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            font-style: italic;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .author-avatar {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: bold;
        }

        .author-info h4 {
            color: #fff;
            font-size: 1rem;
            margin-bottom: 0.2rem;
        }

        .author-info span {
            color: #999;
            font-size: 0.9rem;
        }

        /* CTA Section */
        .cta-section {
            padding: 8rem 0;
            background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
            text-align: center;
        }

        .cta-section h2 {
            font-size: 3rem;
            color: #fff;
            margin-bottom: 1.5rem;
            font-weight: 700;
        }

        .cta-section p {
            font-size: 1.3rem;
            color: #bbb;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Footer */
        footer {
            background: #0a0a0a;
            padding: 5rem 0 2rem;
            border-top: 1px solid #333;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 4rem;
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
            color: #999;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: #667eea;
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
                font-size: 2.8rem;
            }

            .hero p {
                font-size: 1.2rem;
            }

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }

            .features-grid,
            .testimonials-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .features h2,
            .testimonials h2,
            .cta-section h2 {
                font-size: 2.2rem;
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
                <li><a href="#support">Support</a></li>
            </ul>
            <a href="#" class="download-btn">Try Cursor</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>The AI-First Code Editor</h1>
                    <p>Build software faster with AI that understands your codebase. Cursor brings the future of coding to your fingertips with intelligent assistance every step of the way.</p>
                    <div class="cta-buttons">
                        <a href="#" class="btn-primary">Download for Free</a>
                        <a href="#" class="btn-secondary">Watch Demo</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="features" id="features">
            <div class="container">
                <h2>Built for the Future of Coding</h2>
                <p class="features-subtitle">Experience the next generation of development tools powered by advanced AI</p>
                <div class="features-grid">
                    <div class="feature">
                        <div class="feature-icon">🧠</div>
                        <h3>Smart Code Completion</h3>
                        <p>AI that understands your entire codebase and provides context-aware suggestions. Get completions that actually make sense for your project.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">💬</div>
                        <h3>Natural Language Coding</h3>
                        <p>Write code using plain English. Describe what you want to build, and Cursor will generate the implementation for you.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🔄</div>
                        <h3>Intelligent Refactoring</h3>
                        <p>Automatically improve your code structure while maintaining functionality. AI-powered suggestions for better architecture and performance.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🔍</div>
                        <h3>Codebase Understanding</h3>
                        <p>Ask questions about your code and get instant answers. Find functions, understand relationships, and navigate complex projects effortlessly.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">⚡</div>
                        <h3>Lightning Performance</h3>
                        <p>Built for speed with instant AI responses. No lag, no waiting - just seamless coding assistance that keeps up with your thoughts.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🔒</div>
                        <h3>Privacy by Design</h3>
                        <p>Your code stays private and secure. Advanced AI capabilities without compromising on data protection or sending code to external servers.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <div class="container">
                <h2>Loved by Developers</h2>
                <p class="testimonials-subtitle">See what developers are saying about Cursor</p>
                <div class="testimonials-grid">
                    <div class="testimonial">
                        <p>"Cursor has completely transformed how I write code. The AI suggestions are incredibly accurate and save me hours every day."</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">SJ</div>
                            <div class="author-info">
                                <h4>Sarah Johnson</h4>
                                <span>Senior Frontend Engineer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>"The natural language coding feature is a game-changer. I can describe complex algorithms and Cursor implements them perfectly."</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">MK</div>
                            <div class="author-info">
                                <h4>Michael Kim</h4>
                                <span>Full Stack Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>"Finally, an AI coding tool that actually understands context. It's like having a senior developer pair programming with me 24/7."</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">AR</div>
                            <div class="author-info">
                                <h4>Alex Rivera</h4>
                                <span>Software Architect</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <h2>Ready to Code Smarter?</h2>
                <p>Join thousands of developers who are already building faster with AI-powered coding assistance.</p>
                <a href="#" class="btn-primary">Start Coding with Cursor</a>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Product</h3>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Download</a></li>
                        <li><a href="#">Changelog</a></li>
                        <li><a href="#">Roadmap</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">API Reference</a></li>
                        <li><a href="#">Examples</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
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
                        <li><a href="#">Report Bug</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Cursor. All rights reserved. Privacy Policy • Terms of Service</p>
            </div>
        </div>
    </footer>
</body>
</html>` }} />
  );
}