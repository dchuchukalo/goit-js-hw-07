const infoAboutList = list => {
  const ulRef = document.querySelector(list);
  const arrOfChildren = ulRef.children;
  console.log(`В списке ${arrOfChildren.length} категории.`);
};

infoAboutList('ul#categories');

const infoAboutListItem = listItems => {
  const arrOfElementsRef = document.querySelectorAll(listItems);
  arrOfElementsRef.forEach(li => {
    const text = li.querySelector('h2').textContent;
    const length = li.querySelectorAll('li').length;
    console.log(`Категория: ${text}`);
    console.log(`Количество элементов: ${length}`);
  });
};

infoAboutListItem('ul#categories li.item');