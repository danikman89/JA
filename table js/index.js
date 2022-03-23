const table = document.getElementById('table');
const checkboxInstalment = document.getElementById('instalment');
const inStock = document.getElementById('stock');
let desc = false;

function drawRow(item, index) {
  return `
  <tr class='color${item.count < 5 ? '_active' : ''}'>
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.count}</td>
    <td>${item.instalment ? '✅' : ''}</td>
  </tr>
  `;
}

function drawTable(data) {
  return `
  <table class="table">
    <thead>
      <tr class='head' >
        <th>№</th>
        <th class ="name">Название</th>
        <th class ="price">Цена ${desc === false ? '⬆️' : '⬇️'}</th>
        <th class ="count">Количество</th>
        <th>В рассрочку</th>
      </tr>
    <thead>
    <tbody>
      ${data.map(drawRow).join('')}
    </tbody>
  </table>
  `;
}

function render(arr) {
  table.innerHTML = drawTable(arr);
}
render(tableData);

//Count sort
function sortCount(arr) {
  const array = sortArrayByCount(arr, 'count', desc);
  render(array);
  desc = !desc;
}

function sortArrayByCount(array, sort, desc) {
  return array
    .slice()
    .sort((a, b) => (!desc ? a[sort] - b[sort] : b[sort] - a[sort]));
}

table.addEventListener('click', function (event) {
  if (event.target.classList.contains('count')) {
    if (checkboxInstalment.checked) {
      const array = tableData.filter(i => i.instalment);
      sortCount(array);
    } else if (inStock.checked) {
      const array = tableData.filter(i => i.count > 0);
      sortCount(array);
    } else {
      sortCount(tableData);
    }
  }
});

//Price sort
function sortPrice(arr) {
  const array = sortArrayByPrice(arr, 'price', desc);
  render(array);
  desc = !desc;
}

function sortArrayByPrice(array, sort, desc) {
  return array
    .slice()
    .sort((a, b) =>
      !desc
        ? a[sort].replace(/\D/g, '') - b[sort].replace(/\D/g, '')
        : b[sort].replace(/\D/g, '') - a[sort].replace(/\D/g, '')
    );
}

table.addEventListener('click', function (event) {
  if (event.target.classList.contains('price')) {
    if (checkboxInstalment.checked) {
      const array = tableData.filter(i => i.instalment);
      sortPrice(array);
    } else if (inStock.checked) {
      const array = tableData.filter(i => i.count > 0);
      sortPrice(array);
    } else {
      sortPrice(tableData);
    }
  }
});

//Checkbox only in installments
checkboxInstalment.addEventListener('click', function () {
  if (checkboxInstalment.checked) {
    inStock.disabled = true;
    const array = tableData.filter(i => i.instalment);
    render(array);
  } else {
    inStock.disabled = false;
    render(tableData);
  }
});

//Checkbox available in stock
inStock.addEventListener('click', function () {
  if (inStock.checked) {
    checkboxInstalment.disabled = true;
    const array = tableData.filter(i => i.count > 0);
    render(array);
  } else {
    checkboxInstalment.disabled = false;
    render(tableData);
  }
});
