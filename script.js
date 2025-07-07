const questions = {
  html: [
    { q: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Hyper Text Marketing Language', 'None'], answer: 'Hyper Text Markup Language' },
    { q: 'Which HTML tag is used to define an internal style sheet?', options: ['<style>', '<css>', '<script>', '<link>'], answer: '<style>' },
    { q: 'Which tag is used for inserting an image in HTML?', options: ['<img>', '<image>', '<pic>', '<src>'], answer: '<img>' },
    { q: 'What is the correct HTML element for the largest heading?', options: ['<head>', '<h6>', '<heading>', '<h1>'], answer: '<h1>' }
  ],
  css: [
    { q: 'What does CSS stand for?', options: ['Colorful Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets'], answer: 'Cascading Style Sheets' },
    { q: 'Which CSS property controls the text size?', options: ['font-style', 'text-size', 'font-size', 'text-style'], answer: 'font-size' },
    { q: 'How do you apply a background color in CSS?', options: ['background-color', 'bg-color', 'color-bg', 'background'], answer: 'background-color' },
    { q: 'Which property is used to make text bold in CSS?', options: ['text-weight', 'font-bold', 'font-weight', 'bold'], answer: 'font-weight' }
  ],
  js: [
    { q: 'Which company developed JavaScript?', options: ['Microsoft', 'Netscape', 'Sun Microsystems', 'Oracle'], answer: 'Netscape' },
    { q: 'Which keyword is used to declare a constant in JavaScript?', options: ['const', 'var', 'let', 'constant'], answer: 'const' },
    { q: 'Which method is used to parse a JSON string?', options: ['JSON.decode()', 'JSON.parse()', 'JSON.convert()', 'JSON.stringify()'], answer: 'JSON.parse()' },
    { q: 'What does DOM stand for?', options: ['Document Object Model', 'Data Object Model', 'Digital Object Method', 'Desktop Object Management'], answer: 'Document Object Model' }
  ],
  accessibility: [
    { q: 'What does WCAG stand for?', options: ['Web Content Accessibility Guidelines', 'Wide Color Accessibility Guidelines', 'Web Code Accessibility Group', 'None'], answer: 'Web Content Accessibility Guidelines' },
    { q: 'Which attribute is used to improve accessibility in images?', options: ['src', 'alt', 'title', 'href'], answer: 'alt' },
    { q: 'Which HTML tag is used to define important text?', options: ['<strong>', '<important>', '<b>', '<mark>'], answer: '<strong>' },
    { q: 'What role does the <nav> element serve?', options: ['Defines navigation links', 'Adds style', 'Wraps footers', 'Acts as container'], answer: 'Defines navigation links' }
  ]
};

function loadQuiz(topic) {
  let score = 0;
  let total = questions[topic].length;

  document.getElementById('home').style.display = 'none';
  const quizDiv = document.getElementById('quiz');
  quizDiv.style.display = 'flex';
  quizDiv.innerHTML = `<h2>${topic.toUpperCase()} Quiz</h2>`;

  questions[topic].forEach((item, index) => {
    const questionBlock = document.createElement('div');
    questionBlock.className = 'question';

    const q = document.createElement('p');
    q.textContent = `${index + 1}. ${item.q}`;
    questionBlock.appendChild(q);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    item.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => {
        if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
        if (option === item.answer) {
          btn.classList.add('correct');
          score++;
        } else {
          btn.classList.add('wrong');
        }

        const answered = quizDiv.querySelectorAll('button.correct, button.wrong').length;
        if (answered === total) {
          const scoreDisplay = document.createElement('div');
          scoreDisplay.className = 'score';
          scoreDisplay.textContent = `You scored ${score} out of ${total}`;
          quizDiv.appendChild(scoreDisplay);
        }
      };
      optionsDiv.appendChild(btn);
    });

    questionBlock.appendChild(optionsDiv);
    quizDiv.appendChild(questionBlock);
  });

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Back to Home';
  backBtn.id = 'backBtn';
  backBtn.onclick = () => {
    quizDiv.style.display = 'none';
    document.getElementById('home').style.display = 'flex';
  };
  quizDiv.appendChild(backBtn);
}
// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });
});

