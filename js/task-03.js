const images = [
  {
    src:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    src:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    src:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const setMarkup = arr => {
  const arrMarkup = arr.reduce((arrOfMarkup, image) => {
    const elementRef = document.createElement('li');
    elementRef.classList.add('list-item-js');
    const imgRef = document.createElement('img');
    imgRef.classList.add('list-item-img-js')

    elementRef.append(imgRef);

    const atributes = Object.keys(image);

    for (const airibute of atributes) {
      imgRef.setAttribute(airibute, image[airibute]);
    }

    arrOfMarkup.push(elementRef);
    return arrOfMarkup;
  }, []);

  const listRef = document.querySelector('ul#gallery');
  listRef.append(...arrMarkup);
};

setMarkup(images);
