function buildAWall(strArr) {
    let concreteArray = [];
    let totalConcrete = 0;
    let sections = strArr.map(Number);

    while (sections.length > 0) {
        let currentConcrete = 0;
        for(let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                currentConcrete += 195;
                sections[i]++;
            }else {
                sections.splice(i, 1);
                i--;
            }
        }
        if (currentConcrete !== 0) {
            concreteArray.push(currentConcrete);
            totalConcrete += currentConcrete;
        }
    }
    let finalCost = totalConcrete * 1900;

    console.log(`${concreteArray.join(', ')}`);
    console.log(`${finalCost} pesos`);
}

buildAWall(['21', '25', '28']);