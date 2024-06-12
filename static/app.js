//let d = new Date();
//document.body.innerHTML = "<h1>Today's date is " + d + "</h1>";

//Find element and replace now by ID

/*
const titleElement = document.getElementById('title');
const headline_replacement = "New Text";
if (titleElement)
    {
        titleElement.textContent = headline_replacement;
    }

const sub_title_replacement = "Grammar Rewriter is not Free. Solves your problem. Easy. Fast"

const sub_title_element = document.getElementById("title--sub");
if (sub_title_element){
    sub_title_element.textContent = sub_title_replacement;
}

// Find element and replace via class identifier instead
// For example: 

//let element = document.querySelector('.' + data.Class);

//More generic Script to do the injection backwards into the script
function findElementByText(text) {
        const elements = document.querySelectorAll('*');
        const results = [];

        elements.forEach(element => {
            if (element.textContent.trim() === text) {
                const id = element.id ? `id: ${element.id}` : null;
                const classList = element.classList.length ? `class: ${element.classList.value}` : null;
                if (id || classList) {
                    results.push({
                        element: element,
                        id: id,
                        classList: classList
                    });
                }
            }
        });

        return results;
}

// Example usage
const textToFind = 'Correct';
const elementsWithText = findElementByText(textToFind);

const replacement_Text = "Wrong";
if (elementsWithText.length > 0) {
    elementsWithText.forEach(info => {
        console.log(`Element found with ${info.id || ''} ${info.classList || ''}`);
        // Replace the text "Correct" with "Wrong"
        if (info.element) {
            info.element.textContent = info.element.textContent.replace(textToFind, replacement_Text);
        }
    });
} else {
    console.log(`No element found with text: "${textToFind}"`);
}

const textToFind2 = "Rewrite";
const elementsWithText2 = findElementByText(textToFind2);

const replacement_Text2 = "No one did anything";
if (elementsWithText.length > 0) {
    elementsWithText2.forEach(info => {
        console.log(`Element found with ${info.id || ''} ${info.classList || ''}`);
        // Replace the text "Correct" with "Wrong"
        if (info.element) {
            info.element.textContent = info.element.textContent.replace(textToFind2, replacement_Text2);
        }
    });
} else {
    console.log(`No element found with text: "${textToFind2}"`);
}
*/

/*
//Adding the api endpoint as well for the injection.
        document.addEventListener('DOMContentLoaded', async function() {
            async function fetchData() {
                try {
                    // Fetch data from the endpoint
                    let response = await fetch('http://localhost:8000');

                    // Get the data as JSON from the endpoint
                    let data = await response.json();

                    console.log('Fetched data:', data);

                    data.forEach(item => {
                        console.log('Searching for elements with class:', item.Class);
                        let elements = document.querySelectorAll('.' + item.Class);
                        console.log('Found elements:', elements);

                        elements.forEach(element => {
                            console.log('Updating element:', element);
                            element.innerHTML = item.Content;
                            //element.textContent = item.Content;
                        });
                    });
                } catch (err) {
                    console.log('Error fetching data:', err);
                }
            }

            // Call fetchData to execute it
            fetchData();
        });

*/



//replacement function here:
function findElementByText(text) {
    const elements = document.querySelectorAll("*");
    const results = [];

    elements.forEach(element => {
        if (element.textContent.trim() === text) {
            const id = element.id ? `id: ${element.id}` : null;
            const classList = element.classList.length ? `class: ${element.classList.value}` : null;
            if (id || classList) {
                results.push({
                    element: element,
                    id: id,
                    classList: classList
                });
            }
        }
    });

    return results;
}

const texttoFind = "Grammar Rewriter is a free online grammar checker that helps to write clear and concise sentences.";
const replacementText = "We make it faster" 

// Also innerHTML changes and might corrupts the entire font
//its advised to use: textContent instead. element.textContent = item.Content;
document.addEventListener('DOMContentLoaded', async function() {
    async function fetchData() {
        let url = new URL(window.location.href);
        try {
            let response = await fetch('http://localhost:8000');
            let data = await response.json();
            console.log(data);

            // Case 1: Example with getElementById
            let element = document.getElementById("rewrit");
            if (element) {
                element.innerHTML = "new";
                console.log("element found");
            }
            
            // Case 2: If not element found by 
            else { // Example with getElementsByClassName
                let class_elements = document.getElementsByClassName("button2");
                console.log(class_elements);
                console.log(class_elements.length);
                // Iterate over the HTMLCollection
                for (let i = 0; i < class_elements.length; i++) {
                    class_elements[i].innerHTML = "now";
                    console.log("class element updated:", class_elements[i]);
                }
            } 
        
            //Perform the replacement text here. 

            const textToFind = "Write. Correct. Rewrite.";
            const elementsWithText = findElementByText(textToFind);

            //const replacement_Text = "Correct with AI";
            const replacement_Text = data.Content;

            if (elementsWithText.length > 0) {
                elementsWithText.forEach(info => {
                    console.log(`Element found with ${info.id || ''} ${info.classList || ''}`);
                    // Replace the text "Correct" with "Wrong"
                    if (info.element) {
                        info.element.textContent = info.element.textContent.replace(textToFind, replacement_Text);
                    }
                });
            } else {
                console.log(`No element found with text: "${textToFind}"`);
            }

        }
           catch (err) {
            console.log(err);
        }

        //Here we search for the element with the replacement text if the above fails
        
    }

    // Call the async function
    fetchData().then(r => console.log('Ok')).catch(err => console.log(err));
});


// By Preference I would say use querybyID and and only use queryselectorall as last step only if nothing is found 
// or injection is unsecessful.
// Step 1: I would say use the getElementbyID
// Step 2: Find element by classID only if no tagID is found.
// Step 3: perform recursive search by text only if step 1 and step 2 fails 

//TODO: define interface to get data type on app.js such that no undefined is found 

//Achievements: if tagID did not work we use classID

// and then the last one is the search word for replacement.

