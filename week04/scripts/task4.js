/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
  // Step 2: Inside of the object, add a property named name with a value of your name as a string
  // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
  // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
  // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
let myInformation = {
    name: 'Eron Whitefield',
    photo: 'images/EronWhitefield.jpg',
    favoriteFoods: [
        'Bibimpap',
        'Ribeye Steak',
        'Cheeseburger',
        'Pizza',
        'Kimchi'
    ],
    hobbies: [
        'Reading (everything)',
        'Writing Fiction',
        'Computer Gaming',
        'Exploring'
    ]
};

// Step 6: Add another property named placesLived with a value of an empty array
  // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
  // Step 8: For each property, add appropriate values as strings
  // Step 9: Add additional objects with the same properties for each place you've lived
myInformation.placesLived = [
    {
      place: 'Henderson, NV',
      length: '5 years'
    },
    {
      place: 'Simpsonville, SC',
      length: '5 years'
    },
    {
      place: 'Gilbert, AZ',
      length: '5 years'
    },
    {
      place: 'Magna, UT',
      length: '5 years'
    },
    {
      place: 'West Valley City, UT',
      length: '2 years'
    },
    {
      place: 'Springville, UT',
      length: '2 years'
    },
    {
      place: 'Irvine, CA',
      length: '3 years'
    },
    {
      place: 'San Jose, CA',
      length: '5 years'
    }
]


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInformation.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', myInformation.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', myInformation.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
myInformation.favoriteFoods.forEach(food => {
    let favoriteFoodItem = document.createElement('li');
    favoriteFoodItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(favoriteFoodItem)
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
  // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myInformation.hobbies.forEach(hobby => {
    let hobbyItem = document.createElement('li');
    hobbyItem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(hobbyItem)
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
myInformation.placesLived.forEach((placeLived) => {
    let placeLivedItem = document.createElement('dt');
    placeLivedItem.textContent = placeLived.place;

    let placeLivedLength = document.createElement('dd');
    placeLivedLength.textContent = placeLived.length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(placeLivedItem);
    document.querySelector('#places-lived').appendChild(placeLivedLength);
})
