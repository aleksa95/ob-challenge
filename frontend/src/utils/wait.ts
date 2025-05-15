export const wait = (time = 500, val = true) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(val)
    }, time)
  })
