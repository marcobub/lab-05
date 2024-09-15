document.querySelector('a').href = 'https://keybr.com';

// Selecciona el div con id 'root'
const rootDiv = document.getElementById('root');

// Crea un nuevo elemento <ul> para la lista
const ul = document.createElement('ul');

// Lista de compras
const buyList = [
  "books",
  "bread",
  "eraser",
  "earphones",
  "collection-cards",
  "hdmi",
  "vga",
  "motherboard",
  "university-books",
];

// Crea un <li> para cada ítem y añádelo a la <ul>
buyList.forEach(buyList => {
  const li = document.createElement('li');
  li.textContent = buyList;
  ul.appendChild(li);
});

// Añade la <ul> al div con id 'root'
rootDiv.appendChild(ul);
