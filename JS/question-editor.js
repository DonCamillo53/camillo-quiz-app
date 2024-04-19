// formInput.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formElements = event.target.elements;

//   console.log(formElements.questionInput.value);
// });

const main = document.querySelector("main");
const formInput = document.querySelector("form");

let question = "This is a Question";
let answer = "This is an Answer";
let tagInput = "CSS, HTML, Basics, Coding, Create";

function toggleAnswerToQuestion(button, questionParagraph, question, answer) {
  button.addEventListener("click", () => {
    if (questionParagraph.textContent === question) {
      questionParagraph.textContent = answer;
      button.textContent = "Hide Answer";
      console.log("Hello if ");
    } else {
      questionParagraph.textContent = question;
      button.textContent = "Show Answer";
      console.log("Hello else ");
    }
  });
}

function createNewCard(question, answer, tagInput) {
  let card = document.createElement("section");
  main.append(card);
  card.setAttribute("class", "quiz-card");

  let quizCardBookmark = document.createElement("a");
  card.append(quizCardBookmark);
  quizCardBookmark.setAttribute("class", "quizcard-bookmark");

  let quizCardBookmarkIcon = document.createElement("img");
  quizCardBookmark.append(quizCardBookmarkIcon);
  quizCardBookmarkIcon.setAttribute("src", "resources/bookmark-inactive.png");
  quizCardBookmarkIcon.setAttribute("class", "quiz-card__bookmark");

  let questionParagraph = document.createElement("p");
  card.append(questionParagraph);
  questionParagraph.textContent = question;

  let button = document.createElement("button");
  card.append(button);
  button.setAttribute("class", "quiz-card__answer-button");
  button.textContent = "Show Answer";

  toggleAnswerToQuestion(button, questionParagraph, question, answer);

  let tagUl = document.createElement("ul");
  card.append(tagUl);
  tagUl.setAttribute("class", "quiz-card__tags");

  const tagArray = tagInput.split(",");

  for (const tags of tagArray) {
    let tagLi = document.createElement("li");
    tagUl.append(tagLi);
    tagLi.textContent = tags;
  }
}

createNewCard(question, answer, tagInput);
