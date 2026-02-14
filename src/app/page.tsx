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
            font-size: 1.5rem;
            font-weight: bold;
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
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 0.7rem 1.5rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.2s;
        }

        .download-btn:hover {
            transform: translateY(-2px);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
            padding: 8rem 0 6rem;
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
            background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            font-size: 1.3rem;
            color: #ccc;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
            background: transparent;
            color: #ccc;
            padding: 1rem 2rem;
            border: 2px solid #333;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
        }

        .btn-secondary:hover {
            border-color: #667eea;
            color: #fff;
        }

        /* Features */
        .features {
            padding: 6rem 0;
            background: #111;
        }

        .features h2 {
            text-align: center;
            font-size: 2.5rem;
            color: #fff;
            margin-bottom: 3rem;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
            margin-top: 4rem;
        }

        .feature {
            background: #1a1a1a;
            padding: 2.5rem;
            border-radius: 12px;
            border: 1px solid #333;
            transition: all 0.3s;
        }

        .feature:hover {
            border-color: #667eea;
            transform: translateY(-5px);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .feature h3 {
            font-size: 1.4rem;
            color: #fff;
            margin-bottom: 1rem;
        }

        .feature p {
            color: #ccc;
            line-height: 1.6;
        }

        /* Demo */
        .demo {
            padding: 6rem 0;
            background: #000;
            text-align: center;
        }

        .demo h2 {
            font-size: 2.5rem;
            color: #fff;
            margin-bottom: 2rem;
        }

        .demo p {
            font-size: 1.2rem;
            color: #ccc;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .demo-video {
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 12px;
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
            aspect-ratio: 16/9;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 1.1rem;
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
            margin-bottom: 2rem;
        }

        .footer-section h3 {
            color: #fff;
            margin-bottom: 1rem;
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
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }

            .features-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
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
                <li><a href="#demo">Demo</a></li>
                <li><a href="#docs">Docs</a></li>
                <li><a href="#pricing">Pricing</a></li>
            </ul>
            <a href="#" class="download-btn">Download</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>The AI-First Code Editor</h1>
                    <p>Build software faster with AI that understands your codebase. Cursor brings the future of coding to your fingertips.</p>
                    <div class="cta-buttons">
                        <a href="#" class="btn-primary">Download for Free</a>
                        <a href="#" class="btn-secondary">Watch Demo</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="features" id="features">
            <div class="container">
                <h2>Supercharge Your Development</h2>
                <div class="features-grid">
                    <div class="feature">
                        <div class="feature-icon">🤖</div>
                        <h3>AI Code Completion</h3>
                        <p>Get intelligent code suggestions that understand your entire codebase. AI that learns from your patterns and coding style.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">💬</div>
                        <h3>Natural Language Editing</h3>
                        <p>Write code using natural language instructions. Tell Cursor what you want to build, and watch it generate the code.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🔍</div>
                        <h3>Codebase Understanding</h3>
                        <p>AI that comprehends your entire project structure, relationships between files, and can answer questions about your code.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">⚡</div>
                        <h3>Lightning Fast</h3>
                        <p>Built for performance with instant AI responses and seamless integration that doesn't slow you down.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🛠️</div>
                        <h3>Refactoring Assistant</h3>
                        <p>Intelligent refactoring suggestions and automated code improvements that maintain functionality while enhancing quality.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🔒</div>
                        <h3>Privacy First</h3>
                        <p>Your code stays private. Advanced AI capabilities without compromising on security or sending your code to external servers.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="demo" id="demo">
            <div class="container">
                <h2>See Cursor in Action</h2>
                <p>Watch how developers are building faster and smarter with AI-powered coding assistance</p>
                <div class="demo-video">
                    🎥 Interactive Demo Coming Soon
                </div>
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
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API Reference</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
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
                <p>&copy; 2024 Cursor. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>` }} />
  );
}