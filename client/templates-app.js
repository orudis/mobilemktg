angular.module('templates.app', ['app/layout/footer/footer.tpl.html', 'app/layout/header/header.tpl.html', 'app/layout/leftnav/leftnav.tpl.html', 'app/layout/navbar/navbar.tpl.html', 'app/layout/shell/shell.tpl.html', 'app/layout/topnav/topnav.tpl.html', 'app/partials/campaigns/campaigns.tpl.html', 'app/partials/edit_campaign/edit_campaign.tpl.html', 'app/partials/editweb/editweb.tpl.html', 'app/partials/home/home.tpl.html', 'app/partials/login/login.tpl.html', 'app/partials/new_campaign/new_campaign.tpl.html', 'app/partials/qr/qr.tpl.html', 'app/partials/statistics/statistics.tpl.html', 'app/partials/users/users.tpl.html']);

angular.module("app/layout/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/layout/footer/footer.tpl.html",
    "<div  class=\"row\" >\n" +
    "		<div class=\"col-xs-12\">\n" +
    "			<div class=\"panel panel-default\">\n" +
    "				<div class=\"panel-body\">\n" +
    "					 <div class=\"row\"  >\n" +
    "						<div  id=\"pieDatos\" class=\"col-md-10 \">\n" +
    "								{{copyR}}\n" +
    "						</div>\n" +
    "						<div id=\"pieEnlaces\" class=\"col-md-2 \">		\n" +
    "							<a href=\"\" title=\"Accesibilidad\">\n" +
    "								Accesibilidad\n" +
    "							</a>				|\n" +
    "							<a href=\"\" title=\"Aviso Legal\">\n" +
    "									Aviso Legal\n" +
    "							</a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				 </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "</div> \n" +
    "\n" +
    "\n" +
    "    \n" +
    "		");
}]);

angular.module("app/layout/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/layout/header/header.tpl.html",
    "<div  class=\"row\" >\n" +
    "	 <div class=\"col-xs-12\"  >\n" +
    "			<div class=\"panel panel-default\" style=\"background-color:#9E1B32;height:75px\">\n" +
    "				<!-- <div class=\"panel-body\"> -->\n" +
    "					<div id=\"cabecera\" class=\"row\" >\n" +
    "					    <div id=\"cabeceraImgEscudo\" class=\"col-md-2\">\n" +
    "							<img id=\"cabeceraEscudo\" src=\"\" alt=\"CARM.es\" title=\"CARM.es\">\n" +
    "						</div>\n" +
    "						<div class=\"col-md-4 col-md-offset-6 centered\">\n" +
    "							<h4 style=\"text-align:center;color:white\">{{nameC}}</h4>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				<!-- </div> -->\n" +
    "			</div>\n" +
    "	</div> \n" +
    "	\n" +
    "</div>");
}]);

angular.module("app/layout/leftnav/leftnav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/layout/leftnav/leftnav.tpl.html",
    "<section id=\"left-navigation\">\n" +
    "<!--Left navigation user details start-->\n" +
    "\n" +
    "	<!--Phone Navigation Menu icon start-->\n" +
    "	<div class=\"phone-nav-box visible-xs\">\n" +
    "		<!--\n" +
    "		<a class=\"phone-logo\" href=\"index.html\" title=\"\">\n" +
    "			<h1>@Nota</h1>\n" +
    "		</a>\n" +
    "		-->\n" +
    "		<a class=\"phone-nav-control\" href=\"javascript:void(0)\">\n" +
    "			<span class=\"fa fa-bars\"></span>\n" +
    "		</a>\n" +
    "		<div class=\"clearfix\"></div>\n" +
    "	</div>\n" +
    "	<!--Phone Navigation Menu icon start-->\n" +
    "\n" +
    "	<!--Left navigation start-->\n" +
    "	<ul ng-show=\"autorizaciones\"  class=\"mainNav\"  >\n" +
    "		<li  ng-repeat=\"item in appConfig.menuLeft\" ng-class=\"{'active':$first}\">\n" +
    "			<a  ng-class=\"{'active':$first}\" href=\"#{{item.url}}\">\n" +
    "				<i class=\"fa fa-2x fa-{{item.icono}}\"></i>   <span>{{item.nombre}}</span>\n" +
    "			</a>\n" +
    "			<ul ng-if=\"item.submenu.length>0\">\n" +
    "				<li ng-repeat=\"subitem in item.submenu\"><a href=\"\" ng-click=\"onClickNavigation(subitem)\" ><i class=\"fa fa-{{subitem.icono}}\" ng-class=\"{'item-disabled':disabledItem(subitem)}\"></i><span ng-class=\"{'item-disabled':disabledItem(subitem)}\">{{subitem.nombre}}</span></a></li>\n" +
    "			</ul>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	\n" +
    "	<!--     -->\n" +
    "	<div  ng-show=\"false\"  class=\"button-save\"  ng-repeat=\"item in appConfig.menuLeft2\" >\n" +
    "		<a href=\"javascript:void(0)\"  ng-click=\"onClickNavigation(item)\"  class=\"btn \" >\n" +
    "			<i class=\"fa  fa-{{item.icono}}\"></i>\n" +
    "		</a>\n" +
    "	</div>\n" +
    "	<!--   --->\n" +
    "	\n" +
    "	\n" +
    "	<div class=\"button-save\" >\n" +
    "		<a href=\"\" ng-click=\"updateData()\" class=\"btn\" ng-class=\"{'btn-warning':formDirty}\">\n" +
    "			<div style=\"width:20px;height:20px\">\n" +
    "				<span><i class=\"fa fa-save\" ></i></span>\n" +
    "			</div>\n" +
    "		</a>\n" +
    "	</div>\n" +
    "	\n" +
    "\n" +
    "	<!--Left navigation end-->\n" +
    "</section>	\n" +
    "");
}]);

