$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://apinews24-f3abde7e8af7.herokuapp.com/api/news?api_key=53f1b64d-5042-47b5-b3d8-8f6da5f95cb3`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                console.log(data)
            }
            myweather()
        }
    })
})
