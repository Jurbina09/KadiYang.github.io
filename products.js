// Fetch product data from API
fetch("http://100.91.13.32:5000/api/v1/products")
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector("#inventoryTable tbody");

    // Loop through products and add rows
    data.forEach(product => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        <td>${product.stock}</td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  });
<body>
    <script src="products.js"></script>
</body>
