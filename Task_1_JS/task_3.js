const ADMIN_PASSWORD = 'mariatim';
let first_message = 'Отменено пользователем!';
let second_message = 'Добро пожаловать!';
let third_message = 'Доступ запрещен неверный пароль!';  


let Mypassword = prompt('Введите пароль для входа:');

if( Mypassword===ADMIN_PASSWORD)
 { alert(second_message)
}
else if (Mypassword=== null)
 { console.log (first_message)
}
else if (Mypassword)
  { console.log(third_message)
}