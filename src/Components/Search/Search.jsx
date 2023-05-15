import style from './style.module.scss'
import { Input, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

function Search() {

    const [input, setInput] = useState('');

    function showInputValue(){
        console.log(input);
    }

    return (
        <div className={style["wrapper"]}>
            <Input className={style["search-input"]}
                onChange={ (event) => setInput(event.target.value)}
                icon={<IconSearch />}
                placeholder="Введите название вакансии"
                rightSection={<Button className={style["button"]} onClick={showInputValue}>Поиск</Button>}
            />
        </div>
    )
}

export default Search