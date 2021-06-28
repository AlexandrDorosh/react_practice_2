import './users.css';
import User from "../user/user";

export default function Users({items, selectPost}){
    return(
        <div>
            {
                items.map(value => <User key={value.id} item={value} selectPost={selectPost}/>)
            }
        </div>
    )
}