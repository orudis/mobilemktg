angular.module('app.statistics', [
 'ngRoute',
 'nvd3'
]);

angular.module('app').requires.push('app.statistics');

angular.module('app.statistics')
.config(function config($routeProvider) {
	$routeProvider.when('/statistics/:id', {
		templateUrl: 'app/partials/statistics/statistics.tpl.html',
		controller:'statisticsCtrl'
	});
})
.directive("globe", function() {
        return {
            restrict   : 'E',
            scope      : {
                data: '=?'
            },
            template: 
            '<div class="globe-wrapper">' +
                '<div class="globe"></div>' +
                '<div class="info"></div>' +
            '</div>',
            link: link
        };
        
        function link(scope, element, attrs) {
            var width = 1000, height = width/2, 
                projection, path,
                svg, features, graticule,
                mapJson = 'https://gist.githubusercontent.com/GordyD/49654901b07cb764c34f/raw/27eff6687f677c984a11f25977adaa4b9332a2a9/countries-and-states.json',
                states, stateSet, countries, countrySet, zoom;
            
          /*  projection =d3.geo.orthographic()
                .translate([width / 2, height / 2])
                .scale(250)
                .clipAngle(90)
                .precision(0.1)
                .rotate([0, -30]);
           */
          /*  var projection = d3.geo.mercator()
            .scale(1*(width + 1) / 2 / Math.PI)
            .translate([width / 2, height / 2])
            .rotate([0, -30])
            .precision(.1);
          */ 
            
            var projection =d3.geo.equirectangular()
            .scale(153)
            .translate([width / 2, height / 2])
            .precision(.1);
            
            path = d3.geo.path()
                .projection(projection);
            
            svg = d3.select(element[0]).select('.globe')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .attr('viewBox', '0, 0, ' + width + ', ' + height);
           
            features = svg.append('g');
            
            features.append('path')
                .datum({type: 'Sphere'})
                .attr('class', 'background')
                .attr('d', path);
            
            graticule = d3.geo.graticule();

            features.append('path')
              .datum(graticule)
              .attr('class', 'graticule')
              .attr('d', path);
            
            zoom = d3.geo.zoom()
              .projection(projection)
              .scaleExtent([projection.scale() * 0.7, projection.scale() * 8])
              .on('zoom.redraw', function(){
                d3.event.sourceEvent.preventDefault();
                svg.selectAll('path').attr('d',path);
              });
            
            d3.json(mapJson, function(error, world) {
                states = topojson.feature(world, world.objects.states).features;
                countries = topojson.feature(world, world.objects.countries).features;
                
                stateSet = drawFeatureSet('state', states);
                countrySet = drawFeatureSet('country', countries);
                
                d3.selectAll('path').call(zoom);
            });
            
            function drawFeatureSet(className, featureSet) {
                var set  = features.selectAll('.' + className)
                .data(featureSet)
                .enter()
                .append('g')
                .attr('class', className)
                .attr('data-name', function(d) {
                    return d.properties.name;
                })
                .attr('data-id', function(d) {
                    return d.id;
                });
                
                set.append('path')
                .attr('class', 'land')
                .attr('d', path);
                
                set.append('path')
                .attr('class', 'overlay')
                .attr('d', path)
                .attr('style', function(d) {
                    if (scope.data[d.id]) {
                        return 'fill-opacity: ' + (scope.data[d.id]/100);
                    }
                })
                .on('click', function(d) {
                    var val = (scope.data[d.id]) ? scope.data[d.id] : 0;
                    d3.select(element[0]).select('.info').html(d.properties.name + ': ' + val);
                    
                    rotateToFocusOn(d);
                }); 
                
                return set;
            }
            
            function rotateToFocusOn(x) {
                var coords = d3.geo.centroid(x);
                coords[0] = -coords[0];
                coords[1] = -coords[1];
                
                d3.transition()
                .duration(1250)
                .tween('rotate', function() {
                    var r = d3.interpolate(projection.rotate(), coords);
                    return function(t) {
                        projection.rotate(r(t));
                        svg.selectAll('path').attr('d', path);
                    };
                })
                .transition();
            }
        }
})

 
     

