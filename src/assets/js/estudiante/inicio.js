function  mostrarMenuEstudiante (){
    if(token.id_rol=="2" && token.id_estado == "1"){
        const apiObtenerEstado = urlBase+"/menu";
        const miPromesaEstado = fetch(apiObtenerEstado, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ token.jwt
            },
          }).then((respuesta) =>
          respuesta.json()
        );
        Promise.all([miPromesaEstado]).then((arregloDatos) => {
          const datos = arregloDatos[0];
          var a = document.getElementById("tablaMenu").createTHead();
          var b = a.insertRow(0);
          var c = b.insertCell(0); 
          var d = b.insertCell(1);
          var e = b.insertCell(2);
          c.innerHTML="<b>Fecha</b>";
          d.innerHTML="<b>Menu</b>";
          e.innerHTML="<b>Tipo</b>";        
          crearFilasMenuLi(datos);
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

  function crearFilasMenuLi(arregloObjeto) {
    const cantidad = arregloObjeto.length;
    for (let i = 0; i < cantidad; i++) {
      const Fecha = arregloObjeto[i].fecha;
      const Menu = arregloObjeto[i].menu;
      const Tipo = arregloObjeto[i].tipo;
  
      document.getElementById("tablaMenu").insertRow(-1).innerHTML =
        "<td>" + Fecha + "</td>" + "<td>" + Menu + "</td>"+ "<td>" + Tipo + "</td>";
    }
  }

  function  mostrarPagosEstudiante(){
    if(token.id_rol=="2" && token.id_estado == "1"){
        const apiObtenerEstado = urlBase+"/pagos/"+token.id_usuario;
        const miPromesaEstado = fetch(apiObtenerEstado, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token.jwt
          },
        }).then((respuesta) =>
          respuesta.json()
        );
        Promise.all([miPromesaEstado]).then((arregloDatos) => {
          const datos = arregloDatos[0];
          var a = document.getElementById("tablaPagos").createTHead();
          var b = a.insertRow(0);
          var c = b.insertCell(0); 
          var d = b.insertCell(1);
          var e = b.insertCell(2);
          var f = b.insertCell(3);
          c.innerHTML="<b>Fecha</b>";
          d.innerHTML="<b>Pagado</b>";
          e.innerHTML="<b>Saldo</b>";
          crearFilasPagosLi(datos);
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
  
  function crearFilasPagosLi(arregloObjeto) {
    const cantidad = arregloObjeto.length;
    for (let i = 0; i < cantidad; i++) {
      const Fecha = arregloObjeto[i].fecha;
      const Cantidad = arregloObjeto[i].pagado;
      const Concepto = arregloObjeto[i].saldo;
  
      document.getElementById("tablaPagos").insertRow(-1).innerHTML =
        "<td>" + Fecha + "</td>"+ "<td>" + Cantidad + "</td>"+ "<td>" + Concepto + "</td>";
    }
  }

  function obtenerTodosAsistenciaLEstudiante() {
    console.log ("entro al metodo");
    if(token.id_rol=="2" && token.id_estado == "1"){
      const apiObtenerAsistencia = urlBase+"/asistencia/"+token.id_usuario;
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
        var d = b.insertCell(0);
        var f = b.insertCell(1);
        var g = b.insertCell(2);


        
        d.innerHTML="<b>id_restaurante<b>";
        f.innerHTML="<b>fecha<b>";
        g.innerHTML="<b>id_tipo<b>";



        crearFilasAsistenciaLlEstudiante(datos);
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
  
  function crearFilasAsistenciaLlEstudiante(arregloObjeto) {
    console.log("crear filas");
    const cantidad = arregloObjeto.length;
    for (let i = 0; i < cantidad; i++) {
      const restaurante = arregloObjeto[i].nombreRestaurante;
      const fecha = arregloObjeto[i].fechaAsistencia;
      const tipo = arregloObjeto[i].tipoAsistencia;


  
      document.getElementById("tablaAsistencia").insertRow(-1).innerHTML =
       "<td>" + restaurante + "</td> " + "<td>" + fecha + "</td>" + "<td>" + tipo + "</td>";
    }
  }