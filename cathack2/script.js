const btn = document.createElement('div')
btn.setAttribute("class", "btn");
btn.innerHTML=`<button  id ="btn" type="text" >allimg</button>`

async function call(){
    try{
        var op = await fetch("https://cataas.com/api/cats?tags=cute");
        var data =await op.json()
        console.log(data);
        var parent = document.getElementById("main")
        for(objs of data) {
            var cont = document.createElement("div");
            cont.setAttribute("class","card")

            var img = document.createElement("img");
            img.className = "rotate";
            img.src=`https://cataas.com/cat/${objs.id}`
          
            var h = document.createElement("h4");
            h.innerText = `Cat_Id : ${objs.id}`;

           
            cont.appendChild(img);
            cont.appendChild(h);
            // cont.appendChild(p);
            parent.appendChild(cont);
        }

    }
    catch{
        
        console.log("error");
    }
}
call();


//container2

const container2= document.createElement('div')
container2.setAttribute("class", "container2");
container2.innerHTML=`<h1>Find a cat</h1>
<div class="input"> 
 <input id="inputdata" type="text" placeholder="Example:brown"> <button id="button" type="button" >Get cats</button>
 
 </div> 
`

document.body.append(container2);
async function catdata(inputdata){
    try{
        let data_from_api = await fetch("https://cataas.com/cat/"+`${inputdata}`);
        let finaldata = await data_from_api.json();
        console.log(user);
    }
    catch{
    
    console.log("error");
    }
    }
    catdata()
    var button = document.getElementById("button");
    var img = document.createElement('img');
    
    button.addEventListener("click",function(){
        
        var input = document.getElementById("inputdata").value;
    
        const block2 = document.createElement('div');
        block2.setAttribute("class", "imgcard")
        
        img.src=`https://cataas.com/cat/${input}`;
        block2.appendChild(img);
        document.body.appendChild(block2)
        
    })




    function goDown() {
        document.documentElement.scrollTo(0,200000)
      }


