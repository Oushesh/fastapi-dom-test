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
            //satic url needed
            const api_url = "https://heroku-backend-dom-f6f9a6e0eae5.herokuapp.com/"
            //let response = await fetch('http://localhost:8000');
            let response = await fetch(api_url);
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

