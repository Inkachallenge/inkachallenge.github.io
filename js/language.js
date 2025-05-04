// Objetos con los textos en los dos idiomas
const translations = {
  es: {
    // Navbar
    "nav-about": "Acerca de",
    "nav-rules": "Reglamentos",
    "nav-accred": "Acreditaciones",
    "nav-invit": "Invitaciones",
    "nav-register": "Registro",
    "nav-contact": "Contáctanos",
    //About.html
    "logo-ic":"images/icons/icon-ic4-es.png",
    "first-title": "INKACHALLENGE IV Edición CONEIMERA 2025",
    "text1": "<b>INKACHALLENGE</b> es una competencia de robótica desarrollada en la ciudad de Trujillo - Perú, organizada por el club de robótica <b>Robotronics UNT</b>. Desde su primera edición en 2018, reúne a universitarios, makers, profesionales y apasionados por la robótica, provenientes de universidades y equipos independientes de todo el país. Todos ellos compiten en diversas categorías de robótica móvil que desafían sus habilidades técnicas, su estrategia y su capacidad de trabajo en equipo, convirtiendo a este evento en una de las competencias más importantes del Perú.", 
    "text2": "Esta edición es un evento oficial de la Liga Nacional de Robótica de Competencia 2025 (Perú), y se desarrollará en colaboración con el Congreso Nacional y Exposición Internacional de Ingeniería Mecánica, Mecatrónica, Eléctrica, Electrónica y Ramas Afines (XXXI CONEIMERA), con el apoyo y respaldo de Let's Go Robot.",
    "venue": `
      <div id="venue" class="flex items-center gap-2">
        <img src="images/icons/location.png" alt="Ubicación" class="w-6 h-6">
        <span>
          Lugar: 
          <a href="https://maps.google.com/?q=Universidad+Nacional+de+Trujillo" target="_blank" class="text-yellow-400 hover:underline hover:text-orange-400 transition">
            Universidad Nacional de Trujillo (UNT), Perú
          </a>
        </span>
      </div>
    `,
    "date": "Fecha: 6, 7 y 8 de agosto de 2025",
    "second-title": "Ediciones Previas",
    "zero-ic": "SITEM 2017",
    "zero-desc": "En 2017, poco después de su éxito en Rumania, <b>Robotronics UNT</b> tomó la iniciativa de organizar un evento de robótica de alto nivel en Perú. La versión piloto de este concurso se desarrolló en la <b>Semana de Integración Tecnológica Mecatrónica (SITEM)</b>, organizada anualmente por la escuela de Ingeniería Mecatrónica de la Universidad Nacional de Trujillo. Este concurso contó con diversos equipos participantes y con esta experiencia de organizadores, se dio pie a la creación de un evento oficial, para el siguiente año.",
    "first-ic": "InkaChallenge I",
    "first-desc": "Con esta primera edición oficial, el evento cobra vida bajo el nombre de InkaChallenge, y con la participación de diversos equipos nacionales, el evento resultó todo un éxito, marcando el inicio de una tradición para el club. Por primera vez en Perú, se otorgó acreditaciones a eventos de talla internacional como lo son Robochallenge Rumania y Robot Games Zero Latitud, en Ecuador.",
    "second-ic": "InkaChallenge II",
    "second-desc": "La segunda edición logró más de 120 robots en competencia, provenientes de 12 equipos de distintas ciudades de Perú, tales como Trujillo, Lima, Arequipa, Cajamarca, Piura e Ica. Esta edición consolidó a InkaChallenge como un evento de referencia en la robótica del país. A los ganadores de las categorías respectivas se les otorgó acreditaciones para participar en Robochallenge Rumania y, por primera vez, para Robotchallenge China.",
    "third-ic": "InkaChallenge III",
    "third-desc": "La tercera edición de Inkachallenge contó con 160 robots, provenientes de diversos equipos, y esta edición destacó por su amplia participación y la incorporación de nuevas categorías, como es el caso de <b> Seguidor de línea Enhanced</b>. A los ganadores de las categorías respectivas se les otorgó acreditaciones para participar en Robotchallenge China, Robochallenge Rumania y Robot Games Zero Latitud.",
    //Reglamentos
    "btn-velocista": "Seguidor de Línea Velocista",
    "btn-enhanced": "Seguidor de Línea Enhanced",
    "btn-turbo": "Seguidor de Línea Turbo",
    "btn-robotracer": "Seguidor de Línea Nat-Car",
    "btn-miniauto": "Minisumo Autónomo",
    "btn-minirc": "Minisumo Bluetooth/RC",
    "btn-microsumo": "Microsumo Autónomo",
    "btn-micromouse": "Robot Micromouse",
    "btn-soccer": "Robot Soccer",
    "btn-combate": "Combate de Robots",
    "btn-kungfu": "Robot Kung-Fu",
    "btn-walking": "Robot Walking-Race",
    "content-velocista":`
    <div class="modal-content">
      <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
        <img src="images/linefollower.png" alt="Seguidor de línea velocista" class="rounded-xl shadow-lg w-[320px] h-auto">
        <!-- text 2 the right -->
        <div>
          <p class="text-justify mb-4 text-lg">Los seguidores de línea velocistas están diseñados para recorrer
            el circuito a máxima velocidad, siguiendo con precisión una línea negra de <b>19 mm de ancho</b> 
            sobre un fondo blanco. Estos robots están optimizados para realizar giros rápidos y maniobras precisas, 
            lo que les permite completar el recorrido en el menor tiempo posible.</p>
          
        </div>
      </div>
      <p class="mt-4 mb-2 text-lg font-semibold">📶 Niveles de participación:</p>
              <ul class="list-disc pl-6 text-lg space-y-1">
                <li>Amateur</li>
                <li>Senior</li>
                <li>Master</li>
      <p class="mt-4 mb-2 text-lg">Conoce más en el reglamento Oficial IV InkaChallege Edición Coneimera 
        para la categoría<b> Seguidor de Línea velocista</b>:</p>

      <!-- PDF incrustado con scroll -->
      <div class="mt-6" style="max-height: 400px;">
        <embed src="regulations/Seguidor de Linea Velocista - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
      </div>
    </div>
    `,
    "content-enhanced":`
    <div class="modal-content">
      <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
        <img src="images/enhanced.jpg" alt="Seguidor de línea enhanced" class="rounded-xl shadow-lg w-[350px] h-auto">
        <!-- text to the right -->
        <div>
          <p class="text-justify mb-4 text-lg">Esta categoría se basa en el seguidor
            de línea velocista, pero incorpora obstáculos físicos que aumentan significativamente la complejidad.
              Los robots deben recorrer el circuito a alta velocidad mientras enfrentan <b>un balancín</b>, 
              <b>un bloque</b> y <b>una discontinuidad</b> en la pista (no necesariamente en ese orden).
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4 mt-8">
        <!-- Texto -->
        <div class="flex-1">
          <p class="text-justify mb-2 text-lg font-semibold">⚠️ Obstáculos:</p>
          <ul class="list-disc pl-6 text-base space-y-1">
            <li><b>Balancín:</b> Se coloca un balancín de al menos 50 cm, un eje montado a un máximo de 12 cm sobre el suelo. La línea negra continúa en el balancín.</li>
            <li><b>Bloque:</b> El robot debe rodear el bloque de aprox. 25 cm x 12 cm x 6,5 cm</li>
            <li><b>Discontinuidad:</b> Se presenta sobre el recorrido, con una longitud de 10 cm.</li>
          </ul>
        </div>
        <!-- Imagen + pie de imagen -->
        <div class="flex flex-col items-center md:items-start mt-12">
          <img src="images/seesaw.png" alt="Balancín" class="rounded-xl shadow-lg w-[300px] h-auto self-center">
          <p class="text-sm text-gray-600 italic">Representación del balancín.</p>
        </div>
      </div>

      <p class="mt-4 mb-4 text-lg">Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Seguidor de Línea Enhanced</b>:</p>

      <div class="mt-6" style="max-height: 400px;">
        <embed src="regulations/Seguidor de Linea Enhanced - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
      </div>
    </div>
    `,
    "content-turbo":`
    <div class="modal-content">
    <div class="flex items-center space-x-4"> <!-- div with 2 elements -->
      <img src="images/turbo.jpg" alt="Seguidor de línea Turbo" class="rounded-xl shadow-lg w-[250px] h-auto">
      <!-- text 2 the right -->
      <div>
        <p class="text-justify mb-4 text-lg"> 
          <b>Seguidor de Línea Turbo</b> es la nueva categoría del <b>Inkachallenge IV</b>, presentada por primera
           vez en Perú. Se trata de un robot móvil autónomo, diseñado para seguir un recorrido continuo trazado por
            una línea negra sin intersecciones, en el menor tiempo posible. <br><br>
          Esta variante de los seguidores de línea introduce como principal desafío un <b>bucle vertical de 1.50 metros
             de diámetro</b>, donde la línea del circuito continúa a lo largo de toda la estructura, exigiendo precisión
              y un alto nivel de control en el desplazamiento del robot.
      </div>
    </div>
    
    <div class="flex justify-between items-start mt-8">
      <!-- Texto -->
      <div class="flex-1">
        <p class="text-justify mb-2 text-lg font-semibold">Datos adicionales:</p>
        <ul class="list-disc pl-6 text-base space-y-1">
          <li>El bucle se encuentra en una de las rectas del recorrido.</li>
          <li>La línea del circuito es de 19mm de ancho al igual que los demás seguidores.</li>
          <li>El bucle tiene un ancho máximo total de 40cm.</li>
        </ul>
      </div>

      <div class="flex flex-col items-center md:items-start">
        <img src="images/loop.png" alt="Bucle" class="rounded-xl shadow-lg w-[270px] h-auto self-center">
        <p class="text-sm text-gray-600 italic mt-2">Representación del bucle.</p>
      </div>
    </div>

        <p class="mt-4 mb-4 text-lg">Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Seguidor de Línea Turbo</b>:</p>
        <div class="mt-6" style="max-height: 400px;">
          <embed src="regulations/Seguidor de Linea Turbo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
        </div>
    </div>
    `,
    "content-robotracer":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/robotracer.png" alt="Robotracer" class="rounded-xl shadow-lg w-[270px] h-auto">
      <!-- text 2 the right -->
      <div>
        <p class="text-justify mb-4 text-lg">Seguidor de Línea Nat-car, también conocido como RobotRacer, es una categoría de 
          competencia robótica originaria de Japón.<br>
           Los robots en esta categoría deben recorrer el circuito en el menor tiempo posible, el cual incluye curvaturas
            e intersecciones (también llamados cruces).<br> En cada curvatura se encuentran 2 marcadores, uno al incio y otro
             al final, cada uno a 4cm del borde de la línea.
      </div>
    </div>
    <div class="flex justify-between items-start mt-8">
      <!-- Texto -->
      <div class="flex-1">
        <p class="text-justify mb-2 text-lg font-semibold">Datos adicionales:</p>
        <ul class="list-disc pl-6 text-base space-y-1">
          <li>Las curvaturas incluyen marcadores como los que se muestran en la imagen.</li>
          <li>El robot debe incluir un buzzer.</li>
          <li>El robot debe hacer sonar el buzzer al inicio , al final y en cada curva al reconocer los marcadores, 
            pero no cuando está en un cruce.</li>
            <li>Las zona de incio y meta se encuetra delimintada por dos marcadores a una separación de 100cm.</li>
          
        </ul>
      </div>
    
      <div class="flex flex-col items-center md:items-start">
        <img src="images/robotracer-rules-es.png" alt="Bucle" class="rounded-xl shadow-lg w-[270px] h-auto self-center">
        <p class="text-sm text-gray-600 italic mt-2">Representación de los marcadores en el recorrido.</p>
      </div>
    </div>

    <p class="mt-4 mb-4 text-lg">Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Seguidor de Línea Nat-car/Robotracer</b>:</p>

      <div class="mt-6" style="max-height: 400px;">
        <embed src="regulations/Seguidor de Linea NatCar - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
      </div>
    </div>
    `,
    "content-miniauto":`
    <div class="modal-content">
      <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
        <img src="images/minisumo.jpg" alt="Minisumo" class="rounded-xl shadow-lg w-[320px] h-auto">
          <div>
            <p class="text-justify mb-4 text-lg">Minisumo autónomo es una categoría originada en Japón, 
              inspirada en el sumo tradicional.<br> Estos robots funciona sin control remoto, utilizando sensores
              para detectar a su oponente y estrategias de evasión para no salir del dojo. Su principal objetivo:
                empujar al rival fuera del dojo de forma completamente autónoma, en partidas de 3 asaltos.<br><br>
              Estos robots como máximo pueden pesar 500g, y deben poder caber en un cuadrado de 10cm de lado.</p>
            
          </div>
        </div>
        <p class="mt-4 mb-2 text-lg font-semibold">📶 Niveles de participación:</p>
                <ul class="list-disc pl-6 text-lg space-y-1">
                  <li>Amateur</li>
                  <li>Senior</li>
                  <li>Master</li>
        <p class="mt-8 mb-4 text-lg">Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Minisumo Autónomo</b>:</p>

      <div class="mt-6" style="max-height: 400px;">
        <embed src="regulations/MiniSumo Autónomo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
      </div>
    </div>
    `,
    "content-minirc":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/minirc.jpg" alt="Minisumo RC" class="rounded-xl shadow-lg w-[290px] h-auto">
      <div>
          <p class="text-justify mb-4 text-lg">El Minisumo RC es una categoría de competencia en la que los robots, 
            controlados de manera inalámbrica, deben detectar y empujar a su oponente fuera del dojo. A diferencia 
            del Minisumo autónomo, el robot es operado por un piloto, quien debe usar su destreza para controlar 
            el movimiento en tiempo real, y no puede hacer uso de sensores ni rutinas pre-programadas, asegurando
             que la habilidad del piloto sea el factor decisivo en la pelea. <br>
             Estos robots como máximo pueden pesar 500g, y deben poder caber en un cuadrado de 10cm de lado.
          </p>
     </div>
    </div>
        <p class="mt-4 mb-2 text-lg font-semibold">📶 Niveles de participación:</p>
                <ul class="list-disc pl-6 text-lg space-y-1">
                  <li>Amateur</li>
                  <li>Senior</li>
                  <li>Master</li>
    <p class="mt-4 mb-4 text-lg">Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Minisumo Bluetooth/RC</b>:</p>

    <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/MiniSumo Bluetooth-RC - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
  </div>
    `,
    "content-microsumo":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/microsumo.png" alt="Microsumo" class="rounded-xl shadow-lg w-[280px] h-auto">
      <!-- text 2 the right -->
      <div>
        <p class="text-justify mb-4 text-lg">Esta es una categoría de competencia en la que 
          robots pequeños deben detectar y empujar a su oponente fuera del dojo 
          de manera totalmente autónoma. 
          Estos robots utilizan sensores para localizar al rival, y su diseño compacto les permite 
          realizar movimientos rápidos y precisos.<br>
        Pueden tener un peso máximo de 100g y pueden caber en un cuadrado de 5cm de lado.</p>
      </div>
    </div>

    <p class="mt-4 mb-4 text-lg">Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Microsumo Autónomo</b>:</p>


    <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/MicroSumo Autónomo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
      </div>
    </div>
    `,
    "content-micromouse":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/micromouse.jpg" alt="Micromouse" class="rounded-xl shadow-lg w-[320px] h-auto">
      <!-- text 2 the right -->
      <div>
        <p class="text-justify mb-4 text-lg">Micromouse, también conocida como Maze, es la categoría más 
          antigua en competencias de robótica autónoma. En ella, el robot debe explorar y encontrar el 
          camino más rápido hacia el centro de un laberinto, sin ayuda externa.<br> En InkaChallenge, el laberinto
           está formado por celdas de hasta 20 cm de lado, y la meta es un cuadro de 4 celdas sin paredes internas,
            con una única entrada. </p>
      </div>
    </div>

    <p class="mt-4 mb-4 text-lg">Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Micromouse</b>:</p>

      <div class="mt-6" style="max-height: 400px;">
        <embed src="regulations/Robot MicroMouse - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
      </div>
    </div>
    `,
    "content-kungfu":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/kung-fu.jpg" alt="Robot Kung Fu" class="rounded-xl shadow-lg w-[320px] h-auto">
      <!-- text 2 the right -->
      <div>
        <p class="text-justify mb-4 text-lg"></p>Robot Kung-Fu es una competencia de destreza donde robots humanoides
         se enfrentan en combates no destructivos, simulando movimientos humanos mediante extremidades superiores e 
         inferiores. <br>
        En InkaChallenge, existen dos categorías: Otto (convalidado en la Liga Senior) y Humanoide 
        (convalidado en la Liga Master).
        
        
      </div>
    </div>

    <p class="mt-4 mb-4 text-lg">Para más información revisa el reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Robot Kung Fu</b>:</p>


    <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/Robot Kung-Fu - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
  </div>
    `,
    "content-combate":`
      <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/combat.jpg" alt="Robot de combate" class="rounded-xl shadow-lg w-[320px] h-auto">
            <!-- text 2 the right -->
            <div>
              <p class="text-justify mb-4 text-lg">Un Robot de Combate es un robot móvil controlado de forma 
                inalámbrica, diseñado para luchar "cuerpo a cuerpo" contra un oponente similar. El objetivo 
                es causar el mayor daño posible y dejar inmovilizado al rival por más de diez segundos, utilizando
                 armas mecánicas, neumáticas o hidráulicas. Además, se evalúa la agresividad y su
                  desenvolvimiento en general durante la pelea. </p>
              
            </div>
          </div>
          <p class="mt-4 mb-2 text-lg font-semibold">💥 Niveles y tipos de combate:</p>
                  <ul class="list-disc pl-6 text-lg space-y-1">
                    <li><b>Amateur:</b> Incluye el combate 3D, en donde los robots están fabricados con técnicas de impresión 3D.</li>
                    <li><b>Senior:</b> Abarca combate de 1lb y de 3lb, hay libertad en la fabricación.</li>

    <p class="mt-12 mb-4 text-lg">Conoce más en el reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Robot de combate</b>:</p>

    <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/Combate de Robots - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
  </div>
    `,
    "content-walking":`
     <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/walking.png" alt="Walking-Race" class="rounded-xl shadow-lg w-[320px] h-auto">
      <!-- text 2 the right -->
      <div>
        <p class="text-justify mb-4 text-lg">Robot Walking Race es una competencia donde robots bípedos 
          deben recorrer una distancia recta en el menor tiempo posible, usando solo sus piernas y sin 
          apoyo adicional. El movimiento debe ser realizado exclusivamente por sus extremidades,
           sin ningún otro mecanismo.<br> <br>

          Existen dos categorías: Otto (convalidado en la Liga Senior) y Humanoide (convalidado en 
          la Liga Master), seleccionando a los competidores según el nivel de estudios del piloto 
          y el tipo de robot utilizado.</p>
      </div>
    </div>

    <p class="mt-4 mb-4 text-lg">Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Walking-Race</b>:</p>


    <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/Robot Walking-Race - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
  </div>
    `,
    "content-soccer":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/soccer.png" alt="Robot soccer" class="rounded-xl shadow-lg w-[240px] h-auto">
      <!-- text 2 the right -->
      <div>
        <p class="text-justify mb-4 text-lg">Robot Soccer Bluetooth/RC es una competencia donde robots 
          móviles son capaces de jugar un partido de soccer, en equipos de tres contra tres, controlados por sus pilotos
           a través de comunicación inalámbrica.<br>

          La clave de esta categoría está en la destreza del piloto, ya que los robots no deben contar con
           sensores ni rutinas preprogramadas para moverse. Todo el control debe ser manual y en tiempo real,
            lo que convierte cada partido en una mezcla de estrategia, reflejos y coordinación.
      </div>
    </div>
    <div class="flex justify-between items-start mt-8">
      <!-- Texto -->
      <div class="flex-1">
        <p class="text-justify mb-2 text-lg font-semibold">Datos adicionales:</p>
        <ul class="list-disc pl-6 text-base space-y-1">
          <li>La cancha de soccer se distribuye como en la imagen.</li>
          <li> Cada equipo inicia con los robots dentro del área de arco.</li>
          <li>Cada partido cuenta con 2 tiempos de 2 minutos.</li>
            <li>Los niveles de participación son amateur y senior.</li>
          
        </ul>
      </div>
    
      <div class="flex flex-col items-center md:items-start">
        <img src="images/soccer-field.png" alt="Bucle" class="rounded-xl shadow-lg w-[270px] h-auto self-center">
        <p class="text-sm text-gray-600 italic mt-2">Medidas de la cancha de soccer.</p>
      </div>
    </div>

    <p class="mt-4 mb-4 text-lg">Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría<b> Robot soccer</b>:</p>


    <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/Robot Soccer - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
  </div>
    `,
    //contactanos
    "contact-title":"¿Tienes alguna consulta?",
    "contact-desc":"No dudes en escribirnos al correo electrónico para cualquier duda o pregunta.",
    "contact-redes":"También puedes seguir nuestras redes sociales para conocer más novedades sobre Inkachallenge IV - Edición CONEIMERA, ¡Nos vemos en Trujillo!",


    //invitaciones
    "invite-title":"📑 Solicitar invitaciones",
    "invite-desc":`Si tu equipo necesita invitaciones, puedes enviar los siguientes datos al correo <a href="mailto:robotronicsunt@gmail.com" class="text-blue-400 underline hover:text-blue-200">
    robotronicsunt@gmail.com
  </a>:`,
    "invite-list":`
      <li>Nombre de la institución</li>
      <li>Nombre del equipo</li>
      <li>Nombre del líder del equipo</li>
      <li>Integrantes de equipo que van a participar</li>
    `,
    "invite-numbers":"También puedes comunicarte a los siguientes números de teléfono por WhatsApp:",

  },
  en: {
    // Navbar
    "nav-about": "About",
    "nav-rules": "Regulations",
    "nav-accred": "Accreditations",
    "nav-invit": "Invitations",
    "nav-register": "Register",
    "nav-contact": "Contact us",
    //About.html
    "logo-ic":"images/icons/icon-ic4-en.png",
    "first-title": "INKACHALLENGE IV CONEIMERA 2025 Edition",
    "text1": "<b>INKACHALLENGE</b> is a robotics competition held in the city of Trujillo - Peru, organised by the robotics club <b>Robotronics UNT</b>. Since its first edition in 2018, it brings together university students, makers, professionals and passionate about robotics, from universities and independent teams from all over the country. All of them compete in various challenges of mobile robotics that challenge their technical skills, strategy and teamwork, making this event one of the most important competitions in Peru.", 
    "text2": "This edition is an official event of the National Robotics Competition League 2025 (Peru), and will be developed in collaboration with the National Congress and International Exhibition of Mechanical, Mechatronic, Electrical, Electronic Engineering and Related Branches (XXXI CONEIMERA), with the support and backing of Let's Go Robot.",
    "venue": `
      <div id="venue" class="flex items-center gap-2">
        <img src="images/icons/location.png" alt="Ubicación" class="w-6 h-6">
        <span>
          Venue: 
          <a href="https://maps.google.com/?q=Universidad+Nacional+de+Trujillo" target="_blank" class="text-yellow-400 hover:underline hover:text-orange-400 transition">
            National University of Trujillo (UNT), Perú
          </a>
        </span>
      </div>
    `,
    "date": "Fecha: August 6th to 8th, 2025",
    "second-title": "Previous Editions",
    "zero-ic": "SITEM 2017",
    "zero-desc": "In 2017, shortly after its success in Romania, <b>Robotronics UNT</b> took the initiative to organise a high-level robotics event in Peru. The pilot version of this competition took place at the <b>Mechatronics Technology Integration Week (SITEM: Semana de Integración Tecnológica)</b>, organised annually by the school of Mechatronics Engineering of the National University of Trujillo. This competition had several participating teams and with this experience of the organisers, the idea of creating an official event for the following year was born.",
    "first-ic": "InkaChallenge I",
    "first-desc": "With this first official edition, the event came to life under the name of InkaChallenge, and with the participation of various national teams, the event was a complete success, marking the beginning of a tradition for the club. For the first time in Peru, accreditations were granted to international events such as Robochallenge Romania and Robot Games Zero Latitude, in Ecuador.",
    "second-ic": "InkaChallenge II",
    "second-desc": "The second edition had more than 120 robots in competition, from 12 teams from different cities in Peru, such as Trujillo, Lima, Arequipa, Cajamarca, Piura and Ica. This edition consolidated InkaChallenge as a reference robotics event in the country. The winners of the respective challenges were awarded accreditations to participate in Robochallenge Romania and, for the first time, Robotchallenge China.",
    "third-ic": "InkaChallenge III",
    "third-desc":"The third edition of Inkachallenge was attended by 160 robots from various teams, and this edition stood out for its wide participation and the incorporation of new categories, such as <b>Line Follower Enhanced</b>. The winners of the respective categories were awarded accreditations to participate in Robotchallenge China, Robochallenge Romania and Robot Games Zero Latitude.",
    //Rules
    "btn-velocista": "Linefollower Classic",
    "btn-enhanced": "Linefollower Enhanced",
    "btn-turbo": "Linefollower Turbo",
    "btn-robotracer": "Robotracer",
    "btn-miniauto": "Autonomous Minisumo",
    "btn-minirc": "RC/Bluetooth Minisumo",
    "btn-microsumo": "Microsumo",
    "btn-micromouse": "Micromouse",
    "btn-soccer": "Soccer",
    "btn-combate": "Robot combat",
    "btn-kungfu": "Robot Kung-Fu",
    "btn-walking": "Walking-Race",
    "content-velocista":`
      <div class="modal-content">
      <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
        <img src="images/linefollower.png" alt="Seguidor de línea velocista" class="rounded-xl shadow-lg w-[320px] h-auto">
        <!-- text 2 the right -->
        <div>
          <p class="text-justify mb-4 text-lg">Line follower robots are designed to run around the track at maximum speed, precisely 
          following a <b>19 mm wide</b> black line</b> on a white background. These robots are optimised for fast turns and precise manoeuvres,
          allowing them to complete the course in the shortest possible time.</p>
          
        </div>
      </div>
      <p class="mt-4 mb-2 text-lg font-semibold">📶 Competition levels:</p>
              <ul class="list-disc pl-6 text-lg space-y-1">
                <li>Beginner</li>
                <li>Senior</li>
                <li>Master</li>
      <p class="mt-4 mb-2 text-lg">Find out more in the Official IV InkaChallege Coneimera Edition regulations for the challenge <b>Linefollower Classic</b>:</p>

      <!-- PDF incrustado con scroll -->
      <div class="mt-6" style="max-height: 400px;">
        <embed src="regulations/Seguidor de Linea Velocista - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
      </div>
    </div>
    `,
    "content-enhanced":`
    <div class="modal-content">
      <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
        <img src="images/enhanced.jpg" alt="Seguidor de línea enhanced" class="rounded-xl shadow-lg w-[350px] h-auto">
        <!-- text to the right -->
        <div>
          <p class="text-justify mb-4 text-lg">This challenge is based on the classic linefollower, but incorporates physical obstacles that significantly increase the complexity.
            Robots must traverse the track at high speed while facing <b>a seesaw</b>, <b>a block</b> and <b>an interruption</b> in the track (not necessarily in that order).
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4 mt-8">
        <!-- Texto -->
        <div class="flex-1">
          <p class="text-justify mb-2 text-lg font-semibold">⚠️ Obstacles:</p>
          <ul class="list-disc pl-6 text-base space-y-1">
            <li><b>Seesaw:</b> A seesaw is placed on a straight line. Its lenght is at least 50 cm, and its axis is mounted up to 12 cm above the ground. The black line continues on the seesaw.</li>
            <li><b>Block:</b> The robot must go around the block of approx. 25 cm x 12 cm x 6.5 cm</li>
            <li><b>Interruption:</b> It is presented on the course, with a length of 10 cm.</li>
          </ul>
        </div>
        <!-- Imagen + pie de imagen -->
        <div class="flex flex-col items-center md:items-start mt-12">
          <img src="images/seesaw.png" alt="Seesaw" class="rounded-xl shadow-lg w-[300px] h-auto self-center">
          <p class="text-sm text-gray-600 italic">Seesaw representation.</p>
        </div>
      </div>

      <p class="mt-4 mb-4 text-lg">Official Rules IV InkaChallege Coneimera Edition for the challenge<b> Line Follower Enhanced</b>:</p>

      <div class="mt-6" style="max-height: 400px;">
        <embed src="regulations/Seguidor de Linea Enhanced - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
      </div>
    </div>
    `,
    "content-turbo":`
    <div class="modal-content">
      <div class="flex items-center space-x-4"> <!-- div with 2 elements -->
      <img src="images/turbo.jpg" alt="Linefollower Turbo" class="rounded-xl shadow-lg w-[250px] h-auto">
      <! -- text 2 the right -->
      <div>
      <p class="text-justify mb-4 text-lg"> 
      <b>Linefollower Turbo</b> is the new challenge of the <b>Inkachallenge IV</b>, presented for the first time
      in Peru. It is an autonomous mobile robot, designed to follow a continuous route drawn by
      a black line without intersections, in the shortest possible time. <br><br>
      This variant of the line followers introduces as its main challenge a <b>vertical loop with a diameter of 1.50 metres</b>,
       where the line of the circuit continues along the entire structure, demanding precision
      and a high level of control in the movement of the robot.
            </div>
      </div>
          
      <div class="flex justify-between items-start mt-8">
      <!-- Text -->
      <div class="flex-1">
      <p class="text-justify mb-2 text-lg font-semibold">Additional information:</p>
      <ul class="list-disc pl-6 text-base space-y-1">
      <li>The loop is located on one of the straight lines of the course. </li>
      <li>The loop line is 19mm wide as well as the other lines.</li>
      <li>The loop has a maximum total width of 40cm.</li>
      </ul>
      </div>

        <div class="flex flex-col items-center md:items-start">
      <img src="images/loop.png" alt="Loop" class="rounded-xl shadow-lg w-[270px] h-auto self-center">
      <p class="text-sm text-gray-600 italic mt-2">Representation of the loop.</p>
      </div>
      </div>

          <p class="mt-4 mb-4 text-lg">Official IV InkaChallege Coneimera Edition Regulations for the challenge<b> Linefollower Turbo</b>:</p>
      <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/Seguidor de Linea Turbo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
      </div>
      </div> </div>
    `,
    "content-robotracer":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
    <img src="images/robotracer.png" alt="Robotracer" class="rounded-xl shadow-lg w-[270px] h-auto">
    <! -- text 2 the right -->
    <div>
    <p class="text-justify mb-4 text-lg">RobotRacer, is a robotics competition challenge originating from Japan. <br>
    Robots in this challenge must complete the circuit in the shortest possible time, which includes curves
    and intersections.<br> At each curve there are 2 markers, one at the start and one
    at the end, each 4cm from the edge of the line.
          </div>
    </div>
    <div class="flex justify-between items-start mt-8">
    <!-- Text -->
    <div class="flex-1">
    <p class="text-justify mb-2 text-lg font-semibold">Additional information:</p>
    <ul class="list-disc pl-6 text-base space-y-1">
    <li>The curvatures include markers as shown in the image. </li>
    <li>The robot must include a buzzer.</li>
    <li>The robot must sound the buzzer at the start, at the end, and at each bend when it recognises the markers, 
    but not when it is at a junction.</li>
    <li>The start and finish area is delimited by two markers 100cm apart.</li>
              
            </ul>
    </div>
        
          <div class="flex flex-col items-center md:items-start">
    <img src="images/robotracer-rules-en.png" alt="Loop" class="rounded-xl shadow-lg w-[270px] h-auto self-center">
    <p class="text-sm text-gray-600 italic mt-2">Representation of markers on the course.</p>
    </div>
    </div> </div>

        <p class="mt-4 mb-4 text-lg">Official Rules IV InkaChallege Coneimera Edition for the challenge<b> Nat-car/Robotracer Line Follower</b>:</p>

          <div class="mt-6" style="max-height: 400px;">
    <embed src="regulations/Seguidor de Linea NatCar - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
    `,
    "content-miniauto":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
    <img src="images/minisumo.jpg" alt="Minisumo" class="rounded-xl shadow-lg w-[320px] h-auto">
    <div>
    <p class="text-justify mb-4 text-lg">Autonomous minisumo is a category originating in Japan, 
    inspired by traditional sumo. <br> These robots work without remote control, using sensors
    and evasion strategies to detect their opponent and to avoid leaving the dojo.Their main objective:
    to push the opponent out of the dojo completely autonomously, in 3-round matches.<br><br>
    The maximum allowed weigh for these robots is 500g, and they must be able to fit in a square of 10cm on a side.</p>
                
    </div>
    </div>
    <p class="mt-4 mb-2 text-lg font-semibold">📶 Competition levels: </p>
    <ul class="list-disc pl-6 text-lg space-y-1">
    <li>Beginner</li>
    <li>Senior</li>
    <li>Master</li>
    <p class="mt-8 mb-4 text-lg">Official Rules IV InkaChallege Coneimera Edition for the category <b>Autonomous Minisumo</b>:</p>

          <div class="mt-6" style="max-height: 400px;">
    <embed src="regulations/MiniSumo Autónomo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
    </div>
    `,
    "content-minirc":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
    <img src="images/minirc.jpg" alt="Minisumo RC" class="rounded-xl shadow-lg w-[290px] h-auto">
    <div>
    <p class="text-justify mb-4 text-lg">Minisumo RC is a competition category in which robots, 
    controlled wirelessly, must detect and push their opponent out of the dojo. Unlike 
    the autonomous Minisumo, the robot is operated by a pilot, who must use his or her skill to control 
    the movement in real time, and cannot make use of sensors or pre-programmed routines, ensuring
    that the pilot's skill is the deciding factor in the fight. <br>
    These robots can weigh a maximum of 500g, and must be able to fit in a square 10cm on a side.
              </p>
    </div>
    </div>
    <p class="mt-4 mb-2 text-lg font-semibold">📶 Participation levels: </p>
    <ul class="list-disc pl-6 text-lg space-y-1">
    <li>Amateur</li>
    <li>Senior</li>
    <li>Master</li>
    <p class="mt-4 mb-4 text-lg">Official Rules IV InkaChallege Coneimera Edition for the category<b> Bluetooth/RC Minisumo</b>:</p>

        <div class="mt-6" style="max-height: 400px;">
    <embed src="regulations/MiniSumo Bluetooth-RC - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
    </div>
    `,
    "content-microsumo":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
    <img src="images/microsumo.png" alt="Microsumo" class="rounded-xl shadow-lg w-[280px] h-auto">
    <! -- text 2 the right -->
    <div>
    <p class="text-justify mb-4 text-lg">This is a competition category in which 
    small robots must detect and push their opponent out of the 
    dojo in a fully autonomous manner. 
              These robots use sensors to locate the opponent, and their compact design allows them 
    to make quick and precise movements.<br>
    They can have a maximum weight of 100g and can fit in a square of 5cm on a side.</p>
    </div>
    </div>

        <p class="mt-4 mb-4 text-lg">Official Rules IV InkaChallege Coneimera Edition for the <b>Microsumo</b> challenge</b>:</p> <p


        <div class="mt-6" style="max-height: 400px;">
    <embed src="regulations/MicroSumo Autónomo - Reglamento Oficial IV InkaChallege Edición Coneimera" width="100%" height="500px" type="application/pdf">
    </div>
    </div>
    `,
    "content-micromouse":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
    <img src="images/micromouse.jpg" alt="Micromouse" class="rounded-xl shadow-lg w-[320px] h-auto">
    <!-- text 2 the right -->
    <div>
    <p class="text-justify mb-4 text-lg">Micromouse, also known as Maze, is the oldest category 
    in autonomous robotics competitions. In it, the robot must explore and find the 
    fastest way to the centre of a maze, without external help.<br> In InkaChallenge, the maze
    is made up of cells up to 20 cm on a side, and the goal is a 4-cell square without internal walls,
    with a single entrance. </p>
    </div>
    </div>

        <p class="mt-4 mb-4 text-lg">Official Rules IV InkaChallege Coneimera Edition for the <b>Micromouse</b> challenge:</p>

          <div class="mt-6" style="max-height: 400px;">
    <embed src="regulations/Robot MicroMouse - Reglamento Oficial IV InkaChallege Edición Coneimera" width="100%" height="500px" type="application/pdf">
    </div>
    </div>
    `,
    "content-kungfu":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
    <img src="images/kung-fu.jpg" alt="Robot Kung Fu" class="rounded-xl shadow-lg w-[320px] h-auto">
    <! -- text 2 the right -->
    <div>
    <p class="text-justify mb-4 text-lg"></p>Robot Kung Fu is a skill competition where humanoid robots face off in non-destructive combat, simulating human movements using upper and lower limbs. <br>
    In InkaChallenge, there are two levels: Otto (validated in the Senior League) and Humanoid (validated in the Master League).

    </div>
          </div>

              <p class="mt-4 mb-4 text-lg">For more information, check the Official IV InkaChallege Coneimera Edition regulations for the<b>Kung Fu Robot</b> challenge:</p>


              <div class="mt-6" style="max-height: 400px;">
          <embed src="regulations/Robot Kung-Fu - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
          </div>
        </div>
    `,
    "content-combate":`
      <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/combat.jpg" alt="Robot de combate" class="rounded-xl shadow-lg w-[320px] h-auto">
            <!-- text 2 the right -->
            <div>
              <p class="text-justify mb-4 text-lg">A Combat Robot is a wirelessly controlled mobile robot designed to engage in close combat against a similar opponent. The objective is to cause maximum damage and immobilize the opponent for more than ten seconds, using mechanical, pneumatic, or hydraulic weapons. In addition, the robot's aggressiveness and overall performance during the fight are evaluated.</p>
              
            </div>
          </div>
          <p class="mt-4 mb-2 text-lg font-semibold">💥 Levels and types of combate:</p>
                  <ul class="list-disc pl-6 text-lg space-y-1">
                    <li><b>Beginner:</b> Includes 3D Combat, where the robots are made using 3D printing methods.</li>
                    <li><b>Senior:</b> Includes 1 lb and 3 lb combat, there is also more freedom about what componentes to choose for the design.</li>

    <p class="mt-12 mb-4 text-lg">Learn more in the Official IV InkaChallege Coneimera Edition Rules for the <b>Combat Robot</b> challenge:</p>

    <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/Combate de Robots - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
  </div>
    `,
    "content-walking":`
     <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/walking.png" alt="Walking-Race" class="rounded-xl shadow-lg w-[320px] h-auto">
      <!-- text 2 the right -->
      <div>
        <p class="text-justify mb-4 text-lg">
        Robot Walking Race is a competition where bipedal robots must travel a straight distance in the shortest possible time, 
        using only their legs and without additional support. The movement must be performed exclusively by their limbs, without any other mechanism. <br> <br>
        There are two levels: Otto (for the Senior level) and Humanoid (for the Master level), depending on the pilot's educational level and the type of robot used.</p>
      </div>
    </div>

    <p class="mt-4 mb-4 text-lg">Official IV InkaChallege Coneimera Edition Rules for <b> Walking-Race</b> challenge:</p>


    <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/Robot Walking-Race - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
    </div>
    `,

    "content-soccer":`
    <div class="modal-content">
    <div class="flex items-start space-x-4"> <!-- div with 2 elements -->
      <img src="images/soccer.png" alt="Robot soccer" class="rounded-xl shadow-lg w-[240px] h-auto">
      <!-- text 2 the right -->
      <div>
        <p class="text-justify mb-4 text-lg">Bluetooth/RC Robot Soccer is a competition where mobile robots are capable
         of playing a soccer game in three-on-three teams, controlled by their pilots via wireless communication. <br>
        The key to this category lies in the pilot's skill, as the robots do not require sensors or preprogrammed routines to move.
         All control must be manual and in real time, making each match a mix of strategy, reflexes, and coordination.
      </div>
    </div>
    <div class="flex justify-between items-start mt-8">
      <!-- Texto -->
      <div class="flex-1">
        <p class="text-justify mb-2 text-lg font-semibold">Additional information:</p>
        <ul class="list-disc pl-6 text-base space-y-1">
          <li>The soccer field is laid out as shown in the image.</li>
          <li>Each team starts with the robots inside the goal area.</li>
          <li>Each match has two 2-minute halves.</li>
          <li>Participation levels are amateur and senior.</li>
          
        </ul>
      </div>
    
      <div class="flex flex-col items-center md:items-start">
        <img src="images/soccer-field.png" alt="Bucle" class="rounded-xl shadow-lg w-[270px] h-auto self-center">
        <p class="text-sm text-gray-600 italic mt-2">Soccer filed meassurements.</p>
      </div>
    </div>

    <p class="mt-4 mb-4 text-lg">Official IV InkaChallege Coneimera Edition Rules for the <b> Robot soccer</b> challenge:</p>


    <div class="mt-6" style="max-height: 400px;">
      <embed src="regulations/Robot Soccer - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" width="100%" height="500px" type="application/pdf">
    </div>
  </div>
    `,
    //contact us
    "contact-title":"Do you have any questions?",
    "contact-desc":"Don't hesitate to email us with any questions or concerns.",
    "contact-redes":"You can also follow our social media channels for more news about InkaChallenge IV - CONEIMERA Edition. See you in Trujillo!",
          //invitations
    "invite-title":"📑 Request invitations",
    "invite-desc":`If your team needs invitations, you can send the following information to the e-mail <a href="mailto:robotronicsunt@gmail.com" class="text-blue-400 underline hover:text-blue-200">
    robotronicsunt@gmail.com :`,
    "invite-list":`
      <li>Institution name</li>
      <li>Team name</li>
      <li>Team leader name</li>
      <li>Team members names</li>
    `,
    "invite-numbers":"You can also contact us via WhatsApp at the following phone numbers:",


  }
};
// Función para cambiar el idioma
function changeLanguage(lang) {
  const langContent = translations[lang];
  for (const key in langContent) {
    const element = document.getElementById(key);
    if (element && key.startsWith('logo')) {
      element.src = langContent[key];  // Para imágenes
    } else if (element) {
      element.innerHTML = langContent[key];  // Para textos
    }
  }

  // Cambiar iconos de idioma si existen
  const esBtn = document.getElementById("btn-es");
  const enBtn = document.getElementById("btn-en");
  if (esBtn && enBtn) {
    esBtn.src = (lang === "es") ? "images/icons/es-on.png" : "images/icons/es-off.png";
    enBtn.src = (lang === "en") ? "images/icons/en-on.png" : "images/icons/en-off.png";
  }

  // Guardar preferencia
  localStorage.setItem("preferredLanguage", lang);
}

function openModalFromKey(buttonId, contentId) {
  const modalContent = document.getElementById(contentId);  
  const buttonText = document.getElementById(buttonId)?.innerText || "Información";

  if (modalContent) {
    const modalWrapper = document.getElementById("modal");
    const modalBody = document.getElementById("modalContent");
    const modalTitle = document.getElementById("modalTitle");

    modalTitle.innerText = buttonText;
    modalBody.innerHTML = modalContent.innerHTML;
    modalWrapper.classList.remove("hidden");
    modalBody.scrollTop = 0;
    
  }
}


function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  modal.classList.add("hidden");

  // Forzar el scroll del modal hacia arriba
  setTimeout(() => {
    modal.scrollIntoView({ behavior: "smooth" }); // Hace que el modal suba suavemente
  }, 100);
}


// Cerrar al hacer clic fuera
modal.addEventListener("click", function (e) {
  console.log("clicked:", e.target);
  if (!e.target.closest(".modal-content")) {
    closeModal();
  }
});

// Cerrar al hacer clic en los botones con clase "close-modal"
const closeButtons = document.querySelectorAll(".close-modal");
closeButtons.forEach(button => {
  button.addEventListener("click", function () {
    closeModal();
  });
});

// Cerrar con Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
