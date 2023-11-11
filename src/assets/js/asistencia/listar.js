function obtenerTodosAsistenciaL() {
    console.log ("entro al metodo");
    if(token.id_rol=="1" && token.id_estado == "1"){
      const apiObtenerAsistencia = urlBase+"/asistencia";
      const miPromesaAsistencia = fetch(apiObtenerAsistencia, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token.jwt
        },
  
      }).then((respuesta) =>
        respuesta.json()
      );
      Promise.all([miPromesaAsistencia]).then((arregloDatos) => {
        const datos = arregloDatos[0];
        var a = document.getElementById("tablaAsistencia").createTHead();
        var b = a.insertRow(0);
        var c = b.insertCell(0); 
        var d = b.insertCell(1);
        var e = b.insertCell(2);
        var f = b.insertCell(3);
        var g = b.insertCell(4);


        c.innerHTML="<b>id_asistencia</b>";
        d.innerHTML="<b>id_restaurante<b>";
        e.innerHTML="<b>id_usuario<b>";
        f.innerHTML="<b>fecha<b>";
        g.innerHTML="<b>id_tipo<b>";



        crearFilasAsistenciaLl(datos);
      });
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Acseso denegado',
        showConfirmButton: false,
        timer: 2000
      });
        window.location.href ="#home";
    }
  }
  
  function crearFilasAsistenciaLl(arregloObjeto) {
    console.log("crear filas");
    const cantidad = arregloObjeto.length;
    for (let i = 0; i < cantidad; i++) {
      const id_asistencia = arregloObjeto[i].id_asistencia;
      const restaurante = arregloObjeto[i].id_restaurante;
      const usuario = arregloObjeto[i].id_usuario;
      const fecha = arregloObjeto[i].fecha;
      const tipo = arregloObjeto[i].id_tipo;


  
      document.getElementById("tablaAsistencia").insertRow(-1).innerHTML =
        "<td>" + id_asistencia + "</td>" + "<td>" + restaurante + "</td> "+ "<td>" + usuario + "</td> "+ "<td>" + fecha + "</td>" + "<td>" + tipo + "</td>";
    }
  }
  