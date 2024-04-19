const main = document.querySelector("main");
const formInput = document.querySelector("form");
const questionInputField = document.getElementById("question-input");
const answerInputField = document.getElementById("answer-input");
const tagInputField = document.getElementById("tag-input");
const answerCharactersLeft = document.getElementById(
  "character-counter-answer"
);
const questionCharactersLeft = document.getElementById(
  "character-counter-question"
);
const tagCharactersLeft = document.getElementById("character-counter-tags");
answerInputField.addEventListener("input", () => {
  let textArea = answerInputField.value.length;
  let charactersLeft = 200 - textArea;
  let displayParagraph = answerCharactersLeft;
  displayParagraph.textContent = `${charactersLeft} characters left`;
});
tagInputField.addEventListener("input", () => {
  let textArea = tagInputField.value.length;
  let charactersLeft = 100 - textArea;
  let displayParagraph = tagCharactersLeft;
  displayParagraph.textContent = `${charactersLeft} characters left`;
});

let question = "This is a Question";
let answer = "This is an Answer";
let tags = "CSS, HTML, Basics, Coding, Create";

questionInputField.addEventListener("input", () => {
  let textArea = questionInputField.value.length;
  let charactersLeft = 200 - textArea;
  let displayParagraph = questionCharactersLeft;
  displayParagraph.textContent = `${charactersLeft} characters left`;
});

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  question = formElements.questionInput.value;
  answer = formElements.answerInput.value;
  tags = formElements.tagInput.value;

  createNewCard(question, answer, tags);

  formInput.reset();
});

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

function createNewCard(question, answer, tags) {
  let card = document.createElement("section");
  main.append(card);
  card.setAttribute("class", "quiz-card");

  let quizCardBookmarkIcon = document.createElement("img");
  card.append(quizCardBookmarkIcon);
  quizCardBookmarkIcon.setAttribute("src", "resources/bookmark-inactive.png");
  quizCardBookmarkIcon.setAttribute("class", "quiz-card__bookmark");

  quizCardBookmarkIcon.addEventListener("click", () => {
    if (quizCardBookmarkIcon.src.includes("resources/bookmark-inactive.png")) {
      quizCardBookmarkIcon.src = "resources/bookmark.png";
    } else {
      quizCardBookmarkIcon.src = "resources/bookmark-inactive.png";
    }
  });

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

  tags = tags.replaceAll(" ", "");
  const tagArray = tags.split(",");

  for (const individualTags of tagArray) {
    let tagLi = document.createElement("li");
    tagUl.append(tagLi);
    tagLi.textContent = individualTags;
  }
}
