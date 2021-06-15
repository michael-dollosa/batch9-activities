async function getRecipeAW() {
  const IDs = await getIds();
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
}

//fn for timeout shortcut
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getIds() {
  await timeout(1500)
  const recipeId = [234, 423, 123, 134, 123];
  return recipeId;
}
async function getRecipe(id) {
  await timeout(1500)
  const recipe = { title: "Fresh Tomato Pasta", publisher: "Jonas" };
  return recipe;
}
async function getRelated(publisher) {
  await timeout(1500)
  const recipe2 = { title: "Italian Pizza", publisher: "Jonas" };
  return recipe2;
}
getRecipeAW();