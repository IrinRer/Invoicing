## Описание
Небольшой проект, в котором я тренировала свои навыки по адаптированию приложения под разные устройства и знакомилась с SEO оптимизацией.

## Технологии
1. React (hooks)
2. SCSS (Modular styles), 
3. TypeScript
4. classnames

## Что было сделано
1. Реализован адаптив под различные устройства. 

Хук useWindowSize определяет ширину viewport и в соответствии с этим рендерится нужный компонент. При достижении определенной ширины меню скрывается и появляется burger menu. При клике на burger menu оно закрывается и открывается, контроль за этим осуществляется через изменения локального состояния.

```
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };
```
Важно изменять state основываясь на прошлом значение, так как функция setIsOpen асинхронная. 

2. В качестве базы данных я решила использовать обычный JavaScript объект. Так как приложение не большое я не делала store. Данные передаются от родителей к дочерним компонентам в виде props. Props driling'а нет, так как передача не затрагивает более двух дочерних компонентов. 

3. При нажатии на кнопку Change plan можно соответственно сменить тариф. 

Для этого я создала отдельный JavaScript объект. 

```
export const bd: Array<IDataHeader> = [
  {
    header: 'Invoicing Start',
    price: '6,99',
    header_features: 'Invoicing Premium',
    price_features: '20.99',
  },
  {
    header: 'Basic',
    price: '3,22',
    header_features: 'Basic',
    price_features: '10.99',
  },
  {
    header: 'Basic++',
    price: '4,12',
    header_features: 'Basic++',
    price_features: '15.34',
  },
];
```

Затем по bd можно пройтись с помощью метода map и заполнить компонет. 

4.Благодаря TypeScript я сделала Enum, который содержал название роутов. Enum очень удобно использовать при создании путей роутов, это исключает ошибки в их написании, а значит сокращает время отладки приложения, если в этом была допущена ошибка.

```
export enum RouteEnum {
  PROFILE = 'profle',
  SECURITY = 'security',
  NOTIFICATIONS = 'notifications',
  E_INVOICING = 'e-invoicing',
  BUSINESS_PROFILE = 'business-profile',
  PLAN_LIMITS = '/',
  TEAM = 'team',
}
```
5. SEO-оптимизация 100% по LightHouse

6. Accessibility 94% по LightHouse

7. Прогресс формируется динамически, основываясь на базе данных. 

Пример фрагмента базы данных. 

```
 {
    header: 'Team members',
    first_number: '3',
    second_number: '6',
    color: 'blue',
    text_under_line: 'Need more members?',
  }
 ```
first_number - это сколько должно быть заполнено.

second_number - это всего. 

Затем внутри компонента определяется сколько должно быть закрашено.

``
width.current = (widthLine * Number(item.first_number)) / Number(item.second_number);
``

widthLine - длина линии.

## Как запустить

1. Клонируете репозиторий

``
git clone https://github.com/IrinRer/Invoicing.git
``

2. Устанавливаете зависимости

``
npm i
``

3. Запускаете проект

``
npm start
``
