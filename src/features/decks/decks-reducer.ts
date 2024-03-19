import {AddDeckParams, Deck} from "./decks-api.ts";

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {

    case "SET-DECKS":
      return {...state, decks: action.decks}
    case "ADD-DECK":
      return {...state, decks: [action.deck, ...state.decks  ] }
    default:
      return state
  }
}

///ACTIONS
export const setDecksAC = (decks:Deck[]) => ({type:"SET-DECKS", decks:decks} as const)
export const addDeckAC = (deck:Deck) => ({type:"ADD-DECK", deck:deck} as const)
/// TYPES
type DecksActions = | ReturnType<typeof setDecksAC>
                    | ReturnType<typeof addDeckAC>
