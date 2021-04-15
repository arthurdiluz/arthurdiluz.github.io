window.addEventListener('load', _ => {
    const infoElement = document.querySelector('#shortInfo')
    const divInfo = document.createElement('div')
    const aElement = document.createElement('a')
    const age = String(moment().diff('1999-07-30', 'years'))

    aElement.href = '../static/resume.pdf'
    aElement.target = '_blank'
    aElement.text = 'read curriculum vitae'
    divInfo.textContent = `${age} years old · bandeirantes, paraná, brasil`
    infoElement.appendChild(divInfo)
    infoElement.appendChild(aElement)
})