.controller('statisticsCtrl', function($rootScope,$scope,$routeParams,$location,toaster,dataFactoryApp) {
      
    var id_campaign=$routeParams.id;

	//---------------------------------------------------------------------
	//  navbar
	//--------------------------------------------------------------------- 
    $scope.navbar={};
    $scope.navbar.home={show:true,active:false};
    $scope.navbar.qr={show:true,active:false};
    $scope.navbar.editweb={show:true,active:false};
    $scope.navbar.statistics={show:true,active:true};
    $scope.navbar.users={show:true,active:false};
    
    
    $scope.onAction=function(action,id){
          switch(action) {
            case 'qr':
                $location.path('/qr/'+id_campaign);
                break;
            case 'config':
                $location.path('/config/'+id_campaign);
                break;
            case 'editweb':
                $location.path('/editweb/'+id_campaign);
                break;
            case 'users':
                $location.path('/users/'+$rootScope.user.id);
                break;
            case 'home':
                $location.path('/campaigns');
                break;
          }
    }
  
  /* Countries*/  
     $scope.data = {
            '088': 99,
            '012': 45,
            '262': 56,
            '276': 80, //Germany
            '380': 56, //Italy
            '372': 25, //Ireland,
            '024': 56,
            '032': 12,
            '008': 67,
            '004': 56,
            '051': 12,
            '784': 67,
            
            '152': 89,
            '156': 45,
            '384': 51,
            '170': 73,
            '818': 49,
            '208': 66,
            '724': 9,
            '250': 31,
            '242': 51,
            '356': 87,
            '826': 19,
            '360': 26,            
            
            '3514': 63,
            '3515': 47,
            '3516': 47,
            '3517': 63,
            '3518': 47,
            '3519': 47,
            '3520': 67,
            '3521': 19,
            '3522': 71,
            '3523': 36,
            '3524': 56,
            '3525': 12,
            '3526': 67,
            '3527': 19,
            '3528': 71,
            '3529': 36,
            '3530': 56, 
            '3531': 12,
            '3532': 71,
            '3533': 36,
            '3534': 56,
            '3535': 12,
            '3536': 67,
            '3537': 19,
            '3538': 71,
            '3539': 36,
            '3540': 56,
            '3541': 19,
            '3542': 71,
            '3543': 36,
            '3544': 56,
            '3545': 12,
            '3546': 67,
            '3547': 19,
            '3548': 71,
            '3549': 36,
            '3550': 56, 
            '3551': 12,
            '3552': 71,
            '3553': 21,
            '3554': 34,
            '3555': 45,
            '3556': 5,
            '3557': 25,
            '3558': 56,
            '3559': 36,
            '3560': 56,
            '3561': 19,
            '3562': 71,
            '3563': 36
        };  
    
    
    
 	
/*Inicialización de variables*/
	
		
	$scope.optionsAD = {
        chart: {
            type: 'lineWithFocusChart',
            height: 250,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 55
            },
            x: function(d){return d.label;},
            y: function(d){return d.value;},
            showValues: true,
            valueFormat: function(d){
                return d3.format('.0f')(d);
            },
            transitionDuration: 100,
            xAxis: {
                axisLabel: 'Día'
            },
            yAxis: {
                axisLabel: 'Visitas',
                axisLabelDistance: 30
            }
        }
    };
     function testData() {
        return stream_layers(1,60,1.0).map(function(data, i) {
            return {
                key: 'Campaña ' + i+1,
                area: i === 1,
                values: data
            };
        });
    }
var tData=testData();
    $scope.dataAD=tData;
  
//PIE CHART	 SISTEMAS OPERATIVOS
    	$scope.optionsSO = {
        chart: {
            type: 'pieChart',
            height: 250,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
			//color:function (d, i) { return d.color },
			color:function(d, i) {
					var colorArray = ['#ff0e16', '#f70eff', '#7f0eff', '#ffbb98', '#16ff0e,#ff0e16', '#340eff', '#140eff', '#9fbb98', '#46440e'];
					return colorArray[i];
			},
            showLabels: true,
			labelType:"percent",
            transitionDuration: 500,
            labelThreshold: 0.01,
            legend: {
                margin: {
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: -100
                }
            }
        }
    };
	
	$scope.dataSO = [
        {
            key: "iOS",
            y: 200
        },
        {
            key: "Android",
            y: 4045
        },
        {
            key: "Windows Phone",
            y: 254
        },
        {
            key: "Desconocido",
            y: 10
        },
        {
            key: "BlackBerry",
            y: 50
        },
        {
            key: "Windows",
            y: 123
        }
    ];
    
  //PIE CHART	 BROWSERS
	$scope.optionsBR = {
        chart: {
            type: 'pieChart',
            height: 250,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
			//color:function (d, i) { return d.color },
			color:function(d, i) {
					var colorArray = ['#ff0e16', '#f70eff', '#7f0eff', '#ffbb98', '#16ff0e,#ff0e16', '#340eff', '#140eff', '#9fbb98', '#46440e'];
					return colorArray[i];
			},
            showLabels: true,
			labelType:"percent",
            transitionDuration: 500,
            labelThreshold: 0.01,
            legend: {
                margin: {
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: -100
                }
            }
        }
    };
	
	$scope.dataBR = [
        {
            key: "Chrome",
            y: 2000
        },
        {
            key: "Android Browser",
            y: 2345
        },
        {
            key: "Safari",
            y: 234
        },
        {
            key: "Internet Explorer",
            y: 67
        },
        {
            key: "FireFox",
            y: 234
        },
        {
            key: "Opera",
            y: 88
        }
    ];
	
     //PIE CHART	 BROWSERS
	$scope.optionsMD = {
        chart: {
            type: 'pieChart',
            height: 250,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
			//color:function (d, i) { return d.color },
			color:function(d, i) {
					var colorArray = ['#ff0e16', '#f70eff', '#7f0eff', '#ffbb98', '#16ff0e,#ff0e16', '#340eff', '#140eff', '#9fbb98', '#46440e'];
					return colorArray[i];
			},
            showLabels: true,
			labelType:"percent",
            transitionDuration: 500,
            labelThreshold: 0.01,
            legend: {
                margin: {
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: -100
                }
            }
        }
    };
	
	$scope.dataMD = [
        {
            key: "iPhone",
            y: 2456
        },
        {
            key: "Samsung",
            y: 4000
        },
        {
            key: "Safari",
            y: 234
        },
        {
            key: "Motorola",
            y: 125
        },
        {
            key: "Desconocido",
            y: 45
        },
        {
            key: "iPad",
            y: 88
        }
    ];
    

	  
  
	  
    //$scope.dataOS = generateData();

    /* Random Data Generator (took from nvd3.org) */
    function generateData() {
        return stream_layers(1,0+Math.random()*24,0.1).map(function(data, i) {
            return {
                key: 'Campaña' + i+1,
                values: data
            };
        });
    }

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;
        function bump(a) {
            var x = 24 / (.1 + Math.random()),
                y = 20 * Math.random() - .5,
                z = 1 / (.01 + Math.random());
            for (var i = 0; i < m; i++) {
                var w = (i / m - y) * z;
                a[i] += x * Math.exp(-w * w);
            }
        }
        
        return d3.range(n).map(function() {
            var a = [], i;
            for (i = 0; i < m; i++) a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++) bump(a);
            return a.map(stream_index);
        });
    }

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
        return d3.range(n).map(function(i) {
            return d3.range(m).map(function(j) {
                var x = 20 * j / m - i / 3;
                return 2 * x * Math.exp(-.5 * x);
            }).map(stream_index);
        });
    }

    function stream_index(d, i) {
        return {x: i, y: Math.max(0, d)};
    }
    
    
    
    $scope.onClickFilter=function(){
		$scope.showLabelFilterDates=true;

	
    }
    
    
    
    
    
    
