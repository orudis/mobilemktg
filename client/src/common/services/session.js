angular.module('common.services.session', []);

angular.module('app').requires.push('common.services.session');

angular.module('common.services.session')
.service('Session', function () {
  this.create = function (sessionId, userId, userRole,periodo,centroId,ensenanzaId,areaId,materiaId,curso,grupo,navegacion) {
    this.id = sessionId;
    this.user = userId;
    this.rol = userRole;
	this.periodo=periodo
	this.centro = centroId;
	this.ensenanza=ensenanzaId;
	this.area = areaId;
	this.materia=materiaId; //para sustituir areaId
	this.curso = curso;
	this.grupo=grupo;
	this.evaluacion=null;
	this.uf=null;
	this.navegacion=navegacion;
	console.log("session:"+angular.toJson(this));
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
	this.periodo=null;
	this.centroId = null;
	this.ensenanza=null;
	this.areaId = null;
	this.materiaId=null;
	this.curso = null;
	this.grupo = null;
	this.evaluacion=null;
	this.uf=null;
	this.navegacion=null;
  };
  return this;
})

