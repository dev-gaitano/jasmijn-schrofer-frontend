# Jasmijn Schrofer - Portfolio Website

## 1. Project Overview

### 1.1. Introduction

This project is a dynamic and visually engaging portfolio website, meticulously crafted to showcase the creative work of the acclaimed film director, Jasmijn Schrofer . The website serves as a digital canvas, reflecting the artistic vision and professional accomplishments of its subject. It is designed to be more than just a static display of work; it is an immersive experience that guides visitors through Jasmijn's filmography, providing a rich and interactive journey. The primary goal of this project is to create a professional online presence that not only highlights her films but also communicates her unique directorial style and narrative voice. The website is built with a modern tech stack, ensuring a responsive and high-performance user experience across all devices. It is intended for a diverse audience, including film industry professionals, potential collaborators, and the general public interested in her work. The project is open-source, inviting other developers to contribute and explore the codebase, which is structured for clarity and maintainability.

The development of this portfolio website was driven by the need for a platform that could effectively represent the artistic and professional identity of Jasmijn Schrofer. The design philosophy behind the project is to create a seamless and intuitive user experience that allows the content—the films and their stories—to take center stage. The website's architecture is built to be scalable, allowing for easy updates and the addition of new projects in the future. The use of a modern frontend framework like React ensures that the website is not only visually appealing but also highly interactive and performant. The project also emphasizes the importance of clean and well-documented code, making it an excellent showcase of the developer's skills for potential employers and collaborators. The repository is actively maintained, with a clear roadmap for future enhancements, including UI/UX improvements, database integration, and SEO optimization. This commitment to continuous improvement ensures that the website will remain a relevant and effective tool for Jasmijn's professional endeavors.

### 1.2. Key Features

The Jasmijn Schrofer portfolio website is packed with features designed to provide a rich and engaging user experience. The website is fully responsive, ensuring that it looks and functions perfectly on all devices, from desktops to mobile phones. This is achieved through the use of modern CSS frameworks and a mobile-first design approach. The website features a clean and intuitive navigation system, allowing visitors to easily explore different sections, including the home page, about page, work portfolio, news, and contact information. The work portfolio is a central feature, showcasing Jasmijn's films in a visually appealing and organized manner. Each film is presented with detailed information, including a synopsis, credits, and high-quality images. The website also includes a news section, where visitors can stay updated on Jasmijn's latest projects and achievements. The contact page provides a simple and effective way for potential collaborators and clients to get in touch.

In addition to these core features, the website also incorporates several advanced functionalities to enhance the user experience. The use of a modern frontend framework like React allows for the creation of a highly interactive and dynamic user interface. The website also utilizes a custom-built image management system, leveraging Cloudinary for efficient and optimized delivery of high-quality images. This ensures that the website loads quickly, even with a large number of high-resolution images. The project also includes a comprehensive set of custom hooks, which are used to manage various aspects of the application's state and behavior. These hooks include a mobile detection hook, a toast notification hook, and a hook to check if an element is on screen. The website is also built with a strong focus on accessibility, ensuring that it is usable by people with disabilities. This includes the use of semantic HTML, ARIA labels, and keyboard navigation support. The project is also well-documented, with a clear and concise README file that provides detailed instructions on how to set up and run the project locally.

### 1.3. Live Demo