// Copyright (c) 2013, Jason Davies, http://www.jasondavies.com
// See LICENSE.txt for details.

/* global d3 */
var radians = Math.PI / 180,
    degrees = 180 / Math.PI;

// TODO make incremental rotate optional

d3.geo.zoom = function() {
  var projection,
      zoomPoint,
      event = d3.dispatch('zoomstart', 'zoom', 'zoomend'),
      zoom = d3.behavior.zoom()
        .on('zoomstart', function() {
          var mouse0 = d3.mouse(this),
              rotate = quaternionFromEuler(projection.rotate()),
              point = position(projection, mouse0);
          if (point) {
            zoomPoint = point;
          }

          zoomOn.call(zoom, 'zoom', function() {
                projection.scale(d3.event.scale);
                var mouse1 = d3.mouse(this),
                    between = rotateBetween(zoomPoint, position(projection, mouse1));
                projection.rotate(eulerFromQuaternion(rotate = between
                    ? multiply(rotate, between)
                    : multiply(bank(projection, mouse0, mouse1), rotate)));
                mouse0 = mouse1;
                event.zoom.apply(this, arguments);
              });
          event.zoomstart.apply(this, arguments);
        })
        .on('zoomend', function() {
          zoomOn.call(zoom, 'zoom', null);
          event.zoomend.apply(this, arguments);
        }),
      zoomOn = zoom.on;

  zoom.projection = function(_) {
    return arguments.length ? zoom.scale((projection = _).scale()) : projection;
  };

  return d3.rebind(zoom, event, 'on');
};

