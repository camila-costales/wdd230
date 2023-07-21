



    // Fetch fruit data from JSON source
    fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Log the response to inspect the JSON data structure

        if (!data || !Array.isArray(data)) {
            throw new Error('Invalid JSON data format');
        }

        const fruitOptions = data.map(fruit => fruit.name);

        // Function to populate select elements with fruit options
        const populateSelect = (selectElement, options) => {
            const select = document.getElementById(selectElement);

            // Loop through options and create option elements
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
        };

        // Call the populateSelect function for each select element
        populateSelect('fruit1', fruitOptions);
        populateSelect('fruit2', fruitOptions);
        populateSelect('fruit3', fruitOptions);
    })
    .catch(error => console.error('Error fetching fruit data:', error));


    
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Function to calculate the total nutrients based on the selected fruits
  const calculateTotalNutrients = () => {
      const fruit1 = document.getElementById('fruit1').value;
      const fruit2 = document.getElementById('fruit2').value;
      const fruit3 = document.getElementById('fruit3').value;

      // Get the fruit data from the JSON source
      fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
          .then(response => response.json())
          .then(data => {
              const selectedFruits = [fruit1, fruit2, fruit3];

              let totalCarbohydrates = 0;
              let totalProtein = 0;
              let totalFat = 0;
              let totalSugar = 0;
              let totalCalories = 0;

              data.forEach(fruit => {
                  if (selectedFruits.includes(fruit.name)) {
                      totalCarbohydrates += fruit.nutritions.carbohydrates;
                      totalProtein += fruit.nutritions.protein;
                      totalFat += fruit.nutritions.fat;
                      totalSugar += fruit.nutritions.sugar;
                      totalCalories += fruit.nutritions.calories;
                  }
              });

              // Get user input values
              const firstName = document.getElementById('first-name').value;
              const email = document.getElementById('email').value;
              const phone = document.getElementById('phone').value;
              const specialInstructions = document.getElementsByName('userText')[0].value;

              // Format the output and display it in the "submit-message" div
              const outputArea = document.getElementById('submit-message');
              outputArea.innerHTML = `
                  <h2>Your Order Summary</h2>
                  <p><strong>Name:</strong> ${firstName}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone Number:</strong> ${phone}</p>
                  <p><strong>Selected Fruits:</strong> ${selectedFruits.join(', ')}</p>
                  <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
                  <h3>Total Nutrients:</h3>
                  <p><strong>Total Carbohydrates:</strong> ${totalCarbohydrates.toFixed(2)} g</p>
                  <p><strong>Total Protein:</strong> ${totalProtein.toFixed(2)} g</p>
                  <p><strong>Total Fat:</strong> ${totalFat.toFixed(2)} g</p>
                  <p><strong>Total Sugar:</strong> ${totalSugar.toFixed(2)} g</p>
                  <p><strong>Total Calories:</strong> ${totalCalories}</p>
              `;
          })
          .catch(error => console.error('Error fetching fruit data:', error));
  };

  // Add event listener for form submission
  const orderForm = document.getElementById('drink-form');
  orderForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission to a new page
      calculateTotalNutrients(); // Calculate and display the order summary
      numDrinks++;
      localStorage.setItem("drinks-ls", numDrinks);
  });
});








  
//   // Add event listener for form submission
//   const orderForm = document.getElementById('drink-form');
//   orderForm.addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent form submission to a new page
//       calculateTotalNutrients(); // Calculate and display the order summary
//   });
// ;


// const form = document.getElementById('drink-form');
//     const messageDiv = document.getElementById('submit-message');
//     const orderCount = document.getElementById('order-count');
//     let numDrinks = Number(window.localStorage.getItem("drinks-ls")) || 0;
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

        
//         numDrinks++;
//         localStorage.setItem("drinks-ls", numDrinks);

//         const firstName = document.getElementById('first-name').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const fruits = document.querySelectorAll('#fruits input[type="checkbox"]:checked');
//         const instructions = document.querySelector('textarea[name="userText"]').value;

