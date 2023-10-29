import { error, redirect } from "@sveltejs/kit";

export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent;
    const { productId } = params;

    if (productId > 3) {
        // throw error(404, '상품이 존재하지 않습니다');
        throw redirect(307, '/products');
    }

    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const product = await response.json();

    return {
        product
    };
}