function bank(projection, p0, p1) {
  var t = projection.translate(),
      angle = Math.atan2(p0[1] - t[1], p0[0] - t[0]) - Math.atan2(p1[1] - t[1], p1[0] - t[0]);
  return [Math.cos(angle / 2), 0, 0, Math.sin(angle / 2)];
}

function position(projection, point) {
  var t = projection.translate(),
      spherical = projection.invert(point);
  return spherical && isFinite(spherical[0]) && isFinite(spherical[1]) && cartesian(spherical);
}

function quaternionFromEuler(euler) {
  var i1 = 0.5 * euler[0] * radians,
      i2 = 0.5 * euler[1] * radians,
      i3 = 0.5 * euler[2] * radians,
      sini1 = Math.sin(i1), cosi1 = Math.cos(i1),
      sini2 = Math.sin(i2), cosi2 = Math.cos(i2),
      sini3 = Math.sin(i3), cosi3 = Math.cos(i3);
  return [
    cosi1 * cosi2 * cosi3 + sini1 * sini2 * sini3,
    sini1 * cosi2 * cosi3 - cosi1 * sini2 * sini3,
    cosi1 * sini2 * cosi3 + sini1 * cosi2 * sini3,
    cosi1 * cosi2 * sini3 - sini1 * sini2 * cosi3
  ];
}

function multiply(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
      b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return [
    a0 * b0 - a1 * b1 - a2 * b2 - a3 * b3,
    a0 * b1 + a1 * b0 + a2 * b3 - a3 * b2,
    a0 * b2 - a1 * b3 + a2 * b0 + a3 * b1,
    a0 * b3 + a1 * b2 - a2 * b1 + a3 * b0
  ];
}

function rotateBetween(a, b) {
  if (!a || !b) {
    return;
  }
  var axis = cross(a, b),
      norm = Math.sqrt(dot(axis, axis)),
      halfi3 = 0.5 * Math.acos(Math.max(-1, Math.min(1, dot(a, b)))),
      k = Math.sin(halfi3) / norm;
  return norm && [Math.cos(halfi3), axis[2] * k, -axis[1] * k, axis[0] * k];
}

function eulerFromQuaternion(q) {
  return [
    Math.atan2(2 * (q[0] * q[1] + q[2] * q[3]), 1 - 2 * (q[1] * q[1] + q[2] * q[2])) * degrees,
    Math.asin(Math.max(-1, Math.min(1, 2 * (q[0] * q[2] - q[3] * q[1])))) * degrees,
    Math.atan2(2 * (q[0] * q[3] + q[1] * q[2]), 1 - 2 * (q[2] * q[2] + q[3] * q[3])) * degrees
  ];
}

function cartesian(spherical) {
  var i1 = spherical[0] * radians,
      i2 = spherical[1] * radians,
      cosi2 = Math.cos(i2);
  return [
    cosi2 * Math.cos(i1),
    cosi2 * Math.sin(i1),
    Math.sin(i2)
  ];
}

function dot(a, b) {
  for (var i = 0, n = a.length, s = 0; i < n; ++i) {
    s += a[i] * b[i];
  }
  return s;
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}




});
