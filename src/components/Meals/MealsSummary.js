import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You.</h2>
      <p>
        가장 맛있는 메뉴를 선택해주세요!
      </p>
      <p>
        우리의 모든 식사는 신선한 재료와 전문 셰프들에 의해 만들어집니다!
      </p>
    </section>
  );
};

export default MealsSummary;
