import React from 'react';

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({children}) => {

    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
        // If you wanted children to be able to change meals state, then
        // set value={meals, setMealsList}
        // Then they will also have access to the function that sets meals
        <MealsContext.Provider value={({meals})} >
            {children}
        </MealsContext.Provider>
    );
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;