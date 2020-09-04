$("#form").submit(function(e){
    e.preventDefault()
    var query = $("#search").val()
   

    var url = "https://www.lexisrex.com/German/Sentence-Study/"+ encodeURI(query)
fetch(url, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": url,
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(response => response.text())
  .then(function(data){  
				document.querySelector("#result").innerHTML = data
				})

  

})
//213655669945 apikey = 15f4faa3f9e7a2