angular.module("app/layout/navbar/navbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/layout/navbar/navbar.tpl.html",
    "<!--<div ng-show=\"!(adding || editing)\" class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary btn-circle btn-lg\"  ng-click=\"onAction('home')\" ><i tooltip=\"Campañas\" class=\"fa fa-home\"></i></button>\n" +
    "        <button type=\"button\" class=\"btn btn-primary btn-circle btn-lg\"  ng-click=\"onAction('users')\" ><i tooltip=\"Usuarios\" class=\"fa fa-users\"></i></button>\n" +
    "        <button type=\"button\" class=\"btn btn-primary btn-circle btn-lg\" ng-click=\"onAction('page')\"><i class=\"fa fa-copy\"></i></button>\n" +
    "        <button type=\"button\" class=\"btn btn-success btn-circle btn-lg\"><i class=\"glyphicon glyphicon-link\"></i></button>\n" +
    "        <button type=\"button\" class=\"btn btn-info btn-circle btn-lg\"><i class=\"glyphicon glyphicon-ok\"></i></button>\n" +
    "        <button type=\"button\" class=\"btn btn-warning btn-circle btn-lg\"><i class=\"glyphicon glyphicon-remove\"></i></button>\n" +
    "        <button type=\"button\" class=\"btn btn-danger btn-circle btn-lg\"><i class=\"glyphicon glyphicon-heart\"></i></button>\n" +
    "    </div>\n" +
    "</div>-->\n" +
    "\n" +
    "<div class=\"container\" style=\"padding-top: 0px;\">\n" +
    "    <ul class=\"nav nav-justified\">\n" +
    "        <li disabled><a class=\"text-center\" ng-show=\"navbar.home.show\"  ng-click=\"onAction('home')\" ><i class=\"fa fa-mobile fa-3x\" ng-class=\"{'text-success':navbar.home.active}\"></i> <br>Campañas Marketing Móvil</a>\n" +
    "        </li>\n" +
    "        <li><a  ng-disabled=\"true\" class=\"text-center\" ng-show=\"navbar.qr.show\" ng-click=\"onAction('qr')\" ><i class=\"fa fa-qrcode fa-3x\" ng-class=\"{'text-success':navbar.qr.active}\"></i> <br>Editor QR</a>\n" +
    "        </li>\n" +
    "        <li ><a ng-disabled=\"false\" class=\"text-center\" ng-show=\"navbar.editweb.show\" ng-click=\"onAction('editweb')\" ><i class=\"fa fa-globe fa-3x\" ng-class=\"{'text-success':navbar.editweb.active}\"></i> <br>Editor Páginas Web</a>\n" +
    "        </li>\n" +
    "        <li><a class=\"text-center\" ng-show=\"navbar.statistics.show\" ng-click=\"onAction('statistics')\" ><i class=\"fa fa-signal fa-3x\" ng-class=\"{'text-success':navbar.statistics.active}\"></i> <br>Estadísticas</a>\n" +
    "        </li>\n" +
    "		 <li><a class=\"text-center\" ng-show=\"navbar.users.show\" ng-click=\"onAction('users')\" ><i class=\"fa fa-users fa-3x\" ng-class=\"{'text-success':navbar.users.active}\"></i> <br>Usuarios</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("app/layout/shell/shell.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/layout/shell/shell.tpl.html",
    "<div>\n" +
    "	<div ng-switch=\"showView\">\n" +
    "		<!-- authorized access -->\n" +
    "		<div ng-switch-when=\"authorized\">\n" +
    "			<!--Header start-->\n" +
    "		 	<div ng-if=\"appConfig.showHeader\" edu-header />\n" +
    "			<!--Header end-->\n" +
    "			<!--Top navigation section start-->\n" +
    "			<div ng-show=\"appConfig.showTopnav\" edu-topnav />	\n" +
    "			<!--Top navigation section end-->\n" +
    "			\n" +
    "				<section id=\"main-container\">\n" +
    "\n" +
    "					<!--Left navigation section start-->\n" +
    "					<div ng-show=\"appConfig.showLeftnav\"  edu-leftnav />\n" +
    "					<!--Left navigation section end-->\n" +
    "\n" +
    "\n" +
    "					<!--Page main section start-->\n" +
    "					<!--<section id=\"min-wrapper\">-->\n" +
    "					<div id=\"main-content\">\n" +
    "						<div class=\"container-fluid\">\n" +
    "								<div class=\"row\">\n" +
    "									<div ng-show=\"appConfig.showBreadcrums\" class=\"col-md-12\">\n" +
    "										<!--Top breadcrumb start -->\n" +
    "										<!--<ol class=\"breadcrumb\">\n" +
    "											<li><a href=\"#/home\"><i class=\"fa fa-home\"></i></a></li>\n" +
    "											\n" +
    "											<li ng-repeat=\"item in session.navegacion\" ng-class=\"{'active':$last}\"><a href=\"#/{item.path}\"><i class=\"fa fa-{{item.icono}}\"></i>{{item.pathDesc}}</a></li>\n" +
    "											\n" +
    "											<li><a href=\"#\"><i class=\"fa fa-home\"></i></a></li>\n" +
    "											<li class=\"active\">Dashboard</li>\n" +
    "										</ol>-->\n" +
    "										<!--Top breadcrumb end -->\n" +
    "										<!--Top progressbar start -->	\n" +
    "											<div id=\"containerbar\"  ng-show=\"showProgressBarConfig\">\n" +
    "												<ol class=\"progtrckr\" data-progtrckr-steps=\"{{appConfig.progressBarConfig.length}}\">\n" +
    "												    <li  ng-class=\"{'progtrckr-validated':statusItem(option)=='validado','progtrckr-active':statusItem(option)=='activo','progtrckr-inactive':statusItem(option)=='inactivo','progtrckr-disabled':statusItem(option)=='desabilitado','progtrckr-locked':statusItem(option)=='bloqueado' }\" ng-repeat=\"option in appConfig.progressBarConfig\" ng-click=\"onClickProgressBar(option)\">\n" +
    "														<a href=\"\"><i class=\"ace-icon fa fa-{{option.icono}}\"></i>  {{option.nombre}}</a>\n" +
    "													</li>\n" +
    "												</ol>\n" +
    "											</div>\n" +
    "											<div id=\"containerbar\"  ng-show=\"showProgressBarNotas\">\n" +
    "												<ol class=\"progtrckr\" data-progtrckr-steps=\"appConfig.progressBarNotas.length\">\n" +
    "													 <li ng-class=\"{'progtrckr-validated':statusItem(option)=='validado','progtrckr-active':statusItem(option)=='activo','progtrckr-inactive':statusItem(option)=='inactivo','progtrckr-disabled':statusItem(option)=='desabilitado','progtrckr-locked':statusItem(option)=='bloqueado' }\" ng-repeat=\"option in appConfig.progressBarNotas\" ng-click=\"onClickProgressBar(option)\">\n" +
    "														<a href=\"\"><i class=\"ace-icon fa fa-{{option.icono}}\"></i>  {{option.nombre}}</a>\n" +
    "													</li>\n" +
    "												    \n" +
    "												</ol>\n" +
    "											</div>\n" +
    "										\n" +
    "										<!--Top progressbar end -->\n" +
    "									</div>\n" +
    "								</div>\n" +
    "						        <!-- Main Content Element  Start-->\n" +
    "\n" +
    "								<div data-ng-view />\n" +
    "\n" +
    "						        <!-- Main Content Element  End-->\n" +
    "\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				<!--</section>-->\n" +
    "				<!--Page main section end -->\n" +
    "				<!--Right hidden  section start-->\n" +
    "				<section id=\"right-wrapper\">\n" +
    "					<!--Right hidden  section close icon start-->\n" +
    "					<div class=\"close-right-wrapper\">\n" +
    "						<a href=\"javascript:void(0)\"><i class=\"fa fa-times\"></i></a>\n" +
    "					</div>\n" +
    "					<!--Right hidden  section close icon end-->\n" +
    "\n" +
    "					<!--Tab navigation start-->\n" +
    "					<ul class=\"nav nav-tabs\" id=\"setting-tab\">\n" +
    "						<li class=\"active\"><a href=\"#chatTab\" data-toggle=\"tab\"><i class=\"fa fa-comment-o\"></i> Chat</a></li>\n" +
    "						<li><a href=\"#settingTab\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i> Setting</a></li>\n" +
    "					</ul>\n" +
    "					<!--Tab navigation end -->\n" +
    "\n" +
    "					<!--Tab content start-->\n" +
    "					<div class=\"tab-content\">\n" +
    "						<div class=\"tab-pane active\" id=\"chatTab\">\n" +
    "							<div class=\"nano\">\n" +
    "								<div class=\"nano-content\">\n" +
    "									<div class=\"chat-group chat-group-fav\">\n" +
    "										<h3 class=\"ls-header\">Favorites</h3>\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-online\"></span>\n" +
    "											Catherine J. Watkins\n" +
    "											<span class=\"badge badge-lightBlue\">1</span>\n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-idle\"></span>\n" +
    "											Fernando G. Olson\n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-busy\"></span>\n" +
    "											Susan J. Best\n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-offline\"></span>\n" +
    "											Brandon S. Young\n" +
    "										</a>\n" +
    "									</div>\n" +
    "									<div class=\"chat-group chat-group-coll\">\n" +
    "										<h3 class=\"ls-header\">Colleagues</h3>\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-offline\"></span>\n" +
    "											Brandon S. Young\n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-idle\"></span>\n" +
    "											Fernando G. Olson\n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-online\"></span>\n" +
    "											Catherine J. Watkins\n" +
    "											<span class=\"badge badge-lightBlue\">3</span>\n" +
    "										</a>\n" +
    "\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-busy\"></span>\n" +
    "											Susan J. Best\n" +
    "										</a>\n" +
    "\n" +
    "									</div>\n" +
    "									<div class=\"chat-group chat-group-social\">\n" +
    "										<h3 class=\"ls-header\">Social</h3>\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-online\"></span>\n" +
    "											Catherine J. Watkins\n" +
    "											<span class=\"badge badge-lightBlue\">5</span>\n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\">\n" +
    "											<span class=\"user-status is-busy\"></span>\n" +
    "											Susan J. Best\n" +
    "										</a>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"chat-box\">\n" +
    "								<div class=\"chat-box-header\">\n" +
    "									<h5>\n" +
    "										<span class=\"user-status is-online\"></span>\n" +
    "										Catherine J. Watkins\n" +
    "									</h5>\n" +
    "								</div>\n" +
    "\n" +
    "								<div class=\"chat-box-content\">\n" +
    "									<div class=\"nano nano-chat\">\n" +
    "										<div class=\"nano-content\">\n" +
    "\n" +
    "											<ul>\n" +
    "												<li>\n" +
    "													<span class=\"user\">Catherine</span>\n" +
    "													<p>Are you here?</p>\n" +
    "													<span class=\"time\">10:10</span>\n" +
    "												</li>\n" +
    "												<li>\n" +
    "													<span class=\"user\">Catherine</span>\n" +
    "													<p>Whohoo!</p>\n" +
    "													<span class=\"time\">10:12</span>\n" +
    "												</li>\n" +
    "												<li>\n" +
    "													<span class=\"user\">Catherine</span>\n" +
    "													<p>This message is pre-queued.</p>\n" +
    "													<span class=\"time\">10:15</span>\n" +
    "												</li>\n" +
    "												<li>\n" +
    "													<span class=\"user\">Catherine</span>\n" +
    "													<p>Do you like it?</p>\n" +
    "													<span class=\"time\">10:20</span>\n" +
    "												</li>\n" +
    "												<li>\n" +
    "													<span class=\"user\">Catherine</span>\n" +
    "													<p>This message is pre-queued.</p>\n" +
    "													<span class=\"time\">11:00</span>\n" +
    "												</li>\n" +
    "												<li>\n" +
    "													<span class=\"user\">Catherine</span>\n" +
    "													<p>Hi, you there ?</p>\n" +
    "													<span class=\"time\">12:00</span>\n" +
    "												</li>\n" +
    "											</ul>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "\n" +
    "\n" +
    "							</div>\n" +
    "							<div class=\"chat-write\">\n" +
    "								<textarea class=\"form-control autogrow\" placeholder=\"Type your message\"></textarea>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"tab-pane\" id=\"settingTab\">\n" +
    "\n" +
    "							<div class=\"setting-box\">\n" +
    "								<h3 class=\"ls-header\">Account Setting</h3>\n" +
    "								<div class=\"setting-box-content\">\n" +
    "									<ul>\n" +
    "										<li><span class=\"pull-left\">Online status: </span><input type=\"checkbox\" class=\"js-switch-red\" checked/></li>\n" +
    "										<li><span class=\"pull-left\">Show offline contact: </span><input type=\"checkbox\" class=\"js-switch-light-blue\" checked/></li>\n" +
    "										<li><span class=\"pull-left\">Invisible mode: </span><input class=\"js-switch\" type=\"checkbox\" checked></li>\n" +
    "										<li><span class=\"pull-left\">Log all message:</span><input class=\"js-switch-light-green\" type=\"checkbox\" checked></li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"setting-box\">\n" +
    "								<h3 class=\"ls-header\">Maintenance</h3>\n" +
    "								<div class=\"setting-box-content\">\n" +
    "									<div class=\"easy-pai-box\">\n" +
    "												<span class=\"easyPieChart\" data-percent=\"90\">\n" +
    "													<span class=\"easyPiePercent\"></span>\n" +
    "												</span>\n" +
    "									</div>\n" +
    "									<div class=\"easy-pai-box\">\n" +
    "										<button class=\"btn btn-xs ls-red-btn js_update\">Update Data</button>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"setting-box\">\n" +
    "								<h3 class=\"ls-header\">Progress</h3>\n" +
    "								<div class=\"setting-box-content\">\n" +
    "\n" +
    "									<h5>File uploading</h5>\n" +
    "									<div class=\"progress\">\n" +
    "										<div class=\"progress-bar ls-light-blue-progress six-sec-ease-in-out\"\n" +
    "											 aria-valuetransitiongoal=\"10\"></div>\n" +
    "									</div>\n" +
    "\n" +
    "									<h5>Plugin setup</h5>\n" +
    "									<div class=\"progress progress-striped active\">\n" +
    "										<div class=\"progress-bar six-sec-ease-in-out ls-light-green-progress\"\n" +
    "											 aria-valuetransitiongoal=\"20\"></div>\n" +
    "									</div>\n" +
    "									<h5>Post New Article</h5>\n" +
    "									<div class=\"progress progress-striped active\">\n" +
    "										<div class=\"progress-bar ls-yellow-progress six-sec-ease-in-out\"\n" +
    "											 aria-valuetransitiongoal=\"80\"></div>\n" +
    "									</div>\n" +
    "									<h5>Create New User</h5>\n" +
    "									<div class=\"progress progress-striped active\">\n" +
    "										<div class=\"progress-bar ls-red-progress six-sec-ease-in-out\"\n" +
    "											 aria-valuetransitiongoal=\"100\"></div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<!--Tab content -->\n" +
    "				</section>\n" +
    "				<!--Right hidden  section end -->\n" +
    "				\n" +
    "			\n" +
    "			</section>\n" +
    "			<div ng-if=\"appConfig.showFooter\" edu-footer /> \n" +
    "		</div>\n" +
    "		<!-- unauthorized access -->\n" +
    "		<div class=\"col-xs-12\" ng-switch-when=\"unauthorized\">\n" +
    "		      \n" +
    "				 <h1>No tiene permisos para acceder a esta aplicaci&oacute;n</h1> \n" +
    "		</div>\n" +
    "		<!--  -->\n" +
    "		<div class=\"col-xs-12\" ng-switch-when=\"\">\n" +
    "		       \n" +
    "		</div>\n" +
    "	<!----------------------->\n" +
    "	<!--OVERLAYS--->\n" +
    "		            <!-- overlay alert messages -->\n" +
    "					<div class=\"col-xs-offset-2 col-xs-8 message\" ng-show=\"optionsMessage.show\">\n" +
    "						<div class=\"alert alert-{{optionsMessage.type}} alert-dismissible\" role=\"alert\">\n" +
    "						  <button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "						  <strong>{{optionsMessage.message}}</strong> \n" +
    "						</div>\n" +
    "						\n" +
    "					</div> \n" +
    "					<!-- overlay form user -->\n" +
    "					<div name=\"overlay\" class=\"dw-loading dw-loading-overlay dw-loading-active\" ng-show=\"optionsFormUser.show\" >\n" +
    "						<div class=\"dw-loading-body\" >\n" +
    "							<div class=\"dw-loading-spinner row\">\n" +
    "								<div class=\"panel panel-{{optionsFormUser.type || 'default'}} \" style=\"width:{{optionsFormUser.width || 250}}px\">\n" +
    "									<div class=\"panel-heading\" >\n" +
    "										<h4>{{optionsFormUser.title}}</h4>	\n" +
    "									</div>\n" +
    "									<div class=\"panel-body \" >\n" +
    "										<form name=\"formUser\" novalidate >\n" +
    "											<h4>{{optionsFormUser.message}}</h4>								\n" +
    "											<div class=\"form-group  {{field.col}}\" ng-repeat=\"field in optionsFormUser.fields\">\n" +
    "												<label for=\"{{field.key}}\" class=\"ng-binding\" style=\"align:left\">\n" +
    "													{{field.label}} {{field.required ? '*' : ''}} \n" +
    "												</label>\n" +
    "												<input type=\"text\" class=\"form-control\" id=\"{{field.key}}\" name=\"{{field.key}}\"ng-model=\"options.formUser.result[field.key]\" placeholder=\"{{field.placeholder}}\"  ng-required=\"field.required\" ng-disabled=\"field.disabled\">	   \n" +
    "											</div>\n" +
    "											<div><h5>{{optionsFormUser.nota}}</h5></div>\n" +
    "										</form>\n" +
    "									</div>\n" +
    "									<div class=\"panel-footer\" >\n" +
    "									   <div class=\"row\">\n" +
    "											<div class=\"col-md-offset-3 col-md-9\">  \n" +
    "												<button ng-click=\"optionsFormUser.events.continue(selectedRow)\" ng-disabled=\"formUser.$invalid\"  class=\"btn btn-sm btn-primary\" >{{optionsFormUser.textButtonContinue || 'Aceptar'}}</button> \n" +
    "												<button ng-click=\"optionsFormUser.events.cancel()\" class=\"btn btn-sm\">{{optionsFormUser.textButtonCancel || 'Cancelar'}}</button> \n" +
    "											</div> \n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div> \n" +
    "					 \n" +
    "					\n" +
    "					<!-- overlay  --->\n" +
    "					<!-- \n" +
    "					<div ng-show=\"showOverlayLoading\" style=\"position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000;background-color:gray;background-color:rgba(255,255,255,0.5);\">\n" +
    "						<img style=\"position:absolute;top:35%;left:40%;\" alt=\"\" src=\"data:image/gif;base64,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6zkseEwUv4n+nplShhFex4/+IEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUOEI8DKgalQOArJ2qcp1wFUMWcNy6cr1K4WwaLeQJfsVrdupWdauffq2Lha5cpvWtWsF71yne9/29duVbuC0VAgXhnoYsRTFZaM21ppYcdvGd/GafRBYbV6zfLcu3uxWTOTNnOGiXs26tevXsGPLnk27tu3buHPr3s27t+/fwIMLH068uPHjyJMrX868ufPn0KNLn069uvXr2LNr3869u/fv4MOLH0++vPmcANKrX5/++IL38OO/t8G+PgD38vPTt78ef/74+/H+155x/8kXoID+FbjAgfwlWCCD9jn4H4T1SahfDQKqZ6GBGGZ4H4EKztdhhhsCOCKCIIZ43oostujiizDGKOOMNNZo44045qjjjjz26OOPQAYp5JBEFmnkkUgmqeSSTDbp5JNQRinllFRWaeWVWGapJRIBtHZAGQGEudoBZIoR5pljkllmF2e22aVZasb5pRZuugmnnHFeUWedX+HpJxV77nmVn3gCGqidUBFaqKGHoumUonLq2aiYj0KqpqSTvsmUpWtiGmhUnGbRaJ+KbiEoan+a2uZrkXLhKGydbinrrLTWauutuOaq66689urrr8AGK+ywxBZr7LHIJqvssiKuKfAKAS8pIO0pBFQLLUvSZiuKtdZim+23mXDL7UrfluusI+KKq5K57BKS7rspsWuuu++me5K88w5Sr70m4QtuIvuqS5K//9IbcLUlETwtugdfOzDBkxwcr7yU7NtSvhUL7FK54Y4r08IdMyvyyGskYPLJKJvMY8osJ7Byyyi/DLPKO858sswz4wyzzi3zzLLPKQMdc802u0zy0UgnrfTSTDft9NNQRy311FRXTUwEACH5BAUBAA8ALAAAAAAsASwBAAT+8MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH4vLfj/gH58g1eBhgWEiVOHgYqOT4yAj5NLkX+UmEeWgpmdQpuInqI+oKOmO6Wnqjapq64xra+yLLGztre4ubq7vEwDA54ICL00v8aZwsnEMMbHmMnKyyvN1JTQ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DwAsAAAAACwBLAEABP7wyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fi8N+P+AfnyDV4GGAYSJU4eBio5PjICPk0uRf5SYR5aCmZ1Cm4ieoj6go6Y7paeqNqmrrjGtr7IssbO2t7i5uru8TAoKngAAvTS/xpnCycQvxs3IycrLKs3UlNDX0ifU25PX3sPZIdvjwI7f3+Eg5NyJ597p6uvO7e7Q8PHyv4T19vf48oP4RfP3IV+5gAIJilv3qJ7CheysoXv472AnbBT/nRqYseArcP4dQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0rlkaDqVA4DsnapyvUqhqxgB3DhStYrhbBgt5Bdm8ArWrRZ2MqN+vZtXLlsn9atewVvXqh77Vbxu5Zu4LCDCXeVehjxFMVWpzZOSwWy28ZY/Jp9EFjtXLN8vRTezNkxmMWbKZNezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+Z0E0qtfn/54gffw47+3wb4+Affy89O3vx5//vj78f7XnnH/yReggP4VWMCB/CVYIIP2OfgfhPVJqF8NAqpnoYEYZngfgQrO12GGGwI4IoIghnjeiiy26OKLMMYo44w01mjjjTjmqOOOPPbo449ABinkkEQWaeSRSCap5JJMNunkk1BGKeWUVFZp5ZVYZqnlljQc4OVqCIQphpdkghmmmF2QqeYBm53pJhdrqtmmm29eEWecXtGpJwJV3InnVHvuSYWff0YVqJ59EionVIfSaYWiiz7VaJ2JQsqmU5OeiYWll0o6qRaK5nnoFnea6SipkZqqKZxfwrYql7DGKuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgma8sCr60YANMC0DJrigHUPhuttJ5Qq61L116bibbgOstSt90+Em6445JbLiHntruSuuQO0q67KcEbr7zzonuSveuymy+4+/IbrSL/AlySwAM7UvC2Jgk8ycLvwktJvtzeO/G5MfX7sMEzQZutuMqGLLIZApRs8skl84jyygKozPLJLr+c8o4ymxyzzDe/nDPLO6/cM8o/w0xzzS2PbPTRSCet9NJMN+3001BHLfXUVJsSAQAh+QQFAQAPACwAAAAALAEsAQAE/vDJSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+L1X4/4B+fINXgYYKhIlTh4GKjk+MgI+TS5F/lJhHloKZnUKbiJ6iPqCjpjulp6o2qauuMa2vsiyxs7a3uLm6u7xMCQmeAQG9NL/GmcLJxC/GzcCUydHLK87N0NHS0ybV1Y/Y38PaItzdjuDf4iHk5YTn6Okg69aJ7tjw8fLHg/XZ9x/5v9rxC+fvH0CB/AqqW+fNncKF7CadewgxoCh7FCGe6pdRHMGO/iBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1Cj7iBAVSoHAFi7UN1qNQPWr1y2iu1K4avZLWLTEuhqti0ALWrVQnVLF0vcuE/pur1yV25evW2t9E07F/BZKoPHRjV8WEpirlIZZ0WcmC1ju3fJPgAc1q/lvVoVaw4cBvLoyZpTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DDix9PPvmB8+jTnzc+oL379+1tqJ9/gD38+/Lpp7d//31+/esV/tcffP8ByN+AAxSo34EDKkgfg/05OB+E+NUAIHoUEmjhhfUJiGB8G16YoX8hGujhh+WlqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmWUAZC3SpWgFgitHlmF+CGWYXY6a5gGZmtrmlFmqmyaabZmIRZ5xd0UlnFXfiaZWee07Rp59QARqooIPK+ZShblqRqKJOMdrmFY96GamkZ1L6aFSYZpFonoZucWeZjYoK6Wqlmrrma3UW+WaWsMYq66y01mrrrbjmquuuvPbq66/ABivssMQWa+yxyPYmgJECqDR7CgLQIuBSs9Qu20m00bZUbbWZYIstS9tu+4i33q4U7rmEkKuuSueiy4e65KbUbrjpwluuSfOKm4i995KUL7f78pttSf8664jA0J5U8LgCs9suJfZOqy/E/UpMbbcDz2Qwxsl27HEcBoQs8sgh70jyyQaYjPLIKq9cso4ui9yyyzOvXDPKN5+cM8k7swxzzCl/LPTQRBdt9NFIJ6300kw37fTTUMcUAQAh+QQFAQAPACwAAAAALAEsAQAE/vDJSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+L034/4B+fINXgYYJhIlTh4GKjk+MgI+TS5F/lJhHloKZnUKbiJ6iPqCjpjulp6o2qauuMa2vsiyxs7a3uLm6uyMKvDgEBJ4KxL8zwciZxMvGL8jPwpTL080r0M/S09rVJtfXj9rhxdwh3t+O4uHk5ebQiunq6yDt2Inw1PLz9MmD9/j5H/bx2+NvHMCAAu35O8jO3CR4DBu6w5QuosRow/5ZRIhxlMGN/gFBihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSvVyYGqIAFQPVLW6IYDXLlrDbuVqwatZLmLDkqVgtu2WtGnJtp2LFQvcu1Lp6rV7Ny5UvXut9IWbF/BcwYPFFjZ8lkpixVMZu53yWKtcyXUpP77MmC/etYbREgZN94vftQ8Oh1GLWsLX1rBjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DDix9Pvrz58+jTq1/fc4H79/DdMwdAv759+jbi618w/77//PvB/teff/YBGKB8yxF4n4EHDqggAAwG6KCCEe43IYEV6nfhfzUc+N6GC3boIX8JPoifiB6CWCCKDZZoInswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdICCDbAGUIYCZsA6RJJhhmtommmmty0eacYq4FJ5xb0EmnnXfiaYWeepLV56BUAAqoVYMSOoWhgU6VaJ9VMLpnVI/eeYWkblJaqZqXYnomVJummQWmiFaqhaR8Kjpqo6ipumqmY/qZ56e1iQrmrbjmquuuvPbq66/ABivssMQWa+yxyCar7LLMtjbr7LPQnmTAKwXEZMC105pSwLbVvoQttp5wy62334KLibjiulRuuY+gi25L68ZLiLv0shTvuvPS665K9+I7iL77otQvu4kA/K60A5ubr8HbCpxwtoow3LDD/VLCsL33WqwvTP5qnO5M32ZyME3XhttttCinnAYCLLfsMstBviwzAjHP7HLNNsMMZM4t45yzzzYDPbPQMhP9stE378wzzSo37fTTUEct9dRUV2311VhnrfXWxkQAADs=\" />\n" +
    "					</div>\n" +
    "					-->	\n" +
    "                                        <!------------------------------------------------------------------------------------------------------------------------->\n" +
    "                                        <!--TOASTER--------------------------------------------------------------------------------------------------------------->\n" +
    "                                        <!--  --------------------------------------------------------------------------------------------------------------------->\n" +
    "                                        <toaster-container  toaster-options=\"{'position-class': 'toast-top-center'}\"></toaster-container>  \n" +
    "                                        \n" +
    "                                        <div ng-show=\"showOverlayLoading\" class=\"overlayFixedLoading\">\n" +
    "                                            <img class=\"centrado\" src=\"data:image/gif;base64,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\"/>\n" +
    "					</div>\n" +
    "					<!-- overlay form download -->\n" +
    "					<div name=\"overlay\" class=\"dw-loading dw-loading-overlay dw-loading-active\" ng-show=\"showOverlayDownloadFile\" >\n" +
    "						<div class=\"dw-loading-body \" >\n" +
    "							<div class=\"dw-loading-spinner\">\n" +
    "								<div class=\"panel panel-info\"  style=\"width:300px\">\n" +
    "										<div class=\"panel-heading\" >\n" +
    "											<span  class=\"glyphicon glyphicon-save pull-right\"></span>\n" +
    "											\n" +
    "											<br/>\n" +
    "										</div>\n" +
    "										<div class=\"panel-body\" >\n" +
    "											<h4>Descargando archivo</h4>\n" +
    "											<div class=\"progress\">\n" +
    "											  <div class=\"progress-bar progress-bar-striped active\"  role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">\n" +
    "											   \n" +
    "											  </div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"panel-footer\" >\n" +
    "										   \n" +
    "										</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<!-- overlay form success/error -->\n" +
    "					<div name=\"overlay\" class=\"dw-loading dw-loading-overlay dw-loading-active\" ng-show=\"overlayFormSuccessErrorForm.show\" >\n" +
    "						<div class=\"dw-loading-body \" >\n" +
    "							<div class=\"dw-loading-spinner\">\n" +
    "								<div class=\"panel panel-{{options.overlayFormSuccessErrorForm.type}}\"  style=\"min-width:{{options.formAvancedSearch.width||200}}px\">\n" +
    "									<div class=\"panel-heading\" >\n" +
    "											<span ng-if=\"options.overlayFormSuccessErrorForm.type=='success'\" class=\"glyphicon glyphicon-ok pull-right\"></span>\n" +
    "											<span ng-if=\"options.overlayFormSuccessErrorForm.type=='danger'\" class=\"glyphicon glyphicon-remove pull-right\"></span>\n" +
    "											<br/>\n" +
    "									</div>\n" +
    "									<div class=\"panel-body\" >\n" +
    "										<h4>{{options.overlayFormSuccessErrorForm.message}}</h4>\n" +
    "									</div>\n" +
    "									<div class=\"panel-footer\" >\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"col-md-offset-3 col-md-9\">  \n" +
    "												<button ng-click=\"options.overlayFormSuccessErrorForm.show=false\" class=\"btn btn-sm btn-primary\" >{{options.snippets.formSuccessErrorButtonContinueForm || 'Aceptar'}}</button> \n" +
    "											</div> \n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "	\n" +
    "	<!---------------------->\n" +
    "\n" +
    "</div>");
}]);

