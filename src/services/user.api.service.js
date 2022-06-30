const baseUrl = 'http://jsonplaceholder.typicode.com/users'

const getUsers = (data) =>fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})
    .then((response) => response.json())
    .then((json) => console.log(json));

export {getUsers};

