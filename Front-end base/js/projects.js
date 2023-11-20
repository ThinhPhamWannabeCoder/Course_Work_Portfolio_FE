
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

// Add an event listener for the resize event can sua lai sau
window.addEventListener('resize', handleWindowResize);
    
// document.addEventListener('DOMContentLoaded', function() {
//     fetch('http://localhost:8080/api/project/')
//         .then(res => {
//             if(res.ok){
//                 console.log("SUCCESS");
//                 console.log(res);
//                 return res.json();
//             }else{
//                 console.log("Not success");
                
//             }})
//         .then(data1 => {
//             console.log(data1);
//             return fetch('http://localhost:8080/api/topic/')})
//         .then(res => {
//             if(res.ok){
//                 console.log("SUCCESS");
//                 console.log(res);
//                 return res.json();
//             }else{
//                 console.log("Not success");
                
//             }})
//         .then(data1 => 
//             console.log(data1))
//         .catch(err =>{
//             console.log("Co loi tai day nay: ", err);
//         })
// });


// =========================================== Load intro ===========================================
// Lấy element

// intro_quote.innerText = data1.desc
// Fetch va gan dư liệu
// Query lay id cua topic type va place

const thisSitePlace = "projects"
document.addEventListener('DOMContentLoaded', function() {
    // Fetch lay thong tin topic
    let placeId = null;
    const intro = document.querySelector('.project__intro');
// const intro_heading = intro.querySelector('h1')
    const intro_quote = intro.querySelector('span i')
    const intro_desc = document.querySelector('.project__intro__desc');
    fetch(`http://localhost:8080/api/user/introPlace/name/${thisSitePlace}`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        },})
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                throw new Error('Failed to fetch IntroPlace');
            }
        })
        .then(data1 =>{
            placeId = data1.id;
            // Fetch all intro in project site
            return fetch(`http://localhost:8080/api/user/intro/place/${placeId}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
              });
        })
        .then(res =>{
            if(res.ok){
                return res.json();

            }
            else{
                throw new Error('Failed to fetchIntro');
            }
        })
        .then(data1 =>{
            data1.forEach(item=>{
                if(item.introTypeDTO.name == "introduction"){
                    intro_desc.innerText = item.desc;
                } else if(item.introTypeDTO.name == "quote"){
                    intro_quote.innerText = item.desc;
                }
            })

        })
        .catch(err => {
            console.log("Co loi tai qua trinh lay project ", err);
        });
    })
// FETCH THONG TIN PROJECT
document.addEventListener('DOMContentLoaded', function() {
    // Tạo holder đẻ gắn
    // Lay rieng id data va id engineer
    // Data
    const webProjectContainer = document.querySelector("#web .mySwiper .swiper-wrapper")
    const dataProjectContainer = document.querySelector("#data .smySwiper .swiper-wrapper")
    webProjectContainer.innerHTML = '';
    dataProjectContainer.innerHTML = '';
    
    fetch(`http://localhost:8080/api/user/project/`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                throw new Error('Failed to fetch Project');
            }
        })
        .then(projects=>{
            projects.forEach(data1 =>{
                const projectItem = document.createElement('div');
                projectItem.classList.add('project__item', 'swiper-slide', 'card');
                projectItem.innerHTML=`
                    <div class="card-content">
                        <h3>${data1.name}</h3>
                        <div class="project__description">
                            <span>${data1.desc}</span>
                        </div>
                        <ul class="project__languages">
                            ${data1.languages.map(language => `<li class="language__item"><i>${language}</i></li>`).join('')}
                        </ul>
                        <ul class="project__tools">
                            ${data1.tools.map(tool => `<li class="tool__item"><i>${tool}</i></li>`).join('')}
                        </ul>
                    </div>
                `;
                if(data1.domainName  == "WEB"){
                    webProjectContainer.appendChild(projectItem);
                }
                else if(data1.domainName == "DE"){
                    dataProjectContainer.appendChild(projectItem)
                }
            })
            initSwiper();
        })
})
// =========================================== Load Project ===========================================
// Lấy elemtn
// header
// Desc
// 






























// Lam slider
function initSwiper() {
    var swiper1 = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 700,
        pagination: {
          el: ".pagi1",
          clickable: true,
        },
        navigation: {
          nextEl: ".next1",
          prevEl: ".prev1",
        },
      });
    var swiper2 = new Swiper(".smySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 700,
      pagination: {
        el: ".pagi2",
        clickable: true,
      },
      navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
      },
    });    
  }
