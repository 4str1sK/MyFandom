let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');

            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade')
                }, (idx + 1) *50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)

    })
});

const gallery = document.getElementById("gallery");

fandomData.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <a href="${item.link}" target="_blank" class="card-link">
    <img src="${item.image}" alt="${item.title}" onerror="this.src='imgs/Error.jpg'">
    <div class="card-content">
      <div class="card-title">${item.title}</div>
      <div class="card-stats">${item.stats}</div>
       <div class="card-thoughts">${item.thoughts}</div>
    </div>
  `;
  gallery.appendChild(card);
});
