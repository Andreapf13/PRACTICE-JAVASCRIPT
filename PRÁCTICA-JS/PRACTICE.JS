const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
},
{
  age: 27,
  examScores: [],
  gender: 'male',
  name: 'pepe' },
  {
    age: 32,
    examScores: [],
    gender: 'female',
    name: 'isabel'
  
  }]
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];
  
  function DisplayMenu(){
  let  mensaje = ("1. MOSTRAR EN FORMATO DE TABLA TODOS LOS ALUMNOS \n 2.  Mostrar por consola la cantidad de alumnos que hay en clase \n 3. Mostrar por consola todos los nombres de los alumnos. \n 4.Eliminar el último alumno de la clase. \n 5.Eliminar aleatoriamente un alumno de la clase. ")
   return mensaje 
  // 1. MOSTRAR EN FORMATO DE TABLA TODOS LOS ALUMNOS
  function TableStudents(students){
    console.table(students)
  }
  //2. Mostrar por consola la cantidad de alumnos que hay en clase
  function QuantityStudents(students){
    var quantity = students.length;
  console.log(quantity)
  }  
  //3. Mostrar por consola todos los nombres de los alumnos.
  function displayStudentsname(students) {
    let nameList = [];
    for (
      let index = 0;
      index < students.length;
      index ++
    )
      nameList.push(students[index].name);
    console.log(nameList)
  }
  //4.Eliminar el último alumno de la clase.
  function DeleteLastOne(students){
    newListAlumns = students.pop()
    console.log(students)
  }
  //5. Eliminar un alumno aleatoriamente de la clase.
  function deleteRandom (students) {
    let i = (Math.random() * students.length) | 0
    return students.splice(i, 1)[0]
  }
  
  console.log(deleteRandom(students))
  console.log(students)
  //6. Mostrar por consola todos los datos de los alumnos que son chicas.
  function displayFemales(students){
    let FemaleList = [];
      for (
      let index = 0;
      index < students.length;
      index ++
    )
      {  if (students[index].gender == "female"){
          FemaleList.push(students[index])
        }
      }
  console.log(FemaleList);
  }
  //7. Mostrar por consola el número de chicos y chicas que hay en la clase.
  function CountFemaleandMale(students){
    let scoreFemale = 0;
    let scoreMale = 0; 
      for (
      let index = 0;
      index < students.length;
      index ++
    )
       if (students[index].gender == "female"){
        scoreFemale++; 
       }
       else if (students[index].gender == "male"){
         scoreMale++;
       }
    console.log("Hay "+ scoreFemale + " chicas en la clase.")
    console.log("Hay "+ scoreMale +" chicos en la clase.")
  }
  
  
  //8.Mostrar true o false por consola si todos los alumnos de la clase son chicas.
  
  function allFemales(students){
    let isTrue = students.every((student) => student.gender === "female");
    return console.log(isTrue);
  };
  
  //9.Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
  
  function HowmanyInTwenties(students){
     let twenties = []; 
       for (
       let index = 0;
       index < students.length;
       index ++
     )
        if (students[index].age > 20 && students[index].age< 25)
        {
         twenties.push(students[index]); 
        }
     console.log(twenties)
   }
  /*10- Añadir un alumno nuevo con los siguientes datos:
    - nombre aleatorio.
    - edad aleatoria entre 20 y 50 años.
    - género aleatorio.
    - listado de calificaciones vacío.
  
  ¡OJO!, el nombre y el género tienen que ir acordes.*/
  
  function AddStudent(students){
  var student = new Object();
  student.age = Math.round((Math.random()*(50-20)));
  student.gender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
  student.examScores = [];let studentName = "";
    
  if (student.gender === "female") {
      student.name =
        availableFemaleNames[
          Math.floor(Math.random() * availableFemaleNames.length)
        ];
    } else {
      student.name =
        availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
    }
    
    students.push(student)
      console.log(students)
  }
  
  /* 11- Mostrar por consola el nombre de la persona más joven de la clase.
  ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.*/
  function theYoungest(students){
    let studentAges = []
    for (
      let index = 0;
        index < students.length;
        index ++
       )
        studentAges.push(students[index].age)
        
      let minimo = Math.min(...studentAges)
      for (
      let index = 0;
        index < students.length;
        index ++
       )
    if (students[index].age == minimo){
    console.log(students[index].name)
  }
  } 
  
  // 12.Mostrar por consola la edad media de todos los alumnos de la clase.
  function studentAverage(students){
      let studentAges = []
    for (
      let index = 0;
        index < students.length;
        index ++
       )
        studentAges.push(students[index].age)
      let average = studentAges.reduce((a, b) => a + b, 0) /studentAges.length;
  console.log("La edad media de la clase es " + average)
  }
   // 13. Mostrar por consola la edad media de las chicas de la clase.
  function FemaleAverage(students){
      let studentAges = []
    for (
      let index = 0;
        index < students.length;
        index ++
       )
  {  if (students[index].gender == "female"){
          studentAges.push(students[index].age)
        }
      }
  let average = studentAges.reduce((a, b) => a + b, 0) /          studentAges.length;
    console.log("La edad media de las chicas de la clase es " + average)
  }
  
  /*14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.*/
  
  function AddScore(students){
      let studentScore = []
     for (
      let index = 0;
        index < students.length;
        index ++
       ){
      studentScore = students[index].examScores
    studentScore.push(Math.round(Math.random()*10))
     }
     console.log (students)
  }
  
  AddScore(students)
  //15- Ordenar el array de alumnos alfabéticamente según su nombre.
  function alphabethOrder(students){
    students.sort(function (a,b){
      if(a.name > b.name){
      return 1;
      }
      if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      
      console.log(students)
  }


  function TableStudents(students)
  function QuantityStudents(students)
  function displayStudentsname(students)
  function DeleteLastOne(students)
  function deleteRandom (students)
  function displayFemales(students)
  function CountFemaleandMale(students)
  function allFemales(students)
  function HowmanyInTwenties(students)
  function AddStudent(students)
  function theYoungest(students)
  function studentAverage(students)
  function FemaleAverage(students)
  function AddScore(students)
  function alphabethOrder(students)