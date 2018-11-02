const css = element => ({
  set: obj => Object
    .entries(obj)
    .forEach(entry => { element.style.setProperty(...entry) })
})

export default css
