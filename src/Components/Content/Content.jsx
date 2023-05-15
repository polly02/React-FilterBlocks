import style from './style.module.scss'
import storage from '../../Storage/Storage.json'
import Item from './item'

function Content() {
    return (
        <>
            {storage.map(item => (
                <Item
                    vacancy={item.vacancy}
                    salary={item.salary}
                    workday={item.workday}
                    city={item.city} />
            ))}
        </>
    )
}

export default Content