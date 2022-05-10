export const sortList = (arr, sortedBy, sortType) => arr.sort((a, b) => {
  if (sortedBy === 'ascending') {
    if (a[sortType] < b[sortType]) {
      return -1
    } if (a[sortType] > b[sortType]) {
      return 1
    }
    return 0
  }
  if (a[sortType] > b[sortType]) {
    return -1
  } if (a[sortType] < b[sortType]) {
    return 1
  }
  return 0
})
export default sortList
