define(function(require,exports,module){
  var d3 = require('d3');

  /**
   * pieChart
   *
   */
  function pieChart() {
    var _chart = {};

    var _width = 180;
    var _height = 180;
    var _data = [];
    var _colors = d3.scale.category20();
    var _svg = null;
    var _bodyG = null;
    var _pieG = null;
    var _radius = 90;
    var _innerRadius = 40;

    _chart.render = function(sel) {
      if (!_svg) {
        _svg = d3.select(sel).append("svg")
          .attr("height", _height)
          .attr("width", _width);
      }

      renderBody(_svg);
    };

    function renderBody(svg) {
      if (!_bodyG)
        _bodyG = svg.append("g")
        .attr("class", "body");

      renderPie();
    }

    function isArray(obj){
      return Object.prototype.toString.call(obj) == "[object Array]";
    }


    function renderPie() {
      var pie = d3.layout.pie() // <-A
        .sort(function(d) {
          return d.id;
        })
        .value(function(d) {
          return d.value;
        });

      var arc = d3.svg.arc()
        .outerRadius(_radius)
        .innerRadius(_innerRadius);

      if (!_pieG)
        _pieG = _bodyG.append("g")
        .attr("class", "pie")
        .attr("transform", "translate(" + _radius + "," + _radius + ")");

      renderSlices(pie, arc);
      setTimeout(function(){
        renderLabels(pie, arc);
      },1200);
    }

    function renderSlices(pie, arc) {
      var slices = _pieG.selectAll("path.arc")
        .data(pie(_data)); // <-B

      slices.enter()
        .append("path")
        .attr("class", "arc")
        .attr("fill", function(d, i) {
          if (isArray(_colors)) {
            return _colors[i];
          }else {
            return _colors(i);
          }
        });

      slices.transition()
        .duration(1200)
        .attrTween("d", function(d) {
          var currentArc = this.__current__; // <-C

          if (!currentArc)
            currentArc = {
              startAngle: 0,
              endAngle: 0
            };

          var interpolate = d3.interpolate(
            currentArc, d);

          this.__current__ = interpolate(1); //<-D
          return function(t) {
            return arc(interpolate(t));
          };
        });
    }

    function renderLabels(pie, arc) {
      var labels = _pieG.selectAll("text.label")
        .data(pie(_data)); // <-E

      labels.enter()
        .append("text")
        .attr("class", "label");

      labels.transition()
        .attr("transform", function(d) {
          return "translate(" + arc.centroid(d) + ")"; // <-F
        })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function(d) {
          var val = (d.data.value).toFixed();
          if (val > 3) {
            return (d.data.value).toFixed() + '%';
          }
        });
    }

    _chart.width = function(w) {
      if (!arguments.length) return _width;
      _width = w;
      return _chart;
    };

    _chart.height = function(h) {
      if (!arguments.length) return _height;
      _height = h;
      return _chart;
    };

    _chart.colors = function(c) {
      if (!arguments.length) return _colors;
      _colors = c;
      return _chart;
    };

    _chart.radius = function(r) {
      if (!arguments.length) return _radius;
      _radius = r;
      return _chart;
    };

    _chart.innerRadius = function(r) {
      if (!arguments.length) return _innerRadius;
      _innerRadius = r;
      return _chart;
    };

    _chart.data = function(d) {
      if (!arguments.length) return _data;
      _data = d;
      return _chart;
    };

    return _chart;
  }

  module.exports = pieChart;

})