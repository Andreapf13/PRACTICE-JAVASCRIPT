import readline from "readline";
const students = [
    {
        age: 32,
        examScores: [],
        gender: "male",
        name: "edu",
    },
    {
        age: 29,
        examScores: [],
        gender: "female",
        name: "silvia",
    },
];

const availableMaleNames = [
    "pepe",
    "juan",
    "victor",
    "leo",
    "francisco",
    "carlos",
];

const availableFemaleNames = [
    "cecilia",
    "ana",
    "luisa",
    "silvia",
    "isabel",
    "virginia",
];

const availableGenders = ["male", "female"];


const Options = [
    {
        id: 0,
        description: "Mostrar en formato de tabla todos los alumnos.",
        function: () => TableStudents(students)
    },
    {
        id: 1,
        description: "Mostrar por consola la cantidad de alumnos que hay en clase.",
        function: () => QuantityStudents(students)
    },
    {
        id: 2,
        description: "Mostrar por consola todos los nombres de los alumnos.",
        function: () => displayStudentsname(students)
    },
    {
        id: 3,
        description: "Eliminar el último alumno de la clase",
        function: () => DeleteLastOne(students)

    },
    {
        id: 4,
        description: "Eliminar un alumno aleatoriamente de la clase",
        function: () => deleteRandom(students)
    },
    {
        id: 5,
        description: "Mostrar por consola todos los datos de los alumnos que son chicas.",
        function: () => displayFemales(students)
    },
    {
        id: 6,
        description: "Mostrar por consola el número de chicos y chicas que hay en la clase",
        function: () => CountFemaleandMale(students)
    },
    {
        id: 7,
        description: "Mostrar true o false por consola si todos los alumnos de la clase son chicas.",
        function: () => allFemales(students)
    },
    {
        id: 8,
        description: "Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años",
        function: () => HowmanyInTwenties(students)
    },
    {
        id: 9,
        description: "Añadir un alumno nuevo(nombre aleatorio,edad aleatoria entre 20 y 50 años,género aleatorio,listado de calificaciones vacío.",
        function: () => AddStudent(students)
    },
    {
        id: 10,
        description: "Mostrar por consola el nombre de la persona más joven de la clase.",
        function: () => theYoungest(students)
    },
    {
        id: 11,
        description: "Mostrar por consola la edad media de todos los alumnos de la clase.",
        function: () => studentAverage(students)
    },
    {
        id: 12,
        description: "Mostrar por consola la edad media de las chicas de la clase.",
        function: () => FemaleAverage(students)
    },
    {
        id: 13,
        description: "Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.",
        function: () => AddScore(students)
    },
    {
        id: 14,
        description: "Ordenar el array de alumnos alfabéticamente según su nombre.",
        function: alphabethOrder(students)
    }]

      

    function TableStudents(students) {
        console.table(students)
    }
    function QuantityStudents(students) {
        var quantity = students.length;
        console.log(quantity)
    }
    function displayStudentsname(students) {
        let nameList = [];
        for (
            let index = 0;
            index < students.length;
            index++
        )
            nameList.push(students[index].name);
        console.log(nameList)
    }

    function DeleteLastOne(students) {
        let newListAlumns = students.pop()
        console.log(students)
    }

    function deleteRandom(students) {
        let i = (Math.random() * students.length) | 0
        return students.splice(i, 1)[0]
        console.log(deleteRandom(students))
        console.log(students)
    }
    function displayFemales(students) {
        let FemaleList = [];
        for (
            let index = 0;
            index < students.length;
            index++
        ) {
            if (students[index].gender == "female") {
                FemaleList.push(students[index])
            }
        }
        console.log(FemaleList);
    }
    function CountFemaleandMale(students) {
        let scoreFemale = 0;
        let scoreMale = 0;
        for (
            let index = 0;
            index < students.length;
            index++
        )
            if (students[index].gender == "female") {
                scoreFemale++;
            }
            else if (students[index].gender == "male") {
                scoreMale++;
            }
        console.log("Hay " + scoreFemale + " chicas en la clase.")
        console.log("Hay " + scoreMale + " chicos en la clase.")
    }

    function allFemales(students) {
        let isTrue = students.every((student) => student.gender === "female");
        return console.log(isTrue);
    };
    function HowmanyInTwenties(students) {
        let twenties = [];
        for (
            let index = 0;
            index < students.length;
            index++
        )
            if (students[index].age > 20 && students[index].age < 25) {
                twenties.push(students[index]);
            }
        console.log(twenties)
    }

    function AddStudent(students) {
        var student = new Object();
        student.age = Math.round((Math.random() * (50 - 20)));
        student.gender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
        student.examScores = []; let studentName = "";

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

    function theYoungest(students) {
        let studentAges = []
        for (
            let index = 0;
            index < students.length;
            index++
        )
            studentAges.push(students[index].age)

        let minimo = Math.min(...studentAges)
        for (
            let index = 0;
            index < students.length;
            index++
        )
            if (students[index].age == minimo) {
                console.log(students[index].name)
            }
    }
    function studentAverage(students) {
        let studentAges = []
        for (
            let index = 0;
            index < students.length;
            index++
        )
            studentAges.push(students[index].age)
        let average = studentAges.reduce((a, b) => a + b, 0) / studentAges.length;
        console.log("La edad media de la clase es " + average)
    }
    function FemaleAverage(students) {
        let studentAges = []
        for (
            let index = 0;
            index < students.length;
            index++
        ) {
            if (students[index].gender == "female") {
                studentAges.push(students[index].age)
            }
        }
        let average = studentAges.reduce((a, b) => a + b, 0) / studentAges.length;
        console.log("La edad media de las chicas de la clase es " + average)
    }
    function AddScore(students) {
        let studentScore = []
        for (
            let index = 0;
            index < students.length;
            index++
        ) {
            studentScore = students[index].examScores
            studentScore.push(Math.round(Math.random() * 10))
        }
        console.log(students)
    }
    function alphabethOrder(students) {
        students.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });

        console.log(students)
    }


    const showMenu = () => {
      console.log("\nOpciones\n");
      for (let index = 0; index < Options.length; index++) {
        console.log(
          "\t" +
            Options[index].id +
            "\t" +
           Options[index].description
        );
      }
    };
    
const main = () => {
  showMenu();
  const promise = new Promise((resolve, reject) => {
    rl.question(
      "\n ESCOGE UNA OPCIÓN \n\t",
      (option) => {
        rl.pause();
        if (option > 0 && option < Options.length) {
          resolve(optionsAvailable[option].function());
        } else {
          reject(Options[0].function() + process.exit(0));
        }
      }
    );
  });

    promise.then((value) => {
    main(), value;
  });
};

main();
