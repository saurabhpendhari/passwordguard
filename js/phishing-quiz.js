const quizShell = document.querySelector('[data-quiz-shell]');

if (quizShell) {
  const questions = [
    { sender: 'Campus IT Desk', address: 'security-update@campus-help.example', time: '09:14', subject: 'Action required: your account will be closed today', body: 'We noticed unusual activity. Confirm your account within 30 minutes or access will be removed.', link: 'campus-help.example/confirm', prompt: 'What is the strongest first signal that this message may be a phish?', options: ['The message uses a campus-related name.', 'It creates urgency and asks you to confirm through a link.', 'It includes a time in the header.', 'It says “Action required”.'], answer: 1, explanation: 'Urgency plus a sign-in link is a classic pressure tactic. Open the official campus portal yourself instead of using the message link.' },
    { sender: 'Mira, Project Group', address: 'mira.project@example', time: '12:48', subject: 'Shared file: CEP presentation notes', body: 'I added the final notes. Please open the attached file before our meeting.', link: 'Attachment: CEP_notes_final.zip', prompt: 'What should make you pause before opening this message?', options: ['The file has a familiar project name.', 'It arrived during the day.', 'The attachment is unexpected and the sender address is not fully clear.', 'It mentions a meeting.'], answer: 2, explanation: 'Unexpected attachments deserve verification, especially when the sender address is unfamiliar or incomplete. Confirm through another channel first.' },
    { sender: 'StreamBox Billing', address: 'billing@streambox.example', time: '18:02', subject: 'Your payment could not be processed', body: 'Update your card details now to keep your account active. Your plan will end tonight.', link: 'streambox.example/billing', prompt: 'What is the safest way to check whether there is a real billing issue?', options: ['Click the billing link quickly.', 'Reply with your card number.', 'Forward it to friends to ask if it looks real.', 'Open the official app or type the service address yourself.'], answer: 3, explanation: 'Use a known-good route: the official app, a bookmark you created, or an address you type yourself. Do not trust the message’s route.' },
    { sender: 'Scholarship Office', address: 'awards@scholarships.example', time: '07:31', subject: 'Send your one-time code to complete your award', body: 'Your award is ready. Reply with the six-digit code sent to your phone so we can release it.', link: 'No link included', prompt: 'Which rule applies to the request in this message?', options: ['Share the OTP if the sender sounds official.', 'One-time codes should never be shared in response to a message.', 'Share only the first three digits.', 'Reply asking what the code is for.'], answer: 1, explanation: 'An OTP is a proof of control. Legitimate services do not need you to read it back in an unexpected message or call.' },
    { sender: 'Cloud Drive', address: 'alerts@cloud-drive.example', time: '22:19', subject: 'New sign-in from an unknown device', body: 'If this was not you, review the sign-in details below and secure your account.', link: 'cloud-drive.example/review', prompt: 'What should you check before taking action?', options: ['The sender’s full address and the real destination of the link.', 'Whether the logo looks familiar.', 'How urgent the subject feels.', 'Whether the email has a signature.'], answer: 0, explanation: 'Check the complete sender address and where a link actually leads. If unsure, navigate to the service independently and review account activity there.' },
  ];
  const messageCard = quizShell.querySelector('[data-message-card]');
  const prompt = quizShell.querySelector('[data-question-prompt]');
  const answerList = quizShell.querySelector('[data-answer-list]');
  const feedback = quizShell.querySelector('[data-quiz-feedback]');
  const nextButton = quizShell.querySelector('[data-next-question]');
  const number = quizShell.querySelector('[data-question-number]');
  const total = quizShell.querySelector('[data-question-total]');
  const score = quizShell.querySelector('[data-quiz-score]');
  const complete = quizShell.querySelector('[data-quiz-complete]');
  const body = quizShell.querySelector('.quiz-body');
  const finalScore = quizShell.querySelector('[data-final-score]');
  const finalMessage = quizShell.querySelector('[data-final-message]');
  const restart = quizShell.querySelector('[data-quiz-restart]');
  let current = 0;
  let points = 0;
  let answered = false;

  total.textContent = String(questions.length).padStart(2, '0');

  const renderMessage = (question) => {
    const initials = question.sender.split(' ').map((word) => word[0]).join('').slice(0, 2);
    messageCard.innerHTML = `<div class="message-header"><span class="message-avatar" aria-hidden="true">${initials}</span><div><strong>${question.sender}</strong><small>${question.address}</small></div><span class="message-time">${question.time}</span></div><h3 class="message-subject">${question.subject}</h3><p class="message-copy">${question.body}</p><span class="fake-link" aria-label="Non-clickable fictional link">${question.link}</span>`;
  };

  const renderQuestion = () => {
    const question = questions[current];
    answered = false;
    number.textContent = String(current + 1).padStart(2, '0');
    score.textContent = String(points);
    renderMessage(question);
    prompt.textContent = question.prompt;
    answerList.innerHTML = question.options.map((option, index) => `<button class="answer-button" type="button" data-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`).join('');
    feedback.className = 'quiz-feedback';
    feedback.innerHTML = '';
    nextButton.disabled = true;
    nextButton.textContent = current === questions.length - 1 ? 'See your score →' : 'Next scenario →';
    answerList.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => selectAnswer(button)));
  };

  const selectAnswer = (selectedButton) => {
    if (answered) return;
    answered = true;
    const selected = Number(selectedButton.dataset.answer);
    const question = questions[current];
    const isCorrect = selected === question.answer;
    if (isCorrect) points += 1;
    answerList.querySelectorAll('[data-answer]').forEach((button) => {
      button.disabled = true;
      if (Number(button.dataset.answer) === question.answer) button.classList.add('correct');
    });
    if (!isCorrect) selectedButton.classList.add('incorrect');
    feedback.className = `quiz-feedback visible ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `<strong>${isCorrect ? 'Correct read.' : 'Not quite.'}</strong>${question.explanation}`;
    score.textContent = String(points);
    nextButton.disabled = false;
  };

  nextButton.addEventListener('click', () => {
    if (!answered) return;
    if (current === questions.length - 1) {
      body.hidden = true;
      complete.hidden = false;
      finalScore.textContent = `${points}/${questions.length}`;
      finalMessage.textContent = points === questions.length ? 'Excellent. You spotted every warning sign.' : points >= 3 ? 'Good work. Review the explanations once more, then trust your pause.' : 'Keep practicing. The safest move is often to slow down and verify through an official route.';
      return;
    }
    current += 1;
    renderQuestion();
  });

  restart.addEventListener('click', () => {
    current = 0;
    points = 0;
    complete.hidden = true;
    body.hidden = false;
    renderQuestion();
  });

  renderQuestion();
}
