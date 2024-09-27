

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



  // document.querySelector(".close-btn").addEventListener("click", () => {
  //   const modal = document.getElementById("demoModal");
  //   modal.style.display = "none";
  // });
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

  // Add event listener for the watch demo button after content is added
  const watch_demo_btn = document.getElementById('watch_demo');
  if (watch_demo_btn) {

    const demo_data = {
      "v1": {
        "step1": {
          "back_pane_img": "Asset/before.jpeg",
          1: {
            "data": "Suppose this is your site",
            "css": "background: white;width: fit-content; padding: 10px; border-radius: 9px 9px 9px 0px;",
          }
        },
        "step2": {
          "back_pane_img": "Asset/after.jpeg",
          1: {
            "data": "this header will be added",
            "css": "background: white;width: fit-content; padding: 10px; border-radius: 9px 9px 9px 0px;",

          },
          2: {
            "data": "This chat will be added.",
            "css": "background: white;width: fit-content; padding: 10px; border-radius: 9px 9px 9px 0px;",

          }
        }
      }
    };

     // Modal handling
     watch_demo_btn.addEventListener("click", (event) => {
      console.log("can we see step here?",currentStep)
      console.log("arew we here")
      // let's add a backpane modal to hold items that we want to show demo buttons
      const tourBackModal = document.getElementById("tourBackPane")
      // tourBackModal.setAttribute("class","modal")

      const myDiv = document.createElement("img")
      myDiv.src = "Asset/before.jpeg"
      console.log("what eisdfsdaf",demo_data["v1"]["step" + currentStep]['back_pane_img'])
      myDiv.src = demo_data["v1"]["step" + currentStep]['back_pane_img']
      // myDiv.textContent = 'here will ahve some images || image'

      tourBackModal.children[0].appendChild(myDiv)

      tourBackModal.style.display = 'block'; // Show second modal
      tourBackModal.style.paddingTop = '5%'; // Show second modal
      tourBackModal.style.paddingBottom = '5%'; // Show second modal
      tourBackModal.style.height = '100%'; // Show second modal
      tourBackModal.style.background = 'white%'; // Show second modal
      // document.firstChild.appendChild(tourBackModal)

      // Render the initial content for step 1
      renderStepContent(currentStep);


      // demoModal.style.display = "flex";
      // const takeTourBtn = document.getElementById('takeTourBtn');

      // // Take the tour button opens the second modal
      // takeTourBtn.onclick = function () {
      //   // const demoModal = document.getElementById('demoModal');
      //   // const dmc = demoModal.children[0];
      //   // dmc.children[0].remove();
      //   // dmc.children[0].remove();


      // };
    });


    let currentStep = 1;

    // Function to render content based on step with error handling
    function renderStepContent(step) {
      try {
        console.log("Rendering step:", step);
        const tourModal = document.getElementById('tourModal');
        tourModal.style.display = "block";
        const tmc = document.querySelector('.tour-modal-content');
        let content = '';
        
        // Try to access the step data in the demo_data object
        const stepKey = "step" + step;
        const data = demo_data["v1"][stepKey];
    
        if (data) {
          delete data.back_pane_img;
          for (let i in data) { // Using 'in' to loop over data
            console.log(i,"whate irewsdfsd",data)
            content += `
              <div style="${data[i]['css']}">${data[i]['data']}</div>
            `;
          }
    
          // Add Next/Previous buttons based on the step
          content += `<button id="previousStepBtn" style="color: red;position: absolute;bottom: 3%" ${step === 1 ? 'style="display:none;"' : ''}>Previous</button>`;
          content += `<button id="nextStepBtn" style="color:red;color: red;position: absolute;bottom: 3%;right:0">${step === Object.keys(demo_data["v1"]).length ? 'Finish' : 'Next'}</button>`;
    
          // Clear old content and render new content
          tmc.innerHTML = content;
    
          // Set up the Next and Previous button event handlers
          document.getElementById('nextStepBtn').addEventListener('click', () => {
            if (step < Object.keys(demo_data["v1"]).length) {
              currentStep++;

              const tourBackModal = document.getElementById("tourBackPane")
              // tourBackModal.setAttribute("class","modal")
        
              const myDiv = document.createElement("img")
              // myDiv.src = "Asset/before.jpeg"
              console.log("what eisdfsdsdfsdaf",demo_data["v1"]["step" + currentStep]['back_pane_img'])
              myDiv.src = demo_data["v1"]["step" + currentStep]['back_pane_img']
              // myDiv.textContent = 'here will ahve some images || image'
              // tourBackModal.children[0].firstChild().remvoe()
              
              renderStepContent(currentStep);
              const parent = tourBackModal.children[0]
              parent.replaceChild(myDiv,parent.firstChild)

            } else {
              tourModal.style.display = 'none';  // Close modal after last step
            }
          });
    
          if (document.getElementById('previousStepBtn')) {
            document.getElementById('previousStepBtn').addEventListener('click', () => {
              if (step > 1) {
                currentStep--;
                renderStepContent(currentStep);
              }
            });
          }
        } else {
          console.error(`No content found for step: ${stepKey}`);
        }
    
      } catch (error) {
        // Log any error encountered along with the step that caused the issue
        console.error(`Error while rendering content for step ${step}:`, error);
      }
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
