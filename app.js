$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://flaskpi.vercel.app/api/news`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                console.log(data.news[0].tit)
            }
            myweather()
        }
    })
})
