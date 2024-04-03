fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    const summaryItems = data
      .map((item, index) => {
        return `
        <li class="summary-item" data-item-type="accent-${index + 1}">
        <div class="flex-group">
          <img src="${item.icon}" alt="">
          <h3 class="summary-item-title">${item.category}</h3>
        </div>
        <p class="summary-score"><span>${item.score}</span>/100</p>
      </li>
        `;
      })
      .join('');

    document.querySelector('.summary-list').innerHTML = summaryItems;
  });
