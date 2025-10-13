const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', async function() {

    const nametxt = document.getElementById('name').value.trim();

    if (nametxt === "" || !isNaN(nametxt)) {
        alert("Please enter a valid name that is not a number.");
        return;
    }

    try{
        const url = `https://api.agify.io?name=${nametxt}`;
        let response = await fetch(url);
        let data = await response.json();
        let { age } = data;
        
        alert(`Your Name Is: ${nametxt} \nYour Age Is: ${age} Years Old I GUESS`)
    } catch(err) {
        alert(err);
    }
    


});
