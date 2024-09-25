const peerAdmin = document.querySelector(".peer_list .toggle");
const sublist = document.querySelector(".peer_list_sublist");
const worldChat = document.querySelector(".world-chat");
const v1_case = document.getElementById("v1");
const v2_case = document.getElementById("v2");
const v3_case = document.getElementById("v3");
const navbar = document.querySelector('.navbar');
const utilityOptions = document.querySelector(".utility-options");
const worldChatWrapper = document.querySelector(".world-chat-wrapper");
const backButton = document.querySelector(".back-btn button");

document.addEventListener("DOMContentLoaded", () => {
  peerAdmin.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      if (worldChatWrapper.style.display === "block") {
        worldChatWrapper.style.display = "none";
        utilityOptions.style.display = "block";
      } else {
        utilityOptions.style.display = "none";
        worldChatWrapper.style.display = "block";
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

    worldChat.innerHTML = `
      <section class="v1_wrapper">
        <h4>CASE1 - If they already have an authentication system in product (JWT) and just want the chat </h4>
        <div class="v1_contants">
          <div class="v1_contant_cards">
            <h5>Benefits</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
              </ul>
              <button class="read_more_btn">Read more</button>
              </div>
          <div class="v1_contant_cards">
            <h5>Provides</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
            </ul>
            <button class="read_more_btn">Read more</button>
          </div>
          <div class="v1_contant_cards">
            <h5>Steps</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
            </ul>
            <button class="read_more_btn">Read more</button>
          </div>
          <div class="v1_contant_cards">
            <h5>Examples</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
            </ul>
            <button class="read_more_btn">Read more</button>
          </div>
        </div>
      </section>
    `;

    if (window.innerWidth <= 768) {
      utilityOptions.style.display = "none";
      worldChatWrapper.style.display = "block";
    } else {
      worldChatWrapper.style.display = "block";
    }
  });

  v2_case.addEventListener("click", () => {

    // • if they don't have an authentication system in product but want it one with chat 
    // • if they don't have an authentication system in product and they dont want one either but chat

    // worldChat.classList.add('v1Case');

    worldChat.innerHTML = `
      <section class="v1_wrapper">
        <h4>CASE1 - If they already have an authentication system in product (JWT) and just want the chat </h4>
        <div class="v1_contants">
          <div class="v1_contant_cards">
            <h5>Benefits</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
              </ul>
              <button class="read_more_btn">Read more</button>
              </div>
          <div class="v1_contant_cards">
            <h5>Provides</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
            </ul>
            <button class="read_more_btn">Read more</button>
          </div>
          <div class="v1_contant_cards">
            <h5>Steps</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
            </ul>
            <button class="read_more_btn">Read more</button>
          </div>
          <div class="v1_contant_cards">
            <h5>Examples</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
            </ul>
            <button class="read_more_btn">Read more</button>
          </div>
        </div>
      </section>
    `;

    if (window.innerWidth <= 768) {
      utilityOptions.style.display = "none";
      worldChatWrapper.style.display = "block";
    } else {
      worldChatWrapper.style.display = "block";
    }
  });

  v3_case.addEventListener("click", () => {

    // • if they don't have an authentication system in product but want it one with chat 
    // • if they don't have an authentication system in product and they dont want one either but chat

    // worldChat.classList.add('v1Case');

    worldChat.innerHTML = `
      <section class="v1_wrapper">
        <h4>CASE1 - If they already have an authentication system in product (JWT) and just want the chat </h4>
        <div class="v1_contants">
          <div class="v1_contant_cards">
            <h5>Benefits</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
              </ul>
              <button class="read_more_btn">Read more</button>
              </div>
          <div class="v1_contant_cards">
            <h5>Provides</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
            </ul>
            <button class="read_more_btn">Read more</button>
          </div>
          <div class="v1_contant_cards">
            <h5>Steps</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
            </ul>
            <button class="read_more_btn">Read more</button>
          </div>
          <div class="v1_contant_cards">
            <h5>Examples</h5>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <img class="icon" src="Asset/arrow.png" alt="icon" />
            </ul>
            <button class="read_more_btn">Read more</button>
          </div>
        </div>
      </section>
    `;

    if (window.innerWidth <= 768) {
      utilityOptions.style.display = "none";
      worldChatWrapper.style.display = "block";
    } else {
      worldChatWrapper.style.display = "block";
    }
  });
  backButton.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      worldChatWrapper.style.display = "none";
      utilityOptions.style.display = "block";
    } else {
      worldChatWrapper.style.display = "none";
    }
  });
});

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}
