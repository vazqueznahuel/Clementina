import React from "react";

const infoMascota = (widi, calamaria, dozer, jeison, recipablo, gato, anguila) => { 
    const widiUnlock = widi;
    const calamariaUnlock = calamaria;
    const dozerUnlock = dozer; 
    const jeisonUnlock = jeison; 
    const recipabloUnlock = recipablo; 
    const gatoUnlock = gato; 
    const anguilaUnlock = anguila; 
    const mascota = [
        {
          id:'0',
          route: '/widiModelo.gltf',
          title: 'Wi-di',
          school: 'EPET 20',
          description: 'Wi-di es un oso tecnológico con cabeza de computadora brillante, tanto como una lámpara. Aunque no puede reír, dice "LOL" y tiene un humor tan avanzado que solo otros osos tecnológicos lo entienden. Sueña en código binario y espera que el mundo se conecte a través de su aplicación "Bearable". Cuando no está programando, cuida a su pequeña IA, T.I.W.I.',
          unlock: widiUnlock
        },
        {
          id:'1',
          route: '/epet5.gltf',
          title: 'Calamaria',
          school: 'EPET 5',
          description: 'Calamaria, la chica calamar, a veces puede ser un poco nerd y rara, pero es la reina de los experimentos químicos. siempre dispuesta a explorar hasta los rincones mas oscuros de la ciencia, aun que su laboratorio termine como un festival de fuegos artificiales y termine pasado a olor a marisquería. Su ultimo invento fue un perfume base de tinta de calamar. No, nadie lo compro. ',
          unlock: calamariaUnlock
        },
        {
          id:'2',
          route: '/epet8.gltf',
          title: 'Dozer',
          school: 'EPET 8',
          description: 'Dozer, un apasionado estudiante de la EPET 8, siempre cargaba su tablero que le cansaba mucho el brazo. Como solución, creó una mochila robot inspirada en bulldozer con brazos mecánicos, su brazo ya no duele, pero ahora tiene la espalda en la miseria. Como conejo extremo que es su idolo es Tony Hawk, sabe que lo puede humillar facilmente, por eso todavía no aprendio a andar en skate.',
          unlock: dozerUnlock
        },
        {
          id:'3',
          route: '/epet6.gltf', 
          title: 'Jeison',
          school: 'EPET 6',
          description: 'Jeison era un murciélago normal y feliz hasta que le agarró cáncer de oreja y se la reemplazaron por antenas de router. Es amable, tímido y muy buena persona, nunca duda en hacer lo correcto a pesar de ser un poco cobarde a veces. Prefiere hablar por llamada y mensaje antes que hablar en persona.',
          unlock: jeisonUnlock
        },
        {
          id:'4',
          route: '/epet3.gltf',
          title: 'Recipablo',
          school: 'EPET 3',
          description: 'Una vuelta un loco desquiciado agarró una planta, le puso un foco y lo metió en el cuerpo de un robot para que pudiera controlarlo y salió esta abominación. Vive gracias a energías renovables como la luz del sol. Es muy serio, preciso y conciso en todo lo que dice, casi como una máquina, como si no tuviera sentimientos. Su objetivo es proteger el medio ambiente y reducir el consumo de energía no renovable. Su frase favorita es “la energía ni se crea ni se destruye, solo se transforma”.',
          unlock: recipabloUnlock
        },
        {
          id:'5',
          route: '/epet17.gltf',
          title: 'el "Gato"',
          school: 'EPET 17',
          description: 'Le gustan las chatas al piso, las noches en la avenida y la musica al palo. Un amante de los fierros, preguntale lo que sea de auto que se re maneja, pero no le preguntes que paso el sabado porque no se acuerda. A veces puede ser algo narcisista o creido, pero como amigo no te falla nunca, un tipazo.',
          unlock: gatoUnlock
        },
        {
          id:'6',
          route: '/epet14.gltf',
          title: 'anguila',
          school: 'EPET 14',
          description: 'Le gustan las chatas al piso, las noches en la avenida y la musica al palo. Un amante de los fierros, preguntale lo que sea de auto que se re maneja, pero no le preguntes que paso el sabado porque no se acuerda. A veces puede ser algo narcisista o creido, pero como amigo no te falla nunca, un tipazo.',
          unlock: anguilaUnlock
        }
      ]
    return mascota
}

export default infoMascota