sectionArray = ['overview', 'research', 'examples', 'credits']
activeSection = 'overview'

console.log("script on.")

function showSection(current){
    console.log("switch to " + current)
    document.getElementById(activeSection).classList.remove('active')
    document.getElementById(activeSection+"Section").classList.remove('visible')

    document.getElementById(current).classList.add('active')
    document.getElementById(current+"Section").classList.add('visible')
    activeSection = current
}