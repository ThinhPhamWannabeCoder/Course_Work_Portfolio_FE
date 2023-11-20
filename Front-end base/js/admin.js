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
    const button = document.querySelectorAll('.nav__panel__item div')
    button.forEach(button =>{
        button.style.backgroundColor='var(--red-button-color)';
    })
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
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        controlView.innerHTML=`
                <div class="guide">
                    <p><p>Click an option <b>above</b> to continue</p>
                    </div>
        `
    } 
    else if (event.target.matches('#aboutNav')) {
      // Handle click on element with ID 'about'
      // Your code here for 'About'

      subNavHolder.innerHTML=`
        <li class="sub__nav__item" >
            <div id="about">About</div></li>
        `
      
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        controlView.innerHTML=`
                <div class="guide">
                    <p><p>Click an option <b>above</b> to continue</p>
                    </div>
        ` 
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
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        controlView.innerHTML=`
                <div class="guide">
                    <p><p>Click an option <b>above</b> to continue</p>
                    </div>
        ` 
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
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        controlView.innerHTML=`
                <div class="guide">
                    <p><p>Click an option <b>above</b> to continue</p>
                    </div>
        `  
    }
    else if (event.target.matches('#userNav')) {
        // Handle click on element with ID 'skill'
        // Your code here for 'Skill'
        subNavHolder.innerHTML=`
          <li class="sub__nav__item" >
              <div id ="user">User</div></li>
          `
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        controlView.innerHTML=`
                <div class="guide">
                    <p><p>Click an option <b>above</b> to continue</p>
                    </div>
        `

      }
  });
// ======== SUB NAV EVENT LISTENER ========
// Phải thêm button add và button delete

