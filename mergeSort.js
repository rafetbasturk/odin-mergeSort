// for loop
function fib(n) {
  let arr = [0, 1]
  for (let i = 0; i < n - 2; i++) {
    arr = [...arr, arr[i] + arr[i + 1]]
  }
  console.log(arr);
  return arr[arr.length - 1]
}

// recursive fib
// dangerous for big numbers
function fibRecursive(n) {
  return n < 2 ? n : fibRecursive(n - 1) + fibRecursive(n - 2)
}

// mergeSort
const arr = [5, 1, 7, 2, 99, 72, 16, 61, 34, 4, 44, -5]

const merge = (left, right) => {
  let result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result = [...result, left[0]]
      left.shift()
    }
    else {
      result = [...result, right[0]]
      right.shift()
    }
  }
  return [...result, ...left, ...right]
}

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }

  const divider = Math.floor(arr.length / 2)
  const left = arr.slice(0, divider)
  const right = arr.slice(divider)

  return merge(mergeSort(left), mergeSort(right))
}

const res = mergeSort(arr)
console.log(res);