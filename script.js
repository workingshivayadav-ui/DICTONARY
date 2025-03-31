async function getdata() {
    const word = document.getElementById("search").value.trim();
    const meaningElement = document.getElementById("Meaning"); // Ensure this element exists in HTML
    const exampleElement = document.getElementById("Example");
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
        const response = await fetch(url);        
        const data = await response.json();        
        // Extracting the first definition
        console.log(data);
        const definition = data[0].meanings[0].definitions[0].definition || "Definition not found.";  
        const example = data[0].meanings[0].definitions[0].example || "No example available.";      
        console.log(definition); 
        meaningElement.innerHTML = definition; // Display definition in HTML
        exampleElement.innerHTML=example;
    } catch (error) {
        console.error(error);
        meaningElement.innerHTML = "Error fetching definition.";
    }
}
