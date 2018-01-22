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
  var uppercase = (`string.shout()`)
  var lowercase = (`string.whisper()`)
  if (`string` === $`{lowercase}`) {
    return("I can\'t hear you")
  } else if (`string` === $`{uppercase}`) {
    return("YES INDEED!")
  } else return('I love you, too.')
}
function sayHitoGrandma(string)
{
  compare(string)
}