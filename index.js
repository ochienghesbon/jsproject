const subscribe=document.getElementById("subscribe")
const email=document.getElementById("emailing")
subscribe.addEventListener('click',async(e)=>{
  e.preventDefault()
  const comment=email.value
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(comment))){return alert('invalid email')}
  const response=await postData("http://localhost:3000/comments",{
    comment
  })
  email.value=""
  const data=await getData("http://localhost:3000/comments")
  console.log(data)
  alert("email sent")
})
async function refresh(){
  let response=await postDat("http://localhost:3000/likes",{})
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