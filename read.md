## Vehicle Price Calculator

This code calculates the price of a vehicle based on its Recommended Retail Price (RRP), date of last MOT, date of last service, and vehicle damage. The price is adjusted according to the following criteria:

- Date of last MOT:
  - Over 1 year ago: reduce vehicle value by (RRP * 25%)
  - Between 6 months and 1 year ago: reduce vehicle value by (RRP * 5%)
  - Less than 6 months ago: no impact on RRP

- Date of last service:
  - More than 3 years ago: reduce vehicle value by (RRP * 30%)
  - Between 1 and 3 years ago: reduce vehicle value by (RRP * 10%)
  - Between 6 months and 1 year ago: reduce vehicle value by (RRP * 5%)
  - Under 6 months: no impact on RRP

- Vehicle Damage:
  - If Red: reduce vehicle value by (RRP * 90%)
  - If Orange: reduce vehicle value by (RRP * 50%)
  - If Green: No impact on RRP

The final price is subject to a floor value of £0.

### Adding New Requirements

To add new requirements or modify existing ones, you can create new classes that implement the `PriceReductionCalculator` interface and add them to the `VehiclePriceCalculator` class. This way, the code complies with the open-closed principle, allowing for easy extension without modifying existing code.

For example, if you want to add a new factor that affects the vehicle price, create a new class that implements `PriceReductionCalculator` and add the logic for the new factor in the `calculatePriceReduction` method. Then, update the `VehiclePriceCalculator` class to include the new calculator in the `calculatePrice` method.