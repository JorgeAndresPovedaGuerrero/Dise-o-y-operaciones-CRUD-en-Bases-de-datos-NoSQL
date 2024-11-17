// Crear la base de datos
use torneo_futbol;

// Crear las colecciones
db.createCollection("equipos");
db.createCollection("deportistas");
db.createCollection("arbitros");
db.createCollection("encuentros");
db.createCollection("tablaPosiciones");


//====== CRUD EQUIPOS ======
// Crear un equipo

db.equipos.insertOne({
  "_id": "EQUIPO001",
  "nombre": "Los Tigres",
  "colores": {
    "principal": "Amarillo",
    "alternativo": "Negro"
  },
  "entrenador": {
    "nombre": "Carlos Gómez",
    "asistentes": ["Luis Martínez", "Jorge Rojas"]
  },
  "jugadores": []
});

// Buscar todos los equipos
db.equipos.find();

//Actualizar un equipo:
db.equipos.updateOne(
  { "_id": "EQUIPO001" },
  { $set: { "colores.principal": "Azul", "colores.alternativo": "Blanco" } }
);

//Eliminar un equipo
db.equipos.deleteOne({ "_id": "EQUIPO001" });


//====== CRUD DEPORTISTAS ======
// Crear un deportistas
db.deportistas.insertOne({
  "_id": "JUG001",
  "nombre": "Pedro Ramírez",
  "numeroCamiseta": 10,
  "posicion": "Delantero",
  "estado": "Activo",
  "fechaNacimiento": "1995-06-20",
  "nacionalidad": "Colombiano",
  "equipoId": "EQUIPO001"
});

//buscar todos los deportistas
db.deportistas.find();

//Actualizar un deportistas
db.deportistas.updateOne(
  { "_id": "JUG001" },
  { $set: { "estado": "Lesionado" } }
);

//Eliminar un deportista
db.deportistas.deleteOne({ "_id": "JUG001" });

//====== CRUD ARBITROS ======
//Crear un arbitro
db.arbitros.insertOne({
  "_id": "ARB001",
  "nombre": "Luis Suárez",
  "categoria": "Principal",
  "licencia": "LIC12345",
  "aniosExperiencia": 10,
  "nacionalidad": "Colombiano"
});

//leer todos los arbitros
db.arbitros.find();

//Actualizar un arbitro
db.arbitros.updateOne(
  { "_id": "ARB001" },
  { $set: { "categoria": "Asistente" } }
);

//eliminar un arbitro
db.arbitros.deleteOne({ "_id": "ARB001" });


//====== CRUD ENCUENTROS ======
//Crear un encuentro:
db.encuentros.insertOne({
  "_id": "ENC001",
  "fecha": "2024-11-20T15:00:00",
  "estadio": "Estadio El Campín",
  "equipoLocal": "EQUIPO001",
  "equipoVisitante": "EQUIPO002",
  "arbitros": ["ARB001", "ARB002", "ARB003"],
  "eventos": {
    "goles": [],
    "tarjetas": [],
    "sustituciones": []
  },
  "resultado": {
    "local": 0,
    "visitante": 0
  }
});

//leer todos los encuentros
db.encuentros.find();

//actualizar un encuentro

db.encuentros.updateOne(
  { "_id": "ENC001" },
  { $set: { "resultado.local": 2, "resultado.visitante": 1 } }
);

//Eliminar un encuentro:
db.encuentros.deleteOne({ "_id": "ENC001" });

//====== CRUD TABLA DE POSICIONES ======
//Crear un registro de la tabla de POSICIONES
db.tablaPosiciones.insertOne({
  "_id": "EQUIPO001",
  "nombre": "Los Tigres",
  "puntos": 3,
  "partidosJugados": 1,
  "partidosGanados": 1,
  "partidosEmpatados": 0,
  "partidosPerdidos": 0,
  "golesAFavor": 3,
  "golesEnContra": 2,
  "diferenciaGoles": 1
});

//leer los registros de tablaPosiciones
db.tablaPosiciones.find();

//Actualizar los puntos de un equipo
db.tablaPosiciones.updateOne(
  { "_id": "EQUIPO001" },
  { $inc: { "puntos": 1, "partidosEmpatados": 1 } }
);

//eliminar un registro de tablaPosiciones
db.tablaPosiciones.deleteOne({ "_id": "EQUIPO001" });
