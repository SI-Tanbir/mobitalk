// fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => response.json())
//       .then(json => console.log(json))

// Define the async function to use await
async function fetchData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/photos");
  let data = await res.json();

  data.forEach((item) => {
    //     console.log(`ID: ${item.id}, Title: ${item.title}, URL: ${item.url}`);
    //
    // console.log(item);
//  starting of card here
    let phoneContainer = document.getElementById("phone-container");
    let div = document.createElement("div");
    div.innerHTML = `
<div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="${item.thumbnailUrl}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${item.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

`;

    phoneContainer.appendChild(div);

    // formate i just copy for reference

    //   albumId: 1,
    //   id: 1,
    //   title: 'accusamus beatae ad facilis cum similique qui sunt',
    //   url: 'https://via.placeholder.com/600/92c952',
    //   thumbnailUrl: 'https://via.placeholder.com/150/92c952'
  });

  // console.log(data.)
}

// Call the async function to execute the fetch operation
fetchData();
