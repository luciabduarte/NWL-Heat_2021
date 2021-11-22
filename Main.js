//trocar os links por meio do javascript
//variaveis: let(pode mudar) ou const(não pode)
//function showMeSomething() {
//   alert(links.instagram)
//}
const linksSocialMidia = {
  github: 'jakeliny',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly'
}
// showMeSomething() chama a função

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`
    // alert(li.children[0].href)
  }
  //document.getElementById('userName').textContent = 'Olivia'
  // userName.textContent = 'Lucy'
}
changeSocialMedia()
//trocou as infomrações para a dela
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    }) //passa as informações para a função + promisses que pega respostas de algo
}
getGitHubProfileInfos()
