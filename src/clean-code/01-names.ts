(() => {

  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const fs = [
      { id: 1, f: false },
      { id: 2, f: false },
      { id: 3, f: true },
      { id: 4, f: false },
      { id: 5, f: false },
      { id: 7, f: true },
  ]; 

  //refactor
  const filesToEvaluate = [
    { id: 1, flag: false },
    { id: 2, flag: false },
    { id: 3, flag: true },
    { id: 4, flag: false },
    { id: 5, flag: false },
    { id: 7, flag: true },
]; 
  
  // Archivos marcados para borrar - files to delete
  const arhivos = fs.map( f => f.f );

  //refactor
  const filesToDelete = filesToEvaluate.map( file => file.flag );

  
  class AbstractUser { };
  class UserMixin { };
  class UserImplementation { };
  interface IUser { };

  // Mejor
  class User { };
  interface User { };


  // Todo: Tarea
      
  // día de hoy - today
  const ddmmyyyy = new Date();
  const currentDay = new Date();
  
  // días transcurridos - elapsed time in days
  const d: number = 23;
  const elapsedTime: number = 23;
  
  // número de archivos en un directorio - number of files in directory
  const dir = 33;
  const numberOfFiles = 33;
  
  // primer nombre - first name
  const nombre = 'Fernando';
  const fisrtName = 'Fernando';
  
  // primer apellido - last name
  const apellido = 'Herrera';
  const lastName = 'Herrera';

  // días desde la última modificación - days since modification
  const dsm = 12;
  const daysAfterLastModification = 12;
  
  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6;
  const maximunClasesByStudent = 6;


})();



