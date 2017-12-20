
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested')
}

function increaseRankBy(n){
  let rank = document.getElementsByClassName('ranked-list');
  for (let i=0; i<rank.length; i++){
      rank[i].innerHTML = (rank[i] += n)
  }
}

function deepestChild(){
  let grand = document.getElementById('grand-node').querySelectorAll('div')
  return grand[grand.length-1]

}
