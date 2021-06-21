import React from 'react'
import {/*mockShadowghastRing, */mockBountiful} from '../../mockData';
import Recipe from './Recipe';


/* Builds the JSON object which represents the recipe tree. Eventually passed to react-hyper-tree */
const buildTree = data => {
    let currentId = 1;
    let builtTree;

    // Recursively render the rest of the children
    const buildChildren = (recipe) => {
        return recipe.Components.map(recipeComponent => {
            currentId += 1;
            return recipeComponent.CheapestRecipe
                ? {
                    id: currentId,
                    name: {
                        itemInfo: recipeComponent,
                        isRoot: false,
                        hasComponents: true,
                    },
                    children: buildChildren(recipeComponent.CheapestRecipe),
                }
                : {
                    id: currentId,
                    name: {
                        itemInfo: recipeComponent,
                        isRoot: false,
                        hasComponents: false,
                    },
                }
        })
    };
    
    builtTree = {
        id: currentId,
        name: {
            itemInfo: data,
            isRoot: true,
            hasComponents: true,
        },
        children: data.CheapestRecipe.Components.map(recipeComponent => {
            currentId += 1;
            return recipeComponent.CheapestRecipe
                ? {
                    id: currentId,
                    name: {
                        itemInfo: recipeComponent,
                        isRoot: false,
                        hasComponents: true,
                    },
                    children: buildChildren(recipeComponent.CheapestRecipe),
                    otherName: recipeComponent.CheapestRecipe.recipeName
                }
                : {
                    id: currentId,
                    name: {
                        itemInfo: recipeComponent,
                        isRoot: false,
                        hasComponents: false,
                    },
                }
        })
    }

    return {
        formattedTree: builtTree,
        itemsCount: currentId
    }
    
};

const RecipeBuilder = props => {
    let [builtTree, setBuiltTree] = React.useState(null);
    let renderedTree = <div />;
    let builtTreeInfo;

    if (!builtTree) {
        // TODO: Call the API here
        let response = mockBountiful;

        // Build the tree from the API response
        builtTreeInfo = buildTree(response);
        setBuiltTree(builtTreeInfo);
    }

    if (builtTree) {
        renderedTree = <Recipe data={builtTree.formattedTree} key="bounty" recipeId="recipe_tree" itemsCount={builtTree.itemsCount} />;
    }

    return renderedTree;
}

export default RecipeBuilder;