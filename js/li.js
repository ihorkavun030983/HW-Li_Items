const liItems = document.querySelectorAll('ul.root>li');
liItems.forEach((liItem)=>{
    const ulItems = liItem.querySelectorAll('ul');
    ulItems.forEach((ulItem)=>{
    const lastLiItems = ulItem.querySelector('li:last-child');
    lastLiItems.classList.add('last');
  });
});


