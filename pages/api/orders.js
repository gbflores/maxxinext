async function tempo(request, response){
    const dynamicDate = new Date();

    const ordersResponse = await fetch("https://maxxieconomica.com/api/json-api/1");
    const ordersResponseJson = await ordersResponse.json();
    const total = ordersResponseJson.total;
    const products = ordersResponseJson.products;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

    response.json({
        date: dynamicDate.toGMTString(),
        products: products,
        total: total
    });
}
//https://maxxieconomica.com/api/status-pedidos/1

export default tempo;