angular.module("app/layout/topnav/topnav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/layout/topnav/topnav.tpl.html",
    "<nav class=\"navigation\" >\n" +
    "	<div class=\"container-fluid\">\n" +
    "		<!--Logo text start-->\n" +
    "		<div class=\"header-logo\">\n" +
    "			<a href=\"#/home\" title=\"\">\n" +
    "				<h1>Mobilemktg</h1>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "		<!--Logo text End-->\n" +
    "		<div class=\"top-navigation\">\n" +
    "			<!--Collapse navigation menu icon start -->\n" +
    "			<!--\n" +
    "            <div class=\"menu-control hidden-xs\">\n" +
    "				<a href=\"javascript:void(0)\">\n" +
    "					<i class=\"fa fa-bars\"></i>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "			\n" +
    "			<div class=\"search-box\">\n" +
    "				<ul>\n" +
    "					<li class=\"dropdown\">\n" +
    "						<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">\n" +
    "							<span class=\"fa fa-search\"></span>\n" +
    "						</a>\n" +
    "						<div class=\"dropdown-menu  top-dropDown-1\">\n" +
    "							<h4>Buscar</h4>\n" +
    "							<form>\n" +
    "								<input type=\"search\" placeholder=\"¿Qué quiere ver?\">\n" +
    "							</form>\n" +
    "						</div>\n" +
    "\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			-->\n" +
    "			\n" +
    "			<!--Collapse navigation menu icon end -->\n" +
    "			<!--Top Navigation Start-->\n" +
    "\n" +
    "			<ul>\n" +
    "			\n" +
    "				<!--\n" +
    "				<li class=\"dropdown\">\n" +
    "					\n" +
    "					<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">\n" +
    "						<span class=\"fa fa-tasks\"></span>\n" +
    "						<span class=\"badge badge-lightBlue\">3</span>\n" +
    "					</a>\n" +
    "					<div class=\"dropdown-menu right top-dropDown-1\">\n" +
    "						<h4>All Task</h4>\n" +
    "						<ul class=\"goal-item\">\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "									<div class=\"goal-user-image\">\n" +
    "										<img class=\"rounded\" src=\"assets/images/userimage/avatar3-80.png\" alt=\"user image\" />\n" +
    "									</div>\n" +
    "									<div class=\"goal-content\">\n" +
    "										Wordpress Theme\n" +
    "										<div class=\"progress progress-striped active\">\n" +
    "											<div class=\"progress-bar ls-light-blue-progress six-sec-ease-in-out\" aria-valuetransitiongoal=\"100\"></div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "									<div class=\"goal-user-image\">\n" +
    "										<img class=\"rounded\" src=\"assets/images/userimage/avatar2-80.png\" alt=\"user image\" />\n" +
    "									</div>\n" +
    "									<div class=\"goal-content\">\n" +
    "										PSD Designe\n" +
    "										<div class=\"progress progress-striped active\">\n" +
    "											<div class=\"progress-bar ls-red-progress six-sec-ease-in-out\" aria-valuetransitiongoal=\"40\"></div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "									<div class=\"goal-user-image\">\n" +
    "										<img class=\"rounded\" src=\"assets/images/userimage/avatar1-80.png\" alt=\"user image\" />\n" +
    "									</div>\n" +
    "									<div class=\"goal-content\">\n" +
    "										Wordpress PLugin\n" +
    "										<div class=\"progress progress-striped active\">\n" +
    "											<div class=\"progress-bar ls-light-green-progress six-sec-ease-in-out\" aria-valuetransitiongoal=\"60\"></div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li class=\"only-link\">\n" +
    "								<a href=\"javascript:void(0)\">View All</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "					\n" +
    "				</li>\n" +
    "				-->\n" +
    "				<!--All task drop down end-->\n" +
    "				<!--Notification drop down start-->\n" +
    "				<!--\n" +
    "				<li class=\"dropdown\">\n" +
    "					\n" +
    "					<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">\n" +
    "						<span class=\"fa fa-bell-o\"></span>\n" +
    "						<span class=\"badge badge-red\">6</span>\n" +
    "					</a>\n" +
    "\n" +
    "					<div class=\"dropdown-menu right top-notification\">\n" +
    "						<h4>Notification</h4>\n" +
    "						<ul class=\"ls-feed\">\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "													<span class=\"label label-red\">\n" +
    "														<i class=\"fa fa-check white\"></i>\n" +
    "													</span>\n" +
    "									You have 4 pending tasks.\n" +
    "									<span class=\"date\">Just now</span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "													<span class=\"label label-light-green\">\n" +
    "														<i class=\"fa fa-bar-chart-o\"></i>\n" +
    "													</span>\n" +
    "									Finance Report for year 2013\n" +
    "									<span class=\"date\">30 min</span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "													<span class=\"label label-lightBlue\">\n" +
    "														<i class=\"fa fa-shopping-cart\"></i>\n" +
    "													</span>\n" +
    "									New order received with\n" +
    "									<span class=\"date\">45 min</span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "													<span class=\"label label-lightBlue\">\n" +
    "														<i class=\"fa fa-user\"></i>\n" +
    "													</span>\n" +
    "									5 pending membership\n" +
    "									<span class=\"date\">50 min</span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "													<span class=\"label label-red\">\n" +
    "														<i class=\"fa fa-bell\"></i>\n" +
    "													</span>\n" +
    "									Server hardware upgraded\n" +
    "									<span class=\"date\">1 hr</span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "													<span class=\"label label-blue\">\n" +
    "														<i class=\"fa fa-briefcase\"></i>\n" +
    "													</span>\n" +
    "									IPO Report for\n" +
    "									<span class=\"lightGreen\">2014</span>\n" +
    "									<span class=\"date\">5 hrs</span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li class=\"only-link\">\n" +
    "								<a href=\"javascript:void(0)\">View All</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "					\n" +
    "				</li>\n" +
    "               -->             \n" +
    "				<!--Notification drop down end-->\n" +
    "				\n" +
    "				\n" +
    "				<!--Email drop down start-->\n" +
    "				<!--\n" +
    "				<li class=\"dropdown\">\n" +
    "					\n" +
    "					<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">\n" +
    "						<span class=\"fa fa-envelope-o\"></span>\n" +
    "						<span class=\"badge badge-red\">3</span>\n" +
    "					</a>\n" +
    "\n" +
    "					<div class=\"dropdown-menu right email-notification\">\n" +
    "						<h4>Email</h4>\n" +
    "						<ul class=\"email-top\">\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "									<div class=\"email-top-image\">\n" +
    "										<img class=\"rounded\" src=\"assets/images/userimage/avatar3-80.png\" alt=\"user image\" />\n" +
    "									</div>\n" +
    "									<div class=\"email-top-content\">\n" +
    "										John Doe <div>Sample Mail 1</div>\n" +
    "									</div>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "									<div class=\"email-top-image\">\n" +
    "										<img class=\"rounded\" src=\"assets/images/userimage/avatar2-80.png\" alt=\"user image\" />\n" +
    "									</div>\n" +
    "									<div class=\"email-top-content\">\n" +
    "										John Doe <div>Sample Mail 2</div>\n" +
    "									</div>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0)\">\n" +
    "									<div class=\"email-top-image\">\n" +
    "										<img class=\"rounded\" src=\"assets/images/userimage/avatar1-80.png\" alt=\"user image\" />\n" +
    "									</div>\n" +
    "									<div class=\"email-top-content\">\n" +
    "										John Doe <div> Sample Mail 4</div>\n" +
    "									</div>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li class=\"only-link\">\n" +
    "								<a href=\"mail.html\">View All</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "					\n" +
    "				</li>\n" +
    "				-->\n" +
    "				<!--Email drop down end-->\n" +
    "				\n" +
    "			   <!--\n" +
    "				<li class=\"hidden-xs\">\n" +
    "					<a class=\"right-sidebar\" href=\"javascript:void(0)\">\n" +
    "						<i class=\"fa fa-comment-o\"></i>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "				<li class=\"hidden-xs\">\n" +
    "					<a class=\"right-sidebar-setting\" href=\"javascript:void(0)\">\n" +
    "						<i class=\"fa fa-cogs\"></i>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a href=\"lock-screen.html\">\n" +
    "						<i class=\"fa fa-lock\"></i>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "				\n" +
    "			    \n" +
    "				<li class=\"blue\">\n" +
    "					<a>\n" +
    "						<i class=\"ace-icon fa fa-building\"></i>\n" +
    "						{{session.centro[0].name}}\n" +
    "					</a>\n" +
    "									\n" +
    "				</li>	\n" +
    "                -->\n" +
    "				<li class=\"blue\">\n" +
    "					<a>\n" +
    "						<i class=\"ace-icon fa fa-user\"></i>\n" +
    "						{{user.email}}\n" +
    "					</a>\n" +
    "									\n" +
    "				</li>	\n" +
    "				<!--\n" +
    "                <li class=\"blue\">\n" +
    "					<a>\n" +
    "						<i class=\"\"></i>\n" +
    "						   {{session.rol[0].name}}\n" +
    "					</a>\n" +
    "									\n" +
    "				</li>	\n" +
    "                -->\n" +
    "				<li>\n" +
    "					<a href=\"\" ng-click=\"closeSession()\">\n" +
    "						<i class=\"fa fa-power-off\"></i>\n" +
    "					</a>\n" +
    "				</li>\n" +
    "\n" +
    "			</ul>\n" +
    "		<!--Top Navigation End-->\n" +
    "		</div>\n" +
    "	<!------>\n" +
    "		\n" +
    "    <!------>	\n" +
    "		\n" +
    "	</div>\n" +
    "</nav>\n" +
    "");
}]);

