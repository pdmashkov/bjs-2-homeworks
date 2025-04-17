function compareArrays(arr1, arr2) {
    const result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);

    return result;
}

function getUsersNamesInAgeRange(users, gender) {
    const result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, arr) => {
        acc += item;

        if (index === arr.length - 1) {
            return acc / arr.length;
        }
        return acc;
    }, 0);

    return result;
}