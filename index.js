$("#form").submit(function(e){
    e.preventDefault()
    var query = $("#search").val()
    let result = ''
    var API_KEY = '059e4316bf688ecda48c90a7a9f7d900'

    var url = 'http://api.serpstack.com/search?access_key='+API_KEY+'&type=web&query='+query

    $.get(url, function(data){
        $("#result").html('')
        data.organic_results.forEach(res => {
            result = `
                <h1>${res.title}</h1><br><a target="_blank" href="${res.url}">${res.url}</a>
                <p>${res.snippet}</p>
            `
            $("#result").append(result)
        });
    })

})