angular.module("app/partials/campaigns/campaigns.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/partials/campaigns/campaigns.tpl.html",
    "<div ng-show=\"!(adding || editing)\" class=\"row\">\n" +
    "    <div ng-include src=\"'app/layout/navbar/navbar.tpl.html'\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"!(adding || editing)\" class=\"row home-row-top\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <!--Table Wrapper Start-->\n" +
    "        <div class=\"table-responsive ls-table\">\n" +
    "            <table class=\"table table-bordered table-striped table-responsive\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>QR</th>\n" +
    "                    <th>Id</th>\n" +
    "                    <th>Campaña</th>\n" +
    "                    <th>Descripcion</th>\n" +
    "                    \n" +
    "                    <th>Estado</th>\n" +
    "                    <th>Acciones</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"campaign in campaigns\">\n" +
    "                        <td><img src=\"/qr-png/{{campaign.id}}\" alt=\"QR code\" height=\"50\" width=\"50\"></td>\n" +
    "                        <td>{{campaign.id}}</td>\n" +
    "                        <td>{{campaign.name}}</td>\n" +
    "                        <td>{{campaign.description}}</td>\n" +
    "                        \n" +
    "                        <td><span class=\"label label-success\">Activa</span></td>\n" +
    "                        <td>\n" +
    "                            <button ng-click=\"onAction('edit',campaign.id)\" class=\"btn btn-xs btn-info\" style=\"margin:3px\" tooltip=\"Editar campaña\"><i class=\"fa fa-pencil\"></i></button>\n" +
    "                            <button ng-click=\"onAction('qr',campaign.id)\" class=\"btn btn-xs btn-info\" style=\"margin:3px\" tooltip=\"Editar codigo QR\"><i class=\"fa fa-qrcode\"></i></button>\n" +
    "                            <button class=\"btn btn-xs btn-info\" style=\"margin:3px\" tooltip=\"Descargar codigo QR\"><a target=\"_self\" href=\"/qr-png-dw/{{campaign.id}}\"><i class=\"fa fa-download\"></i></a></button>\n" +
    "                            <button ng-click=\"onAction('editweb',campaign.id)\" class=\"btn btn-xs ls-red-btn\" style=\"margin:3px\" tooltip=\"Editar web\"><i class=\"fa fa-tint\"></i></button>\n" +
    "                            <button ng-click=\"onAction('statistics',campaign.id)\" class=\"btn btn-xs ls-red-btn\" style=\"margin:3px\" tooltip=\"Estadísticas\"><i class=\"fa fa-bar-chart\"></i></button>\n" +
    "                            <button ng-click=\"onAction('delete',campaign.id)\" class=\"btn btn-xs ls-red-btn\" style=\"margin:3px\" tooltip=\"Eliminar campaña\"><i class=\"fa fa-trash\"></i></button>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-show=\"!adding\">\n" +
    "                        <td colspan=\"7\"> \n" +
    "                            <div  ng-click=\"onAction('new')\" class=\"btn btn-primary\"><i class=\"fa fa-plus\">  Añadir campañaña</i></div>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "              </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <!--Table Wrapper Finish-->\n" +
    "    </div>\n" +
    "</div>     \n" +
    "\n" +
    "<!-- overlay form campaign -->\n" +
    "<div class=\"row\" ng-show=\"adding || editing\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div class=\"panel panel-primary\">\n" +
    "            <div class=\"panel-heading\" >\n" +
    "                <h4>Campaña</h4>	\n" +
    "            </div>\n" +
    "            <div class=\"panel-body \" >\n" +
    "                <form name=\"formCampaing\" novalidate >\n" +
    "                        <h4>{{message}}</h4>								\n" +
    "                        <div class=\"form-group col-md-3\">\n" +
    "                            <label for=\"campaign.id\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                    Id\n" +
    "                            </label>\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"campaign.id\" name=\"campaign.id\"ng-model=\"campaign.id\" placeholder=\"\"  ng-required=\"false\" ng-disabled=\"true\">	   \n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <label for=\"campaign.name\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                Nombre *\n" +
    "                            </label>\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"campaign.name\" name=\"campaign.name\"ng-model=\"campaign.name\" placeholder=\"\"  ng-required=\"true\" ng-disabled=\"false\">	   \n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <label for=\"campaign.description\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                Descripcion\n" +
    "                            </label>\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"campaign.description\" name=\"campaign.description\"ng-model=\"campaign.description\" placeholder=\"\"  ng-required=\"false\" ng-disabled=\"false\">	   \n" +
    "                        </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"panel-footer\" >\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-offset-3 col-md-9\">  \n" +
    "                        <button ng-click=\"save()\" ng-disabled=\"formCampaing.$invalid\"  class=\"btn btn-sm btn-primary\" >Aceptar</button> \n" +
    "                        <button ng-click=\"cancel()\" class=\"btn btn-sm\">Cancelar</button> \n" +
    "                    </div> \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- overlay end  --->\n" +
    "\n" +
    "\n" +
    "  \n" +
    "	\n" +
    "	\n" +
    "\n" +
    "");
}]);

