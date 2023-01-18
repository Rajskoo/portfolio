const getPreferredColorScheme = () => {
    const darkQuery = "(prefers-color-scheme: dark)";
    const darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
    if (darkMQL.media === darkQuery && darkMQL.matches) {
      return "dark";
    }
  
    return "default";
  };
  
  const colorScheme =
    localStorage.getItem("color-scheme") || getPreferredColorScheme();
  document.documentElement.setAttribute("data-color-scheme", colorScheme);

  document.getElementById("button").onclick = () => {
    const colorScheme = document.documentElement.getAttribute("data-color-scheme");
    const newColorScheme = colorScheme === "default" ? "dark" : "default";
    document.documentElement.setAttribute("data-color-scheme", newColorScheme);
  
    localStorage.setItem("color-scheme", newColorScheme);
  };

  var acc = document.getElementsByClassName('accordion');
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    })
  }


var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
  e.preventDefault();

  var name = document.getElementById('name').value;
  var request = document.getElementById('request').value;
  var body = document.getElementById('body').value;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "rajskoo.panel@gmail.com",
    Password : "F376FA67884917BFD56FED50A9786F5AD0F6",
    To : 'itsrajskosk@gmail.com',
    From : "rajskoo.panel@gmail.com",
    Subject : name + " - " + request,
    Body : body
  }).then(
    message => alert("Email bol úspešne odoslaný!")
  );
  document.getElementById('form').reset();
  document.getElementById('textinput').reset();
});
