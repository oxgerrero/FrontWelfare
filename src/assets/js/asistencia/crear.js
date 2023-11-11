function crearAsistencia() {
    if(token.id_rol=="1" && token.id_estado == "1"){
      const restaurante = parseInt(document.getElementById("idSelectRestauranteAsistencia").value, 10);
      const usuario = parseInt(document.getElementById("idSelectUsusarioAsistencia").value, 10);
      const fecha = document.getElementById("FechaAsistencia").value;
      const tipo = parseInt(document.getElementById("idSelectTipoAsistencia").value, 10);

      if (restaurante !== "" && usuario !== "" && fecha !== "" && tipo !== "") {
        //esto es un json
        let objetoEnviar = {
            id_asistencia:0,
            id_restaurante:restaurante,
            id_usuario:usuario,
            fecha:fecha,
            id_tipo:tipo,
            restaurante:null,
            usuario:null,
            tipo:null
        }
        const apiCrear = urlBase+"/asistencia";
        fetch(apiCrear,{
            method:"POST",
            body:JSON.stringify(objetoEnviar),
            headers:{"Content-type":"application/json; chasert=UTF-8",
            'Authorization': 'Bearer '+ token.jwt}
        })
        .then(respuesta=>{
          respuesta.json();
          console.log(respuesta);
          if(respuesta.status==200){//reparar
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Creado',
              showConfirmButton: false,
              timer: 2000
            });
          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Error al guardar',
              showConfirmButton: false,
              timer: 2000
            });
          }
        })
        .catch(
            miError=>{console.log(miError);
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error de servidor',
                showConfirmButton: false,
                timer: 2000
              });
        });
      }
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


 //listar Tipo
function llenarSelecTipoAsistencia(){
  const ListarEstadosU = fetch(urlBase+"/tipo", {//listar modificarEstadoSensorAct
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token.jwt
    },

  }).then((respuesta) => respuesta.json())
  //console.log(ListarEstadosU);
  Promise.all([ListarEstadosU]).then((arregloDatos) => {
    const datos = arregloDatos[0];
    var html = llenarSTipoAsistencia(datos);
    document.getElementById("selecTipoAsistencia").innerHTML = html;
  });
}

function llenarSTipoAsistencia(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  var text = "<select name=\"tipo\" id=\"idSelectTipoAsistencia\"><option value=\"Seleccione\">...Seleccione...</option>";
  for (let i = 0; i < cantidad; i++) {
    const idusuario = arregloObjeto[i].id_tipo;
    const nombre = arregloObjeto[i].descripcion;
  
    text += "<option value='"+idusuario+"'>"+nombre+"</option>";
  }
  text += "</select>";
  return text;
} 

//listar usuarios
function llenarSelecUsuariosAsistencia(){
    const ListarEstadosU = fetch(urlBase+"/usuarios", {//listar modificarEstadoSensorAct
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token.jwt
      },
  
    }).then((respuesta) => respuesta.json())
    //console.log(ListarEstadosU);
    Promise.all([ListarEstadosU]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var html = llenarSUsuariosAsistencia(datos);
      document.getElementById("selecUsuarioAsistencia").innerHTML = html;
    });
  }
  
  function llenarSUsuariosAsistencia(arregloObjeto) {
    const cantidad = arregloObjeto.length;
    var text = "<select name=\"usuario\" id=\"idSelectUsusarioAsistencia\"><option value=\"Seleccione\">...Seleccione...</option>";
    for (let i = 0; i < cantidad; i++) {
      const idusuario = arregloObjeto[i].id_usuario;
      const nombre = arregloObjeto[i].nombre+"-"+arregloObjeto[i].identificacion;
    
      text += "<option value='"+idusuario+"'>"+nombre+"</option>";
    }
    text += "</select>";
    return text;
  }

  
//listar restaurantes
function llenarSelecRestauranteAsistencia(){
    const ListarEstadosU = fetch(urlBase+"/restaurante", {//listar modificarEstadoSensorAct
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token.jwt
      },
  
    }).then((respuesta) => respuesta.json())
    //console.log(ListarEstadosU);
    Promise.all([ListarEstadosU]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var html = llenarSRestauranteAsistencia(datos);
      document.getElementById("selecRestauranteAsistencia").innerHTML = html;
    });
  }
  
  function llenarSRestauranteAsistencia(arregloObjeto) {
    const cantidad = arregloObjeto.length;
    var text = "<select name=\"restaurante\" id=\"idSelectRestauranteAsistencia\"><option value=\"Seleccione\">...Seleccione...</option>";
    for (let i = 0; i < cantidad; i++) {
      const idusuario = arregloObjeto[i].id_restaurante;
      const nombre = arregloObjeto[i].nombre;
    
      text += "<option value='"+idusuario+"'>"+nombre+"</option>";
    }
    text += "</select>";
    return text;
  }