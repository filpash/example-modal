let cars = [
    {id: 1, title: 'Chevrolet', price: 100000, img: 'https://assets.hemmings.com/uimage/67098594-770-0@2X.jpg?rev=1'},
    {id: 2, title: 'Mercedes Benz', price: 90000, img: 'https://s.auto.drom.ru/i24224/c/photos/fullsize/mercedes-benz/s-class/mercedes-benz_s-class_838021.jpg'},
    {id: 3, title: 'Ford', price: 80000, img: 'https://cs6.pikabu.ru/post_img/big/2014/10/27/0/1414355523_214695894.jpg'}
]

const toHTML = cars => `
    <div class="col">
        <div class="card">
            <img src="${cars.img}" style="height: 300px;" class="card-img-top" alt="${cars.title}">
            <div class="card-body">
                <h5 class="card-title">${cars.title}</h5>
                <a href="#" class="btn btn-primary" data-btn="price" data-id="${cars.id}">Watch coast</a>
                <a href="#" class="btn btn-danger" data-btn="remove" data-id="${cars.id}">Delete</a>
            </div>
        </div>
    </div>
`

function render() {
    const html = cars.map(toHTML).join('')
    document.querySelector('#cars').innerHTML = html
}
render()

const priceModal = $.modal({
    title: 'Coast',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler(){
                priceModal.close()
        }}
    ]
})

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const car = cars.find(f => f.id === id)

    if (btnType === 'price') {
        priceModal.setContent(`
            <p>Car ${car.title}: <strong>${car.price}$</strong></p>
        `)
        priceModal.open()
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Are you sure?',
            content: `<p>You remove car: <strong>${car.title}</strong></p>`
        }).then(() => {
            cars = cars.filter(f => f.id !== id)
            render()
        }).catch(() => {
            console.log('Cancel')
        })
    }
})