//         const orderInfo = `
//             <p>Your drink has been ordered. You will receive an email confirmation shortly.</p>
//             <p><strong>First Name:</strong> ${firstName}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone Number:</strong> ${phone}</p>
//             <p><strong>Selected Fruits:</strong> ${Array.from(fruits).map(fruit => fruit.value).join(', ')}</p>
//             <p><strong>Special Instructions:</strong> ${instructions}</p>
//             <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>`;

//         messageDiv.style.display = 'block';
//         messageDiv.innerHTML = `
//             <h2>Order Information</h2>
//             ${orderInfo}`;
    
//     });
  







    


/* const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

const getFruits = async()=>{
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
          } else {
              throw Error(await res.text());
          }

    } catch (error) {
    console.log(error);
    }
    
}
getFruits();

function displayResults(data) {
  const fruitsFieldset = document.getElementById('fruits');
  fruitsFieldset.addEventListener('click', selectedFruits);

  let strcheckbox = "<ul> "
  for (let i = 0; i < data.length; i++) {
    const fruit = data[i];
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'fruit';
    checkbox.value = fruit.name;

    const label = document.createElement('label');
    label.textContent = fruit.name;

    fruitsFieldset.appendChild(checkbox);
    fruitsFieldset.appendChild(label);
  } 

function selectedFruits() {
  const checkboxes = fruitsFieldset.querySelectorAll('input[type="checkbox"]');
  const checkedCheckboxes = fruitsFieldset.querySelectorAll('input[type="checkbox"]:checked');
  
  if (checkedCheckboxes.length >= 3) {
    for (let i = 0; i < checkboxes.length; i++) {
      if (!checkboxes[i].checked) {
        checkboxes[i].disabled = true;
      }
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].disabled = false;
    }
  }
  
  const selectedFruits = document.getElementById('selected-fruits');
  selectedFruits.innerHTML = ''; 

  let totalCarbohydrates = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalCalories = 0;
  let totalSugar = 0;

  const selectedFruitsList = document.createElement('p');
  selectedFruits.appendChild(selectedFruitsList);

  for (let i = 0; i < checkedCheckboxes.length; i++) {
    const fruitName = checkedCheckboxes[i].value;
    const selectedFruit = document.createElement('li');
    selectedFruit.textContent = fruitName;
    selectedFruitsList.appendChild(selectedFruit);

    const fruit = data.find(fruit => fruit.name === fruitName);
    totalCarbohydrates += fruit.nutritions.carbohydrates;
    totalProtein += fruit.nutritions.protein;
    totalFat += fruit.nutritions.fat;
    totalCalories += fruit.nutritions.calories;
    totalSugar += fruit.nutritions.sugar;
  }

  const nutritionSummary = document.getElementById('nutrition-summary');
  nutritionSummary.innerHTML = `
    Total carbohydrates: ${totalCarbohydrates.toFixed(1)}g<br>
    Total protein: ${totalProtein.toFixed(1)}g<br>
    Total fat: ${totalFat.toFixed(1)}g<br>
    Total calories: ${totalCalories.toFixed(1)} kcal<br>
    Total sugar: ${totalSugar.toFixed(1)}g
  `;
  
    const form = document.getElementById('drink-form');
    const messageDiv = document.getElementById('submit-message');
    const orderCount = document.getElementById('order-count');
    let numDrinks = Number(window.localStorage.getItem("drinks-ls")) || 0;
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        numDrinks++;
        localStorage.setItem("drinks-ls", numDrinks);

        const firstName = document.getElementById('first-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const fruits = document.querySelectorAll('#fruits input[type="checkbox"]:checked');
        const instructions = document.querySelector('textarea[name="userText"]').value;

        const orderInfo = `
            <p>Your drink has been ordered. You will receive an email confirmation shortly.</p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Selected Fruits:</strong> ${Array.from(fruits).map(fruit => fruit.value).join(', ')}</p>
            <p><strong>Special Instructions:</strong> ${instructions}</p>
            <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>`;

        messageDiv.style.display = 'block';
        messageDiv.innerHTML = `
            <h2>Order Information</h2>
            ${orderInfo}`;
    
    });
  
}
};*/