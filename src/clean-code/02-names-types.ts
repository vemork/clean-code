(() => {

  // arreglo de temperaturas celsius
  const arrayOfNums = [33.6, 12.34];
  //refactor
  const celsiusTemperatures = [33.6, 12.34];

  // Dirección ip del servidor
  const ip = '123.123.123.123';
  // refactor
  const serverIp = '123.123.123.123';

  // Listado de usuarios
  const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
  //reafactor
  const emailPeople = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

  // Listado de emails de los usuarios
  const emails = people.map( u => u.email );
  //refactor
  const emailsList = emailPeople.map( person => person.email );

  // Variables booleanas de un video juego
  const jump = false;
  //refactor
  const canJump = false;
  const run = true;
  //refactor
  const canRun = true;
  const noTieneItems = true;
  //refactor
  const hasItems = true;
  const loading = false;
  //refactor
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const start = new Date().getTime();
  //refactor
  const startingTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const end = new Date().getTime() - start;
  //refactor
  const endinfTime = new Date().getTime() - start;


  // Funciones
  // Obtiene los libros
  function book() {
      throw new Error('Function not implemented.');
  }
  //Refactor
  function getAllbooks() {
      throw new Error('Function not implemented.');
  }

  // obtiene libros desde un URL
  function BooksUrl( u: string) {
      throw new Error('Function not implemented.');
  }
  //Refactor
  function getBooksUrl( u: string) {
      throw new Error('Function not implemented.');
  }
  
  // obtiene el área de un cuadrado basado en sus lados
  function areaCuadrado( s: number ) {
      throw new Error('Function not implemented.');
  }
  //Refactor
  function calculateAreaSquare( s: number ) {
      throw new Error('Function not implemented.');
  }

  // imprime el trabajo
  function printJobIfJobIsActive() {
      throw new Error('Function not implemented.');
  }
  //Refactor
  function printJob() {
      throw new Error('Function not implemented.');
  }
  
  




})();




