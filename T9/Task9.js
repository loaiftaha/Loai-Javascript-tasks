
function fetchIP() {
    
    fetch('https://api.ipify.org/')
    .then(response => {
        if (!response.ok) 
            throw new Error('Check the network response');
        return response.text();
        
    })
    .then(data => console.log('Here Is The Returned Data Including Yout IP Address: \n' +
         data))
    .catch(error => console.error(error));
    
}
