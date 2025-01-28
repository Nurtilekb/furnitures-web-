document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Останавливаем стандартное поведение формы

  // Получаем введенные данные
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Имитация сохранения данных (например, в базе данных)
  console.log('Данные пользователя:', { username, email, password });

  // Отображение сообщения пользователю
  alert('Регистрация успешна! Перенаправляем...');

  // Перенаправление на другую страницу
  window.location.href = 'welcome.html'; // Замените на нужный адрес
});
