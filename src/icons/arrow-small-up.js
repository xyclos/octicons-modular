// This file is auto-generated from the modulize script. Please do not modify this file.

/* eslint-disable */
export default {
  name: 'arrow-small-up',
  data: {"keywords":["point","direction","little","tiny"],"path":"<path fill-rule=\"evenodd\" d=\"M3 5L0 9h2v2h2V9h2z\"/>","height":"16","width":"6"},
  options: {
    'version': '1.1',
    'width': 6,
    'height': 16,
    'viewBox': '0 0 6 16',
    'class': 'octicon octicon-arrow-small-up',
    'aria-hidden': 'true'
  },

  attrLabel (attrs, label) {
    if (!label) {
      return
    }

    attrs['aria-label'] = label
    attrs['role'] = 'img'
    delete attrs['aria-hidden']
  },

  attrClass (attrs, className) {
    if (!className) {
      return
    }

    attrs['class'] = `octicon octicon-${this.name} ${className}`
  },

  attrScale (attrs, scale) {
    let actualScale = scale === 0 ? 0 : parseInt(scale) || 1
    attrs['width'] = actualScale * parseInt(attrs['width'])
    attrs['height'] = actualScale * parseInt(attrs['height'])
    delete attrs['scale']
  },

  attrsFormat (attributes) {
    return Object.keys(attributes).map(name => {
      return `${name}="${attributes[name]}"`
    }).join(' ').trim()
  },

  attrs (options) {
    let attrs = Object.assign({}, this.options, options)
    if (!options) {
      return this.attrsFormat(attrs)
    }

    this.attrLabel(attrs, options['aria-label'])
    this.attrClass(attrs, options['class'])
    this.attrScale(attrs, options['scale'])
    return this.attrsFormat(attrs)
  },

  svg (options) {
    return `<svg ${this.attrs(options)} >${this.data.path}</svg>`
  }
}
