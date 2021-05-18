<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Estructura gráfica del plan
      
    .col-11.row.justify-content-around.align-items-center.m-5 

      .col-md-6
        figure
          img(src='@/assets/tema2/img-2.png', alt='Objetivos')       
      .col-md-6
        .h4 #[strong Ejemplo plan de comunicación] 
        p Estrategia de comunicación llevada a cabo por Kellog’s para vender los Special K (caso real).
        br
        p Mercado objetivo: mujeres habitantes de la zona urbana de principales ciudades, con edades entre los 25 y los 45 años, estudios técnicos y profesionales, ingresos promedio de tres salarios mínimos, ejecutivas de profesiones relacionadas con áreas administrativas y comerciales. Viven solas, con amigos o en pareja, son mujeres que cuidan su figura, se ejercitan con frecuencia, practican deporte o alguna actividad física, sociables, les gustan la buena comida sin excederse, piensan en el futuro, viajar, conformar una familia, ser independientes económicamente. 

    .col-11.row.justify-content-around.align-items-center.m-5
      .tabla-a.color-acento-contenido.mb-5
        table
          caption Tomado de Cómo elaborar un plan de comunicación, Manuales prácticos para Pymes, España (2010).

          thead
            tr
              th Objetivo
              th Estrategias
              th Estrategia de medios
              th Actividades
              th Recursos
              th Responsables
              th Indicadores
          tbody
            tr
              td(rowspan='7')
                | Consolidar el posicionamiento del 60 % de SK como aliado de la mujer en el cuidado de la l&iacute;nea durante todo el a&ntilde;o.
              td(rowspan='7')
                | Presentar el Plan SK 15 d&iacute;as como la forma m&aacute;s sencilla de recuperar la figura tras los excesos navide&ntilde;os. Para comunicar este mensaje se puso en marcha una estrategia creativa basada en la ruptura con los c&oacute;digos tradicionalmente utilizados en la categor&iacute;a de cereales.
              td(rowspan='7')
                | La estrategia de medios consisti&oacute; en utilizar diversos soportes: televisi&oacute;n, revistas, exterior y web. Sobre todo, se utiliz&oacute; la televisi&oacute;n, por su gran cobertura, en la que se insertaron varias piezas de anuncios muy notorios, como la chica SK luchando contra una representaci&oacute;n de un polvor&oacute;n gigante u otras piezas.
              td Seleccionar los c&oacute;digos tradicionales.
              td
                | T&eacute;cnicos: hojas y l&aacute;piz.
                br
                | Tecnol&oacute;gicos: pc, internet.
                br
                | Humanos: investigador antrop&oacute;logo, especialista en marketing.
                br
                | Econ&oacute;micos: $5&rsquo;000.000.
              td(rowspan='7') Director creativo.
              td(rowspan='7') El posicionamiento de SK est&aacute; al final del a&ntilde;o en el 60 %.
            tr
              td Desarrollo del concepto y el mensaje.
              td
                | T&eacute;cnicos: hojas y l&aacute;piz, resultados de la investigaci&oacute;n.
                br
                | Tecnol&oacute;gicos: pc, internet.
                br
                | Humanos: antrop&oacute;logo, planner, director creativo.
                br
                | Econ&oacute;micos: $7&rsquo;000.000.
            tr
              td Producci&oacute;n de las piezas.
              td
                | T&eacute;cnicos: hojas, l&aacute;piz, resultados de la investigaci&oacute;n, concepto creativo.
                br
                | Tecnol&oacute;gicos: pc, internet, software de dise&ntilde;o, estudio de fotograf&iacute;a, estudio de video.
                br
                | Humanos: creativos, dise&ntilde;adores, director de arte, productor, fot&oacute;grafo.
                br
                | Econ&oacute;micos: $80&rsquo;000.000.
            tr
              td Programaci&oacute;n de los medios y lanzamiento de la campa&ntilde;a.
              td
                | T&eacute;cnicos: hojas y l&aacute;piz, resultados de la investigaci&oacute;n.
                br
                | Tecnol&oacute;gicos: pc, internet.
                br
                | Humanos: planner, director creativo, ejecutivo de medios.
                br
                | Econ&oacute;micos: $6&rsquo;000.000.
            tr
              td Actividad 2
              td Recursos
            tr
              td Actividad 3
              td Recursos
            tr
              td Actividad 4
              td Recursos
          










          
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
