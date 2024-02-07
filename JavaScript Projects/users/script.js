

function displayuser(users){
    let htmlData=``
    users.forEach(u=>{
        htmlData+=`

        <div class="col-4">
        <div class="card" style="width: 18rem;">
            
            <div class="card-body">
              <h5 class="card-title">${u.name}</h5>
              <p class="card-text">${u.email}</p>
              <p class="card-text">${u.address.city}</p>
              <p class="card-text">${u.phone}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
        
        `
    })
document.querySelector("#result").innerHTML=htmlData

}
// displayuser()

fetch("https://jsonplaceholder.typicode.com/users/").then(res=>res.json()).then(data=>displayuser(data))