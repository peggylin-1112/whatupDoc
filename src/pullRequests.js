import fs from "fs";

const trelloTask = 'Context\n' +
    '\n' +
    'We secure our loans against the value of the vehicle a customer is looking to buy. This means that if the customer doesn’t pay their loan back, we are able to repossess the vehicle and sell it. This provides protection against losses. \n' +
    '\n' +
    'To make sure we are adequately protected, we have to correctly value the vehicles that customers are buying. This makes sure that we can sell the vehicle for a large enough amount in the event of default. \n' +
    '\n' +
    'Task\n' +
    '\n' +
    'Build logic to calculate the price of a vehicle, based on: \n' +
    '\n' +
    'Date of last MOT\n' +
    '\n' +
    'Date of last service\n' +
    '\n' +
    'Vehicle Damage\n' +
    '\n' +
    'These variables will impact the vehicle\'s value (Recommended Retail Price) as below:\n' +
    '\n' +
    'Date of last MOT\n' +
    '\n' +
    'Over 1 year ago - reduce vehicle value by (RRP * 25%)\n' +
    '\n' +
    'Between 6 months and 1 year ago -reduce vehicle value by (RRP * 5%)\n' +
    '\n' +
    'Less than 6 months ago - no impact on RRP\n' +
    '\n' +
    'Date of last service \n' +
    '\n' +
    'More than 3 years ago -  reduce vehicle value by (RRP * 30%)\n' +
    '\n' +
    'Between 1 and 3 years ago - reduce vehicle value by (RRP * 10%)\n' +
    '\n' +
    'Between 6 months and 1 year ago - reduce vehicle value by (RRP * 5%)\n' +
    '\n' +
    'Under 6 months - no impact on RRP\n' +
    '\n' +
    'Vehicle Damage\n' +
    '\n' +
    'If Red - reduce vehicle value by (RRP * 90%)\n' +
    '\n' +
    'If Orange - reduce vehicle value by (RRP * 50%) \n' +
    '\n' +
    'If Green - No impact on RRP\n' +
    '\n' +
    'Subject to a floor value of £0\n' +
    '\n' +
    'Acceptance Criteria\n' +
    '\n' +
    'Example 1\n' +
    '\n' +
    'Given a vehicle has properties below:\n' +
    '\n' +
    'RRP: £10000\n' +
    'MOT: Over 1 year\n' +
    'Service: Under 6 months\n' +
    'DamageCheck: Orange\n' +
    '\n' +
    'When we ask for the final price of vehicle\n' +
    'Then the price is £2500 \n' +
    '\n' +
    'Calculations: 10,000 - 2,500 (MOT) - 0 (Service) - 5,000 (DamageCheck)\n' +
    '\n' +
    'Example 2\n' +
    '\n' +
    'Given a vehicle has properties below:\n' +
    '\n' +
    'RRP: £10000\n' +
    'MOT: Over 1 year\n' +
    'Service: Under 6 months\n' +
    'DamageCheck: Red\n' +
    '\n' +
    'When we ask for the final price of vehicle\n' +
    'Then the price is £0 \n' +
    '\n' +
    'Calculations: 10,000 - 2,500 (MOT) - 0 (Service) - 9,000 (DamageCheck) = -1500, use floor of 0';

const completedPR = {
    'trello': trelloTask,
    'files': [
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/src/VehicleCalculator/DamageCheckPricePriceReductionCalculator.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/src/VehicleCalculator/Enum/DamageCheckResult.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/src/VehicleCalculator/MotPricePriceReductionCalculator.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/src/VehicleCalculator/PriceReductionCalculator.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/src/VehicleCalculator/ServicePricePriceReductionCalculator.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/src/VehicleCalculator/ValueObject/Vehicle.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/src/VehicleCalculator/VehiclePriceCalculator.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/tests/VehicleCalculator/DamageCheckPriceReductionCalculatorTest.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/tests/VehicleCalculator/MotPriceReductionCalculatorTest.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/tests/VehicleCalculator/ServicePriceReductionCalculatorTest.php',
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/059bf2935577f327ad12b5b755743cb5a115048a/tests/VehicleCalculator/VehiclePriceCalculatorTest.php',
    ]
};

const prFour = fs.readFileSync('./src/prFour.php', 'utf8');

const almostTherePR = {
    'trello': trelloTask,
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

const gettingTherePR = {
    'trello': trelloTask,
    'files': [
        'https://raw.githubusercontent.com/peggylin-1112/vehiclePriceCalculator/403ba0446e79c2f81e2e37589a6ff4f65e27dcd9/VehcileCalculatorIterations/VehiclePriceCalculator.php',
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

    throw new Error('PR not found');
}

export default getPrInfo;