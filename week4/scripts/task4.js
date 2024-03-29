/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let profile = {
    // Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: 'Abiloye Iyanuoluwa John',
    // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: 'myPortrait.jpg',
    // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ['Fried Rice', 'Beef', 'Salad', 'Fruit Juice'],
    // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ['Reading', 'Watching Movies', 'Sports'],
    // Step 6: Add another property named placesLived with a value of an empty array
    placesLived: []
};

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
profile.placesLived = [
    {
        place: 'Lagos, Nigeria',
        length: 1,
    },
    {
        place: 'Calabar, Nigeria',
        length: 4,
    },
    {
        place: 'Ibadan, Nigeria',
        length: 24,
    },
    {
        place: 'Accra, Ghana',
        length: 0.3,
    },

];

// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = profile.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', `images/${profile.photo}`);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', `Profile picture of ${profile.name}`);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

profile.favoriteFoods.forEach( item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#favorite-foods').appendChild(li);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

profile.hobbies.forEach( hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

profile.placesLived.forEach( item => {
    let dt = document.createElement('dt');
    dt.textContent = item.place;

    let dd = document.createElement('dd');
    dd.textContent = `${item.length} years`;

    dt.appendChild(dd);
    document.querySelector('#places-lived').appendChild(dt);
});