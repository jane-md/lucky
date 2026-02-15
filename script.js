document.addEventListener("DOMContentLoaded", () => {  

  const password = "070725";  
  let attempts = 0;  

  // --- LOCK SCREEN ---
  function unlock() {  
    const input = document.getElementById("pass").value;  
    if (input === password) {  
      document.getElementById("lock").style.display = "none";  
      document.getElementById("app").style.display = "flex";  
      document.getElementById("mobile-menu-btn").style.display = "block";  
      document.getElementById("flower-modal").style.display = "flex";  
    } else {  
      attempts++;  
      document.getElementById("error").innerText = "Incorrect password";  
      if (attempts >= 3) {  
        document.getElementById("pass").disabled = true;  
      }  
    }  
  }  
  window.unlock = unlock;  

  // --- FLOWER MODAL ---
  function goHome() {  
    document.getElementById("flower-modal").style.display = "none";  
    openSection("home");  
    startTyping();  
  }  
  window.goHome = goHome;  

  // --- LETTER ---
  function openLetter() {  
    document.getElementById("envelope-container").style.display = "none";  
    document.getElementById("letter-content").style.display = "block";  
    startTyping();  
  }  
  window.openLetter = openLetter;  

  // --- SECTIONS ---
  function openSection(id) {  
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));  
    document.getElementById(id).classList.add("active");  

    if (id === "letter") {  
      document.getElementById("envelope-container").style.display = "block";  
      document.getElementById("letter-content").style.display = "none";  
      document.getElementById("type").innerHTML = "";  
      i = 0;  
    }  

    if (id === "gallery") {  
      setTimeout(initGame3, 200);  
    }  

if (id === "gift") {
  // SHOW STATIC GIFT ALWAYS
  const giftDisplay = document.getElementById("gift-display");
  if (giftDisplay) giftDisplay.style.display = "flex"; // always visible
}
    

    document.querySelectorAll(".menu-buttons button").forEach(btn => {  
      btn.classList.remove("active");  
      if (btn.dataset.section === id) btn.classList.add("active");  
    });  

    closeMenu();  
  }  
  window.openSection = openSection;  

  // --- TYPING EFFECT ---
  const letter = `  
‎Clarisse,
‎
‎Hello, pretty. Happy 7th monthsary satin po. I'm sad kase late ko 'to natapos and hindi umabot sa mismong araw ng monthsary natin po. I'm sorry po baby ah. Paulit ulit man pero gusto ko pa rin humingi ng sorry sayo po about everything.
‎
‎I want you to know na nakikita kita. Nakikita ko yung effort mo po, yung patience mo, yung times na pinipili mo pa rin ako kahit pagod ka na po. And I'm sorry po kung may mga moments na hindi ko napaparamdam sayo na kasama mo ako sa lahat ng bigat po. Kapag nahihirapan ka po, gusto kong maramdaman mo na hindi ka nag-iisa. I know po na madalas na yung sablay ko, kulang sa effort, pero willing ako magbago po. I'm willing din na makinig at willing umintindi. I'm willing na piliin ka araw-araw, hindi lang kapag madali yung situation natin po.
‎
‎If one day you feel tired again po, I hope you remember this po na pwede ikaw magpahinga, and I'll still be right here po. Hindi mo kailangang maging strong palagi, baby. Normal lang naman po na ma-feel po yan, valid po yan.
‎
‎I'm still learning how to love you better po, and I promise I'm trying po palagi, hindi lang sa words, kundi sa actions din. I want to be someone who makes life lighter for you, not heavier po :(( 
‎
‎If ever dumating yung days na hindi mo alam kung kaya mo pa, I hope you remember din po na hindi mo kailangang piliin ako mag-isa po. I'm choosing you too, baby. Araw-araw po. Kahit mahirap, kahit messy, kahit imperfect yung relationship natin. I'm here po, always.
‎
‎When I think about the future, ikaw pa rin po. More dates, more photos, more late-night talks, more moments na pagod tayo pero magkasama pa rin.
‎
‎Ikaw yung safe place ko. Ikaw yung tahanan ko. Ikaw yung best friend ko,yung baby ko, at partner ko sa lahat. At sana araw-araw, maparamdam ko sayo na masaya ako because of you.
‎
‎Thank you, baby. Thank you for choosing me, even on days na mahirap. Thank you for being patient with me. And I promise, I'm not here to drain you po. I'm here to walk with you. Side by side. At kahit dumating yung times na magtampo pa tayo po o magka-misunderstanding, mas gusto ko pa rin piliin na ayusin lahat.
‎
‎Mahal na mahal ko po ikaw. 
‎Happy 7th monthsary, my baby.
‎I love you more than words, more than anything.
‎
— Bobby  
`;  

  let i = 0;  
  let typing;  
  function startTyping() {  
    const box = document.getElementById("type");  
    typing = setInterval(() => {  
      if (i < letter.length) {  
        box.innerHTML += letter[i];  
        i++;  
      } else {  
        clearInterval(typing);  
      }  
    }, 45);  
  }  
  window.startTyping = startTyping;  

  function skip() {  
    clearInterval(typing);  
    document.getElementById("type").innerText = letter;  
  }  
  window.skip = skip;  

  // --- CONTRACT ---
  function sign() {  
    const checks = document.querySelectorAll("input[type=checkbox]");  
    let ok = true;  
    checks.forEach(c => { if (!c.checked) ok = false; });  
    const name = document.getElementById("sign").value;  
    if (ok && name) {  
      document.getElementById("signed").innerText = "Signed with love by " + name + " ❤️";  
    }  
  }  
  window.sign = sign;  

  // --- MOBILE MENU ---
  function toggleMenu() {  
    document.getElementById("sidebar").classList.toggle("active");  
    document.getElementById("overlay").classList.toggle("active");  
  }  
  window.toggleMenu = toggleMenu;  

  function closeMenu() {  
    document.getElementById("sidebar").classList.remove("active");  
    document.getElementById("overlay").classList.remove("active");  
  }  

  // --- MOVIE ---
  function showMovie() {  
    const intro = document.getElementById("movie-intro");  
    const video = document.getElementById("movie-video");  
    if (intro && video) {  
      intro.style.display = "none";  
      video.style.display = "block";  
    }  
  }  
  window.showMovie = showMovie;  

  // --- GAME 1: PUZZLE CLICK ---
  document.querySelectorAll(".puzzle-piece").forEach(piece => {
  piece.addEventListener("click", () => {
    piece.classList.add("flipped");

    const msg = piece.dataset.msg || "❤️";
    const msgBox = document.querySelector(".puzzle-message");
    msgBox.innerText = msg;
    setTimeout(() => msgBox.innerText = "", 10000);
  });
});

  // --- GAME 2: MEMORY MATCH ---
  let flippedCards = [];  
  let matchedPairs = 0;  

  document.querySelectorAll(".memory-card").forEach(card => {  
    card.addEventListener("click", () => {  
      if (card.classList.contains("flipped") || flippedCards.length >= 2) return;  

      card.classList.add("flipped");  
      flippedCards.push(card);  

      if (flippedCards.length === 2) {  
        const [first, second] = flippedCards;  
        if (first.dataset.pair === second.dataset.pair) {  
          document.querySelector(".memory-message").innerText = "Yey! Match!";  
          matchedPairs++;  
          if (matchedPairs === 4) {  
            document.querySelector(".memory-message").innerText = "I miss you, baby! ❤️";  
          }  
          flippedCards = [];  
        } else {  
          setTimeout(() => {  
            first.classList.remove("flipped");  
            second.classList.remove("flipped");  
            flippedCards = [];  
          }, 1000);  
        }  
      }  
    });  
  });  

  // --- GAME 3: DATE MATCH QUIZ ---
  function initGame3() {  
    const photos = document.querySelectorAll(".drag-photo");  
    const boxes = document.querySelectorAll(".date-box");  
    const dateMsg = document.getElementById("date-message");  
    if (!photos.length || !boxes.length) return;  

    let draggedItem = null;  

    boxes.forEach(box => box.innerHTML = "");  
    photos.forEach(photo => {  
      photo.setAttribute("draggable", "true");  
      if (photo.parentNode !== document.body) document.body.appendChild(photo);  
    });  

    photos.forEach(photo => {  
      photo.addEventListener("dragstart", () => { draggedItem = photo; });  
    });  

    boxes.forEach(box => {  
      box.addEventListener("dragover", e => {  
        e.preventDefault();  
        box.classList.add("hovered");  
      });  
      box.addEventListener("dragleave", () => { box.classList.remove("hovered"); });  
      box.addEventListener("drop", () => {  
        box.classList.remove("hovered");  
        if (!draggedItem) return;  

        if (draggedItem.dataset.match === box.dataset.match) {  
          box.innerHTML = "";  
          box.appendChild(draggedItem);  
          draggedItem.setAttribute("draggable", "false");  
          showDateMessage(box.dataset.match);  
        } else {  
          dateMsg.innerText = "Oops 😅 Try again, love 💕";  
        }  

        draggedItem = null;  
      });  
    });  
  }  

  function showDateMessage(type) {  
    const dateMsg = document.getElementById("date-message");  
    let msg = "";  
    switch (type) {  
      case "first": msg = "Our first date… where I fell for you 💖"; break;  
      case "mcdo": msg = "Cheap food, priceless love 🍟🥰"; break;  
      case "ktv": msg = "Your voice is my favorite song 🎤💕"; break;  
      case "hotel": msg = "Just us and endless cuddles 💞"; break;  
      case "museum": msg = "Art + You = Perfection 🏛️❤️"; break;  
      case "photo": msg = "Proof we’re cute forever 📸🥹"; break;  
    }  
    dateMsg.innerText = msg;  
  }  
  window.initGame3 = initGame3;  
  window.showDateMessage = showDateMessage;  

/// --- CONTRACT SIGNING SYSTEM ---
/// --- CONTRACT SIGNING SYSTEM ---
function saveContract() {
  const input = document.getElementById("signature-input");
  const loading = document.getElementById("contract-loading");
  const finalSign = document.getElementById("final-signature");
  const saveBtn = document.getElementById("save-contract");

  if (!input.value.trim()) {
    alert("Please sign first, baby ❤️");
    return;
  }

  // Hide Save button
  saveBtn.style.display = "none";

  // Show loading
  loading.style.display = "block";

  // Fake processing delay
  setTimeout(() => {
    loading.style.display = "none";

    // Show signature in the contract
    finalSign.innerText = input.value;

    // Smooth scroll contract into view
    document.getElementById("contract").scrollIntoView({ behavior: "smooth" });

    // Optional: show small confirmation
    const confirmMsg = document.createElement("p");
    confirmMsg.innerText = "Contract saved ❤️";
    confirmMsg.style.textAlign = "center";
    confirmMsg.style.marginTop = "15px";
    confirmMsg.style.fontWeight = "600";
    document.getElementById("contract-body").appendChild(confirmMsg);

  }, 1500);
}
window.saveContract = saveContract;
});
