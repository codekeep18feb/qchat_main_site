

const peerAdmin = document.querySelector(".peer_list .toggle");
const sublist = document.querySelector(".peer_list_sublist");
const worldChat = document.querySelector(".world-chat");
const chatWrapper = document.querySelector(".chat-type-wrapper");
const utilityOptions = document.querySelector(".utility-options");
const backButton = document.querySelector(".back-btn button");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector('.navbar');

const caseButtons = {
  v1: {
    title: "CASE1 - If they already have an authentication system in product (JWT) and just want the chat.",
    benefits: ["v1Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    provides: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    steps: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    examples: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"]
  },
  v2: {
    title: "CASE2 - Some other scenario with the chat",
    benefits: ["v2Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    provides: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    steps: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    examples: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"]
  },
  v3: {
    title: "CASE3 - A different use case",
    benefits: ["v3Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    provides: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    steps: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],
    examples: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  peerAdmin.addEventListener("click", () => {
    toggleDisplayOnClick();
  });

  // Handle case button clicks using a single handler
  ["v1", "v2", "v3"].forEach(caseId => {
    document.getElementById(caseId).addEventListener("click", () => {
      handleCaseClick(caseId, caseButtons[caseId]);
    });
  });

  backButton.addEventListener("click", () => {
    handleBackButton();
  });

  // Toggle navbar on outside click
  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && !navLinks.contains(event.target) && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });

  // // Modal handling
  // document.addEventListener("click", (event) => {
  //   if (event.target.textContent === "Watch Demo") {
  //     const modal = document.getElementById("demoModal");
  //     modal.style.display = "flex";
  //   }
  // });

  document.querySelector(".close-btn").addEventListener("click", () => {
    const modal = document.getElementById("demoModal");
    modal.style.display = "none";
  });
});

// Handle toggling between sublist and chat wrapper
function toggleDisplayOnClick() {
  if (window.innerWidth <= 768) {
    chatWrapper.style.display = chatWrapper.style.display === "block" ? "none" : "block";
    utilityOptions.style.display = utilityOptions.style.display === "block" ? "none" : "block";
  } else {
    sublist.style.display = sublist.style.display === "block" ? "none" : "block";
    sublist.style.padding = "10px 0px 0px 0px";
  }
}

// Back button functionality
function handleBackButton() {
  if (window.innerWidth <= 768) {
    chatWrapper.style.display = "none";
    utilityOptions.style.display = "block";
  } else {
    chatWrapper.style.display = "none";
  }
}

// Handle case button clicks
function handleCaseClick(caseId, caseData) {
  console.log(caseId, "is this handler being called!!!!!!!",caseData)
  const content = pToAdminCaseContent(
    caseData.title,
    caseData.benefits,
    caseData.provides,
    caseData.steps,
    caseData.examples,
    caseId
  );
  peerToAdminCases(content);

  // Add event listener for the watch demo button after content is added
  const watch_demo_btn = document.getElementById('watch_demo');
  if (watch_demo_btn) {
    // Modal handling
    watch_demo_btn.addEventListener("click", (event) => {
      console.log("can we access this",caseId)
      demoModal.style.display = "flex";
    });
  }

}

// Generate HTML content for the selected case
function pToAdminCaseContent(title, benefits, provides, steps, examples,caseId) {
  console.log("in the case of v3 what is provides",provides)
  return `
    <section class="v1_wrapper">
      <h4>${caseId} - ${title}</h4>
      <div class="v1_contants">
        <div class="v1_contant_cards">
          <h5>Benefits</h5>
          <ul>${benefits.map(item => `<li>${item}</li>`).join('')}
            <img class="icon" src="Asset/arrow.png" alt="icon" />
          </ul>
          <button class="read_more_btn">Read more</button>
        </div>
        <div class="v1_contant_cards">
          <h5>Providessss</h5>
          <ul>${provides.map(item => `<li>${item}</li>`).join('')}
            <img class="icon" src="Asset/arrow.png" alt="icon" />
          </ul>
          <button class="read_more_btn">Read more</button>
        </div>
        <button id="watch_demo">Watch Demo</button>
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


const watch_demo_btn = document.getElementById('watch_demo');
  


  // Modal handling
  watch_demo_btn.addEventListener("click", (event) => {

    demoModal.style.display = "flex";
  });

// Update content and handle display logic for the case
function peerToAdminCases(content) {
  worldChat.innerHTML = content;
  if (window.innerWidth <= 768) {
    utilityOptions.style.display = "none";
    chatWrapper.style.display = "block";
  } else {
    chatWrapper.style.display = "block";
  }
}
