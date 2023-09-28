fetch('https://rickandmortyapi.com/api/character' ,{
  method: 'GET'
})
.then(response => response.json)
.then(function (json) {
const container=document.getElementsByClassName('container')

  json.results.map(function (results){
container.innerHTML+=`
<div>
<img src=`+results.image`>

</div>


`



  })
})
