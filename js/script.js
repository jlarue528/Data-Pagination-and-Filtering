/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/


function showPage(list, page) {
   let startIndex = ((page * 9) - 9);
   let endIndex = (page * 9); 

   const studentList = document.getElementsByClassName('student-list')[0];
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
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   let numOfPages = Math.ceil(list.length/9);

   const linkList = document.querySelector('.link-list');

   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i++) {
      let pageNumber = [i];
      let button =
         `<li>
            <button type="button">${pageNumber}</button>
         </li>`;
      linkList.insertAdjacentHTML('beforeend', button);

      let firstButton = document.querySelector('button');
      firstButton.className = 'active';
      }
   
      linkList.addEventListener('click', (e) => {
         let clickEvent = e.target;
         if(clickEvent.tagName == 'BUTTON') {
            let activeButton = document.querySelector('.active');
            activeButton.className = '';

            clickEvent.className = 'active';
            let clickEventContent = clickEvent.textContent;
            console.log(clickEventContent);

            showPage(list, clickEventContent);
         }
      });
   }

   
   /**
    * Call Functions
    */ 
   showPage(data, 1);
   addPagination(data);


