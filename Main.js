document.addEventListener("DOMContentLoaded", function() {
    const carGallery = document.getElementById('car-gallery');
  
    const cars = [
      {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        price: '$25,000',
        image: 'toyota_camry.jpg'
      },
      {
        brand: 'Honda',
        model: 'Civic',
        year: 2021,
        price: '$20,000',
        image: 'honda_civic.jpg'
      },
      {
        brand: 'Ford',
        model: 'Mustang',
        year: 2020,
        price: '$30,000',
        image: 'ford_mustang.jpg'
      }
    ];
  
    cars.forEach(car => {
      const carItem = document.createElement('div');
      carItem.classList.add('car');
  
      const image = document.createElement('img');
      image.src = images/${car.image};
      carItem.appendChild(image);
  
      const carInfo = document.createElement('div');
      carInfo.classList.add('car-info');
      carInfo.innerHTML = `
        <h2>${car.brand} ${car.model}</h2>
        <p>Year: ${car.year}</p>
        <p>Price: ${car.price}</p>
      `;
      carItem.appendChild(carInfo);
  
      carGallery.appendChild(carItem);
    });
  });