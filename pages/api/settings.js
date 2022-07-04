async function dataReturn(request, response){
    const dynamicDate = new Date();

    const dataResponse = await fetch("https://maxxieconomica.com/api/json-api/settings?apiSecret=c6f61777-1a4b-4d17-832e-41a804f95a7d");
    const dataResponseJson = await dataResponse.json();
    const topproducts = dataResponseJson.topproducts;
    const bottomproducts = dataResponseJson.bottomproducts;
    const banners = dataResponseJson.banners;
    const promoproducts = dataResponseJson.promoproducts;

    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')

    response.json({
        date: dynamicDate.toGMTString(),
        topproducts: topproducts,
        bottomproducts: bottomproducts,
        banners: banners,
        promoproducts: promoproducts
    });
}

export default dataReturn;