angular.module("app/partials/edit_campaign/edit_campaign.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/partials/edit_campaign/edit_campaign.tpl.html",
    "<div class=\"row home-row-top\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"form-group col-md-2\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"mobiletrck.id\" name=\"mobiletrck.id\"ng-model=\"campaign.id\" placeholder=\"id\"  ng-required=\"false\" ng-disabled=\"true\">	   \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"form-group col-md-10\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"mobiletrck.name\" name=\"mobiletrck.name\"ng-model=\"campaign.name\" placeholder=\"Nombre\"  ng-required=\"true\" ng-disabled=\"false\">	   \n" +
    "        </div>\n" +
    "        <div class=\"form-group col-md-12\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"mobiletrck.description\" name=\"mobiletrck.description\"ng-model=\"campaign.description\" placeholder=\"Descripcion\"  ng-required=\"false\" ng-disabled=\"false\">	   \n" +
    "        </div>\n" +
    "        <div class=\"form-group col-md-12\">\n" +
    "            <img src=\"/qr-png/{{campaign.id}}\" alt=\"QR code\" height=\"250\" width=\"250\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\" col-md-2\">\n" +
    "            <button ng-click=\"save()\" ng-disabled=\"\"  class=\"btn btn-sm btn-primary\" >Aceptar</button> \n" +
    "                                           \n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\">\n" +
    "             <button ng-click=\"cancel()\" class=\"btn btn-sm  btn-secondary\">Cancelar</button> \n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--Start Notifications--->\n" +
    "	\n" +
    "	 <toaster-container toaster-options=\"{'position-class': 'toast-top-full-width', 'close-button':true}\"></toaster-container>\n" +
    "	<!--End Notifications-->\n" +
    "     \n" +
    "     <!-- overlay form campaign -->\n" +
    "    <div name=\"overlay\" class=\"dw-loading dw-loading-overlay dw-loading-active\" ng-show=\"optionsFormCampaign.show\" >\n" +
    "            <div class=\"dw-loading-body\" >\n" +
    "                    <div class=\"dw-loading-spinner row\">\n" +
    "                            <div class=\"panel panel-{{optionsFormCampaign.type || 'default'}} \" style=\"width:{{optionsFormCampaign.width || 550}}px\">\n" +
    "                                    <div class=\"panel-heading\" >\n" +
    "                                            <h4>{{optionsFormUser.title}}</h4>	\n" +
    "                                    </div>\n" +
    "                                    <div class=\"panel-body \" >\n" +
    "                                           <form name=\"formCampaign\" novalidate >\n" +
    "                                                    <h4>{{optionsFormCampaign.message}}</h4>								\n" +
    "                                                    <div class=\"form-group col-md-3\">\n" +
    "                                                            <!--<label for=\"mobiletrck.id\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                                    Nombre  *\n" +
    "                                                            </label>-->\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"mobiletrck.id\" name=\"mobiletrck.id\"ng-model=\"campaign.id\" placeholder=\"id\"  ng-required=\"false\" ng-disabled=\"false\">	   \n" +
    "                                                    </div>\n" +
    "                                                    \n" +
    "                                                    <div class=\"form-group col-md-6\">\n" +
    "                                                           <!-- <label for=\"mobiletrck.name\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                                    Nombre  *\n" +
    "                                                            </label>-->\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"mobiletrck.name\" name=\"mobiletrck.name\"ng-model=\"campaign.name\" placeholder=\"Nombre\"  ng-required=\"true\" ng-disabled=\"false\">	   \n" +
    "                                                    </div>\n" +
    "                                                    <div class=\"form-group col-md-6\">\n" +
    "                                                           <!-- <label for=\"mobiletrck.name\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                                    Nombre  *\n" +
    "                                                            </label>-->\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"mobiletrck.description\" name=\"mobiletrck.description\"ng-model=\"campaign.description\" placeholder=\"Descripcion\"  ng-required=\"false\" ng-disabled=\"false\">	   \n" +
    "                                                    </div>\n" +
    "                                                    <div class=\"form-group col-md-6\">\n" +
    "                                                        <div>img src: /qr-png/{{campaign.id}} </div>\n" +
    "                                                        <img src=\"/qr-png/{{campaign.id}}\" alt=\"QR code\" height=\"100\" width=\"100\">\n" +
    "                                                             \n" +
    "                                        \n" +
    "                                                    </div>\n" +
    "                                                    \n" +
    "                                            </form>\n" +
    "                              \n" +
    "                                    </div>\n" +
    "                                    <div class=\"panel-footer\" >\n" +
    "                                           <div class=\"row\">\n" +
    "                                                    <div class=\"col-md-offset-3 col-md-9\">  \n" +
    "                                                            <button ng-click=\"save()\" ng-disabled=\"formCampaign.$invalid\"  class=\"btn btn-sm btn-primary\" >Aceptar</button> \n" +
    "                                                            <button ng-click=\"cancel()\" class=\"btn btn-sm\">Cancelar</button> \n" +
    "                                                    </div> \n" +
    "                                            </div>\n" +
    "                                    </div>\n" +
    "                            </div>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "    </div> \n" +
    "    <!-- overlay end  --->\n" +
    "        \n" +
    "   </div>\n" +
    "</div> \n" +
    "	\n" +
    "	\n" +
    "\n" +
    "");
}]);

angular.module("app/partials/editweb/editweb.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/partials/editweb/editweb.tpl.html",
    "<!-- menú -->\n" +
    "<div ng-include src=\"'app/layout/navbar/navbar.tpl.html'\"></div>\n" +
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "        <div class=\"alert alert-info\"  style=\"text-align:center\"> <h1><strong>Campaña:</strong>  {{campaign.name}}</h1></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- table mobile pages   -->\n" +
    "<!--Table Wrapper Start-->\n" +
    "        <div class=\"table-responsive ls-table\">\n" +
    "            <table class=\"table table-bordered table-striped table-responsive\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th width=\"15%\">Acciones</th>\n" +
    "                    <th width=\"5%\">Id</th>\n" +
    "                    <th width=\"25%\">Nombre</th>\n" +
    "                    <th width=\"50%\">Descripcion</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <h1>editin:{{editing}}</h1>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"mobilePage in mobilePages\">\n" +
    "                        <td>\n" +
    "                            <button ng-hide=\"mobilePage.editing\" ng-click=\"onAction('edit',mobilePage.id)\" class=\"btn btn-xs btn-info\" style=\"margin:3px\" tooltip=\"Editar\">\n" +
    "                                <i class=\"fa fa-pencil\"></i>\n" +
    "                            </button>\n" +
    "                            <button ng-show=\"mobilePage.editing\" ng-click=\"onAction('save',mobilePage.id)\" class=\"btn btn-xs btn-warning\" style=\"margin:3px\" tooltip=\"Guardar\">\n" +
    "                                <i class=\"fa fa-floppy-o\"></i>\n" +
    "                            </button>\n" +
    "                            <button ng-show=\"mobilePage.editing\" ng-click=\"mobilePage.editing=false\" class=\"btn btn-xs btn-default\" style=\"margin:3px\" tooltip=\"Cancelar\">\n" +
    "                                <i class=\"fa fa-ban\"></i>\n" +
    "                            </button>\n" +
    "                           \n" +
    "                            <button ng-hide=\"mobilePage.editing\" ng-click=\"onAction('probe',mobilePage.id)\"  class=\"btn btn-xs btn-info\" style=\"margin:3px\" tooltip=\"Probar\">\n" +
    "                                <i class=\"fa fa-globe\"></i>\n" +
    "                            </button>\n" +
    "                            <button ng-show=\"mobilePage.id_page\" ng-click=\"onAction('delete',mobilePage.id)\" class=\"btn btn-xs ls-red-btn\" style=\"margin:3px\" tooltip=\"Eliminar campaña\">\n" +
    "                                <i class=\"fa fa-trash\"></i>\n" +
    "                            </button>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            <span >{{mobilePage.id}}</span> \n" +
    "                            \n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            <span ng-hide=\"mobilePage.editing\">{{mobilePage.name}}</span> \n" +
    "                            <span ng-show=\"mobilePage.editing\">\n" +
    "                                <input type=\"text\" ng-model=\"mobilePage.name\"/>\n" +
    "                            </span>\n" +
    "                        </td>\n" +
    "                        <td><span ng-hide=\"mobilePage.editing\">{{mobilePage.description}}</span> \n" +
    "                            <span ng-show=\"mobilePage.editing\">\n" +
    "                                <input type=\"text\" ng-model=\"mobilePage.description\"/>\n" +
    "                            </span>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-show=\"!adding\">\n" +
    "                        <td colspan=\"4\"> \n" +
    "                            <div  ng-click=\"onAction('new')\" class=\"btn btn-primary\"><i class=\"fa fa-plus\">  Añadir página</i></div>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "              </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <!--Table Wrapper Finish-->\n" +
    "\n" +
    "<!--  edit html  -->\n" +
    "<div class=\"container\" id=\"editweb\" ng-show=\"mobilePage.editing\">\n" +
    "    <div class=\"row\">\n" +
    "       <!-- <div class=\"btn\" ng-class=\"{'btn-warning':pageDirty==true, 'btn-primary':pageDirty==false}\" ng-click=\"onSave()\"><i class=\"fa fa-save\"></i></div>-->\n" +
    "        \n" +
    "        <div class=\"col-md-12\" style=\"border:1px solid\">\n" +
    "            <style>\n" +
    "                .medium-insert-images figure figcaption,\n" +
    "                .mediumInsert figure figcaption,\n" +
    "                .medium-insert-embeds figure figcaption,\n" +
    "                .mediumInsert-embeds figure figcaption {\n" +
    "                    font-size: 12px;\n" +
    "                    line-height: 1.2em;\n" +
    "                }\n" +
    "                .medium-insert-images-slideshow figure {\n" +
    "                    width: 100%;\n" +
    "                }\n" +
    "                .medium-insert-images-slideshow figure img {\n" +
    "                    margin: 0;\n" +
    "                }\n" +
    "                .medium-insert-images.medium-insert-images-grid.small-grid figure {\n" +
    "                    width: 12.5%;\n" +
    "                }\n" +
    "                @media (max-width: 750px) {\n" +
    "                    .medium-insert-images.medium-insert-images-grid.small-grid figure {\n" +
    "                        width: 25%;\n" +
    "                    }\n" +
    "                }\n" +
    "                @media (max-width: 450px) {\n" +
    "                    .medium-insert-images.medium-insert-images-grid.small-grid figure {\n" +
    "                        width: 50%;\n" +
    "                    }\n" +
    "                }\n" +
    "            </style>\n" +
    "            \n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"editable\"  data-placeholder=\"Aquí su texto y sus imágenes\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "         \n" +
    "         <!-- <div name=\"text\" ng-model=\"text\" required medium-editor bind-options=\"{'placeholder': {text: 'This is a placeholder'},\n" +
    "                    'buttons': ['bold', 'italic', 'underline', 'header1', 'header2', 'quote', 'orderedlist', 'unorderedlist']}\">\n" +
    "          </div>\n" +
    "         -->\n" +
    "         <!--<div name=\"text\" ng-model=\"texto\" required medium-editor bind-options=\"options\" >\n" +
    "          </div>\n" +
    "        -->\n" +
    "	</div>	\n" +
    "    </div>\n" +
    "</div>\n" +
    "    \n" +
    "");
}]);

