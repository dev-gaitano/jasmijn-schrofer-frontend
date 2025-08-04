<div align="center">
    <img src="./public/readme-banner.png" alt="banner_img">
</div>

<a id="readme-top"></a>

<br />
<br />

<!-- PROJECT SHIELDS -->
<div align="center">

  <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge" alt="Contributors">
  </a>
  <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend/network/members">
    <img src="https://img.shields.io/github/forks/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge" alt="Forks">
  </a>
  <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend/stargazers">
    <img src="https://img.shields.io/github/stars/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge" alt="Stars">
  </a>
  <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend/issues">
    <img src="https://img.shields.io/github/issues/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge" alt="Issues">
  </a>
  <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge" alt="License">
  </a>

</div>

<br />
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A dynamic and visually engaging portfolio website built using React, specifically designed to showcase the creative work of acclaimed film director Jasmijn Schrofer

### Built With

- React
- TypeScript
- TailwindCSS
- PostCSS
- Vite

### Project Structure

```
jasmijn-schrofer-frontend/
├── .git/                   # Git repository data
├── public/                 # Static files
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── assets/         # Assets like images and icons
│   │   ├── ui/             # UI components
│   │   └── ...             # Other components
│   ├── hooks/              # Custom hooks
│   │   ├── use-toast.ts    # Hook for toast notifications
│   │   ├── useMobile.ts    # Hook for mobile detection
│   │   └── useOnScreen.ts  # Hook to check if an element is on screen
│   ├── lib/                # Library files
│   │   └── utils.ts        # Utility functions
│   ├── pages/              # Page components
│   │   ├── About.tsx       # About page
│   │   ├── Contact.tsx     # Contact page
│   │   ├── InDevelopment.tsx # In Development page
│   │   ├── Index.tsx       # Home page
│   │   ├── News.tsx        # News page
│   │   ├── NotFound.tsx    # 404 Not Found page
│   │   └── Work.tsx        # Work page
│   ├── types/              # Type definitions
│   │   └── CountUp.ts      # Home page stylesheet
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global styles
│   ├── main.tsx            # Entry point for the application
│   └── vite-env.d.ts       # TypeScript environment definitions
├── .gitignore              # Git ignore rules
├── components.json         # Vite components configuration
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── package-lock.json       # Dependency lock file
├── package.json            # Package configuration
├── postcss.config.js       # PostCSS configuration
├── README.md               # Project documentation
├── LICENSE                 # Project license
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.app.json       # TypeScript application configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript Node configuration
└── vite.config.ts          # Vite configuration
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may approach setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To run you have to have the following requirements installed;

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

Clone this repo and push changes.

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone git@github.com:dev-gaitano/jasmijn-schrofer-frontend.git

# Step 2: Navigate to the project directory.
cd jasmijn-schrofer-frontend

# Step 3: Install the necessary dependencies.
npm i --legacy-peer-deps

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] UI/UX
- [ ] Database Integration
- [ ] Admin Panel
- [ ] SEO Optimization

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT license. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Eugene Gaitano - dev.gaitano@gmail.com

Project Link:
[Jasmijn Schrofer Portfolio](https://jasmijnschrofer.netlify.app/)

<br />
<br />

<div align="center">
    <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/dev-gaitano/jasmijn-schrofer-frontend/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
    &middot;
    <a href="#readme-top">back to top</a>
</div>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/dev-gaitano/jasmijn-schrofer-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/dev-gaitano/jasmijn-schrofer-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/dev-gaitano/jasmijn-schrofer-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/dev-gaitano/jasmijn-schrofer-frontend/issues
[license-shield]: https://img.shields.io/github/license/dev-gaitano/jasmijn-schrofer-frontend.svg?style=for-the-badge
[license-url]: https://github.com/dev-gaitano/jasmijn-schrofer-frontend/blob/main/LICENSE