document.querySelector('.sub__nav__holder').addEventListener('click', function(event) {
    const button = document.querySelectorAll('.sub__nav__item div')
    button.forEach(button =>{
        button.style.backgroundColor='var(--red-button-color)';
    })
    controlView .innerHTML = `
                <div class="data__view">
                    
                </div>
                <div class="add">

                </div>
                `
    const tableHolder = document.querySelector('.data__view')
    const addButton = document.querySelector ('.add')
    // intro
    if (event.target.matches('#intro')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
       
        (function tableGen() {
            fetch(`http://localhost:8080/api/user/intro/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    else{
                        throw new Error("Failed to fetch intro API")
                    }
                })
                .then(intros=>{
                    // const container = document.createElement('div');
                
                    tableHolder.innerHTML = `
                      <h2>Intro table</h2>
                      <div class ="table__container">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Intro Type</th>
                              <th>Intro Place</th>
                              <th>Intro Topic</th>
                              <th>Description</th>
                              <th>Update</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody id="tableBody">
                            <!-- Table body will be dynamically generated -->
                          </tbody>
                        </table>
                    </div
                    `;
                    const tbody = document.querySelector('#tableBody');
                    let count = 0;
                    intros.forEach(intro =>{
                        // Day du lieu vao row thoi
                        let rowHTML = `
                        <td>${++count}</td>
                        <td id = "type">${intro.introTypeDTO.name}</td>
                        <td id = "place">${intro.introPlaceDTO.name}</td>
                        <td id = "topic">${intro.introTopicDTO.name}</td>
                        <td id = "desc" >${intro.desc}</td>
                        <td>
                            <button type="button" class="update__button">Update</button>
                        </td>
                        <td>
                            <button type="button" class="delete__button">Delete</button>
                        </td>
                        `;
                        tbody.innerHTML += `<tr data-id = "${intro.id}">${rowHTML}</tr>`;
                    });

                    initDelete('http://localhost:8080/api/admin/intro',tableGen);
                    //  Xử lý update
                    document.querySelectorAll('.update__button').forEach( button => 
                        {button.addEventListener('click', function(event){
                        const id = event.target.closest('tr').getAttribute('data-id');
                        // const place =  event.target.closest('tr').querySelector("#place");
                        // console.log(place)
                        controlView.innerHTML=`
                                <div class="form">
                                    <div class="container">
                                        <h2>Intro Form</h2>
                                        <form id="introEntityForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="userId" class="form-label">User ID</label>
                                                    <input type="text" class="form-control" id="userId" name="userId" value="">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="topicId" class="form-label">Topic ID</label>
                                                    <input type="text" class="form-control" id="topicId" name="topicId" value="">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="typeId" class="form-label">Type ID</label>
                                                    <input type="text" class="form-control" id="typeId" name="typeId" value="">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="placeId" class="form-label">Place ID</label>
                                                    <input type="text" class="form-control" id="placeId" name="placeId" value="">
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="desc" class="form-label">Description</label>
                                                    <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary update-button">Update</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;

                            // nao dc thi lam tiep
                            // document.querySelector(".update-button").addEventListener('click', function(event){
                            // const data ={
                            //     userId: document.getElementById('userId').value,
                            //     topicId: document.getElementById('topicId').value,
                            //     typeId: document.getElementById('typeId').value,
                            //     placeId: document.getElementById('placeId').value,
                            //     desc: document.getElementById('desc').value
                            // }
                            // console.log(data);
                            // })
                        })

                    })







                    // initUpdate('http://localhost:8080/api/admin/intro',tableGen);
                    addButton.innerHTML = `
                        <button type="button" class="add__button" id="button">Add</button>
                    `
                    document.querySelector(".add__button").addEventListener('click', function(){
                        controlView.innerHTML=`
                                <div class="form">
                                    <div class="container">
                                        <h2>Intro Form</h2>
                                        <form id="introEntityForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="userId" class="form-label">User ID</label>
                                                    <input type="text" class="form-control" id="userId" name="userId" value="">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="topicId" class="form-label">Topic ID</label>
                                                    <input type="text" class="form-control" id="topicId" name="topicId" value="">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="typeId" class="form-label">Type ID</label>
                                                    <input type="text" class="form-control" id="typeId" name="typeId" value="">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="placeId" class="form-label">Place ID</label>
                                                    <input type="text" class="form-control" id="placeId" name="placeId" value="">
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="desc" class="form-label">Description</label>
                                                    <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary save-button">Submit</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;
                    })

                })
                .catch(err=>{
                    console.log("Failed to gen table in Intro", err);
                })
            }());
    } 
    else if (event.target.matches('#introPlace')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        (function tableGen() {
            fetch(`http://localhost:8080/api/user/introPlace/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    else{
                        throw new Error("Failed to fetch intro API")
                    }
                })
                .then(intros=>{
                    // const container = document.createElement('div');
                
                    tableHolder.innerHTML = `
                      <h2>Intro place table</h2>
                      <div class ="table__container">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Intro Place</th>
                              <th>Update</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody id="tableBody">
                            <!-- Table body will be dynamically generated -->
                          </tbody>
                        </table>
                    </div
                    `;
                    const tbody = document.querySelector('#tableBody');
                    let count = 0;
                    intros.forEach(intro =>{
                        // Day du lieu vao row thoi
                        let rowHTML = `
                        <td>${++count}</td>
                        <td id = "place">${intro.name}</td>
                        <td>
                            <button type="button" class="update__button">Update</button>
                        </td>
                        <td>
                            <button type="button" class="delete__button">Delete</button>
                        </td>
                        `;
                        tbody.innerHTML += `<tr data-id = "${intro.id}">${rowHTML}</tr>`;
                    });

                    initDelete('http://localhost:8080/api/admin/introPlace',tableGen);
                    document.querySelectorAll('.update__button').forEach( button => 
                        {button.addEventListener('click', function(event){
                        const id = event.target.closest('tr').getAttribute('data-id');
                        // const place =  event.target.closest('tr').querySelector("#place");
                        // console.log(place)
                        controlView.innerHTML=`
                                <div class="form">
                                    <div class="container">
                                        <h2>Intro Place Form</h2>
                                        <form id="introEntityForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="placeId" class="form-label">Place Id</label>
                                                    <input type="text" class="form-control" id="placeId" name="placeId" value="">
                                                </div>
                                                
                                                <div class="col-md-12 mb-3">
                                                    <label for="placeName" class="form-label">Place name</label>
                                                    <input type="text" class="form-control" id="placeName" name="placeName" value="">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary update-button">Update</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;


                        })

                    })
                    // Form update
                    addButton.innerHTML = `
                        <button type="button" class="add__button" id="button">Add</button>
                    `
                    document.querySelector(".add__button").addEventListener('click', function(){
                        controlView.innerHTML=`
                        <div class="form">
                        <div class="container">
                            <h2>Intro Place Form</h2>
                            <form id="introEntityForm">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="placeId" class="form-label">PlaceId</label>
                                        <input type="text" class="form-control" id="placeId" name="placeId" value="">
                                    </div>
                                    
                                    <div class="col-md-12 mb-3">
                                        <label for="placeName" class="form-label">Description</label>
                                        <input type="text" class="form-control" id="placeName" name="placeName" value="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="button" class="btn btn-primary save-button">submit</button>
                                        <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                    </div>
                                </div>
                            </form>
                        </div>  
                    </div>
                            `;
                    })
                })
                .catch(err=>{
                    console.log("Failed to gen table in Intro", err);
                })
            }());
      
    } 
    else if (event.target.matches('#introType')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        (function tableGen() {
            fetch(`http://localhost:8080/api/user/introType/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    else{
                        throw new Error("Failed to fetch intro API")
                    }
                })
                .then(intros=>{
                    // const container = document.createElement('div');
                
                    tableHolder.innerHTML = `
                      <h2>Intro place table</h2>
                      <div class ="table__container">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Intro Type</th>
                              <th>Update</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody id="tableBody">
                            <!-- Table body will be dynamically generated -->
                          </tbody>
                        </table>
                    </div
                    `;
                    const tbody = document.querySelector('#tableBody');
                    let count = 0;
                    intros.forEach(intro =>{
                        // Day du lieu vao row thoi
                        let rowHTML = `
                        <td>${++count}</td>
                        <td id = "type">${intro.name}</td>
                        <td>
                            <button type="button" class="update__button">Update</button>
                        </td>
                        <td>
                            <button type="button" class="delete__button">Delete</button>
                        </td>
                        `;
                        tbody.innerHTML += `<tr data-id = "${intro.id}">${rowHTML}</tr>`;
                    });

                    initDelete('http://localhost:8080/api/admin/introType/',tableGen);
                    document.querySelectorAll('.update__button').forEach( button => 
                        {button.addEventListener('click', function(event){
                        const id = event.target.closest('tr').getAttribute('data-id');
                        // const place =  event.target.closest('tr').querySelector("#place");
                        // console.log(place)
                        controlView.innerHTML=`
                                <div class="form">
                                    <div class="container">
                                        <h2>Intro Type Form</h2>
                                        <form id="introEntityForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="typeId" class="form-label">Type Id</label>
                                                    <input type="text" class="form-control" id="typeId" name="typeId" value="">
                                                </div>
                                                
                                                <div class="col-md-12 mb-3">
                                                    <label for="typeName" class="form-label">Type name</label>
                                                    <input type="text" class="form-control" id="placeName" name="typeName" value="">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary update-button">Update</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;


                        })

                    })
                    // Form update
                    addButton.innerHTML = `
                        <button type="button" class="add__button" id="button">Add</button>
                    `
                    document.querySelector(".add__button").addEventListener('click', function(){
                        controlView.innerHTML=`
                        <div class="form">
                        <div class="container">
                            <h2>Intro Type Form</h2>
                            <form id="introEntityForm">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="typeId" class="form-label">Type Id</label>
                                        <input type="text" class="form-control" id="placeId" name="typeId" value="">
                                    </div>
                                    
                                    <div class="col-md-12 mb-3">
                                        <label for="typeName" class="form-label">Type name</label>
                                        <input type="text" class="form-control" id="placeName" name="typeName" value="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="button" class="btn btn-primary save-button">submit</button>
                                        <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                    </div>
                                </div>
                            </form>
                        </div>  
                    </div>
                            `;
                    })
                })
                .catch(err=>{
                    console.log("Failed to gen table in Intro", err);
                })
            }());
    } 
    else if (event.target.matches('#introTopic')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        (function tableGen() {
            fetch(`http://localhost:8080/api/user/introTopic/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    else{
                        throw new Error("Failed to fetch intro API")
                    }
                })
                .then(intros=>{
                    // const container = document.createElement('div');
                
                    tableHolder.innerHTML = `
                      <h2>Intro place table</h2>
                      <div class ="table__container">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Intro Topic</th>
                              <th>Update</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody id="tableBody">
                            <!-- Table body will be dynamically generated -->
                          </tbody>
                        </table>
                    </div
                    `;
                    const tbody = document.querySelector('#tableBody');
                    let count = 0;
                    intros.forEach(intro =>{
                        // Day du lieu vao row thoi
                        let rowHTML = `
                        <td>${++count}</td>
                        <td id = "topic">${intro.name}</td>
                        <td>
                            <button type="button" class="update__button">Update</button>
                        </td>
                        <td>
                            <button type="button" class="delete__button">Delete</button>
                        </td>
                        `;
                        tbody.innerHTML += `<tr data-id = "${intro.id}">${rowHTML}</tr>`;
                    });

                    initDelete('http://localhost:8080/api/admin/introTopic/',tableGen);
                    document.querySelectorAll('.update__button').forEach( button => 
                        {button.addEventListener('click', function(event){
                        const id = event.target.closest('tr').getAttribute('data-id');
                        // const place =  event.target.closest('tr').querySelector("#place");
                        // console.log(place)
                        controlView.innerHTML=`
                                <div class="form">
                                    <div class="container">
                                        <h2>Intro Topic Form</h2>
                                        <form id="introEntityForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="topicId" class="form-label">Topic Id</label>
                                                    <input type="text" class="form-control" id="topicId" name="topicId" value="">
                                                </div>
                                                
                                                <div class="col-md-12 mb-3">
                                                    <label for="topicName" class="form-label">Topic name</label>
                                                    <input type="text" class="form-control" id="topicName" name="topicName" value="">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary update-button">Update</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;


                        })

                    })
                    // Form update
                    addButton.innerHTML = `
                        <button type="button" class="add__button" id="button">Add</button>
                    `
                    document.querySelector(".add__button").addEventListener('click', function(){
                        controlView.innerHTML=`
                        <div class="form">
                            <div class="container">
                                <h2>Intro Topic Form</h2>
                                <form id="introEntityForm">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="topicId" class="form-label">Topic Id</label>
                                            <input type="text" class="form-control" id="topicId" name="topicId" value="">
                                        </div>
                                        
                                        <div class="col-md-12 mb-3">
                                            <label for="topicName" class="form-label">Topic name</label>
                                            <input type="text" class="form-control" id="topicName" name="topicName" value="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button type="button" class="btn btn-primary save-button">Submit</button>
                                            <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                        </div>
                                    </div>
                                </form>
                            </div>  
                        </div>
                            `;
                    })
                })
                .catch(err=>{
                    console.log("Failed to gen table in Intro", err);
                })
            }());
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
        (function tableGen() {
            fetch(`http://localhost:8080/api/user/skillType/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    else{
                        throw new Error("Failed to fetch intro API")
                    }
                })
                .then(intros=>{
                    // const container = document.createElement('div');
                
                    tableHolder.innerHTML = `
                      <h2>Skill type table</h2>
                      <div class ="table__container">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Skill Type</th>
                              <th>Description</th>
                              <th>Update</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody id="tableBody">
                            <!-- Table body will be dynamically generated -->
                          </tbody>
                        </table>
                    </div
                    `;
                    const tbody = document.querySelector('#tableBody');
                    let count = 0;
                    intros.forEach(intro =>{
                        // Day du lieu vao row thoi
                        let rowHTML = `
                        <td>${++count}</td>
                        <td id = "skillType">${intro.name}</td>
                        <td id = "skillTypeDesc">${intro.desc}</td>
                        <td>
                            <button type="button" class="update__button">Update</button>
                        </td>
                        <td>
                            <button type="button" class="delete__button">Delete</button>
                        </td>
                        `;
                        tbody.innerHTML += `<tr data-id = "${intro.id}">${rowHTML}</tr>`;
                    });

                    initDelete('http://localhost:8080/api/admin/introType/',tableGen);

                    document.querySelectorAll('.update__button').forEach( button => 
                        {button.addEventListener('click', function(event){
                        const id = event.target.closest('tr').getAttribute('data-id');
                        // const place =  event.target.closest('tr').querySelector("#place");
                        // console.log(place)
                        controlView.innerHTML=`
                                <div class="form">
                                    <div class="container">
                                        <h2>Skill Type Form</h2>
                                        <form id="introEntityForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="skillTypeId" class="form-label">Skill type Id</label>
                                                    <input type="text" class="form-control" id="skillTypeId" name="skillTypeId" value="">
                                                </div>
                                                
                                                <div class="col-md-12 mb-3">
                                                    <label for="skillTypeName" class="form-label">Skill type name</label>
                                                    <input type="text" class="form-control" id="skillTypeName" name="skillTypeName" value="">
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="desc" class="form-label">Description</label>
                                                    <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary update-button">Update</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;


                        })

                    })
                    // Form update
                    addButton.innerHTML = `
                        <button type="button" class="add__button" id="button">Add</button>
                    `
                    document.querySelector(".add__button").addEventListener('click', function(){
                        controlView.innerHTML=`
                        <div class="form">
                                    <div class="container">
                                        <h2>Skill Type Form</h2>
                                        <form id="introEntityForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="skillTypeId" class="form-label">Skill type Id</label>
                                                    <input type="text" class="form-control" id="skillTypeId" name="skillTypeId" value="">
                                                </div>
                                                
                                                <div class="col-md-12 mb-3">
                                                    <label for="skillTypeName" class="form-label">Skill type name</label>
                                                    <input type="text" class="form-control" id="skillTypeName" name="skillTypeName" value="">
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="desc" class="form-label">Description</label>
                                                    <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary save-button">Submit</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;
                    })
                })
                .catch(err=>{
                    console.log("Failed to gen table in Intro", err);
                })
            }());
    }
    else if (event.target.matches('#skill')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        (function tableGen() {
            fetch(`http://localhost:8080/api/user/skill/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    else{
                        throw new Error("Failed to fetch intro API")
                    }
                })
                .then(intros=>{
                    // const container = document.createElement('div');
                
                    tableHolder.innerHTML = `
                      <h2>Skill table</h2>
                      <div class ="table__container">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Skill Type Id</th>
                              <th>Skill</th>
                              <th>Description</th>
                              <th>Update</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody id="tableBody">
                            <!-- Table body will be dynamically generated -->
                          </tbody>
                        </table>
                    </div
                    `;
                    const tbody = document.querySelector('#tableBody');
                    let count = 0;
                    intros.forEach(intro =>{
                        // Day du lieu vao row thoi
                        let rowHTML = `
                        <td>${++count}</td>
                        <td id = "skillTypeId">${1}</td>
                        <td id = "skill">${intro.name}</td>
                        <td id = "skillDesc">${intro.desc}</td>
                        <td>
                            <button type="button" class="update__button">Update</button>
                        </td>
                        <td>
                            <button type="button" class="delete__button">Delete</button>
                        </td>
                        `;
                        tbody.innerHTML += `<tr data-id = "${intro.id}">${rowHTML}</tr>`;
                    });

                    initDelete('http://localhost:8080/api/admin/skill/',tableGen);

                    document.querySelectorAll('.update__button').forEach( button => 
                        {button.addEventListener('click', function(event){
                        const id = event.target.closest('tr').getAttribute('data-id');
                        // const place =  event.target.closest('tr').querySelector("#place");
                        // console.log(place)
                        controlView.innerHTML=`
                                <div class="form">
                                    <div class="container">
                                        <h2>Skill Form</h2>
                                        <form id="SkillForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="skillId" class="form-label">Skill Id</label>
                                                    <input type="text" class="form-control" id="skillTypeId" name="skillTypeId" value="">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="skillTypeId" class="form-label">Skill type Id</label>
                                                    <input type="text" class="form-control" id="skillTypeId" name="skillTypeId" value="">
                                                </div>
                                                
                                                <div class="col-md-12 mb-3">
                                                    <label for="skillName" class="form-label">Skill name</label>
                                                    <input type="text" class="form-control" id="skillName" name="skillName" value="">
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="desc" class="form-label">Description</label>
                                                    <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary update-button">Update</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;


                        })

                    })
                    // Form update
                    addButton.innerHTML = `
                        <button type="button" class="add__button" id="button">Add</button>
                    `
                    document.querySelector(".add__button").addEventListener('click', function(){
                        controlView.innerHTML=`
                        <div class="form">
                        <div class="container">
                            <h2>Skill Form</h2>
                            <form id="SkillForm">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="skillId" class="form-label">Skill Id</label>
                                        <input type="text" class="form-control" id="skillTypeId" name="skillTypeId" value="">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="skillTypeId" class="form-label">Skill type Id</label>
                                        <input type="text" class="form-control" id="skillTypeId" name="skillTypeId" value="">
                                    </div>
                                    
                                    <div class="col-md-12 mb-3">
                                        <label for="skillName" class="form-label">Skill name</label>
                                        <input type="text" class="form-control" id="skillName" name="skillName" value="">
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="desc" class="form-label">Description</label>
                                        <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="button" class="btn btn-primary update-button">Update</button>
                                        <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                    </div>
                                </div>
                            </form>
                        </div>  
                    </div>
                            `;
                    })
                })
                .catch(err=>{
                    console.log("Failed to gen table in Intro", err);
                })
            }());
    }   
    // User
    else if (event.target.matches('#user')) {
        event.target.style.backgroundColor = 'var(--red-button-color-focus)';
        (function tableGen() {
            fetch(`http://localhost:8080/api/admin/user/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    else{
                        throw new Error("Failed to fetch intro API")
                    }
                })
                .then(intros=>{
                    // const container = document.createElement('div');
                
                    tableHolder.innerHTML = `
                      <h2>User table</h2>
                      <div class ="table__container">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Update</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody id="tableBody">
                            <!-- Table body will be dynamically generated -->
                          </tbody>
                        </table>
                    </div
                    `;
                    const tbody = document.querySelector('#tableBody');
                    let count = 0;
                    intros.forEach(intro =>{
                        // Day du lieu vao row thoi
                        let rowHTML = `
                        <td>${++count}</td>
                        <td id = "userName">${intro.fullName}</td>
                        <td id = "userEmail">${intro.email}</td>
                        <td>
                            <button type="button" class="update__button">Update</button>
                        </td>
                        <td>
                            <button type="button" class="delete__button">Delete</button>
                        </td>
                        `;
                        tbody.innerHTML += `<tr data-id = "${intro.id}">${rowHTML}</tr>`;
                    });

                    // initDelete('http://localhost:8080/api/admin/introType/',tableGen);

                    document.querySelectorAll('.update__button').forEach( button => 
                        {button.addEventListener('click', function(event){
                        const id = event.target.closest('tr').getAttribute('data-id');
                        // const place =  event.target.closest('tr').querySelector("#place");
                        // console.log(place)
                        controlView.innerHTML=`
                                <div class="form">
                                    <div class="container">
                                        <h2>User Form</h2>
                                        <form id="introEntityForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="userId" class="form-label">User Id</label>
                                                    <input type="text" class="form-control" id="userId" name="userId" value="">
                                                </div>
                                                
                                                <div class="col-md-12 mb-3">
                                                    <label for="userName" class="form-label">User name</label>
                                                    <input type="text" class="form-control" id="userName" name="userName" value="">
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="userEmail" class="form-label">User email</label>
                                                    <input type="text" class="form-control" id="userEmail" name="userEmail" value="">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary update-button">Update</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;


                        })

                    })
                    // Form update
                    addButton.innerHTML = `
                        <button type="button" class="add__button" id="button">Add</button>
                    `
                    document.querySelector(".add__button").addEventListener('click', function(){
                        controlView.innerHTML=`
                            <div class="form">
                                    <div class="container">
                                        <h2>User Form</h2>
                                        <form id="introEntityForm">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="userId" class="form-label">User Id</label>
                                                    <input type="text" class="form-control" id="userId" name="userId" value="">
                                                </div>
                                                
                                                <div class="col-md-12 mb-3">
                                                    <label for="userName" class="form-label">User name</label>
                                                    <input type="text" class="form-control" id="userName" name="userName" value="">
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="userEmail" class="form-label">User email</label>
                                                    <input type="text" class="form-control" id="userEmail" name="userEmail" value="">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-primary update-button">Update</button>
                                                    <button type="button" class="btn btn-secondary close-button" onclick="closeForm()" >Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                            `;
                    })
                })
                .catch(err=>{
                    console.log("Failed to gen table in Intro", err);
                })
            }());
    }
    
  });
