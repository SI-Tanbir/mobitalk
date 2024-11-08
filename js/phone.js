// fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => response.json())
//       .then(json => console.log(json))

      

// Define the async function to use await
async function fetchData() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/photos');
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    
}

// Call the async function to execute the fetch operation
fetchData();
