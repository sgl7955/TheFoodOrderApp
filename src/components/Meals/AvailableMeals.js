import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "최고급 생선으로 만나는 일본!",
    price: 22.9,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "독일의 명물!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "미국의 맛!",
    price: 12.9,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "건강 그리고 초록",
    price: 18.9,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
