async function dataReturn(request, response){
    const dynamicDate = new Date();

    const dataResponse = await fetch("https://maxxieconomica.com/api/home?apiSecret=c6f61777-1a4b-4d17-832e-41a804f95a7d");
    const dataResponseJson = await dataResponse.json();
    const total = dataResponseJson.total;
    const topproducts = dataResponseJson.topproducts;
    const bottomproducts = dataResponseJson.bottomproducts;
    const banners = dataResponseJson.banners;
    const categories = dataResponseJson.categories;

    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')

    response.json({
        date: dynamicDate.toGMTString(),
        total: total,
        topproducts: topproducts,
        bottomproducts: bottomproducts,
        banners: banners,
        categories: categories
    });
}
export default dataReturn;