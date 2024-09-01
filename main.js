const directories = [{ questionsQuant: 2 }, { questionsQuant: 3 }];

const container = document.getElementById("container");

generateHTML();

function generateHTML() {
  for (let taskIndex = 0; taskIndex < directories.length; taskIndex++) {
    const tasksDiv = document.createElement("div");
    tasksDiv.className = "tasks";

    const h2 = document.createElement("h2");
    h2.textContent = `Atividade 0${taskIndex + 1}`;

    const nav = document.createElement("nav");

    tasksDiv.appendChild(h2);
    tasksDiv.appendChild(nav);

    for (
      let questionIndex = 0;
      questionIndex < directories[taskIndex].questionsQuant;
      questionIndex++
    ) {
      const questionLink = document.createElement("a");
      questionLink.href = `./atividade0${taskIndex + 1}/questao0${
        questionIndex + 1
      }`;
      questionLink.textContent = `Questão 0${questionIndex + 1}`;

      nav.appendChild(questionLink);
    }

    container.appendChild(tasksDiv);
  }
}
