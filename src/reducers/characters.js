const data = [];

export default (state = data, action) => {
  switch (action.type) {
    case "DATA":
      return action.payload;
    default:
      return state;
  }
};

const query = `
{
    characters {
      results {
        id
        image
        name
        species
        gender
        location {
          name
        }
        episode {
          episode
        }
        status
        created
      }
    }
  }
  
`;

export async function fetchData(dispatch, getState) {
  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((r) => r.json())
    .then((json) => json);
  dispatch({ type: "DATA", payload: response.data.characters.results });
}
