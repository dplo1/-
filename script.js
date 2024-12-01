
const votes = {
    social: false,
    rights: false,
    aid: false,
    environment: false,
  };
  

  function vote(category) {
   
    if (votes[category]) {
      alert("თქვენ უკვე მხარი დაუჭირეთ ამ მიზანს!");
      return;
    }
  
    for (let key in votes) {
      votes[key] = false;
    }

    votes[category] = true;
    document.querySelectorAll(".option").forEach((option) => {
      option.style.background = "#ffffff"; 
      option.style.color = "#333";
    });
  
    const selectedOption = document.querySelector(`.option:nth-child(${Object.keys(votes).indexOf(category) + 1})`);
    selectedOption.style.background = "#0078d4";
    selectedOption.style.color = "white";
  
    swal({
      title: "არასამთავრობო ჯგუფი",
      text: "მადლობა არჩევანის გაკეთებისთვის",
      icon: "success",
      button: "Aww yiss!",
    });
  }
  