const Projects = [
    {
      title: "Calculator",
      description: "A Digital Calculator is been built under the name of Chiru's Calculator",
      image_src: "/images/Calculator.png",
      image_alt: "Chiru's Calculator",
      github: "https://github.com/fed26sto-fundamentals/calculator-Chiru1985",
    },
    {
      title: "Dashboard",
      description: "A Page-Where all the Previous Projects are been mentioned in a short note",
      image_src: "/Images/Dashboard.png",
      image_alt: "DashBoard",
      github: "https://github.com/fed26sto-fundamentals/admin-dashboard-Chiru1985",
    },
    {
      title: "Etch-A-Sketch",
      description: "Created a pretty neat toy to flex your DOM manipulation skills",
      image_src: "/Images/Etch-a-Sketch.png",
      image_alt: "Etch-a-Sketch",
      github: "https://github.com/fed26sto-fundamentals/etch-a-sketch-Chiru1985",
    },
    {
      title: "Library",
      description: "Library App - Books are going to be stored with the Status in an array",
      image_src: "/Images/Library.png",
      image_alt: "Library",
      github: "https://github.com/fed26sto-fundamentals/library-Chiru1985",
    },
    {
      title: "Tic-Tac-Toe",
      description:"We Made a Tic Tac Toe game that can be played in the browser",
      image_src: "/Images/TICTACTOE.png",
      image_alt: "Tic-Tac-Toe",
      github: "https://github.com/fed26sto-fundamentals/tic-tac-toe-Chiru1985",
    },
    {
      title: "Weather APP",
      description: "A Restaurant page using HTML, CSS and JS showing the restaurant's menu and information",
      image_src: "/Images/Weather.png",
      image_alt: "Weather App",
      github: "https://github.com/fed26sto-fundamentals/weather-app-Chiru1985",
    },
    
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
  
    // add projects
  
    Projects.forEach((project) => {
      // create elements
      let projectCard = document.createElement("div");
      let projectTitle = document.createElement("h3");
      let projectImage = document.createElement("img");
      let projectDescription = document.createElement("p");
      let svgWrapper = document.createElement("a");
      let github = document.createElement("span");
      let projectGithub = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      projectGithub.setAttribute("viewBox", "0 0 24 24");
      let newElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      newElement.setAttribute(
        "d",
        "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
      ); //Set path's data
      projectGithub.appendChild(newElement);
      projectGithub.classList.add("projectGithub");
      github.textContent = "Github";
      svgWrapper.append(projectGithub, github);
  
      projectTitle.textContent = project.title;
      projectImage.src = project.image_src;
      projectImage.alt = project.image_alt;
      projectDescription.textContent = project.description;
      svgWrapper.href = project.github;
      svgWrapper.target = "_blank";
  
      projectCard.append(
        projectTitle,
        projectImage,
        projectDescription,
        svgWrapper
      );
  
      projectCard.classList.add("projectCard");
      setTimeout(() => {
        projectCard.style.opacity = 1;
      }),
        1000;
  
      container.append(projectCard);
    });
  });