angular.module("app/partials/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/partials/home/home.tpl.html",
    "<div class=\"row home-row-top\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <!--Table Wrapper Start-->\n" +
    "        <div class=\"table-responsive ls-table\">\n" +
    "            <table class=\"table table-bordered table-striped table-responsive\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>Id</th>\n" +
    "                    <th>Campaña</th>\n" +
    "                    <th>Descripcion</th>\n" +
    "                    <th>Progreso</th>\n" +
    "                    <th>Estado</th>\n" +
    "                    <th>Acciones</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"campagna in campains\">\n" +
    "                    <td>{{campagna.id}}</td>\n" +
    "                    <td>{{campagna.name}}</td>\n" +
    "                    <td>{{campagna.description}}</td>\n" +
    "                    <td class=\"ls-table-progress\">\n" +
    "                        <div class=\"progress progress-striped active\">\n" +
    "                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuetransitiongoal=\"50\"></div>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td><span class=\"label label-warning\">Pending</span></td>\n" +
    "                    <td>\n" +
    "                        <button ng-click=\"onAction('edit',campagna.id)\" class=\"btn btn-xs btn-info\"><i class=\"fa fa-pencil\"></i></button>\n" +
    "                        <button ng-click=\"onAction('qr',campagna.id)\" class=\"btn btn-xs btn-info\"><i class=\"fa fa-qrcode\"></i></button>\n" +
    "                        <button ng-click=\"onAction('download',campagna.id)\" class=\"btn btn-xs btn-info\"><i class=\"fa fa-download\"></i></button>\n" +
    "                        <button ng-click=\"onAction('config',campagna.id)\" class=\"btn btn-xs ls-light-green-btn\"><i class=\"fa fa-cog\"></i></button>\n" +
    "                        <button ng-click=\"onAction('editweb',campagna.id)\" class=\"btn btn-xs ls-red-btn\"><i class=\"fa fa-tint\"></i></button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                \n" +
    "                </tbody>\n" +
    "\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <!--Table Wrapper Finish-->\n" +
    "    </div>\n" +
    "    <!--Start Notifications--->\n" +
    "	\n" +
    "	 <toaster-container toaster-options=\"{'position-class': 'toast-top-full-width', 'close-button':true}\"></toaster-container>\n" +
    "	<!--End Notifications-->\n" +
    "     \n" +
    "     <!-- overlay form campaign -->\n" +
    "    <div name=\"overlay\" class=\"dw-loading dw-loading-overlay dw-loading-active\" ng-show=\"optionsFormCampaign.show\" >\n" +
    "            <div class=\"dw-loading-body\" >\n" +
    "                    <div class=\"dw-loading-spinner row\">\n" +
    "                            <div class=\"panel panel-{{optionsFormCampaign.type || 'default'}} \" style=\"width:{{optionsFormCampaign.width || 550}}px\">\n" +
    "                                    <div class=\"panel-heading\" >\n" +
    "                                            <h4>{{optionsFormUser.title}}</h4>	\n" +
    "                                    </div>\n" +
    "                                    <div class=\"panel-body \" >\n" +
    "                                           <form name=\"formCampaign\" novalidate >\n" +
    "                                                    <h4>{{optionsFormCampaign.message}}</h4>								\n" +
    "                                                    <div class=\"form-group col-md-3\">\n" +
    "                                                            <!--<label for=\"mobiletrck.id\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                                    Nombre  *\n" +
    "                                                            </label>-->\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"mobiletrck.id\" name=\"mobiletrck.id\"ng-model=\"campaign.id\" placeholder=\"id\"  ng-required=\"true\" ng-disabled=\"false\">	   \n" +
    "                                                    </div>\n" +
    "                                                    \n" +
    "                                                    <div class=\"form-group col-md-6\">\n" +
    "                                                           <!-- <label for=\"mobiletrck.name\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                                    Nombre  *\n" +
    "                                                            </label>-->\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"mobiletrck.name\" name=\"mobiletrck.name\"ng-model=\"campaign.name\" placeholder=\"Nombre\"  ng-required=\"true\" ng-disabled=\"false\">	   \n" +
    "                                                    </div>\n" +
    "                                                    <div class=\"form-group col-md-6\">\n" +
    "                                                           <!-- <label for=\"mobiletrck.name\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                                    Nombre  *\n" +
    "                                                            </label>-->\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"mobiletrck.description\" name=\"mobiletrck.description\"ng-model=\"campaign.description\" placeholder=\"Descripcion\"  ng-required=\"false\" ng-disabled=\"false\">	   \n" +
    "                                                    </div>\n" +
    "                                                    <div class=\"form-group col-md-6\">\n" +
    "                                                        <img src=\"/qr-png/{{campaign.id}} alt=\"QR code\" height=\"100\" width=\"100\">\n" +
    "                                                             \n" +
    "                                        \n" +
    "                                                    </div>\n" +
    "                                                    \n" +
    "                                            </form>\n" +
    "                          <!---------------------------------->                  \n" +
    "                                            \n" +
    "   <!--                                       <div class=\"row\">\n" +
    "        <div class=\"col-md-6 col-md-offset-3\">\n" +
    "            <form action=\"r\" method=\"post\" accept-charset=\"utf-8\" class=\"form\" role=\"form\">   <legend>Sign Up</legend>\n" +
    "                    <h4>It's free and always will be.</h4>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-6 col-md-6\">\n" +
    "                            <input type=\"text\" name=\"firstname\" value=\"\" class=\"form-control input-lg\" placeholder=\"First Name\"  />                        </div>\n" +
    "                        <div class=\"col-xs-6 col-md-6\">\n" +
    "                            <input type=\"text\" name=\"lastname\" value=\"\" class=\"form-control input-lg\" placeholder=\"Last Name\"  />                        </div>\n" +
    "                    </div>\n" +
    "                    <input type=\"text\" name=\"email\" value=\"\" class=\"form-control input-lg\" placeholder=\"Your Email\"  /><input type=\"password\" name=\"password\" value=\"\" class=\"form-control input-lg\" placeholder=\"Password\"  /><input type=\"password\" name=\"confirm_password\" value=\"\" class=\"form-control input-lg\" placeholder=\"Confirm Password\"  />                    <label>Birth Date</label>                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-4 col-md-4\">\n" +
    "                            <select name=\"month\" class = \"form-control input-lg\">\n" +
    "<option value=\"01\">Jan</option>\n" +
    "\n" +
    "</select>                        </div>\n" +
    "                        <div class=\"col-xs-4 col-md-4\">\n" +
    "                            <select name=\"day\" class = \"form-control input-lg\">\n" +
    "\n" +
    "<option value=\"30\">30</option>\n" +
    "<option value=\"31\">31</option>\n" +
    "</select>                        </div>\n" +
    "                        <div class=\"col-xs-4 col-md-4\">\n" +
    "                            <select name=\"year\" class = \"form-control input-lg\">\n" +
    "\n" +
    "<option value=\"2010\">2010</option>\n" +
    "<option value=\"2011\">2011</option>\n" +
    "<option value=\"2012\">2012</option>\n" +
    "<option value=\"2013\">2013</option>\n" +
    "</select>                        </div>\n" +
    "                    </div>\n" +
    "                     <label>Gender : </label>                    <label class=\"radio-inline\">\n" +
    "                        <input type=\"radio\" name=\"gender\" value=\"M\" id=male />                        Male\n" +
    "                    </label>\n" +
    "                    <label class=\"radio-inline\">\n" +
    "                        <input type=\"radio\" name=\"gender\" value=\"F\" id=female />                        Female\n" +
    "                    </label>\n" +
    "                    <br />\n" +
    "              <span class=\"help-block\">By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span>\n" +
    "                    <button class=\"btn btn-lg btn-primary btn-block signup-btn\" type=\"submit\">\n" +
    "                        Create my account</button>\n" +
    "            </form>          \n" +
    "          </div>\n" +
    "</div>            \n" +
    "</div>  -->\n" +
    "                         <!----------------------------------->                   \n" +
    "                                    </div>\n" +
    "                                    <div class=\"panel-footer\" >\n" +
    "                                           <div class=\"row\">\n" +
    "                                                    <div class=\"col-md-offset-3 col-md-9\">  \n" +
    "                                                            <button ng-click=\"optionsFormCampaign.continue()\" ng-disabled=\"formCampaign.$invalid\"  class=\"btn btn-sm btn-primary\" >Aceptar</button> \n" +
    "                                                            <button ng-click=\"optionsFormCampaign.show=false\" class=\"btn btn-sm\">Cancelar</button> \n" +
    "                                                    </div> \n" +
    "                                            </div>\n" +
    "                                    </div>\n" +
    "                            </div>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "    </div> \n" +
    "     \n" +
    "    \n" +
    "    <!-- overlay end  --->\n" +
    "</div>\n" +
    "  \n" +
    "	\n" +
    "	\n" +
    "\n" +
    "");
}]);

angular.module("app/partials/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/partials/login/login.tpl.html",
    "<div class=\"container\">\n" +
    "    \n" +
    "\n" +
    "    <div class=\"omb_login\">\n" +
    "    	<h3 class=\"omb_authTitle\">Login or <a href=\"#\">Sign up</a></h3>\n" +
    "		<div class=\"row omb_row-sm-offset-3 omb_socialButtons\">\n" +
    "    	    <div class=\"col-xs-4 col-sm-2\">\n" +
    "		        <a href=\"#\" class=\"btn btn-lg btn-block omb_btn-facebook\">\n" +
    "			        <i class=\"fa fa-facebook visible-xs\"></i>\n" +
    "			        <span class=\"hidden-xs\">Facebook</span>\n" +
    "		        </a>\n" +
    "	        </div>\n" +
    "        	<div class=\"col-xs-4 col-sm-2\">\n" +
    "		        <a href=\"#\" class=\"btn btn-lg btn-block omb_btn-twitter\">\n" +
    "			        <i class=\"fa fa-twitter visible-xs\"></i>\n" +
    "			        <span class=\"hidden-xs\">Twitter</span>\n" +
    "		        </a>\n" +
    "	        </div>	\n" +
    "        	<div class=\"col-xs-4 col-sm-2\">\n" +
    "		        <a href=\"#\" class=\"btn btn-lg btn-block omb_btn-google\">\n" +
    "			        <i class=\"fa fa-google-plus visible-xs\"></i>\n" +
    "			        <span class=\"hidden-xs\">Google+</span>\n" +
    "		        </a>\n" +
    "	        </div>	\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row omb_row-sm-offset-3 omb_loginOr\">\n" +
    "			<div class=\"col-xs-12 col-sm-6\">\n" +
    "				<hr class=\"omb_hrOr\">\n" +
    "				<span class=\"omb_spanOr\">or</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row omb_row-sm-offset-3\">\n" +
    "			<div class=\"col-xs-12 col-sm-6\">	\n" +
    "			    <form class=\"omb_loginForm\" action=\"\" autocomplete=\"off\" method=\"POST\">\n" +
    "					<div class=\"input-group\">\n" +
    "						<span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n" +
    "						<input type=\"text\" class=\"form-control\" name=\"username\" ng-model=\"email\" placeholder=\"email\">\n" +
    "					</div>\n" +
    "					<span class=\"help-block\"></span>\n" +
    "										\n" +
    "					<div class=\"input-group\">\n" +
    "						<span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n" +
    "						<input  type=\"password\" class=\"form-control\" name=\"password\" ng-model=\"password\" placeholder=\"Password\">\n" +
    "					</div>\n" +
    "                    <span class=\"help-block\">Password error</span>\n" +
    "\n" +
    "					<button class=\"btn btn-lg btn-primary btn-block\" ng-click=\"onLogin()\">Login</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "    	</div>\n" +
    "		<div class=\"row omb_row-sm-offset-3\">\n" +
    "			<div class=\"col-xs-12 col-sm-3\">\n" +
    "				<label class=\"checkbox\">\n" +
    "					<input type=\"checkbox\" value=\"remember-me\">Remember Me\n" +
    "				</label>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-12 col-sm-3\">\n" +
    "				<p class=\"omb_forgotPwd\">\n" +
    "					<a href=\"#\">Forgot password?</a>\n" +
    "				</p>\n" +
    "			</div>\n" +
    "		</div>	    	\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        </div>");
}]);

angular.module("app/partials/new_campaign/new_campaign.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/partials/new_campaign/new_campaign.tpl.html",
    "<div class=\"row home-row-top\">\n" +
    "  <div class=\"col-md-12\">  \n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"form-group col-md-2\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"mobiletrck.id\" name=\"mobiletrck.id\"ng-model=\"campaign.id\" placeholder=\"id\"  ng-required=\"false\" ng-disabled=\"true\">	   \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"form-group col-md-10\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"mobiletrck.name\" name=\"mobiletrck.name\"ng-model=\"campaign.name\" placeholder=\"Nombre\"  ng-required=\"true\" ng-disabled=\"false\">	   \n" +
    "        </div>\n" +
    "        <div class=\"form-group col-md-12\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"mobiletrck.description\" name=\"mobiletrck.description\"ng-model=\"campaign.description\" placeholder=\"Descripcion\"  ng-required=\"false\" ng-disabled=\"false\">	   \n" +
    "        </div>\n" +
    "        <div class=\"form-group col-md-12\">\n" +
    "            <img src=\"/qr-png/{{campaign.id}}\" alt=\"QR code\" height=\"250\" width=\"250\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\" col-md-2\">\n" +
    "            <button ng-click=\"save()\" ng-disabled=\"\"  class=\"btn btn-sm btn-primary\" >Aceptar</button> \n" +
    "                                           \n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <button ng-click=\"delete()\" ng-disabled=\"\"  class=\"btn btn-sm btn-danger\" >Eliminar</button> \n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\">\n" +
    "             <button ng-click=\"cancel()\" class=\"btn btn-sm  btn-secondary\">Cancelar</button> \n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--Start Notifications--->\n" +
    "	\n" +
    "	 <toaster-container toaster-options=\"{'position-class': 'toast-top-full-width', 'close-button':true}\"></toaster-container>\n" +
    "	<!--End Notifications-->\n" +
    "     \n" +
    "     <!-- overlay form campaign -->\n" +
    "    <div name=\"overlay\" class=\"dw-loading dw-loading-overlay dw-loading-active\" ng-show=\"optionsFormCampaign.show\" >\n" +
    "            <div class=\"dw-loading-body\" >\n" +
    "                    <div class=\"dw-loading-spinner row\">\n" +
    "                            <div class=\"panel panel-{{optionsFormCampaign.type || 'default'}} \" style=\"width:{{optionsFormCampaign.width || 550}}px\">\n" +
    "                                    <div class=\"panel-heading\" >\n" +
    "                                            <h4>{{optionsFormUser.title}}</h4>	\n" +
    "                                    </div>\n" +
    "                                    <div class=\"panel-body \" >\n" +
    "                                           <form name=\"formCampaign\" novalidate >\n" +
    "                                                    <h4>{{optionsFormCampaign.message}}</h4>								\n" +
    "                                                    <div class=\"form-group col-md-3\">\n" +
    "                                                            <!--<label for=\"mobiletrck.id\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                                    Nombre  *\n" +
    "                                                            </label>-->\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"mobiletrck.id\" name=\"mobiletrck.id\"ng-model=\"campaign.id\" placeholder=\"id\"  ng-required=\"false\" ng-disabled=\"false\">	   \n" +
    "                                                    </div>\n" +
    "                                                    \n" +
    "                                                    <div class=\"form-group col-md-6\">\n" +
    "                                                           <!-- <label for=\"mobiletrck.name\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                                    Nombre  *\n" +
    "                                                            </label>-->\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"mobiletrck.name\" name=\"mobiletrck.name\"ng-model=\"campaign.name\" placeholder=\"Nombre\"  ng-required=\"true\" ng-disabled=\"false\">	   \n" +
    "                                                    </div>\n" +
    "                                                    <div class=\"form-group col-md-6\">\n" +
    "                                                           <!-- <label for=\"mobiletrck.name\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                                    Nombre  *\n" +
    "                                                            </label>-->\n" +
    "                                                            <input type=\"text\" class=\"form-control\" id=\"mobiletrck.description\" name=\"mobiletrck.description\"ng-model=\"campaign.description\" placeholder=\"Descripcion\"  ng-required=\"false\" ng-disabled=\"false\">	   \n" +
    "                                                    </div>\n" +
    "                                                    <div class=\"form-group col-md-6\">\n" +
    "                                                        <div>img src: /qr-png/{{campaign.id}} </div>\n" +
    "                                                        <img src=\"/qr-png/{{campaign.id}}\" alt=\"QR code\" height=\"100\" width=\"100\">\n" +
    "                                                             \n" +
    "                                        \n" +
    "                                                    </div>\n" +
    "                                                    \n" +
    "                                            </form>\n" +
    "                              \n" +
    "                                    </div>\n" +
    "                                    <div class=\"panel-footer\" >\n" +
    "                                           <div class=\"row\">\n" +
    "                                                    <div class=\"col-md-offset-3 col-md-9\">  \n" +
    "                                                            <button ng-click=\"optionsFormCampaign.continue()\" ng-disabled=\"formCampaign.$invalid\"  class=\"btn btn-sm btn-primary\" >Aceptar</button> \n" +
    "                                                            <button ng-click=\"optionsFormCampaign.show=false\" class=\"btn btn-sm\">Cancelar</button> \n" +
    "                                                    </div> \n" +
    "                                            </div>\n" +
    "                                    </div>\n" +
    "                            </div>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "    </div> \n" +
    "    <!-- overlay end  --->\n" +
    "        \n" +
    "  </div>\n" +
    "</div>\n" +
    "  \n" +
    "	\n" +
    "	\n" +
    "\n" +
    "");
}]);

