document.addEventListener("DOMContentLoaded", function() {
const subscribe=document.getElementById("subscribe")
const email=document.getElementById("emailing")
subscribe.addEventListener('click',async(e)=>{
  e.preventDefault()
  const comment=email.value
  // stores the value of the email
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(comment))){return alert('invalid email')}
  // regular expression to whether email is in correct format
  const response=await postData("http://localhost:3000/comments",{
    // it sends subscribed email to server 
    // await works same way as .then
    comment
  })
  // the code email.value="" makes the input field empty after email submission
  email.value=""
  const data=await getData("http://localhost:3000/comments")
  console.log(data)
  alert("email sent")
})
async function refresh(){
  let response=await postData("http://localhost:3000/likes",{})
  // console.log(response)
  update.textContent=response.id
}
const update=document.getElementById("like-count")
refresh()
const like=document.getElementById('like-button')
    like.addEventListener('click',async(e)=>{
        e.preventDefault()
        let response=await postData("http://localhost:3000/likes",{})
        update.textContent=response.id
  console.log(response)
like.style.backgroundColor=response.id%2==0?"green":"red"

    })
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(data) 
        });
        return response.json();
      }
      // function of getting data
      async function getData(url = '') {
        const response = await fetch(url, {
          method: 'Get',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
        });
        return response.json();
      } 
      });
      
      async function deleteEmail(url = '') {
        const response = await fetch(url, {
          method: 'delete',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
        });
        return response.json();
      } 
      

      const Delete=document.getElementById("deleteemail")
      Delete.addEventListener('click',()=>{
        const idinput=document.getElementById("emailid")
        deleteEmail("http://localhost:3000/comments/"+idinput.value)
        alert('deleted')

      })
      
