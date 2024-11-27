const classLinkInput = document.querySelector("#class-link");
const semesterSelection = document.querySelector("#select-semester");
const submitBtn = document.querySelector("#submit");
let recordingLink = undefined;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (classLinkInput.value && semesterSelection.value) {
    const semester = semesterSelection.value;
    let classLink = classLinkInput.value;
    let splitedLinkArray = classLink.split("/");
    if (
      splitedLinkArray[2] == "vc64.shirazu.ac.ir" ||
      splitedLinkArray[0] == "vc64.shirazu.ac.ir" ||
      splitedLinkArray[2] == "vc8.shirazu.ac.ir" ||
      splitedLinkArray[0] == "vc8.shirazu.ac.ir" ||
      splitedLinkArray[2] == "vc1.shirazu.ac.ir" ||
      splitedLinkArray[0] == "vc1.shirazu.ac.ir"
    ) {
      if (
        splitedLinkArray[0] == "vc64.shirazu.ac.ir" ||
        splitedLinkArray[0] == "vc8.shirazu.ac.ir" ||
        splitedLinkArray[0] == "vc1.shirazu.ac.ir"
        
      ) {
        recordingLink = splitedLinkArray[1];
      } else {
        recordingLink = splitedLinkArray[3];
      }
      location.href = `https://offline.shirazu.ac.ir/${semester}/${recordingLink}.zip`;
      classLinkInput.style.border = "1px solid gray";
      semesterSelection.style.border = "1px solid gray";
      document.getElementsByClassName("error")[0].style.display = "none";
    } else {
      document.getElementsByClassName("error")[0].innerText =
        "لینک به صورت اشتباه وارد شده است";
      document.getElementsByClassName("error")[0].style.display = "block";
      classLinkInput.style.border = "1px solid red";
      semesterSelection.style.border = "1px solid gray";
    }
  } else {
    classLinkInput.style.border = "1px solid red";
    semesterSelection.style.border = "1px solid red";
    document.getElementsByClassName("error")[0].style.display = "block";
  }
});
