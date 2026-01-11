
document.getElementById("searchBtn")?.addEventListener("click",async()=>{
    const word = document.getElementById("wordInput").value.trim();
    const result = document.getElementById("result");

    result.textContent= "Loading......"

    try{
        const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

        );
        const data = await res.json();
        result.textContent = data[0].meanings[0].definitions[0].definition;
    } catch {
        result.textContent = "Word not Found";
    }
});