import { gql } from "@apollo/client";

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      productTitle
      productDescription
      price
      quantity
    }
  }
`;

//add posts to users **not mvp will work later**

// export const QUERY_USER = gql`
//   {
//     user {
//       firstName
//       lastName
//       orders {
//         _id

//         products {
//           _id
//           name
//           description
//           price
//           quantity
//           image
//         }
//       }
//     }
//   }
// `;
