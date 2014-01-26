var Hapi = require('hapi');

var routes = [
    { method: 'GET', path: '/', config: { handler: getHome } },
    { method: 'GET', path: '/products', config: { handler: getProducts, validate: { query: { name: Hapi.types.String() } } } },
    { method: 'GET', path: '/products/{id}', config: { handler: getProduct } },
    { method: 'POST', path: '/products', config: { handler: addProduct, validate: { payload: { name: Hapi.types.String().required().min(3) } } } }
];


var products = [
    {
        id: 1,
        name: 'Guitar'
    },
    {
        id: 2,
        name: 'Banjo'
    }
];

function getProducts(request, reply) {

    if (request.query.name) {
        return reply(findProducts(request.query.name));
    }

    reply(products);
}

function findProducts(name) {

    return products.filter(function (product) {
        return product.name.toLowerCase() === name.toLowerCase();
    });
}

function getProduct(request, reply) {

    var product = products.filter(function (p) {
        return p.id === parseInt(request.params.id);
    }).pop();

    reply(product);
}

function addProduct(request, reply) {

    var product = {
        id: products[products.length - 1].id + 1,
        name: request.payload.name
    };

    products.push(product);

    reply(product).code(201).header('Location', '/products/' + product.id);
}

function getHome(request, reply){
    reply({data: 'Data'})
}


var server = new Hapi.Server(8000);

exports.server = server;
exports.routes = routes;