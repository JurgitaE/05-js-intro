console.clear();
const sectionNo = [1, 2, 3, 4, 5, 6];
const teamMembers = ['Audrius', 'Inga', 'Jurga', 'Mindaugas', 'Modestas', 'Saulius'];
let shuffledNumbers = [...sectionNo].sort(function () {
    return Math.random() - 0.5;
});
console.log('initial array', sectionNo);
console.log(`random uzduotys`, shuffledNumbers);
console.log(teamMembers.map((a, index) => `${a}: ${shuffledNumbers[index]}`));