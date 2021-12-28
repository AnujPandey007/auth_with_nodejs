typeof exports === "object"

let adminName = "Anuj"; 
console.log(`hi, ${adminName}`);


// alert("Hi, Welcome");

// let getPromptValue = prompt("What is your name?", "Guest");
// console.log(getPromptValue);

// let deleteMessage = confirm("Do you really want to delete this post?");
// console.log(deleteMessage);


function toggleHide(){
    let box1Button = document.getElementById('box1');
    let box2Button = document.getElementById('box2');
    // box2Button.style.display = "none";
    // box1Button.addEventListener('mouseover', function run() {
    //     console.log("Mouse Over");
    // });
    // if(box2Button.style.display != "none"){
    //     box2Button.style.display = "none";
    // }else{
    //     box2Button.style.display = "block";
    // }

    // setTimeout(() => {
    //     console.log("asd");
    // }, 2000);

    let time = new Date();
    box2Button.innerHTML = time;

    setInterval(() => {
     toggleHide();   
    }, 1000);
}

function getAvg(array){
    let sum = 0;
    array.forEach((element)=>{
        sum+=element;
    });
    return sum/array.length;
}

function rotateImageFunction(){
    let imageID = document.getElementById("imageclass");
    imageID.style.transform = "rotate(360deg)";
    console.log("rotateImageFunction called");
}

// module.exports = {
//     getAvg: getAvg,
//     adminName: adminName
// }

// document.getElementById('imageclass').addEventListener('click', getApi());


getApi();

async function getApi() {
    fetch("http://localhost:3000/about/getAll").then(function (response) {
        return response.json();
    }).then(function (data) {
        appendData(data);
    }).catch(function (err) {
        console.log(err);
    });
}

function appendData(data) {
    var mainContainer = document.getElementById("sholksCard");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = `<div class="card">
                        <span style="--i:0;"></span>
                        <span style="--i:1;"></span>
                        <span style="--i:2;"></span>
                        <span style="--i:3;"></span>
                        <div class="cardBox">
                            <div class="quote"><h2>${data[i].sanskrit}</h2> <br> <br> <div>${data[i].hindi}</div> </div>
                            <div class="glass"><h2>Quoted By <i><br> Lord Krishna</i> </h2></div>
                        </div>
                    </div>`
      mainContainer.appendChild(div);
    }
}

