
<h1> Тестовое задание для компании Nanoproduct </h1>


<h3> Запуск - npm run dev </h3>

<p> Перед запуском необходимо описать значения в .env (пример лежит в корне проекта) (можно использовать подключение к моей Mongo колекции для проверки) </p>

<h3> Описание API </h3>
<p>В проекте существует 3 сущности (User, Doctor, Appointment) и 3 метода обращения к ним</p>
<ul>
  <li>http://localhost:{PORT FROM .ENV}/api/create_user - создание сущности User</li> 
    <b>Пример body:</b>
    <p>{
       phone: '+7 926 578 85 14',
       name: 'Вася',
      }
  </p>
  <li>http://localhost:{PORT FROM .ENV}/api/create_user - создание сущности User</li>
  <li>http://localhost:{PORT FROM .ENV}/api/create_user - создание сущности User</li>

</ul>
