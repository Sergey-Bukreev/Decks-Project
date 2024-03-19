import {AppDispatch, useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {Deck} from "../decks-api.ts";
import {useEffect} from "react";
import {getDecksTC} from "../decks-thunks.ts";

export const useDecks = () => {
    const dispatch:AppDispatch = useAppDispatch()
    const decks:Deck[] = useAppSelector(state=> state.decksReducer.decks)
    useEffect(() => {
        dispatch(getDecksTC())
    }, [dispatch]);
    return {decks}
}