import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import './style.css'

const SearchEmoji = () => {

    const [emoji, setEmoji] = useState([]);
    const [searchedEmoji, setSearchedEmoji] = useState('');

    const getEmoji = async () => {
        const resEmoji = await fetch('https://run.mocky.io/v3/68a8487c-0962-40fb-8e8e-c58e7d53e126')
        const mog = await resEmoji.json()
        setEmoji(mog);
        console.log(emoji)
    }

    const handleSearchData = (e) => {
        setSearchedEmoji(e);
    }

    useEffect(() => {
        getEmoji();

    }, [])

    return(
        <div className="SearchEmoji">
        <div>
        <input onChange={(e) => handleSearchData(e.target.value)} className="form-control w-50 mx-auto mb-4 d-inline-block" type="text" placeholder="serach Emoji"/>
        <Button btnContent={'Search'}/>
        </div>
            
            {emoji && emoji.map((item) => {
                return(
                    <div key={item.title}>
                    {item.title === searchedEmoji ? <div>{item.symbol}</div> : ''}
                    </div>
                )
            })}
            
        </div>
    )
}
export default SearchEmoji;