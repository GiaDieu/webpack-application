import './styles/index.scss';

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refineMoonstone: 4,
};

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refineMoonstone: 3,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
