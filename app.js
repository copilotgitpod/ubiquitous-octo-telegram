$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://django-api24.vercel.app/api/news?api_key=django-insecure-=cldztbc4jg&xl0!x673!*v2_=p$$eu)=7*f#d0#zs$44xx-h^`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                console.log(data)
            }
            myweather()
        }
    })
})
