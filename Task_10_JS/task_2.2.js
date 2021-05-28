const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

 const toggleUserState = (allUsers, userName) => {
      return new Promise((resolve, reject) => {

    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    setTimeout(()=>{
        logger(updatedUsers)
      }, 0);
      });
  };
  
  const logger = updatedUsers => console.table(updatedUsers);

  
  
  toggleUserState(users, 'Mango', logger);
  toggleUserState(users, 'Lux', logger);
  
   
  
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);