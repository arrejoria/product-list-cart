console.log("JS Loaded");

// Variables principales
const catTitle = document.getElementById("catTitle");
const catProducts = document.getElementById("catProducts");

// Función para cargar el JSON
async function loadData() {
  try {
    const response = await fetch('/data.json');
    const { data } = await response.json();
    console.log(data);
    const { title, products } = data;

    catTitle.textContent = title;

    products.forEach(product => {
    });

  } catch (error) {
    console.error('Error cargando JSON:', error);
  }
}

loadData();


const renderProduct = (data) => {
    // const { name,}
    // const productItem = `
    //     <div class=""
    // `
}
