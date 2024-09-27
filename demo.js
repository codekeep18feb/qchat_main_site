  // Get modal elements
  const demoModal = document.getElementById('demoModal');
  const tourModal = document.getElementById('tourModal');
  

  // Get buttons
  const takeTourBtn = document.getElementById('takeTourBtn');
  const backToDemoBtn = document.getElementById('backToDemoBtn');

  // Get close buttons
//   <!-- const closeBtnDemo = document.querySelector('.close-btn'); -->
  const closeBtnTour = document.querySelector('.close-btn-tour');

  // Open the Demo modal (You can link this to a button in your page)
  // Assuming you have a button that triggers opening the demo modal

  // Function to open the demo modal



  // Take the tour button opens the second modal
  takeTourBtn.onclick = function () {

    //let's delete things from demoModal
    const demoModal = document.getElementById('demoModal');
    // Check if demoModal has at least two child elements
    const dmc = demoModal.children[0]
    console.log("here is dmc", dmc)
    dmc.children[0].remove()
    dmc.children[0].remove()


    tourModal.style.display = 'block'; // Show second modal
    const tmc = document.querySelector('.tour-modal-content');

    // HTML content to be added
    const content = `
    <div style="background: white;
        width: fit-content;
        padding: 10px;
        border-radius: 9px 9px 9px 0px;">Suppose this is your site</div>

    <div style="background: white;
        width: fit-content;
        padding: 10px;
        border-radius: 9px 9px 9px 0px;">Next</div>
    `;

    // Append the HTML content at the end of the tmc element
    tmc.insertAdjacentHTML('beforeend', content);



  };

  // Back to demo button closes the second modal and opens the first
  backToDemoBtn.onclick = function () {
    tourModal.style.display = 'none'; // Hide second modal
    demoModal.style.display = 'block'; // Show first modal
  };

  // Close tour modal
  closeBtnTour.onclick = function () {
    tourModal.style.display = 'none'; // Just close the second modal
  };

  // Close modals if clicked outside content area
  window.onclick = function (event) {
    if (event.target == demoModal) {
      demoModal.style.display = 'none';
    }
    if (event.target == tourModal) {
      tourModal.style.display = 'none';
    }
  };
