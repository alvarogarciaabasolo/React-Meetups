
// class RegisteredUser {
//   constructor(services = []) {
//     this.services = services;
//   }

//   getTotal() {
//     let total = 0;

//     this.services.forEach((service, index) => {

//       let multimediaContent = service.getMultimediaContent();

//       if (typeof service == StreamingService) {
//         total += multimediaContent.streamingPrice;
//       } else if (typeof service == DownloadService) {
//         total += multimediaContent.downloadPrice;
//       }

//       if (typeof multimediaContent == PremiumContent) {
//         total += multimediaContent.additionalFee;
//       }
//     });

//     return total;
//   }
// }

// 1. Que problemas detectas en la operación y razona la respuesta

// Problemas Detectados en el Pseudocódigo Original

    // Demasiadas responsabilidades:
          // Problema: La clase RegisteredUser no solo maneja la lista de servicios sino también el cálculo del total de los precios, lo que viola el principio de responsabilidad única (SRP).
          // Solucion: Cada clase debería tener una única responsabilidad. Esto facilita su mantenimiento y la hace más fácil de entender y modificar.

    // Dificultad para añadir nuevos servicios:
          // Problema: El método getTotal debe ser modificado cada vez que se añade un nuevo tipo de servicio, violando el principio abierto/cerrado (OCP).
          // Solucion: Las clases deben estar abiertas para la extensión pero cerradas para la modificación. Es decir, deberíamos poder añadir nueva funcionalidad sin modificar el código existente.

    // Comprobaciones de tipo:
          // Problema: Usar typeof para verificar el tipo de servicio es una mala práctica.
          // Solucion: El polimorfismo permite que las subclases implementen sus propias versiones del método getPrice, eliminando la necesidad de verificar tipos explícitamente.

    // Alta dependencia de clases específicas:
          // Problema: RegisteredUser depende directamente de clases concretas (StreamingService, DownloadService), lo cual dificulta la flexibilidad y la capacidad de prueba de la clase.
          // Solucion: Según el principio de inversión de dependencias (DIP), las clases deben depender de abstracciones, no de concretas.


// 2.  Propón una solución alternativa (también en pseudocódigo del mismo estilo) que corrija los problemas de la
//     operación getTotal de RegisteredUser que has detectado en la pregunta anterior. Realiza todos los cambios que consideres necesarios
//     en cualquiera de las clases del modelo del enunciado.

// Clase base para servicios
class Service {
  constructor(price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

// Clase para servicios de streaming
class StreamingService extends Service {}

// Clase para servicios de descarga
class DownloadService extends Service {}

// Clase para usuarios registrados
class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;

    this.services.forEach((service) => {
      total += service.getPrice();
    });

    return total;
  }
}

// Ejemplo de uso
const streamingService = new StreamingService(10);
const downloadService = new DownloadService(20);

const services = [streamingService, downloadService];

const user = new RegisteredUser(services);
console.log(user.getTotal()); 

// Principios SOLID Aplicados

// 1. Single Responsibility Principle (SRP):

// Cada clase tiene una responsabilidad específica y única.
// Service es una clase base que maneja los precios. StreamingService y DownloadService son clases específicas para tipos de servicios, 
// y RegisteredUser maneja la lista de servicios y calcula el total.

// 2. Open/Closed Principle (OCP):

// Este principio asegura que las clases estén abiertas a la extensión pero cerradas a la modificación. En nuestro caso, 
// podemos añadir nuevos tipos de servicios sin cambiar el código de RegisteredUser

// 3. Liskov Substitution Principle (LSP):

// Este principio asegura que las subclases puedan reemplazar a la clase base sin afectar el comportamiento correcto del programa. 
// Aquí, cualquier instancia de StreamingService o DownloadService puede ser usada en RegisteredUser porque ambas extienden Service

// 4. Interface Segregation Principle (ISP):

// Aunque en este ejemplo no hemos introducido interfaces explícitas, cada clase implementa solo los métodos necesarios para su funcionalidad específica.

// 5. Dependency Inversion Principle (DIP):

// RegisteredUser depende de la abstracción Service y no de clases concretas.
// Este principio asegura que las clases de alto nivel no dependan de clases de bajo nivel, sino de abstracciones. RegisteredUser maneja una lista de Service,
//  lo que permite flexibilidad y facilidad para añadir nuevos tipos de servicios.
