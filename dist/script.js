document.querySelectorAll('#btn').forEach(item => {
    item.addEventListener('click', event => {
      console.log('clicked');
      item.nextElementSibling.classList.toggle('active');
      if (item.firstElementChild.classList.contains('not_active')){
        item.firstElementChild.classList.toggle('not_active');
        item.lastElementChild.classList.toggle('not_active');
      }
      else if(item.lastElementChild.classList.contains('not_active')){
        item.firstElementChild.classList.toggle('not_active');
        item.lastElementChild.classList.toggle('not_active');
      }
      else {
          return;
      }
    });
  });