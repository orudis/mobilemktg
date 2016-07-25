angular.module('common.services.translate', []);
 
angular.module('app').requires.push('common.services.translate');
 
angular.module('common.services.translate')
.service('sTranslate', function ($rootScope,toaster) {
       this.translations=[
                      {
                                  language:'es_ES',
                                  texts:{
                                        EDIT_CAMPAIGN: "Editar campaña",
                                        ADD_CAMPAIGN:"Añadir campaña",
                                        EDIT_QR:"Editar codigo QR",
                                        EDIT_WEB:"Editar web movil",
                                        DELETE_CAMPAIGN:"Eliminar campaña",
                                        ALUMNO_A:"Alumno/a",
                                        ALUMNOS_PLANTILLA:"Alumnos Plantilla",
                                        ANADIR_ESTANDARES:"Añadir Estándares",
                                        APROBADOS:"Aprobados",
                                        AREA_MATERIA:"Área/Materia",
                                        ASIGNAR_PLANTILLAS:"Asignar Plantillas",
                                        AYUDA:"Ayuda",
                                        BASICO:"Básico",
                                        BUSCAR:"Buscar",
                                        BLOQUE:"Bloque"
                     }
                    }
             ]
            
             this.setLanguage=function(language){
                    this.language=language;
                    this.texts=_.where(this.translations,{language:this.language})[0].texts;
             }
            
             this.getTexts=function(){
                    return this.texts;
             }
      
})

