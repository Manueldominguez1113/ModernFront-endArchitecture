import React from 'react';
import ProductListItem from "./ProductListItem";

export default {title: 'ProductListItem'};

export const standard = ()=> <ProductListItem/>



/*  preform stories. use component stories as seen above
import React from 'react';
import { storiesOf } from "@storybook/react";
import ProductListItem from "./ProductListItem";

storiesOf('Product List Item', module)

.add('standard',()=><ProductListItem/>); //StoriesOf is a component of storybook, making it easier than ever to create storyboards. using a simple add function to name the storyboard, and a function of where it's from.
*/
