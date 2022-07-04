async function dataReturn(request, response) {
    const dynamicDate = new Date();

    const dataResponse = await fetch(`https://maxxieconomica.com/api/json-api/products?apiSecret=c6f61777-1a4b-4d17-832e-41a804f95a7d`);

    const dataResponseJson = await dataResponse.json();
    const products = dataResponseJson.products;

    response.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')

    response.json({
        date: dynamicDate.toGMTString(),
        products: products
    });
}

export default dataReturn;