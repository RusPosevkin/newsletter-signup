import { gql } from '@apollo/client';

// export const GET_FILMS = gql`
//   query Query {
//     allFilms {
//       films {
//         title
//         director
//         releaseDate
//         speciesConnection {
//           species {
//             name
//             classification
//             homeworld {
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const GET_COUNTRY = gql`
  query Query {
    country(code: "CA") {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
  }
`;
