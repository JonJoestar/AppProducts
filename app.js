
// class Product{
//     constructor(name, price, year) {
//         this.name = name;
//         this.price = price;
//         this.year = year;
//     }
// }


// class UI {
//     addProduct(product) {
//         const productList = document.getElementById('product-list');
//         const element = document.createElement('div');
//         element.innerHTML = `
//         <div class='card text-center mb-4'>
//             <div class='card-body'>
//                 <strong>Product Name</strong>: ${product.name}
//                 <strong>Product Price</strong>: ${product.price}
//                 <strong>Product Year</strong>: ${product.year}
//                 <a href"#" class="btn btn-danger" name="delete">Delete</a>
//              </div>
//         </div>
//         `;
//         productList.appendChild(element);
//         this.resetForm();
//     }

//     resetForm() {
//         document.getElementById('product-form').reset();
//     }

//     deleteProduct(element) {
//         if (element.name === 'delete') {
//             element.parentElement.parentElement.parentElement.remove();
//             this.showMessage('Product Deleted', 'info');
//         }
//     }

//     showMessage(message, cssClass) {
//         const div = document.createElement('div');
//         div.className = `alert alert-${cssClass} mt-2`;
//         div.appendChild(document.createTextNode(message));
//         //show in dom
//         const container = document.querySelector('.container');
//         const app = document.querySelector('#App');
//         container.insertBefore(div, app);
//         setTimeout(function () {
//             document.querySelector('.alert').remove();
//         }, 3000)
//     }
     
// }

// //DOM events
// document.getElementById('product-form')
//     .addEventListener('submit', function (e) {
//         const name = document.getElementById('name').value;
//         const price = document.getElementById('price').value;
//         const year = document.getElementById('year').value;
        
//         const product = new Product(name, price, year);

//         const ui = new UI();
//         ui.addProduct(product);
//         ui.resetForm();
//         ui.showMessage('Product added Success', 'success')
        

//         e.preventDefault();
//     });

// document.getElementById('product-list').addEventListener('click', function(e) {
//     const ui = new UI()
//     ui.deleteProduct(e.target);
// });
    
 document.getElementById('product-form').addEventListener('submit', saveTask);
 

 function saveTask(e) {
    
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let year = document.getElementById('year').value;
    let sku = document.getElementById('sku').value;
    let marca = document.getElementById('marca').value;


    const product = {
        name,
        price,
        year,
        sku,
        marca
    };

    if (localStorage.getItem('productlist') === null) {
        let productlist = [];
        productlist.push(product);
        localStorage.setItem('productlist', JSON.stringify(productlist));
    } else {
        let productlist = JSON.parse(localStorage.getItem('productlist'));
        productlist.push(product);
        localStorage.setItem('productlist', JSON.stringify(productlist));
    }

    getproductlist();
    document.getElementById('product-form').reset();
    e.preventDefault();
    
 }

  function getproductlist() {
    let productlist = JSON.parse(localStorage.getItem('productlist'));
    let productlistView = document.getElementById('productlist');

    productlistView.innerHTML = '';

    for(let i = 0; i < productlist.length; i++) {
        let name = productlist[i].name;
        let price = productlist[i].price;
        let year = productlist[i].year;
        let sku = productlist[i].sku;
        let marca = productlist[i].marca;


        productlistView.innerHTML += `<div class="card mb-3">
        <div class='card-body'>
                 <strong>Product Name</strong>: ${name}
                 <strong>Product Price</strong>: ${price}
                 <strong>Product Year</strong>: ${year}
                 <strong>SKU</strong>: ${sku}
                 <strong>Marca</strong>: ${marca}
                 <a class="btn btn-danger" onclick="deleteTask('${name}')">Delete</a>
            </div>
    </div>`;
    }
  }

  getproductlist();

  
  function deleteTask(name) {
    let productlist = JSON.parse(localStorage.getItem('productlist'));
    for(let i = 0; i < productlist.length; i++) {
        if (productlist[i].name == name) {
            productlist.splice(i, 1);
        }
    }
    localStorage.setItem('productlist', JSON.stringify(productlist)); 
    getproductlist();
  }
  getproductlist();
  