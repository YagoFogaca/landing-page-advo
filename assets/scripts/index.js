const btnsDoubts = document.querySelectorAll(".btn-doubts");
const doubts = document.querySelectorAll(".doubts");
const doubtsAnswers = document.querySelectorAll(".doubts-answers");

btnsDoubts.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log(doubtsAnswers[index].style.height);
    if (
      !doubtsAnswers[index].style.height ||
      doubtsAnswers[index].style.height === "0px"
    ) {
      doubtsAnswers[index].style.height = "auto";
      doubtsAnswers[index].style.opacity = "1";
    } else {
      doubtsAnswers[index].style.height = "0";
      doubtsAnswers[index].style.opacity = "0";
    }
  });
});
