const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // const questionTitle = question.querySelector(".question-text");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
        // item.classList.remove("flip");
        // questionTitle.classList.remove("bold");
      }
    });
    console.log(btn);
    question.classList.toggle("show-text");
    // btn.classList.toggle("flip");
    // questionTitle.classList.toggle("bold");
  });
});
