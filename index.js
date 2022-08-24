// fetch('http://localhost:1337/api/podcasts?populate=*')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const { default: axios } = require("axios")


// fetching the list of podcasts from the server
// fetch('http://localhost:1337/api/podcasts?populate=*').then((data)=>{
// // console.log(data);
// // converting the dataset into json fomat 
// return data.json()
// }).then((completeData)=>{
//     // console logging the converted dataset 
//     const apis= completeData.data
//     console.log(apis);
  
//     // document.getElementById("root").innerHTML=completeData.data[1].attributes

//      let data1 ='';
//      apis.map((values)=>{
//         data1= `
//         <div class="cardss">
//         <div>
//             <img alt="podcastImage" src=${values.podcast}/>
//         </div>
//      <div>${values.podcastname}</div>
//      <div>${values.podcastDescription}</div>
//  <div>
//     <audio controls>
//         <source src=${values.audio}>
//       </audio>
//  </div>
// <div>${values.ownerName}</div>
// <div>${values.ownerDescription}</div>
// <div>
//     <img src=${values.ownerImage}/>
// </div>
// <div>${values.publishedAt}</div>
// <div>${values.reviews}</div>

//     </div>
// </div>
//         `
//      })
//      document.getElementById('cards').innerHTML=data1

// }).catch((err)=>{
//     console.log(err);
// })


// const container = document.querySelector('.container')

// function loadPodcast(){
//     fetch('http://localhost:1337/api/podcasts')
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(tutorials){
//         tutorials.forEach(function(tutorials){
//             const div = document.createElement('div')
//             div.innerHTML=tutorials.name
//           container.appendChild(div)
//         })
      
//     })
// }
// loadPodcast()



// document.querySelector('#container')



// const {default:axios}= ("axios")
// axios.get('http://localhost:1337/api/podcasts?populate=*')
// .then((res)=>{handelResult(res)})
// .catch((err)=>console.log(err))


// function handelResult(data){
//     console.log(data);
// }
// function displayUser(res){
//     console.log(res.data);
// }

// const base_url = 'http://localhost:1337/api/podcasts?populate=*'


// axios.get(base_url)
// .then(displayUser)


// function fetchData(){
//     fetch("http://localhost:1337/webcasts")
//     .then(response =>{
//       return response.json();
//     }).then(data=>{
//         console.log(data);
//         const html = data.map(user=>{
//             return `
//             <p>Name:${user.title}</p> <p>desc:  ${user.description}</p>
//             <iframe src='${user.embeded}'> </iframe>
            
//             <p>
//             <img src="${user.bannerimage}" alt="${user.title}"/>
//             </p>
          
//             `
//         }).join('')
//         // console.log(html);
//         document.querySelector('#App')
//         .insertAdjacentHTML('afterbegin',html);
//     }).catch(error=>{
//         console.log(error);
//     })
// }
// fetchData()
// const a = 55
// alert(a)



fetch('http://localhost:1337/webcasts').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completeData)=>{
//     console.log(completeData[0].title);

// document.getElementById('root').innerHTML=completeData[0].title

let data1=""
completeData.map((values)=>{
    data1+=`

    <div id="container" style="display: flex;justify-content:center;flex-wrap:wrap; ">
        <div class="cardss" id="App">
        <div>
 <div style='height:200px;width:200px;object-fit:cover'>  
 <img  src='http://localhost:1337${values.bannerimage.url}'style='width:100%' />

 </div>
   
        </div>
     <div><h2>title:</h2>${values.title}</div>
     <div><h2>description:</h2>${values.description}</div>
 <div>
  <iframe src=${values.embeded} f width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">embeded</iframe>
 </div>
<div><h2>authorname:</h2>${values.authorname}</div>
<div><h2>about:</h2>${values.aboutauthor}</div>
<div> <h2>handle:</h2>${values.authorhandle}</div>


    </div>
    

</div>

`
})
document.getElementById('container').innerHTML=data1

}).catch((error)=>{
    console.log(error);
})