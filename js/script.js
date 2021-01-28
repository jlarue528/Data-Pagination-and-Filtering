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
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


function showPage(list, page) {
   let startIndex = ((page * 9) - 9);
   let endIndex = (page * 9); 

   let studentList = document.getElementsByClassName('student-list')[0];
   studentList.innerHTML = '';


   for(let i = 0; i < list.length; i++) {

      if (i >= startIndex && i < endIndex) {
         
         let firstName = list[i].name.first;
         let lastName = list[i].name.last;
         let fullName = `${firstName} ${lastName}`

         let email = list[i].email;
         let date = list[i].registered.date;
         let image = list[i].picture.medium;

         
         // let newHtml = `
         //    <li class="student-item cf">
         //       <div class="student-details">
         //          <img class="avatar" src=${image} alt="Profile Picture">
         //          <h3>${fullName}</h3>
         //          <span class="email">${email}</span>
         //       </div>
         //       <div class="joined-details">
         //          <span class="date">${date}</span>
         //       </div>
         //    </li>
         // `;
         
         // studentList.insertAdjacentHTML('beforeend', newHtml);  

      
         let li = document.createElement('li');
         //add class
         li.className ="student-item cf";
         //Add list
         console.log(studentList);
         studentList.appendChild(li);
         //find list
         const fullList = document.getElementsByClassName("student-item cf")[0];
            
            let studentDiv =document.createElement('div');
            //add class
            studentDiv.className = "student-details";
            //Add div
            fullList.appendChild(studentDiv);
            //find new div items
            const studentDetails = document.getElementsByClassName('student-details')[0];
               
               let imageFile = document.createElement('img');
                  //add class
                  imageFile.className = "avatar";
                  //add source
                  imageFile.src = image;
                  //add ALT 
                  imageFile.alt = "Profile Picture";
               //addImage
               studentDetails.appendChild(imageFile);
               //find image
               const studentImage = document.getElementsByClassName('avatar')[0];

               let h3Name = document.createElement('h3');
                  //add text content
                  h3Name.textContent = fullName;
               //addH3
               studentDetails.insertAdjacentElement('beforeend', h3Name);
               //find h3 elements
               const studentName = document.getElementsByTagName('h3')[0];

               let spanEmail = document.createElement('span');
                  //add class
                  spanEmail.className = "email";
                  //add textContent
                  spanEmail.textContent = email;
                  //add SPAN
                  studentDetails.insertAdjacentElement('beforeend', spanEmail);
                  const studentEmail = document.getElementsByClassName('email');
         
            //div
            let joinedDiv = document.createElement('div');
               //add class
                  joinedDiv.className = "joined-details";
            //add div2
            studentDetails.insertAdjacentElement('afterend', joinedDiv);
            //find div2
            const joinedDetails = document.getElementsByClassName('joined-details')[0];

            //span
               let dateDetails = document.createElement('span');
               //add class
                  dateDetails.className = "date";
               //add text content
                  dateDetails.textContent = date;
            //addSpan2
            joinedDetails.appendChild(dateDetails);
            //find span2
            //let dateJoined = document.getElementsByClassName('date')[0];

            studentList = studentList.innerHTML; 
      }
   }
}
showPage(data, 2);
         
         
         // //Create DOM & add DOM items
         // let student = document.createElement('li');
         // //add class
         // student.className ="student-item cf";
         // //Add list
         // studentList.appendChild(student);
            
         //    let studentDiv =document.createElement('div');
         //    //add class
         //    studentDiv.classList.add = "student-details";
         //    //Add div
         //    student.appendChild(studentDetails);
         //    //find new div items
         //    const studentDetails = document.getElementsByClassName('student-details');
               
         //       let imageFile = document.createElement('img');
         //          //add class
         //          imageFile.classList.add = "avatar";
         //          //add source
         //          imageFile.src = image;
         //          //add ALT 
         //          imageFile.alt = "Profile Picture";
         //       //addImage
         //       studentDetails.appendChild(studentImage);
         //       //find image
         //       const studentImage = document.getElementsByClassName('avatar');

         //       let h3Name = document.createElement('h3');
         //          //add text content
         //          h3Name.textContent = fullName;
         //       //addH3
         //       studentImage.insertAdjacentHTML('beforeend', fullName);
         //       //find h3 elements
         //       const studentName = document.querySelector('h3');

         //          let spanEmail = document.createElement('SPAN');
         //             //add class
         //             spanEmail.class = "email";
         //             //add textContent
         //             spanEmail.textContent = email;
         //          //add SPAN
         //          studentName.insertAdjacentHTML('beforeend', spanEmail);
         //          //const studentEmail = document.getElementsByClassName('email');
         
         // //div
         // let joinedDiv = document.createElement('div');
         //    //add class
         //       joinedDiv.classList.add = "joined-details";
         // //add div2
         // studentDetails.insertAdjacentHTML('afterend', joinedDiv);
         // //find div2
         // const joinedDetails = document.getElementsByClassName('joined-details');

         // //span
         //    let dateJoined = document.createElement('SPAN');
         //    //add class
         //       dateJoined.classList.add = "date";
         //    //add text content
         //       dateJoined.textContent = date;
         // //addSpan2
         // joinedDetails.appendChild(dateJoined);    
         
         // studentList.innerHTML = html;
         // return studentList








/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
