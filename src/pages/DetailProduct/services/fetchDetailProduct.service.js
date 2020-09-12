import { API_URL } from '../../../commons/settings';
import { setCurrencyValue } from '../../../commons/utils/currency-type.utils';


const responseDetailInformation = (itemResult, itemResultDetail, itemName, resultCategories) => {

  const picture = !!itemResult ? itemResult.pictures[0].url || '': null;

  const categories = !!resultCategories && resultCategories.path_from_root.length > 0 ? resultCategories.path_from_root.map(name => name.name) : '';

  return {
    author: {
      name: itemName.nickname,
      lastname: itemName.nickname,
    },
    categories: categories,
    item:
      {
        id: itemResult.id,
        title: itemResult.title,
        price:
          {
            currency: itemResult.currency_id,
            amount: setCurrencyValue(itemResult.price),
            decimals: itemResult.price,
          },
        picture: picture,
        condition: itemResult.condition,
        free_shipping: itemResult.shipping.free_shipping,
        sold_quantity: itemResult.sold_quantity,
        description: itemResultDetail.plain_text,
        link: itemResult.permalink
      }
  };

};

export const fetchDetailProduct = async (id) => {
  const urlItem = `${API_URL}items/${id}`;
  const urlDetail = `${API_URL}items/${id}/description`;


  let resultItem = await fetch(urlItem);
  resultItem = await resultItem.json();

  let resultDetail = await fetch(urlDetail);
  resultDetail = await resultDetail.json();

  const urlName = `${API_URL}users/${resultItem.seller_id}/`;

  let resultName = await fetch(urlName);
  resultName = await resultName.json();

  const urlCategory = `${API_URL}categories/${resultItem.category_id}/`;

  let resultCategories = await fetch(urlCategory);
  resultCategories = await resultCategories.json();

  return responseDetailInformation(resultItem, resultDetail, resultName, resultCategories);
};
