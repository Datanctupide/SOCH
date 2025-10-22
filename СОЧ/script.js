let btn = document.getElementById(b)
let div = document.getElementById(d1)
let div2 = document.getElementById(d2)

btn.addEventListener("click", function () {
  const loginInput = document.getElementById(l).value;
  const passwordInput = document.getElementById(p).value;

  fetch('users.json')
    .then(users => {
      const foundUser = users.find(user =>
        user.login === loginInput && user.password === passwordInput
      );

      if (foundUser) {
        div.hidden = true;
        div2.hidden = false;
      } 
      else {
        div.hidden = false;
        div2.hidden = true;
      }
    })
    .catch(error => {
      console.error("Ошибка:", error);
    });
});
