// Задание первого уровня 1
// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allDogNames = {
  django: "django",
  tom: "tom",
  buster: "buster",
} as const;

// type -> "django" | "tom" | "buster"
type AllDogNames = typeof allDogNames[keyof typeof allDogNames];

type FIXME = Array<
  "initial" | "inWork" | "buyingSupplies" | "producing" | "fullfilled"
>;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

export const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
  const filteredStates = [] as FIXME;
  orderStates.forEach((element) => {
    if (element !== "buyingSupplies" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
