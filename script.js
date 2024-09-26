const peerAdmin = document.querySelector(".peer_list .toggle");
const sublist = document.querySelector(".peer_list_sublist");
const worldChat = document.querySelector(".world-chat");
const v1_case = document.getElementById("v1");
const v2_case = document.getElementById("v2");
const v3_case = document.getElementById("v3");
const navbar = document.querySelector('.navbar');
const utilityOptions = document.querySelector(".utility-options");
const chatWrapper = document.querySelector(".chat-type-wrapper");
const backButton = document.querySelector(".back-btn button");
const navLinks = document.getElementById("nav-links");




document.addEventListener("DOMContentLoaded", () => {
  peerAdmin.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      if (chatWrapper.style.display === "block") {
        chatWrapper.style.display = "none";
        utilityOptions.style.display = "block";
      } else {
        utilityOptions.style.display = "none";
        chatWrapper.style.display = "block";
      }
    } else {
      if (sublist.style.display === "block") {
        sublist.style.display = "none";
      } else {
        sublist.style.display = "block";
        sublist.style.padding = "10px 0px 0px 0px";
      }
    }
  });

  v1_case.addEventListener("click", () => {

    // • if they don't have an authentication system in product but want it one with chat 
    // • if they don't have an authentication system in product and they dont want one either but chat

    // worldChat.classList.add('v1Case');

    const v1Content = pToAdminCaseContent(
      "CASE1 - If they already have an authentication system in product (JWT) and just want the chat.",
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],

    );
    peerToAdminCases(v1Content);

  });

  v2_case.addEventListener("click", () => {
    const v2Content = pToAdminCaseContent(
      "CASE2 - Some other scenario with the chat",
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    );
    peerToAdminCases(v2Content);
  });

  v3_case.addEventListener("click", () => {
    const v3Content = pToAdminCaseContent(
      "CASE3 - A different use case",
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
      ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    );
    peerToAdminCases(v3Content);
  });



  backButton.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      chatWrapper.style.display = "none";
      utilityOptions.style.display = "block";
    } else {
      chatWrapper.style.display = "none";
    }
  });
});



function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}



function pToAdminCaseContent(title, benefits, provides, steps, examples) {
  return `
    <section class="v1_wrapper">
      <h4>${title}</h4>
      <div class="v1_contants">
        <div class="v1_contant_cards">
          <h5>Benefits</h5>
          <ul>${benefits.map(item => `<li>${item}</li>`).join('')}
            <img class="icon" src="Asset/arrow.png" alt="icon" />
          </ul>
          <button class="read_more_btn">Read more</button>
        </div>
        <div class="v1_contant_cards">
          <h5>Provides</h5>
          <ul>${provides.map(item => `<li>${item}</li>`).join('')}
            <img class="icon" src="Asset/arrow.png" alt="icon" />
          </ul>
          <button class="read_more_btn">Read more</button>
        </div>
        <div class="v1_contant_cards">
          <h5>Steps</h5>
          <ul>${steps.map(item => `<li>${item}</li>`).join('')}
            <img class="icon" src="Asset/arrow.png" alt="icon" />
          </ul>
          <button class="read_more_btn">Read more</button>
        </div>
        <div class="v1_contant_cards">
          <h5>Examples</h5>
          <ul>${examples.map(item => `<li>${item}</li>`).join('')}
            <img class="icon" src="Asset/arrow.png" alt="icon" />
          </ul>
          <button class="read_more_btn">Read more</button>
        </div>
      </div>
    </section>
  `;
}

function peerToAdminCases(content) {
  console.log("content", content)
  worldChat.innerHTML = content;
  if (window.innerWidth <= 768) {
    utilityOptions.style.display = "none";
    chatWrapper.style.display = "block";
  } else {
    chatWrapper.style.display = "block";
  }
}


document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !navLinks.contains(event.target)) {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  }
});
