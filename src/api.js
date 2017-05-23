const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
]

export default () => {

  console.log("API HAS BEEN CALLED");

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}