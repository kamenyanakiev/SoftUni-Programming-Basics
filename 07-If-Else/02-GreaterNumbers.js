function greaterNumbers(numbers) {
    console.log(Math.max.apply(null, numbers));
}
greaterNumbers([5, 3]);