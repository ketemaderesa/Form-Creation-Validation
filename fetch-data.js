async function fetchUserData() {
   const apiUrl = 'https://jsonplaceholder.typicode.com/users';
   const dataContainer = document.getElementById('api-data');
    console.log("Container found:", dataContainer);
     try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
