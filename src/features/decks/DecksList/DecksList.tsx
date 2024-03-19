import s from './DecksList.module.css'
import {Deck,} from "../decks-api.ts";
import {DeckItem} from "./DeckItem/DeckItem.tsx";
import {useDecks} from "./useDecks.ts";


export const DecksList = () => {
 const {decks} = useDecks()

  return <ul className={s.list}>
            {decks.map((deck:Deck)=> <DeckItem deck={deck} key={deck.id}/>)}
        </ul>
}
