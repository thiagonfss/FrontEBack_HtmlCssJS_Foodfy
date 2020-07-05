const cards = document.querySelectorAll('.cards')



for (let card of cards){
    card.addEventListener('click',function () {
        const imageId = card.getAttribute('id')
        window.location.href = `/receita?id=${imageId}`

    })

}