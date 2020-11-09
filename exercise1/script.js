function checkPassword()
{
  var password1 = p.p1.value;
  var password2 = p.p2.value;
  if(password1 == password2 && (password1.length >= 8 && password2.length >= 8))
  {
    alert("You have successfully validated your password");
  }
  else if(password1 != password2 && (password1.length >= 8 && password2.length >= 8))
  {
    alert("The passwords entered don't match");
  }
  else if(password1 == password2 && (password1.length < 8 || password2.length < 8))
  {
    alert("The passwords are not at least 8 characters long");
  }
  else if(password1 != password2 && (password1.length < 8 || password2.length < 8))
  {
    alert("The passwords entered don't match and the passwords are not at least 8 characters long");
  }
}
