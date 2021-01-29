/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
   Function will insert elements on the page that display information of 9 students per page
*/

const studentList = document.getElementsByClassName('student-list')[0];

function showPage(list, page) {
   let startIndex = ((page * 9) - 9);
   let endIndex = (page * 9); 

   // const studentList = document.getElementsByClassName('student-list')[0];
   studentList.innerHTML = '';

   for(let i = 0; i < list.length; i++) {

      if (i >= startIndex && i < endIndex) {

         /*
            variables below are student's information provided by the 
            list parameter 
         */ 
         
         let firstName = list[i].name.first;
         let lastName = list[i].name.last;
         let fullName = `${firstName} ${lastName}`

         let email = list[i].email;
         let date = list[i].registered.date;
         let image = list[i].picture.medium;

         /*
            newHTML variable provides individual student info that will
            be shown on the page
         */
         let newHtml = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src=${image} alt="Profile Picture">
                  <h3>${fullName}</h3>
                  <span class="email">${email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${date}</span>
               </div>
            </li>
         `;
         
         studentList.insertAdjacentHTML('beforeend', newHtml);  
      }
   }
}

/*
   Function creates elements for pagination buttons on the page
*/

function addPagination(list) {

   let numOfPages = Math.ceil(list.length/9);

   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   /*
      For loop is creating individual buttons on page
   */
   for (let i = 1; i <= numOfPages; i++) {
      let pageNumber = [i];
      let buttonHTML =
         `<li>
            <button type="button">${pageNumber}</button>
         </li>`;
      linkList.insertAdjacentHTML('beforeend', buttonHTML);

      let pageButton = document.querySelector('button');
      pageButton.className = 'active';
      }

      /*
         Event listener is listening for click events on
         the pagination buttons on the page
      */
   
      linkList.addEventListener('click', (e) => {
         let clickEvent = e.target;
         if(clickEvent.tagName == 'BUTTON') {
            let activeButton = document.querySelector('.active');
            activeButton.className = '';

            clickEvent.className = 'active';
            let clickEventContent = clickEvent.textContent;

            showPage(list, clickEventContent);
         }
      });
   }

/**
   Calling Functions
*/

showPage(data, 1);
addPagination(data);

/*
   Search Component 
   * Not functional on page
*/

const header = document.querySelector('.header');
const searchBox = `
   <label for="search" class="student-search">
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`;
header.insertAdjacentHTML('beforeend', searchBox); 
