<div align="center">
    <img src="./public/readme-banner.png" alt="banner_img">
</div>

<a id="readme-top"></a>

<br />
<br />

<!-- PROJECT SHIELDS -->
<div align="center">

  <a href="https://github.com/dev-gaitano/firebase-notes-I/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="Contributors">
  </a>
  <a href="https://github.com/dev-gaitano/firebase-notes-I/network/members">
    <img src="https://img.shields.io/github/forks/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="Forks">
  </a>
  <a href="https://github.com/dev-gaitano/firebase-notes-I/stargazers">
    <img src="https://img.shields.io/github/stars/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="Stars">
  </a>
  <a href="https://github.com/dev-gaitano/firebase-notes-I/issues">
    <img src="https://img.shields.io/github/issues/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="Issues">
  </a>
  <a href="https://github.com/dev-gaitano/firebase-notes-I/LICENSE">
    <img src="https://img.shields.io/github/license/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="License">
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
- Tailwind CSS
- Vite

### Project Structure

```
jasmijn-schrofer-frontend/
├── .git/                   # Git repository data
├── public/                 # Static files
├── src/                    # Firebase Hosting static files
│   ├── components/         # Stylesheets
│   │   ├── assets/         # Main stylesheet 
│   │   ├── ui/             # Main stylesheet 
│   │   ├── About.tsx       # Main stylesheet 
│   │   ├── BlurText.tsx    # Main stylesheet 
│   │   ├── CallToAction.tsx # Main stylesheet 
│   │   ├── ContactForm.tsx # Main stylesheet 
│   │   ├── CountUp.tsx     # Main stylesheet 
│   │   ├── Featured.tsx    # Main stylesheet 
│   │   ├── Films.tsx       # Main stylesheet 
│   │   ├── Footer.tsx      # Main stylesheet 
│   │   ├── Hero.tsx        # Main stylesheet 
│   │   ├── ImageSlider.tsx # Main stylesheet 
│   │   ├── NavBar.tsx      # Main stylesheet 
│   │   ├── News.tsx        # Main stylesheet 
│   │   └── WorkHero.tsx    # Home page stylesheet
│   ├── hooks/              # Stylesheets
│   │   ├── use-mobile.tsx  # Main stylesheet 
│   │   ├── use-toast.ts    # Main stylesheet 
│   │   └── useIsOnScreen.tsx # Home page stylesheet
│   ├── lib/                # Stylesheets
│   │   └── utils.ts        # Home page stylesheet
│   ├── pages/              # Stylesheets
│   │   ├── About.tsx       # Main stylesheet 
│   │   ├── Contact.tsx     # Main stylesheet 
│   │   ├── InDevelopment.tsx # Main stylesheet 
│   │   ├── Index.tsx       # Main stylesheet 
│   │   ├── News.tsx        # Main stylesheet 
│   │   ├── NotFound.tsx    # Main stylesheet 
│   │   └── Work.tsx        # Home page stylesheet
│   ├── types/              # Stylesheets
│   │   └── CountUp.ts      # Home page stylesheet
│   ├── App.css             # Stylesheets
│   ├── App.tsx             # Stylesheets
│   ├── index.css           # Stylesheets
│   ├── main.tsx            # Stylesheets
│   └── vite-env.d.ts       # Main HTML file
├── .gitignore              # Git ignore rules
├── components.json         # Realtime Database security rules
├── eslint.config.js        # Firebase project configuration
├── index.html              # Firestore index definitions
├── package-lock.json       # Root dependency lock file
├── package.json            # Root package configuration
├── postcss.config.js       # Firestore security rules
├── README.md               # Project documentation
├── LICENSE                 # Project license
├── tailwind.config.ts      # Remote Config template
├── tsconfig.app.json       # Project license
├── tsconfig.json           # Project license
├── tsconfig.node.json      # Project license
└── vite.config.ts          # Cloud Storage security rules
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may approach setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To run you have to have the following requirements installed;

* Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

Clone this repo and push changes. 

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone git@github.com:dev-gaitano/jasmijn-schrofer-frontend.git

# Step 2: Navigate to the project directory.
cd jasmijn-schrofer-frontend

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Home Page
- [ ] Work Page
- [ ] News Page
- [ ] About Page
- [ ] Contact Page
    - [x] Firestore Database
    - [x] User Authentication

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br />
<br />

<div align="center">
    <a href="https://github.com/dev-gaitano/firebase-notes-I /issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/dev-gaitano/firebase-notes-I/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[contributors-url]: https://github.com/dev-gaitano/firebase-notes-I/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[forks-url]: https://github.com/dev-gaitano/firebase-notes-I/network/members
[stars-shield]: https://img.shields.io/github/stars/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[stars-url]: https://github.com/dev-gaitano/firebase-notes-I/stargazers
[issues-shield]: https://img.shields.io/github/issues/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[issues-url]: https://github.com/dev-gaitano/firebase-notes-I/issues
[license-shield]: https://img.shields.io/github/license/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[license-url]: https://github.com/dev-gaitano/firebase-notes-I/blob/master/LICENSE
