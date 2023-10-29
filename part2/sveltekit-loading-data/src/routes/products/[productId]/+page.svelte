<script>
    export let data; //data prop
    // const product = data.product;

    const { product } = data;
</script>

<h1>제품 상세페이지</h1>
<div>
    <h2>{product.title}</h2>
    <h3>가격: {product.price}원</h3>
    <p>설명: {product.description}</p>
</div>