angular.module("app/partials/qr/qr.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/partials/qr/qr.tpl.html",
    "<style>\n" +
    "    canvas{\n" +
    "    border-width: 1px;\n" +
    "    border-style: solid;\n" +
    "    border-color: #333;\n" +
    "    \n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "<div ng-show=\"!(adding || editing)\" class=\"row\">\n" +
    "    <div ng-include src=\"'app/layout/navbar/navbar.tpl.html'\"></div>\n" +
    "</div>\n" +
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "        <div class=\"alert alert-info\" style=\"text-align:center\"> <strong>Campaña:</strong>  {{campaign.name}}</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\" id=\"page-notas\">\n" +
    "    <style>\n" +
    "        #grid-snap {\n" +
    "		  width: 40%;\n" +
    "		  background-color: #29e;\n" +
    "		  color: #fff;\n" +
    "		  font-size: 1.2em;\n" +
    "		  border-radius: 4px;\n" +
    "		  padding: 2%;\n" +
    "		  margin: 5%;\n" +
    "		}    \n" +
    "    </style>\n" +
    "    \n" +
    "    \n" +
    "	<div class=\"row\">\n" +
    "		\n" +
    "    <div id=\"content\">\n" +
    "         <div id=\"content-header\">\n" +
    "            \n" +
    "            \n" +
    "           <!-- <img src=\"/qr-png/{{id_campaign}}\" alt=\"QR code\" height=\"350\" width=\"350\"></td>-->\n" +
    "         </div>\n" +
    "         \n" +
    "         <div class=\"container-fluid\">\n" +
    "            <div class=\"row-fluid\">\n" +
    "               <div class=\"alert alert-warning\"> <strong>Scanee el código QR antes de publicardo:</strong> utilice diferentes dispositivos para comprobar que es leido correctamente.</div>\n" +
    "               <div class=\"btn-toolbar\">\n" +
    "                  <div class=\"btn-group\">\n" +
    "                     <button class=\"btn btn-warning\" data-toggle=\"dropdown\">Descargar...</button> <button class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\"> <span class=\"caret\"></span> </button>\n" +
    "                     <ul class=\"dropdown-menu\">\n" +
    "                        <li> <a id=\"btn_canvas_to_png\" ng-click=\"qrPngCustom()\"><i class=\"icon-arrow-down icon-white\"></i> PNG (raster)</a></li>\n" +
    "                        <!--<li> <a id=\"btn_canvas_to_png\"  href=\"/qr-png-custom/{{campaign.id}}\"><i class=\"icon-arrow-down icon-white\"></i> PNG (raster)</a></li>-->\n" +
    "                        <li> <a id=\"btn_canvas_to_jpg\"  ng-click=\"qrJpgCustom()\"><i class=\"icon-arrow-down icon-white\"></i> JPG (raster)</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li> <a id=\"btn_canvas_to_svg\"  href=\"/qr-svg-custom/{{campaign.id}}\"><i class=\"icon-arrow-down icon-white\"></i> SVG (vector)</a></li>\n" +
    "                        <!--\n" +
    "                        <li> <a id=\"btn_canvas_to_pdf\"><i class=\"icon-arrow-down icon-white\"></i> PDF (vector)</a></li>\n" +
    "                        <li> <a href=\"/backstage/downloadEPSQR?qr_codes_ids=310524\"><i class=\"icon-arrow-down icon-white\"></i> EPS (blanco y negro)</a></li>\n" +
    "                        -->\n" +
    "                     </ul>\n" +
    "                  </div>\n" +
    "               </div>\n" +
    "                <br>\n" +
    "               <div class=\"row pull-leftss\">\n" +
    "                  <div class=\"col-md-3 well sidebar-nav clearfixxx\">\n" +
    "                      \n" +
    "                      <!-- Canvas -->\n" +
    "                     <fieldset>\n" +
    "                         <div class=\"form-inline row-spaced\"></div>\n" +
    "\n" +
    "                         <h4>Propiedades canvas</h4>\n" +
    "\n" +
    "                          <label for=\"canvasBgColor\" class=\"ng-binding\">Color fondo {{canvasBgColor}}</label>\n" +
    "                          <div class=\"minicolors minicolors-theme-bootstrap minicolors-position-bottom minicolors-position-left minicolors-focus\">\n" +
    "                              <input minicolors=\"\" id=\"canvasBgColor\" class=\"form-control minicolors-input\" type=\"text\" ng-model=\"canvasBgColor\" ng-change=\"onChangeCanvasBgColor(canvasBgColor)\" size=\"7\">\n" +
    "\n" +
    "                          </div>\n" +
    "\n" +
    "                         <br>\n" +
    "                         <label for=\"canvas_width\" class=\"inline-label\">\n" +
    "                            Ancho (px)\n" +
    "                          </label> \n" +
    "                          <div class=\"input-group\">\n" +
    "                              <input  ng-model=\"canvasWidth\"  id=\"canvas_width\" type=\"text\" class=\"form-control\">\n" +
    "                              <span class=\"input-group-addon\" id=\"basic-addon2\"><span class=\"fa fa-arrows-h\" tooltip=\"Estás dimensiones en pixeles.\"></span></span>\n" +
    "                          </div>\n" +
    "\n" +
    "                          <br>\n" +
    "                         <label for=\"canvas_height\" class=\"inline-label\">\n" +
    "                                 Alto (px)\n" +
    "                          </label> \n" +
    "                          <div class=\"input-group\">\n" +
    "                              <input  ng-model=\"canvasHeight\"  id=\"canvas_height\" type=\"text\" class=\"form-control\">\n" +
    "                              <span class=\"input-group-addon\" id=\"canvas_height\"><span class=\"fa fa-arrows-h\" tooltip=\"Estás dimensiones en pixeles.\"></span></span>\n" +
    "                          </div>\n" +
    "                        \n" +
    "                      </fieldset>\n" +
    "                      <br>\n" +
    "                      \n" +
    "                      <!-- Canvas -->\n" +
    "                      <fieldset>\n" +
    "                        <div class=\"row-spaced\">\n" +
    "                            <h4>Propiedades código QR</h4>\n" +
    "                           \n" +
    "                           <label for=\"qrFrColor\" class=\"ng-binding\">Color código QR</label>\n" +
    "                            <div class=\"minicolors minicolors-theme-bootstrap minicolors-position-bottom minicolors-position-right minicolors-focus\">\n" +
    "                                  <input minicolors=\"\" id=\"canvasBgColor\" class=\"form-control minicolors-input\" type=\"text\" ng-model=\"qrFrColor\" ng-change=\"onChangeQrFrColor(qrFrColor)\" size=\"7\">\n" +
    "                            </div> \n" +
    "                            \n" +
    "                            <br>\n" +
    "                          \n" +
    "                            <label for=\"qrBgColor\" class=\"ng-binding\">Color fondo código QR</label>\n" +
    "                            <div class=\"minicolors minicolors-theme-bootstrap minicolors-position-bottom minicolors-position-right minicolors-focus\">\n" +
    "                                      <input minicolors=\"\" id=\"qrBgColor\" class=\"form-control minicolors-input\" type=\"text\" ng-model=\"qrBgColor\" ng-change=\"onChangeQrBgColor(qrBgColor)\" size=\"7\">\n" +
    "                            </div> \n" +
    "                            \n" +
    "                            \n" +
    "                            <br>\n" +
    "                            <div class=\"row-spaced-no-border\"> \n" +
    "                             <label for=\"qr_code_background_image\" class=\"inline-label\">\n" +
    "                                 Imagen fondo\n" +
    "                             </label> \n" +
    "                             <br/> \n" +
    "                             <!--<input type=\"file\" id=\"qr_code_background_image\" ng-model=\"qr_code_background_image\" ng-change=\"onChangeFileBgImg()\" name=\"background\"/>-->\n" +
    "                             <div class=\"btn btn-primary\" name=\"file\" ngf-select=\"uploadBgImg($file)\" ngf-pattern=\"'image/*'\" ngf-accept=\"'image/*'\" ngf-max-size=\"20MB\" >Seleccione una imagen...</div>\n" +
    "                             \n" +
    "                            </div>\n" +
    "                            \n" +
    "                            <br>\n" +
    "                            <div class=\"row-spaced-no-border\"> \n" +
    "                             <label for=\"qr_code_logo_image\" class=\"inline-label\">\n" +
    "                                 Logo\n" +
    "                             </label> <i class=\"tiptop icon-info-sign\" tooltip=\"No cubra más del 30% del código  QR con esta imagen ni ninguno de los cuadrados grandes. ¡ Escanéelo antes de publicarlo!\"></i> \n" +
    "                             <br/> \n" +
    "                             <!--<input type=\"file\" id=\"qr_code_logo_image\" name=\"logo\"/>-->\n" +
    "                             <div class=\"btn btn-primary\" name=\"file\" ngf-select=\"uploadLogoImg($file)\" ngf-pattern=\"'image/*'\" ngf-accept=\"'image/*'\" ngf-max-size=\"20MB\">Seleccione una imagen...</div>\n" +
    "                            \n" +
    "                          </div>\n" +
    "                          <br>\n" +
    "                          <div class=\"form-inline row-spaced\">\n" +
    "                            <div class=\"row-spaced-no-border\">\n" +
    "                               \n" +
    "                               <label>Nivel corrección de error</label> \n" +
    "                               <select class=\"form-control\" id=\"qr_code_error_correction\" ng-model=\"qrCorrectionLevel\">\n" +
    "                                  <option value=\"1\" selected>L (por defecto)</option>\n" +
    "                                  <option value=\"0\">M</option>\n" +
    "                                  <option value=\"3\">Q</option>\n" +
    "                                  <option value=\"2\">H</option>\n" +
    "                               </select>\n" +
    "                               <i class=\"tiptop icon-info-sign\" tooltip=\"Modifique esto si sabe lo que está haciendo.\"></i>\n" +
    "                            </div>\n" +
    "                         </div>\n" +
    "                            \n" +
    "                            \n" +
    "                            \n" +
    "                        </div>\n" +
    "                         \n" +
    "                       \n" +
    "                     </fieldset>\n" +
    "                      <br>\n" +
    "                     <!-- Actions -->\n" +
    "                     <fieldset>\n" +
    "                         \n" +
    "                          <button type=\"button\" class=\"btn btn-primary btn-cons\"  ng-click=\"onClickRestoreQr()\" tooltip=\"Con esta acción restaurará su código QR al clasico código QR en blanco y negro.\">Restaurar</button>\n" +
    "\n" +
    "                          <!-- Indicates a successful or positive action -->\n" +
    "                          <button type=\"button\" class=\"btn btn-danger btn-cons\"  ng-click=\"onClickDeleteSelectedObject()\" tooltip=\"Con esta acción eliminará el objeto seleccionado\" >\n" +
    "                               <i class=\"fa fa-trash\"></i>\n" +
    "                          </button>\n" +
    "                         \n" +
    "                     \n" +
    "                    </fieldset>\n" +
    "                     \n" +
    "                  </div>\n" +
    "          \n" +
    "                 <div  id=\"scrolldiv\" class=\"col-md-8 well\" > <!-- style=\"position: absolute; top: 235px; left: 50%; padding:10px; margin-left: -30px; \"  -->\n" +
    "                   \n" +
    "                   <canvas id=\"qrcontainer\" width=\"600\" height=\"600\" style=\"bacground-color:grey\"></canvas>\n" +
    "                  \n" +
    "               </div>\n" +
    "			  \n" +
    "              \n" +
    "            </div>\n" +
    "         </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "    \n" +
    "");
}]);

