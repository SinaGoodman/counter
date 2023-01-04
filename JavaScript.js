let cnt = 1;

function addCnt() {
  return function () {
    document.body.children[0].textContent = cnt;
    return cnt++;
  };
}

let counter = addCnt();
