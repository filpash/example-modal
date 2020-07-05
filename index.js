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
                <a href="#" class="btn btn-primary" data-btn="price" data-id="">Посмотреть цену</a>
                <a href="#" class="btn btn-danger" data-btn="remove" data-id="">Удалить</a>
            </div>
        </div>
    </div>
`

function render() {
    const html = cars.map(toHTML).join('')
    document.querySelector('#cars').innerHTML = html
}
render()

const modal = $.modal({
    title: 'New Title',
    closable: true,
    content: `
            <h4>Modal content</h4>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Danger btn clicked')
            modal.close()
        }}
    ]
})

