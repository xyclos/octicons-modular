'use strict';

var triangleDown = {
  name: 'triangle-down',
  data: { "keywords": ["arrow", "point", "direction"], "path": "<path fill-rule=\"evenodd\" d=\"M0 5l6 6 6-6z\"/>", "height": "16", "width": "12" },
  options: {
    'version': '1.1',
    'width': 12,
    'height': 16,
    'viewBox': '0 0 12 16',
    'class': 'octicon octicon-triangle-down',
    'aria-hidden': 'true'
  },

  attrLabel: function attrLabel(attrs, label) {
    if (!label) {
      return;
    }

    attrs['aria-label'] = label;
    attrs['role'] = 'img';
    delete attrs['aria-hidden'];
  },
  attrClass: function attrClass(attrs, className) {
    if (!className) {
      return;
    }

    attrs['class'] = "octicon octicon-" + this.name + " " + className;
  },
  attrScale: function attrScale(attrs, scale) {
    var actualScale = scale === 0 ? 0 : parseInt(scale) || 1;
    attrs['width'] = actualScale * parseInt(attrs['width']);
    attrs['height'] = actualScale * parseInt(attrs['height']);
    delete attrs['scale'];
  },
  attrsFormat: function attrsFormat(attributes) {
    return Object.keys(attributes).map(function (name) {
      return name + "=\"" + attributes[name] + "\"";
    }).join(' ').trim();
  },
  attrs: function attrs(options) {
    var attrs = Object.assign({}, this.options, options);
    if (!options) {
      return this.attrsFormat(attrs);
    }

    this.attrLabel(attrs, options['aria-label']);
    this.attrClass(attrs, options['class']);
    this.attrScale(attrs, options['scale']);
    return this.attrsFormat(attrs);
  },
  svg: function svg(options) {
    return "<svg " + this.attrs(options) + " >" + this.data.path + "</svg>";
  }
};

module.exports = triangleDown;
