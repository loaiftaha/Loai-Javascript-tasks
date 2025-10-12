
function fetchIP() {
    
    fetch('https://api.ipify.org/')
    .then(response => {
        if (!response.ok) 
            throw new Error('Check the network response');
        return response.text();
        
    })
    .then(data => document.getElementById('Btn').innerText = data)
    .catch(error => alert('Error Alert:\n' + error.message));
    
}
