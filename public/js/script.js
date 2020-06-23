function refresh() {
    axios.get('/admin/mydata')
    .then((res)=>{
        console.log(res);
        
        var ul = document.getElementById('users');
        ul.innerHTML = '<li class="list-group-item"><h3>Users</h3></li>';
        for(var i=0;i<res.data.length;i++)
        {
            var x = document.createElement('li');
            x.classList.add('list-group-item');
            x.innerHTML = res.data[i].username;
            ul.appendChild(x);
        }
    })
    .catch(err => console.log(err));
}