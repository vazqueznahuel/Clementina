import React from "react";

const infoMascota = () => { 
    const mascota = [
        {
          route: '/widiModelo.gltf',
          title: 'Wi-di',
          school: 'EPET 20',
          description: 'Este es la mascota de la epet 20, te dice hola como estas, es cacheton',
          unlock: false
        },
        {
          route: '/epet5.gltf',
          title: 'Calamaria',
          school: 'EPET 5',
          description: 'Es tecnica quimica, es de la epet 5 y es una calamar',
          unlock: true
        },
        {
          route: '/epet8.gltf',
          title: 'Dozer',
          school: 'EPET 8',
          description: 'Este conejo se hizo un robot para que no le duela el brazo de llevar el tablero y ahora le duele la espalda, es de la epet 8',
          unlock: true
        },
        {
          route: '/epet6.gltf', 
          title: 'Jeison',
          school: 'EPET 6',
          description: 'El era un muercielago normal y feliz hasta que le agarro cancer de oreja y se la reemplazaron por antenas de router',
          unlock: true
        },
        {
          route: '/epet3.gltf',
          title: 'Jeison',
          school: 'EPET 3',
          description: 'El era un muercielago normal y feliz hasta que le agarro cancer de oreja y se la reemplazaron por antenas de router',
          unlock: true
        },
        {
          route: '/epet17.gltf',
          title: 'Jeison',
          school: 'EPET 17',
          description: 'El era un muercielago normal y feliz hasta que le agarro cancer de oreja y se la reemplazaron por antenas de router',
          unlock: true
        }
      ]
    return mascota
}

export default infoMascota