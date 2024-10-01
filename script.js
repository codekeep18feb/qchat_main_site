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
    examples: ["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum is simply dummy text of the printing"],

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

function toggleMenu() {
  navLinks.classList.toggle('active'); // Toggle 'active' class
  navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : 'none'; // Use active class to control display
}


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
      navLinks.style.display = 'none';
    }
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
  console.log(caseId, "is this handler being called!!!!!!!", caseData)
  const content = pToAdminCaseContent(
    caseData.title,
    caseData.benefits,
    caseData.provides,
    caseData.steps,
    caseData.examples,
    caseId
  );
  peerToAdminCases(content);


  const watch_demo_btn = document.getElementById('watch_demo_btn');
  console.log("watch_demo_btn",watch_demo_btn)

  // Define demo data with desktop and mobile images
  const demo_data = {
    "v1": {
      "step1": {
        "back_pane_img_mobile": "Asset/demo_imgs/before_mobile.jpg",
        "back_pane_img_desktop": "Asset/demo_imgs/before.jpeg"
      },
      "step2": {
        "back_pane_img_mobile": "Asset/demo_imgs/mobile_after.png",
        "back_pane_img_desktop": "Asset/demo_imgs/after.jpeg"
      }
    }
  };

  let currentStep = 1;

  if (watch_demo_btn) {
    watch_demo_btn.addEventListener("click", () => {
      renderStepContent(currentStep);
    });
  }

  // Determine whether the device is mobile or desktop based on viewport width
  function isMobileView() {
    return window.innerWidth < 768; // Consider mobile if viewport is less than 768px
  }

  // Render content based on the current step and device type (mobile/desktop)
  function renderStepContent(step) {
    const tourModal = document.getElementById('tourModal');
    const demoImageWrapper = document.querySelector('.demo-image-wrapper');

    const stepKey = "step" + step;
    const data = demo_data["v1"][stepKey];

    if (data) {
      // Show modal and update image based on step and viewport
      tourModal.style.display = "block";

      const imageSrc = isMobileView() ? data.back_pane_img_mobile : data.back_pane_img_desktop;
      demoImageWrapper.innerHTML = `<img src="${imageSrc}" alt="Step ${step} Image">`;

      // Add Next/Previous buttons with Bootstrap Icons
      demoImageWrapper.innerHTML += `
        <div class="step-navigation">
          <button id="previousStepBtn" class="btn btn-prev" ${step === 1 ? 'disabled' : ''}>
            <i class="bi bi-arrow-left-circle"></i> Previous
          </button>
          <button id="nextStepBtn" class="btn btn-next">
            ${step === Object.keys(demo_data["v1"]).length ? 'Finish' : 'Next'} 
            <i class="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      `;

      // Event listeners for next and previous buttons
      document.getElementById('nextStepBtn').addEventListener('click', () => {
        if (step < Object.keys(demo_data["v1"]).length) {
          currentStep++;
          renderStepContent(currentStep);
        } else {
          tourModal.style.display = 'none';  // Close modal after last step
        }
      });

      document.getElementById('previousStepBtn').addEventListener('click', () => {
        if (step > 1) {
          currentStep--;
          renderStepContent(currentStep);
        }
      });
    } else {
      console.error(`No content found for step: ${stepKey}`);
    }
  }







}

// Generate HTML content for the selected case
function pToAdminCaseContent(title, benefits, provides, steps, examples, caseId) {
  console.log("in the case of v3 what is provides", provides)
  return `
      <section class="v1_wrapper">
        <h4>${caseId} - ${title}</h4>
        <div class="v1_contants">
          <div class="row">
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
          </div>

          <div class="watch_demo_btn" id="watch_demo_btn">
          <button id="watch_demo">Watch Demo</button>
          </div>
        

          <div class="row">
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



          


                  
        
        </div>
      </section>
    `;
}



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


// Get modal elements
// const demoModal = document.getElementById('demoModal');

const backToDemoBtn = document.getElementById('backToDemoBtn');

// Get close buttons
//   <!-- const closeBtnDemo = document.querySelector('.close-btn'); -->
const closeBtnTour = document.querySelector('.close-btn-tour');

// Open the Demo modal (You can link this to a button in your page)
// Assuming you have a button that triggers opening the demo modal

// Function to open the demo modal




// Back to demo button closes the second modal and opens the first
backToDemoBtn.onclick = function () {
  tourModal.style.display = 'none'; // Hide second modal
  // demoModal.style.display = 'block'; // Show first modal
};

// Close tour modal
closeBtnTour.onclick = function () {
  tourModal.style.display = 'none'; // Just close the second modal
};

// Close modals if clicked outside content area
window.onclick = function (event) {
  // if (event.target == demoModal) {
  //   demoModal.style.display = 'none';
  // }
  if (event.target == tourModal) {
    tourModal.style.display = 'none';
  }
};
