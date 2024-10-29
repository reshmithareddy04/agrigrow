document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract data from the form
    const productName = document.getElementById('product-name').value;
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('product-image').files[0];

    // You can send this data to the backend or save it locally for now
    const product = {
        productName,
        category,
        quantity,
        price,
        image: URL.createObjectURL(image) // Temporary link for demo
    };

    // Store in localStorage or send to backend
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product added successfully!');
    document.getElementById('productForm').reset();
});
