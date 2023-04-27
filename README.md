
<h1> Тестовое задание для компании Nanoproduct </h1>


<h3> Запуск - npm run dev </h3>

<p> Перед запуском необходимо описать значения в .env (пример лежит в корне проекта) (можно использовать подключение к моей Mongo колекции для проверки) </p>

<h3> Описание API </h3>
<p>В проекте существует 3 сущности (User, Doctor, Appointment) и 3 метода обращения к ним</p>
<ul>
  <li>http://localhost:{PORT FROM .ENV}/api/create_user - создание сущности User</li> 
    <p>Пример body:</p>
    <pre>
         {
           phone: '+7 926 578 85 14',
           name: 'Вася',
         } 
    </pre>
   <li>http://localhost:{PORT FROM .ENV}/api/create_doctor - создание сущности Doctor</li> 
    <p>Пример body:</p>
    <pre>
          {
           "name" : "Alexander",
           "spec": "Терапевт"
          }
     </pre>
   <li>http://localhost:{PORT FROM .ENV}/api/create_appointment - создание сущности Appointment</li> 
    <p>Пример body:</p>
    <pre>
         {
           "user_id": "6449375d8daf3b5c2debe741",
           "doctor_id": "644a6055fd33d88208ed13e3",
            "slot": "1682625786003"
         }
    </pre>

</ul>
<h3>Уведомления</h3>
<p>Все записи созданные с помощью метода /api/create_appointment проверяются каждые N секунд (N задается в .env) и при выполнении условий описанных в ТЗ записываются в .log.txt</p>
