const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function() {

    const nametxt = document.getElementById('name').value;
    const agetxt = document.getElementById('age').value;

    const taskObject = {
        name : nametxt ,
        age : agetxt ,
        timestamp : new Date().toLocaleString(),
    }

    const {name, age, timestamp} = taskObject

    const result = `Your name is: ${name} \nYour age is: ${age} \n ${timestamp}`

    alert(result);

});
