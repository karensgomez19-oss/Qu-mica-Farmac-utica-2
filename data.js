const malla = {
  "Nivel 1": [
    { id:"4007600", nombre:"Matemáticas Básica", pr:[], co:[] },
    { id:"4008610", nombre:"Química General Básica", pr:[], co:[] },
    { id:"4008601", nombre:"Lab. Química General Básica", pr:[], co:["4008610"] },
    { id:"4012400", nombre:"Seguridad y Salud en el Trabajo", pr:[], co:[] },
    { id:"4010507", nombre:"Técnicas de la Comunicación", pr:[], co:[] },
    { id:"4012402", nombre:"Desarrollo Humano", pr:[], co:[] },
    { id:"4012404", nombre:"Introducción a la Farmacia", pr:[], co:[] },
    { id:"9040101", nombre:"English 1", pr:[], co:[] }
  ],

  "Nivel 2": [
    { id:"4008611", nombre:"Química Orgánica Básica", pr:["4008610","4008601"], co:[] },
    { id:"4008603", nombre:"Lab. Química Orgánica Básica", pr:["4008601"], co:["4008611"] },
    { id:"4007605", nombre:"Bioestadística Básica", pr:["4007600"], co:[] },
    { id:"4008612", nombre:"Química Analítica Básica", pr:["4008610","4008601"], co:[] },
    { id:"4008605", nombre:"Lab. Química Analítica Básica", pr:[], co:["4008612"] },
    { id:"4012401", nombre:"Seminario Matemáticas", pr:["4007600"], co:[] },
    { id:"4012406", nombre:"Salud Pública", pr:["4012400"], co:[] },
    { id:"4012403", nombre:"Metodología Inv. Cualitativa", pr:["4007605"], co:["4007605"] },
    { id:"9040102", nombre:"English 2", pr:["9040101"], co:[] }
  ],

  "Nivel 3": [
    { id:"4009339", nombre:"Formación Ciudadana", pr:[], co:[] },
    { id:"400
