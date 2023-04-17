async function dataReturn(request, response) {
    const dynamicDate = new Date();
    const token = process.env.TOKEN_API;

    // const settings = {
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: {
    //         token: 'asd'
    //     }
    // };

    const dataResponse = await fetch(`https://maxxieconomica.com/api/json-api/products?token=${token}`);

    const dataResponseJson = await dataResponse.json();
    const products = dataResponseJson.products;

    response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
    response.json({
        date: dynamicDate.toGMTString(),
        products: products
    });
}

export default dataReturn;