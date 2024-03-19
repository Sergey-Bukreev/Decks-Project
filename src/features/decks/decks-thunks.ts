import {Dispatch} from "react";
import {AddDeckParams, Deck, decksAPI} from "./decks-api.ts";
import {addDeckAC, setDecksAC} from "./decks-reducer.ts";

export const getDecksTC = () => (dispatch:Dispatch<any>) => {
    decksAPI.getDecks()
        .then((response) => {
            dispatch(setDecksAC(response.data.items))
        })
}
export const addDeckTC = (model:AddDeckParams) => (dispatch:Dispatch<any>) => {
    return decksAPI.addDeck(model)
                .then((response)=> {
                 dispatch(addDeckAC(response.data))
            })
}