// Update se luon co hoat dong reload lai
function initDelete(deleteApi, tableGen){
    document.querySelectorAll('.delete__button').forEach( button => 
        {
            button.addEventListener('click', function(event){
            const id = event.target.closest('tr').getAttribute('data-id');
            console.log(id)
            fetch(`${deleteApi}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {
                console.log(`Data with ID ${id} deleted successfully`);
                tableGen();
                // Handle success, update UI, etc.
              })
              .catch(error => {
                console.error('There was a problem deleting the data:', error);
                // Handle error, show error message, etc.
              });
            
            })
        })
}
// Hiện không dùng được
function initUpdate(updateApi, tableGen){
        // Bin dữ liệu trước khi gửi
        const data = {
            userId: userId,
            topicId: topicId,
            typeId: typeId,
            placeId: placeId,
            desc: desc
        };
        // Gửi dữ liệu
        fetch(`${updateApi}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(updatedEntity => {
            console.log('IntroEntity updated successfully:', updatedEntity);
            // Handle success, update UI, etc.
        })
        .catch(error => {
            console.error('There was a problem updating the IntroEntity:', error);
            // Handle error, show error message, etc.
            tableGen();
        });
        

     
}
function closeForm(){
    const button = document.querySelectorAll('.sub__nav__item div')
    button.forEach(button =>{
        button.style.backgroundColor='var(--red-button-color)';
    })
    controlView .innerHTML = `
    <div class="data__view"
    </div>
    <div class="add"
    </div>
    `
    const tableHolder = document.querySelector('.data__view')
    const addButton = document.querySelector ('.add')
    // tableGen();
}
// Delete
// Add