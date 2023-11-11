function recuperarContraseña(){
    const usuario = document.getElementById("usuarioRecu").value;
    if (usuario !== "") {
        const apicorreo = fetch(urlBase+"/login/EnviarToken", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    usuario: usuario,
                    contraseña: "",
                    token:"" 
                  
            }) // body data type must match "Content-Type" header
          }).then((respuesta) => respuesta.status)
          console.log(apicorreo);
          Promise.all([apicorreo]).then((datos) => {
            console.log(datos);   
             if(datos == 200){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "Peticion enviada correctamente",
                    showConfirmButton: false,
                    timer: 2000
                });
             }else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: datos[0].mensaje,
                    showConfirmButton: false,
                    timer: 2000
                });
             }
          }).catch(miError=>{console.log(miError);
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error de servidor',
                showConfirmButton: false,
                timer: 2000
            });
        });
    }
}

function cambioclave (){
    const nuevaClave = document.getElementById("nuevaClave").value;
    const token = document.getElementById("token").value;
    if (nuevaClave !== "" && token !== "") {
        const apicorreo = fetch(urlBase+"/login/CambiarClave", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    usuario: "",
                    contraseña: nuevaClave,
                    token:token 
                  
            }) // body data type must match "Content-Type" header
          }).then((respuesta) => respuesta.status)
          console.log(apicorreo);
          Promise.all([apicorreo]).then((datos) => {
            console.log(datos);   
             if(datos == 200){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "Clave actualizada satisfactoriamente",
                    showConfirmButton: false,
                    timer: 2000
                });
             }else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: datos[0].mensaje,
                    showConfirmButton: false,
                    timer: 2000
                });
             }
          }).catch(miError=>{console.log(miError);
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error',
                showConfirmButton: false,
                timer: 2000
            });
        });
    }
}