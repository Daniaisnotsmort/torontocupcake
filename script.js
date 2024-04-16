console.log("hello world");
var client = contentful.createClient({
  space: 'j1qsl0lnuvgn',
  accessToken: 'ONJyASb1esrdeoCq7_Ko8r2I3CyfCuukiYXrChMB1Oc',
});
var productsDiv = document.getElementById('product');


client.getEntries({content_type: 'products',}).then(function (entries) {

  entries.items.forEach(function (entry) {


      var productDiv = document.createElement('div'); 
      productDiv.classList.add('product'); 
      var nameH3 = document.createElement('h3');
      
      nameH3.classList.add('description');
      nameH3.innerHTML = entry.fields.name;
      var description = document.createElement('h3');
      description.innerHTML = entry.fields.description;
      

      var mainImage = document.createElement('img');
      mainImage.classList.add('main-images');
      if (entry.fields.mainImage){
          mainImage.src = entry.fields.mainImage.fields.file.url;
      }
      var productPrices = document.getElementById('product-prices');
      var productDiv = document.createElement('div');
    var price = document.createElement('h3');
    price.innerHTML = entry.fields.price;

    var linkToDetails = document.createElement('a');
    linkToDetails.href = 'cupcake.html?id=' + entry.sys.id;
    linkToDetails.appendChild(mainImage);
    productDiv.appendChild(description);
    
    productDiv.appendChild(nameH3); 
    productDiv.appendChild(description);
    productDiv.appendChild(price);
    productDiv.appendChild(linkToDetails);
    if (entry.fields.name){
      descriptionDiv.appendChild(productDiv);
    } else {
      productsDiv.appendChild(productDiv);
    }

});
});
