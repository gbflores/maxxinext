async function tempo(request, response) {
    const dynamicDate = new Date();

    const dataResponse = await fetch("https://maxxieconomica.com/api/json-api/orders?apiSecret=c6f61777-1a4b-4d17-832e-41a804f95a7d");
    const dataResponseJson = await dataResponse.json();
    const orders = dataResponseJson.orders;

    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')

    response.json({
        date: dynamicDate.toGMTString(),
        orders: orders
    });
}
//https://maxxieconomica.com/api/status-pedidos/1

export default tempo;