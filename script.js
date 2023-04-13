const button = document.getElementsByTagName("button")
let number = 0

$(document).ready(function() {
    $(".button").click(function () {
        number++
        if (number > 1) {
            alert(`Foram adicionados ${number}`)
        } else {
            alert(`Foi adicionado ${number}`)
        }
    })
})



