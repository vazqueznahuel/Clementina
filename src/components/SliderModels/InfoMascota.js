import React from "react";

const infoMascota = () => { 
    const mascota = [
        {
          id:'0',
          route: '/widiModelo.gltf',
          title: 'Wi-di',
          school: 'EPET 20',
          description: 'Este es la mascota de la epet 20, te dice hola como estas, es cacheton',
          unlock: true
        },
        {
          id:'1',
          route: '/epet5.gltf',
          title: 'Calamaria',
          school: 'EPET 5',
          description: 'Es tecnica quimica, es de la epet 5 y es una calamar',
          unlock: true
        },
        {
          id:'2',
          route: '/epet8.gltf',
          title: 'Dozer',
          school: 'EPET 8',
          description: 'Este conejo se hizo un robot para que no le duela el brazo de llevar el tablero y ahora le duele la espalda, es de la epet 8',
          unlock: true
        },
        {
          id:'3',
          route: '/epet6.gltf', 
          title: 'Jeison',
          school: 'EPET 6',
          description: 'El era un muercielago normal y feliz hasta que le agarro cancer de oreja y se la reemplazaron por antenas de router',
          unlock: true
        },
        {
          id:'4',
          route: '/epet3.gltf',
          title: 'Recipablo',
          school: 'EPET 3',
          description: 'Una vuelta un loco desquisiado agarro una planta, le puso un foco y lo metio en el cuerpo de un robot para que pudiera controlarlo y salio esta abominacion, vive gracias a energias renovables como la luz del sol',
          unlock: true
        },
        {
          id:'5',
          route: '/epet17.gltf',
          title: 'el "Gato"',
          school: 'EPET 17',
          description: 'Le gustan las chatas al piso, la musica fuerte y los fierros, preguntale lo que sea de auto que se re maneja, pero no le preguntes que paso el sabado porque no se acuerda',
          unlock: true
        }
      ]
    return mascota
}

export default infoMascota