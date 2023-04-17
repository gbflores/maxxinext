function Product({ product }) {
    <div>{product}</div>
}

export async function getStaticPaths() {
    const res = await fetch('https://maxxieconomica.com/api/json-api/products?apiSecret=c6f61777-1a4b-4d17-832e-41a804f95a7d')
    const products = await res.json()

    const paths = products.map((product) => ({
        params: { id: product.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://maxxieconomica.com/api/json-api/products/slug/${params.id}?apiSecret=c6f61777-1a4b-4d17-832e-41a804f95a7d'/`)
    const product = await res.json()

    return { props: { product } }
}

export default Product;