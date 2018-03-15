fetch(' https://od-api.oxforddictionaries.com/api/v1/entries/en/ace', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'app_id': '528094f6',
            'app_key': '264cb50ae47efe20c74f6c72b2a9956d'
        },
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    });