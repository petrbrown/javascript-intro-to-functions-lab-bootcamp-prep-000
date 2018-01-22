function shout(string)
{
  return (string.toUpperCase())
}
function whisper(string)
{
  return (string.toLowerCase())
}
function logWhisper(string)
{
  console.log(string.toLowerCase())
}
function logShout(string)
{
  console.log(string.toUpperCase())
}
function compare(string)
{
  var uppercase = (`string`.logShout())
  var lowercase = (`string`.logWhisper())
  if (string === $`{lowercase}`) {
    return("I can\'t hear you")
  } else if (string === $`{uppercase}`) {
    return("YES INDEED!")
  } else return('I love you, too.')
}
function sayHitoGrandma(string)
{
  compare(string)
}