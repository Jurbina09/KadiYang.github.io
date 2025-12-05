// Fetch product data from API
fetch("http://100.91.13.32:5000/api/v1/products")
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById("table-body");
  if (data.status != "success") {
    console.error("API error:",data.message);
    return;
  }
    // Loop through products and add rows
    data.data.forEach(product => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${product.Product_Id}</td>
        <td>${product.Product_Name}</td>
        <td>${product.Product_Category}</td>
        <td>${product.Product_Cost}</td>
        <td>${product.Product_Price}</td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  });

