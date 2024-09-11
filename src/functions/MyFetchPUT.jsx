import React, { useEffect } from 'react';

function MyFetchPUT() {

    // Función para realizar una solicitud PUT usando XMLHttpRequest
    function fcnXMLHttpRequestPut() {
        console.log("¡Execute PUT API by XMLHttpRequest!");
        var request = new XMLHttpRequest();
        var url = 'https://reqres.in/api/users/1'; // URL del recurso que deseas actualizar
        var data = JSON.stringify({
            name: 'John Doe',
            job: 'Developer'
        });

        request.open('PUT', url, true);
        request.setRequestHeader('Content-Type', 'application/json'); // Indica que enviamos JSON
        request.send(data);

        return new Promise(function(resolve, reject) {
            request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        var respObj = JSON.parse(request.responseText);
                        console.log("Response XMLHttp:", respObj);
                        resolve(respObj);
                    } else {
                        reject(new Error('Error en la solicitud: ' + request.status));
                    }
                }
            };
        });
    }

    // Función para realizar una solicitud PUT usando Fetch
    function fcnFetchRequestPut() {
        console.log("¡Execute PUT API by Fetch!");
        var url = 'https://reqres.in/api/users/1'; // URL del recurso que deseas actualizar
        var data = {
            name: 'John Doe',
            job: 'Developer'
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(respObj => {
            console.log("Response Fetch:", respObj);
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
    }

    // Llamadas a las funciones en useEffect para evitar llamadas durante la renderización
    useEffect(() => {
        fcnXMLHttpRequestPut()
            .then(response => {
                console.log('Response XMLHttp PUT:', response);
            })
            .catch(error => {
                console.error('Error en XMLHttpRequest PUT:', error);
            });

        fcnFetchRequestPut();
    }, []);

    return (
        <>
            <div>
                <h1>
                    Programa para FETCH API PUT
                </h1>
            </div>
        </>
    );
}

export default MyFetchPUT;