The live demo of the Jasmijn Schrofer portfolio website is available at [https://jasmijnschrofer.vercel.app/](https://jasmijnschrofer.vercel.app/) . This live version provides a real-time, interactive experience of the website, allowing visitors to explore all its features and functionalities. The demo is hosted on Vercel, a cloud platform for static sites and Serverless Functions, which ensures high performance and reliability. The live demo is a direct reflection of the code in the GitHub repository, and it is automatically updated whenever new changes are pushed to the main branch. This ensures that the demo is always up-to-date with the latest features and improvements. The live demo is an essential part of the project, as it allows potential collaborators and employers to see the website in action and get a feel for its design and user experience.

The live demo is also a valuable tool for testing and debugging. It allows the developer to see how the website performs in a real-world environment and to identify any issues that may not be apparent in a local development environment. The demo is also a great way to gather feedback from users, which can be used to improve the website's design and functionality. The live demo is a testament to the developer's skills and commitment to creating high-quality, professional-grade web applications. It is a key component of the project's documentation, and it is an essential resource for anyone interested in learning more about the project. The live demo is a powerful tool for showcasing the project's capabilities and for attracting potential collaborators and employers.

## 2. Technologies Used

### 2.1. Frontend Framework

The Jasmijn Schrofer portfolio website is built using **React**, a popular and powerful JavaScript library for building user interfaces . React was chosen for its component-based architecture, which allows for the creation of reusable and modular UI components. This approach makes the codebase more organized, maintainable, and scalable. React's virtual DOM also provides a significant performance boost, as it minimizes the number of direct manipulations to the actual DOM. This results in a faster and more responsive user interface, which is crucial for a portfolio website that aims to provide a smooth and engaging user experience. The use of React also allows for the creation of a single-page application (SPA), which provides a more seamless and fluid user experience, as the page does not need to be reloaded every time the user navigates to a new section.

The project also uses **TypeScript**, a superset of JavaScript that adds static typing to the language . TypeScript was chosen for its ability to catch errors at compile time, rather than at runtime. This helps to improve the quality and reliability of the codebase, as it reduces the likelihood of bugs and other issues. TypeScript also provides better code documentation and makes it easier to refactor the codebase, as it provides a clear understanding of the data types that are being used. The use of TypeScript also makes the codebase more maintainable, as it is easier for other developers to understand and contribute to the project. The combination of React and TypeScript provides a powerful and robust foundation for building a high-quality and scalable web application.

### 2.2. Styling and UI

The styling of the Jasmijn Schrofer portfolio website is handled by **Tailwind CSS**, a utility-first CSS framework that provides a set of pre-defined classes for styling HTML elements . This approach allows for rapid prototyping and development, as developers can quickly apply styles directly in the HTML markup without having to write custom CSS. Tailwind CSS also promotes a consistent and maintainable design system, as it encourages the use of a predefined set of colors, fonts, and spacing. The framework is also highly customizable, allowing developers to extend the default configuration to match the specific design requirements of the project. The use of Tailwind CSS results in a clean, modern, and responsive design that is both visually appealing and easy to maintain.

The project also uses **PostCSS**, a tool for transforming CSS with JavaScript, to enhance the styling workflow . PostCSS is used to process the CSS generated by Tailwind CSS, applying various optimizations and transformations to improve performance and browser compatibility. The project also includes a number of other UI-related dependencies, such as `lucide-react` for icons and `clsx` and `tailwind-merge` for conditional class name management. These tools work together to create a polished and professional user interface that is both functional and aesthetically pleasing. The project also includes a `components.json` file, which is used to configure the Vite components and ensure that they are properly integrated with the rest of the project.

### 2.3. Build Tools and Development

The Jasmijn Schrofer portfolio website is built using **Vite**, a modern and fast build tool for web development . Vite is known for its lightning-fast development server and its optimized build process, which results in smaller and faster production bundles. Vite uses native ES modules in the browser, which allows for near-instantaneous hot module replacement (HMR) during development. This means that any changes made to the code are immediately reflected in the browser without requiring a full page reload, which significantly improves the developer experience. Vite also provides a rich set of features out of the box, including support for TypeScript, JSX, and CSS pre-processors.

The project also uses a number of other development tools to ensure code quality and consistency. **ESLint** is used for linting the JavaScript and TypeScript code, helping to catch potential errors and enforce a consistent coding style . The project also includes a `vite.config.ts` file, which is used to configure Vite and customize its behavior. This file includes configurations for the build process, the development server, and various plugins. The project also uses a `tsconfig.json` file to configure the TypeScript compiler, ensuring that the code is properly type-checked and compiled. These tools work together to create a robust and efficient development environment that is both productive and enjoyable to work with.

### 2.4. Asset Management

The Jasmijn Schrofer portfolio website uses **Cloudinary** for efficient and optimized management of its digital assets, particularly images . Cloudinary is a cloud-based service that provides a comprehensive set of tools for uploading, storing, managing, and delivering images and videos. By using Cloudinary, the project can take advantage of a number of powerful features, including on-the-fly image transformation, optimization, and delivery. This means that images can be automatically resized, cropped, and compressed to match the specific requirements of the website, without having to manually create and manage multiple versions of each image. This results in a significant reduction in bandwidth and storage costs, as well as a faster and more responsive user experience.

The project also includes a `public/` directory, which is used to store static assets that are not managed by Cloudinary . This includes files such as the `favicon.ico` and other small, static images. The `public/` directory is served directly by the web server, without any processing or optimization. This is a good place to store assets that are not likely to change frequently and do not require any special handling. The combination of Cloudinary for dynamic assets and the `public/` directory for static assets provides a flexible and efficient asset management strategy that is well-suited to the needs of the project. The project also includes a `.gitignore` file, which is used to exclude certain files and directories from the Git repository, such as the `node_modules/` directory and any sensitive configuration files.

## 3. Project Structure

### 3.1. Directory Hierarchy

The Jasmijn Schrofer portfolio website is organized using a clear and logical directory hierarchy, which is a common practice in modern web development. This structure is designed to make the codebase easy to navigate and understand, which is particularly important for a project that is intended to be a showcase of the developer's skills. The root directory of the project contains a number of important files, such as the `package.json` file, which contains the project's metadata and dependencies, and the `README.md` file, which contains the project's documentation. The root directory also contains a number of configuration files, such as the `vite.config.ts` file, which is used to configure the Vite build tool, and the `tailwind.config.ts` file, which is used to configure the Tailwind CSS framework.

The `src` directory is where the majority of the project's source code is located. This directory is further divided into a number of subdirectories, each of which has a specific purpose. The `components` directory contains all of the reusable UI components that are used throughout the website. The `pages` directory contains the components that are used to render the different pages of the website. The `hooks` directory contains all of the custom React hooks that are used in the project. The `lib` directory contains all of the utility functions and other shared code. The `types` directory contains all of the TypeScript type definitions that are used in the project.

The `public` directory is where all of the static assets are located, such as images, fonts, and other files that are not processed by the build tool. The `public` directory is also where the `index.html` file is located, which is the main HTML file that is served to the browser. The `public` directory is a good place to store any files that need to be accessed directly by the browser, without being processed by the build tool. The `public` directory is also a good place to store any files that are not part of the main application, such as a `robots.txt` file or a `sitemap.xml` file.

The project also includes a number of other directories and files, such as the `.git` directory, which is used by Git to track changes to the codebase, and the `.gitignore` file, which is used to tell Git which files and directories to ignore. The project also includes a `LICENSE` file, which contains the project's license information, and a `vercel.json` file, which is used to configure the Vercel deployment platform. The project is a showcase of modern web development techniques, with a focus on creating a high-quality, performant, and accessible website. The use of a clear and logical directory hierarchy is an important part of this, as it helps to ensure that the codebase is easy to navigate and understand.

### 3.2. Key Folders and Files

#### 3.2.1. `src/` - Source Code

The `src` directory is the heart of the Jasmijn Schrofer portfolio website, containing all of the source code for the application. This directory is organized in a modular and component-based fashion, which is a hallmark of modern React development. The `src` directory is further divided into several subdirectories, each with a specific purpose, to ensure a clean and maintainable codebase. The `components` directory is where all of the reusable UI components are stored. These components are the building blocks of the website, and they are designed to be self-contained and independent of each other. This modular approach makes it easy to reuse components throughout the website, which helps to reduce code duplication and improve maintainability. The `pages` directory contains the components that are used to render the different pages of the website. Each page is a separate component, which makes it easy to manage the routing and navigation of the website.

The `hooks` directory contains all of the custom React hooks that are used in the project. React hooks are a powerful feature of React that allows developers to use state and other React features in functional components. The use of custom hooks helps to keep the components clean and focused on their primary purpose, which is to render the UI. The `lib` directory contains all of the utility functions and other shared code that is used throughout the project. This includes things like helper functions, API clients, and other shared logic. The `types` directory contains all of the TypeScript type definitions that are used in the project. The use of TypeScript helps to improve the quality and reliability of the codebase, as it provides static typing and other features that help to catch errors at compile time.

The `src` directory also contains a number of other important files, such as the `App.tsx` file, which is the main application component, and the `main.tsx` file, which is the entry point for the application. The `App.tsx` file is responsible for rendering the main layout of the website, as well as handling the routing and navigation. The `main.tsx` file is responsible for rendering the `App.tsx` component to the DOM. The `src` directory also contains the `index.css` file, which is the main CSS file for the application. This file is used to define the global styles for the website, such as the font family, colors, and other base styles. The `src` directory is a well-organized and maintainable codebase, which is a testament to the developer's skills and expertise.

#### 3.2.2. `public/` - Static Assets

The `public` directory in the Jasmijn Schrofer portfolio website serves as the repository for all static assets that are not processed by the build tool. This includes a variety of files such as images, fonts, and other resources that need to be directly accessible by the browser. The `public` directory is a crucial part of the project's structure, as it ensures that these assets are served efficiently and without any unnecessary processing. The `index.html` file, which is the main HTML file for the application, is also located in the `public` directory. This file is the entry point for the browser, and it is responsible for loading the JavaScript and CSS files that are generated by the build tool. The `public` directory is also a good place to store any other files that need to be accessed directly by the browser, such as a `robots.txt` file or a `sitemap.xml` file.

The `public` directory is organized in a logical and intuitive way, with subdirectories for different types of assets. For example, there might be a `images` directory for storing all of the images that are used on the website, and a `fonts` directory for storing all of the custom fonts that are used on the website. This organized approach makes it easy to find and manage the static assets of the project. The `public` directory is also a good place to store any files that are not part of the main application, such as a `README.md` file or a `LICENSE` file. By keeping these assets separate from the main application code, the developer can ensure that the project is well-organized and easy to maintain.

#### 3.2.3. Configuration Files

The root of the Jasmijn Schrofer portfolio website contains a number of configuration files, which are used to configure the various tools and libraries used in the project. These files are essential for the proper functioning of the application, and they provide a centralized place to manage the project's settings. The `package.json` file is one of the most important configuration files, as it contains the project's metadata, such as its name, version, and description. It also lists all of the project's dependencies, which are the external libraries and packages that the project relies on. The `package-lock.json` file is a companion to the `package.json` file, and it is used to lock the versions of the project's dependencies, ensuring that the project is always built with the same versions of its dependencies.

The `vite.config.ts` file is used to configure Vite, the build tool that is used to build and serve the application. This file contains a number of settings that control the behavior of Vite, such as the entry point of the application, the output directory, and the plugins that are used. The `tsconfig.json` file is used to configure the TypeScript compiler, and it contains a number of settings that control how the TypeScript code is compiled to JavaScript. The `tailwind.config.ts` file is used to configure Tailwind CSS, the utility-first CSS framework that is used to style the application. This file contains a number of settings that control the behavior of Tailwind CSS, such as the colors, fonts, and spacing that are used. The `postcss.config.js` file is used to configure PostCSS, the tool that is used to process the CSS generated by Tailwind CSS. This file contains a number of settings that control the behavior of PostCSS, such as the plugins that are used.

## 4. Getting Started

### 4.1. Prerequisites

Before you can run the Jasmijn Schrofer portfolio website locally, you will need to have a few prerequisites installed on your machine. The most important prerequisite is **Node.js**, which is a JavaScript runtime that is used to run the application. You will also need to have **npm**, which is the package manager for Node.js, installed on your machine. npm is used to install the project's dependencies and to run the various scripts that are defined in the `package.json` file. It is recommended to use a version manager like **nvm** to install and manage Node.js and npm, as this will allow you to easily switch between different versions of Node.js and npm.

In addition to Node.js and npm, you will also need to have a **code editor** installed on your machine. A code editor is a program that is used to write and edit code. There are many different code editors available, but some of the most popular ones include Visual Studio Code, Sublime Text, and Atom. It is also recommended to have a basic understanding of **Git**, which is a version control system that is used to track changes to the codebase. Git is used to clone the repository, create branches, and push changes to the remote repository. If you are not familiar with Git, there are many resources available online that can help you get started.

### 4.2. Installation

#### 4.2.1. Clone the Repository

The first step in setting up the Jasmijn Schrofer portfolio website locally is to clone the repository from GitHub. This will create a local copy of the codebase on your machine, which you can then use to run the application. To clone the repository, you will need to have Git installed on your machine. Once you have Git installed, you can open a terminal or command prompt and navigate to the directory where you want to store the project. Then, you can run the following command to clone the repository:

```bash
git clone git@github.com:dev-gaitano/jasmijn-schrofer-frontend.git
```

This command will create a new directory called `jasmijn-schrofer-frontend` in your current directory, and it will download all of the files from the GitHub repository into this new directory. Once the repository has been cloned, you can navigate into the new directory by running the following command:

```bash
cd jasmijn-schrofer-frontend
```

You are now ready to install the project's dependencies and start the development server.

#### 4.2.2. Install Dependencies

Once you have cloned the repository, the next step is to install the project's dependencies. The dependencies are the external libraries and packages that the project relies on to function properly. The project's dependencies are listed in the `package.json` file, and they can be installed using npm. To install the dependencies, you will need to have npm installed on your machine. Once you have npm installed, you can open a terminal or command prompt and navigate to the root of the project directory. Then, you can run the following command to install the dependencies:

```bash
npm i --legacy-peer-deps
```

This command will read the `package.json` file and install all of the dependencies that are listed in it. The `--legacy-peer-deps` flag is used to tell npm to install the dependencies in a way that is compatible with older versions of npm. This is necessary because some of the project's dependencies may have peer dependencies that are not compatible with the latest version of npm. Once the dependencies have been installed, you are ready to start the development server.

#### 4.2.3. Start the Development Server

Once you have installed the project's dependencies, the final step is to start the development server. The development server is a local web server that is used to run the application during development. It provides a number of features that are useful for development, such as hot module replacement (HMR), which allows you to see your changes in the browser without having to reload the page. To start the development server, you can open a terminal or command prompt and navigate to the root of the project directory. Then, you can run the following command to start the development server:

```bash
npm run dev
```

This command will start the development server and open the application in your default web browser. The application will be available at `http://localhost:5173`. You can now start making changes to the code, and you will see your changes reflected in the browser in real-time. The development server will also provide you with a number of other useful features, such as error reporting and debugging tools.

## 5. Contributing

### 5.1. How to Contribute

The Jasmijn Schrofer portfolio website is an open-source project, and we welcome contributions from the community. If you would like to contribute to the project, there are a number of ways that you can get involved. You can start by exploring the codebase and familiarizing yourself with the project's structure and technologies. If you find a bug or have an idea for a new feature, you can open an issue on the GitHub repository. This will allow you to discuss your idea with the project's maintainers and other contributors. If you would like to contribute code, you can fork the repository, create a new branch for your changes, and then submit a pull request. This will allow the project's maintainers to review your changes and merge them into the main codebase.

Before you start contributing, it is a good idea to read the project's `CONTRIBUTING.md` file, if one exists. This file will provide you with more detailed information on how to contribute to the project, including the coding standards and the process for submitting pull requests. It is also a good idea to join the project's community, if one exists. This will allow you to connect with other contributors and get help and support when you need it. We are always looking for new contributors to help us improve the Jasmijn Schrofer portfolio website, and we would be happy to have you on board.

### 5.2. Roadmap

The Jasmijn Schrofer portfolio website is a continuously evolving project, and we have a number of plans for future enhancements. Our roadmap includes a number of key areas that we would like to focus on, including UI/UX improvements, database integration, an admin panel, and SEO optimization. We are always looking for new ideas and suggestions from the community, so if you have any ideas for how we can improve the website, please let us know.

The UI/UX improvements will focus on making the website more user-friendly and visually appealing. This may include changes to the layout, the color scheme, and the typography. The database integration will allow us to store and manage the website's content in a more efficient and scalable way. This will also allow us to create a more dynamic and interactive user experience. The admin panel will provide a simple and intuitive interface for managing the website's content, such as adding new films, updating the news section, and managing the contact form. The SEO optimization will focus on improving the website's visibility in search engine results, which will help to attract more visitors to the website.

## 6. License

### 6.1. License Information

The Jasmijn Schrofer portfolio website is distributed under the **MIT License** . The MIT License is a permissive open-source license that allows for the free use, modification, and distribution of the software. This means that you are free to use the code for any purpose, including commercial purposes, as long as you include the original copyright and license notice in any copies of the software. The MIT License is a popular choice for open-source projects, as it is simple, easy to understand, and provides a high degree of freedom for users and contributors.

The full text of the MIT License is included in the `LICENSE` file in the root of the repository. It is important to read and understand the terms of the license before using or contributing to the project. The license is designed to protect the original authors of the software from liability, while also providing a high degree of freedom for users and contributors. By using or contributing to the project, you are agreeing to the terms of the MIT License.

## 7. Contact

### 7.1. Developer Contact Information

If you have any questions or comments about the Jasmijn Schrofer portfolio website, you can contact the developer, **Eugene Gaitano**, at `dev.gaitano@gmail.com` . Eugene is a passionate and experienced developer who is always happy to help with any questions or issues that you may have. You can also connect with him on his professional social media profiles, which can be found on his personal website.

### 7.2. Project Link

The Jasmijn Schrofer portfolio website is hosted on GitHub, and the repository can be found at the following link:

- **GitHub Repository:** [https://github.com/dev-gaitano/jasmijn-schrofer-frontend](https://github.com/dev-gaitano/jasmijn-schrofer-frontend)

The live demo of the website can be found at the following link:

- **Live Demo:** [https://jasmijnschrofer.vercel.app/](https://jasmijnschrofer.vercel.app/)
