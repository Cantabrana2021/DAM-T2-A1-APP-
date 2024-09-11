function MyFunctions() {
    //FIC: funcion que recibe un nuemero y le suma uno.
    // function fcnSumarUno( numero ) {
    //    return numero + 1;
    // };
    //FIC: funcion que recibe un nuemero y le suma uno.
    function fcnSumarUno( numero, fcnResultadoCallBack ){
        setTimeout(function(){
        //return numero + 1; 
        fcnResultadoCallBack( numero + 1 );
        }, 800);
    };
    //FIC: Envia a la consola el nombre
    console.log("Programa de Funciones");
   
    //FIC: llamar la funcion.
    // let Resultado = fcnSumarUno (5);
    //FIC: Desplegar el resultado en consola
    //console.log(Resultado);
    //FIC: llamar la funcion.
    //  fcnSumarUno(5, function(nuevoValor1){
    //      //FIC: desplegar el resultado en consola.
    //      console.log("Resultado:", nuevoValor1);
    //  });
    //FIC: llamar la funcion.
    // fcnSumarUno (5, function(nuevoValor1){
    //      //FIC: desplegar el resultado en consola.
    //      //console.log("Resultado:", nuevoValor1);
    //      fcnSumarUno(nuevoValor1, function(nuevoValor2){
    //          console.log("Resultado:", nuevoValor2);
    //      });
    // });
    //FIC: llamar la funcion.
    fcnSumarUno (5, function(nuevoValor1){
        //FIC: desplegar el resultado en consola.
        //console.log("Resultado:", nuevoValor1);
        fcnSumarUno(nuevoValor1, function(nuevoValor2){
            //console.log("Resultado:", nuevoValor2);
            fcnSumarUno(nuevoValor2, function(nuevoValor3){
                console.log("Resultado:", nuevoValor3);
            });
        });
    });
   
   
    return (
        <>
            <div>
                <h1>
                    Programa de Funciones
                </h1>
            </div>
       
        </>
    );
};
export default MyFunctions;