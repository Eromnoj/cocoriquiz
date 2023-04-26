// Getting the unique Ids
const quizId = document.querySelectorAll('.cocoriquiz-random-id')

// Getting the corresponding container to each Id
Array.from(quizId).forEach(el => {
  // Select Element from depending on the container
  const quizContainer = document.getElementById(el.textContent)
  const goodAnswer = quizContainer.querySelector('.cocoriquiz-good')
  const hidden = quizContainer.querySelector('.cocoriquiz-fill')
  const allAnswers = quizContainer.querySelectorAll('.cocoriquiz-unique-answer')
  const result = quizContainer.querySelector('.cocoriquiz-result')

  // prevent to click a second time after the user as answer
  let isClicked = false
  
  Array.from(allAnswers).forEach(answer => {
    answer.addEventListener('click', () => {

      if (isClicked === false) {
        result.innerHTML = '<div></div>'
        let resultContent = document.createElement('div')
        if (answer.textContent === goodAnswer.textContent) {
          resultContent.classList.add('good-answer')
          hidden.textContent === '1' ? answer.classList.add('good-fill') : answer.classList.add('good-border')
          resultContent.append('Bravo! Vous avez trouvé la bonne réponse !')
        } else {
          resultContent.classList.add('bad-answer')
          hidden.textContent === '1' ? answer.classList.add('bad-fill') : answer.classList.add('bad-border')
          resultContent.append(`Mauvaise réponse... La bonne réponse était : ${goodAnswer.textContent}`)
        }
        result.append(resultContent)
        isClicked = true
      }
    })
  })
})