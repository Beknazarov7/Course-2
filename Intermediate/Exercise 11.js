function capitalizeWords(sentence) {
    const words = sentence.split(" ");

    const capitalizedWords = words.map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
}

const sentence = "hello world, this is a test sentence.";
console.log(capitalizeWords(sentence));  // Outputs: "Hello World, This Is A Test Sentence."
