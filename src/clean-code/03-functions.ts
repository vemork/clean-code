(() => {
  function getMovieInfoById(movieId: string) {
    console.log({ movieId });
  }

  function getAllMovieActorsInfo(movieId: string) {
    console.log({ movieId });
  }

  function getActorBio(ActorId: string) {
    console.log({ ActorId });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("birthdate :>> ", birthdate);
    console.log("Crear actor");
    return true;
  }

  // const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
  //   let result;
  //   if ( isDead ) {
  //       result = 1500;
  //   } else {
  //       if ( isSeparated ) {
  //           result = 2500;
  //       } else {
  //           if ( isRetired ) {
  //               result = 3000;
  //           } else {
  //               result = 4000;
  //           }
  //       }
  //   }

  //   return result;
  // }

  //REFACTOR

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    if (isDead) {
      return 1500;
    }

    if (isSeparated) {
      return 2500;
    }

    // isRetired ? (result = 3000) : (result = 4000);
    return isRetired ? 3000 : 4000;
  };
})();
