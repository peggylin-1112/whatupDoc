const completedPR = {
    'trello': 'https://trello.com/c/JsjFJv9Z/2-calculate-vehicle-price',
    'files': [
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/ade6cc202040771c3aaa896613fa47cddba05ef8/src/VehicleCalculator/DamageCheckPriceReductionCalculator.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/ade6cc202040771c3aaa896613fa47cddba05ef8/src/VehicleCalculator/Enum/DamageCheckResult.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/ade6cc202040771c3aaa896613fa47cddba05ef8/src/VehicleCalculator/MotPriceReductionCalculator.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/ade6cc202040771c3aaa896613fa47cddba05ef8/src/VehicleCalculator/ServicePriceReductionCalculator.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/ade6cc202040771c3aaa896613fa47cddba05ef8/tests/VehicleCalculator/DamageCheckPriceReductionCalculatorTest.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/ade6cc202040771c3aaa896613fa47cddba05ef8/tests/VehicleCalculator/MotPriceReductionCalculatorTest.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/ade6cc202040771c3aaa896613fa47cddba05ef8/tests/VehicleCalculator/ServicePriceReductionCalculatorTest.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/ade6cc202040771c3aaa896613fa47cddba05ef8/tests/VehicleCalculator/VehiclePriceCalculatorTest.php',
    ]
};

const almostTherePR = {
    'trello': 'https://trello.com/c/JsjFJv9Z/2-calculate-vehicle-price',
    'files': [
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/2885c9b627a193cacc960ea40298e8e689b0cef0/VehcileCalculatorIterations/VehiclePriceCalculator.php',
    ]
};

const gettingTherePR = {
    'trello': 'https://trello.com/c/JsjFJv9Z/2-calculate-vehicle-price',
    'files': [
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/4fedbd7a0638c03a8025b62dc737740b45c08991/VehcileCalculatorIterations/VehiclePriceCalculator.php',
    ]
};

const poorPr = {
    'trello': 'https://trello.com/c/JsjFJv9Z/2-calculate-vehicle-price',
    'files': [
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/11d8e63fd30205aa47a992516186d4af2f7776cf/VehcileCalculatorIterations/VehiclePriceCalculator.php',
    ]
};

const getPrInfo = (pr) => {
    if (pr === 'https://github.com/peggylin-1112/vehiclePriceCalculator/pull/6') {
        return completedPR;
    }

    if (pr === 'https://github.com/peggylin-1112/vehiclePriceCalculator/pull/5') {
        return almostTherePR;
    }

    if (pr === 'https://github.com/peggylin-1112/vehiclePriceCalculator/pull/4') {
        return gettingTherePR;
    }

    if (pr === 'https://github.com/peggylin-1112/vehiclePriceCalculator/pull/2') {
        return poorPr;
    }

    throw new Error('PR not found');
}

export default getPrInfo;