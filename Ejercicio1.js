
class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;

    this.services.forEach((service, index) => {

      let multimediaContent = service.getMultimediaContent();

      if (typeof service == StreamingService) {
        total += multimediaContent.streamingPrice;
      } else if (typeof service == DownloadService) {
        total += multimediaContent.downloadPrice;
      }

      if (typeof multimediaContent == PremiumContent) {
        total += multimediaContent.additionalFee;
      }
    });

    return total;
  }
}

// 1. Que problemas detectas en la operación y razona la respuesta

      // Demasiadas responsabilidades:
          // La clase RegisteredUser hace demasiado: maneja servicios y calcula totales. Cada clase debería hacer solo una cosa.
      // Dificultad para añadir nuevos servicios:
          // Cada vez que se añade un nuevo tipo de servicio, hay que modificar el método getTotal.
     // Comprobaciones:
           // Usar typeof para verificar tipos es una mala práctica. En su lugar, deberíamos utilizar polimorfismo y que cada servicio tenga su propia lógica de cálculo de precio.
    // Alta dependencia de clases específicas:
          // RegisteredUser depende directamente de clases concretas (StreamingService, DownloadService).


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
