let profile = document.getElementById("profile");
console.log(profile);

let bione = document.getElementById("bione");
console.log(bione);

let bitow = document.getElementById("bitow");
console.log(bitow);

let bithre = document.getElementById("bithre");
console.log(bithre);

bione.addEventListener("click", function () {
  profile.style.backgroundImage =
    'url("/images/pexels-calebe-miranda-793166.jpg")';
});

bitow.addEventListener("click", function () {
  profile.style.backgroundImage =
    'url("/images/pexels-francesco-ungaro-2325446.jpg")';
});

bithre.addEventListener("click", function () {
  profile.style.backgroundImage =
    'url("/images/pexels-joão-vítor-heinrichs-5022456.jpg")';
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

let like = document.getElementById("like");
console.log(like);

let num = document.getElementById("num");
console.log(num);

like.addEventListener("click", function () {
  like.style.color = "#1b86f9";
  ST.innerText = Number(ST.innerText) + 1;
});

// let Exit = document.getElementById('Exit');
// Exit.addEventListener('click',function()
// {
//   window.alert('mero')

// })


let Certificate = document.getElementById("Certificate");
console.log(Certificate);

let Cer = document.getElementById("Cer");
console.log(Cer);

Certificate.addEventListener("click", function () {
  Cer.classList.toggle("color");


});

let form = document.querySelector("form");
let chatArea = document.querySelector("#chat-area");
let inputMessage = document.querySelector("#message");

async function getBotAnswers() {
  const responsText = await fetch("/js/bot_answer.json");
  const data = await responsText.json();
  form.onsubmit = (e) => {
    e.preventDefault();
    let inputMessageS = inputMessage.value.trim();
    data.forEach((answer) => {
      chatArea.innerHTML += `
<div class="album box BOX" id="About">
<div class="status-main">
<div class="status-img"></div>
<div class="album-detail">
<div class="album-title"><strong>Ammar Ahmed</strong> <svg viewBox="0 0 24 24" aria-label="Verified account" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr  correct2" data-testid="icon-verified"><g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g></svg></div>
<div class="album-date">1 minutes ago</div>
</div>
<button class="intro-menu"></button>
</div>
<div class="album-content">
<div class="accordion">
<div class="accordion-item">
<button id="accordion-button-1" aria-expanded="false"><span class="accordion-title">${(answer =
        inputMessageS)}</span>
</button>
<!-- <div class="accordion-content">
<a href="#"><img src="/Ammar/images/Screenshot 2023-02-16 155937.png" alt="" class="album-photo"></a>
</div> -->
</div>
</div>
</div>

<div class="album-actions">
<a href="#" class="album-action">
<svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>0</a>
<a href="#" class="album-action">
<svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1" viewBox="0 0 24 24">
<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg>0</a>
<a href="#" class="album-action">
<svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1" viewBox="0 0 24 24">
<path d="M17 1l4 4-4 4"></path>
<path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"></path>
<path d="M21 13v2a4 4 0 01-4 4H3"></path>
</svg>0</a>
</div>
</div>`;
    });
    inputMessage.value = "";
  };
}
getBotAnswers();
