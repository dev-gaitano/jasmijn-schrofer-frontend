<!DOCTYPE html><html lang="en"><head>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Jasmijn Schrofer Portfolio - Technical Documentation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'serif': ['Crimson Text', 'serif'],
                        'sans': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'primary': '#2c3e50',
                        'secondary': '#34495e',
                        'accent': '#e74c3c',
                        'neutral': '#95a5a6',
                        'base': '#ecf0f1',
                    }
                }
            }
        }
    </script>
    <style>
        .gradient-overlay {
            background: linear-gradient(135deg, rgba(44, 62, 80, 0.9) 0%, rgba(52, 73, 94, 0.7) 100%);
        }
        .project-structure-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }
        .toc-fixed {
            position: fixed;
            top: 2rem;
            left: 2rem;
            width: 280px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 50;
            max-height: calc(100vh - 4rem);
            overflow-y: auto;
        }
        .content-wrapper {
            margin-left: 320px;
            padding: 2rem;
        }
        @media (max-width: 1024px) {
            .toc-fixed {
                display: none;
            }
            .content-wrapper {
                margin-left: 0;
            }
        }
        .image-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin: 2rem 0;
        }
        @media (min-width: 768px) {
            .image-grid {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
        }
        .bento-card {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            border: 1px solid #f1f5f9;
        }
        .tech-badge {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border: 1px solid #cbd5e1;
            border-radius: 20px;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            font-weight: 500;
            color: #334155;
        }
        .citation-link {
            color: #3b82f6;
            text-decoration: none;
            font-size: 0.875rem;
            vertical-align: super;
            margin-left: 2px;
        }
        .citation-link:hover {
            text-decoration: underline;
        }
    </style>

  </head>

  <body class="bg-gray-50 font-sans">
    <!-- Table of Contents -->
    <nav class="toc-fixed">
      <h3 class="font-serif text-lg font-semibold text-primary mb-4">Contents</h3>
      <ul class="space-y-2 text-sm">
        <li>
          <a href="#hero" class="text-gray-600 hover:text-primary transition-colors">Project Overview</a>
        </li>
        <li>
          <a href="#technologies" class="text-gray-600 hover:text-primary transition-colors">Technologies Used</a>
        </li>
        <li>
          <a href="#structure" class="text-gray-600 hover:text-primary transition-colors">Project Structure</a>
        </li>
        <li>
          <a href="#getting-started" class="text-gray-600 hover:text-primary transition-colors">Getting Started</a>
        </li>
        <li>
          <a href="#contributing" class="text-gray-600 hover:text-primary transition-colors">Contributing</a>
        </li>
        <li>
          <a href="#license" class="text-gray-600 hover:text-primary transition-colors">License</a>
        </li>
        <li>
          <a href="#contact" class="text-gray-600 hover:text-primary transition-colors">Contact</a>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section id="hero" class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div class="absolute inset-0">
          <img src="https://kimi-web-img.moonshot.cn/img/millo.co/e151fac7dd3611e196e14173b57b2352e0f0e519.jpg" alt="Film director&#39;s portfolio website interface showing creative projects" class="w-full h-full object-cover opacity-30" size="wallpaper" aspect="wide" style="photo" query="film director portfolio website interface" referrerpolicy="no-referrer" data-modified="1" data-score="0.00"/>
          <div class="gradient-overlay absolute inset-0"></div>
        </div>

        <div class="relative z-10 px-4 md:px-8 py-16">
          <!-- Bento Grid Layout -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <!-- Main Title Card -->
            <div class="lg:col-span-2 bento-card">
              <div class="space-y-6">
                <div class="inline-flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <i class="fas fa-film text-accent"></i>
                  <span>Director Portfolio</span>
                </div>
                <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Jasmijn Schrofer
                  <em class="block text-2xl md:text-3xl lg:text-4xl text-accent font-normal mt-2">
                    Portfolio Documentation
                  </em>
                </h1>
                <p class="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  A comprehensive technical guide to the React-based portfolio website showcasing the acclaimed film director&#39;s creative work through modern web development practices.
                </p>
              </div>
            </div>

            <!-- Key Stats Card -->
            <div class="bento-card">
              <h3 class="font-serif text-xl font-semibold text-primary mb-4">Project Highlights</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Framework</span>
                  <span class="tech-badge">React + TypeScript</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Styling</span>
                  <span class="tech-badge">Tailwind CSS</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Build Tool</span>
                  <span class="tech-badge">Vite</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Status</span>
                  <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Live</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Live Preview Section -->
          <div class="mt-16 max-w-7xl mx-auto">
            <div class="bento-card">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="font-serif text-2xl font-semibold text-primary mb-4">Live Demonstration</h3>
                  <p class="text-gray-600 mb-6">
                    Experience the portfolio in action with our production deployment hosted on Vercel.
                    The live demo showcases all features and functionalities in a real-world environment.
                  </p>
                  <a href="https://jasmijnschrofer.vercel.app/" target="_blank" class="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
                    <i class="fas fa-external-link-alt mr-2"></i>
                    Visit Live Demo
                  </a>
                </div>
                <div class="relative">
                  <img src="https://kimi-web-img.moonshot.cn/img/placeholder-0620/%E5%9B%BE%E7%89%8719.png" alt="Jasmijn Schrofer portfolio website homepage interface" class="w-full rounded-lg shadow-lg" size="large" aspect="wide" style="photo" query="Jasmijn Schrofer portfolio website homepage" referrerpolicy="no-referrer" data-modified="1" data-score="0.00"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section id="technologies" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
          <div class="text-center mb-16">
            <h2 class="font-serif text-4xl font-bold text-primary mb-4">Technologies Used</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              A modern tech stack carefully selected for performance, scalability, and developer experience
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Frontend Framework -->
            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fab fa-react text-3xl text-blue-500 mr-3"></i>
                <h3 class="font-serif text-xl font-semibold text-primary">Frontend Framework</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Built with React and TypeScript for type-safe, component-based development with excellent tooling support.
                <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend" class="citation-link">[105]</a>
                <a href="https://jasmijnschrofer.com/about/" class="citation-link">[107]</a>
              </p>
              <div class="space-y-2">
                <span class="tech-badge">React 18</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">Functional Components</span>
              </div>
            </div>

            <!-- Styling -->
            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-palette text-3xl text-purple-500 mr-3"></i>
                <h3 class="font-serif text-xl font-semibold text-primary">Styling &amp; UI</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Tailwind CSS for utility-first styling with PostCSS processing and custom theming capabilities.
                <a href="https://jasmijnschrofer.com/about/" class="citation-link">[111]</a>
                <a href="https://dokumen.pub/the-palgrave-handbook-of-methods-for-media-policy-research-3030160645-9783030160647-3030160653-9783030160654.html" class="citation-link">[109]</a>
              </p>
              <div class="space-y-2">
                <span class="tech-badge">Tailwind CSS</span>
                <span class="tech-badge">PostCSS</span>
                <span class="tech-badge">Custom Themes</span>
              </div>
            </div>

            <!-- Build Tools -->
            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-tools text-3xl text-orange-500 mr-3"></i>
                <h3 class="font-serif text-xl font-semibold text-primary">Build &amp; Development</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Vite for lightning-fast development server and optimized production builds with modern tooling.
                <a href="https://repub.eur.nl/pub/22420/101201_Grotenhuis,%20Brechtje%20Aleid.pdf" class="citation-link">[112]</a>
                <a href="https://ricerca.uniba.it/retrieve/dd9e0c66-6be1-1e9c-e053-3a05fe0a45ef/dh2018_boa_estratti.pdf" class="citation-link">[69]</a>
              </p>
              <div class="space-y-2">
                <span class="tech-badge">Vite</span>
                <span class="tech-badge">ESLint</span>
                <span class="tech-badge">Prettier</span>
              </div>
            </div>

            <!-- Asset Management -->
            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-cloud text-3xl text-blue-400 mr-3"></i>
                <h3 class="font-serif text-xl font-semibold text-primary">Asset Management</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Cloudinary integration for optimized image delivery with automatic transformations and CDN caching.
                <a href="https://ricerca.uniba.it/retrieve/dd9e0c66-6be1-1e9c-e053-3a05fe0a45ef/dh2018_boa_estratti.pdf" class="citation-link">[110]</a>
              </p>
              <div class="space-y-2">
                <span class="tech-badge">Cloudinary</span>
                <span class="tech-badge">Image Optimization</span>
                <span class="tech-badge">CDN Delivery</span>
              </div>
            </div>

            <!-- Hosting -->
            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-server text-3xl text-green-500 mr-3"></i>
                <h3 class="font-serif text-xl font-semibold text-primary">Hosting &amp; Deployment</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Vercel platform for seamless deployment with automatic SSL, global CDN, and serverless functions.
                <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend" class="citation-link">[104]</a>
              </p>
              <div class="space-y-2">
                <span class="tech-badge">Vercel</span>
                <span class="tech-badge">Serverless</span>
                <span class="tech-badge">Global CDN</span>
              </div>
            </div>

            <!-- Additional Tools -->
            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-puzzle-piece text-3xl text-indigo-500 mr-3"></i>
                <h3 class="font-serif text-xl font-semibold text-primary">Additional Tools</h3>
              </div>
              <p class="text-gray-600 mb-4">
                Comprehensive development environment with modern tooling for optimal developer experience.
              </p>
              <div class="space-y-2">
                <span class="tech-badge">Git Version Control</span>
                <span class="tech-badge">npm Package Manager</span>
                <span class="tech-badge">Modern ES Modules</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Structure Section -->
      <section id="structure" class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
          <div class="text-center mb-16">
            <h2 class="font-serif text-4xl font-bold text-primary mb-4">Project Structure</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Organized codebase following modern React application architecture patterns
            </p>
          </div>

          <!-- Directory Structure Visualization -->
          <div class="bento-card mb-12">
            <h3 class="font-serif text-2xl font-semibold text-primary mb-6">Directory Hierarchy</h3>
            <div class="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
              <pre><code>jasmijn-schrofer-frontend/

├── <span class="text-blue-400">public/</span> # Static assets
│ ├── index.html # Main HTML entry
│ ├── favicon.ico # Site icon
│ └── assets/ # Static resources
├── <span class="text-yellow-400">src/</span> # Source code
│ ├── <span class="text-purple-400">components/</span> # Reusable UI components
│ ├── <span class="text-pink-400">pages/</span> # Page components
│ ├── <span class="text-green-400">hooks/</span> # Custom React hooks
│ ├── <span class="text-blue-400">lib/</span> # Utility functions
│ ├── <span class="text-orange-400">types/</span> # TypeScript definitions
│ ├── App.tsx # Main application
│ └── main.tsx # Entry point
├── <span class="text-red-400">.vscode/</span> # Editor settings
├── <span class="text-gray-400">node_modules/</span> # Dependencies
├── package.json # Project metadata
├── tsconfig.json # TypeScript config
├── tailwind.config.ts # Tailwind config
├── vite.config.ts # Vite config
└── README.md # Documentation</code></pre>
</div>
</div>

          <!-- Key Folders Explanation -->
          <div class="project-structure-grid">
            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-cube text-2xl text-purple-500 mr-3"></i>
                <h4 class="font-serif text-lg font-semibold text-primary">Components</h4>
              </div>
              <p class="text-gray-600 text-sm mb-3">
                Reusable UI components following atomic design principles. Each component is self-contained with proper TypeScript typing and documentation.
              </p>
              <div class="text-xs text-gray-500">
                Examples: Navigation, Film Cards, Contact Forms
              </div>
            </div>

            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-file-alt text-2xl text-pink-500 mr-3"></i>
                <h4 class="font-serif text-lg font-semibold text-primary">Pages</h4>
              </div>
              <p class="text-gray-600 text-sm mb-3">
                Page-level components that define the main sections of the website. Each page handles its own data fetching and state management.
              </p>
              <div class="text-xs text-gray-500">
                Examples: Home, About, Portfolio, Contact
              </div>
            </div>

            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-hook text-2xl text-green-500 mr-3"></i>
                <h4 class="font-serif text-lg font-semibold text-primary">Custom Hooks</h4>
              </div>
              <p class="text-gray-600 text-sm mb-3">
                Shared logic encapsulated in reusable hooks. Includes mobile detection, toast notifications, and scroll behavior utilities.
              </p>
              <div class="text-xs text-gray-500">
                Examples: useMobile, useToast, useOnScreen
              </div>
            </div>

            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-cogs text-2xl text-blue-500 mr-3"></i>
                <h4 class="font-serif text-lg font-semibold text-primary">Utility Library</h4>
              </div>
              <p class="text-gray-600 text-sm mb-3">
                Shared utility functions and helper methods. Includes API clients, formatting functions, and validation utilities.
              </p>
              <div class="text-xs text-gray-500">
                Examples: API Client, Form Validation, Date Formatting
              </div>
            </div>

            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-code text-2xl text-orange-500 mr-3"></i>
                <h4 class="font-serif text-lg font-semibold text-primary">Type Definitions</h4>
              </div>
              <p class="text-gray-600 text-sm mb-3">
                Comprehensive TypeScript interfaces and types. Ensures type safety across the entire application with proper documentation.
              </p>
              <div class="text-xs text-gray-500">
                Examples: Film, Project, ContactForm interfaces
              </div>
            </div>

            <div class="bento-card">
              <div class="flex items-center mb-4">
                <i class="fas fa-folder text-2xl text-gray-500 mr-3"></i>
                <h4 class="font-serif text-lg font-semibold text-primary">Static Assets</h4>
              </div>
              <p class="text-gray-600 text-sm mb-3">
                Public directory for static files that don&#39;t require processing. Includes favicon, fonts, and other direct assets.
              </p>
              <div class="text-xs text-gray-500">
                Examples: Favicon, Font Files, Static Images
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Getting Started Section -->
      <section id="getting-started" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
          <div class="text-center mb-16">
            <h2 class="font-serif text-4xl font-bold text-primary mb-4">Getting Started</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick setup guide to get the development environment running in minutes
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Prerequisites -->
            <div class="bento-card">
              <h3 class="font-serif text-2xl font-semibold text-primary mb-6">Prerequisites</h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <i class="fab fa-node-js text-2xl text-green-500 mt-1"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Node.js &amp; npm</h4>
                    <p class="text-sm text-gray-600">JavaScript runtime and package manager for dependency management</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <i class="fas fa-code text-2xl text-blue-500 mt-1"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Code Editor</h4>
                    <p class="text-sm text-gray-600">VS Code or any modern IDE with TypeScript support</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <i class="fab fa-git-alt text-2xl text-orange-500 mt-1"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Git</h4>
                    <p class="text-sm text-gray-600">Version control system for cloning and contributing</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Installation Steps -->
            <div class="bento-card">
              <h3 class="font-serif text-2xl font-semibold text-primary mb-6">Installation Process</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">1. Clone Repository</h4>
                  <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                    <code>git clone git@github.com:dev-gaitano/jasmijn-schrofer-frontend.git

cd jasmijn-schrofer-frontend</code>
</div>
</div>

                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">2. Install Dependencies</h4>
                  <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                    <code>npm i --legacy-peer-deps</code>
                  </div>
                  <p class="text-sm text-gray-600 mt-2">
                    The
                    <code>--legacy-peer-deps</code> flag ensures compatibility with all peer dependencies
                  </p>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">3. Start Development Server</h4>
                  <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                    <code>npm run dev</code>
                  </div>
                  <p class="text-sm text-gray-600 mt-2">
                    Application will be available at
                    <code>http://localhost:5173</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Development Commands -->
          <div class="mt-12 bento-card">
            <h3 class="font-serif text-2xl font-semibold text-primary mb-6">Development Commands</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-2">Development</h4>
                <code class="text-sm text-gray-700">npm run dev</code>
                <p class="text-xs text-gray-600 mt-1">Starts Vite development server with HMR</p>
              </div>

              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-2">Production Build</h4>
                <code class="text-sm text-gray-700">npm run build</code>
                <p class="text-xs text-gray-600 mt-1">Creates optimized production bundle</p>
              </div>

              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-2">Linting</h4>
                <code class="text-sm text-gray-700">npm run lint</code>
                <p class="text-xs text-gray-600 mt-1">Runs ESLint for code quality checks</p>
              </div>

              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-2">Formatting</h4>
                <code class="text-sm text-gray-700">npm run format</code>
                <p class="text-xs text-gray-600 mt-1">Applies Prettier formatting to code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contributing Section -->
      <section id="contributing" class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
          <div class="text-center mb-16">
            <h2 class="font-serif text-4xl font-bold text-primary mb-4">Contributing</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Open-source project welcoming community contributions, bug reports, and feature suggestions
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contribution Guidelines -->
            <div class="bento-card">
              <h3 class="font-serif text-2xl font-semibold text-primary mb-6">How to Contribute</h3>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Explore the Codebase</h4>
                    <p class="text-sm text-gray-600">Familiarize yourself with the project structure, technologies, and coding standards</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Open an Issue</h4>
                    <p class="text-sm text-gray-600">Report bugs or suggest new features through GitHub issues with detailed descriptions</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Create a Fork</h4>
                    <p class="text-sm text-gray-600">Fork the repository and create a new branch for your changes</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Submit Pull Request</h4>
                    <p class="text-sm text-gray-600">Create a well-documented PR with clear description of changes and testing details</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Development Roadmap -->
            <div class="bento-card">
              <h3 class="font-serif text-2xl font-semibold text-primary mb-6">Development Roadmap</h3>
              <div class="space-y-4">
                <div class="border-l-4 border-green-500 pl-4">
                  <h4 class="font-semibold text-gray-800">UI/UX Improvements</h4>
                  <p class="text-sm text-gray-600">Enhanced animations, better mobile experience, and refined visual hierarchy</p>
                </div>

                <div class="border-l-4 border-blue-500 pl-4">
                  <h4 class="font-semibold text-gray-800">Database Integration</h4>
                  <p class="text-sm text-gray-600">Content management system with dynamic data fetching and caching</p>
                </div>

                <div class="border-l-4 border-purple-500 pl-4">
                  <h4 class="font-semibold text-gray-800">Admin Panel</h4>
                  <p class="text-sm text-gray-600">Content management interface for easy updates and media management</p>
                </div>

                <div class="border-l-4 border-orange-500 pl-4">
                  <h4 class="font-semibold text-gray-800">SEO Optimization</h4>
                  <p class="text-sm text-gray-600">Improved search engine visibility with structured data and performance enhancements</p>
                </div>

                <div class="border-l-4 border-red-500 pl-4">
                  <h4 class="font-semibold text-gray-800">Analytics Integration</h4>
                  <p class="text-sm text-gray-600">Visitor tracking and performance monitoring for data-driven improvements</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contribution Benefits -->
          <div class="mt-12 bento-card">
            <h3 class="font-serif text-2xl font-semibold text-primary mb-6">Why Contribute?</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <i class="fas fa-users text-3xl text-blue-500 mb-3"></i>
                <h4 class="font-semibold text-gray-800 mb-2">Community</h4>
                <p class="text-sm text-gray-600">Join a growing community of developers and creative professionals</p>
              </div>

              <div class="text-center">
                <i class="fas fa-code text-3xl text-green-500 mb-3"></i>
                <h4 class="font-semibold text-gray-800 mb-2">Skills</h4>
                <p class="text-sm text-gray-600">Enhance your portfolio with modern web development experience</p>
              </div>

              <div class="text-center">
                <i class="fas fa-network-wired text-3xl text-purple-500 mb-3"></i>
                <h4 class="font-semibold text-gray-800 mb-2">Networking</h4>
                <p class="text-sm text-gray-600">Connect with industry professionals and potential collaborators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- License Section -->
      <section id="license" class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 md:px-8">
          <div class="text-center mb-16">
            <h2 class="font-serif text-4xl font-bold text-primary mb-4">License</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Open-source licensing terms for the project
            </p>
          </div>

          <div class="bento-card">
            <div class="flex items-center mb-6">
              <i class="fab fa-github text-3xl text-gray-700 mr-4"></i>
              <div>
                <h3 class="font-serif text-2xl font-semibold text-primary">MIT License</h3>
                <p class="text-gray-600">Permissive open-source license</p>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 mb-6">
              <p class="text-gray-700 mb-4">
                The Jasmijn Schrofer portfolio website is distributed under the MIT License, a permissive open-source license that allows for the free use, modification, and distribution of the software for any purpose, including commercial use.
                <a href="https://ricerca.uniba.it/retrieve/dd9e0c66-6be1-1e9c-e053-3a05fe0a45ef/dh2018_boa_estratti.pdf" class="citation-link">[60]</a>
              </p>

              <h4 class="font-semibold text-gray-800 mb-3">Key Permissions:</h4>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                <li>Commercial use</li>
                <li>Modification and distribution</li>
                <li>Private use</li>
                <li>Sublicensing</li>
              </ul>

              <h4 class="font-semibold text-gray-800 mb-3">Conditions:</h4>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Include original copyright notice</li>
                <li>Include license copy in all distributions</li>
                <li>No warranty or liability</li>
              </ul>
            </div>

            <div class="text-center">
              <p class="text-sm text-gray-600 mb-4">
                By using or contributing to this project, you agree to the terms of the MIT License.
              </p>
              <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend/blob/main/LICENSE" target="_blank" class="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
                <i class="fas fa-external-link-alt mr-2"></i>
                View Full License
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 md:px-8">
          <div class="text-center mb-16">
            <h2 class="font-serif text-4xl font-bold text-primary mb-4">Contact</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with the developer for questions, collaborations, or project inquiries
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Developer Contact -->
            <div class="bento-card">
              <h3 class="font-serif text-2xl font-semibold text-primary mb-6">Developer Information</h3>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <i class="fas fa-user text-2xl text-blue-500 mt-1"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Eugene Gaitano</h4>
                    <p class="text-sm text-gray-600">Full-Stack Developer &amp; Project Maintainer</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <i class="fas fa-envelope text-2xl text-green-500 mt-1"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:dev.gaitano@gmail.com" class="text-sm text-blue-600 hover:underline">
                      dev.gaitano@gmail.com
                    </a>
                    <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend" class="citation-link">[115]</a>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <i class="fab fa-github text-2xl text-gray-700 mt-1"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">GitHub</h4>
                    <a href="https://github.com/dev-gaitano" target="_blank" class="text-sm text-blue-600 hover:underline">
                      github.com/dev-gaitano
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Links -->
            <div class="bento-card">
              <h3 class="font-serif text-2xl font-semibold text-primary mb-6">Project Links</h3>
              <div class="space-y-4">
                <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend" target="_blank" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div class="flex items-center space-x-3">
                    <i class="fab fa-github text-xl text-gray-700"></i>
                    <div>
                      <h4 class="font-semibold text-gray-800">GitHub Repository</h4>
                      <p class="text-sm text-gray-600">Source code and documentation</p>
                    </div>
                  </div>
                  <i class="fas fa-external-link-alt text-gray-400"></i>
                </a>
                <a href="https://jasmijnschrofer.vercel.app/" target="_blank" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div class="flex items-center space-x-3">
                    <i class="fas fa-globe text-xl text-blue-500"></i>
                    <div>
                      <h4 class="font-semibold text-gray-800">Live Demo</h4>
                      <p class="text-sm text-gray-600">Production deployment on Vercel</p>
                    </div>
                  </div>
                  <i class="fas fa-external-link-alt text-gray-400"></i>
                </a>
              </div>

              <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 class="font-semibold text-blue-800 mb-2">Response Time</h4>
                <p class="text-sm text-blue-700">
                  The developer typically responds to inquiries within 24-48 hours.
                  For urgent matters, please mention it in your email subject.
                </p>
              </div>
            </div>
          </div>

          <!-- Collaboration Opportunities -->
          <div class="mt-12 bento-card">
            <h3 class="font-serif text-2xl font-semibold text-primary mb-6">Collaboration Opportunities</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center p-4">
                <i class="fas fa-code text-3xl text-blue-500 mb-3"></i>
                <h4 class="font-semibold text-gray-800 mb-2">Code Contributions</h4>
                <p class="text-sm text-gray-600">Open to pull requests for bug fixes, features, and improvements</p>
              </div>

              <div class="text-center p-4">
                <i class="fas fa-palette text-3xl text-purple-500 mb-3"></i>
                <h4 class="font-semibold text-gray-800 mb-2">Design Collaboration</h4>
                <p class="text-sm text-gray-600">UI/UX designers welcome for design system improvements</p>
              </div>

              <div class="text-center p-4">
                <i class="fas fa-bug text-3xl text-red-500 mb-3"></i>
                <h4 class="font-semibold text-gray-800 mb-2">Testing &amp; QA</h4>
                <p class="text-sm text-gray-600">Help identify bugs and improve overall quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Highlight active section in TOC
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.toc-fixed a[href^="#"]');

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-primary', 'font-medium');
                link.classList.add('text-gray-600');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.remove('text-gray-600');
                    link.classList.add('text-primary', 'font-medium');
                }
            });
        });
    </script>

</body></html>
