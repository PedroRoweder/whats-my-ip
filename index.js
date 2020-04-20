const getIP = async() => {
    fetch('https://api.ipify.org/?format=json').then((response)=>{
        return response.json();
    }).then((data)=>{
        document.getElementById('resolverTitle').innerHTML = 'Your IP address is:';
        document.getElementById('ipResolver').innerHTML = data.ip;
    }) 
}
