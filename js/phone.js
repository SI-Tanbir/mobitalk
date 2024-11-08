
async function fetchData() {
  let res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone");
  let data = await res.json();
let phones = data.data;





//displaying phone here
function phonedisplay(phones){
    phones.forEach((phone) =>{




        /* 
        brand: "Apple "
    ​
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
    ​
    phone_name: "iPhone 13 mini"
    ​
    slug: "apple_iphone_13_mini-11104"
        
        */
     
    
        let phoneContainer = document.getElementById("phone-container");
        let div = document.createElement("div");
        div.innerHTML = `
    <div class="card  w-96 bg-[#877cda40] mt-4 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src="${phone.image}"
          alt="Shoes"
          class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        
        <div class="card-actions">
          <button class="btn bg-[orange]">Buy Now</button>
        </div>
      </div>
    </div>
    
    `;
    
        phoneContainer.appendChild(div);
    
    
      });
}
// phonedisplay(phones)

if (phones.length >= 9){
    let device=phones.slice(0,9);
    console.log('it seems working',device);
    phonedisplay(device);
    let showall =document.getElementById('showall')
    showall.classList.remove('hidden')

     

}
else{
    console.log('slicking not work')
    phonedisplay(phones);
    let showall =document.getElementById('showall');
    showall.classList.add('hidden');
    
}

// function displayFull(){
//     let showall =document.getElementById('showall');
//     showall.classList.add('hidden');
//     phonedisplay(phones);


// };

let displaybtn = document.getElementById('showall');
displaybtn.addEventListener('click', function() {
    let showall = document.getElementById('showall');
    showall.classList.add('hidden');
    phonedisplay(phones);
});



}

// Call the async function to execute the fetch operation
fetchData();
