// OBJETOS COMO PARTE DE UNA FUNCION

function imprimirDatos(
    data: {
        userName: string,
        email: string,
    }): void 
    {
        console.log(`Tu nombre de usuario es: ${data.userName}, y el Email registrado es: ${data.email}`);
    }
    imprimirDatos({userName:"JuanitoProGamer", email:"JuanitoProGamer"})

// OBJETOS COMO TIPOS

type userData = {
    nombre: string,
    edad: number,
    email: string,
    telefono: string
};

let userList : userData[] = [];

userList.push({
    nombre: "Leonardo",
    edad: 19,
    email: "ljt.coronel@yavirac.edu.ec",
    telefono: "0999999999"
});

userList.push({
    nombre: "JuanitoProGamer",
    edad: 12,
    email: "juanitoProGamer@yavirac.edu.ec",
    telefono: "0999999999"
});

console.log(userList[1]);
