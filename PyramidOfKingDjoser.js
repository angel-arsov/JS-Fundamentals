function djoserPyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let pyramidHeight = 0;
    let stepCounter = 0;

    if(base % 2 === 0) {
        while(base > 2) {
            stepCounter++;
            stone += ((base - 2) * (base - 2)) * increment;
            marble += ((base * 2) + ((base - 2) * 2)) * increment;
            if(stepCounter % 5 === 0) {
                lapisLazuli += ((base * 2) + ((base - 2) * 2)) * increment;
                marble -= ((base * 2) + ((base - 2) * 2)) * increment;
            }
            pyramidHeight += increment;
            base -= 2;
        }
        gold += 4 * increment;
        pyramidHeight += increment;
    }else {
        while(base > 1) {
            stepCounter++;
            stone += ((base - 2) * (base - 2)) * increment;
            marble += ((base * 2) + ((base - 2) * 2)) * increment;
            if(stepCounter % 5 === 0) {
                lapisLazuli += ((base * 2) + ((base - 2) * 2)) * increment;
                marble -= ((base * 2) + ((base - 2) * 2)) * increment;
            }
            pyramidHeight += increment;
            base -= 2;
        }
        gold += 1 * increment;
        pyramidHeight += increment;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}

djoserPyramid(23, 0.5);