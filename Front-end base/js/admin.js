// SHOW MENU
const navMenu = document.querySelector(".nav__menu"),
    navToggle = document.querySelector("#nav-toggle")



if(navMenu){
    function handleWindowResize() {
        if (window.innerWidth <= 768) {
            // When the window width is 762px or less, add the "show" class to the menu element
            if(navMenu.classList.contains("show__menu")){
                navMenu.classList.remove("show__menu");
                navMenu.classList.add("close__menu");
                // navMenu.classList.add("show__menu");
            }
            else if(navMenu.classList.contains("close__menu")){

            }
            else{
                navMenu.classList.add("close__menu");
            }
        } else {
            // Remove the "show" class if the window is larger than 762px
            navMenu.classList.remove("show__menu");
            if(navMenu.classList.contains("close__menu")){
                navMenu.classList.remove("close__menu");
                // navMenu.classList.add("show__menu");
            }
        }
    }
    
    // Add an event listener for the resize event
    window.addEventListener('resize', handleWindowResize);

    navToggle.addEventListener('click', ()=>{
        if(navMenu.classList.contains("show__menu")){

            navMenu.classList.remove("show__menu");
            navMenu.classList.add("close__menu");

        }
        else{
            
            navMenu.classList.remove("close__menu");
            navMenu.classList.add("show__menu");
        }
    })
}

function handleWindowResize() {
    if (window.innerWidth <= 762) {
        // When the window width is 762px or less, add the "show" class to the menu element
        
    } else {
        // Remove the "show" class if the window is larger than 762px
        console.log("huhu")
    }
}

// Add an event listener for the resize event
window.addEventListener('resize', handleWindowResize);

// =========NAV PANEL EVENT LISTENER=======
// goi bien
const formHolder  = document.querySelector('.form__control');
const subNav = formHolder.querySelector('.sub__nav')

const subNavHolder = formHolder.querySelector('.sub__nav .sub__nav__holder')
const controlView = formHolder.querySelector('.control__view')
const guide = controlView.querySelector('.guide')
// xu ly event listner
document.querySelector('.nav__panel__holder').addEventListener('click', function(event) {
    if (event.target.matches('#introNav')) {
      // Handle click on element with ID 'intro'
      // Your code here for 'Intro'

      subNavHolder.innerHTML=`
        <li class="sub__nav__item" >
            <div id ="intro">Intro</div></li>
        <li class="sub__nav__item" >
            <div id ="introPlace">Intro Place</div></li>
        <li class="sub__nav__item" >
            <div id ="introType">Intro Type</div></li>
        <li class="sub__nav__item" >
            <div id ="introTopic">Intro Topic</div></li>
        `
        guide.innerHTML=`
        <p>Click an option <b>above</b> to continue</div>
        `;
    } 
    else if (event.target.matches('#aboutNav')) {
      // Handle click on element with ID 'about'
      // Your code here for 'About'

      subNavHolder.innerHTML=`
        <li class="sub__nav__item" >
            <div id="about">About</div></li>
        `
      
      guide.innerHTML=`
      <p>Click an option <b>above</b> to continue</p>
      `;    
    } 
    else if (event.target.matches('#projectNav')) {
      // Handle click on element with ID 'project'
      // Your code here for 'Project'

      subNavHolder.innerHTML=`
        <li class="sub__nav__item" >
            <div id ="domain">Domain</div></li>
        <li class="sub__nav__item" >
            <div id ="topic">Topic</div></li>
        <li class="sub__nav__item" >
            <div id ="project">Project</div></li>
        
        `
      guide.innerHTML=`
      <p>Click an option <b>above</b> to continue</p>
      `;    
    } 
    else if (event.target.matches('#skillNav')) {
      // Handle click on element with ID 'skill'
      // Your code here for 'Skill'

      subNavHolder.innerHTML=`
        <li class="sub__nav__item" >
            <div id ="skillType">Skill Type</div></li>
        <li class="sub__nav__item" >
            <div id ="skill">Skill</div></li>
        `
      guide.innerHTML=`
      <p>Click an option <b>above</b> to continue</p>
      `;    
    }
    else if (event.target.matches('#userNav')) {
        // Handle click on element with ID 'skill'
        // Your code here for 'Skill'
        subNavHolder.innerHTML=`
          <li class="sub__nav__item" >
              <div id ="user">User</div></li>

          `
        guide.innerHTML=`
        <p>Click an option <b>above</b> to continue</p
        `;    
      }
  });
// ======== SUB NAV EVENT LISTENER ========

document.querySelector('.sub__nav__holder').addEventListener('click', function(event) {
    const button = document.querySelectorAll('.sub__nav__item div')
    button.forEach(button =>{
        button.style.backgroundColor='var(--red-button-color)';
    })
    // intro
    if (event.target.matches('#intro')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';

    } 
    else if (event.target.matches('#introPlace')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
      
    } 
    else if (event.target.matches('#introType')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
    } 
    else if (event.target.matches('#introTopic')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
    }

    // About
    else if (event.target.matches('#about')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
    }
    // Project
    else if (event.target.matches('#domain')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
    }
    else if (event.target.matches('#topic')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
    }
    else if (event.target.matches('#project')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
    }
    // Skill
    else if (event.target.matches('#skillType')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
    }
    else if (event.target.matches('#skill')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
    }
    // User
    else if (event.target.matches('#user')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
    }
  });
// Update se luon co hoat dong reload lai
// Delete
// Add