angular.module("app/partials/statistics/statistics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/partials/statistics/statistics.tpl.html",
    "<div ng-include src=\"'app/layout/navbar/navbar.tpl.html'\"></div>\n" +
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "        <div class=\"alert alert-info\" style=\"text-align:center\"> <strong>Campaña:</strong>  {{campaign.name}}</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- Init global stadistic -->\n" +
    "<div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        Resultados globales\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\"  style=\"padding:10px\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                <div class=\"offer offer-default\">\n" +
    "                    <div class=\"shape\">\n" +
    "                        <div class=\"shape-text\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"offer-content\">\n" +
    "                        <h3>\n" +
    "                            <strong>Visitas totales</strong>\n" +
    "                        </h3>\n" +
    "                        \n" +
    "                        <h2><strong>9</strong></h2>\n" +
    "                        \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                <div class=\"offer offer-success\">\n" +
    "                    <div class=\"shape\">\n" +
    "                        <div class=\"shape-text\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"offer-content\">\n" +
    "                        <h3>\n" +
    "                            <strong>Total páginas vistas</strong>\n" +
    "                        </h3>\n" +
    "                        \n" +
    "                        <h2><strong>934</strong></h2>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                <div class=\"offer offer-radiusxx offer-primary\">\n" +
    "                    <div class=\"shape\">\n" +
    "                        <div class=\"shape-text\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"offer-content\">\n" +
    "                        <h3>\n" +
    "                            <strong>Porcentaje nuevas visitas</strong>\n" +
    "                        </h3>\n" +
    "                        \n" +
    "                        <h2><strong>47%</strong></h2>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div> \n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- End global stadistic -->\n" +
    "\n" +
    "<!-- Init filters -->\n" +
    "<div class=\"panel panel-yellow\">\n" +
    "    <div class=\"panel-heading panel-title\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                Fecha desde\n" +
    "                <input type=\"date\" class=\"form-control\" ng-model=\"fechaDesde\" ng-change=\"onChangeFechaDesde()\" />\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                Fecha hasta\n" +
    "                <input type=\"date\" class=\"form-control\" ng-model=\"fechaHasta\" ng-change=\"onChangeFechaHasta()\" />\n" +
    "            </div>\n" +
    "            \n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                <span>&nbsp;</span>\n" +
    "                <button class=\"btn btn-primary btn-block\" ng-click=\"onClickFilter()\">\n" +
    "                    Consultar\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>						\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End filters -->\n" +
    "\n" +
    "<!-- Init Sumary -->\n" +
    "<div class=\"panel panel-info\">\n" +
    "    <div class=\"panel-heading panel-title\">\n" +
    "        <i class=\"fa fa-signal\"></i>   Sumario <span ng-show=\"showLabelFilterDates\" >( Resultados desde {{fechaDesde}} hasta {{fechaHasta}})</span>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" style=\"padding:20px\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n" +
    "               <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-user\"></i>  Usuarios <span class=\"badge\"><strong>23456</strong></span></button>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n" +
    "                <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-list-alt\"></i>  Páginas vista <span class=\"badge\"><strong>23456</strong></span></button>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n" +
    "               <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-arrow-right\"></i>  Nuevas visitas <span class=\"badge\"><strong>40%</strong></span></button>\n" +
    "            </div>\n" +
    "        </div>						\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End sumary -->\n" +
    "\n" +
    "<!-- Init Daily Analitics -->\n" +
    "<div class=\"panel panel-info\">\n" +
    "    <div class=\"panel-heading panel-title\">\n" +
    "        <i class=\"fa fa-signal\"></i>   Análisis diario <span ng-show=\"showLabelFilterDates\" >( Resultados desde {{fechaDesde}} hasta {{fechaHasta}})</span>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" style=\"padding:20px\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "                <!-- chart lines -->  \n" +
    "                <div>\n" +
    "                   <nvd3 options=\"optionsAD\" data=\"dataAD\"></nvd3>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>						\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End Daily Analitics -->\n" +
    "\n" +
    "<!-- Init Countries -->\n" +
    "<div class=\"panel panel-info\">\n" +
    "    <div class=\"panel-heading panel-title\">\n" +
    "        <i class=\"fa fa-signal\"></i>   Paises <span ng-show=\"showLabelFilterDates\" >( Resultados desde {{fechaDesde}} hasta {{fechaHasta}})</span>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" style=\"padding:20px\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "               <!-- map chart -->  \n" +
    "                <globe data=\"data\"></globe>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>						\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End countries -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Init Cities -->\n" +
    "<div class=\"panel panel-info\">\n" +
    "    <div class=\"panel-heading panel-title\">\n" +
    "        <i class=\"fa fa-signal\"></i>   Ciudades <span ng-show=\"showLabelFilterDates\" >( Resultados desde {{fechaDesde}} hasta {{fechaHasta}})</span>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" style=\"padding:20px\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "              <!-- table -->  \n" +
    "                 <table class=\"table table-bordered table-hover table-condensed\">\n" +
    "                    <thead>\n" +
    "                      <tr>\n" +
    "                        <th width=\"30%\">País</th>\n" +
    "                        <th width=\"30%\">Ciudad</th>\n" +
    "                        <th width=\"10%\">Visitas</th>\n" +
    "                        <th width=\"15%\">Páginas vistas</th>\n" +
    "                        <th width=\"15%\">Porcentaje nuevas visitas</th>\n" +
    "                      </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                      <tr>\n" +
    "                        <td>España</td>\n" +
    "                        <td>Murcia</td>\n" +
    "                        <td>44567</td>\n" +
    "                        <td>46567</td>\n" +
    "                        <td>35%</td>\n" +
    "                        \n" +
    "                      </tr>\n" +
    "                      <tr>\n" +
    "                        <td>España</td>\n" +
    "                        <td>Almería</td>\n" +
    "                        <td>34567</td>\n" +
    "                        <td>40567</td>\n" +
    "                        <td>45%</td>\n" +
    "                      </tr>\n" +
    "                      <tr>\n" +
    "                        <td>España</td>\n" +
    "                        <td>Alicante</td>\n" +
    "                        <td>11567</td>\n" +
    "                        <td>445667</td>\n" +
    "                        <td>55%</td>\n" +
    "                      \n" +
    "                    </tbody>\n" +
    "                  </table> \n" +
    "            </div>\n" +
    "            \n" +
    "        </div>						\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End Cities -->\n" +
    "\n" +
    "<!-- Init Operating Systems -->\n" +
    "<div class=\"panel panel-info\">\n" +
    "    <div class=\"panel-heading panel-title\">\n" +
    "        <i class=\"fa fa-signal\"></i>   Sistemas operativos <span ng-show=\"showLabelFilterDates\" >( Resultados desde {{fechaDesde}} hasta {{fechaHasta}})</span>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" style=\"padding:20px\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "              <!-- pie chart -->  \n" +
    "                <div>\n" +
    "                   <nvd3 options='optionsSO' data='dataSO'></nvd3>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>						\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End  Operating Systems -->\n" +
    "\n" +
    "<!-- Init Browsers -->\n" +
    "<div class=\"panel panel-info\">\n" +
    "    <div class=\"panel-heading panel-title\">\n" +
    "         <i class=\"fa fa-signal\"></i>   Navegadores <span ng-show=\"showLabelFilterDates\" >( Resultados desde {{fechaDesde}} hasta {{fechaHasta}})</span>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" style=\"padding:20px\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "              <!-- pie chart -->  \n" +
    "                <div>\n" +
    "                   <nvd3 options='optionsBR' data='dataBR'></nvd3>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>						\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End  Browsers -->\n" +
    "\n" +
    "<!-- Init Mobile devices -->\n" +
    "<div class=\"panel panel-info\">\n" +
    "    <div class=\"panel-heading panel-title\">\n" +
    "        <i class=\"fa fa-signal\"></i>   Dispositivos móviles <span ng-show=\"showLabelFilterDates\" >( Resultados desde {{fechaDesde}} hasta {{fechaHasta}})</span>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" style=\"padding:20px\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "              <!-- pie chart -->  \n" +
    "               <div>\n" +
    "                   <nvd3 options='optionsMD' data='dataMD'></nvd3>\n" +
    "                </div> \n" +
    "            </div>\n" +
    "            \n" +
    "        </div>						\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End  Mobile Devices -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("app/partials/users/users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/partials/users/users.tpl.html",
    "<div ng-show=\"!(adding || editing)\" class=\"row\">\n" +
    "    <div ng-show=\"!(adding || editing)\" class=\"row\">\n" +
    "        <div ng-include src=\"'app/layout/navbar/navbar.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"!(adding || editing)\" class=\"row  home-row-top\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <!--Table Wrapper Start-->\n" +
    "        <div class=\"table-responsive ls-table\">\n" +
    "            <table class=\"table table-bordered table-striped table-responsive\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>Id</th>\n" +
    "                    <th>Email</th>\n" +
    "                    <th>Descripcion</th>\n" +
    "                    <th>Acciones</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"user in users\">\n" +
    "                        <td>{{user.id}}</td>\n" +
    "                        <td>{{user.email}}</td>\n" +
    "                        <td>{{user.description}}</td>\n" +
    "                        <td>\n" +
    "                            <button ng-click=\"onAction('edit',user.id)\" class=\"btn btn-xs btn-info\" style=\"margin:3px\" tooltip=\"Editar campaña\"><i class=\"fa fa-pencil\"></i></button>\n" +
    "                            <button ng-click=\"onAction('delete',user.id)\" class=\"btn btn-xs ls-red-btn\" style=\"margin:3px\" tooltip=\"Eliminar campaña\"><i class=\"fa fa-trash\"></i></button>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td colspan=\"4\"> \n" +
    "                            <div  ng-click=\"onAction('new')\" class=\"btn btn-primary\"><i class=\"fa fa-plus\">  Añadir Usuario</i></div>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                \n" +
    "              </tbody>\n" +
    "\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <!--Table Wrapper Finish-->\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- overlay form user -->\n" +
    "<div class=\"row\" ng-show=\"adding || editing\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div class=\"panel panel-primary\">\n" +
    "                <div class=\"panel-heading\" >\n" +
    "                        <h4>Usuario</h4>	\n" +
    "                </div>\n" +
    "                <div class=\"panel-body \" >\n" +
    "                       <form name=\"formUser\" novalidate >\n" +
    "                                <h4>{{message}}</h4>								\n" +
    "                                <div class=\"form-group col-md-3\">\n" +
    "                                        <label for=\"user.id\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                Id\n" +
    "                                        </label>\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"user.id\" name=\"user.id\"ng-model=\"user.id\" placeholder=\"\"  ng-required=\"false\" ng-disabled=\"true\">	   \n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-6\">\n" +
    "                                       <label for=\"user.email\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                Email  *\n" +
    "                                        </label>\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"user.email\" name=\"user.email\"ng-model=\"user.email\" placeholder=\"\"  ng-required=\"true\" ng-disabled=\"false\">	   \n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-6\">\n" +
    "                                       <label for=\"user.description\" class=\"ng-binding\" style=\"align:left\">\n" +
    "                                                Descripcion\n" +
    "                                        </label>\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"user.description\" name=\"user.description\"ng-model=\"user.description\" placeholder=\"\"  ng-required=\"false\" ng-disabled=\"false\">	   \n" +
    "                                </div>\n" +
    "                        </form>\n" +
    "                </div>\n" +
    "                <div class=\"panel-footer\" >\n" +
    "                       <div class=\"row\">\n" +
    "                                <div class=\"col-md-offset-3 col-md-9\">  \n" +
    "                                        <button ng-click=\"save()\" ng-disabled=\"formUser.$invalid\"  class=\"btn btn-sm btn-primary\" >Aceptar</button> \n" +
    "                                        <button ng-click=\"cancel()\" class=\"btn btn-sm\">Cancelar</button> \n" +
    "                                </div> \n" +
    "                        </div>\n" +
    "                </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);
