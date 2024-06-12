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

/*
        // Also innerHTML changes and might corrupts the entire font
        //its advised to use: textContent instead. element.textContent = item.Content;
        document.addEventListener('DOMContentLoaded', async function() {
        async function fetchData() {
            let url = new URL(window.location.href);
        
                try {
                    let response = await fetch('http://localhost:8000');
                    let data = await response.json();
                    console.log(data);
                    //let element = document.querySelector('.' + data.Class);
                    //let element = document.getElementById("title");

                    let element = document.getElementById("title--sub");   
                    
                    if (element) {
                        element.innerHTML = data.Content;
                        console.log("Hey There");
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        
        
        // Call the async function
        fetchData().then(r => console.log('Ok')).catch(err => console.log(err))
    })

*/

// TODO: By Preference I would say use querybyID and 
// not use classes and you can use the function select all.
//More generic function to find elemnet via custom function
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

//how to call the search and replacement function
document.addEventListener('DOMContentLoaded', async function() {
    async function fetchData() {
        let url = new URL(window.location.href);
        
        const textToFind = "Grammar Rewriter is a free online grammar checker that helps to write clear and concise sentences.";
        const elementswithText = findElementByText(textToFind);
    
        console.log(elementswithText)
        //The replacement-text comes from the endpoint here.
        const replacement_Text = "Start Now! Do stuffs with AI";
        
        

        try {
            let response = await fetch('http://localhost:8000');
            let data = await response.json();
            console.log(data);

            // Fetch the data 
            if (elementsWithText.length > 0) {
                elementsWithText.forEach(info => {
                    console.log(`Element found with ${info.id || ''} ${info.classList || ''}`);
                    // Replace the text "Correct" with "Wrong"
                    if (info.element) {
                        info.element.textContent = info.element.textContent.replace(textToFind, data.Content);
                    }
                });
            } else {
                console.log(`No element found with text: "${textToFind}"`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
})


