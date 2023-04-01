let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

 menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   header.classList.toggle('active');
   document.body.classList.toggle('active');
}

window.onscroll = () =>{
   if(window.innerWidth < 800){
      menu.classList.remove('fa-times');
      header.classList.remove('active');
      document.body.classList.remove('active');
   }

   document.querySelectorAll('section').forEach(sec =>{

      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
         document.querySelectorAll('.header .navbar a').forEach(links =>{
            links.classList.remove('active');
            document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active')
         });
      };

   });

}

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const notification = document.querySelector('#notification');
    notification.textContent = 'Sending...';
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
    .then(response => {
      if (response.ok) {
        notification.textContent = 'Your mail sent successfully.';
        setTimeout(() => {
          notification.textContent = '';
        }, 3000);
        form.reset();
      } else {
        notification.textContent = 'Failed to send mail.';
      }
    })
    .catch(error => {
      notification.textContent = 'An error occurred: ' + error.message;
    });
  });
