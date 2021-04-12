import users from "./users.js"

//Task1
const getUserNames = users => users.map(({name}) => name)
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Task2

  const getUsersWithEyeColor = (users,color) => users.filter(({eyeColor}) => color === eyeColor)
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


  //Task3
  
  const getUsersWithGender = (users, Mygender) => users.filter(({gender}) => gender === Mygender).map(({name})=> name)
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

    //Task4
    const getInactiveUsers = users => users.filter(({isActive}) => !isActive)
    console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

    //Task5

    const getUserWithEmail = (users, Myemail) => users.filter(({email}) => Myemail === email )
    console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
    console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


    //Task6

    const getUsersWithAge = (users, min, max) => users.filter(({age}) => age > min && age < max)
    console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
    console.log(getUsersWithAge(users, 30, 40));
    // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

    //Task7

    const calculateTotalBalance = users => users.reduce((sum,{balance}) => sum + balance,0)
    console.log(calculateTotalBalance(users)); // 20916

    //Task8

    const getUsersWithFriend = (users, friendName) => users.filter(({friends}) => friends.includes(friendName)).map(({name})=> name);
    
    console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
    console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

    //Task9

    const getNamesSortedByFriendsCount = users => users.sort((min,max)=> min.friends.length - max.friends.length).map(({name})=> name);
    console.log(getNamesSortedByFriendsCount(users));
    // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

    //Task10
    const getSortedUniqueSkills = users => users.reduce((total,{skills}) => [...total,...skills],[]).filter((skill, index,total) => total.indexOf(skill) === index).sort()
    console.log(getSortedUniqueSkills(users));
    // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
